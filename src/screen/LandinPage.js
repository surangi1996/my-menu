import React from 'react';
import { Layout } from 'antd';
import FooterPage from './FooterPage';
import ContentPage from './Content';
import HeaderPage from './Header';
const { Header, Footer, Content } = Layout;

export default function LandingPage() {
  return (
    <>
      <div style={{ marginLeft: 3 + 'em', marginRight: 3 + 'em' }}>
        <Layout >
          <HeaderPage />
          <ContentPage />

        </Layout>
      </div>
        <FooterPage />
    </>
  );
}