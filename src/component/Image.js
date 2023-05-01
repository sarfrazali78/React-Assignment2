import { useRef, useEffect, useState } from "react";
import { Fragment } from "react";

export default function PhotoChanger() {
  const inputRef = useRef();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    inputRef.current.addEventListener("change", () => {
      const file = inputRef.current.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    });
  }, [inputRef]);

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <Fragment>
      <div className="image-container">
        {imageUrl && <img src={"https://images.pexels.com/photos/980384/pexels-photo-980384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Uploaded" />}
      </div>
      <button className="image-button" onClick={handleClick}>
        {imageUrl ? "Change Image" : "Pick an Image"}
      </button>
      <input type="file" ref={inputRef} style={{ display: "none" }} />
    </Fragment>
  );
}