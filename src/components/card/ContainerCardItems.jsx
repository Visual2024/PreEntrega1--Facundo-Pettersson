import { useParams } from "react-router-dom";
import productos from "../../utils/MockAsync.json";
import { Card } from "./Card";

export const ContainerCardItems = () => {
  const producto = productos.productos;

  const {idCategory} = useParams();

  return (
    <div className="flex justify-center flex-row ">
      <ul className="flex flex-row flex-wrap justify-center">
        {producto.map((producto) => (
          <Card
            key={producto.id}
            imagen={producto.imagen}
            nombre={producto.nombre}
            stock={producto.stock}
            precio={producto.precio}
          />
        ))}
      </ul>
    </div>
  );
};
