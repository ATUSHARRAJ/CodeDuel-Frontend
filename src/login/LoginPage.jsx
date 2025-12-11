import React, { useState } from 'react';
import { FaUser, FaLock, FaSignInAlt, FaLaptopCode, FaGoogle, FaLinkedin, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import { GoogleLogin } from "@react-oauth/google";
import axios from 'axios';

// --- Utility Component: SocialButton ---
const SocialButton = ({ children, onClick, loading, provider, icon: IconComponent, color }) => {
  const baseClasses = "w-full flex items-center justify-center py-3.5 px-4 font-bold rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg relative";
  
  let bgClasses = "";
  let loadingText = `Continue with ${provider}`;

  if (provider === 'LinkedIn') {
    bgClasses = "bg-[#0077b5] hover:bg-[#006396] text-white";
  } else if (provider === 'Email') {
    bgClasses = "bg-blue-600 hover:bg-blue-500 text-white";
  } else { // Gmail/Email/Custom fallback
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
// --- End SocialButton ---


const LoginPage = ({ onLogin, onNavigateToSignup }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loadingProvider, setLoadingProvider] = useState(null);
    
    // NEW STATE: Control the view between 'social' and 'standard' login
    const [viewMode, setViewMode] = useState('social'); 

    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

    const handleBackendResponse = (data) => {
        if (data?.token) {
            localStorage.setItem("token", data.token);
            console.log(data);
            onLogin(data.user ?? null);
            navigate('/');
        } else {
            setError("Invalid server response or missing token.");
        }
    };
    
    const handleError = (msg) => {
        setError(msg || "Login failed");
        setLoadingProvider(null);
        setIsLoading(false); // Reset standard login loading too
    };


    // --- 1. Standard Email/Password Login ---
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        if (!email || !password) {
            setError('Please enter both email/username and password.');
            setIsLoading(false);
            return;
        }

        try {
            const res = await axios.post(`${API_URL}/api/auth/login`, {
                email,
                password
            });
            
            handleBackendResponse(res.data);

        } catch (err) {
            console.error('Login error:', err.response?.data?.message || err.message);
            setError(err.response?.data?.message || 'Invalid credentials or server connection failed.');
        } finally {
            setIsLoading(false);
        }
    };

    // --- 2. Social Login Handlers ---
    const handleSocialLoginPlaceholder = async (provider) => {
        setError("");
        setLoadingProvider(provider);
        try {
            // This route is a mock for LinkedIn/Gmail
            const res = await axios.post(`${API_URL}/api/auth/social-login`, { provider, mock: true });
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
            <div className="bg-gray-800 rounded-xl shadow-2xl p-8 w-full max-w-md border border-gray-700 relative">
                
                {/* Back Button (Only visible in standard mode) */}
                {viewMode === 'standard' && (
                    <button 
                        onClick={() => setViewMode('social')}
                        className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors"
                        disabled={isLoading}
                        aria-label="Back to social login options"
                    >
                        <FaArrowLeft className="h-6 w-6" />
                    </button>
                )}

                {/* Logo/Header */}
                <div className="flex justify-center items-center mb-8">
                    <FaLaptopCode className="text-blue-400 text-5xl mr-3" />
                    <span className="text-white text-4xl font-extrabold">CodeDuel</span>
                </div>

                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    {viewMode === 'social' ? 'Sign in to continue' : 'Login with Email'}
                </h2>

                {/* Error Message */}
                {error && (
                    <div className="bg-red-700 text-white text-center p-3 rounded-md text-sm mb-6">
                        {error}
                    </div>
                )}


                {/* --- 1. SOCIAL LOGIN MODE --- */}
                {viewMode === 'social' && (
                    <div className="w-full space-y-4">
                        
                        {/* 1. GOOGLE LOGIN */}
                        <div className={`flex justify-center w-full transition-all duration-200 transform ${loadingProvider ? 'opacity-70 pointer-events-none' : 'hover:scale-[1.02]'}`}>
                            <GoogleLogin
                                onSuccess={async (credentialResponse) => {
                                    setError("");
                                    setLoadingProvider("Google");
                                    try {
                                        const idToken = credentialResponse?.credential;
                                        if (!idToken) return handleError("No id token returned by Google");

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
                                theme="filled_black" 
                                size="large"
                                width="350px"
                            />
                        </div>

                        {/* 2. LINKEDIN */}
                        <SocialButton
                            onClick={() => handleSocialLoginPlaceholder("LinkedIn")}
                            loading={loadingProvider === "LinkedIn"}
                            provider="LinkedIn"
                            icon={FaLinkedin}
                        >
                            Continue with LinkedIn
                        </SocialButton>
                        
                        {/* Separator */}
                        <div className="flex items-center py-2">
                            <div className="flex-grow border-t border-gray-700"></div>
                            <span className="flex-shrink mx-4 text-gray-500">OR</span>
                            <div className="flex-grow border-t border-gray-700"></div>
                        </div>

                        {/* 3. SWITCH TO STANDARD LOGIN */}
                        <SocialButton
                            onClick={() => setViewMode('standard')}
                            loading={!!loadingProvider}
                            provider="Email"
                            icon={FaEnvelope}
                        >
                            Continue with Email/Password
                        </SocialButton>
                    </div>
                )}


                {/* --- 2. STANDARD LOGIN FORM MODE --- */}
                {viewMode === 'standard' && (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email/Username Input */}
                        <div>
                            <label htmlFor="email" className="sr-only">Email or Username</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <FaUser className="h-5 w-5 text-gray-400" />
                                </span>
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email or Username"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white text-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <FaLock className="h-5 w-5 text-gray-400" />
                                </span>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white text-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center py-3 px-6 bg-blue-600 text-white text-xl font-bold rounded-lg hover:bg-blue-500 transition-colors duration-300 shadow-lg"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                <FaSignInAlt className="mr-3" />
                            )}
                            {isLoading ? 'Logging In...' : 'Login'}
                        </button>
                    </form>
                )}


                {/* Links for Forgot Password & Signup (Always visible) */}
                <div className="mt-8 text-center text-gray-300">
                    <button
                        onClick={() => navigate('/forgot-password')}
                        className="text-blue-400 hover:underline text-base font-semibold"
                        disabled={isLoading || loadingProvider}
                    >
                        Forgot Password?
                    </button>
                    <p className="mt-4 text-base">
                        Don't have an account?{' '}
                        <button
                            onClick={() => navigate('/signup')}
                            className="text-blue-400 hover:underline font-semibold"
                            disabled={isLoading || loadingProvider}
                        >
                            Sign up now
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;