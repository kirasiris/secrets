import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addCommentLike, removeCommentLike } from '../../actions/secret';

const CommentItem = ({
  addCommentLike,
  removeCommentLike,
  comment: { _id, age, sex, text, likes, date }
}) => {
  // Declare Sex
  let sexo = '';
  let classes = '';
  if (sex === 'male') {
    classes = 'media bg-primary text-white p-5';
    sexo = <i className="fas fa-mars" />;
  } else if (sex === 'female') {
    classes = 'media bg-danger text-white p-5';
    sexo = <i className="fas fa-venus" />;
  } else {
    classes = 'media bg-info text-white p-5';
    sexo = <i className="fas fa-genderless" />;
  }
  return (
    <article className={_id}>
      <li className={classes}>
        <img
          className="mr-3"
          src="https://pbs.twimg.com/profile_images/824716853989744640/8Fcd0bji_400x400.jpg"
          width="64"
          height="64"
          alt="g"
        />
        <div className="media-body">
          <h5 className="mt-0">
            {sexo} - {age}
          </h5>
          <p>{text}</p>
          <small>
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
          </small>
        </div>
        <Fragment>
          <button
            onClick={() => addCommentLike(_id)}
            type="button"
            className="btn btn-sm btn-outline-light"
          >
            <i className="fas fa-thumbs-up" />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={() => removeCommentLike(_id)}
            type="button"
            className="btn btn-sm btn-outline-light"
          >
            <i className="fas fa-thumbs-down" />
          </button>
        </Fragment>
      </li>
    </article>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  addCommentLike: PropTypes.func.isRequired,
  removeCommentLike: PropTypes.func.isRequired
};

export default connect(
  null,
  { addCommentLike, removeCommentLike }
)(CommentItem);
