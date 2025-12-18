import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, Search } from 'lucide-react';
import { PRODUCTS } from '../constants';

const ProductListPage = () => {
  const [filter, setFilter] = useState<'All' | 'Sensor' | 'Edge'>('All');
  const [sortBy, setSortBy] = useState<'Featured' | 'PriceLow' | 'PriceHigh'>('Featured');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = PRODUCTS
    .filter(p => (filter === 'All' || p.category === filter) && p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'PriceLow') return a.price - b.price;
      if (sortBy === 'PriceHigh') return b.price - a.price;
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">硬件解决方案</h1>
          <p className="text-slate-500 mt-1">高性能传感器与边缘计算主机，赋能工业现场。</p>
        </div>
        
        {/* Search */}
        <div className="relative w-full md:w-64">
           <input 
             type="text" 
             placeholder="搜索产品..." 
             className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white text-slate-900 shadow-sm"
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
           />
           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
          <Filter size={18} className="text-slate-400 mr-2" />
          <button
              onClick={() => setFilter('All')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                filter === 'All' 
                  ? 'bg-brand-100 text-brand-700' 
                  : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
              }`}
            >
              全部
            </button>
            <button
              onClick={() => setFilter('Sensor')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                filter === 'Sensor' 
                  ? 'bg-brand-100 text-brand-700' 
                  : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
              }`}
            >
              智能传感器
            </button>
            <button
              onClick={() => setFilter('Edge')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                filter === 'Edge' 
                  ? 'bg-brand-100 text-brand-700' 
                  : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
              }`}
            >
              边缘设备
            </button>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-sm text-slate-500">排序:</span>
          <div className="relative">
            <select 
              className="appearance-none bg-gray-50 border border-gray-200 text-slate-700 py-1.5 pl-3 pr-8 rounded-md text-sm focus:outline-none focus:border-brand-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="Featured">推荐</option>
              <option value="PriceLow">价格: 从低到高</option>
              <option value="PriceHigh">价格: 从高到低</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <Link to={`/products/${product.id}`} key={product.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 block">
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-slate-700">
                {product.category === 'Sensor' ? '传感器' : '边缘设备'}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-brand-600 transition-colors">{product.name}</h3>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-brand-600 font-bold">{product.priceRange}</span>
                <span className="text-xs text-brand-600 font-medium bg-brand-50 px-2 py-1 rounded">查看详情</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-500">没有找到符合条件的产品。</p>
        </div>
      )}
    </div>
  );
};

export default ProductListPage;