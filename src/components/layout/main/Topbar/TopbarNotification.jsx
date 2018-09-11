import React, { Component } from 'react';
import {Popover} from 'antd';
import TopbarDropdownWrapper from './topbarDropdown.style';
//import IntMessages from '../../../common/utility/InjectMassage';

const demoData = [
    {
        id: 1,
        name: "HungTA",
        notification: "Helllo xxx"
    },
    {
        id: 2,
        name: "NguyenTT",
        notification: "Hi yyy"
    },
    {
        id: 3,
        name: "ThuongPX",
        notification: "ha ha"
    },
]
class TopbarNotification extends Component {
    constructor(props) {
        super(props);
        // this.handleVisibleChange = this.handleVisibleChange.bind(this);
        // this.hide = this.hide.bind(this);
        this.state = {
            visible: false
        };
    }
    
    hide() {
        this.setState({visible: false});
    }

    handleVisibleChange() {
        this.setState({visible: !this.state.visible});
    }
    render() {
        const content = (
            <TopbarDropdownWrapper className="topbarNotification">
                <div className="osdDropdownHeader">
                    <h3>Notification</h3>
                </div>

                <div className="osdDropdownBody">
                    {
                        demoData.map(notification => (
                            <a className="osdDropdownListItem" key = {notification.id}>
                                <h5>{notification.name}</h5>
                                <p>{notification.notification}</p>
                            </a>
                        ))
                    }
                </div>
                <a className="">
                </a>
            </TopbarDropdownWrapper>
        );
        return (
            <Popover
                content = {content}
                trigger = "click"
                visible = {this.state.visible}
                placement = "bottomLeft"
                onVisibleChange = {() => this.handleVisibleChange()}
            >
                <div className="osdIconWrapper">
                    <i 
                        className="ion-android-notifications"
                        style={{color: 'rgb(50, 51, 50)'}}
                    >
                        <span>{demoData.length}</span>
                    </i>
                </div>
            </Popover>
        );
    }
}

export default TopbarNotification;