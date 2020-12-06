import React,{ Component } from 'react';
import AddNote from '../Component/addNote';
import NotesList from '../Component/notesList';
import { Header } from 'semantic-ui-react'

/**
 * Parent base class for application components, that share the common functionality.
 */
class Home extends Component {
  /**
   * Component initialization
   * @param {object} props
   */
  constructor (props) {
    super(props);
    this.state = {
      id : ""
    };
  }

  notifyOnAddNote = (id)=>{
    this.setState({id : id})
  }

  /**
   * Check if user auth info is available
   * @return {boolean}
   */

 render(){
    return(
           <> 
           <Header as='h2' attached='top'>
             Notes
           </Header>
           <div className="main">
            <NotesList id={this.state.id} />
            <AddNote notifyOnAddNote={this.notifyOnAddNote} />
      </div>
      </>);
 }
 
};

export default Home;

  
