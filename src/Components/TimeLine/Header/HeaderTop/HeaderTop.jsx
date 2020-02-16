import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import topAva from './HeaderTop_Img/navAva1.jpg'
import styles from  './HeaderTop.module.css';



const HeaderTop = () => {
	return (
		<div className={styles.headerTop}>
			<div className={styles.headerTop_logo}>
				<FontAwesomeIcon icon={['fab', 'sith']} spin size ='lg' />
			</div>
			<div className={styles.headerTop_wrap}>
				<div className={styles.headerTop_links}>
					<ul>
						<li><span>Home</span></li>
						<li><span>Timeline</span></li>
						<li><span>Account Setting</span></li>
						<li><span>More Pages</span></li>
					</ul>
				</div>
				<div className={styles.headerTop_iconWrap}>
					<div className={styles.headerTop_icons}>
						<FontAwesomeIcon icon="search" />
					</div>
					<div className={styles.headerTop_icons}>
						<FontAwesomeIcon icon='home' />
					</div>
					<div className={styles.headerTop_icons}>
						<FontAwesomeIcon icon='bell' />
					</div>
					<div className={styles.headerTop_icons}>
						<FontAwesomeIcon icon='comment-alt'/>
					</div>
					<div className={styles.headerTop_icons}>
						<FontAwesomeIcon icon='globe-asia' />
					</div>
				</div>
			</div>
			<div className={styles.headerTop_ava}>
				{/*<img src={topAva } alt="avatar"/>*/}
			</div>
			<div className={styles.headerTop_menu}>
				<FontAwesomeIcon icon='align-right' />
			</div>
		</div>
	);
}

export default HeaderTop;