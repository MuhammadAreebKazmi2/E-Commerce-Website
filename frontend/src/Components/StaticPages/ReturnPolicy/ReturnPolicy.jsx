import React from 'react';
import './ReturnPolicy.css';

const ReturnPolicy = () => {
  return (
    <div className="return-policy-container">
      <h1 className="title">Return Policy</h1>
      <div className="content">
        <p>
          We want you to love your purchase from us, but if you're not completely satisfied, we will gladly accept returns on most items within 30 days of purchase.
        </p>
        <h2>Return Eligibility</h2>
        <ul>
          <li>Items must be in their original condition with all tags attached.</li>
          <li>Items must be unused and unwashed.</li>
          <li>Items must be in their original packaging.</li>
        </ul>
        <h2>Return Exceptions</h2>
        <p>
          Some items are not eligible for returns, including but not limited to:
        </p>
        <ul>
          <li>Custom orders or personalized items</li>
          <li>Undergarments and intimate apparel</li>
          <li>Final sale items</li>
        </ul>
      </div>
    </div>
  );
};

export default ReturnPolicy;