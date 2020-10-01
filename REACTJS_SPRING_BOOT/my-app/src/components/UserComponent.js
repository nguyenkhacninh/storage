import React from 'react';
import UserService from '../services/UserService'
import {Link } from "react-router-dom"

class UserComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }
    
    componentDidMount(){

        UserService.getUsers().then(
            (response)=>{
                this.setState({users: response.data})
            }
        );
    }

    handler = (userId)=>{
        this.props.history.push("/detail/" + userId)

    }

    render (){
        return(
            <div>

                <h1 className = "text-center"> Users List</h1>
                    
                <Link to="/create"><button type="submit" class="btn btn-primary" >ADD</button> </Link>
                        
                <table className= "table table-striped">
                    <thead>
                        
                        <tr>
                            <td> User ID</td>
                            <td> Name</td>
                            <td> Phone</td>
                            <td> ADDRESS</td>
                        </tr>
                    </thead>

                    <tbody>

                    {
                        this.state.users.map (
                            user => <tr key= {user.userId}  onClick={() => this.handler(user.userId)} > 
                            
                                        <td>{user.userId}</td>
                                        <td>{user.name}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address}</td>
                                    </tr>
                        )
                    }
                    </tbody>

                </table>

            </div>
        )
    }
}

export default UserComponent


