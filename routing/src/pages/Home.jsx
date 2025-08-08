import { NavLink } from "react-router";
import { Navbar } from "../Components/Navbar/Navbar";

export function Home() {
  return (
    <>
      <Navbar />
      <div className="p-5 d-flex justify-content-center align-items-center ">
        <h1>Welcome to the Home Page</h1>
      </div>
    </>
  );
}
