import "./Product.css";
function Product({title, price, feature, feature2}){
    console.log()
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>{price}</h5>
            <p>{feature}</p>
            <p>{feature2.a}</p>
        </div>
    )
}

export default Product;