import { useEffect, useState } from "react"


const Product = () => {
    
    const url = 'https://fakestoreapi.com/products'
    const [product, setProduct] = useState([])
    
    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setProduct(data)
    }

    useEffect( () => {
        getData()
    }, [])

    return (
        <>
        
            <h1 id="halo">Daftar Produk</h1>
            <p id="subJudul">Projek ini dibuat dengan menggunakan library <b style={{ color: 'blue' }}>React JS</b> dan <a href="https://fakestoreapi.com/" target="_blank">Fake Store API</a></p>

            <div className="container">
                

                { product.map( (produk) => {
                    return (
                        <CardProduct
                            key={produk.id}
                            name={produk.title}
                            harga={produk.price}
                            image={produk.image}
                            deskripsi={produk.description}
                        />
                    )
                } ) }
                
            </div>


        </>
    )

}



const CardProduct = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.image} alt={props.name}/>
                <p>{props.name}</p>
                <h3>{props.harga} $</h3>
                <p>{props.deskripsi}</p>
            </div>

        </>
    )
}

export default Product