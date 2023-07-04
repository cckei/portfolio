const reducer = (state, action) => {
    switch (action.type) {
      case "SCROLLING":
          return{
              ...state,
              scrollTop: action.payload
          }
      case "WINDOW_RESIZE":
        return{
            ...state,
            sectionHeight: action.payload.sectionHeight,
            windowSize: action.payload.windowSize
        }  
      case "UPDATE_ITEMS":
        return {
            ...state,
            skillItems: action.payload    
        }
      default:
        throw new Error();
    }
};

export default reducer;