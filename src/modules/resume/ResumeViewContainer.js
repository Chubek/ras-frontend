import { compose } from 'recompose';
import { connect } from 'react-redux';
import { deleteResume } from './ResumeState';
import ResumeView from './ResumeView';

export default compose(
  connect(
    state => ({
      resumeId: state.resume.resumeId,
    }),
    dispatch => ({
      deleteResume: id => dispatch(deleteResume(id)),
    }),
  ),
)(ResumeView);
