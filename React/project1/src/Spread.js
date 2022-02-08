import React, { Component} from 'react';

class Spread extends Component
{
    constructor()
    {
        super();
        this.state = {Contact:{contactid:'',contactname:''}}
    }
    onChangeHandler = (event)=>
    {
        let { name, value } = event.target;
        console.log("name and value ", name, value);
        let { Contact }  = this.state;
        this.setState({Contact:{...Contact,[name]:value}});
        setTimeout(()=>{
            console.log(this.state.Contact);
        },500)        
    }
    onSubmit= ()=>{
        console.log(this.state.Contact);
    }
    render()
    {
        let { Contact } = this.state;
        return(
            <>
                <h1>Contact Form</h1>
                <div className="form-group">
                    <label>Contact Id</label>
                    <input type="text" className="form-control" name="contactid" value={Contact.contactid} onChange={this.onChangeHandler} />
                </div>
                <div className="form-group">
                    <label>Contact Name</label>
                    <input type="text" className="form-control" name="contactname" value={Contact.contactname} onChange={this.onChangeHandler} />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" name="address" onChange={this.onChangeHandler} />
                </div>
                <div className="form-group">
                   <button className='btn btn-success' onClick={this.onSubmit} >Submit</button>
                </div>

            </>
        )
    }
}

export default Spread;