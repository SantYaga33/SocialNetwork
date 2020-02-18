import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from  './HeaderTop.module.css';
import General from "../../General/General";




const headerTopNames =['Home','Timeline','Account Setting','More Pages'];
const newHeaderTopNames = headerTopNames.map(el => <General title={el}/>);




const HeaderTop = () => {

	return (
		<div className={styles.headerTop}>
			<div className={styles.headerTop_logo}>
				<FontAwesomeIcon icon={['fab', 'sith']} spin size ='lg' />
			</div>
			<div className={styles.headerTop_wrap}>
				<div className={styles.headerTop_links}>
					<ul>
						{ newHeaderTopNames }
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
			<div className={styles.headerTop_ava}></div>
			<div className={styles.headerTop_menu}>
				<FontAwesomeIcon icon='align-right' />
			</div>
		</div>
	);
}

export default HeaderTop;