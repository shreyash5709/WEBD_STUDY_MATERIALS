import { useState } from "react"
import { v4 as uuidv4 } from "uuid";

export default function TodoList(){
    let [todos, setTodos] = useState([
        {
        task: "sample task",
        id: uuidv4()
        }
    ]);
    let [newTodo, setNewTodo] = useState("");

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4()}]
        });
        setNewTodo("");
    }

    let deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
    }

    return(
        <div>
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
            <br />
            <button onClick={addNewTask}>Add task</button>
            <br /><br /><br /><br />
            <hr />
            <h4>Todo tasks</h4>
            <ul>
                {todos.map((todo) => 
                    <li key={todo.id}>
                        <span>{todo.task}</span> &nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}