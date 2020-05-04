/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */
import axios from 'axios';
import faker from 'faker';
import * as helpers from '../../helpers';
import * as CONSTANTS from './ResumeConstants';
import * as globalStr from '../../../global';

// initialState
const initialState = {
  resumeId: null,
  userId: null,
  resumeName: String,
  creationDate: Date,
  editDates: [],

  templateInfo: {
    templateId: String,
    png: [],
    pdf: [],
  },

  contactInfo: {
    firstName: null,
    lastName: null,
    phoneNumber: null,
    emailAddress: null,
    city: null,
    state: null,
    zipCOde: null,
  },
  summaryObjective: {
    objective: [],
    summary: [],
    bluf: [],
  },
  historyExperience: [],
  technicalSkills: [],
  softwareSkills: [],
  degrees: [],
  certifications: [],
  awardsAchievements: [],
  volunteerings: [],
};

//  thunk actions
export function getSingleResume(resumeId) {
  return dispatch => {
    axios
      .get(`${globalStr.erverUrl}/resume/get/single/${resumeId}`, {
        headers: { 'x-auth-user': helpers.getUserToken() },
      })
      .then(res => {
        const { resumeDoc } = res.data;
        dispatch({ type: CONSTANTS.FETCH_RESUME, payload: resumeDoc });
      })
      .catch(e => {
        helpers.showErrorMessage(e);
      });
  };
}

export function createResume(resumeName) {
  let resumeNameVar = resumeName;
  if (!resumeNameVar) {
    resumeNameVar = faker.name.jobDescriptor();
  }
  return dispatch => {
    axios
      .post(
        `${globalStr.serverUrl}/resume/create/`,
        { resumeName: resumeNameVar },
        {
          headers: { 'x-auth-user': helpers.getUserToken() },
        },
      )
      .then(res => {
        const { resumeId } = res.data.resumeId;
        helpers.showSuccessMessage(
          `Resume ${resumeNameVar} successfully created.`,
        );

        dispatch({
          type: CONSTANTS.SET_CREATION_INFO,
          payload: { name: resumeNameVar, id: resumeId },
        });
      })
      .catch(e => {
        helpers.showErrorMessage(e);
      });
  };
}

export function setContactInfo(contactInfo) {
  const {
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    city,
    state,
    zipCode,
  } = contactInfo;

  if (
    !firstName ||
    !lastName ||
    !emailAddress ||
    !phoneNumber ||
    !city ||
    state ||
    !zipCode
  ) {
    helpers.showErrorMessage('Some data are not entered!');
    return false;
  }
  return (dispatch, getState) => {
    const { resumeId } = getState().resume;

    axios
      .put(
        `${globalStr.serverUrl}/resume/set/contacts/${resumeId}`,
        contactInfo,
        {
          headers: { 'x-auth-user': helpers.getUserToken() },
        },
      )
      .then(res => {
        const { resumeUpdated } = res.data;
        if (resumeUpdated) {
          helpers.showSuccessMessage(
            `Resume contact info updated successfully.`,
          );

          dispatch({
            type: CONSTANTS.SET_CONTACT_INFO,
            payload: contactInfo,
          });
        }
      })
      .catch(e => {
        helpers.showErrorMessage(e);
      });
  };
}

export function setSummaryObjective(summaryObjective) {
  const { summary, objective, bluf } = summaryObjective;

  if (!objective || !summary || !bluf) {
    helpers.showErrorMessage('Some data are not entered!');
    return false;
  }
  return (dispatch, getState) => {
    const { resumeId } = getState().resume;

    axios
      .put(
        `${globalStr.serverUrl}/resume/set/summary/${resumeId}`,
        summaryObjective,
        {
          headers: { 'x-auth-user': helpers.getUserToken() },
        },
      )
      .then(res => {
        const { resumeUpdated } = res.data;
        if (resumeUpdated) {
          helpers.showSuccessMessage(
            `Resume summary and objectives updated successfully.`,
          );

          dispatch({
            type: CONSTANTS.SET_SUMMARY_OBJECTIVE,
            payload: summaryObjective,
          });
        }
      })
      .catch(e => {
        helpers.showErrorMessage(e);
      });
  };
}

export function appendHistory(newHistory) {
  const {
    companyName,
    locations,
    datesFrom,
    datesTo,
    dutiesAndTasks,
  } = newHistory;

  if (!companyName || !locations || !datesFrom || !datesTo || !dutiesAndTasks) {
    helpers.showErrorMessage('Some data are not entered!');
    return false;
  }
  return (dispatch, getState) => {
    const { resumeId } = getState().resume;

    axios
      .put(
        `${globalStr.serverUrl}/resume/append/history/${resumeId}`,
        newHistory,
        {
          headers: { 'x-auth-user': helpers.getUserToken() },
        },
      )
      .then(res => {
        const { resumeUpdated } = res.data;
        if (resumeUpdated) {
          helpers.showSuccessMessage(`Resume history appended successfully.`);

          dispatch({
            type: CONSTANTS.APPEND_HISTORY,
            payload: newHistory,
          });
        }
      })
      .catch(e => {
        helpers.showErrorMessage(e);
      });
  };
}

