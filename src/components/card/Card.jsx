import { Image } from "./Image";
import { Descripcion } from "./Descripcion";
import { ButtonDetalle } from "./ButtonDetalle";
import { ButtonAddCart } from "./ButtonAddCart";



export const Card = (props) => {
  return (
    <div className="flex flex-col flex-wrap justify-center min-w-10 border-slate-950  border-4 w-[15rem] ml-10 mt-10 ">
      <Image 
        imagen={props.imagen}
      />
      <Descripcion 
        nombre = {props.nombre}
        stock = {props.stock}
        precio = {props.precio}
      />
    <div>
      <ButtonDetalle />
      <ButtonAddCart />
    </div>



    </div>
  );
};
