import React, { useState } from 'react';
import { User, Key } from 'lucide-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login with:', { username, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="text-2xl font-bold">nuntium.</div>
        <nav className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Tags</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="border border-black rounded-full px-4 py-2 text-sm">Login</a>
        </nav>
      </header>

      {/* Login Form */}
      <main className="flex justify-center items-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-md p-8">
          <h1 className="text-4xl font-bold text-center mb-2">Welcome back!</h1>
          <p className="text-gray-600 text-center mb-8">Sign in to get the most out of nuntium.</p>

          <form onSubmit={handleLogin}>
            <div className="mb-4 relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-gray-100 rounded-md py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-black"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-6 relative">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-gray-100 rounded-md py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-black rounded border-gray-300"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-gray-600 hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full border border-black rounded-md py-3 px-4 text-lg font-medium hover:bg-black hover:text-white transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

