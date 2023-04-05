import { Component } from 'react';
import UserCard from './components/UserCard';

// PROPS ARE ONE-WAY: FROM PARENT TO CHILD
// PROPS ARE READ-ONLY

export class App extends Component {
  render() {
    return (
      <fieldset>
        <legend>App</legend>
        <UserCard
          firstName="Jane"
          lastName="Doe"
          age={45}
          hairColor="Black"
        />
        <UserCard
          firstName="John"
          lastName="Smith"
          age={88}
          hairColor="Brown"
        />
        <UserCard
          firstName="Millard"
          lastName="Fillmore"
          age={50}
          hairColor="Brown"
        />
        <UserCard
          firstName="Maria"
          lastName="Smith"
          age={62}
          hairColor="Brown"
        />
      </fieldset>
    );
  }
}

export default App;