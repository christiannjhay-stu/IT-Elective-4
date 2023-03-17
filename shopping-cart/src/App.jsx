import React from "react";
import { products } from "./data";
import ProductCard from "./ProductsCard";

const App = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
