import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, ArrowRight, Smartphone, MessageCircle, CreditCard, Smile } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock login delay
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-800">欢迎回来</h1>
          <p className="text-slate-500 text-sm mt-2">请登录以访问您的控制台</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">邮箱或用户名</label>
            <div className="relative">
              <input 
                type="text" 
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow bg-white text-slate-900" 
                placeholder="user@example.com"
              />
              <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <label className="block text-sm font-medium text-slate-700">密码</label>
              <a href="#" className="text-xs text-brand-600 hover:underline">忘记密码?</a>
            </div>
            <div className="relative">
              <input 
                type="password" 
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow bg-white text-slate-900" 
                placeholder="••••••••"
              />
              <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-brand-200"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : (
              <>登录 <ArrowRight className="ml-2" size={18} /></>
            )}
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500">或通过以下方式登录</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-3">
             <button className="flex flex-col items-center justify-center p-2 border border-gray-100 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors group">
               <div className="w-8 h-8 rounded-full bg-[#12B7F5]/10 flex items-center justify-center mb-1 group-hover:bg-[#12B7F5]/20">
                 <Smile size={18} className="text-[#12B7F5]" />
               </div>
               <span className="text-xs text-slate-600">QQ</span>
             </button>

             <button className="flex flex-col items-center justify-center p-2 border border-gray-100 rounded-lg hover:bg-green-50 hover:border-green-200 transition-colors group">
               <div className="w-8 h-8 rounded-full bg-[#07C160]/10 flex items-center justify-center mb-1 group-hover:bg-[#07C160]/20">
                 <MessageCircle size={18} className="text-[#07C160]" />
               </div>
               <span className="text-xs text-slate-600">微信</span>
             </button>

             <button className="flex flex-col items-center justify-center p-2 border border-gray-100 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors group">
               <div className="w-8 h-8 rounded-full bg-[#1677FF]/10 flex items-center justify-center mb-1 group-hover:bg-[#1677FF]/20">
                 <CreditCard size={18} className="text-[#1677FF]" />
               </div>
               <span className="text-xs text-slate-600">支付宝</span>
             </button>

             <button className="flex flex-col items-center justify-center p-2 border border-gray-100 rounded-lg hover:bg-brand-50 hover:border-brand-200 transition-colors group">
               <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mb-1 group-hover:bg-slate-200">
                 <Smartphone size={18} className="text-slate-600" />
               </div>
               <span className="text-xs text-slate-600">验证码</span>
             </button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          还没有账号? <a href="#" className="text-brand-600 font-bold hover:underline">立即注册</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;