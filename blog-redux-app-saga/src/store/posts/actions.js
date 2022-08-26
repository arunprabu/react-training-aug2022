import { CREATE_ERROR, CREATE_REQUEST, CREATE_SUCCESS, FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./types"

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST
  }
}

export const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data
  }
}

export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error
  }
}

export const createPostRequest = (formData) => {
  return {
    type: CREATE_REQUEST,
    payload: formData
  }
}

export const createPostSuccess = (data) => {
  return {
    type: CREATE_SUCCESS,
    payload: data
  }
}

export const createPostError = (error) => {
  return {
    type: CREATE_ERROR,
    payload: error
  }
}