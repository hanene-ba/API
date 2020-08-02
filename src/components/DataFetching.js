import React, {useState, useEffect} from 'react'; 
import Axios from 'axios'


function DataFetching () {
    const [persons, setPerson] = useState([])

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
            console.log(res)
            setPerson(res.data)
        })
            .catch(err => {
                console.log(err)
            })
    },[])
     
    return ( 
    <div > 
        <h1 style={{ textAlign: 'center',color: 'green'}}>Base de donnée des citoyens</h1>
       
            {
                persons.map(person => <div className="card-styl" key= {person.id}> <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img src="https://semantic-ui.com/images/avatar2/small/rachel.png"/>
                  </div>
                  <div className="content">
                    <div className="header">{person.name}</div>
                    <div className="meta">
                      <a>{person.email }</a>
                    </div>
                    <div className="description">
                      Nom : {person.username}  
                      <div>Adresse : {person.address.city}</div>
                    </div>
                  </div>
                </div>
                </div>
               </div>
                )}
    
    </div>


    )
 }

export default DataFetching;
