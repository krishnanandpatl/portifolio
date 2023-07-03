import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

function Wireframe({ val }) {
  const [imgData, setimgData] = useState();
  const [open, setOpen] = useState(false);
  const [imga, setImga] = useState("");

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
  // function handleModal(img) {
  //   setImga(img);
  //   setOpen(true);
  // }
  return (
    // <>
    //   {/* {imgData.map(function (img, idx) {
    //     return (
    //       <>
    //         <div key={idx} onClick={() => handleModal(img)}>
    //           <img src={img} alt="" loading="eager" />
    //         </div>
    //       </>
    //     );
    //   })}
    //   {open && (
    //     <Modal handleClose={() => setOpen(!open)} show={open}>
    //       <img src={imga} alt="" />
    //     </Modal>
    //   )} */}
    // </>
    <>
      {imgData && (
        <Gallery>
          {imgData.map(function (img, idx) {
            return (
              <Item
                key={idx}
                original={img}
                thumbnail={img}
                // width="1024"
                // height="768"
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
