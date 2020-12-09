import React ,{useEffect ,useState} from 'react'
import 'semantic-ui-css/semantic.min.css';
import {getAll ,deleteNote} from "../services/service.notes";
import {  List ,Icon ,Divider ,Message} from 'semantic-ui-react';
import {connect} from  "react-redux";
import {startFetching ,startDelete ,startUpdate ,getNoteDetail} from  "../redux/actions";
const NoteList = ({id ,notesList ,listData ,deleteNote ,stateData ,getNoteDetail}) => {
  const [list , setList] = useState([]);
  const [msg , setMsg] = useState("");
  
  
  useEffect (()=>{
    notesList();
  },[id])
  useEffect (()=>{
    if(stateData.status === "DELETE_SUCCESS"){
      notesList();
    }
  },[stateData])
  useEffect (()=>{
    setList(listData);
  },[listData])

  const deleteNoteHandler = (e,id)=>{
    e.preventDefault()
     deleteNote(id);
  }
  
  const editNoteHandler = (e,id)=>{
    e.preventDefault()
     getNoteDetail(id);
  }

  return(<div className="leftsideBar">
      {msg && <Message
      info
      header={msg}
      />}
      {
      stateData.loading  &&  <Message info>
       {stateData.msg}
    </Message>
    }
  	 <List >
     {list.length >0  ? list.map((list ,index)=> <List.Item key={index} onClick={(e)=>editNoteHandler(e,list.id)}>
     
      <List.Content floated='right'>
        <Icon onClick={(e)=>deleteNoteHandler(e,list.id)} link name='close' />
      </List.Content>
      <List.Content>
        {list.title}
      </List.Content>
      <Divider/>
    </List.Item>)
     : <List.Item>No Content</List.Item> }
  </List> 
  </div>)
}
const mapDispatchToProps = (dispatch)=>{
  return {
     notesList : ()=> dispatch(startFetching()),
     deleteNote : (id)=> dispatch(startDelete(id)),
     getNoteDetail : (id)=> dispatch(getNoteDetail(id)),
  }
}
const mapStateToProps = (state)=>{
  return { 
    listData : state.list,
    stateData : state
  }
}
export default connect(mapStateToProps ,mapDispatchToProps)(NoteList);