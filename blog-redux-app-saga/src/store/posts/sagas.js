import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { callApi } from "../../utils/api";
import { createPostError, createPostSuccess, fetchError, fetchSuccess } from "./actions";
import { CREATE_REQUEST, FETCH_REQUEST } from "./types";

const POST_API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=20';

// worker saga -- can connect with rest api, and dispatch 
function* handleFetch(){

  try{
    // to call ajax logic -- use redux-saga's call()
    const res = yield call( callApi, 'get', POST_API_URL);
    if(res.error){
      // dispatch with error -- use put() from redux-saga
      yield put(fetchError(res.error))
    }else{
      // dispatch with success / data -- use put() from redux-saga
      yield put(fetchSuccess(res))
    }

  }
  catch(err){
    if(err){
      // dispatch with error -- use put() from redux-saga
    }
  }
}

// watcher saga -- watch specific action type and run the saga 
function* watchFetchRequest(){
  yield takeEvery(FETCH_REQUEST, handleFetch);
}


// Now, let's work on create post
// worker saga -- can connect with rest api, and dispatch 
function* handleCreatePost(data){
  try{
    // to call ajax logic -- use redux-saga's call()
    const res = yield call( callApi, 'post', POST_API_URL, data.payload);
    if(res.error){
      // dispatch with error -- use put() from redux-saga
      yield put(createPostError(res.error))
    }else{
      // dispatch with success / data -- use put() from redux-saga
      yield put(createPostSuccess(res))
    }

  }
  catch(err){
    if(err){
      // dispatch with error -- use put() from redux-saga
      yield put(createPostError(err))
    }
  }
}

// watcher saga -- watch specific action type and run the saga 
function* watchCreatePost(){
  yield takeEvery(CREATE_REQUEST, handleCreatePost);
}

// feature saga 
function* postsSaga(){
  yield all([
    fork(watchFetchRequest),
    fork(watchCreatePost), 
  ])
}

export default postsSaga;