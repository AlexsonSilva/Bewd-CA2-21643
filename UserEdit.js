//component to edit a user entry

import React from 'react';

class UserEdit extends React.Component{
    constructor(props){
        super(props);
        let id = window.location.href.split('=')[1]
        this.state = {
        }
    }
    render(){
        return(
            <div>This is the User Edit component</div>
        )
    }
}

export default UserEdit;
