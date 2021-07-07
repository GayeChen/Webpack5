// import React from 'react'
// import ReactDom from 'react-dom';

// // assets module
// import png from './assets/logo.png'
// import jpg from './assets/logo.jpg'
// import txt from './assets/logo.txt'
// import ico from './assets/logo.ico'
// import avator from './assets/avator.jpg';

// console.log('png:', png, avator);
// console.log('jpg:', jpg);
// console.log('ico:', ico);
// console.log('txt:', txt);

// // 移除Node.js的polyfills
// import cryptoJs from 'crypto-js';
// console.log(cryptoJs.MD5('hello world').toString(), 'md5加密');

// // 确定的chunkIds和moduleIds
// import('./A');
// import('./B');
// import('./C');

// ReactDom.render(
//   <h1>hello world，Webpack 5</h1>,
//   document.getElementById('root')
// );

// TreeShaking
import * as module from './treeShaking/module';
console.log(module.inner.a);

import './treeShaking/background.css';
import './treeShaking/title';