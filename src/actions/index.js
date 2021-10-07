import {availableLocations} from '../utils';


export const select_area = area => {
    return {
        type: 'AREA_SELECT',
        payload: area
    }
}

export const fetchReport = area => async dispatch => {
    // const response = await jsonPlaceholder.get('/posts');
    const locationName = availableLocations.filter((item) => item.cityName === payload);
  
    dispatch({ type: 'FETCH_REPORT', payload: response });
};