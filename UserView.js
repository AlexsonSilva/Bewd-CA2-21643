// component to view 1 single user
import React from 'react';

class UserView extends React.Component{
    constructor(props){
        super(props);
        let id = window.location.href.split('=') [1]
    }
    render(){
        return(
            <div>This is the User View component</div>
        )
    }
}

export default UserView;