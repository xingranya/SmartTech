import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Truck, ArrowLeft, Building2, Copy, Check, MessageCircle, CreditCard } from 'lucide-react';

const PaymentPage = () => {
  const [step, setStep] = useState(1);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get('productId');
  const planId = queryParams.get('planId');
  const type = queryParams.get('type') || 'buy';

  const [paymentMethod, setPaymentMethod] = useState<'alipay' | 'wechat' | 'bank'>('alipay');
  const [processing, setProcessing] = useState(false);
  
  // Bank Form State
  const [bankForm, setBankForm] = useState({ accountName: '', accountNumber: '', bankName: '', date: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const totalAmount = type === 'saas' ? '20,000' : '5,000';

  const handleNextToPay = () => {
    setStep(3);
  };

  const handleConfirmPayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setStep(4);
    }, 2000);
  };

  const Summary = () => (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
      <h3 className="font-bold text-slate-800 mb-4">订单摘要</h3>
      <div className="space-y-3 text-sm text-slate-600 pb-4 border-b border-gray-200">
        <div className="flex justify-between">
          <span>类型</span>
          <span className="font-medium capitalize">{type === 'buy' ? '购买' : type === 'rent' ? '租赁' : 'SaaS 订阅'}</span>
        </div>
        <div className="flex justify-between">
          <span>项目 ID</span>
          <span className="font-medium">{productId || planId || 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span>小计</span>
          <span className="font-medium">¥ {totalAmount}</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>优惠</span>
          <span className="font-medium">- ¥0</span>
        </div>
      </div>
      <div className="pt-4 flex justify-between items-center">
        <span className="font-bold text-slate-800">总计</span>
        <span className="font-bold text-2xl text-brand-600">¥ {totalAmount}</span>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl min-h-[80vh]">
      {/* Stepper */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center w-full max-w-2xl">
          {[1, 2, 3, 4].map((s) => (
             <React.Fragment key={s}>
               <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                 step >= s ? 'bg-brand-600 text-white shadow-lg shadow-brand-200' : 'bg-gray-100 text-gray-400 border border-gray-200'
               }`}>
                 {s < step ? <Check size={18} /> : s}
                 <div className="absolute -bottom-8 whitespace-nowrap text-xs font-medium text-slate-500">
                   {s === 1 ? '确认信息' : s === 2 ? '选择支付' : s === 3 ? '支付/填单' : '完成'}
                 </div>
               </div>
               {s < 4 && (
                 <div className="flex-1 h-1 mx-2 bg-gray-100 rounded overflow-hidden">
                   <div className={`h-full bg-brand-600 transition-all duration-500 ease-out`} style={{ width: step > s ? '100%' : '0%' }}></div>
                 </div>
               )}
             </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="md:col-span-2 space-y-8">
          
          {/* Step 1: Confirmation */}
          {step === 1 && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-in">
              <h2 className="text-xl font-bold text-slate-800 mb-6">收货/开票信息</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">联系人姓氏</label>
                    <input type="text" defaultValue="张" className="w-full bg-white text-slate-900 border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">联系人名字</label>
                    <input type="text" defaultValue="三" className="w-full bg-white text-slate-900 border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">公司名称 / 发票抬头</label>
                  <input type="text" defaultValue="未来工业科技有限公司" className="w-full bg-white text-slate-900 border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">电子邮箱</label>
                  <input type="email" defaultValue="zhangsan@example.com" className="w-full bg-white text-slate-900 border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow" />
                </div>
              </form>
              <div className="mt-8 flex justify-end">
                <button onClick={() => setStep(2)} className="bg-brand-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200">
                  确认并继续
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Payment Method Selection */}
          {step === 2 && (
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-in">
                <h2 className="text-xl font-bold text-slate-800 mb-6">选择支付方式</h2>
                <div className="space-y-4">
                   {[
                     { id: 'alipay', name: '支付宝', icon: CreditCard, color: '#1677FF', desc: '数亿用户的选择，安全快捷' }, 
                     { id: 'wechat', name: '微信支付', icon: MessageCircle, color: '#07C160', desc: '亿万用户的社交支付方式' }, 
                     { id: 'bank', name: '企业对公转账', icon: Building2, desc: '支持大额转账，需上传凭证' }
                   ].map((method) => {
                     const isSelected = paymentMethod === method.id;
                     return (
                       <div 
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id as any)}
                        className={`relative flex items-center p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 group ${
                          isSelected 
                            ? 'border-brand-500 bg-brand-50/50 shadow-md ring-1 ring-brand-200' 
                            : 'border-gray-100 hover:border-brand-200 hover:bg-gray-50'
                        }`}
                       >
                         {/* Checkmark Badge */}
                         {isSelected && (
                           <div className="absolute top-0 right-0 bg-brand-500 text-white p-1 rounded-bl-lg rounded-tr-sm">
                             <Check size={12} strokeWidth={4} />
                           </div>
                         )}

                         <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-colors ${isSelected ? 'bg-white' : 'bg-gray-100 group-hover:bg-white'}`}>
                           {method.id === 'bank' 
                             ? <Building2 className="text-slate-600" /> 
                             : <method.icon className={method.id === 'alipay' ? 'text-[#1677FF]' : 'text-[#07C160]'} />}
                         </div>
                         <div className="flex-1">
                           <div className="flex justify-between items-center">
                             <span className={`font-bold text-lg ${isSelected ? 'text-slate-800' : 'text-slate-700'}`}>{method.name}</span>
                             {method.id !== 'bank' && <span className="text-xs font-medium px-2 py-0.5 bg-green-100 text-green-700 rounded-full">实时到账</span>}
                           </div>
                           <p className="text-sm text-slate-500 mt-1">{method.desc}</p>
                         </div>
                       </div>
                     );
                   })}
                </div>
                <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-100">
                  <button onClick={() => setStep(1)} className="text-slate-500 hover:text-slate-800 flex items-center font-medium px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ArrowLeft size={18} className="mr-2" /> 返回上一步
                  </button>
                  <button 
                    onClick={handleNextToPay} 
                    className="bg-brand-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200 flex items-center"
                  >
                    立即支付
                  </button>
                </div>
             </div>
          )}

          {/* Step 3: Action (QR Code or Form) */}
          {step === 3 && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-in">
              {(paymentMethod === 'alipay' || paymentMethod === 'wechat') ? (
                // QR Code View
                <div className="text-center py-6">
                  <h2 className="text-xl font-bold text-slate-800 mb-2">
                    请使用 <span className={paymentMethod === 'alipay' ? 'text-[#1677FF]' : 'text-[#07C160]'}>{paymentMethod === 'alipay' ? '支付宝' : '微信'}</span> 扫一扫
                  </h2>
                  <p className="text-slate-500 text-sm mb-8">二维码有效期 5 分钟</p>
                  
                  <div className="relative w-48 h-48 mx-auto mb-8 bg-white p-2 rounded-xl shadow-inner border border-gray-200">
                     <img 
                       src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=SmartTechOrder_${productId}_${planId}`} 
                       alt="Payment QR Code" 
                       className="w-full h-full object-contain"
                     />
                     {/* Logo Overlay */}
                     <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center p-1">
                         {paymentMethod === 'alipay' ? <CreditCard className="text-[#1677FF]" /> : <MessageCircle className="text-[#07C160]" />}
                       </div>
                     </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-slate-500 text-sm">支付金额</div>
                    <div className="text-3xl font-bold text-slate-800 mt-1">¥ {totalAmount}</div>
                  </div>

                  <button 
                    onClick={handleConfirmPayment}
                    disabled={processing}
                    className="bg-brand-600 text-white px-10 py-3 rounded-lg font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto"
                  >
                    {processing ? (
                      <span className="flex items-center justify-center"><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span> 正在确认...</span>
                    ) : '模拟支付完成'}
                  </button>
                </div>
              ) : (
                // Bank Transfer Form
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-6">企业对公转账信息</h2>
                  
                  {/* Our Account Info */}
                  <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-200 relative">
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">收款账户信息</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                      <div>
                        <span className="text-slate-500 block mb-1">户名</span>
                        <div className="font-semibold text-slate-800 flex items-center">
                          SmartTech Solutions Ltd.
                          <Copy size={14} className="ml-2 text-slate-400 cursor-pointer hover:text-brand-600" />
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-500 block mb-1">开户行</span>
                        <div className="font-semibold text-slate-800">中国工商银行北京科技园支行</div>
                      </div>
                      <div className="md:col-span-2">
                        <span className="text-slate-500 block mb-1">银行账号</span>
                        <div className="font-mono font-semibold text-slate-800 text-lg flex items-center">
                          6222 0202 1234 5678 999
                          <Copy size={14} className="ml-2 text-slate-400 cursor-pointer hover:text-brand-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payer Form */}
                  <form onSubmit={(e) => { e.preventDefault(); handleConfirmPayment(); }} className="space-y-4">
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">填写汇款信息</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">汇款账户名</label>
                        <input required type="text" placeholder="请输入付款公司或个人名称" className="w-full bg-white text-slate-900 border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 focus:outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">汇款账号 (后四位)</label>
                        <input required type="text" placeholder="例如: 8888" maxLength={4} className="w-full bg-white text-slate-900 border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 focus:outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">转账流水号 / 回单号</label>
                      <input required type="text" placeholder="银行转账回单上的流水号" className="w-full bg-white text-slate-900 border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 focus:outline-none" />
                    </div>
                    
                    <div className="mt-8 flex justify-between items-center pt-6">
                      <button type="button" onClick={() => setStep(2)} className="text-slate-500 hover:text-slate-800 font-medium">
                        上一步
                      </button>
                      <button 
                        type="submit"
                        disabled={processing}
                        className="bg-brand-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200 disabled:opacity-70"
                      >
                        {processing ? '提交中...' : '提交汇款凭证'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="bg-white p-12 rounded-2xl shadow-lg border border-gray-100 text-center animate-fade-in">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{paymentMethod === 'bank' ? '凭证提交成功' : '支付成功!'}</h2>
              <p className="text-slate-600 mb-8 text-lg max-w-md mx-auto">
                {paymentMethod === 'bank' 
                  ? '我们已收到您的汇款信息，财务专员将在 1-2 个工作日内完成核销并开通服务。' 
                  : '感谢您的订购，确认邮件已发送至您的邮箱，服务已自动激活。'}
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/" className="bg-gray-100 text-slate-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                  返回首页
                </Link>
                <Link to="/products" className="bg-brand-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200">
                  继续采购
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Summary */}
        <div className="hidden md:block">
           <div className="sticky top-24 space-y-6">
             <Summary />
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
               <div className="flex items-start text-xs text-slate-500">
                 <ShieldCheck size={16} className="mr-3 text-green-600 flex-shrink-0 mt-0.5" /> 
                 <span>
                   <strong className="block text-slate-700 mb-1">银行级安全加密</strong>
                   所有交易数据均通过 256 位 SSL 加密传输，确保您的资金与信息安全。
                 </span>
               </div>
               <div className="flex items-start text-xs text-slate-500">
                 <Truck size={16} className="mr-3 text-brand-600 flex-shrink-0 mt-0.5" /> 
                 <span>
                   <strong className="block text-slate-700 mb-1">即时交付</strong>
                   SaaS 服务将在支付成功后立即自动开通，硬件产品将在 24 小时内发货。
                 </span>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;