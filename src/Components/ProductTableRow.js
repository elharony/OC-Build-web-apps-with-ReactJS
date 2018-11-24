import React from 'react'

class ProductTableRow extends React.Component {

    constructor(props) {
        super(props)

        this.delete = this.delete.bind(this)
    }

    delete() {
        this.props.deleteProduct(this.props.product.id)
    }

    render() {
        return (
            <tr>
                <td className={this.props.product.stocked ? 'stock' : 'out-of-stock'}>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
                <td><button onClick={this.delete}>X</button></td>
            </tr>
        )
    }
}

export default ProductTableRow