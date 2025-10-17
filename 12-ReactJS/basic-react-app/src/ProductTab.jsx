import Product from "./Product"
function ProductTab() {
    let option = ["Hi-tech", "Very advanced"];
    return(
        <>
            <Product title={"Phone"} price={"30k"} feature={option} feature2={{a:"hi-tech", b:"very advanced"}}/>
            <Product title={"Laptop"} price={750000} feature={option} feature2={{a:"hi-tech", b:"very advanced"}}/>
            <Product title={"Tab"} price={25000} feature={option} feature2={{a:"hi-tech", b:"very advanced"}}/>
        </>
    )
}

export default ProductTab;