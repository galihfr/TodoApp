import React from 'react';

const EditModal = ({ edit, close, data, changeTitle, changeDesc, updateNotes }) => {
    const { title, desc } = data;

    if(edit){
        return(
            <div className="modal-container">
                <div className="modal-box">
                    <h3>Edit Todo Item</h3>
                    <div className="input">
                        <form className="">
                            <div className="form-floating mt-5 mb-3">
                                <input type="text" className="form-control w-100" id="titleNote" placeholder="Title note" value={title} onChange={changeTitle} />
                                <label htmlFor="titleNote">Title</label>
                            </div>
                            <div className="form-floating mb-3"> 
                                <textarea className="form-control" placeholder="Desc note" id="descNote" value={desc} style={{height: "100px"}} onChange={changeDesc}>{desc}</textarea>
                                <label htmlFor="descNote">Description</label>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary me-3" onClick={updateNotes}>Update</button>
                        <button className="btn btn-outline-secondary" onClick={close}>Close</button>
                    </div>
                </div>
            </div>
        )
    }else{
        return null
    }
};

export default EditModal;
