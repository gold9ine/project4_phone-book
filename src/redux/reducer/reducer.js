let initialState = {
  contact: [],
  keyword: "", // 이 state새로 추가
};
function contactReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      //   return {
      //     ...state,
      //     contact: [
      //       ...state.contact,
      //       {
      //         name: payload.name,
      //         phoneNumber: payload.phoneNumber,
      //       },
      //     ],
      //   };
      state.contact.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;
    case "SEARCH_BY_USERNAME": // 케이스 새로 추가
      state.keyword = payload.keyword;
      break;
    // default:
    //   return { ...state };
  }
  return { ...state };
}

export default contactReducer;
