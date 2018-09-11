import React, { Component } from 'react';
import {Layout} from 'antd'
import TopbarWrapper from './Topbar.style';
import TopbarNotification from './TopbarNotification';

const { Header } = Layout;
const styling = {
   // background: 'green',
    position: "fixed",
    width: "100%",
    height: 70
  };
class Topbar extends Component {
    render() {
        return (
            <TopbarWrapper>
                <Header style={styling} className={"osdTopbar"}>
                    <div className="osdLeft">
                        <button className="triggerBtn" style={{ color: 'back' }} />
                    </div>

                    <ul className="osdRight">
                        <li className="osdNotify">
                            <TopbarNotification locale={'en'}/>
                        </li>
                    </ul>
                </Header>
            </TopbarWrapper>
            
        );
    }
}

export default Topbar;