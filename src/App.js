import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  const person = {
    fullName: "khadija",
    bio: "bio",
    profession: "developer",
  }
  
  const image={
    img :"https://cdn.pixabay.com/photo/2015/03/14/00/00/landscape-672456_960_720.jpg"
  }
  return (
    <div className="App">
      <Profile person={person} image={image} />
   
     
    </div>
  );
}

export default App;
