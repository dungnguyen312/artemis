import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getCryptoList } from "../data";

export default function Currencies() {
  let currencies = getCryptoList();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px deeppink",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {currencies
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.includes(filter.toLowerCase());
          })
          .map((invoice) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "deeppink" : "darkgoldenrod",
                };
              }}
              to={`/currencies/${invoice.id}`}
              key={invoice.id}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}