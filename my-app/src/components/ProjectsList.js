import React from "react";
import { List, ListItem, ListItemText, Link } from "@material-ui/core";

class ProjectList extends React.Component {
    render() {
        console.log(this.props);
        return (
            <List>
                {this.props.projects && 
                this.props.projects.map(project => {
                    return (
                        <Link href={ProcessingInstruction.html_url}>
                            <ListItem key={project.html_url} button>
                                <ListItemText primary={project.name} />
                                <ListItemText secondary={`Language: ${project.language}`} />
                            </ListItem>
                        </Link>
                    )
                })}
            </List>
        )
    }
}

export default ProjectList;