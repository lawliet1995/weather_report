import React from 'react';
import { ReactComponent as AirFlowIcon } from '../../assets/airFlow.svg';
import { ReactComponent as RainIcon } from '../../assets/rain.svg';
import { ReactComponent as LoadingIcon } from '../../assets/loading.svg';
import styled, {keyframes} from 'styled-components';
import { connect } from 'react-redux';
import { fetchReport } from '../../actions';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Description = styled.div`
  font-size: 44px;
  color: #f286ae;
  font-weight: 550;
  margin: 0 18px;
  text-align: center;
  background-color: #ffe1e3;
  border-radius: 8px;
`;

const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0px 16px;
`;

const Temperature = styled.div`
  color: #757575;
  font-size: 100px;
  font-weight: 350;
  padding: 16px;
  display: flex;
`;

const Celsius = styled.div`
  font-weight: normal;
  font-size: 42px;
`;

const AirFlow = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 300;
  color: #828282;
  margin-bottom: 20px;

  svg {
    width: 24px;
    height: auto;
    margin-right: 16px;
  }
`;

const Rain = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 300;
  color: #828282;

  svg {
    width: 24px;
    height: auto;
    margin-right: 18px;
  }
`;

const Loading = styled(LoadingIcon)`
    top: 210px;
    right: 108px;
    width: 100px;
    height: 100px;
    position: absolute;
    animation: ${rotate} 1.8s linear infinite;
`;

class Weather extends React.Component <any, any> {
  componentDidMount () {
      this.props.fetchReport();
  }

    render() {
      if (this.props.report == null) {
        return (<div style={{display: 'flex'}}><Loading /></div>);
      } else {      
        return (
          <>
            <CurrentWeather>
              <Temperature>
                {Math.round(this.props.report.temperature)} <Celsius>°C</Celsius>
              </Temperature>
              <div>
                <AirFlow>
                  <AirFlowIcon />
                  {this.props.report.windSpeed} m/h
                </AirFlow>
                <Rain>
                  <RainIcon />
                  {Math.round(this.props.report.humid * 100)} %
                </Rain>
              </div>
            </CurrentWeather>
            <Description>{this.props.report.description}</Description>
          </>
        );
      }
    }
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(
  mapStateToProps,
  { fetchReport }
)(Weather);
