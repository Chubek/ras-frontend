import { compose } from 'recompose';
import { connect } from 'react-redux';
import * as ResumeState from './ResumeState';
import ResumeView from './ResumeView';

export default compose(
  connect(
    state => ({
      resumeId: state.resume.resumeId,
      userId: state.resume.userId,
      resumeName: state.resume.resumeName,
      creationDate: state.resume.creationDate,
      editDates: state.resume.editDates,
      templateInfo: state.resume.templateInfo,
      contactInfo: state.resume.contactInfo,
      summaryObjective: state.resume.summaryObective,
      historyExperience: state.resume.historyExperience,
      technicalSkills: state.resume.technicalSkills,
      softwareSkills: state.resume.softwareSkills,
      degrees: state.resume.degrees,
      certifications: state.resume.certifications,
      awardsAchievements: state.resume.awardsAchievements,
      volunteerings: state.resume.volunteerings,
      resumeExistenceMessage: state.resume.resumeExistenceMessage,
      userResumes: state.resume.userResumes,
    }),
    dispatch => ({
      deleteResume: id => dispatch(ResumeState.deleteResume(id)),
      createResume: resumeName =>
        dispatch(ResumeState.createResume(resumeName)),
      setConctInfo: contactInfo =>
        dispatch(ResumeState.setContactInfo(contactInfo)),
      setSummaryObjective: summaryObective =>
        dispatch(ResumeState.setSummaryObjective(summaryObective)),
      appendHistory: newHistory =>
        dispatch(ResumeState.appendHistory(newHistory)),
      appendTechSkills: newSkills =>
        dispatch(ResumeState.appendTechSkills(newSkills)),
      appendSoftwareSkills: newSkills =>
        dispatch(ResumeState.appendSoftwareSkills(newSkills)),
      appendDegrees: newDegrees =>
        dispatch(ResumeState.appendDegrees(newDegrees)),
      appendCerts: newCerts => dispatch(ResumeState.appendCerts(newCerts)),
      appendAwards: newAwards => dispatch(ResumeState.appendAwards(newAwards)),
      appendVolunteerings: newVolts =>
        dispatch(ResumeState.appendVolunteerings(newVolts)),
      restoreToCapture: editDate =>
        dispatch(ResumeState.restoreToCapture(editDate)),
      getSingleResume: resumeId =>
        dispatch(ResumeState.getSingleResume(resumeId)),
      getUserResume: () => dispatch(ResumeState.getUserResume()),
    }),
  ),
)(ResumeView);
