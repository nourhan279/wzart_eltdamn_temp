import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { useState } from "react";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { MovieDetails } from "./pages/MoviesDetails";
import "./App.css";

function PrivateRoute({ children }) {
  const islogin = true;

  return islogin ? children : <Navigate to="/about" />;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        <Route path="*" element={"not found"}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
