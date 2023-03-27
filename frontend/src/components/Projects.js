import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({project}) => {
    return(
        <tr>
            <td><Link to={`/projects/${project.id}`}>
                    {project.name}
                </Link>
            </td>
            <td>{project.repo_url}</td>
            <td>{project.users}</td>
        </tr>
    )
}

const ProjectsList = ({projects}) => {
    return(
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Repo url</th>
                    <th scope="col">Users</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project_) => <ProjectItem project={project_}/>)}
            </tbody>

        </table>
    )
}

export default ProjectsList;