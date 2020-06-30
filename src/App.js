import React from 'react';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Footer from './components/footer/footer.js';
import Results from './components/results/results.js';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      headers: [],
    };
  }
  updataState = async (url) => {
    let data = await fetch(url);
    this.setState({ headers: data.headers });
    data = await data.json();
    this.setState({
      results: data.results,
      count: data.count,
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Form updataState={this.updataState} />

        <Results
          headers={this.state.headers}
          count={this.state.count}
          results={this.state.results}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
