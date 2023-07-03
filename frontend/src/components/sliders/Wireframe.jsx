import React, { useEffect, useState } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

function Wireframe({ val }) {
  const [imgData, setimgData] = useState();

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
      {imgData && (
        <Gallery>
          {imgData.map(function (img, idx) {
            return (
              <Item
                key={idx}
                original={img}
                thumbnail={img}
                style={{ maxWidth: "100%", maxHeight: "100vh" }}
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={img}
                    width="305.02px"
                    height="292px"
                  />
                )}
              </Item>
            );
          })}
        </Gallery>
      )}
    </>
  );
}

export default Wireframe;
