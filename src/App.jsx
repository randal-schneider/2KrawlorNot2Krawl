import React from "react";
import Button from '@material-ui/core/Button';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import generateDungeon from '/src/Dungeon/dungeon.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dungeon: generateDungeon(),
    }

  }
  render() {
    return (
      <>
        <h1>
          2 Krawl or Not 2 Krawl!!!
        </h1>
        <>
        {this.state.dungeon}
        </>
      </>
    );
  }
}

export default App;