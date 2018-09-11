import styled from 'styled-components';
import {transition, borderRadius} from '../../../../helpers/style-utils';

const TopbarWrapper = styled.div`
    .osdTopbar {
        display: flex;
        justify-content: space-between;
        background-color: #ffffff;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: '0 265px 0 31px';
        ${transition()}

        @media only screen and (max-width: 767px) {
            padding: 0px 15px 260px !important;
        }

        

        .osdLeft {
            display: flex;
            align-left: center;

            @media only screen and (max-width: 767px) {
                margin: 0 20px 0 0;
            }

            .triggerBtn {
                width: 24px;
                height: 100%;
                display: inline-flex;
                display: -webkit-inline-flex;
                display: -ms-inline-flex;
                align-items: center;
                justify-content: center;
                background-color: transparent;
                border: 0;
                outline: 0;
                position: relative;
                cursor: pointer;

                &:before {
                    content: '\f20e';
                    font-family: 'Ionicons';
                    font-size: 26px;
                    color: inherit;
                    line-height: 0;
                    position: absolute
                }

            }
        }

        .osdRight {
            display: flex;
            align-items: center;

            li {
                margin-left: 0;
                margin-right: 35;
                cursor: pointer;
                line-height: normal;
                position: relative;
                display: inline-block;
            }

            @media only screen and (max-width: 360px) {
                margin-left: 0;
                margin-right: 25
            }

            &:last-child {
                margin: 0;
            }

            i {
                font-size: 24px;
                color: #ffffff;
                line-height: 1;
            }

            .osdIconWrapper {
                position: relative;
                line-height: normal;

                span {
                    font-size: 12px;
                    color: #fff;
                    background-color: #3775F2;
                    width: 20px;
                    height: 20px;
                    display: inline-flex;
                    display: -webkit-inline-flex;
                    display: -ms-inline-flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    line-height: 20px;
                    position: absolute;
                    top: -8px;
                    left: 10px;
                    right: inherit;
                    ${borderRadius('50%')};
                }
            }
        }
    }
`;

export default TopbarWrapper;