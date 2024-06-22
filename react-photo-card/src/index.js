import React from "react"; //importing the React library
import ReactDOM from "react-dom/client"; //importing the ReactDOM library
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data"></div>
      <Intro />

      <SkillList />
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="images/CindyCardImage.JPG"
      alt="Cindy Card"
    ></img>
  );
}

function Intro() {
  return (
    <div>
      <h1>Cindy Boyer</h1>
      <p>
        A web developer with a creative eye with the courage to dismantle and
        restart a vision. Does not fear the new and excells in taking in
        contructive feedback.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skillTitle="React" emoji="💛" color="#FF4E33" />
      <Skill skillTitle="Bootstrap" emoji="💡" color="#33FFF9" />
      <Skill skillTitle="HTML & CSS" emoji="💪" color="#63FF33" />
      <Skill skillTitle="JavaScript" emoji="💪" color="#F7FF33" />
      <Skill skillTitle="git" emoji="👍" color="#B633FF" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>
        {props.skillTitle}
        <span>{props.emoji}</span>
      </span>
    </div>
  );
}
//this is how we render in the root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //runs code to check for bugs just a nice to have not required
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
