import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import UserList from './components/Users';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ProjectsList from './components/Projects';
import TodoList from './components/Todo';
import NotFound404 from './components/NotFound404';
import TodoProjects from './components/TodoProject';
import LoginForm from './components/Auth';
import Cookies from 'universal-cookie';


class App extends React.Component {
  	constructor(props) {
    	super(props)
    	this.state = {
      		'users': [],
			'projects': [],
			'todos': [],
			'token': '',
    	}
  	}

	get_token(username, password) {
		const data = {username:username, password:password}
		axios.post('http://127.0.0.1:8080/api-token-auth/', data).then(response => {
			this.set_token(response.data['token'])
		}).catch(error => alert('неверно'))
	}

	set_token(token){
		const cookies = new Cookies()
		cookies.set('token', token)
		this.setState({'token': token}, ()=> this.load_data())
	}
	
	is_auth(){
		return !!this.state.token
	}

	logout(){
		this.set_token('')
		this.setState({'users':[]}, ()=> this.load_data())
		this.setState({'projects':[]}, ()=> this.load_data())
		this.setState({'todos':[]}, ()=> this.load_data())
	}

	get_headers(){
		let headers = {
			'Content-Type': 'applications/json'
		}
		if (this.is_auth()) {
			headers['Authorization'] = 'Token ' + this.state.token
		}
		return headers
	}

	get_token_from_storage() {
		const cookies = new Cookies()
		const token = cookies.get('token')
		this.setState({'token':token}, ()=> this.load_data())
	}

	load_data(){
		const headers = this.get_headers()
		axios.get('http://127.0.0.1:8080/api/users/', {headers}).then(response => {
			const users = response.data
			this.setState({
			  'users':users
			})
	    }).catch(error => console.log(error))

	    axios.get('http://127.0.0.1:8080/api/projects/', {headers}).then(response => {
			const projects = response.data
			this.setState({
				'projects':projects
		  	})
		}).catch(error => console.log(error))

	    axios.get('http://127.0.0.1:8080/api/todo/', {headers}).then(response => {
		    const todos = response.data
		    this.setState({
	    		'todos':todos
		 	})
	    }).catch(error => console.log(error))
	}

  	componentDidMount() {
		this.get_token_from_storage()
  	}
  
  
  	render() {
    	return (
			<div className='text-bg-secondary'>
				<BrowserRouter>
					<div>
						<Menu />
						<button onClick={()=> this.logout()}>Logout</button>
					</div>
					<div className='container p-4'>
						<Routes>
							<Route exact path='/' element={<Navigate to='/users'/>}/>
							<Route path='/projects'>
								<Route index element={<ProjectsList projects={this.state.projects}/>}/>
								<Route path=':projectId' element={<TodoProjects todos={this.state.todos}/>}/>
							</Route>

							<Route exact path='/users' element={<UserList users={this.state.users}/>}/>
							<Route exact path='/todo' element={<TodoList todos={this.state.todos}/>}/>

							<Route exact path='/login' element={<LoginForm get_token={(username, password) => this.get_token(username, password)}/>}/>

							<Route path='*' element={<NotFound404/>}/>
						</Routes>
					</div>
					<div>
						<Footer />
					</div>
				</BrowserRouter>
			</div>
    	);
  	}
}    

export default App;
