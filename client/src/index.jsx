// import Related from './components/similarproducts';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductList from './components/ProductList.jsx';

// App goes here

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{}, {}, {}, {}, {}, {}, {}, {}],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios
      .get('http://localhost:3001')
      .then((response) => {
        console.log(response.data, 'axios response');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h1>
Customers who viewed this item also viewed
        </h1>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
