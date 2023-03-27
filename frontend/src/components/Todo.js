import React from "react";

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

const TodoList = ({todos}) => {
    return(
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
                {todos.map((todo_) => <TodoItem todo={todo_}/>)}
            </tbody>

        </table>
    )
}

export default TodoList;