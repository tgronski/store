import React from "react";
import { Link } from "react-router-dom";
import "./MenuOptions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class MenuOptions extends React.Component {
  render() {
    let lists = this.props.list;
    return (
      <div className="MenuOptions">
        <ul>
          {lists.map((list) => (
            <li key={list.name}>
              <Link to={list.name}>
                {list.icon
                ?<FontAwesomeIcon icon={list.icon}>{" "}</FontAwesomeIcon>
                :null}
                {list.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MenuOptions;
