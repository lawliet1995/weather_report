const areaReducer = (selectedArea = null, action) => {
    if (action.type === 'AREA_SELECT') {
      return action.payload;
    } else {
        return selectedArea;
    }
};

export default areaReducer;