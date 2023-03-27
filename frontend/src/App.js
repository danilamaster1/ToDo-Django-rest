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

class App extends React.Component {
  	constructor(props) {
    	super(props)
    	this.state = {
      		'users': [],
			'projects': [],
			'todos': [],
    	}
  	}

  	componentDidMount() {
    	axios.get('http://127.0.0.1:8080/api/users/').then(response => {
      		const users = response.data
      		this.setState({
        		'users':users
      		})
    	}).catch(error => console.log(error))

		axios.get('http://127.0.0.1:8080/api/projects/').then(response => {
			const projects = response.data
			this.setState({
				'projects':projects
			})
	  	}).catch(error => console.log(error))

		axios.get('http://127.0.0.1:8080/api/todo/').then(response => {
			const todos = response.data
			this.setState({
				'todos':todos
			})
		}).catch(error => console.log(error))
  	}
  
  
  	render() {
    	return (
			<div className='text-bg-secondary'>
				<BrowserRouter>
					<div>
						<Menu />
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
