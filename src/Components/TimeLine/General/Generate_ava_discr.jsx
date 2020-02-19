import React from 'react';



const Generate_ava_discr = (props) => {
	return (
		<li>
			<figure><img src={props.img } alt=""/></figure>
			<div className={props.className}>
				<h4><a href={props.href} title="">{props.title}</a></h4>
				<a href="#" title="" >{props.button_title}</a>
			</div>
		</li>
	);
};

export default Generate_ava_discr;