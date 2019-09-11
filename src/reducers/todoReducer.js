export const initialState = [];
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ];
      case "clear":
        let newState = state.filter(item => item.completed == false);
        return newState;
      case "clickitem":
        let clickNewState = state.map(item => {
          if (item.id == action.payload) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        });
        return clickNewState;
      default:
        return state;
    }
  
    // if(action.type==="add"){
  
    // } else if(action.type==="clear"){
    //     console.log('clear from reducer');
  
    // } else if(action.type==="clickitem") {
  
    // } else {
    //     return state;
    // }
  };
  