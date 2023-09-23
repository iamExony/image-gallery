import React from 'react'

import img1 from './img/image1.jpg';
import img2 from './img/image2.jfif';
import img3 from './img/image3.jfif';
import img4 from './img/image4.jfif';
import img5 from './img/image5.jfif';
import img6 from './img/image6.jpg';
import img7 from './img/image7.jpg';
import img8 from './img/image8.jpg';
import img9 from './img/image9.jfif';
import img10 from './img/image10.jfif';
import img11 from './img/image11.jfif';
import img12 from './img/image12.jfif';

const imagesData = [
    {
      id: 1,
      title: 'Image 1',
      imgsrc: img1
    },
    {
      id: 2,
      title: 'Image 2',
      imgsrc: img2
    },
    {
      id: 3,
      title: 'Image 3',
      imgsrc: img3
    },
    {
      id: 4,
      title: 'Image 4',
      imgsrc: img4
    },
    {
      id: 5,
      title: 'Image 5',
      imgsrc: img5
    },
    {
      id: 6,
      title: 'Image 6',
      imgsrc: img6
    },
    {
      id: 7,
      title: 'Image 7',
      imgsrc: img7
    },
    {
      id: 8,
      title: 'Image 8',
      imgsrc: img8
    },
    {
      id: 9,
      title: 'Image 9',
      imgsrc: img9
    },
    {
      id: 10,
      title: 'Image 10',
      imgsrc: img10
    },
    {
      id: 11,
      title: 'Image 11',
      imgsrc: img11
    },
    {
      id: 12,
      title: 'Image 12',
      imgsrc: img12
    },
  ];

  function Images() {

    return(
        <>
        <div className="w-11/12 mx-auto my-12 grid grid-cols-3 gap-4 bg-slate-200">
        {imagesData.map((image) => (
          <div key={image.id} className="relative aspect-w-3 aspect-h-4">
            <img
              src={image.imgsrc}
              alt={image.title}
              className="inset-0 w-full h-full object-cover"
            />
            <p className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white py-2 px-4">
              {image.title}
            </p>
          </div>
        ))}
      </div>  
        </>
    )
}

export default Images