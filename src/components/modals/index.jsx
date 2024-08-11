import "./style.css";
import { useState } from "react";
import Form from "@form/form";
import Input from "@form/input";

const index = ({ className, saveTask, show, setShow, title, setTitle }) => {

    const modalStyle = {
        display: show ? "flex" : "none"
    }

    return (
        <div style={modalStyle} className={className ? className : "modal-wrapper"}>
            <div className="modal-content">
          <i onClick={()=> setShow(false)} className="bi bi-x close"></i>

            <Form>
              <Input type="text" val={title} setVal={setTitle} placeholder="Enter new title"/>
            </Form> 

            <div className="flex btn-group">
            <button onClick={saveTask} className="save">Save</button>
            <button onClick={()=> setShow(false)} className="cancel">Cancel</button>
            </div>
          </div>
        </div>
    );
};

export default index;