import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Github from './github';
import Header from'./component/Header';
import Auth0Lock from 'auth0-lock';


class App extends Component {


constructor(props){
  super(props);

  this.state = {
    idToken:'',
    profile:{}
  };
}

 static defaultProps = {
   clientID:'aMYSv9yvyXvASu40cLrjoagfEIvYFCXR',
   domain:'rahul4989.auth0.com'
 }

componentWillMount(){
  this.lock = new Auth0Lock(this.props.clientID,this.props.domain);

  this.lock.on('authenticated',(authResult)=>{
    console.log(authResult.accessToken)

    this.lock.getProfile(authResult.accessToken,(error,profile)=>{
      if(error){
        console.log(error);
        return;
      }
      console.log(profile)
      this.setProfile(authResult.accessToken,profile);

    })
  })

  this.getProfile();

}

getProfile(){
  if(localStorage.getItem('accessToken') !=null){
    this.setState({
      idToken:localStorage.getItem('accessToken'),
      profile:JSON.parse(localStorage.getItem('profile'))
    })
  }
}



setProfile(accessToken,profile){
  localStorage.setItem('idToken',accessToken);
  localStorage.setItem('profile',JSON.stringify(profile));

  this.setState({
    idToken:localStorage.getItem('idToken'),
    profile:JSON.parse(localStorage.getItem('profile'))
  })

}

showLock(){
  this.lock.show()
}

Logout(){
  this.setState({  idToken:'',
    profile:{}

  })
    localStorage.removeItem('idToken');
    localStorage.removeItem('profile');



}


  render() {
    let gitty;

    if(this.state.idToken){
      gitty = <Github/>;
    }
    else{
      gitty="Click on Login to view Github viewer";
    }
    return (
      <div className="App">

       <Header
         lock={this.lock}
         idToken={this.state.idToken}
         onLogout={this.Logout.bind(this)}
        onLogin={this.showLock.bind(this)}
         />
       {gitty}
      </div>
    );
  }
}

export default App;
