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
import { UserBrowse } from "./pages/UserBrowse/UserBrowse.jsx";
import { FoodBrowse } from "./pages/FoodBrowse/FoodBrowse.jsx";
import { Food } from "./pages/Food/Food.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<MealBrowse />} />
            <Route path="/meal" element={<MealBrowse />} />
            <Route path="/meal/:mealId" element={<Meal />} />
            <Route path="/meal/new" element={<MealCreate />} />
            <Route path="/user" element={<UserBrowse />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/food" element={<FoodBrowse />} />
            <Route path="/food/:foodId" element={<Food />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
