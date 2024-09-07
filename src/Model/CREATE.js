import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const AddRecord = () => {
    const addRecord = async () => {
        try {
            const docRef = await addDoc(collection(db, "dogRecords"), {
                dogName: "Arya",
                vaccinations: ["Rabbia"],
                lastCheckup: new Date()
            });
            console.log("document written with id: ", docRef.id); 
        } catch (e) {
            console.error("Error adding document: ", e )
        }
    };

    return (
        <div>
            <h2>Add a new dog record</h2>
            <button onClick={addRecord}>Add record</button>
        </div>
    )
}

export default AddRecord;

