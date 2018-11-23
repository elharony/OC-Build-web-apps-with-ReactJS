import React from 'react'

class Filters extends React.Component {
    render() {
        return (
            <div className="filters">
                <div className="form-group">
                    <input 
                        type="search" 
                        value={this.props.searchQuery}
                        onChange={(e) => this.props.updateSearch(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="checkbox" 
                        checked={this.props.inStock}
                    /> Only show products in stock
                </div>
            </div>
        )
    }
}

export default Filters