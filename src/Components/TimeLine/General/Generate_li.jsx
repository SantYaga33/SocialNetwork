import React from 'react';
import {NavLink} from "react-router-dom";


const Generate_li = (props) => {
	return (
		<li>
			<a to={props.to} > {props.title} </a>
		</li>
	);
};

export default Generate_li;