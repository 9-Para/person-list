import React from 'react'
import ReactDOM from "react-dom"
import "./index.css";
const Person = ({ name, job, img, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url}
        alt="person image" />

      <h4>{name}</h4>
      <h4>{job}</h4>
      <p>{children}</p>
    </article>
  )
}


const PersonList = () => {
  return (
    <section className="person-list">
      <Person name="John" job="DEVELOPER" img="35">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Person>
      <Person name="Bryce" job="DESIGNER" img="36">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Person>
      <Person name="Jacob" job="BOSS" img="37">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Person>
    </section>
  );
}

ReactDOM.render(<PersonList />, document.getElementById("root"));