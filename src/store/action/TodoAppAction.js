import axios from "axios";

const base_url = "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list";

export const GET_NOTES_LIST = "GET_NOTES_LIST";
export const ADD_NOTES_ITEM = "ADD_NOTES_ITEM";
export const DELETE_NOTES_ITEM = "DELETE_NOTES_ITEM";
export const UPDATE_NOTES_ITEM = "UPDATE_NOTES_ITEM";
export const COMPLETE_NOTES_ITEM = "COMPLETE_NOTES_ITEM";

export const getNotesList = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: base_url,
    })
      .then((res) => {
          dispatch({
              type: GET_NOTES_LIST,
              payload: {
                  loading: false,
                  data: res.data,
                  errorMessage: false,
                },
            });
      })
      .catch((err) => {
        dispatch({
          type: GET_NOTES_LIST,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const addNotesItem = (data) => {
  return{
    type: "ADD_NOTES_ITEM",
    payload: {
      data
    }
  }
};

export const updateNotesItem = (id, title, desc) => {
  return{
    type: "UPDATE_NOTES_ITEM",
    payload: {
      id, title, desc
    }
  }
};

export const deleteNotesItem = (id) => {
  return{
    type: "DELETE_NOTES_ITEM",
    payload: {
      id
    }
  }
};

export const completeNotesItem = (id, status) => {
  return{
    type: "COMPLETE_NOTES_ITEM",
    payload: {
      id,
      status
    }
  }
};