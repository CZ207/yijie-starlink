import React from 'react';
import AuthMessageCard from '../components/AuthMessageCard';

const Dashboard: React.FC = () => {
  return (
    <AuthMessageCard
      title="你已成功登录"
      description="这是一块已经受登录保护的页面。后续如果你想加“个人中心”“我的任务”“我的资料”，都可以继续放在这里。"
      ctaLabel="回到首页"
      ctaTo="/"
    />
  );
};

export default Dashboard;
