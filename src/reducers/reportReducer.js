import {availableLocations} from '../utils';

const reportReducer = (report = null, action) => {
    if (action.type === 'AREA_SELECT') {
        const locationName = availableLocations.filter((item) => item.cityName === action.payload);
        return action.payload;
    } else {
        return report;
    }
};

export default reportReducer;