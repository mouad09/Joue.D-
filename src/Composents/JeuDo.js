import { Component } from "react";

class JeuDe extends Component {
    constructor(props){
        super(props);
        this.state = {face:null,compteur:0,end:false }
    }
    jouer = () => {
    let faceVal = Math.floor(Math.random()*6+1);
    this.setState ({ face:faceVal , compteur:this.state.compteur+1})
    }

    render(){
        return (
            <div>
              <img src={
                 this.state.face==null 
              ? "images/init.PNG" 
              :`images/face${this.state.face}.PNG`
             } />
              <h1>Jeu de de....</h1>
              <p>Face : {this.state.face}</p>
              <p>Nombre d'essai : {this.state.compteur}</p>
              <button onClick={this.jouer}>Jouer</button>
            </div>
        )
    }
}

export default JeuDe;