import React from 'react';
import mainImg from '../assets/image 3.png';
import '../styles/content.css'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

export default function ContentPage() {
    return (
        <div>
            <Content className='content'>
                <div className='main'>
                    <div className='description'>
                        <h1 className='text-main'>Meet, Eat & Order Your Food Now</h1>
                        <h1 className='text-main-1'>Best food and best ordering facility at your fingertip. We are here to serve you</h1>
                    </div>
                    <div className='image-main'>
                        <img src={mainImg} alt="" />
                    </div>
                </div>
            </Content>
        </div>
    );
}