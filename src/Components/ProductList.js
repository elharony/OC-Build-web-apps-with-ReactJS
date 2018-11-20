import React from 'react'
import ProductTableColumn from './ProductTableColumn'
import ProductTableRow from './ProductTableRow'

class ProductList extends React.Component {
    render() {

        // Convert 'obj' to 'array'
        let ProductsAsArray = Object.keys(this.props.products).map((productId) => this.props.products[productId])
        
        // Insert each product into a row
        let rows = ProductsAsArray.map((product) => 
            <ProductTableRow product={product} key={product.id} />
        )

        return (
            <table>
                <thead>
                    <tr>
                        <ProductTableColumn name="name"/>
                        <ProductTableColumn name="price"/>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

export default ProductList