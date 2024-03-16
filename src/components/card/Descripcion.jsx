export const Descripcion = (props) => {
  return (
    <div className="bg-teal-400 ">
      <h3 className="font-bold">
        {props.nombre}
      </h3>
      <div>
        <span className="">
           
        </span>
        <p className="">
            {props.descripcion}
        </p>
      </div>

      <span className="">Cantidad: {props.stock}</span>

      <p className="">
       Precio: ${props.precio}
       </p>
    </div>
  );
};
