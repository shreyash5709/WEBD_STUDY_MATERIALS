import "./Product.css";
import Price from "./Price";

function Product({title, idx}){
    let oldPrice = ["12495", "11900", "1599", "500"];
    let newPrice = ["8999", "9199", "899", "278"];
    let description = ["8,000 DPI", "intutive surface", "designed for iPad Pro", "Wirelwss"];
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}

export default Product;