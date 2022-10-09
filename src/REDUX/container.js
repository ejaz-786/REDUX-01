export const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    AddDetail: (e) => {
      dispatch({
        type: "ADD_DETAIL",
        payload: e,
      });
    },
  };
};
