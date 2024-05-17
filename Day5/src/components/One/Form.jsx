import React, { useState } from "react";
import ThumbnailImage from "../../assets/giphy2.gif";

function Form({ addNewMember }) {
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

  function handleSubmit(event) {
    event.preventDefault();
    addNewMember(info);
    setInfo({ name: "", live: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        onChange={trackName}
        value={info.name}
      ></input>
      <input
        type="text"
        placeholder="live"
        onChange={trackLive}
        value={info.live}
      ></input>
      <button type="submit">Add new member</button>
    </form>
  );
}

export function NoDataThumbnail() {
  return (
    <div className="thumbnail__container">
      <img src={ThumbnailImage} />
      <p>No Data yet!</p>
    </div>
  );
}

export default Form;
