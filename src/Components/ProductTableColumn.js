import React from 'react'


class ProductTableColumn extends React.Component {
    render() {
        return (
            <th>{this.props.name} <button>▲</button> <button>▼</button></th>
        )
    }
}

export default ProductTableColumn