import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Activity, Server, ShieldCheck } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1">
    <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 text-brand-600">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-slate-800">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              端侧智能的 <span className="text-brand-400">核心引擎</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              通过多模态传感器、AI 驱动的边缘计算和预测性分析，全面赋能您的工业基础设施，实现智能化升级。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-colors">
                探索硬件产品 <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/saas" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-colors">
                查看 SaaS 方案
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">核心能力</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">从高精度数据采集到云原生决策辅助，我们覆盖了工业物联网的全生命周期。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={Activity} 
              title="多模态感知" 
              desc="同步采集振动、声学和热成像数据，对关键资产进行全方位无死角监控。" 
            />
            <FeatureCard 
              icon={Cpu} 
              title="边缘计算" 
              desc="本地 AI 推理减少延迟和带宽消耗，实现毫秒级异常实时检测。" 
            />
            <FeatureCard 
              icon={Server} 
              title="SaaS 平台" 
              desc="集中化设备管理、健康评分体系及预测性维护仪表盘。" 
            />
            <FeatureCard 
              icon={ShieldCheck} 
              title="工业级安全" 
              desc="端到端数据加密，支持针对关键基础设施的私有化部署方案。" 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">准备好升级您的基础设施了吗？</h2>
            <p className="text-slate-600">加入智能电网和石化行业的领军者行列。</p>
          </div>
          <Link to="/services" className="bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-shadow hover:shadow-lg">
            预约演示
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;