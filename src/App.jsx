import { BrowserRouter, Routes, Route } from "react-router-dom";
import RatingScore from "./components/RatingScore/RatingScore";
import Meats from "./components/GroceryStore/Pages/Meats";
import NotFound from "./components/NotFound";
import Fruits from "./components/GroceryStore/Pages/Fruits";
import Bakery from "./components/GroceryStore/Pages/Bakery";
import GroceryStore from "./components/GroceryStore/GroceryStore";
import "./App.css";
import News from "./components/GroceryStore/Pages/News";
import SingleFruit from "./components/GroceryStore/data/SingleFruit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<RatingScore />}>
            <Route path="Meats" element={<Meats />} />
            <Route path="Bakery" element={<Bakery />} />
            <Route path="Fruits" element={<Fruits />} />
            <Route path="Fruits/:slug" element={<SingleFruit />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
