import React from 'react';
import { Layout } from 'antd';
import FooterPage from './FooterPage';
import ContentPage from './Content';
import HeaderPage from './Header';
const { Header, Footer, Content } = Layout;

export default function LandingPage() {
    return(
        <Layout>
      <HeaderPage/>
      <ContentPage/>
      <FooterPage/>
    </Layout>
    );
}