import React, { Component } from 'react';

export default class Jsx extends Component {
	user = {
		firstName: 'Kylian',
		lastName: 'Mbappé'
	};

	formatName(user) {
		return user.firstName + ' ' + user.lastName;
	}

	str = 'Hello World!';
    res = this.str.toUpperCase();
    
    srcImg = "https://www.fillmurray.com/640/360";

	render() {
		return (
			<div>
				<h1>Bonjour, {this.formatName(this.user)} !</h1>
				<h2>Il est {new Date().toLocaleTimeString()}.</h2>
				<p>toUpperCase: {this.res}</p>
                <img src={this.srcImg} title="Joli image" alt=""/>
			</div>
		);
	}
}
