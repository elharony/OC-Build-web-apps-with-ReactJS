import React from 'react'

class ProductTableRow extends React.Component {
    render() {
        return (
            <tr>
                <td className={this.props.product.stocked ? 'stock' : 'out-of-stock'}>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
                <td><button>X</button></td>
            </tr>
        )
    }
}

export default ProductTableRow