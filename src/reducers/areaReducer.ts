const areaReducer = (selectedArea = '臺北市', action: any) => {
    if (action.type === 'AREA_SELECT') {
      return action.payload;
    } else {
        return selectedArea;
    }
};

export default areaReducer;