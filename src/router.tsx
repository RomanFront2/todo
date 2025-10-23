import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ToDo } from "./models/todo-item";
import { ViewList } from "./pages/ViewList";
import { ViewListItem } from "./pages/ViewListItem";

const todos: ToDo[] = [
    {
        id: 0,
        text: 'Первое дело',
        isDone: false
    },
    {
        id: 1,
        text: 'Второе дело',
        isDone: true
    },
    {
        id: 2,
        text: 'Третье дело',
        isDone: false
    },
    {
        id: 3,
        text: 'Четвёртое дело',
        isDone: true
    }
]

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            { path: '/', element: <ToDoListPage /> },
            { path: '/list', element: <ViewList todos={todos} /> },
            { path: '/list/:id', element: <ViewListItem todos={todos} /> }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])