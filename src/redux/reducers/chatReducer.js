const initialState = {
  newMessage: "",
  messages: [],
  loading: true,
  error: "",
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, ...action.payload };
    case "ADD_NEW":
      return {
        ...state,
        messages: [...state.messages, action.payload],
        newMessage: "",
      };
    default:
      return state;
  }
};

export default chatReducer;
