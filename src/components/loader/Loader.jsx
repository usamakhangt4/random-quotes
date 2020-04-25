import React from "react";
import ReactLoading from "react-loading";

const Loader = ({ type, color }) => (
  <ReactLoading type="bars" color="pink" height={300} width={300} />
);

export default Loader;
