import axios from 'axios';
import { FETCH_JOBS, LIKE_JOB } from './types';
import INDEED_DATA from '../indeedData.json';



export const fetchJobs = (region, callback) => async dispatch => {
  try {
    let data = INDEED_DATA;
    dispatch({ type: FETCH_JOBS, payload: data });
    callback();

  } catch (e) {
    console.error(e);
  }
};

export const likeJob = (job) => {
  return {
    payload: job,
    type: LIKE_JOB
  }
}
