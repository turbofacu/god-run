import React from 'react';
import Head from 'next/head';

import splits from '../utils/splits';
import Game from '../components/Game';
import Split from '../components/Split';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSplits: splits.d1,
      activeGame: 'd1',
    };
  }

  onChangeActiveGame = (value) => {
    this.setState({ 
      currentSplits: splits[value.toLowerCase()],
      activeGame: value.toLowerCase(),
    });
  }

  render() {
    const { currentSplits, activeGame, gamesDone } = this.state; 
    return (
      <main>
        <Head>
          <title>God Run</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="main-wrapper">
          <ul className="games">
            <Game 
              value="d1" 
              activeGame={activeGame} 
              gamesDone={gamesDone} 
              onChangeActiveGame={this.onChangeActiveGame}
            />
            <Game 
              value="sk" 
              activeGame={activeGame} 
              gamesDone={gamesDone} 
              onChangeActiveGame={this.onChangeActiveGame}
            />
            <Game 
              value="d3" 
              activeGame={activeGame} 
              gamesDone={gamesDone} 
              onChangeActiveGame={this.onChangeActiveGame}
            />
            <Game 
              value="ds" 
              activeGame={activeGame} 
              gamesDone={gamesDone} 
              onChangeActiveGame={this.onChangeActiveGame}
            />
            <Game 
              value="d2" 
              activeGame={activeGame} 
              gamesDone={gamesDone} 
              onChangeActiveGame={this.onChangeActiveGame}
            />
            <Game 
              value="bb" 
              activeGame={activeGame} 
              gamesDone={gamesDone} 
              onChangeActiveGame={this.onChangeActiveGame}
            />
          </ul>
          <ul className="splits">
            {currentSplits && (
              currentSplits.map(split => <Split name={split} /> )
            )}
            {!currentSplits && <li style={{ color: 'white' }}>There are no splits for this games hobbWeird</li>}
          </ul>
        </div>
        <style jsx global>{`
          body {
            padding; 0;
            margin: 0;
            border: 0;
          }
        `}</style>
        <style jsx>{`
          main {
            width: 100vw;
            height: 100vh;
            background: #000;
            box-sizing: border-box;
            padding: 16px;
          }
  
          .main-wrapper {
            display: flex;
            flex-direction: column;
            max-width: 368px;
          }
  
          ul {
            padding: 0;
            margin: 0;
            border: 0;
          }
  
          .games {
            display: grid;
            grid-template-columns: repeat(6, 48px);
            grid-gap: 16px;
            margin-bottom: 16px;
          }
        `}</style>
      </main>
    );
  }
}
