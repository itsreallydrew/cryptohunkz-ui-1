import { useState, React } from 'react';
import { Link } from 'react-scroll';
import {
	faDiscord as discord,
	faTwitter as twitter,
} from '@fortawesome/free-brands-svg-icons';
import opensea from '../../assets/Logomark-Transparent White.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Admin from '../Admin';

const MenuLinks = ({ connect, account, open, toggleMenu, admin }) => {
	return (
		<div className={`menu-links ${open ? 'menu-links-open' : null}`}>
			<Link
				activeClass='active'
				to='home'
				data-text='home'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'
				onClick={toggleMenu}>
				Home
			</Link>
			<Link
				activeClass='active'
				to='mint'
				data-text='mint'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'
				onClick={toggleMenu}>
				Mint
			</Link>
			<Link
				activeClass='active'
				to='roadmap'
				data-text='roadmap'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'
				onClick={toggleMenu}>
				Roadmap
			</Link>
			<Link
				activeClass='active'
				to='team'
				data-text='team'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'
				onClick={toggleMenu}>
				Team
			</Link>
			{/* <Link
				activeClass='active'
				to='links'
				data-text='links'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'>
				Links
			</Link> */}
			{account ? (
				<a href='null' className='connectButton'>
					{`${account.slice(0, 6)}..${account.slice(
						account.length - 4,
						account.length
					)}`}
				</a>
			) : (
				<a href='null' onClick={connect} className='connectButton'>
					Connect
				</a>
			)}
			<div className='social-icons'>
				<a href='anchor' className='icon'>
					<FontAwesomeIcon icon={discord} />
				</a>
				<a href='anchor' className='icon'>
					<FontAwesomeIcon icon={twitter} />
				</a>
				<a href='anchor' className='os-icon icon'>
					<img src={opensea} alt='' />
				</a>
			</div>
		</div>
	);
};

export default MenuLinks;
