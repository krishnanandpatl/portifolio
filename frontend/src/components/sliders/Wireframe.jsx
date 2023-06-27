import React, { useEffect, useState } from "react";
import Modal from "./Modal";
function Wireframe({ val }) {
  const [imgData, setimgData] = useState([]);
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
  function handleModal(img) {
    setImga(img);
    setOpen(true);
  }
  return (
    <>
      {imgData.map(function (img, idx) {
        return (
          <>
            <div key={idx} onClick={() => handleModal(img)}>
              <img src={img} alt="" loading="eager" />
            </div>
          </>
        );
      })}
      {open && (
        <Modal handleClose={() => setOpen(!open)} show={open}>
          <img src={imga} alt="" />
        </Modal>
      )}
    </>
  );
}

export default Wireframe;
