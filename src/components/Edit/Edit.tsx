import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { select_area } from '../../actions';
import styled from 'styled-components';
import {getAllLocation} from '../../utils';

type Props = {
  show: boolean;
  setShow: Function;
};

interface PropsForStyled {
  show: boolean;
}

const WeatherSettingBackground = styled.div<PropsForStyled>`
  position: fixed;
  background-color: black;
  box-sizing: border-box;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  opacity: 0.7;
  display: ${p => p.show ? 'block' : 'none'};
`;

const WeatherSettingWrapper = styled.div<PropsForStyled>`
  border-radius: 15px;
  position: fixed;
  min-width: 360px;
  background-color: #FFF1E6;
  box-sizing: border-box;
  padding: 20px;
  top: 50%;
  left: 50%;
  z-index: 199;
  transform: translate3d(-50%, -50%, 0);
  display: ${p => p.show ? 'block' : 'none'};

`;

const Title = styled.div`
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
  color: #c69598;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 15px;
  color: #7e5b40;
`;

const StyledInputList = styled.input`
  display: block;
  box-sizing: border-box;
  background: transparent;
  border: 3px solid #c6b1a0;
  outline: none;
  width: 100%;
  max-width: 100%;
  color: #7e5b40;
  font-size: 19px;
  padding: 7px 10px;
  margin-bottom: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    user-select: none;
    margin: 0;
    letter-spacing: 0.3px;
    line-height: 1;
    cursor: pointer;
    overflow: visible;
    text-transform: none;
    border: 1px solid transparent;
    background-color: transparent;
    height: 35px;
    width: 80px;
    border-radius: 5px;

    &:focus,
    &.focus {
      outline: 0;
      box-shadow: none;
    }

    &::-moz-focus-inner {
      padding: 0;
      border-style: none;
    }
  }
`;

const Back = styled.button`
  && {
    background-color: #EAE4E9;
    color: #7e5b40;
  }
`;

const Save = styled.button`
  && {
    color: white;
    background-color: #7b9eff;
  }
`;

class Edit extends React.Component<Props> {
    render() {
      return ReactDOM.createPortal(
        // style={{display : `${this.props.show ? 'block' : 'none'}`}} 
      <>
        <WeatherSettingBackground show={this.props.show}/>
        <WeatherSettingWrapper show={this.props.show}>
          <Title>Setting</Title>
          <StyledLabel htmlFor="location">Area</StyledLabel>
          <StyledInputList
            list="location-list"
            id="location"
            name="location"
            // onChange={handleChange}
            // value={locationName}
          />

          <datalist id="location-list">
            {getAllLocation().map(location => (
              <option value={location} key={location} />
            ))}
          </datalist>
  
          <ButtonGroup>
            <Back onClick={() => {this.props.setShow(false)}}>Cancel</Back>
            <Save onClick={() => {this.props.setShow(false)}}>Save</Save>
          </ButtonGroup>
        </WeatherSettingWrapper>
      </>
      , document.getElementById('root')!);
    }
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(
  mapStateToProps,
  { select_area }
)(Edit);

