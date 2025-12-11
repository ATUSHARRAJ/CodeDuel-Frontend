import React, { useState } from "react";
import { FaLaptopCode, FaLinkedin, FaEnvelope, FaGoogle } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

/**
 * Custom button component to unify styling and handling of loading/disabled state.
 */
const SocialButton = ({ children, onClick, loading, provider, color, icon: IconComponent }) => {
  const baseClasses = "w-full flex items-center justify-center py-3.5 px-4 font-bold rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg relative";
  
  // Dynamic background based on provider
  let bgClasses = "";
  let loadingText = `Continue with ${provider}`;

  if (provider === 'LinkedIn') {
    bgClasses = "bg-[#0077b5] hover:bg-[#006396] text-white";
  } else if (provider === 'Gmail') {
    bgClasses = "bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white";
  } else if (provider === 'GoogleCustom') {
    // Custom style for the manual Google button wrapper (if not using the G button component)
    bgClasses = "bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white";
  }
  
  const buttonClasses = `${baseClasses} ${bgClasses} ${loading ? 'opacity-70 cursor-not-allowed pointer-events-none' : ''}`;

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={buttonClasses}
      aria-label={`Continue with ${provider}`}
    >
      {loading ? (
        <div className="flex items-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
          <span>{loadingText}</span>
        </div>
      ) : (
        <>
          {/* Icon Component (adjusting color based on provider for better contrast) */}
          {IconComponent && <IconComponent className={`text-xl mr-3 ${provider === 'LinkedIn' ? 'text-white' : 'text-gray-300'}`} />}
          {children}
        </>
      )}
    </button>
  );
};

// --- Main Component ---
const SignupPage = ({ onSignupSuccess }) => {
  const [loadingProvider, setLoadingProvider] = useState(null); 
  const [error, setError] = useState("");

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

  const handleBackendResponse = (data) => {
    if (data?.token) {
      localStorage.setItem("token", data.token);
      onSignupSuccess && onSignupSuccess(data.user ?? null);
    } else {
      setError("Invalid server response");
    }
  };

  const handleError = (msg) => {
    setError(msg || "Login failed");
    setLoadingProvider(null);
  };

  // Handler for LinkedIn/Gmail placeholders
  const handleSocialLoginPlaceholder = async (provider) => {
    setError("");
    setLoadingProvider(provider);
    try {
      // NOTE: This route should be updated to a proper LinkedIn/Email/Password route later
      const res = await axios.post(`${API_URL}/api/auth/social-login`, { provider });
      handleBackendResponse(res.data);
    } catch (err) {
      console.error(err);
      handleError(err?.response?.data?.message || "Connection to server failed.");
    } finally {
        setLoadingProvider(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-700 flex flex-col items-center">
        
        {/* Logo and Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="bg-blue-600 p-4 rounded-full mb-4 shadow-lg shadow-blue-500/30">
            <FaLaptopCode className="text-white text-4xl" />
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">CodeDuel</h1>
          <p className="text-gray-400 mt-2">Join the battle arena</p>
        </div>

        <h2 className="text-xl font-semibold text-white mb-6">Sign in to continue</h2>

        {/* Error Message */}
        {error && (
          <div className="w-full bg-red-500/10 border border-red-500/50 text-red-200 text-sm text-center p-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Social Buttons Stack */}
        <div className="w-full space-y-4">
          
          {/* 1. GOOGLE LOGIN (Official Button - Best Practice) */}
          {/* We let the GoogleLogin component render itself, removing the custom button wrapper, 
              as styling the iframe is not possible and causes errors/glitches. */}
          <div className={`flex justify-center w-full transition-all duration-200 transform ${loadingProvider ? 'opacity-70 pointer-events-none' : 'hover:scale-[1.02]'}`}>
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                setError("");
                setLoadingProvider("Google");
                try {
                  const idToken = credentialResponse?.credential;
                  if (!idToken) return handleError("No id token returned by Google");

                  // Hitting the dedicated backend endpoint
                  const res = await axios.post(`${API_URL}/api/auth/google-login`, {
                    token: idToken,
                  });

                  handleBackendResponse(res.data);
                } catch (err) {
                  console.error("Google login error:", err);
                  handleError(err?.response?.data?.message || "Google login failed");
                } finally {
                  setLoadingProvider(null);
                }
              }}
              onError={() => {
                handleError("Google Sign-In was unsuccessful. Try again.");
              }}
              useOneTap={false}
              // Set the theme and size for dark mode integration
              theme="filled_black" 
              size="large"
              width="350px" // Ensure button fills max-w-md context
            />
          </div>


          {/* 2. LINKEDIN (Custom Styled Button) */}
          <SocialButton
            onClick={() => handleSocialLoginPlaceholder("LinkedIn")}
            loading={loadingProvider === "LinkedIn"}
            provider="LinkedIn"
            icon={FaLinkedin}
          >
            Continue with LinkedIn
          </SocialButton>

          {/* 3. GMAIL (Custom Styled Button) */}
          <SocialButton
            onClick={() => handleSocialLoginPlaceholder("Gmail")}
            loading={loadingProvider === "Gmail"}
            provider="Gmail"
            icon={FaEnvelope}
          >
            Login with Email
          </SocialButton>

        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          By continuing, you agree to our Terms of Service <br /> and Privacy Policy.
        </div>
      </div>
    </div>
  );
};

export default SignupPage;