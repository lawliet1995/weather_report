import fetchWeatherReport from '../apis';

export const selectArea = (area)=> {
    return {
        type: 'AREA_SELECT',
        payload: area
    }
}

export const fetchReport = (area) => async dispatch => {    
    const locationName = typeof area !== 'undefined' ? area : '臺北';

    const response = await fetchWeatherReport.get('/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-734B5AB6-2524-480D-ACE5-FFD6CEA63041&locationName=' + locationName);
    dispatch({ type: 'FETCH_REPORT', payload: response });  
};