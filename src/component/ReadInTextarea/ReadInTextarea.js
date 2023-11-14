import React, { useState, useEffect } from "react";
import './ReadInTextarea.css'

import { onSnapshot, query, where } from 'firebase/firestore';

const ReadInTextarea = ({ collectionRef }) => {

    const [message, setMessage] = useState('');
    const [pin, setPin] = useState('');

    const onGetPin = (event) => {
        setPin(event.target.value);
    }

    useEffect(() => {
        const pinQuery = query(collectionRef, where('pin', '==', parseInt(pin)));

        const unsubscribe = onSnapshot(pinQuery, (querySnapshot) => {
            if (!querySnapshot.empty) {
                const details = querySnapshot.docs.map((doc) => doc.data());
                setMessage(details[0].message); 
            }else{
                setMessage(''); 
            }
        });

        return () => unsubscribe();

    }, [pin, collectionRef]);

    return (
        <div className="readtextarea flex">
            <div className="readbox">
                <p>Write the id number to read the data</p>
                <div className="readbox innerbox">
                    <div className="flex flex-column">
                        <input
                            onChange={onGetPin}
                            className="id"
                            value={pin}
                            type="number"
                            placeholder="Enter the id"
                        />
                    </div>
                    <hr />
                    <textarea
                        className="commentread"
                        name="readmessage"
                        id="readtextcomment"
                        disabled={true}
                        value={message}
                        placeholder="Message will be displayed here..."
                    />
                </div>
            </div>
        </div>
    );
}

export default ReadInTextarea;