export function appendTechSkills(newSkills) {
  const { skillName, skillProficiency, skillImportance } = newSkills;

  if (!skillName || !skillProficiency || !skillImportance) {
    helpers.showErrorMessage('Some data are not entered!');
    return false;
  }
  return (dispatch, getState) => {
    const { resumeId } = getState().resume;

    axios
      .put(
        `${globalStr.serverUrl}/resume/append/techskills/${resumeId}`,
        newSkills,
        {
          headers: { 'x-auth-user': helpers.getUserToken() },
        },
      )
      .then(res => {
        const { resumeUpdated } = res.data;
        if (resumeUpdated) {
          helpers.showSuccessMessage(
            `Resume tech skills appended successfully.`,
          );

          dispatch({
            type: CONSTANTS.APPEND_SKILLS,
            payload: newSkills,
          });
        }
      })
      .catch(e => {
        helpers.showErrorMessage(e);
      });
  };
}

export function appendSoftwareSkills(newSkills) {
  const { softwareName, skillProficiency, skillImportance } = newSkills;

  if (!softwareName || !skillProficiency || !skillImportance) {
    helpers.showErrorMessage('Some data are not entered!');
    return false;
  }

  return new Promise((resolve, reject) => {
    return (dispatch, getState) => {
      const { resumeId } = getState().resume;

      axios
        .put(
          `${globalStr.serverUrl}/resume/append/softwareskills/${resumeId}`,
          newSkills,
          {
            headers: { 'x-auth-user': helpers.getUserToken() },
          },
        )
        .then(res => {
          const { resumeUpdated } = res.data;
          if (resumeUpdated) {
            helpers.showSuccessMessage(
              `Resume software skills appended successfully.`,
            );
            resolve({ message: 'Updated' });
            dispatch({
              type: CONSTANTS.APPEND_SOFTWARE,
              payload: newSkills,
            });
          }
        })
        .catch(e => {
          helpers.showErrorMessage(e);
          reject(e);
        });
    };
  });
}

export function appendDegrees(newDegree) {
  const { almaMater, degree, dateEarned } = newDegree;

  if (!almaMater || !degree || !dateEarned) {
    helpers.showErrorMessage('Some data are not entered!');
    return false;
  }
  return (dispatch, getState) => {
    const { resumeId } = getState().resume;

    axios
      .put(
        `${globalStr.serverUrl}/resume/append/degrees/${resumeId}`,
        newDegree,
        {
          headers: { 'x-auth-user': helpers.getUserToken() },
        },
      )
      .then(res => {
        const { resumeUpdated } = res.data;
        if (resumeUpdated) {
          helpers.showSuccessMessage(
            `Resume software skills appended successfully.`,
          );

          dispatch({
            type: CONSTANTS.APPEND_DEGREES,
            payload: newDegree,
          });
        }
      })
      .catch(e => {
        helpers.showErrorMessage(e);
      });
  };
}

export function appendCerts(newCert) {
  const { certName, grantedBy, dateEarned, dateExpires } = newCert;

  if (!certName || !grantedBy || !dateEarned || !dateExpires) {
    helpers.showErrorMessage('Some data are not entered!');
    return false;
  }

  return (dispatch, getState) => {
    const { resumeId } = getState().resume;

    axios
      .put(`${globalStr.serverUrl}/resume/append/certs/${resumeId}`, newCert, {
        headers: { 'x-auth-user': helpers.getUserToken() },
      })
      .then(res => {
        const { resumeUpdated } = res.data;
        if (resumeUpdated) {
          helpers.showSuccessMessage(
            `Resume certifications appended successfully.`,
          );

          dispatch({
            type: CONSTANTS.APPEND_CERTS,
            payload: newCert,
          });
        }
      })
      .catch(e => {
        helpers.showErrorMessage(e);
      });
  };
}

export function appendAwards(newAward) {
  const { awardName, awardCompany, dateEarned } = newAward;

  if (!awardName || !awardCompany || !dateEarned) {
    helpers.showErrorMessage('Some data are not entered!');
    return false;
  }

  return (dispatch, getState) => {
    const { resumeId } = getState().resume;

    axios
      .put(
        `${globalStr.serverUrl}/resume/append/awards/${resumeId}`,
        newAward,
        {
          headers: { 'x-auth-user': helpers.getUserToken() },
        },
      )
      .then(res => {
        const { resumeUpdated } = res.data;
        if (resumeUpdated) {
          helpers.showSuccessMessage(`Resume awards appended successfully.`);

          dispatch({
            type: CONSTANTS.APPEND_AWARDS,
            payload: newAward,
          });
        }
      })
      .catch(e => {
        helpers.showErrorMessage(e);
      });
  };
}

