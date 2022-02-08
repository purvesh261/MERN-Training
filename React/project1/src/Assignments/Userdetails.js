import React, { Component} from 'react';

class Userdetails extends Component {
    constructor(props){
        super();
    }

    render() {
        let { userRole } = this.props
        return(
            <h2>User Role: { userRole } </h2>
        )
    }
}

export default Userdetails;