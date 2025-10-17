import Product from "./Product"
function ProductTab() {
    let option = ["Hi-tech", "Very advanced"];
    return(
        <>
            <Product title={"Phone"} price={30000} features={option}/>
            <Product title={"Laptop"} price={750000} features={option}/>
            <Product title={"Tab"} price={25000} features={option}/>
        </>
    )
}

export default ProductTab;