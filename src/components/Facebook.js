import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
    picture: '',
  };
  responseFacebook = (response) => {
    this.setState({
      isLoggedIn: true,
      userId: response.userId,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };
  componentClicked = () => console.log('clicked');
  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: '400px',
            margin: 'auto',
            background: '#f4f4f4',
            padding: '20px',
            color: '#000',
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email:{this.state.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId='3615890281810348'
          autoLoad={true}
          fields='name,email,picture'
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}

export default Facebook;