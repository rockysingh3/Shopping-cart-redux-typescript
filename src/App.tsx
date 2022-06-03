import React from 'react';
import ProductsList from './products/ProductsList';
import ProductForm from './products/ProductForm';
import store  from './store';
import { Provider } from 'react-redux';
import Cart from './Cart/Cart';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductsList />
        <ProductForm />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
