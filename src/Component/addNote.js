import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Form, TextArea ,Message ,Input ,Button} from 'semantic-ui-react';
import {createNote} from "../services/service.notes";
const Addnote = (props) => {
 let [form ,setForm] = useState({title : "" ,body : ""});
 let [msg ,setMsg] = useState({msg : "" ,  error  : false});

  const submitHandler = (e)=>{
    e.preventDefault();
    if(form.title !=="" && form.body !==""){
        createNote(form).then(res=>{
         setMsg({error : false ,msg : "Added new note"});
         setForm({title : "" ,body : ""})
         props.notifyOnAddNote(res.data.id)
        }).catch(err=>{
            setMsg({error : true ,msg : err.message});
        })
    } else {
      setMsg({error : true , msg : " Please fill all the fields."})
    }
  }

  const onChangeHandler = (e)=>{
    setForm({...form,  [e.target.name] : e.target.value})
  }
 return(<div className="rightsideBar">
   {
      msg.error && <Message warning>
      <p style={{color :"Red"}}>{msg.msg}</p>
    </Message>
    }
 	 <Form>
    
 	 <label>Title</label>
 	 <Input focus value={form.title} placeholder='Title' onChange={onChangeHandler} name="title" className="title" />
 	 <label>Body</label>
    <TextArea value={form.body} onChange={onChangeHandler} name="body" placeholder='Tell us more' style={{ minHeight: 300 }} className="desc" />
     <div className="button-wrapper">
    <Button onClick={submitHandler} content='Save' primary />
  </div>
  </Form>
    
  </div>)
}

export default Addnote