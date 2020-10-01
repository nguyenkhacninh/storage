
import React from 'react';
import UserService from '../services/UserService'

class UserDetailForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
           name: "",
           userid :"",
           phone : "",
           address : ""
        }
    }

    componentDidMount(){
        if(this.props.match.params){
            var userId = this.props.match.params.userId;
            UserService.getUserDetail(userId).then(
                (response)=>{
                    this.setState({ name : response.data.name, 
                                    userid : response.data.userId,
                                    phone : response.data.phone, 
                                    address : response.data.address})
                }
            );
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

    update = (e) =>{
        e.preventDefault();  
        let user = {name : this.state.name, 
            userId : this.state.userid,
            phone: this.state.phone,
            address : this.state.address
        } 
        UserService.updateUserDetail(user).then(res =>{
            this.props.history.push("/users")
        } 

        );
    }

    delete = (e) =>{
        e.preventDefault();  
        var userId = this.state.userid
        UserService.deleteUser(userId).then(res =>{
            this.props.history.push("/users")
        } 

        );
    }

    cancel = () =>{
        this.props.history.push("/users")
    }

    render (){
        return(
            <div>
            
                <div>
                    <form class="form-inline">
                        <label for="email" class="mr-sm-2">Name</label>
                        <input class="form-control" id="name"  value = {this.state.name} onChange = {this.handleChangeName}/>
                        <label for="email" class="mr-sm-2">Phone</label>
                        <input class="form-control" id="phone"  value = {this.state.phone} onChange = {this.handleChangePhone}/>
                        <label for="email" class="mr-sm-2">Address</label>
                        <input class="form-control" id="address"  value = {this.state.address} onChange = {this.handleChangeAddress}/>
                        <button type="submit" class="btn btn-primary" onClick = {this.update}>Update</button>
                        <button type="submit" class="btn btn-danger" onClick = {this.delete}>Delete</button>
                        <button type="submit" class="btn btn-dark" onClick = {this.cancel}>Cancel</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default UserDetailForm


