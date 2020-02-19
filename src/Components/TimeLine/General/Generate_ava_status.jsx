import React from 'react';



const Generate_ava_status = (props) => {
	return (
		<li>
			<figure><img src={props.img} alt=""/>
				<span className={props.cl_span}></span>
			</figure>
			<div className={props.cl_meta}>
				<h4><a href={props.href} title="">{props.title}</a></h4>
				<a href="#" title="">{props.email}</a>
			</div>
		</li>
	);
};

export default Generate_ava_status;