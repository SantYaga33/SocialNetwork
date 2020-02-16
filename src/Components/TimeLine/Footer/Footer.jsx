import React from 'react';
import styles from  './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Footer = () => {
	return (
		<div>
			<footer className={styles.footer}>
				<div className="container">
					<div className={styles.footer_main}>
						<div className={styles.footer_blockInfo}>
							<div  className={styles.footer_iconWrap}>
								<FontAwesomeIcon className={styles.footer_icon} icon={['fab', 'sith']}  size ='lg' />
							</div>
							<div className={styles.footer_address}>
								<FontAwesomeIcon className={styles.footer_icons} icon='address-card'  />
								<div >North Pole. Station polar, explorers 78</div>
							</div>
							<div className={styles.footer_address}>
								<FontAwesomeIcon className={styles.footer_icons} icon='mobile-alt'  />
								<div >+8 800 00 00 </div>
							</div>
						</div>
						<div className={styles.footer_blockInfo}></div>
						<div className={styles.footer_blockInfo}></div>
						<div className={styles.footer_blockInfo}></div>
						<div className={styles.footer_blockInfo}></div>
					</div>
				</div>
			</footer>
			<div className={styles.copyright_wrap}>
				<div  className={styles.container}>
					<div className={styles.copyright}>
						<span>© Murad Atabalov 2020. All rights reserved.</span>
						<div  className={ styles.copyright_icons } >
							<FontAwesomeIcon icon={['fab', 'cc-visa']}  className={ styles.copyright_icon } />
							<FontAwesomeIcon icon={['fab', 'cc-mastercard']}  className={ styles.copyright_icon } />
							<FontAwesomeIcon icon={['fab', 'cc-apple-pay']}  className={ styles.copyright_icon } />
						</div>
					</div>
				</div>
			</div>
		</div>


	);
}

export default Footer;