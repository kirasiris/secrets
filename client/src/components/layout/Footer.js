import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <p className="pt-10 pb-10 m-0">
              <Link to="/">Secrets</Link>{' '}
              <i className="fa fa-code" id="fa-code" /> made with{' '}
              <i className="fa fa-heart" aria-hidden="true" id="fa-heart" />{' '}
              &#38; &#9749; by{' '}
              <a
                href="https://kevinurielfonseca.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kevin
              </a>
            </p>
          </div>
        </div>
      </div>
      <a href="#Top" name="Top" id="Top" className="btn btn-light cd-top">
        Back to Top
      </a>
    </div>
  );
};

export default Footer;
