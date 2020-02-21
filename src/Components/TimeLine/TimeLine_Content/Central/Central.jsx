import React from 'react';
import styles from  './Central.module.css';

import NewPost from "./NewPost/NewPost";
import SamplePost from "./SamplePost/SamplePost";




const CentralContent = () => {
	return (
		<div className={styles.sidebar_wrap	}>
			<div className={styles.sidebar}>
				<NewPost/>
				<SamplePost/>
			</div>
		</div>
	);
}

export default CentralContent;