//agrupador de componentes

import { useEffect, useState } from "react";

import products from '../../utils/MockAsync.json';
import { ItemDetail } from "./ItemDetails";
import { CallApi } from "../../utils/CallApi";

export const ItemDetailContainer = () => {
  const [productsCharged, setProductsCharged] = useState({})
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    setLoading(true)
    CallApi(products).then(resp => { setProductsCharged(resp); setLoading(false) })


  }, [])

  if (loading) return <h1> Loading... </h1>


  return (<>
    <div>
      {
        productsCharged.productos.length > 0 && productsCharged.productos.map((item, index) => {
          return <ItemDetail item={item} />
        }
          
        )
      }
    </div>


  </>);
}

