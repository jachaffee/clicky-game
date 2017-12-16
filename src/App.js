import React, { Component } from 'react';
import './App.css';
import characters from './characters.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import CharacterCard from './components/CharacterCard'

class App extends Component {
  state = {
    message: "Click on a picture to start the game!",
    highScore: 0,
    playerScore: 0,
    characters: characters,
    unclickedChars: characters
  }

  componentDidMount() {
  }

  randomize = array => {
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  chooseCharacter = char => {
    const checkCharacter = this.state.unclickedChars.find(item => item.char === char);

    if (checkCharacter === undefined) {
      this.setState({
        message: "Sorry, you already chose that character.",
        highScore: (this.state.playerScore > this.state.highScore) ? this.state.playerScore : this.state.highScore,
        playerScore: 0,
        characters: characters,
        unclickedChars: characters
      });
    }

    else {
      const newCharacters = this.state.unclickedChars.filter(item => item.char !== char);

      this.setState({
        message: "Nicely done, keep clicking!",
        playerScore: this.state.playerScore + 1,
        characters: characters,
        unclickedChars: newCharacters
      });
    }

    this.randomize(characters);
  };

  render() {
    return (
      <Wrapper>
        <Navpills
          message={this.state.message}
          playerScore={this.state.playerScore}
          highScore={this.state.highScore}
        />
        <Title />
        {
          this.state.characters.map(character => (
            <CharacterCard
              char={character.char}
              image={character.image}
              chooseCharacter={this.chooseCharacter}
              playerScore={this.state.playerScore}
            />
          ))
        }
      </Wrapper>
    );
  }

}

export default App;
