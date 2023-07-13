import React from 'react';
import '../styles/Footer.css'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { FacebookFilled, TwitterCircleFilled, InstagramFilled } from '@ant-design/icons'
const { Header, Content, Footer } = Layout;

export default function FooterPage() {
    return (
        <div>
            <Footer className='footers'>
                <div className='footer-left'>
                    <div className='food-shop'>
                        <h3>Food Shop</h3>
                        <p>Foodie is a food ordering website which always dedicated to give the best experience and service to customers.</p>
                    </div>
                    <div style={{marginBottom: 2+'em'}}>
                        <FacebookFilled style={{ color: 'white', fontSize:2+'em', marginRight:0.7+'em' }}/>
                        <TwitterCircleFilled style={{ color: 'white', fontSize:2+'em', marginRight:0.7+'em' }} />
                        <InstagramFilled style={{ color: 'white', fontSize:2+'em', marginRight:0.7+'em' }} />
                    </div>
                    <p style={{color:'white'}}>@ Food Shop</p>
                </div>
                <div className='footer-right'>
                    <div>
                        <h3>Products</h3>
                        <p>Pricing</p>
                        <p>Location</p>
                        <p>Food Item</p>
                        <p>Blog</p>
                    </div>
                    <div>
                        <h3>Engaged</h3>
                        <p>FAQ</p>
                        <p>Tutorials</p>
                        <p>About Us</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                </div>

            </Footer>
        </div>
    );
}