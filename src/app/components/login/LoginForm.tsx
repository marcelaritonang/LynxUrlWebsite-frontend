"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface LoginFormProps {
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
    error?: string;
    loading?: boolean;
}

export function LoginForm({ 
    email, 
    password, 
    setEmail, 
    setPassword, 
    handleSubmit,
    error,
    loading 
}: LoginFormProps) {
    return (    
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Welcome Back!
                </h1>
                <p className="text-gray-500 mt-2">Please enter your details to sign in</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                    <div className="p-3 text-sm text-red-500 bg-red-50 rounded-lg">
                        {error}
                    </div>
                )}
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                        placeholder="Enter your email"
                        required
                        disabled={loading}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                        placeholder="Enter your password"
                        required
                        disabled={loading}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            disabled={loading}
                        />
                        <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                            Remember me
                        </label>
                    </div>
                    <Link href="/forgot-password" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                        Forgot password?
                    </Link>
                </div>

                <motion.button
                    whileHover={{ scale: loading ? 1 : 1.01 }}
                    whileTap={{ scale: loading ? 1 : 0.99 }}
                    type="submit"
                    className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg transition duration-200 font-medium ${
                        loading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                    }`}
                    disabled={loading}
                >
                    {loading ? 'Signing in...' : 'Sign In'}
                </motion.button>
            </form>

            <p className="text-center text-sm text-gray-600">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-purple-600 hover:text-purple-700 font-medium">
                    Sign up for free
                </Link>
            </p>
        </motion.div>
    );
}