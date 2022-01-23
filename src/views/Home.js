import React, { useEffect, useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { getNotesList, deleteNotesItem, updateNotesItem, completeNotesItem } from "../store/action/TodoAppAction";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/deleteModal";

const Home = () => {
  let { todoLists } = useSelector((state) => state.TodoAppReducer);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const [editData, setEditData] = useState({
    id: "",
    title: "",
    desc: ""
  })

  const setTitle = (e) => {
    setEditData({
      ...editData,
      title: e.target.value
    })
  }

  const setDesc = (e) => {
    setEditData({
      ...editData,
      desc: e.target.value
    })
  }

  const openModal = (id, title, desc) => {
    setIsEdit(true)
    setEditData({
      id,
      title,
      desc
    })
  }

  const openDelModal = (id) =>{
    setIsDelete(true)
    setEditData({id})
  }

  const closeModal = () => {
    setIsEdit(false)
    setIsDelete(false)
  }

  const updateNotes = () => {
    const { id, title, desc } = editData
    dispatch(updateNotesItem(id, title, desc))
    setIsEdit(false)
    setEditData({id: "", title: ""})
  }

  const deleteNotes = (id) => {
    dispatch(deleteNotesItem(id))
    setIsDelete(false)
  }

  const completeTodo = (id, status) => {
    dispatch(completeNotesItem(id, status))
  }

  useEffect(() => {
    dispatch(getNotesList());
  }, [dispatch]);
  
  return (
    <div className="Home">
      <div className="container p-5">
        <h3 className="text-center">To do App</h3>

        <section className="mt-5">
          <TodoInput />
        </section>

        <section className="row mt-4">
          <div className="editable-list col-md-7">
            <div className="editable-list-container p-3">
              <h4 className="mx-3">In Progress</h4>
              {todoLists
                ? todoLists
                    .filter((item) => {
                      return item.status === 0;
                    })
                    .map((item) => {
                      return <TodoList key={item.id} todoItem={item} type="onProgress" openModal={openModal} openDelModal={openDelModal} complete={completeTodo} />;
                    })
                : ""}
            </div>
          </div>
          <div className="complete-list col-md-5">
            <div className="complete-list-container p-3">
              <h4 className="mx-3">Done</h4>
              {todoLists
                ? todoLists
                    .filter((item) => {
                      return item.status === 1;
                    })
                    .map((item) => {
                      return <TodoList key={item.id} todoItem={item} type="done" openModal={openModal} />;
                    })
                : ""}
            </div>
          </div>
        </section>  

        <EditModal edit={isEdit} close={closeModal} changeTitle={setTitle} changeDesc={setDesc} data={editData} updateNotes={updateNotes}/>
        <DeleteModal delconfirm={isDelete} del={deleteNotes} data={editData} close={closeModal}/>
      </div>
    </div>
  );
};

export default Home;
