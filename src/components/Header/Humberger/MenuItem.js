import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ text, url, noLink = false }) => {
  return (
    <li
      className={`cursor-pointer bg-gradient-to-r from-primary to-primary bg-clip-text font-Inter text-lg font-semibold capitalize tracking-wide text-transparent hover:from-purple-400 hover:to-pink-600 hover:text-money-green ${
        noLink ? "" : "my-2.5"
      }`}
    >
      {noLink ? (
        text
      ) : (
        <Link to={url} style={{ all: "inherit" }}>
          {text}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
