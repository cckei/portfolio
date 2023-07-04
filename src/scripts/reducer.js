const reducer = (state, action) => {
    switch (action.type) {
      case "SHOW_WORK":
        return {
          ...state,
          workDetails: {
            info: action.payload,
            isShowing: true
          }
        };
      case "HIDE_WORK":
        return {
          ...state,
          workDetails: {
            info: {},
            isShowing: false
          }
        };
      default:
        throw new Error();
    }
};

export default reducer;