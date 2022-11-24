import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          {" "}
          <h1>{props.results.word}</h1>
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <section>
                <Meaning meaning={meaning} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
