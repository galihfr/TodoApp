import { GET_NOTES_LIST, ADD_NOTES_ITEM, DELETE_NOTES_ITEM, UPDATE_NOTES_ITEM, COMPLETE_NOTES_ITEM } from "../action/TodoAppAction";

const initialState = {
  todoLists: [],
  isLoading: false,
};

const TodoAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES_LIST:
      return {
        ...state,
        todoLists: action.payload.data,
      };

    case ADD_NOTES_ITEM:
      return {
        ...state,
        todoLists: [...state.todoLists, action.payload.data],
      }

    case DELETE_NOTES_ITEM:
      return {
        todoLists: state.todoLists.filter((item) => item.id !== action.payload.id),
      }

    case UPDATE_NOTES_ITEM:
      return {
        ...state,
        todoLists: state.todoLists.map((item) => 
          item.id === action.payload.id ? {...item, title: action.payload.title, description: action.payload.desc} : item
        ),
      }

    case COMPLETE_NOTES_ITEM:
      return {
        ...state,
        todoLists: state.todoLists.map((item) => 
          item.id === action.payload.id ? {...item, status: action.payload.status} : item
        ),
      }      

    default:
      return state;
  }
};

export default TodoAppReducer;