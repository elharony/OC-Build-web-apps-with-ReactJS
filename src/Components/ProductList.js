import React from 'react'
import ProductTableColumn from './ProductTableColumn'
import ProductTableRow from './ProductTableRow'

class ProductList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sort: {
                column: 'name',
                direction: 'desc'
            }
        }
    }


    render() {

        // Convert 'obj' to 'array'
        let ProductsAsArray = Object.keys(this.props.products).map((productId) => this.props.products[productId])
        
        // Insert each product into a row
        let rows = [];
        ProductsAsArray.forEach((product) => {

            // Display certain products based on the filters
            if(product.name.indexOf(this.props.searchQuery) === -1 || (!product.stocked && this.props.inStock)) {
                return;
            }

            rows.push(
                <ProductTableRow product={product} key={product.id} />
            )

        })
        

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