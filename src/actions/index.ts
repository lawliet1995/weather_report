import fetchWeatherReport from '../apis';

export const selectArea = (area : string)=> {
    return {
        type: 'AREA_SELECT',
        payload: area
    }
}

export const fetchReport = (location : string) => async (dispatch: any) => {    
    const locationName = typeof location !== 'undefined' ? location : '臺北';

    const response = await fetchWeatherReport.get('/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-734B5AB6-2524-480D-ACE5-FFD6CEA63041&locationName=' + locationName);
    dispatch({ type: 'FETCH_REPORT', payload: response });  
};