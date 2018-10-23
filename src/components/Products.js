import React  from "react";
import Product from "./Product";

class Products extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let productsData;
        let item;

        productsData = this.props.productsList.map(product => {
            return (
                <Product
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    provider={product.provider}
                    price={product.price}
                    id={product.id}
                    quantity={product.quantity}
                    addToCart={this.props.addToCart}
                />
            );
        });
        if (productsData.length > 0) {
            item = (
                {productsData}
            )
        }
        
        return (
            <div className="product-wrapper">{item}</div>
        )
    }
}

export default Products;