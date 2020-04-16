import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => { // destructuring by calling the imageUrl defined in App.js and then pass it to the image on line 7
  return (
    <div className="center ma">
      <div className='absolute mt2'>
      <img id="inputImage" alt="" src={ imageUrl } width='500px' height='auto' />
      <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
      </div>
    </div>
  )
};

export default FaceRecognition;
