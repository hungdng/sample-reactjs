import React, { Component } from 'react';
import {Layout} from 'antd';
import  Topbar from './Topbar/Topbar';

class MainApp extends Component {
    render() {
        const appHeight = window.innerHeight;
        return (
            <Layout style={{ height: appHeight }}>
                <Topbar/>
            </Layout>
        );
    }
}

export default MainApp;