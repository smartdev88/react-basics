import React from 'react';

export default function Avatar(props) {
	return <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />;
}

//   Le composant Avatar n’a pas besoin de savoir qu’il figure dans un composant Comment. C’est pourquoi nous avons donné à sa prop un nom plus générique : user plutôt que author.

// Nous vous recommandons de nommer les props du point de vue du composant plutôt que de celui du contexte dans lequel il est utilisé.
