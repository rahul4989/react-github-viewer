import React,{Component} from 'react';
import Profile from './component/profile';
import Search from './component/search';

const API= 'https://api.github.com/users';

class Github extends Component {

  constructor(props){
    super(props);

    this.state = {
      username:'rahul4989',
      name:'',
      avatar:'',
      repos:'',
      followers:'',
      following:'',
      notFound:'',
      homeURL:''
    };
  }

  getProfile(username){
    let finalURL = `${API}/${username}`;

    fetch(finalURL)
    .then((res)=>
      res.json()
      ).then((data)=>{
        this.setState({
          username:data.login,
          name:data.name,
          avatar:data.avatar_url,
          repos:data.public_repos,
          followers:data.followers,
          following:data.following,
          notFound:data.message,
          homeURL:data.html_url
          })
          console.log(data);
      })
      .catch((error)=>console.log('There was a problem in fetching data'))

  }

componentDidMount(){
  this.getProfile(this.state.username);
}

  render(){
    return(
      <div>
       <section>
         <Search searchProfile={this.getProfile.bind(this)}/>
         <Profile userData={this.state}/>
       </section>


      </div>
    );
  }
}
export default Github;
