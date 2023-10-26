import React from "react";
import './WriteInTextarea.css'

const WriteInTextarea = () =>{
    return(
        <div className="writetextarea flex">

            <div className="writebox">

                <p>Write the Message and share it to online clipboard</p>

                <div className="writebox innerbox">

                    <textarea className="commentwrite" name="writemessage" id="writetextcomment" placeholder="Write the Message here..."></textarea>
                    
                    <div>
                        <input className="button" type="submit" value="Share the Message"/>

                    </div>

                    <div>
                        <p>Id to retrive the Message: </p>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default WriteInTextarea;