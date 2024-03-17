import { useParams } from "react-router-dom";
import productos from "../../utils/MockAsync.json";
import { Card } from "./Card";
import { useEffect, useState } from "react";


export const ContainerCardItems = () => {
  const { idCategory } = useParams();
  const [dato, setDato] = useState([])
  
  const producto = productos.productos;

  useEffect(() => {
    const filter = producto.filter(product => product.categoria === idCategory)
    setDato(filter)
  }, [])

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
        {dato.map((produts)=>{
            <li key={produts.id}>{produts.name}</li>
          })
        }
      </ul>
    </div>
  );
};
