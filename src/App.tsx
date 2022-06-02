import React from 'react';
import ProductsList from './products/ProductsList';
import ProductForm from './products/ProductForm';
import store  from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductsList />
        <ProductForm />
      </div>
    </Provider>
  );
}

export default App;
