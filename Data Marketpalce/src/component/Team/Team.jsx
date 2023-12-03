// Team.jsx
import React from 'react';
import styles from './Team.module.css';

const Team = () => {
  console.log('Team component rendered');

  const teamMembers = [
    {
      name: 'Nikhil Tyagi',
      role: 'Front End Developer',
      bio: 'Ok OK',
    },
    {
      name: 'Sam',
      role: 'Ai',
      bio: 'Ok OK',
    },
    {
      name: 'Samarth',
      role: 'Blockchain Developer',
      bio: 'Ok OK',
    },
    // Add more team members as needed
  ];

  return (
    <div className={styles.teamContainer}>
      <h2>Meet Our Team</h2>

      {teamMembers.map((member, index) => (
        <div key={index} className={styles.teamMember}>
          <img src="team-member-4.jpg" alt="Nikhil" className={styles.memberPhoto} />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
          <p>{member.bio}</p>
        </div>
      ))}
    </div>
  );
}

export default Team;
