import React,{Component} from 'react';


class Search extends Component {
  submitForm(event){
    event.preventDefault();
    let value= this.refs.username.value;
    this.props.searchProfile(value);
    this.refs.username.value='';

  }

  render(){
    return(
      <div>
      <form onSubmit={this.submitForm.bind(this)}>
      <label><input class="form-control" aria-label="Username" aria-describedby="basic-addon1" type="search"  ref="username" placeholder="type username"/></label>
      </form>

      </div>
    );
  }
}
export default Search;
