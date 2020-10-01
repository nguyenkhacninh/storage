
import React from 'react';
import UserService from '../services/UserService'

class CreateUserForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
           name: "",
           phone: "",
           address: ""
        }
    }
    handleChangeName =  (event) => {
        this.setState({name : event.target.value})
    }
    handleChangePhone =  (event) => {
        this.setState({phone : event.target.value})
    }
    handleChangeAddress =  (event) => {
        this.setState({address : event.target.value})
    }

    cancle =  () => {
        this.props.history.push("/users")
    }

    saveUser = (e) =>{
        e.preventDefault();
        let user = {name : this.state.name,
                    phone : this.state.phone, 
                    address : this.state.address}
        UserService.createUsers(user).then(res =>{
           this.props.history.push("/users")
        } 

        );
    }

    render (){
        return(
            <div>
                <h1 className = "text-center">ADD USER</h1>
                <div>
                    <form class="form-inline">
                        <label for="email" class="mr-sm-2">Name</label>
                        <input class="form-control" id="name"  value = {this.state.name} onChange = {this.handleChangeName}/>
                        <label for="email" class="mr-sm-2">Phone</label>
                        <input class="form-control" id="phone"  value = {this.state.phone} onChange = {this.handleChangePhone}/>
                        <label for="email" class="mr-sm-2">Address</label>
                        <input class="form-control" id="address"  value = {this.state.address} onChange = {this.handleChangeAddress}/>
                        <button type="submit" class="btn btn-primary" onClick = {this.saveUser}>Create</button>
                        <button type="submit" class="btn btn-dark" onClick = {this.cancle}>Cancle</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default CreateUserForm


