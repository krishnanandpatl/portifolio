import React, { useEffect, useState } from "react";
import Caraousel from "./caraousel/Caraousel";
function Wireframe({ val }) {
  const [imgData, setimgData] = useState([]);
  useEffect(() => {
    fetch(`/api/image/${val}`)
      .then((data) => {
        return data.json();
      })
      .then((data2) => {
        setimgData(data2.images);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {imgData.map(function (img, idx) {
        return (
          <div key={idx}>
            <img src={img} alt="" loading="eager" />
          </div>
        );
      })}
    </>
  );
}

export default Wireframe;
