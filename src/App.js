
import { Outlet, Link } from "react-router-dom";
export default function App() {
  return (
    <div>
      <h1>Coin & Me</h1>
      <nav
        style={{
          borderBottom: "solid 1px deeppink",
          paddingBottom: "1rem",
        }}
      >
          <Link to="/about">About me |</Link>
          <Link to="/currencies"> | Currency</Link>
      <Outlet />
      </nav>
    </div>
  )
}