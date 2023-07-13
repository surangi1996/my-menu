import React from 'react';
import mainImg from '../assets/image 3.png';
import beveger from '../assets/beverage image.svg';
import chicken from '../assets/chicken image.svg';
import fruit from '../assets/fruit image.svg';
import burger from '../assets/burger image.svg';
import pizza from '../assets/pizza image 1.svg';
import pizza1 from '../assets/pizza image.svg';
import burger1 from '../assets/burger image1.svg';
import rice from '../assets/fried rice.svg';
import parata from '../assets/parata image.svg';
import noodles from '../assets/noodles image.svg';
import french from '../assets/french fries image.svg';
import egg from '../assets/egg image.svg';
import user from '../assets/Ellipse 175.svg';
import '../styles/content.css'
import { Button, Layout, Card } from 'antd';
import { RightCircleFilled, ArrowLeftOutlined, ArrowRightOutlined, StarFilled, ShoppingCartOutlined, HeartFilled } from '@ant-design/icons'
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

export default function ContentPage() {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <Content className='content'>
                <div className='main'>
                    <div className='description'>
                        <h1 className='text-main'>Meet, Eat & Order Your Food Now</h1>
                        <h1 className='text-main-1'>Best food and best ordering facility at your fingertip. We are here to serve you</h1>
                        <Button className='content-button' type="primary" shape="round" >
                            Explore Menu <RightCircleFilled />
                        </Button>
                    </div>
                    <div className='image-main'>
                        <img src={mainImg} alt="" />
                    </div>
                </div>
                <h1 style={{ marginBottom: 2 + 'em' }}>Popular Menus</h1>
                <div className='popular-menu'>

                    <div className='popular-menu-cards' >
                        <h2>Beverage</h2>
                        <img alt="example" src={beveger} />
                    </div>
                    <div className='popular-menu-cards' >
                        <h2>Burger</h2>
                        <img alt="example" src={burger} />
                    </div>
                    <div className='popular-menu-cards' >
                        <h2>Chicken</h2>
                        <img alt="example" src={chicken} />
                    </div>
                    <div className='popular-menu-cards' >
                        <h2>Pizza</h2>
                        <img alt="example" src={pizza} />
                    </div>
                    <div className='popular-menu-cards' >
                        <h2>Fruits</h2>
                        <img alt="example" src={fruit} />
                    </div>
                </div>
                <div className='more-icon'>
                    <Button style={{ borderColor: '#FA8731' }} shape="circle" icon={<ArrowLeftOutlined style={{ color: '#FA8731' }} />} size={'middle'} />
                    <Button style={{ borderColor: '#FA8731' }} shape="circle" icon={<ArrowRightOutlined style={{ color: '#FA8731' }} />} size={'middle'} />
                </div>
                <div className='menu-body'>
                    <div className='items'>
                        <div className='item-row'>
                            <Card className='card'
                                hoverable
                                style={{
                                    width: 240,
                                }}
                                cover={<img alt="example" src={pizza1} />}
                            >
                                <h2>Pizza</h2>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <h3>$ 5.00</h3>
                                    <div>
                                        <ShoppingCartOutlined size={'middle'} style={{ fontSize: 1.5 + 'em' }} />
                                        <HeartFilled style={{ color: 'red', fontSize: 1.5 + 'em', marginLeft: 0.6 + 'em' }} />
                                    </div>
                                </div>

                            </Card>
                            <Card className='card'
                                hoverable
                                style={{
                                    width: 240,
                                }}
                                cover={<img alt="example" src={burger1} />}
                            >
                                <h3>Burger</h3>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <h3>$ 5.00</h3>
                                    <div>
                                        <ShoppingCartOutlined size={'middle'} style={{ fontSize: 1.5 + 'em' }} />
                                        <HeartFilled style={{ color: 'red', fontSize: 1.5 + 'em', marginLeft: 0.6 + 'em' }} />
                                    </div>
                                </div>
                            </Card>
                            <Card className='card'
                                hoverable
                                style={{
                                    width: 240,
                                }}
                                cover={<img alt="example" src={rice} />}
                            >
                                <h3>Fried Rice</h3>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <h3>$ 5.00</h3>
                                    <div>
                                        <ShoppingCartOutlined size={'middle'} style={{ fontSize: 1.5 + 'em' }} />
                                        <HeartFilled style={{ color: 'red', fontSize: 1.5 + 'em', marginLeft: 0.6 + 'em' }} />
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className='item-row'>
                            <Card className='card'
                                hoverable
                                style={{
                                    width: 240,
                                }}
                                cover={<img alt="example" src={parata} />}
                            >
                                <h3>Parata</h3>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <h3>$ 5.00</h3>
                                    <div>
                                        <ShoppingCartOutlined size={'middle'} style={{ fontSize: 1.5 + 'em' }} />
                                        <HeartFilled style={{ color: 'red', fontSize: 1.5 + 'em', marginLeft: 0.6 + 'em' }} />
                                    </div>
                                </div>
                            </Card>
                            <Card className='card'
                                hoverable
                                style={{
                                    width: 240,
                                }}
                                cover={<img alt="example" src={noodles} />}
                            >
                                <h3>Noodles</h3>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <h3>$ 5.00</h3>
                                    <div>
                                        <ShoppingCartOutlined size={'middle'} style={{ fontSize: 1.5 + 'em' }} />
                                        <HeartFilled style={{ color: 'red', fontSize: 1.5 + 'em', marginLeft: 0.6 + 'em' }} />
                                    </div>
                                </div>
                            </Card>
                            <Card className='card'
                                hoverable
                                style={{
                                    width: 240,
                                }}
                                cover={<img alt="example" src={french} />}
                            >
                                <h3>French Fries</h3>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                    <StarFilled style={{ color: '#FEA250', marginRight: 0.5 + 'em' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <h3>$ 5.00</h3>
                                    <div>
                                        <ShoppingCartOutlined size={'middle'} style={{ fontSize: 1.5 + 'em' }} />
                                        <HeartFilled style={{ color: 'red', fontSize: 1.5 + 'em', marginLeft: 0.6 + 'em' }} />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className='living-well'>
                        <img alt="example" src={egg} />
                        <div style={{ marginLeft: 3 + 'em' }}>
                            <h1>Living well begins with eating well</h1>
                            <h3>These are the stories of our customers who have joined us with great pleasure when using our service. These are the stories of our customers who have joined us with great pleasure when using our service.These are the stories of our customers who have joined us with great pleasure when using our service.</h3>
                        </div>
                    </div>
                    <div className='customer-topic'>
                        <h1>Trusted by Island wide Customers</h1>
                        <h3>These are the stories of our customers who have joined us with great pleasure when using our service.</h3>
                    </div>
                    <div className='customer'>
                        <div className='customer-row'>
                            <div className='customer-cards' >
                                <div className='user-name'>
                                    <img alt="example" src={user} />
                                    <p>Viezh Robert</p>
                                    <h2>4.5</h2>
                                </div>
                                <p>“Wow... I am very happy to use this website , it turned out to be more than my expectations and so far there have been much easy”</p>
                            </div>
                            <div className='customer-cards' >
                                <div className='user-name'>
                                    <img alt="example" src={user} />
                                    <p>Viezh Robert</p>
                                    <h2>4.5</h2>
                                </div>
                                <p>“Wow... I am very happy to use this website , it turned out to be more than my expectations and so far there have been much easy”</p>
                            </div>
                            <div className='customer-cards' >
                                <div className='user-name'>
                                    <img alt="example" src={user} />
                                    <p>Viezh Robert</p>
                                    <h2>4.5</h2>
                                </div>
                                <p>“Wow... I am very happy to use this website , it turned out to be more than my expectations and so far there have been much easy”</p>
                            </div>
                        </div>
                        <div className='customer-row'>
                            <div className='customer-cards' >
                                <div className='user-name'>
                                    <img alt="example" src={user} />
                                    <p>Viezh Robert</p>
                                    <h2>4.5</h2>
                                </div>
                                <p>“Wow... I am very happy to use this website , it turned out to be more than my expectations and so far there have been much easy”</p>
                            </div>
                            <div className='customer-cards' >
                                <div className='user-name'>
                                    <img alt="example" src={user} />
                                    <p>Viezh Robert</p>
                                    <h2>4.5</h2>
                                </div>
                                <p>“Wow... I am very happy to use this website , it turned out to be more than my expectations and so far there have been much easy”</p>
                            </div>
                            <div className='customer-cards' >
                                <div className='user-name'>
                                    <img alt="example" src={user} />
                                    <p>Viezh Robert</p>
                                    <h2>4.5</h2>
                                </div>
                                <p>“Wow... I am very happy to use this website , it turned out to be more than my expectations and so far there have been much easy”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    );
}