import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import SecretItem from './SecretItem';
import SecretForm from './SecretForm';
import { getOtherSecrets } from '../../actions/secret';

const OtherSecrets = ({ getOtherSecrets, secret: { secrets, loading } }) => {
  useEffect(() => {
    getOtherSecrets();
  }, [getOtherSecrets]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <SecretForm />
            <Fragment>
              <section className="secrets">
                <div className="card-columns">
                  {secrets.length > 0 ? (
                    secrets.map(secret => (
                      <SecretItem key={secret._id} secret={secret} />
                    ))
                  ) : (
                    <h4>No secrets found</h4>
                  )}
                </div>
              </section>
            </Fragment>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

OtherSecrets.propTypes = {
  getOtherSecrets: PropTypes.func.isRequired,
  secret: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  secret: state.secret
});

export default connect(
  mapStateToProps,
  { getOtherSecrets }
)(OtherSecrets);
