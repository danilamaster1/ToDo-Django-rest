import React from "react";
import { useParams, includes } from "react-router-dom";

const TodoItem = ({todo}) => {
    return(
        <tr>
            <td>{todo.project}</td>
            <td>{todo.text}</td>
            <td>{todo.created}</td>
            <td>{todo.updated}</td>
            <td>{todo.user}</td>
            <td>{todo.is_active ? 'Yes' : 'No'}</td>
            <td>{todo.is_deleted ? 'Yes' : 'No'}</td>
        </tr>
    )
}

const TodoProjects = ({todos}) => {
    let {projectId} = useParams()
    let filter_todos = todos.filter((todo) => todo.project == projectId)
    return(
        <div>
            <h4 className="display-4">ProjectId-{projectId} todo:</h4>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Project</th>
                        <th scope="col">Text</th>
                        <th scope="col">Created</th>
                        <th scope="col">Updated</th>
                        <th scope="col">User</th>
                        <th scope="col">Is active</th>
                        <th scope="col">Is deleted</th>
                    </tr>
                </thead>
                <tbody>
                    {filter_todos.map((todo_) => <TodoItem todo={todo_}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default TodoProjects;
