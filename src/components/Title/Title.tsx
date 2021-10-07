import React from 'react';
import Edit from '../Edit/Edit';
import styled from 'styled-components';
import { connect } from 'react-redux';

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

type titleState = {
    show: boolean;
};

class Title extends React.Component<any, titleState> {
    state: titleState = {
        show: false,
    };

    render() {
        return (
            <>
                <TitleText>
                    {this.props.area !== null ? this.props.area : '臺北市'}
                    <Setting onClick = {() => this.setState({show: true})}/>       
                </TitleText>
                <Edit show = {this.state.show} setShow = {(newShowVal: boolean) => this.setState({ show: newShowVal })}/>
            </>
        );
    }
}

const mapStateToProps = (state: any) => {
    return state;
};

export default connect(
    mapStateToProps,
    {}
)(Title);
