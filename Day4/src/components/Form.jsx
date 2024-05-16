import React, { useState } from "react";

function Form() {
  const [info, setInfo] = useState({
    name: "",
    live: "",
  });

  function trackName(event) {
    setInfo((prevInfo) => ({
      ...prevInfo,
      name: event.target.value,
    }));
  }

  function trackLive(event) {
    setInfo((prevInfo) => ({
      ...prevInfo,
      live: event.target.value,
    }));
  }

  function showData(event) {
    event.preventDefault();
    console.log(info);
  }

  return (
    <form onSubmit={showData}>
      <input type="text" placeholder="name" onChange={trackName}></input>
      <input type="text" placeholder="live" onChange={trackLive}></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
