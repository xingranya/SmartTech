import React from 'react';
import { PARTNERS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

// Realistic 12-week data with fluctuations (noise)
const dataGrowth = [
  { name: 'W1', users: 142, apiCalls: 0.8 },
  { name: 'W2', users: 165, apiCalls: 1.1 },
  { name: 'W3', users: 248, apiCalls: 1.9 }, // Early adoption spike
  { name: 'W4', users: 225, apiCalls: 2.3 }, // Slight user churn
  { name: 'W5', users: 310, apiCalls: 2.8 },
  { name: 'W6', users: 480, apiCalls: 4.5 }, // Marketing campaign effect
  { name: 'W7', users: 520, apiCalls: 4.8 }, // Growth slowing
  { name: 'W8', users: 495, apiCalls: 5.2 }, // Plateau
  { name: 'W9', users: 750, apiCalls: 7.4 }, // Big partnership announcement
  { name: 'W10', users: 1120, apiCalls: 9.8 },
  { name: 'W11', users: 1080, apiCalls: 10.5 }, // Fluctuation
  { name: 'W12', users: 1450, apiCalls: 13.2 }, // Quarter end push
];

const EcosystemPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">生态合作体系</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          与行业领袖共建互联未来。通过 API 集成共享收益，为开发者提供强大的技术平台。
        </p>
      </div>

      {/* Partners Grid */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">战略合作伙伴</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {PARTNERS.map(partner => (
            <div 
              key={partner.id} 
              className="w-48 h-32 bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center hover:shadow-xl transition-all hover:border-brand-300 group p-4 cursor-pointer"
              onClick={() => {
                // 根据合作伙伴类型跳转到相应页面
                const urls: Record<string, string> = {
                  'Grid': partner.name === '中国石油' ? 'https://www.cnpc.com.cn/cnpc/index.shtml' : 'http://www.sgcc.com.cn/html/sgcc_main/gb/index.shtml',
                  'Cable': 'https://www.fese.cn',
                  'Tech': partner.name === '华为' ? 'https://www.huawei.com' : 
                          partner.name === '西门子' ? 'https://www.siemens.com' : '#'
                };
                window.open(urls[partner.type], '_blank');
              }}
            >
              <div className="flex-1 flex items-center justify-center w-full p-2">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="h-16 w-auto object-contain filter transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-xl font-bold text-brand-600">{partner.name}</span>
              </div>
              <span className="text-xs text-slate-400 mt-1 font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cooperation Model */}
      <div className="bg-brand-50 rounded-3xl p-8 md:p-12 mb-20">
         <h2 className="text-2xl font-bold text-slate-800 mb-8">合作模式</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="bg-white p-8 rounded-2xl shadow-sm">
             <h3 className="text-xl font-bold text-brand-600 mb-4">API 收益分成</h3>
             <p className="text-slate-600 mb-4">
               开发者和集成商通过 API 成功接入客户后，可获得订阅收入的 <span className="font-bold text-slate-900">20%</span> 作为分成。
             </p>
             <ul className="list-disc list-inside text-slate-500 space-y-2">
               <li>透明的收益仪表盘</li>
               <li>按月自动结算</li>
               <li>最高优先级技术支持</li>
             </ul>
           </div>
           <div className="bg-white p-8 rounded-2xl shadow-sm">
             <h3 className="text-xl font-bold text-brand-600 mb-4">硬件 OEM 合作</h3>
             <p className="text-slate-600 mb-4">
               电缆制造商可将我们的传感器直接预装集成到生产线中（预装模式）。
             </p>
             <ul className="list-disc list-inside text-slate-500 space-y-2">
               <li>支持白标（White-label）定制</li>
               <li>批量采购阶梯折扣</li>
               <li>联合市场推广</li>
             </ul>
           </div>
         </div>
      </div>

      {/* Data Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6">活跃开发者增长 (人)</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataGrowth} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis 
                  dataKey="name" 
                  fontSize={12} 
                  tickMargin={10} 
                  axisLine={false} 
                  tickLine={false}
                  tick={{fill: '#64748b'}}
                />
                <YAxis 
                  fontSize={12} 
                  axisLine={false} 
                  tickLine={false}
                  tick={{fill: '#64748b'}}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  cursor={{ fill: '#f1f5f9' }}
                />
                <Legend />
                <Bar dataKey="users" fill="#0066CC" radius={[4, 4, 0, 0]} name="活跃开发者" barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6">API 调用量 (百万次/周)</h3>
          <div className="h-72">
             <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataGrowth} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis 
                  dataKey="name" 
                  fontSize={12} 
                  tickMargin={10}
                  axisLine={false} 
                  tickLine={false}
                  tick={{fill: '#64748b'}}
                />
                <YAxis 
                  fontSize={12}
                  axisLine={false} 
                  tickLine={false}
                  tick={{fill: '#64748b'}}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="apiCalls" 
                  stroke="#f97316" 
                  strokeWidth={3} 
                  dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} 
                  activeDot={{ r: 7, strokeWidth: 0 }} 
                  name="API请求数" 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemPage;