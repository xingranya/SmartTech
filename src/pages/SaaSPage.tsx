import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Star, Zap, Shield } from 'lucide-react';
import { SAAS_PLANS } from '../constants';

const SaaSPage = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState<'yearly' | 'monthly'>('yearly');

  // Helper to calculate monthly price correctly based on 20% savings for yearly
  // Yearly Price = Monthly * 12 * 0.8
  // So Monthly = Yearly / (12 * 0.8) = Yearly / 9.6
  const getMonthlyPrice = (yearPriceStr: string) => {
    const yearPrice = parseInt(yearPriceStr.replace(/[^0-9]/g, ''));
    const monthly = Math.ceil(yearPrice / 9.6);
    return monthly.toLocaleString();
  };

  return (
    <div className="bg-slate-50 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-base font-semibold text-brand-600 uppercase tracking-wider mb-2">灵活定价方案</h2>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">选择适合您车队/设备的订阅计划</h1>
          <p className="text-slate-600 text-lg">从单点监测到全球基础设施管理，我们提供可扩展的工业物联网解决方案。</p>
          
          <div className="mt-8 flex justify-center items-center gap-4">
             <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-slate-800' : 'text-slate-500'}`}>按月付费</span>
             <button 
               onClick={() => setBillingCycle(billingCycle === 'yearly' ? 'monthly' : 'yearly')}
               className="w-14 h-8 bg-brand-600 rounded-full relative transition-colors focus:outline-none"
             >
               <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 shadow-md ${billingCycle === 'yearly' ? 'left-7' : 'left-1'}`}></div>
             </button>
             <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-slate-800' : 'text-slate-500'}`}>按年付费 (省 20%)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SAAS_PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative bg-white rounded-2xl shadow-xl border transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                plan.highlight ? 'border-brand-500 ring-2 ring-brand-200 z-10 scale-105 md:scale-105' : 'border-gray-100'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  最受欢迎
                </div>
              )}
              
              <div className="p-8 border-b border-gray-100">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-slate-900">
                    {billingCycle === 'yearly' ? plan.priceYearly.split(' ')[0] : '¥' + getMonthlyPrice(plan.priceYearly)}
                  </span>
                  <span className="text-slate-500 ml-2 text-sm">{billingCycle === 'yearly' ? '/公里/年' : '/公里/月'}</span>
                </div>
                <p className="text-sm text-slate-500 mb-6 bg-gray-50 p-2 rounded text-center">
                  部署费: {plan.deploymentFee}
                </p>
                <button 
                  onClick={() => navigate(`/payment?planId=${plan.id}&type=saas`)}
                  className={`w-full py-3 rounded-lg font-bold transition-colors ${
                    plan.highlight 
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-200' 
                      : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
                  }`}
                >
                  开通 {plan.name}
                </button>
              </div>

              <div className="p-8 flex-grow">
                <h4 className="font-semibold text-slate-800 mb-4">包含功能:</h4>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                        <Check size={14} className="text-green-600" />
                      </div>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Visual Comparison Chart Area (Mock) */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10 text-slate-800">功能深度对比</h3>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="grid grid-cols-4 bg-gray-50 p-4 font-semibold text-slate-700 text-sm">
               <div>核心功能</div>
               <div className="text-center">基础版</div>
               <div className="text-center text-brand-600">专业版</div>
               <div className="text-center">企业版</div>
             </div>
             {[
               { name: '数据留存', basic: '7 天', pro: '1 年', ent: '无限期' },
               { name: '服务响应 SLA', basic: '邮件支持', pro: '电话 + 邮件', ent: '7x24小时 专人' },
               { name: 'API 访问', basic: '-', pro: '只读权限', ent: '完全读写权限' },
               { name: '私有云部署', basic: '-', pro: '-', ent: '支持' },
             ].map((row, idx) => (
               <div key={idx} className="grid grid-cols-4 p-4 border-t border-gray-100 text-sm hover:bg-slate-50">
                 <div className="font-medium text-slate-600">{row.name}</div>
                 <div className="text-center text-slate-500">{row.basic}</div>
                 <div className="text-center text-brand-600 font-medium">{row.pro}</div>
                 <div className="text-center text-slate-500">{row.ent}</div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaaSPage;