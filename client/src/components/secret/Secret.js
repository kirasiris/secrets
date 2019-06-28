import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import SecretItem from '../secrets/SecretItem';
import CommentForm from '../secret/CommentForm';
import CommentItem from '../secret/CommentItem';
import { getSecret } from '../../actions/secret';

const Secret = ({ getSecret, secret: { secret, loading }, match }) => {
  useEffect(() => {
    getSecret(match.params.id);
  }, [getSecret, match.params.id]);

  return loading || secret === null ? (
    <Spinner />
  ) : (
    <div className="container">
      <Fragment>
        <Link to="/secrets" className="btn btn-primary mb-1">
          Back To Secrets
        </Link>
        <SecretItem secret={secret} showActions={false} showIncognito={false} />
        <hr />
        <CommentForm postId={secret._id} />
        <hr />
        <section className="comments">
          <ul className="list-unstyled">
            {secret.comments.map(comment => (
              <CommentItem
                key={comment._id}
                comment={comment}
                postId={secret._id}
              />
            ))}
          </ul>
        </section>
      </Fragment>
    </div>
  );
};

Secret.propTypes = {
  getSecret: PropTypes.func.isRequired,
  secret: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  secret: state.secret
});

export default connect(
  mapStateToProps,
  { getSecret }
)(Secret);
