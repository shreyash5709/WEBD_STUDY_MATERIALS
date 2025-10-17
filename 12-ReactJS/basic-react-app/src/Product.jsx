import "./Product.css";
function Product({title, price, features}){
    // let list = features.map((feature) => <li>{feature}</li>);
    let styles = {backgroundColor: price>=30000 ? "lightblue" : "lightgreen" }
    return(
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>{price}</h5>
            <ul>{features.map((feature) => <li>{feature}</li>)}</ul>
            {price>=30000 ? <p>Discount: 5%</p> : null}
        </div>
    )
}

export default Product;