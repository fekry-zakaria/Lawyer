import React, { useState } from 'react';
import { UserPlus, FileText, LogIn, Megaphone, MessageSquare } from 'lucide-react';

const Sidebar = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="w-80 bg-gray-50 p-6 border-l border-gray-200">
      {/* Account Activation */}
      <div className="mb-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 space-x-reverse mb-3">
            <UserPlus size={20} className="text-yellow-600" />
            <h3 className="font-bold text-gray-800">تفعيل الحساب</h3>
          </div>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition-colors text-sm">
            تفعيل الآن
          </button>
        </div>
      </div>

      {/* Latest Topics */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 space-x-reverse mb-3">
          <FileText size={20} className="text-gray-600" />
          <h3 className="font-bold text-gray-800">أحدث الموضوعات</h3>
        </div>
        <div className="space-y-2">
          <a href="#" className="block p-3 bg-white rounded-md hover:shadow-md transition-shadow">
            <h4 className="text-sm font-semibold text-gray-800 mb-1">نظام العقود التجارية الجديد</h4>
            <p className="text-xs text-gray-600">تعديلات مهمة في قانون التجارة</p>
          </a>
          <a href="#" className="block p-3 bg-white rounded-md hover:shadow-md transition-shadow">
            <h4 className="text-sm font-semibold text-gray-800 mb-1">حقوق العمال في السعودية</h4>
            <p className="text-xs text-gray-600">كل ما تحتاج معرفته عن نظام العمل</p>
          </a>
          <a href="#" className="block p-3 bg-white rounded-md hover:shadow-md transition-shadow">
            <h4 className="text-sm font-semibold text-gray-800 mb-1">تأسيس الشركات 2024</h4>
            <p className="text-xs text-gray-600">الإجراءات والشروط الجديدة</p>
          </a>
        </div>
      </div>

      {/* Login for New Subscribers */}
      <div className="mb-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 space-x-reverse mb-3">
            <LogIn size={20} className="text-gray-600" />
            <h3 className="font-bold text-gray-800">تسجيل الدخول للمشتركين الجدد</h3>
          </div>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition-colors text-sm">
            دخول
          </button>
          <div className="mt-2 text-center">
            <a href="#" className="text-xs text-yellow-600 hover:underline">نسيت كلمة المرور؟</a>
          </div>
        </div>
      </div>

      {/* Advertisement Space */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 space-x-reverse mb-3">
          <Megaphone size={20} className="text-gray-600" />
          <h3 className="font-bold text-gray-800">ضع إعلانك هنا</h3>
        </div>
        <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg h-48 flex items-center justify-center">
          <p className="text-gray-500 text-sm text-center">مساحة إعلانية<br />للاستفسار تواصل معنا</p>
        </div>
      </div>

      {/* Auto Reply Chat */}
      <div className="fixed bottom-4 left-4 z-50">
        <div className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors cursor-pointer">
          <MessageSquare size={24} />
        </div>
        <div className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl p-4 w-80 hidden">
          <h4 className="font-bold text-gray-800 mb-2">محادثة الرد الآلي</h4>
          <p className="text-sm text-gray-600 mb-3">
            مرحباً! يمكنني مساعدتك في:
          </p>
          <ul className="text-sm text-gray-600 space-y-1 mb-3">
            <li>• حجز موعد استشارة</li>
            <li>• طلب استشارة قانونية</li>
            <li>• طلب التوكيل في قضية</li>
          </ul>
          <input
            type="text"
            placeholder="اكتب رسالتك هنا..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
