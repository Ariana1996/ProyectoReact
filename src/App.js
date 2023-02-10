import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFoundPage from "./components/NotFoundPage";
import ContextProvider from "./storage/ContextProvider"
import CartContainer from "./components/CartContainer";
import CreateOrder from "./components/CreateOrder";


function App() {

  return (
    <ContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:itemID" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/create-order" element={<CreateOrder />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
  </ContextProvider>
  );
}

export default App;