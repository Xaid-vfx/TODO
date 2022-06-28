import React, { useState } from 'react';

export const Addtodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = (e) => {
        e.preventDefault();//page not reload
        if (!title || !desc)
            alert("Title or Description cannot be blank");
        else {
            props.addTodo(title, desc);
            settitle("")
            setdesc("")
        }
    }


    return (
        <div className='container my-3'>
            <h3 className='text-center'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control" id="title" placeholder="Title" />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label htmlFor="Desc">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control" id="Desc" placeholder="Description" />
                </div>
                <div className="form-check">
                    {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label> */}
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}
