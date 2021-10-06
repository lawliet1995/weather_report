import React from 'react';
import { ReactComponent as AirFlowIcon } from '../../assets/airFlow.svg';
import { ReactComponent as RainIcon } from '../../assets/rain.svg';
import styled from 'styled-components';

const Description = styled.div`
  font-size: 48px;
  color: #828282;
  margin-bottom: 30px;
  text-align:center;
`;

const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 22px 0px 12px;
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


type MyState = {
  observationTime: string;
  description: string;
  locationName: string;
  temperature: number;
  windSpeed: number;
  humid: number;
};

class Weather extends React.Component <any, MyState> {
  state: MyState = {
    observationTime: '2021-10-02 22:10:00',
    locationName: '',
    description: '',
    temperature: 0,
    windSpeed: 0,
    humid: 0,
  };

  componentDidMount () {
    fetch(
      'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-734B5AB6-2524-480D-ACE5-FFD6CEA63041&locationName=臺北',
    )
      .then(response => response.json())
      .then(data => {
        // STEP 1：定義 `locationData` 把回傳的資料中會用到的部分取出來

        console.log(data)
        const locationData = data.records.location[0];

        // STEP 2：將風速（WDSD）、氣溫（TEMP）和濕度（HUMD）的資料取出
        const weatherElements = locationData.weatherElement.reduce(
          (neededElements: { [x: string]: any; }, item: { elementName: string; elementValue: any; }) => {
            if (['WDSD', 'TEMP', 'HUMD', 'Weather'].includes(item.elementName)) {
              neededElements[item.elementName] = item.elementValue;
            }
            return neededElements;
          },
          {},
        );

        // STEP 3：要使用到 React 組件中的資料
        this.setState({
          observationTime: locationData.time.obsTime,
          locationName: locationData.locationName,
          description: weatherElements.Weather,
          temperature: weatherElements.TEMP,
          windSpeed: weatherElements.WDSD,
          humid: weatherElements.HUMD,
        });

        console.log(this.state);
      });
  }

    render() {
      return (
        <>
          <CurrentWeather>
            <Temperature>
              {Math.round(this.state.temperature)} <Celsius>°C</Celsius>
            </Temperature>
            <div>
              <AirFlow>
                <AirFlowIcon />
                {this.state.windSpeed} m/h
              </AirFlow>
              <Rain>
                <RainIcon />
                {Math.round(this.state.humid * 100)} %
              </Rain>
            </div>
          </CurrentWeather>
          <Description>{this.state.description}</Description>
        </>
      );
    }
}

export default Weather;
