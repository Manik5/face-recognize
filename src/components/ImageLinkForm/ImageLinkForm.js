import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = () => {
  return (
    <div>
      <p className='text f4'>
        {'This Magic Brain will detect faces in your pictures. Try it!'}
      </p>
      <div className="center">
          <div className="center form pa4 br3 shadow-5">
            <input className='f4 pa2 w-70 center' type='tex'/>
            <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
          </div>
        </div>
      </div>
  )
}

export default ImageLinkForm;
