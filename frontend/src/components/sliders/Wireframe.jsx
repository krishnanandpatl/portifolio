import React from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

function Wireframe({ val }) {
  return (
    <>
      {val && (
        <Gallery>
          {val.map(function (img, idx) {
            return (
              <Item
                key={idx}
                original={img}
                thumbnail={img}
                // style={{ maxWidth: "100%", maxHeight: "100vh" }}
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
