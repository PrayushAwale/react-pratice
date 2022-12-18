import { startTransition, useRef } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Form = () => {
  const refContainer = useRef(null);
  // const [person, setPerson] = useState({ name: "", email: "" });
  // const [people, setPeople] = useState([]);
  // const upload = (e) => {
  //   e.preventDefault();

  //   console.log(refContainer.current.value);
  //   setPeople([...people, person]);
  // };
  // const change = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   setPerson({ ...person, [name]: value });
  // };
  const reducer = (state, action) => {
    if (action.type === "Testing") {
      return {
        ...state,
        isOpen: !state.isOpen,
        values: [{ title: newValue }],
      };
    }
    return state;
  };
  const defaultState = {
    isOpen: false,
    values: [{ title: "" }],
  };
  const [state, dispatcher] = useReducer(reducer, defaultState);
  const updateTitle = (e) => {
    newValue = e.target.value;
  };
  return (
    <div>
      <form>
        <div>{state.isOpen && <h1>Modal</h1>}</div>
        <label htmlFor="input">Enter any thing</label>
        <input type="text" ref={refContainer} />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatcher({ type: "Testing" });
            updateTitle(e);
          }}
        >
          Add
        </button>
      </form>
      {state.values && (
        <div>
          {state.values.map((peep) => {
            return <div>{peep.title}</div>;
          })}
        </div>
      )}
      {/* <form onSubmit={upload}>
        <label htmlFor="name">Name:</label>
        <input type="text" onChange={change} name="name" value={person.name} />
        <label htmlFor="name">Email:</label>
        <input
          type="text"
          onChange={change}
          name="email"
          value={person.email}
        />
        <label htmlFor="name">Ref:</label>
        <input type="text" ref={refContainer} />
        <button>CLick add</button>
      </form> */}
      {/* {people.map((peoples) => {
        return (
          <div>
            <h1>{peoples.name}</h1>
            <h1>{peoples.email}</h1>
            <h1>Hello</h1>
          </div>
        );
      })} */}
    </div>
  );
};

export default Form;
