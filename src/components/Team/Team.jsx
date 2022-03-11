import React from 'react';
import testImage from '../../assets/Arnold-breathing-animation-2.gif';
import { faTwitter as twitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rkhavoc from '../../assets/6.png';

const Team = () => {
	return (
		<div className='team'>
			<div className='team-member'>
				<div className='team-member-frame'>
					<img src={testImage} alt='' />
				</div>
				<div className='dox'>
					<h3>Vanilla Face</h3>
					<a href='anchor'>
						<FontAwesomeIcon icon={twitter} className='img' />
					</a>
				</div>
			</div>
			<div className='team-member'>
				<div className='team-member-frame'>
					<img src={rkhavoc} alt='' />
				</div>
				<div className='dox'>
					<h3>RKhavoc</h3>
					<a href='anchor'>
						<FontAwesomeIcon icon={twitter} className='img' />
					</a>
				</div>
			</div>
			<div className='team-member'>
				<div className='team-member-frame'>
					<img src={testImage} alt='' />
				</div>
				<div className='dox'>
					<h3>Elly_Loe</h3>
					<a href='anchor'>
						<FontAwesomeIcon icon={twitter} className='img' />
					</a>
				</div>
			</div>
			<div className='team-member'>
				<div className='team-member-frame'>
					<img src={testImage} alt='' />
				</div>
				<div className='dox'>
					<h3>_itsreallydrew</h3>
					<a href='anchor'>
						<FontAwesomeIcon icon={twitter} className='img' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Team;
