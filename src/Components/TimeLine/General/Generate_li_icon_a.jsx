import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Generate_li_icon_a = (props) => {
	return (
		<li>
			<FontAwesomeIcon icon={props.icon} className={props.className}/>
			<a href={props.href} title="">{props.name}</a>
		</li>
	);
};

export default Generate_li_icon_a;