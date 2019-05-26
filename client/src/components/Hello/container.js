import { connect } from 'react-redux';
import Hello from './Hello.Index.js';
import { getHandleSumbit, getHandleTextChange } from "./actions";

const mapStateToProps = state => {
  const { helloData } = state;
  return {
    response: helloData.response,
    post: helloData.post,
    responseToPost: helloData.responseToPost
  }
}
const mapDispatchToProps = dispatch => ({
    onHandleSumbit: (...args) => dispatch(getHandleSumbit(...args)),
    onHandleTextChange: (...args) => dispatch(getHandleTextChange(...args))
})

export default connect(mapStateToProps, mapDispatchToProps)(Hello);