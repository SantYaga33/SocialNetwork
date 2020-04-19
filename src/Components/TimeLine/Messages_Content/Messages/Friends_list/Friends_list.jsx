import React from 'react';
import styles from './Friends_list.module.css';
import Generate_ava_status from "../../../General/Generate_ava_status";


const Friends_list = (props) => {
	const fiendsList = props.state.friendsListOld.map(el => <Generate_ava_status img={el.img}
																				 cl_meta={el.cl_meta}
																				 to={el.href}
																				 title={el.title}
	/>);

	return (
		<div className={styles.widget}>
			<h4 className={styles.friends_title}>Friends</h4>
			<ul className={styles.friends}>
				{ fiendsList }
			</ul>
		</div>
	);
};

export default Friends_list;