// import React, { Fragment, useState } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { Autologin } from '../../actions/auth';

// const AutoLogin = ({ Autologin, isAuthenticated }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const { email, password } = formData;

//   const onChange = e =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async e => {
//     e.preventDefault();
//     AutoLogin(email, password);
//   };

//   if (isAuthenticated) {
//     return <Redirect to='/dashboard' />;
//   }

//   return (
//     <Fragment>
//       <p className='lead'>
//         <i className='fas fa-user' /> ログイン
//       </p>
//       <form className='form' onSubmit={e => onSubmit(e)}>
//         <div className='form-group'>
//           <input
//             type='email'
//             placeholder='メールアドレス'
//             name='email'
//             value='12345@google.com'
//             onChange={e => onChange(e)}
//             required
//           />
//         </div>
//         <div className='form-group'>
//           <input
//             type='password'
//             placeholder='パスワード(6文字以上)'
//             name='password'
//             value='090909'
//             onChange={e => onChange(e)}
//             minLength='6'
//           />
//         </div>
//         <input type='submit' className='btn btn-primary' value='ログイン' />
//       </form>
//     </Fragment>
//   );
// };

// AutoLogin.propTypes = {
//     Autologin: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(
//   mapStateToProps,
//   { Autologin }
// )(AutoLogin);
