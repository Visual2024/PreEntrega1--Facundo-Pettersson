import { Navbar } from "./layout/Navbar/Navbar";
import { ContainerCardItems } from "./components/card/ContainerCardItems";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ContainerCardItems />} />
        <Route path="/item/:id" element={<ContainerCardItems />} />
        <Route path="/category/:idCategory" element={<ContainerCardItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
