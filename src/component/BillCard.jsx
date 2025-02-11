import React from 'react';
import './BillCard.css'; // CSS 파일 임포트

const BillCard = ({ months, amount }) => {
  return (
    <div className="custom-card">
      <span className="text-months">{months}개월</span>
      <span className="text-amount">{amount} 원</span>
    </div>
  );
};

export default BillCard;