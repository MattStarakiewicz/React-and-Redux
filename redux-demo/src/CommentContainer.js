import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment} from './actions'
import {thumbdownComment} from './actions'

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbdownComment: (id) => dispatch(thumbdownComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);