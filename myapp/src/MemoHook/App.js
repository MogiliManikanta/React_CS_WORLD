import { useState, useEffect } from "react";
function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const [searchText, setSearchText] = useState("");

  const [products, setProducts] = useState([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "TV" },
    { id: 4, name: "Washing Machine" },
  ]);

  return (
    <>
      <h1>{time}</h1>
      <br />
      <input
        type="text"
        placeholder="Enter Text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
            setProducts(products.filter((p) => p.name.includes(searchText)))  
        }
      />
      <br />
      {products.map((p) => (
        <ul key={p.id}>
          <li>{p.id}</li>
          <li>{p.name}</li>
        </ul>
      ))}
    </>
  );
}
export default App;
