import React from 'react';
import imgBg from './HeaderBg_Img/main-bg-50.png'
import styles from  './HeaderBg.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const HeaderBg = () => {
	return (
		<div className={styles.headerBg}>
			<figure className={styles.figure}>
				<img src={ imgBg }  alt="photo"/>
			</figure>
			<div className={styles.headerBg_wrapButtons}>
				<div className={styles.headerBg_editPhoto}>
					<form className={styles.form_editPhoto}>
						<FontAwesomeIcon icon='camera' className={styles.form_editIicon} />
						<label className="fileContainer">
							Edit Cover Photo
							<input type="file"/>
						</label>
					</form>
				</div>
				<div className={styles.headerBg_follWrap}>
					<span>1205 followers</span>
					<a href="#" title="" >Add Friend</a>
				</div>
			</div>
		</div>

	);
}

export default HeaderBg;