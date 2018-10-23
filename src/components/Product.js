import React, { Component }  from "react";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    addToCart(image, name, provider, price, id, quantity) {
        this.setState(
            {
                selectedProduct: {
                    image: image,
                    name: name,
                    provider: provider,
                    price: price,
                    id: id,
                    quantity: quantity
                }
            },
            function() {
                this.props.addToCart(this.state.selectedProduct);
            }
        );
    }
    render() {
        let image = this.props.image;
        let name = this.props.name;
        let provider = this.props.provider;
        let price = this.props.price;
        let id = this.props.id;
        let quantity = this.props.quantity;
        return (
            <div className="product">
                <div className="product-image">
                    <img src={image} alt={name} />
                </div>
                <h3 className="product-name">{name}</h3>
                <p className="product-price">{price}</p>
                <div className="product-action">
                    <button type="button" onClick={this.addToCart.bind(
                        this,
                        image,
                        name,
                        provider,
                        price,
                        id,
                        quantity
                    )}>
                    Add To Cart
                    </button>
                </div>
            </div>
        )
    }
}

export default Product;