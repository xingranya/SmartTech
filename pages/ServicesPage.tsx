import React from 'react';
import { SERVICES } from '../constants';
import { Activity, PenTool, Shield, BookOpen, ChevronRight, MessageSquare } from 'lucide-react';

const iconMap: any = {
  activity: Activity,
  tool: PenTool,
  shield: Shield,
  book: BookOpen,
};

const ServicesPage = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">增值服务</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            除了顶尖的硬件与软件，我们还提供专家级服务，确保您的业务运营获得最大成功。
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service List */}
          <div className="space-y-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.iconType];
              return (
                <div key={service.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600">
                      <Icon size={28} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                    <p className="text-slate-600 mb-3">{service.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-brand-600 font-bold bg-brand-50 px-3 py-1 rounded-full text-sm">{service.priceRange}</span>
                      <a href="#contact" className="text-sm font-semibold text-slate-500 hover:text-brand-600 flex items-center">
                        咨询预约 <ChevronRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact / Case Study Side */}
          <div className="space-y-8">
            {/* Case Study Mock */}
            <div className="bg-slate-800 text-white rounded-2xl p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-32 bg-brand-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
               <h3 className="text-2xl font-bold mb-6 relative z-10">客户成功案例</h3>
               <blockquote className="italic text-slate-300 text-lg mb-6 relative z-10">
                 "SmartTech 的定制驾驶舱上线后，我们在部署后的第一个季度内将事故响应时间缩短了 40%。"
               </blockquote>
               <div className="flex items-center gap-4 relative z-10">
                 <div className="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Avatar" className="w-full h-full object-cover" />
                 </div>
                 <div>
                   <div className="font-bold">运营总监</div>
                   <div className="text-sm text-slate-400">中石油西部管道公司</div>
                 </div>
               </div>
            </div>

            {/* Quick Contact Form */}
            <div id="contact" className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <MessageSquare className="mr-2 text-brand-600" /> 预约专家咨询
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">姓名</label>
                  <input type="text" className="w-full bg-white text-slate-900 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none" placeholder="您的姓名" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">公司/单位</label>
                  <input type="text" className="w-full bg-white text-slate-900 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none" placeholder="公司名称" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">感兴趣的服务</label>
                  <select className="w-full bg-white text-slate-900 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none">
                    <option>寿命预测服务</option>
                    <option>定制驾驶舱</option>
                    <option>年度巡检维护</option>
                    <option>其他</option>
                  </select>
                </div>
                <button className="w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200">
                  提交申请
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Workflow Diagram Mock */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-10 text-slate-800">服务交付流程</h2>
          <div className="flex flex-col md:flex-row justify-between items-center relative gap-8 px-4">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10"></div>
            
            {[
              { step: '01', title: '需求咨询' },
              { step: '02', title: '方案设计' },
              { step: '03', title: '实施部署' },
              { step: '04', title: '持续运维' },
            ].map((s) => (
              <div key={s.step} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center w-full md:w-48">
                <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  {s.step}
                </div>
                <div className="font-bold text-slate-800">{s.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;