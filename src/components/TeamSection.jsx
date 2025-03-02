  // eslint-disable-next-line no-unused-vars
  import React, { useEffect, useState } from 'react'
  import { db } from '../config/firebase.js'
  import { collection,  getDocs,  doc } from "firebase/firestore";
  import PropTypes from 'prop-types';

  export const TeamSection = ({ designation = "null", title = "null", collectionName = "null" }) => {
    const [team, setTeam] = useState([]);
    const teamCollectionRef = collection(db, `${collectionName}`);

    const getTeam = async () => {
      try {
        const querySnapshot = await getDocs(teamCollectionRef);
        const teamData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTeam(teamData);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    useEffect(() => { 
      getTeam();
    }, []); // Fetch data only on mount

    return (
      <div className=" pb-15 flex flex-col items-center min-w-full bg-gray-00">
        <div className="p-6 min-w-full bg-green-900  ">
          {/* Title */}
          <h1 className="text-4xl font-bold text-center text-white mb-10">{title}</h1>
          {/* Team List */}
          <div className="mt-6 ">
            {team.length > 0 ? (
              <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {team.map((member) => (
                  <div key={member.id} className="bg-white p-4 shadow-md rounded-xl flex flex-col items-center hover:border-1 hover:scale-99 hover:border-red-700">
                    <img 
                      src={member.image || "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"} 
                      alt={member.name} 
                      className="w-52 h-52 rounded-full border-2 border-gray-300 object-cover hover:scale-101"
                    />
                    <p className="mt-3 text-gray-800 font-medium text-2xl ">{member.name}</p>
                    <p className="text-sm text-gray-500">{designation}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 mt-3 text-center">No members added yet.</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  TeamSection.propTypes = {
    designation: PropTypes.string,
    title: PropTypes.string,
    collectionName: PropTypes.string,
  };

export default TeamSection
