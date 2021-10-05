import React from 'react';
import Edit from '../Edit/Edit';
import styled from 'styled-components';
import { ReactComponent as SettingIcon } from '../../assets/setting.svg';

const TitleText = styled.div`
    font-family: fangsong;
    font-size: 33px;
    font-weight: 900;
    text-align: center;
    padding: 20px;
    color: #c69598
`;

const Setting = styled(SettingIcon)`
    float: right;
    right: 25px;
    width: 30px;
    height: 44px;
    cursor: pointer;
    position: absolute;
`;

class Title extends React.Component {
  render() {
    return (
        <>
            <TitleText>
                {this.props.children}
                <Setting />       
            </TitleText>
            <Edit show = {false}/>
        </>
    );
  }
}


export default Title;
