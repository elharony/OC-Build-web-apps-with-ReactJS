import React from 'react'

class AddProduct extends React.Component {
    render() {
        return (
            <form>
                <h2>Add Product</h2>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text"/>
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input type="text"/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text"/>
                </div>
                <div className="form-group">
                    <input type="checkbox"/> In stock?
                </div>
                <button type="submit">Save!</button>
            </form>
        )
    }
}

export default AddProduct