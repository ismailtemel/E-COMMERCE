import { useState } from 'react';
import './App.css'


function App() {
  return (
    <>
      <Header/>
      <ProductList/>
    </>
    
  )
}

function Header() {
  return (
    <h1>Header</h1>
  )
}

function ProductList() {

  const [products, setProducts] = useState([
  { id: 1, name: 'Product 1', price: 100, is_Active: true },
  { id: 2, name: 'Product 2', price: 200, is_Active: true },
  { id: 3, name: 'Product 3', price: 300, is_Active: true},
  ]);

  function addProduct() {
    setProducts([...products, { id:Date.now() , name: 'Product 4', price: 400, is_Active: true} ])
  }

  return (
    <div>
      <h2>Product List</h2>
      {products.map(p => (
        <Product product={p} key={p.id} />
      ))}

      <button onClick={addProduct}>Add Product</button>
    </div>
      
  );
}

function Product(props: any) {
  return (
    <>
    {props.product.is_Active &&(
      <div>
        <h3>{props.product.name}</h3>
        <p> {props.product.price}</p>
      </div>
    )}
    </>
  );
}

export default App
