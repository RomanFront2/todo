import { ToDo } from "../../models/todo-item"
import { ListItemLink } from "./ListeItem.styled";

export const ListItem = ({ todo }: { todo: ToDo }) => {
    const href = `/list/${todo.id}`;
    return (
        <ListItemLink isDone={todo.isDone} to={href}>{todo.text}</ListItemLink>
    )
}