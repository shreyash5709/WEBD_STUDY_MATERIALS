import "./Product.css";
function Product({title, price, features}){
    // let list = features.map((feature) => <li>{feature}</li>);
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>{price}</h5>
            <ul>{features.map((feature) => <li>{feature}</li>)}</ul>
            {price>=30000 ? <p>Discount: 5%</p> : null}
        </div>
    )
}

export default Product;