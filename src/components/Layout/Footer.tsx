import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ChevronRight } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">SmartTech</h3>
          <p className="text-sm text-slate-400">
            通过新一代传感器与边缘 AI 解决方案，赋能工业智能，引领数字化转型。
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">产品中心</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-brand-400">智能传感器</Link></li>
            <li><Link to="/products" className="hover:text-brand-400">边缘计算主机</Link></li>
            <li><Link to="/saas" className="hover:text-brand-400">SaaS 平台</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">支持与服务</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-brand-400">技术文档</Link></li>
            <li><Link to="/services" className="hover:text-brand-400">API 参考手册</Link></li>
            <li><Link to="/services" className="hover:text-brand-400">联系销售</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">关注我们</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-brand-400" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
            {/* Add more social icons as needed */}
          </div>
          <div className="mt-4">
            <p className="text-xs text-slate-500">订阅我们的最新动态</p>
            <div className="flex mt-2">
              <input type="email" placeholder="您的邮箱" className="bg-slate-800 text-white text-sm px-3 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-brand-500 w-full" />
              <button className="bg-brand-600 px-3 py-2 rounded-r hover:bg-brand-700 text-white"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} SmartTech Solutions Inc. 保留所有权利.
      </div>
    </div>
  </footer>
);

export default Footer;