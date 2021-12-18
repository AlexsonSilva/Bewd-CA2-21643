// component to add a user
import React from 'react';

class UserAdd extends React.Component{
    constructor(props){
        super(props);
        let id = window.location.href.split('=')[1]
        this.state = {
        }
    }

    render(){
        return(
            <div>This is the User Add component</div>
        )
    }
}

export default UserAdd;