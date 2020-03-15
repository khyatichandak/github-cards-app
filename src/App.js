import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardList } from './components/cards/index';
import { Form } from './components/form/index';

// const users = [
//   {
//     id: 137,
//     name: "Joshua Peek",
//     avatar_url: "https://avatars2.githubusercontent.com/u/137?v=4",
//     company: "Previously GitHub, 37signals, Rails",
//   },
//   {
//     id: 1668,
//     name: "John McGrath",
//     avatar_url: "https://avatars1.githubusercontent.com/u/1668?v=4",
//     company: "AWS",
//   },
//   {
//     id: 11546463,
//     name: "Riya K",
//     avatar_url: "https://avatars2.githubusercontent.com/u/11546463?v=4",
//     company: "Microsoft",
//   }
// ]

class App extends React.Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profile) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles,profile]
    }))
  }
  render(){
    return (
      <div className="p-5">
          <h1 className="d-flex justify-content-center">
            {this.props.title}
          </h1>
          <Form onSubmit={this.addNewProfile}/>
          <CardList users={this.state.profiles}/>
      </div>
    );
  }
  
}

export default App;
