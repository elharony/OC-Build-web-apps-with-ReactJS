import React from 'react'


class ProductTableColumn extends React.Component {

    render() {

        let currentSort = this.props.currentSort.column === this.props.column ? this.props.currentSort.direction : false

        return (
            <th>
                {this.props.column} 
                <button className={currentSort === 'asc' ? 'SortableColumnHeader-current' : ''}>▲</button> 
                <button className={currentSort === 'desc' ? 'SortableColumnHeader-current' : ''}>▼</button> 
            </th>
        )
    }
}

export default ProductTableColumn