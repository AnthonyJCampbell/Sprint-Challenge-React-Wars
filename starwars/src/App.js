import React, { Component } from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard';



class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  loadMore = () => {
    this.getCharacters(`https://swapi.co/api/people/?page=${this.state.currentPage + 1}`)
    this.setState(prevState => ({ starwarsChars: prevState.starwarsChars, currentPage: prevState.currentPage+1,}))
  }
  loadLess = () => {
    this.getCharacters(`https://swapi.co/api/people/?page=${this.state.currentPage - 1}`)
    this.setState(prevState => ({ starwarsChars: prevState.starwarsChars, currentPage: prevState.currentPage-1,}))
  }


  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {this.state.currentPage === 1 ? 
          (<button onClick={() => this.loadMore()}>Go To The Next Page</button>)
          :
          (<div>
            <button onClick={() => this.loadLess()}>Go To The Previous Page</button>
            <button onClick={() => this.loadMore()}>Go To The Next Page</button>
          </div>)
        }
        
        <div className="holder">
          {this.state.starwarsChars.map((char, idx)=> {
            return (
              <CharacterCard key={idx} char={char} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
