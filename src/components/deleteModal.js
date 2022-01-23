import React from "react";

const deleteModal = ({ close, delconfirm, data, del }) => {
  const delById = (id) => {
    del(id);
  };

  if (delconfirm) {
    return (
      <div className="modal-container">
        <div className="modal-box-delete">
          <h3>Are you sure ?</h3>
          <div className="d-flex justify-content-center">
            <button className="btn btn-danger me-3" onClick={() => delById(data.id)}>Delete</button>
            <button className="btn btn-outline-secondary" onClick={close}>Close</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default deleteModal;
