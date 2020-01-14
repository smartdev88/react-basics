import React from 'react'

export default function Welcome(props) {
    return (
            <h1>Bienvenue, {props.name}</h1> 
    )
}

// import React, { Component } from 'react'

// export default class Welcome extends Component {
//     render() {
//         return (
//             <h1>Bienvenue, {this.props.name}</h1> 
//         )
//     }
// }

// Les deux composants ci-dessus sont équivalents du point de vue de React.