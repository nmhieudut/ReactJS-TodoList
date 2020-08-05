import React, { useState, useEffect, useRef } from 'react'
import { Input, Button, Row, Col, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Search } = Input;

export default function TodoInput(props) {
    const { onAdd, onSearch, onSave, onClear } = props;
    const [addText, setAddText] = useState('');
    const [searchText, setSearchText] = useState('');
    const addInput = useRef();
    const searchInput = useRef();

    useEffect(() => {
        addInput.current.focus();
    }, [])
    //add
    const onAddText = () => {
        if (!onAdd) return;
        if (addText) {
            const value = {
                content: addText
            };
            onAdd(value);
        }
        else {
            Modal.error({
                content: 'Please enter your todo...',
            });
        }
        addInput.current.state.value = "";
    }
    const handleAddValueChange = (e) => {
        setAddText(e.target.value)
    }
    //search
    const onSearchText = () => {
        if (!onSearch) return;
        if (searchText) onSearch(searchText);
        else {
            Modal.error({
                content: 'Enter something pls...',
            });
        }
        searchInput.current.state.value = "";
    }
    const handleSearchValueChange = (e) => {
        setSearchText(e.target.value)
    }
    return (
        <div>
            <Row className="input">
                <Col span={10}>
                    <Input placeholder="Enter..." ref={addInput} onChange={handleAddValueChange} />
                </Col>
                <Col>
                    <Button type="primary" onClick={onAddText}><PlusOutlined /></Button>
                </Col>
                <Col style={{ paddingLeft: 50 }} span={8}>
                    <Search placeholder="Search..." ref={searchInput} onChange={handleSearchValueChange} onSearch={onSearchText} enterButton />
                </Col>
                <Col span={2}>
                    <Button style={{ backgroundColor: '#00c853', color: 'white' }} onClick={onSave}>Save</Button>
                </Col>
                <Col span={2}>
                    <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={onClear}>Delete your cache</Button>
                </Col>
            </Row>
        </div>
    )
}
