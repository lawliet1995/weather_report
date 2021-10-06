import React from 'react';

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
    observationTime: '2019-10-02 22:10:00',
    locationName: '臺北市',
    description: '多雲時晴',
    temperature: 27.5,
    windSpeed: 0.3,
    humid: 0.88,
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
        <div>
          <p> {this.state.description} </p>
          <p> {this.state.temperature} </p>
          <p> {this.state.windSpeed} </p>
          <p> {this.state.humid} </p>
        </div>
      );
    }
}

export default Weather;
