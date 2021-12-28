import { useParams } from "react-router-dom";
import { getCrypto } from "../data";
import { DEFAULT_CURRENCY_ID } from "../constant/currency";

export default function Invoice() {
  let params = useParams();
  let currency = getCrypto(parseInt(params?.currencyId, 10));

  if (currency) {
    let lastUpdated;
    try {
      lastUpdated = new Date(currency.last_updated)?.toString();
    } catch (e) {}
    return (
      <main style={{ padding: "1rem" }}>
        <h2>{currency.name}</h2>
        <p>Max Supply: {currency.max_supply}</p>
        <p>Last Updated: {lastUpdated}</p>
      </main>
    );
  }
  return <span>Something wrong</span>;
}
