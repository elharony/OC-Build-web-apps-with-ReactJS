import React from 'react'

class Filters extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const value = e.target[e.target.type === "checkbox" ? "checked" : "value"]
        const name = e.target.name
        
        this.props.updateInput({
            [name]: value
        })
    }


    render() {
        return (
            <div className="filters">
                <div className="form-group">
                    <input 
                        type="search" 
                        value={this.props.searchQuery}
                        name="searchQuery"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="checkbox"
                        defaultChecked={this.props.inStock}
                        name="inStock"
                        onChange={this.handleChange}
                    /> Only show products in stock
                </div>
            </div>
        )
    }
}

export default Filters