// import Related from './components/similarproducts';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// App goes here

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  // componentDidMount() {
  //   this.getProducts();
  // }

  // getProducts() {
  //   axios
  //     .get('/')
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  render() {
    return (
      <div>
        <h1>
Customers who viewed this item also viewed
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
