import React,{Component} from 'react';


class Profile extends Component {


  render(){
    let userdata= this.props.userData;

    console.log(userdata);
    console.log(userdata.repos)
    if(userdata.notFound==='Not Found'){
      return(<div><h2>No users found!</h2></div>);
    }
    else{
    return(  <div>

      <img src={userdata.avatar} class="card-img-top" id="img1" alt="username image" />

        <ul id="li" class="list-group list-group-flush">
          <li class="list-group-item"><a href={userdata.homeURL}>Visit</a></li>
               <li class="list-group-item">UserName:{userdata.username}</li>

     <li class="list-group-item">Followers:{userdata.followers}</li>
     <li class="list-group-item">Following:{userdata.following}</li>
     <li class="list-group-item">Repo:{userdata.repos}</li>

   </ul>

      </div>)

    }
    return(
      <div>


      </div>
    );
  }
}
export default Profile;
