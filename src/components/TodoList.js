import React from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { List, Divider } from 'antd';
import '../App.css'

export default function TodoList(props) {
    const { todo, onDelete, onAdd, onSearch, onSave } = props;

    const renderItem = (item) => {
        return (
            <React.Fragment>
                <TodoItem item={item} onDelete={onDelete} />
            </React.Fragment>
        )
    }
    return (
        <div>
            <Divider orientation="center" className="divider">Todos List</Divider>
            <TodoInput onAdd={onAdd} onSearch={onSearch} onSave={onSave} />
            <List
                size="large"
                dataSource={todo}
                renderItem={renderItem}
            />
        </div>
    )
}
