import React from 'react'
import { List, Button, Menu, Dropdown, Row, Col } from 'antd';
import { DownOutlined, EditOutlined, CloseOutlined } from '@ant-design/icons';

export default function TodoItem(props) {
    const { item, onDelete } = props;

    //edit
    const onEdit = () => {

    }
    //show actions
    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={onDelete}><CloseOutlined />Delete</Menu.Item>
            <Menu.Item key="2" onClick={onEdit}> <EditOutlined />Edit</Menu.Item>
        </Menu>
    );
    return (
        <div>
            <Row className="item">
                <Col span={20}><List.Item >{item.content}</List.Item></Col>
                <Col span={4} className='actions-button'><Dropdown overlay={menu}>
                    <Button>
                        Actions <DownOutlined />
                    </Button>
                </Dropdown></Col>
            </Row>
        </div>
    )
}
