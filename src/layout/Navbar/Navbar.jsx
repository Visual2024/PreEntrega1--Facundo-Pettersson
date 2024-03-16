import { useState } from "react";
import Logo from "../../assets/logo.png";
import { Cart } from "../../components/Cart/Cart";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showCategorias, setShowCategorias] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="bg-teal-500 py-4 max-sm:bg-red-500">
        <div className="container mx-auto flex flex-row justify-between items-center min-w-11 max-sm:">
          <div className="mr-20 w-[5.2%] max-sm:w-[3rem]">
            <Link to="/" >
              <img src={Logo} alt="Logo" className="w-[100%] max-sm: ml-4 " />
            </Link>
          </div>
          <div className="flex items-center justify-center flex-grow max-sm:hidden">
            <form
              action=""
              className="bg-white p-2 h-[20%] w-[90%] max-sm:bg-red-300"
            >
              <input
                type="text"
                name=""
                id=""
                className="max-sm:bg-red-300 w-[100%] h-8 rounded-lg focus:border-indigo-500 outline-none"
              />
            </form>
          </div>
          <div className="">
            <ul className="flex max-sm:hidden">
              <li className="p-2 mr-2">
                <button
                  onClick={() => setShowCategorias(!showCategorias)}
                  className="text-lg"
                >
                  Categorias
                </button>
                {showCategorias && (
                  <ul className="absolute bg-teal-800 text-white w-[7%] flex flex-col items-start outline-none transition-all">
                    <li>
                      <Link
                        to="/categorias/zapatillas"
                        className="hover:underline w-full text-lg hover:animate-pulse text-white max-sm:text-xs"
                      >
                        Zapatillas
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/categorias/camisetas"
                        className="hover:underline text-lg hover:animate-pulse text-white"
                      >
                        Camisetas
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/categorias/pantalones"
                        className="hover:underline text-lg hover:animate-pulse text-white"
                      >
                        Pantalones
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="p-2 mr-2">
                <a href="" className="text-lg">
                  Productos
                </a>
              </li>
              <li className="p-2 mr-2">
                <a href="" className="text-lg">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="flex ml-5 max-sm:hidden">
            <Cart />
          </div>
          {/* Menu Hamburguesa */}
          <div className="max-sm:block max-lg:hidden">
            <button
              onClick={toggleMenu}
              className="hidden max-sm:block max-sm:mr-4"
            >
              Menu
            </button>
            {open && (
              <div>
                <ul className="fixed top-25 left-0 right-0 bg-gray-800 text-white w-full">
                  <li className="p-4">
                    <a href="#" className="block hover:bg-gray-700 py-2">
                      Inicio
                    </a>
                  </li>
                  <li className="p-4">
                    <a href="#" className="block hover:bg-gray-700 py-2">
                      Acerca
                    </a>
                  </li>
                </ul>
                <div className="hidden ml-5 max-sm:block max-sm:mt-10">
                  <Cart />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
