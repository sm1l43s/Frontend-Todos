let initState = {
  users: [],
  totalCountUsers: 0,
  currentPage: 0,
  pageSize: 0,
};

const adminPanelReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default adminPanelReducer;
