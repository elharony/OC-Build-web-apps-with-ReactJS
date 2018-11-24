import React from 'react'


class ProductTableColumn extends React.Component {

    constructor(props) {
        super(props)

        this.handleSort = this.handleSort.bind(this)
    }

    handleSort(e) {
        this.props.updateSort(this.props.column, e.target.name)
    }

    render() {

        let currentSort = this.props.currentSort.column === this.props.column ? this.props.currentSort.direction : false

        return (
            <th>
                {this.props.column} 
                <button 
                    className={currentSort === 'asc' ? 'SortableColumnHeader-current' : ''}
                    onClick={this.handleSort}
                >▲</button> 
                <button 
                    className={currentSort === 'desc' ? 'SortableColumnHeader-current' : ''}
                    onClick={this.handleSort}
                >▼</button> 
            </th>
        )
    }
}

export default ProductTableColumn