import { useState, useEffect, useMemo } from "react";
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

  const filteredProducts = useMemo(
    () => getProducts(products, searchText),
    [products, searchText]
  );

  // getProducts(products, searchText);

  function getProducts(products, searchText) {
    console.log("hello");
    return products.filter((p) =>
      p.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <>
      <h1>{time}</h1>
      <br />
      <input
        type="text"
        placeholder="Enter Text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}

        // setProducts(products.filter((p) => p.name.includes(searchText)))
      />
      <br />
      <br />
      <br />
      <table border="1" cellPadding="10" cellSpacing="0" padding="10">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default App;
