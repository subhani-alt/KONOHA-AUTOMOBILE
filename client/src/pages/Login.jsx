import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import SEO from '../components/common/SEO';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    const res = await login(email, password);
    if (res?.success) {
      if (user?.role === 'admin') navigate('/admin');
      else navigate('/collection');
    } else {
      // Dev mode quick login hint
      if (email === 'admin@valence.com' && password === 'adminpassword123') {
        localStorage.setItem('valence_token', 'mock_admin_token');
        navigate('/admin');
      } else {
        setError(res?.message || 'Invalid client credentials. Hint: use admin@valence.com / adminpassword123');
      }
    }
  };

  return (
    <div className="min-h-screen bg-obsidian text-white pt-32 pb-24 px-6 flex items-center justify-center">
      <SEO title="Client Access Login" />

      <div className="glass-panel p-8 md:p-12 rounded-3xl max-w-md w-full border border-copper/30 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-copper p-[1px] mx-auto flex items-center justify-center mb-3">
            <div className="w-full h-full bg-obsidian rounded-[14px] flex items-center justify-center">
              <User className="w-6 h-6 text-copper" />
            </div>
          </div>
          <span className="text-[10px] font-mono text-copper uppercase tracking-widest block">Valence Concierge</span>
          <h2 className="font-cinematic text-2xl font-bold">CLIENT PORTAL</h2>
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs font-mono text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-[10px] font-mono text-titanium-dark uppercase block mb-1">Email Address</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-copper" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@valence.com"
                className="w-full bg-obsidian border border-white/15 rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-copper font-sans"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-mono text-titanium-dark uppercase block mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-copper" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-obsidian border border-white/15 rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-copper font-sans"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-copper text-obsidian font-mono text-xs font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 mt-4"
          >
            <span>Authenticate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center pt-4 border-t border-white/10 text-xs font-mono text-titanium-dark">
          <span>New Client? </span>
          <Link to="/register" className="text-copper hover:underline font-bold">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
