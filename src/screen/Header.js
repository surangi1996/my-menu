import React from 'react';
import { Button, Layout, } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import logoImg from '../assets/logo.svg';
import '../styles/Header.css'
const { Header } = Layout;

export default function HeaderPage() {
    return (
        <div>
            <Header className='header' style={{ backgroundColor: 'transparent' }}>
                <div className="demo-logo">
                    <img src={logoImg} alt="" />
                </div>

                <div className='buttons'>
                    <Button type="text">HOME</Button>
                    <Button type="text">REVIEW</Button>
                    <Button type="text">ABOUT</Button>
                    <Button type="text">CONTACT</Button>
                    <Button type="primary" style={{ backgroundColor: 'black' }} icon={<UserOutlined />}>EN-US <DownOutlined /></Button>
                    <Button type="primary" style={{ backgroundColor: 'black' }} shape="circle" icon={<UserOutlined />} size={'middle'} />
                </div>

            </Header>
        </div>
    );
}