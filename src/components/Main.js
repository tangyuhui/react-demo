require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import imageDatas from '../data/imageDatas.json';
let imageDataArray = (function setImageUrl(imageDatas){
 for(let imageData of imageDatas){
   imageData.imageUrl = require('../images/'+imageData.fileName)
 }
 return imageDatas
})(imageDatas)
console.log(imageDataArray)
class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
       happy
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
