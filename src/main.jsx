import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { MealBrowse } from "./pages/MealBrowse/MealBrowse";
import { Meal } from "./pages/Meal/Meal";
import { MealCreate } from "./pages/MealCreate/MealCreate.jsx";
import { User } from "./pages/User/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<MealBrowse />} />
            <Route path="/meal/:id" element={<Meal />} />
            <Route path="/meal/new" element={<MealCreate />} />
            <Route path="/user" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
