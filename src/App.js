import React from "react";
import Button from '@material-ui/core/Button';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import generateDungeon from '/src/Dungeon/dungeon.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dungeon: generateDungeon(),
    }

  }
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          2 Krawl or Not 2 Krawl!!!
        </h1>
        <Button variant="contained">this is a material UI button</Button>
        <button type="button" class="btn btn-primary">
          This is a bootstrap button
        </button>
        <>
        {this.state.dungeon}
        </>
      </>
    );
  }
}

export default App;