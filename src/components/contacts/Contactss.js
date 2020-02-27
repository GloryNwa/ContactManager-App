import React, { Component } from 'react';
import Contacts from './Contacts';
import { Consumer } from '../../context'



class Contactss extends Component {


    render() {


        return(
            <Consumer>
              {value => {
                  const {contacts} = value;
                  return (
                    <React.Fragment>
                    <h1 className="display-4 mb-2"><span style={{color:'red'}}>Contact </span> List</h1>
                    {contacts.map(contact =>(
                            <Contacts
                            key={contact.id}
                            contact={contact} 
                            
                            />
                             
                         ))}   
                       </React.Fragment>

                  )

              }}
            
            </Consumer>
        )
       
    }
}


export default Contactss;