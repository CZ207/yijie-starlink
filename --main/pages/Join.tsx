import React from 'react';
import { Mail, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Join: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-stone-900">加入我们 & 联系合作</h1>
        <p className="mt-4 text-stone-600">无论你是热衷翻译的高校学子，还是寻求国际传播支持的机构，我们都期待您的加入。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* For Translators */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-500">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">高校译者招募</h2>
          <p className="text-stone-600 mb-6">
            加入“译界星链”，你将获得真实的红色影视项目翻译经验，不仅能打磨语言技能，更能为中国文化的国际传播贡献力量。
          </p>
          <ul className="space-y-3 mb-8 text-sm text-stone-500">
            <li className="flex gap-2"><Check /> 外语专业本科/研究生在读优先</li>
            <li className="flex gap-2"><Check /> 具备CATTI三级或同等水平优先</li>
            <li className="flex gap-2"><Check /> 热爱红色文化与影视翻译优先</li>
          </ul>
          <a 
            href="#" 
            className="block w-full text-center py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            填写报名表 <ExternalLink size={18} />
          </a>
          <p className="text-xs text-center text-stone-400 mt-2">跳转至问卷星</p>
        </div>

        {/* Auth Entry */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-emerald-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <ShieldCheck size={22} />
            </div>
            <h2 className="text-2xl font-bold text-stone-900">账号登录与注册</h2>
          </div>
          <p className="text-stone-600 mb-6 leading-7">
            现在你已经可以通过邮箱完成注册、验证、登录与找回密码。登录后可进入个人中心，后续也能扩展为“我的任务”“我的资料”等专区。
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              邮箱注册
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-lg border border-emerald-200 px-4 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50"
            >
              账号登录
            </Link>
          </div>
          <p className="mt-4 text-xs text-stone-500">如果忘记密码，也可以在登录页点击“忘记密码”。</p>
        </div>

        {/* For Partners */}
        <div className="bg-stone-800 p-8 rounded-xl shadow-lg border-t-4 border-stone-500 text-white md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">项目合作对接</h2>
          <p className="text-stone-300 mb-6">
            我们可为博物馆、纪念馆、影视制作公司提供专业的字幕翻译、多语种解说词撰写及海外推广的支持。
          </p>
          <div className="space-y-4 mb-8">
             <div className="flex items-center gap-3 text-stone-300">
               <Mail className="text-primary-400" />
               <span>负责人邮箱：nvgudp8642@163.com</span>
             </div>
             <div className="flex items-center gap-3 text-stone-300">
               <MessageSquare className="text-primary-400" />
               <span>微信公众号：西外高翻博译</span>
             </div>
          </div>
          <a 
            href="mailto:nvgudp8642@163.com"
            className="block w-full text-center py-3 bg-white hover:bg-stone-100 text-stone-900 font-bold rounded-lg transition-colors"
          >
            发送合作邮件
          </a>
        </div>
      </div>
      
      {/* Contact Footer */}
      <div className="mt-16 text-center border-t border-stone-200 pt-8">
        <h3 className="font-bold text-stone-900 mb-2">项目团队</h3>
        <p className="text-stone-600 text-sm">
          西安外国语大学高级翻译学院<br/>
          地址：陕西省西安市郭杜教育科技产业开发区文苑南路
        </p>
      </div>
    </div>
  );
};

const Check = () => <span className="text-primary-500 font-bold">✓</span>;

export default Join;
