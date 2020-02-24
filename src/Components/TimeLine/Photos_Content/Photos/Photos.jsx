import React from 'react';
import styles from './Photos.module.css';

import img from './Photos_Img/3.jpg'
import img1 from './Photos_Img/1.jpg'
import img2 from './Photos_Img/2.jpg'
import img3 from './Photos_Img/4.jpg'
import img4 from './Photos_Img/5.png'
import img5 from './Photos_Img/6.jpg'
import img6 from './Photos_Img/7.jpg'
import img7 from './Photos_Img/8.jpg'



const Photos = () => {
	return (
		<div className={styles.photos_wrap}>
			<div className={styles.photos}>
				<ul>
					<li>
						<img src={img} alt=""/>
					</li><li>
						<img src={img1} alt=""/>
					</li><li>
						<img src={img2} alt=""/>
					</li><li>
						<img src={img3} alt=""/>
					</li><li>
						<img src={img4} alt=""/>
					</li><li>
						<img src={img5} alt=""/>
					</li><li>
						<img src={img6} alt=""/>
					</li><li>
						<img src={img7} alt=""/>
					</li>
				</ul>


			</div>
		</div>
	);
};

export default Photos;