import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/style.css';

export const CardList = (props) => (
    <div className="p-2">{props.users.map(profile=><Card key={profile.id} {...profile}/>)}</div>
);

class Card extends React.Component{
    render(){
      return (
        <div className="row m-3 p-3" style={{backgroundColor:"#e2e2e2"}}>
          <div className="col-auto">
            <img src={this.props.avatar_url} alt="Profile" className="profile-picture"/>
          </div>
          <div className="col-auto">
            <h5>{this.props.name}</h5>
            <p>@{this.props.company}</p>
          </div>
        </div>
      );
    }
}