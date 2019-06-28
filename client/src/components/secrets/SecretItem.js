import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike } from '../../actions/secret';

const SecretItem = ({
  addLike,
  removeLike,
  secret: { _id, age, sex, text, nsfw, likes, comments, date },
  showActions,
  showIncognito
}) => {
  // Declare Sex
  let sexo = '';
  let classes = '';
  let offensive_text = text;
  if (sex === 'male') {
    classes = 'card bg-primary text-center text-white ' + _id;
    sexo = <i className="fas fa-mars" />;
  } else if (sex === 'female') {
    classes = 'card bg-danger text-center text-white ' + _id;
    sexo = <i className="fas fa-venus" />;
  } else {
    classes = 'card bg-info text-center text-white ' + _id;
    sexo = <i className="fas fa-genderless" />;
  }
  // Declare NSFW
  let not_safe_for_work = '';
  if (nsfw === 'yes') {
    offensive_text = 'Warning, this is NSFW';
    not_safe_for_work = <i className="fas fa-user-secret" />;
  }
  return (
    <article className={classes}>
      <div className="card-header">
        <span className="badge age badge-light">{not_safe_for_work}</span>
        <span className="badge sex badge-secondary">
          {sexo} - {age}
        </span>
        <br />
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          {showIncognito ? <p>{offensive_text}</p> : <p>{text}</p>}
          <footer className="blockquote-footer text-white">
            <small>
              Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
            </small>
          </footer>
        </blockquote>
      </div>
      {showActions && (
        <div className="card-footer">
          <Fragment>
            <button
              onClick={() => addLike(_id)}
              type="button"
              className="btn btn-sm btn-outline-light"
            >
              <i className="fas fa-thumbs-up" />{' '}
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>{' '}
            <button
              onClick={() => removeLike(_id)}
              type="button"
              className="btn btn-sm btn-outline-light"
            >
              <i className="fas fa-thumbs-down" />
            </button>{' '}
            <Link
              to={`/secrets/${_id}`}
              className="btn btn-sm btn-outline-light"
            >
              <i className="fas fa-comment" />{' '}
              {comments.length > 0 && (
                <span className="comment-count">{comments.length}</span>
              )}{' '}
              >>
            </Link>
          </Fragment>
        </div>
      )}
    </article>
  );
};

SecretItem.defaultProps = {
  showActions: true,
  showIncognito: true
};

SecretItem.propTypes = {
  secret: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
  showIncognito: PropTypes.bool
};

export default connect(
  null,
  { addLike, removeLike }
)(SecretItem);
