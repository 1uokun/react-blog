import * as React from 'react';
import Interface from './components/interface'


class App extends React.Component {
  public render() {
    return (
      <div>
          <Interface required={"这是必需参数"} />
      </div>
    );
  }
}

export default App;
