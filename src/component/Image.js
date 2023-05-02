import React, { useEffect, useState, useRef } from 'react';

export default function PhotoChanger()
{
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
  ];
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.src = images[imageIndex];
  }, [imageIndex]);

  const changeImage = () => {
    if(imageIndex<images.length-1){
        setImageIndex(imageIndex+1);

    }
    else{
        alert('no more image')
    }
  };

  return (
    <div>
      <img style={{height:'200px', width:'200px', marginTop:'150px', marginLeft:'600px'}} ref={imageRef} alt="Current Image" /><br>
      </br>
      <button  style={{background:'blue', color:'white', textAlign:'center'}}onClick={changeImage}>Change Image</button>
    </div>
  );
};