import React, { useState } from "react";
import './ReadInTextarea.css'

const ReadInTextarea = () =>{

    const [message, setMessage] = useState('')
    const [pin, setPin] = useState('')

    const onGetPin = (event) => {
        setPin(event.target.value)
    }

    const onRetrieve = () => {
        fetch(`http://localhost:3000/read`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                pin: pin,
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                setMessage(data.message)
            }
            
        })
        .catch(err => {
            console.log(err);
        });
    }

    return(
        <div className="readtextarea flex">

            <div className="readbox">

               
                <p>Write the id number to read the data</p>

                <div className="readbox innerbox">

                    <div className="flex flex-column">
                        
                        <input onChange={onGetPin} className="id" type="number" placeholder="Enter the id" />
                        <input onClick={onRetrieve} className="button" type="submit" value="Retrive Message"/>

                    </div>
                    
                    <hr/>
                    <textarea 
                    className="commentread" 
                    name="readmessage" 
                    id="readtextcomment" 
                    disabled={true} 
                    value={message}
                    placeholder="Message will be displayed here...">
                    </textarea>

                </div>

            </div>

        </div>
    )
}

export default ReadInTextarea;