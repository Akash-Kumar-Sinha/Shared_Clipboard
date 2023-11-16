import React, { useState } from "react";
import './WriteInTextarea.css'

import { getDocs, addDoc, query, where, deleteDoc } from 'firebase/firestore';

const WriteInTextarea = ({collectionRef}) => {
    const [message, setMessage] = useState('')
    const [pin, setPin] = useState('')

    const onMessageChange = (event) => {
        setMessage(event.target.value)
    }

    const pinGenerator = async () => {
        let generatedPin;
        
        do {
            generatedPin = Math.floor(10000 + Math.random() * 90000);
        } while (await checkPinExists(generatedPin));

        console.log('Generated Pin:', generatedPin);
        return generatedPin;
    };
    
    const checkPinExists = async (pinToCheck) => {
        const pinQuery = query(collectionRef, where('pin', '==', pinToCheck));
        const querySnapshot = await getDocs(pinQuery);
        
        return !querySnapshot.empty;
    }

    const onWrite = async () => {
        try {
            const generatedPin = await pinGenerator();
            setPin(generatedPin);

            await addDoc(collectionRef, {
                message: message,
                pin: generatedPin
            });

            console.log('Data Added');
            setTimeout(() => {
                onDelete(generatedPin);
            }, 10 * 60 * 1000);
        } catch (err) {
            console.log(err.message)
        }
    }

    const onDelete = async (generatedPin) => {
        try {
            const pinQuery = query(collectionRef, where('pin', '==', generatedPin));
            const querySnapshot = await getDocs(pinQuery);

            if (!querySnapshot.empty) {
                const doc = querySnapshot.docs[0];
                await deleteDoc(doc.ref);
                console.log('Data Deleted');
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="writetextarea flex">
            <div className="writebox">
                <p>Write the Message and share it to online clipboard</p>
                <div className="writebox innerbox">
                    <textarea 
                        onChange={onMessageChange}
                        className="commentwrite" 
                        name="writemessage" 
                        id="writetextcomment"
                        value={message}
                        placeholder="Write the Message here..."
                    ></textarea>
                    
                    <div>
                        <button onClick={onWrite} className="custom-btn btn-16" type="submit">Share the Message</button>
                    </div>

                    <div>
                        <p>Id to retrieve the Message:  <span className="pin">{pin}</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WriteInTextarea;
