import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addSecret } from '../../actions/secret';

const SecretForm = ({ addSecret }) => {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    nsfw: ''
  });

  const [text, setText] = useState('');

  const { age, sex, nsfw } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addSecret({ age, sex, text, nsfw });
    setText('');
  };

  return (
    <Fragment>
      <h1 className="display-1 text-center">Secrets</h1>
      <hr />
      <div className="post-form">
        <form className="form my-1" onSubmit={e => onSubmit(e)}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="age">Age</label>
              <input
                className="form-control"
                type="number"
                name="age"
                id="age"
                placeholder="Age"
                min="0"
                value={age}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="sex">Sex</label>
              <select
                className="form-control"
                name="sex"
                id="sex"
                value={sex}
                onChange={e => onChange(e)}
                required
              >
                <option>Select an Option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="nsfw">NSFW</label>
              <select
                className="form-control"
                name="nsfw"
                id="nsfw"
                value={nsfw}
                onChange={e => onChange(e)}
                required
              >
                <option>Select an Option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="text">Text</label>
              <textarea
                className="form-control"
                name="text"
                id="text"
                cols="30"
                rows="5"
                placeholder="Create a post"
                value={text}
                onChange={e => setText(e.target.value)}
                required
              />
            </div>
          </div>
          <input type="submit" className="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
      <hr />
    </Fragment>
  );
};

SecretForm.propTypes = {
  addSecret: PropTypes.func.isRequired
};

SecretForm.defaultValue = {
  showActions: true
};

export default connect(
  null,
  { addSecret }
)(SecretForm);
