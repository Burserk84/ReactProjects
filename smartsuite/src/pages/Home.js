import React from "react";
import { Weather } from "../components/Weather";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TypingEffect from "../components/TypingEffect";
import "../styles/Global.css";
import { navData } from "../utils/navData";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <TypingEffect />
      <Weather />
      <div className="p-3">
        <p className="QA">What is SmartSuite used for?</p>
        <ul>
          {navData.map((item) => (
            <li className="QA-items" key={item.id}>
              <Link className="QA-link" to={item.src}>
                • {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
