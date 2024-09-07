import React, {useEffect, useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const GetRecords = () => {
    const [records, setRecords] = useState([]);

    const getRecords = async () => {
        const querySnapshot = await getDocs(collection(db, "dogRecords"));
        const data = querySnapshot.docs.map(doc => {
          const docData = doc.data();
          return {
            id: doc.id,
            ...docData,
            lastCheckup: docData.lastCheckup.toDate()
          };
        });
        setRecords(data);
    };

    useEffect(() => {getRecords();}, [])

    return (
        <div>
          <h2>Dog Records</h2>
          <ul>
            {records.map(record => (
              <li key={record.id}>
                {record.dogName} - Vaccinations: {record.vaccinations.join(", ")} - Last Checkup: {record.lastCheckup.toDateString()}
              </li>
            ))}
          </ul>
        </div>
      );
};

export default GetRecords;

