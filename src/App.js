import { useState } from "react";
import Card from "./components/card";
import "./App.scss";

function App() {
  const [state, setState] = useState({
    orders: [
      {
        desc: "You can now listen to millions of songs, audiobook, and podcasts on any device anywhere you like!",
        priceTitle: "Annual Plan",
        priceAmount: "$59.99/year",
      },
    ],
  });

  return (
    <div className="App">
      {state.orders.map((order) => (
        <Card order={order} />
      ))}
    </div>
  );
}

export default App;
