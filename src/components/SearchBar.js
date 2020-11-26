import { Button } from "@material-ui/core";
import { Mic, Search } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../middleware/reducer";
import { useStateValue } from "../middleware/StateProvider";
import "./SearchBar.css";

function SearchBar({ hideButton = false, text = '' }) {
  const [, dispatch] = useStateValue();

  const [input, setInput] = useState();

  const history = useHistory();

  const search = (e) => {
    // prevent default action
    e.preventDefault();
    // Invoked Hook
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    // search feild become empty when pressed enter
    // setInput(input);
    // Go to /search
    history.push("/search");
  };

  return (
    <form className="searchbar">
      <div className="search">
        <Search className="search_icon" />
        <input
          type="text"
          value={input ? input : text ? text : ""}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search here..."
        />
        <Mic />
      </div>

      {!hideButton ? (
        <div className="search_button">
          <Button type="submit" onClick={search} variant="outlined">
            Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <Button type="submit" onClick={search} className="btn-hidden">
          Search
        </Button>
      )}
    </form>
  );
}

export default SearchBar;
