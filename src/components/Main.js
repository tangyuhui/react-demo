require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import imageDatas from '../data/imageDatas.json';
let imageDataArray = (function setImageUrl(imageDatas){
 for(let imageData of imageDatas){
  console.log(imageData.fileName)
   imageData.imageUrl = require('../images/'+imageData.fileName)
   console.log(imageData.imageUrl)
 }
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