export function appendVolunteerings(newVolunteering) {
  const { orgName, tasksCompleted, dates } = newVolunteering;

  if (!orgName || !tasksCompleted || !dates) {
    helpers.showErrorMessage('Some data are not entered!');
    return false;
  }

  return (dispatch, getState) => {
    const { resumeId } = getState().resume;

    axios
      .put(
        `${globalStr.serverUrl}/resume/append/awards/${resumeId}`,
        newVolunteering,
        {
          headers: { 'x-auth-user': helpers.getUserToken() },
        },
      )
      .then(res => {
        const { resumeUpdated } = res.data;
        if (resumeUpdated) {
          helpers.showSuccessMessage(
            `Resume volunteerings appended successfully.`,
          );

          dispatch({
            type: CONSTANTS.APPEND_VOLUNTEERING,
            payload: newVolunteering,
          });
        }
      })
      .catch(e => {
        helpers.showErrorMessage(e);
      });
  };
}

export function restoreToCapture(editDate) {
  if (!editDate) {
    helpers.showErrorMessage('Edit date not entered!');
    return false;
  }

  return (dispatch, getState) => {
    const { resumeId } = getState().resume;

    axios
      .put(
        `${globalStr.serverUrl}/resume/restore/to/capture/${resumeId}`,
        editDate,
        {
          headers: { 'x-auth-user': helpers.getUserToken() },
        },
      )
      .then(res => {
        const { resumeRestored, resumeDoc } = res.data;
        if (resumeRestored) {
          helpers.showSuccessMessage(`Resume restored successfully.`);

          dispatch({
            type: CONSTANTS.RESTORE_TO_CAPTURE,
            payload: resumeDoc,
          });
        }
      })
      .catch(e => {
        helpers.showErrorMessage(e);
      });
  };
}

export function deleteResume(resumeId) {
  if (!resumeId) {
    helpers.showErrorMessage('No resume ID entered!');
    return false;
  }

  axios
    .delete(`${globalStr.serverUrl}/resume/delete/${resumeId}`, {
      headers: { 'x-auth-user': helpers.getUserToken() },
    })
    .then(() => helpers.showSuccessMessage(`Resume ${resumeId} deleted.`))
    .catch(e => helpers.showErrorMessage(e));

  return true;
}

export default function ResumeStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CONSTANTS.FETCH_RESUME:
      return {
        ...state,
        resumeId: action.payload._id,
        userId: action.payload.createdInfo.userId,
        creationDate: action.payload.createdInfo.creationDate,
        resumeName: action.payload.createdInfo.resumeName,
        editDates: helpers.getEditDates(action.payload.editCaptures),
        templateInfo: action.payload.templateInfo,
        contactInfo: action.payload.contactInfo,
        summaryObjective: action.payload.summaryObjective,
        historyExperience: action.payload.historyExperience,
        technicalSkills: action.payload.technicalSkills,
        softwareSkills: action.payload.softwareName,
        degrees: action.payload.degrees,
        certifications: action.payload.certifications,
        awardsAchievements: action.payload.awardsAchievements,
        volunteering: action.payload.awardsAchievements,
      };
    case CONSTANTS.SET_CREATION_INFO:
      return {
        ...state,
        resumeId: action.payload.id,
        resumeName: action.payload.name,
      };
    case CONSTANTS.SET_CONTACT_INFO:
      return {
        ...state,
        contactInfo: action.payload,
      };
    case CONSTANTS.SET_SUMMARY_OBJECTIVE:
      return {
        ...state,
        summaryObjective: action.payload,
      };
    case CONSTANTS.APPEND_HISTORY:
      return {
        ...state,
        historyExperience: [...state.historyExperience, action.payload],
      };
    case CONSTANTS.APPEND_SKILLS:
      return {
        ...state,
        technicalSkills: [...state.technicalSkills, action.payload],
      };
    case CONSTANTS.APPEND_SOFTWARE:
      return {
        ...state,
        softwareSkills: [...state.softwareSkills, action.payload],
      };
    case CONSTANTS.APPEND_DEGREES:
      return {
        ...state,
        degrees: [...state.degrees, action.payload],
      };
    case CONSTANTS.APPEND_CERTS:
      return {
        ...state,
        certifications: [...state.certifications, action.payload],
      };
    case CONSTANTS.APPEND_AWARDS:
      return {
        ...state,
        awardsAchievements: [...state.awardsAchievements, action.payload],
      };
    case CONSTANTS.APPEND_VOLUNTEERING:
      return {
        ...state,
        volunteerings: [...state.volunteering, action.payload],
      };
    case CONSTANTS.RESTORE_TO_CAPTURE:
      return {
        ...state,
        resumeId: action.payload._id,
        userId: action.payload.createdInfo.userId,
        creationDate: action.payload.createdInfo.creationDate,
        resumeName: action.payload.createdInfo.resumeName,
        editDates: helpers.getEditDates(action.payload.editCaptures),
        templateInfo: action.payload.templateInfo,
        contactInfo: action.payload.contactInfo,
        summaryObjective: action.payload.summaryObjective,
        historyExperience: action.payload.historyExperience,
        technicalSkills: action.payload.technicalSkills,
        softwareSkills: action.payload.softwareName,
        degrees: action.payload.degrees,
        certifications: action.payload.certifications,
        awardsAchievements: action.payload.awardsAchievements,
        volunteering: action.payload.awardsAchievements,
      };
    default:
      return state;
  }
}
