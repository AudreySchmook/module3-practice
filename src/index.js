import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const ShowAddresses = (props) => {
  const addressesHtml = props.address.map(elem => {
  return (
  <div className="addressBlock">
  <h3>{elem.name}</h3>
  <p>{elem.street}</p>
  <p>{elem.city}</p>
  </div>
  )
  })

  return (
  <div>
  {addressesHtml}
  </div>
  )
}

class UserAddress extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      name: '',
      street: '',
      city: '',
    };
    this.state = this.defaultState
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleStreetChange = (event) => {
    this.setState({ street: event.target.value })
  }

  handleCityChange = (event) => {
    this.setState({ city: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log (this.state)
    this.props.addAddress(this.state)
    this.setState(this.defaultState)
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <div/>
          <label>
            Street Address:
            <input type="text" value={this.state.street} onChange={this.handleStreetChange} />
          </label>
          <div/>
          <label>
            City/State/Zip:
            <input type="text" value={this.state.city} onChange={this.handleCityChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addresses: []
    }
  }
  addPost = (post) => { //add post to the posts array in state
    this.setState((prevState) => {
    return {
    addresses: [ ...prevState.addresses, addresses ]
    }
    })
  }
   
  render() {
    return (
      <div>
        <h1>We are practicing making React apps.</h1>
        <h2> Here is an address form to fill out:</h2>
        <UserAddress addAddress={this.addAddress} />
        <ShowAddresses address={this.state.address} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
