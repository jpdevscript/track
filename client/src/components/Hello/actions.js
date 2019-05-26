import { types } from './constants';

export const getHandleSumbit = (post) => {
  return {
    type: types.GET_HELLO_RESPONSE,
    post
  }
}

export const getHandleTextChange = (value) => {
  return {
    type: types.HANDLE_TEXT_CHANGE,
    value
  }
}