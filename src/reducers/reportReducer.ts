const reportReducer = (report = null, action: any) => {
    if (action.type === 'FETCH_REPORT') {
        const locationData = action.payload.data.records.location[0];
  
        const weatherElements = locationData.weatherElement.reduce(
            (neededElements: { [x: string]: any; }, item: { elementName: string; elementValue: any; }) => {
                if (['WDSD', 'TEMP', 'HUMD', 'Weather'].includes(item.elementName)) {
                    neededElements[item.elementName] = item.elementValue;
                }
                return neededElements;
            },
            {},
        );

        return {
            observationTime: locationData.time.obsTime,
            locationName: locationData.locationName,
            description: weatherElements.Weather,
            temperature: weatherElements.TEMP,
            windSpeed: weatherElements.WDSD,
            humid: weatherElements.HUMD,
        };

    } else {
        return report;
    }
};

export default reportReducer;