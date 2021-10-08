import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { selectArea, fetchReport } from '../../actions';
import styled from 'styled-components';
import { getAllLocation, availableLocations} from '../../utils';

type EditState = {
  cityName: String;
};

type OwnProps = {
  show: boolean;
  setShow: Function;
};

interface PropsForStyled {
  show: boolean;
};

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

const StyledInputList = styled.input<any>`
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

  ::placeholder { 
    color: gray;
    opacity: 0.6;
    font-size: 19px;
  }
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
    color: #443a3b;
    background-color: #ffb5a7;
  }
`;

const Save = styled.button`
  && {
    color: whitesmoke;
    background-color: #00b4d8;
  }
`;

class Edit extends React.Component<any, EditState> {  
  private inputFieldRef: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props);
    this.inputFieldRef = React.createRef();
  }

  state: EditState = {
    cityName: '',
  };

  handleChange = (e:any) => {
    this.setState({cityName: e.target.value});
    if (this.inputFieldRef !== null && this.inputFieldRef.current !== null) {
      this.inputFieldRef.current.style.color = '#7e5b40';
      this.inputFieldRef.current.style.border = '3px solid #c6b1a0';
    }
  };

    render() {
      return ReactDOM.createPortal(
      <>
        <WeatherSettingBackground show={this.props.show}/>
        <WeatherSettingWrapper show={this.props.show}>
          <Title>Setting</Title>
          <StyledLabel htmlFor="location">Area</StyledLabel>
          <StyledInputList
            list="location-list"
            id="location"
            name="location"
            value = {this.state.cityName}
            placeholder='type city name here'
            onChange={this.handleChange}
            ref={this.inputFieldRef}
          />

          <datalist id="location-list"> 
            {getAllLocation().map(location => (
              <option value={location} key={location} />
            ))}
          </datalist>
  
          <ButtonGroup>
            <Back onClick={() => {this.props.setShow(false)}}>Cancel</Back>
            <Save onClick={() => {
              const targetLocation = availableLocations.filter((item) => item.cityName === this.state.cityName)[0];
              if (this.state.cityName !== null &&
                typeof targetLocation !== 'undefined' && targetLocation.locationName) {
                  this.props.selectArea(this.state.cityName);
                  this.props.fetchReport(targetLocation.locationName);
                  this.props.setShow(false)
              } else {
                console.warn('HAHA');
                if (this.inputFieldRef !== null && this.inputFieldRef.current !== null) {
                  this.inputFieldRef.current.style.color = 'red';
                  this.inputFieldRef.current.style.border = '3px solid red';
                }

              }
              
            }}>Save</Save>
          </ButtonGroup>
        </WeatherSettingWrapper>
      </>
      , document.getElementById('root')!);
    }
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<any, {}, OwnProps>(
  mapStateToProps,
  { selectArea, fetchReport }
)(Edit);

