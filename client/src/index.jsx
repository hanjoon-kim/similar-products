// import Related from './components/similarproducts';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import ProductList from './components/ProductList.jsx';

// App goes here

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    const self = this;
    axios
      .get('/products')
      .then((response) => {
        console.log(response.data, 'axios response');
        const data = response.data.slice(0, 8);
        self.setState({ products: data });
        console.log(self.state);
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
