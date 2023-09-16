import React from "react";

const Item = ({ claseDelaSeccion, claseDelDiv, title, descripcion, precio, imagen, imgClassName }) => {
  return (
    <section className={claseDelaSeccion}>
      <div className={claseDelDiv}>
        <h4>{title}</h4>
        <h5>{descripcion}</h5>
        <p>$ {precio}</p>
        <img src={imagen} alt={title} className={imgClassName} />
      </div>
    </section>
  );
};

export default Item;
