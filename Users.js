//component to view all users

import React from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

class Users extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
            isLoaded: true
        }

    }     

    componentDidMount() {
        axios.get('/user')
        
        .then((response) => {
            // handle success
            // console.log(response.data)
            this.setState( {
                users: response.data,
                isLoaded: true
            })
          })
          .catch((error) => {
            // handle error
            // console.log(error);
            this.setState({
                isLoaded: false,
                error
            })
          })

    }

    render(){
       //assign variables using the state
       const { isLoaded, error, users} = this.state;
        //conditional rendering: https://reactjs.org/docs/conditional-rendering.html
        //if we are waiting for our server to serve us the data render this part of code
        // also render this if the SERVER is offline

        if(!isLoaded) {
            return(
                <div>The page is loading or the SERVER is down...</div>
            )
            //render this part of code if we received the data from the server
        } else {
            return(
                <div>
                    <table width="50%" border="1">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>isLoggedIn</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.isLoggedIn}</td>
                                    <td><Link to='/viewUser'>View</Link></td>
                                    <td><Link to='/addUser'>Add</Link></td>
                                    <td><Link to='/editUser'>Edit</Link></td>
                                    {/* https://reactjs.org/docs/conditional-rendering.html#inline-if-else-with-conditional-operator */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        }
 }
    
    

}

export default Users;