import React from 'react'

class AddProduct extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            product: {
                id: '',
                name: '',
                category: '',
                price: '',
                stocked: false
            }
        }

        // Binding
        this.handleChange = this.handleChange.bind(this)
        this.addProductHandler = this.addProductHandler.bind(this)
    }

    handleChange(e) {
        const value = e.target[e.target.type === "checkbox" ? "checked" : "value"]
        const name = e.target.name

        this.setState((prevState) => {
            prevState.product[name] = value
            return { product: prevState.product }
        })
    }

    addProductHandler(e) {
        this.props.onAdd(this.state.product)

        // Reset the form values after submitting
        this.setState({
            product: {
                id: '',
                name: '',
                category: '',
                price: '',
                stocked: false
            }
        })

        // Don't refresh the page
        e.preventDefault()
    }

    render() {
        return (
            <form>
                <h2>Add Product</h2>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text"
                        value={this.state.product.name}
                        name="name"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input 
                        type="text"
                        value={this.state.product.category}
                        name="category"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input 
                        type="text"
                        value={this.state.product.price}
                        name="price"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="checkbox"
                        value={this.state.product.stocked}
                        name="stocked"
                        onChange={this.handleChange}
                    /> In stock?
                </div>
                <button type="submit" onClick={this.addProductHandler}>Save!</button>
            </form>
        )
    }
}

export default AddProduct