import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  VALIDATE_USER_INPUT_REQUEST,
  VALIDATE_USER_INPUT_SUCCESS,
  VALIDATE_USER_INPUT_ERROR
} from '../actions/questions';

const initialState = {
  question: {},
  feedback: '',
  answer: '',
  userAnswered: false,
  error: null,
  loading: false
};

const fetchQuestion = (state = initialState, action) => {
  if (action.type === FETCH_QUESTION_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null,
      userAnswered: false
    };
  } else if (action.type === FETCH_QUESTION_SUCCESS) {
    return {
      ...state,
      loading: false,
      question: action.question.question,
      answer: action.question.question.answer
    };
  } else if (action.type === FETCH_QUESTION_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  } else if (action.type === VALIDATE_USER_INPUT_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if (action.type === VALIDATE_USER_INPUT_SUCCESS) {
    return {
      ...state,
      loading: false,
      feedback: action.feedback,
      userAnswered: true
    };
  } else if (action.type === VALIDATE_USER_INPUT_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
  return state;
};

export default fetchQuestion;
