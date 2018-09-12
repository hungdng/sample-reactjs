import styled from 'styled-components'
import {transition, borderRadius, boxShadow} from '../../../../helpers/style-utils';

const TopbarDropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin: -12px -16px;
    width: 360px;
    min-width: 160px;
    flex-shrink: 0;
    ${borderRadius('5px')};
    ${boxShadow('0 2px 10px rgba(0,0,0,0.2)')};
    ${transition()};

    @media only screen and (max-width: 767px) {
        width: 310px;
    }

    .osdDropdownHeader {
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 0px;
        padding: 15px 30px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        h3 {
            font-size: 14px;
            font-weight: 500;
            color: #323332;
            text-align: center;
            text-transform: uppercase;
            margin: 0;
        }
    }

    .osdDropdownBody {
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        background-color: #F9F9F9;

        a {
            text-decoration: none;
        }

        .osdDropdownListItem {
            padding: 15px 30px;
            flex-shrink: 0;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            text-align: left;
            width: 100%;
            border-bottom: 1px solid #ebebeb;
            ${transition()};

            &:hover {
                background-color: #f1f1f1;
            }
        }
    }

`;

export default TopbarDropdownWrapper;