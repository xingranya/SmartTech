import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Check, Info, Shield, Truck, ChevronDown, ChevronUp } from 'lucide-react';
import { PRODUCTS, FAQS } from '../constants';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState<'specs' | 'faq'>('specs');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!product) return <div className="p-10 text-center">未找到该产品</div>;

  const handlePurchase = (type: 'buy' | 'rent') => {
    navigate(`/payment?productId=${product.id}&type=${type}`);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-slate-500 mb-8">
          <Link to="/" className="hover:text-brand-600">首页</Link> / <Link to="/products" className="hover:text-brand-600">产品中心</Link> / <span className="text-slate-800 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 h-96 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Available';
                }} 
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-gray-50 rounded-lg cursor-pointer hover:ring-2 ring-brand-400 overflow-hidden">
                   <img src={`https://source.unsplash.com/random/200x200/?tech,circuit,${i}`} className="w-full h-full object-cover opacity-80 hover:opacity-100" alt="thumbnail" onError={(e) => e.currentTarget.src = `https://via.placeholder.com/200?text=View+${i}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2">
              <span className="text-brand-600 font-bold tracking-wide text-sm uppercase">{product.category === 'Sensor' ? '智能传感器' : '边缘计算'} 系列</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">{product.description}</p>
            
            <div className="bg-brand-50/50 rounded-xl p-6 mb-8 border border-brand-100">
              <div className="flex items-baseline mb-2">
                <span className="text-3xl font-bold text-brand-700">{product.priceRange}</span>
              </div>
              <p className="text-sm text-brand-600/80 mb-0 flex items-center gap-2">
                <Shield size={16} /> 包含 2 年标准质保服务
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => handlePurchase('buy')}
                className="flex-1 bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 active:scale-95"
              >
                立即购买
              </button>
              <button 
                onClick={() => handlePurchase('rent')}
                className="flex-1 bg-white text-brand-600 border-2 border-brand-100 font-bold py-4 rounded-xl hover:bg-brand-50 transition-all active:scale-95"
              >
                设备租赁
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">核心亮点:</h4>
              <ul className="grid grid-cols-1 gap-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-600">
                    <Check size={18} className="text-green-500 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-t border-gray-200 pt-10">
          <div className="flex space-x-8 mb-8 border-b border-gray-200">
            <button 
              onClick={() => setActiveTab('specs')}
              className={`pb-4 px-2 font-medium text-lg transition-colors relative ${activeTab === 'specs' ? 'text-brand-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              技术参数
              {activeTab === 'specs' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-600"></div>}
            </button>
            <button 
              onClick={() => setActiveTab('faq')}
              className={`pb-4 px-2 font-medium text-lg transition-colors relative ${activeTab === 'faq' ? 'text-brand-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              常见问题 (FAQ)
              {activeTab === 'faq' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-600"></div>}
            </button>
          </div>

          <div className="min-h-[300px]">
            {activeTab === 'specs' ? (
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-left">
                  <tbody className="divide-y divide-gray-100">
                    {product.specs.map((spec, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-medium text-slate-600 w-1/3">{spec.label}</td>
                        <td className="p-4 text-slate-800 font-semibold">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="space-y-4 max-w-3xl">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                    >
                      <span className="font-semibold text-slate-700">{faq.q}</span>
                      {openFaqIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {openFaqIndex === idx && (
                      <div className="p-4 bg-white text-slate-600 border-t border-gray-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;