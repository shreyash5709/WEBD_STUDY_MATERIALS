import Product from "./Product"
function ProductTab() {
    return(
        <>
            <Product title={"Phone"} price={"30k"}/>
            <Product title={"Laptop"} price={750000}/>
            <Product title={"Tab"} price={25000}/>
        </>
    )
}

export default ProductTab;