import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Currencies from "./routes/currencies";
import Currency from "./routes/currency";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="currencies" element={<Currencies />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an currency</p>
              </main>
            }
          />
          <Route path=":currencyId" element={<Currency />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
)