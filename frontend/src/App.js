import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import UserList from './components/Users';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';

class App extends React.Component {
  	constructor(props) {
    	super(props)
    	this.state = {
      		'users': [],
    	}
  	}

  	componentDidMount() {
    	axios.get('http://127.0.0.1:8080/api/users/').then(response => {
      		const users = response.data
      		this.setState({
        		'users':users
      		})
    	}).catch(error => console.log(error))
  	}
  
  
  	render() {
    	return (
			<div>
				<div>
					<Menu />
				</div>
				<div className='container'>
					<UserList users={this.state.users}/>
				</div>
				<div>
					<Footer />
				</div>
			</div>
    	);
  	}
}    

export default App;
