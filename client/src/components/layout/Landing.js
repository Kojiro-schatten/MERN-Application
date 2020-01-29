import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Connector</h1>
          <p className='lead'>
            人と人を繋げるアプリ
          </p>
          <div className='buttons'>
            <span className="button-margin-modifier"></span>
            <Link to='/login' className='btn btn-light btn-light-hover'>
              Login
            </Link>
            <p className="noaccount noaccount-text">アカウントを登録する</p>
            <Link to='/register' className='btn btn-primary btn-primary-hover'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
