import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { select_area } from '../../actions';
import styled from 'styled-components';
import {availableLocations, getAllLocation} from '../../utils';

type Props = {
  show: boolean;
};

const WeatherSettingWrapper = styled.div`
  position: fixed;
  min-width: 360px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: white;
  box-sizing: border-box;
  padding: 20px;
  top: 50%;
  left: 50%;
  z-index: 99;
  transform: translate3d(-50%, -50%, 0);
`;

const Title = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.titleColor};
  margin-bottom: 30px;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 15px;
`;

const StyledInputList = styled.input`
  display: block;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.textColor};
  outline: none;
  width: 100%;
  max-width: 100%;
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
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
    color: ${({ theme }) => theme.textColor};
    border-color: ${({ theme }) => theme.textColor};
  }
`;

const Save = styled.button`
  && {
    color: white;
    background-color: #40a9f3;
  }
`;

class Edit extends React.Component<Props> {
    render() {
      return ReactDOM.createPortal(
        <WeatherSettingWrapper style = {{display : `${this.props.show ? 'block' : 'none'}`}}>
          <Title>設定</Title>
          <StyledLabel htmlFor="location">地區</StyledLabel>
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
            <Back onClick={() => {}}>返回</Back>
            <Save onClick={() => {}}>儲存</Save>
          </ButtonGroup>
        </WeatherSettingWrapper>
      , document.getElementById('root')!);
    }
}

const mapStateToProps = (state: any) => {
  console.log(state);
  return state;
};

export default connect(
  mapStateToProps,
  { select_area }
)(Edit);

