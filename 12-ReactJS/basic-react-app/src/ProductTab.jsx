import Product from "./Product"

function ProductTab() {
    let style = {
        display: "flex",
        flexWrap: "wrap",
        textAlign: "center"
    } 
    return(
        <div style={style}>
            <Product title={"Logitech MX Master"} idx={0}/>
            <Product title={"Apple Pencit (2nd gen)"} idx={1}/>
            <Product title={"Zebronics Zeb-Transformers"} idx={2}/>
            <Product title={"Petronics toad 23"} idx={3}/>
        </div>
    )
}

export default ProductTab;