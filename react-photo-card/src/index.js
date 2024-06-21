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
    <div className="container">
      <h1>ho</h1>
      <img src="images/CindyCardImage.JPG" alt="Cindy Card"></img>
    </div>
  );
}

function Intro() {
  return (
    <div className="container">
      <h3>Cindy Boyer</h3>
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
    <main>
      <Skills skillTitle="React" />
      <Skills skillTitle="Bootstrap" />
      <Skills skillTitle="CSS" />
      <Skills skillTitle="git" />
    </main>
  );
}

function Skills(props) {
  return (
    <div>
      <p>{props.skillTitle}</p>
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
