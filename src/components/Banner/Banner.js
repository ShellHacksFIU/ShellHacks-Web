import React from 'react';

import RegisterLink from '../Auth/Register/RegisterLink';

import './banner.css';

export default function Banner() {
  return (
    <section className='banner'>
    <div className='banner-text'>
      <img src='/src/assets/ShellHacks_WordMark_White@4x.png'></img>
      {/* <h1>ShellHacks 2018</h1> */}
      <p>September 21 | Florida International University</p>
      <button>< RegisterLink/></button>
    </div>
    </section>
  );
}
