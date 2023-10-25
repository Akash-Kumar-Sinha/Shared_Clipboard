import React from "react";
import './ReadInTextarea.css'

const ReadInTextarea = () =>{
    return(
        <div className="readtextarea flex">

            <div className="readbox">

               
                <p>Write the id number to read the data</p>

                <div className="readbox innerbox">

                    <div className="flex flex-column">
                        
                        <input className="id" type="number" placeholder="Enter the id" />
                        <input className="button" type="submit" value="Retrive Message"/>

                    </div>
                    
                    <hr/>
                    <textarea className="commentread" name="readmessage" id="readtextcomment" placeholder="Message will be displayed here"></textarea>

                </div>


                

            </div>

        </div>
    )
}

export default ReadInTextarea;