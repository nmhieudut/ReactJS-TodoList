import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import './App.css';
import TodoList from "./components/TodoList"

const { Header, Footer, Content } = Layout;
function App() {
  const [todo, setTodo] = useState([])

  useEffect(() => {
    const storageTodo = JSON.parse(localStorage.getItem('todos'));
    setTodo(storageTodo)
  }, [])

  const onDelete = (e) => {
    const index = todo.find(x => x.id === e.id);
    if (index < 0) return;
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  }

  const onAdd = (item) => {
    const newTodo = {
      id: todo.length + 1,
      ...item,
    };
    const newTodoList = [...todo];
    newTodoList.unshift(newTodo);
    setTodo(newTodoList);
  }

  const onSearch = (e) => {
    const searchItem = todo.filter(x => x.content.toLowerCase().includes(e.toLowerCase()));
    console.log("searched: ", searchItem);
    setTodo(searchItem);

  }
  const onSave = () => {
    localStorage.setItem("todos", JSON.stringify(todo))
  }


  return (
    <div className="App">
      <Layout>
        <Header className="header">REACT HOOKS - TODO LISTS</Header>
        <Content style={{ backgroundColor: 'white' }}>
          <TodoList todo={todo} onDelete={onDelete} onAdd={onAdd} onSearch={onSearch} onSave={onSave} />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
