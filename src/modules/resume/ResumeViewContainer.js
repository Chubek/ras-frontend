import { compose } from "recompose";
import { connect } from "react-redux";

import ResumeView from "./ResumeView";
import { thunkFunc } from "./ResumeState";

export default compose(
  connect(
    (state) => ({
      stateOne: state.stateOne,
      stateTwo: state.stateTwo,
      stateThree: state.stateThree,
    }),
    (dispatch) => ({
      thunkFunc: (arg) => dispatch(thunkFunc(arg)),
    })
  )
)(ResumeView);
