import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/style.css';
import axios from 'axios';

export class Form extends React.Component{
    state = {
        userName: '',
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        const profileData = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(profileData.data);
        this.setState({userName:''});
    };
    render(){
        return (
            <div className="row d-flex justify-content-center">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="GitHub username" required value={this.state.userName} onChange={event => this.setState({userName: event.target.value})}/>
                    <button className="btn btn-info">Add User</button>
                </form>
            </div>
        );
    }
}
