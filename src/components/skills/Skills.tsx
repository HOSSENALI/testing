import { useState, useEffect } from "react";
import { SkillsProps } from "./Skills.types";

export const Skills = (props: { skills: SkillsProps[] }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 500);
  }, []);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {props.skills.map((skill) => {
            return (
              <tr key={skill.id}>
                <td key={skill.id}>{skill.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};
