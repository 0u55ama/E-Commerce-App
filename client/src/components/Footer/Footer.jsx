import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Test1</span>
          <span>Test2</span>
          <span>Test3</span>
          <span>Test4</span>
          <span>Test5</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            bla bla bla ...
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            bla bla bla ...
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo"> Aji Tchufu </span>
          <span className="copyright"> Aji Tchufu 3awtani </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer