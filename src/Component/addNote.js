import React, { useState ,useEffect } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Form, TextArea ,Message ,Input ,Button} from 'semantic-ui-react';
import {connect} from  "react-redux";
import {startSaving, startFetching, startUpdate} from  "../redux/actions";

const Addnote = ({notifyOnAddNote ,createNote ,updateNote ,stateData ,notesList}) => {
 let [form ,setForm] = useState({title : "" ,body : "" ,id : ""});
 let [msg ,setMsg] = useState({msg : "" ,  error  : false});
 let [loading ,setLoading] = useState(false);
 let [isEdit ,setEdit] = useState(false);

 useEffect(()=>{
   if(stateData.status === "SAVE_SUCCESS"){
     setLoading(false);
     notesList();
   }
   if(stateData.status === "FETCH_DETAIL_SUCCESS"){
    setLoading(false);
    setEdit(true);
    console.log("redux state" ,stateData)
    setForm(stateData.detail);
  }
 },[stateData])
  const submitHandler = (e)=>{
    e.preventDefault();
    if(form.title !=="" && form.body !==""){
      setLoading(true);
      notifyOnAddNote();
      console.log("form" ,form)
      if(isEdit){
        updateNote(form);
      } else {
        createNote(form);
      }
      
      setForm({title : "" ,body : ""});
    } else {
      setMsg({error : true , msg : " Please fill all the fields."});
      setLoading(false);
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
    {
     loading &&  <Message info>
       Saving...
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

const mapDispatchToProps = (dispatch)=>{
  return { 
    createNote : (payload)=> dispatch(startSaving(payload)),
    notesList : ()=> dispatch(startFetching()),
    updateNote : (data)=> dispatch(startUpdate(data)),
  }
}
const mapStateToProps = (state)=>{
  return { stateData : state}
}
export default connect(mapStateToProps ,mapDispatchToProps)(Addnote);