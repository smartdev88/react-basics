import React, { Component } from 'react';
import './App.css';
import Jsx from './Components/Jsx';
import Welcome from './Components/Welcome';
// import CommentSimplifie from './Components/decomposition/CommentSimplifie';


class App extends Component {
 
	render() {
		return <div className="App">
          <Jsx />
          <br/>
          <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <br/>
          {/* <CommentSimplifie /> */}
      </div>;
	}
}

export default App;

//React appelle le composant CompFunc avec comme props {name: 'Doe'}
// Notre composant CompFunc retourne un élément <h1>Bonjour, Doe</h1> pour résultat.
// React DOM met à jour efficacement le DOM pour correspondre à <h1>Bonjour, Doe</h1>.