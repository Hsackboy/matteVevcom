import React, { useState } from 'react';
import "./App.css"


// function CalculateButton() {
//   function handleClick() {
//     myRef.
//   }

//   return (
//     <button onClick={handleClick}>
//       Regn ut
//     </button>
//   );
// }





const ImageUploader: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      // Once the file is read, set the image URL to the state
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };

      reader.readAsDataURL(file); // Convert file to base64 URL
    }
  };


  const [styling, setStyling] = useState<string>('noSpin');
  const [title, setTitle] = useState<string>('Last opp matte stykke');
  function handleClick() {
    setStyling("spin")
    setTitle("Stirr på det til du ser løsningen")
  }

  return (
    <div id="mainDiv" className={styling}>
      <h1 >{title}</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {imageSrc && (
        <div id="imageDiv">
          <img src={imageSrc} alt="Uploaded Preview" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}

      <button onClick={handleClick}>
        Kalkuler
      </button>
      <div id="fixedDiv">
        <div id='fixed' className='slidingLeftRight'></div>
      </div>
    </div>
  );
};

export default ImageUploader;
