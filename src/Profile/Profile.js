import React from "react";

const Profile = ({ person,image }) => {
  return <div className="identity"> 
  <img src={image.img}/>
  < div className="ident">
  <h1>{person.fullName}</h1>  
  <p>{person.bio}</p>
 <h2>{person.profession}</h2>
  </div>
   
  </div>;
};

export default Profile;
