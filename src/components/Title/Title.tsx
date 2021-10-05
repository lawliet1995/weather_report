import React from 'react';
import Edit from '../Edit/Edit';
import styled from 'styled-components';

const TitleText = styled.div`
    font-family: fangsong;
    font-size: 33px;
    font-weight: 900;
    text-align: center;
    padding: 20px;
`

class Title extends React.Component {
  render() {
    return (
        <>
            <TitleText>
                {this.props.children}            
            </TitleText>
            <Edit show = {false}/>
        </>
    );
  }
}


export default Title;
