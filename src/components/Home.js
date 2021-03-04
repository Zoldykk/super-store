import Items from "./Items";
import Search from "./Search";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

function Home() {
  const { data: products, isLoading, setData: setProducts } = useFetch(
    "https://gp-super-store-api.herokuapp.com/item/list"
  );
  const [searchError, setSearchError] = useState(false);
  const handleSearch = async (query) => {
    fetch("https://gp-super-store-api.herokuapp.com/item/list")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSearchError(false);
        const filteredProducts = data.items.filter((product) => {
          return product.name.toLowerCase().includes(query.toLowerCase());
        });
        if (filteredProducts.length === 0) {
          setSearchError(true);
        }
        setProducts(filteredProducts);
      });
  };

  return (
    <div>
      <Search error={searchError} getSearchvalue={handleSearch} />
      {isLoading ? (
        <h1 className="mt-4 text-center">Loading ... </h1>
      ) : (
        <Items
          isLoading={isLoading}
          searchError={searchError}
          products={products}
        />
      )}
    </div>
  );
}

export default Home;
