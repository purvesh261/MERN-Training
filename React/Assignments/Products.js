import React, { useState } from 'react';

function Products () {
    let [productsList, setProductsList] = useState([]);
    let [properties, setProperties] = useState({nextCode:2, currentCode: 1, deleteIndex:-1, showDelete:false, update:-1});
    let [newProduct, setNewProduct] = useState({productCode:properties.currentCode, productName:"", productCategory:"Electronics", status:false, store:"Showroom"})

    const onChangeHandler = (event) => {
        let { name, value } = event.target;
        if (name === "status") {
            value = event.target.checked;
        }
        setNewProduct({...newProduct, [name]: value},)
    
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (properties.update >= 0){
            productsList[properties.update] = newProduct;
            setProductsList(productsList);
            setProperties({...properties, update: -1,currentCode: properties.nextCode, nextCode: properties.nextCode + 1});
        }
        else{
            setProductsList([...productsList, newProduct]);
            setProperties({...properties, currentCode: properties.nextCode, nextCode: properties.nextCode + 1});
        }
        
        setNewProduct({productCode:properties.nextCode, productName:"", productCategory:"Electronics", status:false, store:"Showroom"})
    }

    const onDelete = (idx) => {
        setProperties({...properties, showDelete:true, deleteIndex:idx})
    }

    const onDeleteYes = () => {
        let { deleteIndex } = properties;
        productsList.splice(deleteIndex, 1);
        setProductsList(productsList);
        setProperties({...properties, deleteIndex:-1, showDelete:false})
    }

    const onDeleteNo = () => {
        setProperties({...properties, showDelete:false, deleteIndex:-1})
    }

    const onUpdate = (idx) => {
        let product = productsList[idx];
        setProperties({...properties, update:idx, currentCode: product.productCode, nextCode:(properties.update == -1?properties.currentCode:properties.nextCode)})
        setNewProduct({...newProduct, productCode:product.productCode, productName:product.productName, productCategory:product.productCategory, status:product.status, store:product.store})
    }

    return(
        <div className="row">
                <div className="col-4">
                    <h1>Create Product</h1>
                    <form className='formGroup mx-2 my-5' onSubmit={onSubmitHandler}>
                        <label>Product Code:</label><br/>
                        <input type="text"
                            name="id"
                            className='p-1 w-75 mb-3'
                            value={newProduct.productCode}
                            onChange={onChangeHandler}
                            disabled></input><br/>

                        <label>Name:</label><br/>
                        <input type="text"
                            name="productName"
                            className='p-1 w-75 mb-3'
                            value={newProduct.productName}
                            onChange={onChangeHandler}></input><br/>

                        <label>Category:</label><br/>
                        <select name="productCategory" onChange={onChangeHandler} value={newProduct.productCategory} className='p-1 w-75 mb-3'>
                            <option>Electronics</option>
                            <option>Electrical</option>
                        </select><br/>

                        <label for="status">Status: </label>
                        <input type="checkbox" name="status" className="form-check-input mb-3" value={newProduct.status} checked={newProduct.status} onChange={onChangeHandler}></input><br/>
                        
                        <label>Store:</label>
                        <input type="radio" name="store" onChange={onChangeHandler} className="form-check-input" value="Showroom" checked={newProduct.store === "Showroom"}></input>
                        <label className="form-check-label mx-2">Showroom</label>

                        <input type="radio" name="store" onChange={onChangeHandler} className="form-check-input" value="Store 1" checked={newProduct.store === "Store 1"}></input>
                        <label className="form-check-label mx-2">Store 1</label>
                        <br/>

                        <input  type="submit" className='btn btn-success my-3'></input>
                    </form>
                </div>
                <div className='col-8'>
                <h1>Products</h1>
                {properties.showDelete?
                    <div className="alert alert-danger m-3" role="alert">
                        <h5 className="alert-heading">Delete Product</h5>
                        Are you sure you want to delete this product?<br/>
                        <button className='btn btn-danger my-3 mx-1 px-4' onClick={() => onDeleteYes()}>Yes</button>
                        <button className='btn btn-secondary my-3 mx-1 px-4' onClick={() => onDeleteNo()}>No</button>
                    </div>
                    :null}
                <table className='table table-striped'>
                    <tbody>
                        <tr>
                            <th>Product Code</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Store</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        {productsList.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{item.productCode}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.productCategory}</td>
                                    <td><input type="checkbox" checked={item.status} ></input></td>
                                    <td>{item.store}</td>
                                    <td><button className='btn btn-primary' onClick={() => onUpdate(idx)}>Update</button></td>
                                    <td><button className='btn btn-danger' onClick={() => onDelete(idx)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
            </div>
    )
}

export default Products;