import "./Product.css";
function Product({title, price, features}){
    // let list = features.map((feature) => <li>{feature}</li>);
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>{price}</h5>
            <ul>{features.map((feature) => <li>{feature}</li>)}</ul>
        </div>
    )
}

export default Product;