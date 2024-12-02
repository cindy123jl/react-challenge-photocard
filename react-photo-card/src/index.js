import React from "react"; //importing the React library
import ReactDOM from "react-dom/client"; //importing the ReactDOM library
import "./styles.css";

const skills = [
  {
    skill: "React",
    level: "Beginner",
    color: "#FF4E33",
  },
  {
    skill: "Bootstrap",
    level: "Intermediate",
    color: "#33FFF9",
  },
  {
    skill: "HTML & CSS",
    level: "Advanced",
    color: "#63FF33",
  },
  {
    skill: "JavaScript",
    level: "Intermediate",
    color: "#F7FF33",
  },
  {
    skill: "Git",
    level: "Intermediate",
    color: "#B633FF",
  },
];

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
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Beginner" && "👶"}
        {level === "Intermediate" && "👍"}
        {level === "Advanced" && "💪"}
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
