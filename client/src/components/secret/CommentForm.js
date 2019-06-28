import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/secret';

const CommentForm = ({ postId, addComment }) => {
  const [formData, setFormData] = useState({
    age: '',
    sex: ''
  });

  const [text, setText] = useState('');

  const { age, sex } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addComment(postId, { age, sex, text });
    setText('');
  };

  return (
    <div className="post-form">
      <h3>Leave a Comment</h3>
      <form className="form my-1" onSubmit={e => onSubmit(e)}>
        <div className="form-row">
          <div className="form-group col-md-6">
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
          <div className="form-group col-md-6">
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
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);
