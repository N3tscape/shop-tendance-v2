import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
      </nav>
    </>
  );
}
