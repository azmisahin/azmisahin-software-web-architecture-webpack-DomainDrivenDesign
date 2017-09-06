/**
 * ====================================================================================================
 * Name    : Media Script
 * File    : media.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Required
import _ from 'lodash';

// npm install --save-dev style-loader css-loader
import './style.css';

// npm install --save-dev file-loader
import favIcon from './favicon.png';

// npm install --save-dev csv-loader xml-loader
import Data from './data.xml';


/**
 * Create List Item
 * @param {*Data Array} Data 
 * @return Html Element
 */
function createListItem(Data) {
    
    // Create List Element
    var list = document.createElement('ul');
    
    // Seaarch Data 
    var probValue;
    for (var name in Data) {
        
        // Data Value
        var value = Data[name];
        
        // Create li element
        var li = document.createElement('li');
        li.innerHTML = value;
        list.appendChild(li);
    }
    
    // Reuturn List
    return list;
};

// Create a Media Element
export default function createMedia(){

    // Create a media element
    var result = document.createElement('div');
    result.classList.add('media');

    // Add a image
    var image = new Image();
    image.src = favIcon;
    image.classList.add('mr-3');
    image.classList.add('mr-3');
    result.appendChild(image);

    // Add a body
    var body = document.createElement('div');
    body.classList.add('media-body');
    result.appendChild(body);

    // Add a Media Heading
    var heading = document.createElement('h5');
    heading.classList.add('mt-0');
    heading.innerHTML = 'Media Heading';
    result.appendChild(heading);

    // Add a Media Content
    var content = document.createElement('p');
    content.innerHTML = 'This media, bootstrap layout. Layout, media object and picture.'
    result.appendChild(content);

    // Add a Glyphicons
    var gIcon = document.createElement('i');
    gIcon.classList.add('glyphicon');
    gIcon.classList.add('glyphicon-asterisk');
    result.appendChild(gIcon);

    // Add a Data
    var data = document.createElement('p');
    var listItems = createListItem(Data.info);
    result.appendChild(listItems);

    // return result
    return result;
};