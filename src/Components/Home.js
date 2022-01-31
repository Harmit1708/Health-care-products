import React, { Fragment, useContext } from "react";
import { healthCareContext } from "../App";
import { Link } from "react-router-dom";

function Home() {
  let context = useContext(healthCareContext);

  return (
    <div className="home-wrapper">
      {context.data.map((e, i) => {
        return (
          <Fragment key={i}>
            <Link
              to={`/` + e.name.replace(/ /g, "").toLowerCase()}
              className="item-link"
            >
              <div className="item-wrapper">
                <img className="item-image" src={e.image} alt={e.name}></img>
                <div className="item-name">{e.name}</div>
              </div>
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
}

export default Home;
