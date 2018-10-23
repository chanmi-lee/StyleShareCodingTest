import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Products from './components/Products';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: []
        };
    }
    getProducts() {
        let url = "../assets/json/products.json";
        axios.get(url).then(response => {
            this.setState({
                products: response.data
            });
        });
    }

    // Add To Cart
    handleAddToCart(selectedProducts) {
        let pid = selectedProducts.id;
        let productQty = selectedProducts.quantity;
        let cart = this.state.cart;
        if (this.checkProduct(pid)) {
            let index = cart.findIndex(x => x.id == pid);
            cart[index].quatity = cart[index].quantity + productQty;
        } else {
            cart.push(selectedProducts);
        }
    }

    // Check if selected product already exists 
    checkProduct(pid) {
        let cart = this.state.cart;
        return cart.some(function(item) {
            return pid === item.id;
        });
    }

    render() {
        return (
            <div className="container">
                <Products
                    productsList={this.state.products}
                    addToCart={this.handleAddToCart}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));