import React from 'react';
import styles from  './Banner.module.css';
import banner from './BannerImg/ad-widget.gif';




const Banner = () => {
	return (
		<div className={styles.banner_wrap}>
			<img src={ banner } alt=""/>
		</div>
	);
};

export default Banner;