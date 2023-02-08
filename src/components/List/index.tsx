import { ListItem, ListItemSecondaryAction, Switch } from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import TodoItem from "../TodoItem";

const ListTodos = () => {
    const [todosToday, setTodosToday] = useState([
        {title: "Visit David", subtitle : "Lorem Ipsum Dolor Sit met...", completed: false},
        {title: "Goceries For Dinner", subtitle : "Lorem Ipsum Dolor Sit met...", completed: false},
        {title: "Fix Dad’s iPad", subtitle : "Lorem Ipsum Dolor Sit met...", completed: true,}
    ])

    return (
        <List style={{ boxShadow: "16px 16px 20px rgba(0,0,0,0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)" }}>
            {todosToday && todosToday.map((todo) => {
                return (
                    <ListItem key={todo.title}>
                        <TodoItem  {...todo}/>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default ListTodos;