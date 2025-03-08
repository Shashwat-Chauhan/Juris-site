import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import PropTypes from 'prop-types';

const TeamSection = ({ designation = 'null', title = 'null', collectionName = 'null' }) => {
  const [team, setTeam] = useState([]);
  const teamCollectionRef = collection(db, collectionName);

  const getTeam = async () => {
    try {
      const querySnapshot = await getDocs(teamCollectionRef);
      const teamData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTeam(teamData);
    } catch (error) {
      console.error('Error fetching team data:', error);
    }
  };

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <div className="pb-20 flex flex-col items-center min-w-full bg-gradient-to-br from-[#5d5e5d] via-[#14532d] to-[#1e3a34] relative">
      <div className="relative w-full bg-gradient-to-r from-[#0f172a] via-[#245a3a] to-[#20584c] shadow-lg rounded-b-3xl py-10">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center text-white drop-shadow-lg">{title}</h1>
      </div>
      {/* Team List */}
      <div className="mt-16 max-w-7xl mx-auto px-6">
        {team.length > 0 ? (
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-gradient-to-b from-[#1e3a34] via-[#14532d] to-[#0f172a] p-10 shadow-2xl rounded-2xl flex flex-col items-center transition-transform transform scale-110 hover:scale-115 hover:shadow-2xl border border-gray-500"
              >
                <img
                  src={member.image || 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png'}
                  alt={member.name}
                  className="w-44 h-44 rounded-full border-4 border-gray-400 object-cover hover:scale-110 transition-transform duration-300"
                />
                <p className="mt-6 text-gray-200 font-semibold text-xl text-center">{member.name}</p>
                <p className="text-lg text-gray-400 text-center">{designation}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 mt-6 text-center text-lg">No members added yet.</p>
        )}
      </div>
    </div>
  );
};

TeamSection.propTypes = {
  designation: PropTypes.string,
  title: PropTypes.string,
  collectionName: PropTypes.string,
};

export default TeamSection;