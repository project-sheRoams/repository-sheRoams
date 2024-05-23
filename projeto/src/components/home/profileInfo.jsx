import React, { useState, useEffect } from 'react';

const ProfileInfo = ({ userId }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch(`/api/profile/${userId}`)
      .then(response => response.json())
      .then(data => setProfileData(data))
      .catch(error => console.error('Error fetching profile data:', error));
  }, [userId]);

  return (
    <div className="profile-info">
      {profileData && (
        <>
          <img src={profileData.profileImage} alt="Profile" className="profile-image" />
          <p className="profile-text">{`Who roams the world? ${profileData.gender}!`}</p>
        </>
      )}
    </div>
  );
};

export default ProfileInfo;
