import React, { Fragment } from "react";
import { connect } from "react-redux";

const ErrorMessage = ({ error }) => (
  <Fragment>
    {error.message && (
      <span id="err" className="alert alert-danger">
        {" "}
        {error.message}
      </span>
    )}
  </Fragment>
);

export default connect((store) => ({ error: store.error }))(ErrorMessage);
