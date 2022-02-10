import  React, { Component } from 'react';
import axios from 'axios';

class VendorCRUD extends Component {
    constructor()
    {
        super();
        this.state = {vendor:{id:"", vendorName:"", contact:"", type:false}, Vendors: [], showDelete:false, deleteID: -1, showAlert:false, updateIndex:-1};
    }

    getVendors = () => {
        axios.get("http://localhost:4000/vendor").then(response => {
            this.setState({Vendors:response.data});
        })
    }
    componentDidMount()
    {
        this.getVendors();
    } 

    onChangeHandler = (event) => {
        let { name, value } = event.target;
        let { vendor } = this.state;
        if(name === "type")
        {
            value = event.target.checked
        }
        this.setState({vendor: {...vendor, [name]:value}});
    }

    onSubmit = (event) => {
        event.preventDefault();
        let { vendor, updateIndex } = this.state;
        let URL = "http://localhost:4000/vendor/";
        if(updateIndex > -1)
        {
            URL = URL + vendor.id;
            axios.put(URL, vendor).then((response) => {
                console.log(response);
                if(response.statusText === "OK")
                {
                    this.setState({showAlert:true, updateIndex:-1})
                    setTimeout(() => {
                        this.setState({showAlert:false})
                    },2500)
                    this.getVendors();
                }
            });
        }
        else
        {
            axios.post(URL, vendor).then((response) => {
                console.log(response.statusText);
                if(response.statusText === "Created")
                {
                    this.setState({showAlert:true})
                    setTimeout(() => {
                        this.setState({showAlert:false})
                    },2500)
                    this.getVendors();
                }
            });
        }  

        vendor = {id:"", vendorName:"", contact:"", type:false};
        this.setState({ vendor });
    }

    onUpdateHandler = (item) => {
        let { vendor, updateIndex } = this.state;
        
        vendor.id = item.id;
        vendor.vendorName = item.vendorName;
        vendor.contact = item.contact;
        vendor.type = item.type;
        updateIndex = item.id;
        console.log(vendor,"item", item)
        this.setState({ vendor, updateIndex })
    }

    onDelete = (empID) => {
        this.setState({showDelete:true, deleteID:empID})
    }

    onDeleteYes = () => {
        let { deleteID } = this.state
        const URL = "http://localhost:4000/vendor/" + deleteID;
        axios.delete(URL).then((response) => {
            console.log(response)
            this.setState({showDelete:false, deleteID:-1})
            this.getVendors();
        })
    }

    onDeleteNo = () => {
        this.setState({showDelete:false, deleteID:-1})
    }

    render() {
        let { vendor, Vendors, showAlert, showDelete, updateIndex } = this.state;
        return (
            <>
            
            <div className='row mb-5 mt-5 Crud'>
                <div className='col-4'>
                    <h1>Create Vendor</h1>
                    {showAlert && (
                            <div className="alert alert-success alert-dismissible fade show" role="alert">Success</div>
                    )}

                    <form onSubmit={this.onSubmit}>
                        <label>Vendor ID</label><br/>
                        <input type="text" name="id" className='w-75 p-1 m-1 mb-2' value={vendor.id} onChange={this.onChangeHandler} disabled={updateIndex > -1}></input><br/>
                        <label>Name</label><br/>
                        <input type="text" name="vendorName" className='w-75 p-1 m-1 mb-2' value={vendor.vendorName} onChange={this.onChangeHandler}></input><br/>
                        <label>Contact</label><br/>
                        <input type="text" name="contact" className='w-75 p-1 m-1 mb-2' value={vendor.contact} onChange={this.onChangeHandler}></input><br/>
                        <label>Type:</label>
                        <input type="checkbox" name="type" className="form-check-input mb-3" value={vendor.type} checked={vendor.type} onChange={this.onChangeHandler}></input><br/>
                        
                        <input type="submit" className="btn btn-success m-1" value="Submit"></input>
                    </form>
                </div>
                <div className='col-8'>
                {showDelete?
                    <div className="alert alert-danger m-3" role="alert">
                        <h5 className="alert-heading">Delete Vendor</h5>
                        Are you sure you want to delete this vendor?<br/>
                        <button className='btn btn-danger my-3 mx-1 px-4' onClick={() => this.onDeleteYes()}>Yes</button>
                        <button className='btn btn-secondary my-3 mx-1 px-4' onClick={() => this.onDeleteNo()}>No</button>
                    </div>
                    :null}
                <table className='table table-striped m-3'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Vendor Name</th>
                        <th>Contact No</th>
                        <th>Type</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Vendors.map((item,idx) => {
                            return (
                                <tr key={idx}>
                                <td>{item.id}</td>
                                <td>{item.vendorName}</td>
                                <td>{item.contact}</td>
                                <td><input type="checkbox" className="form-check-input mb-3" checked={item.type} readOnly></input><br/></td>
                                <td><button className='btn btn-primary' onClick={() => this.onUpdateHandler(item)}>Update</button></td>
                                <td><button className='btn btn-danger' onClick={() => this.onDelete(item.id)}>Delete</button></td>
                                </tr>
                            )
                        }
                        )
                    }
                    </tbody>
                </table>
                </div>
                
            </div>
            
            </>
        );
    }
}

export default VendorCRUD;