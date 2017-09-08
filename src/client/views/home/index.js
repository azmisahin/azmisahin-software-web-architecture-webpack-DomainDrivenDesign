/**
 * ====================================================================================================
 * Name    : Home Script
 * File    : Home.js
 * Version : 0.0.1
 * ====================================================================================================
 */

 // Require
 import {Div, Media, H1, P, Link} from '../../../components/html/index.js'

 // npm install --save-dev style-loader css-loader
 import './style.css';
 
 // npm install --save-dev file-loader
 import favIcon from './favicon.png';
 
 /**
  * Create a Home Page
  */
  export default function createHome(content){
      
     // Crete Div Element
     var result = new Div('');
     result.classList.add('container');

     // Page Header
     var pageHeader = new Div('');
     pageHeader.classList.add('page-header');
     
     // Create Image
     var image = new Media(favIcon,'Azmi ŞAHİN');
     pageHeader.appendChild(image);

     var h1 = new H1('Webpack with bootstrap');
     pageHeader.appendChild(h1);
     result.appendChild(pageHeader);

     // Content
     var p = new P("Webpack, bootstrap, nodejs with frontend web application.");     
     result.classList.add('lead');
     result.appendChild(p);

     var cd = new Link('Continuous Deployment.','https://azmisahin-webpack.herokuapp.com');
     var ci = new Link('Continuous Integration.','https://travis-ci.org/azmisahin/com.domain.www.webpack.web');     
     var media = new Media('https://travis-ci.org/azmisahin/com.domain.www.webpack.web.svg?branch=master','Continuous Integration')
     result.appendChild(media);   
     result.appendChild(cd);   
     result.appendChild(ci);    

     // Return Result
     return result;
 }