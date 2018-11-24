import React from 'react'
import ProductTableColumn from './ProductTableColumn'
import ProductTableRow from './ProductTableRow'

class ProductList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sort: {
                column: 'price',
                direction: 'desc'
            }
        }

        // Binding
        this.sortByColumnAndDirection = this.sortByColumnAndDirection.bind(this)
    }

    // Sort by 'column' and 'direction'
    sortByColumnAndDirection(objA, objB) {
        let isDesc = this.state.sort.direction === 'desc' ? 1 : -1
        let [a, b] = [objA[this.state.sort.column], objB[this.state.sort.column]]
        if(this.state.sort.column === 'price') {
            [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d.]/g, ''), ''), 10)
        }
        if(a > b) {
            return 1 * isDesc
        }
        if(a < b) {
            return -1 * isDesc
        }
        return
    }

    sortProducts() {
        // Convert 'obj' to 'array'
        let productsAsArray = Object.keys(this.props.products).map((productId) => this.props.products[productId])
        // Get the sorted array
        return productsAsArray.sort(this.sortByColumnAndDirection)
    }


    render() {
        // Loop over the sorted array
        let rows = []
        this.sortProducts().forEach((product) => {

            // Display certain products based on the filters
            if(product.name.indexOf(this.props.searchQuery) === -1 || (!product.stocked && this.props.inStock)) {
                return;
            }

            rows.push(
                <ProductTableRow 
                    product={product} 
                    key={product.id}
                    deleteProduct={this.props.deleteProduct}
                />
            )

        })
        

        return (
            <table>
                <thead>
                    <tr>
                        <ProductTableColumn 
                            column="name" 
                            currentSort={this.state.sort}
                        />
                        <ProductTableColumn 
                            column="price" 
                            currentSort={this.state.sort}
                        />
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