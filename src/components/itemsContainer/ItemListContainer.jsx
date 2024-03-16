import { Link } from "react-router-dom"

export const itemlistContainer = (props) => {
  return (
    <ul>
       <li>
        <Link to="category/zapatilla">
            {props.itemuno}
        </Link>
       </li>
        <li>
            <Link to="category/camisetas">
                {props.itemdos}
            </Link>
        </li>
        <li>
            <Link to="category/pantalones">
                {props.itemtres}
            </Link>
        </li>
        
    </ul>
    )  
}
