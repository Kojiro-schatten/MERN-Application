import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const CreateProfile = ({
	createProfile,
	getCurrentProfile,
	profile: { profile, loading },
	history
}) => {
	const [formData, setFormData] = useState({
		company: '',
		website: '',
		location: '',
		status: '',
		skills: '',
		githubusername: '',
		bio: '',
		twitter: '',
		facebook: '',
		linkedin: '',
		youtube: '',
		instagram: ''
	});
	const [displaySocialInputs, toggleSocialInputs] = useState(false);
	const {
		company,
		website,
		location,
		status,
		skills,
		githubusername,
		bio,
		twitter,
		facebook,
		linkedin,
		youtube,
		instagram
	} = formData;
	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	const onSubmit = e => {
		e.preventDefault();
		createProfile(formData, history);
	};
	useEffect(() => {
		getCurrentProfile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getCurrentProfile]);
	return loading && profile === null ? (
		<Redirect to='/dashboard' />
	) : (
		<Fragment>
			<h1 className='large text-primary'>プロフィール作成</h1>
			<p className='lead'>
				<i className='fas fa-user' /> プロフィールを入力することで、より相手からコメントが返りやすくなります。
			</p>
			<small>* は必須事項です</small>
			<form className='form' onSubmit={e => onSubmit(e)}>
				<div className='form-group'>
					<select name='status' value={status} onChange={e => onChange(e)}>
						<option value='0'>* 職を選ぶ</option>
						<option value='Developer'>エンジニア</option>
						<option value='Junior Developer'>駆け出しエンジニア</option>
						<option value='Senior Developer'>シニアエンジニア</option>
						<option value='Manager'>マネージャ</option>
						<option value='Student or Learning'>学生、初学者</option>
						<option value='Instructor'>講師</option>
						<option value='Intern'>インターン</option>
						<option value='Other'>その他</option>
					</select>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='会社'
						name='company'
						value={company}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Website'
						name='website'
						value={website}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='場所'
						name='location'
						value={location}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='* スキル(例: HTML, CSS, Ps, Ai, Xd)'
						name='skills'
						value={skills}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Github'
						name='githubusername'
						value={githubusername}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<textarea
						placeholder='自己紹介'
						name='bio'
						value={bio}
						onChange={e => onChange(e)}
					/>
				</div>

				<div className='my-2'>
					<button
						onClick={() => toggleSocialInputs(!displaySocialInputs)}
						type='button'
						className='btn btn-light'
					>
						SNSを追加する
					</button>
				</div>
				{displaySocialInputs && (
					<Fragment>
						<div className='form-group social-input'>
							<i className='fab fa-twitter fa-2x' />
							<input
								type='text'
								placeholder='Twitter URL'
								name='twitter'
								value={twitter}
								onChange={e => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-facebook fa-2x' />
							<input
								type='text'
								placeholder='Facebook URL'
								name='facebook'
								value={facebook}
								onChange={e => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-youtube fa-2x' />
							<input
								type='text'
								placeholder='YouTube URL'
								name='youtube'
								value={youtube}
								onChange={e => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-linkedin fa-2x' />
							<input
								type='text'
								placeholder='Linkedin URL'
								name='linkedin'
								value={linkedin}
								onChange={e => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-instagram fa-2x' />
							<input
								type='text'
								placeholder='Instagram URL'
								name='instagram'
								value={instagram}
								onChange={e => onChange(e)}
							/>
						</div>
					</Fragment>
				)}

				<input type='submit' className='btn btn-primary my-1' />
				<Link className='btn btn-light my-1' to='/dashboard'>
					戻る
				</Link>
			</form>
		</Fragment>
	);
};

CreateProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	profile: state.profile
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
	withRouter(CreateProfile)
);
