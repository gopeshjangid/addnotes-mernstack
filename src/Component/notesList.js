import React ,{useEffect ,useState} from 'react'
import 'semantic-ui-css/semantic.min.css';
import {getAll ,deleteNote} from "../services/service.notes";
import {  List ,Icon ,Divider ,Message} from 'semantic-ui-react';

const NoteList = ({id}) => {
  const [list , setList] = useState([]);
  const [msg , setMsg] = useState("");
  
  const getNotesList = ()=>{
    getAll().then(res=>{
      setList(res.data); 
    }).catch(e=>{
      setMsg("error in fetching"); 
    });
  }

  
  useEffect (()=>{
    
    getNotesList();
    
  },[id])
  
  const deleteNoteHandler = (e,id)=>{
    e.preventDefault()
    deleteNote(id).then(res=>{
     setMsg("Deleted successfully"); 
     getNotesList();
   }).catch(e=>{
     setMsg("Error in deleting note !"); 
   });
  }

  return(<div className="leftsideBar">
      {msg && <Message
      info
      header={msg}
      />}
  	 <List >
     {list.length >0  ? list.map((list ,index)=> <List.Item key={index}>
     
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

export default NoteList