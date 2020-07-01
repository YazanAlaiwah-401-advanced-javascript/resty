import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      requstes: [],
      post: '#e2e2e2',
      get: '#e2e2e2',
      put: '#e2e2e2',
      delete: '#e2e2e2',
      body: '',
    };
  }
  handelChange = (e, type) => {
    this.setState({ [type]: e.target.value });
    console.log(this.state);
  };
  click = (e) => {
    console.log(this.state.body);
    this.props.updataState(this.state.url, this.state.method, this.state.body);
    this.setState({ url: '', method: '' });
    // let requstes = this.state.requstes;
    // let html = (
    //   <p>
    //     <span className="span">{this.state.method}</span>
    //     {this.state.url}
    //   </p>
    // );
    // requstes.push(html);
    // this.setState({ requstes });
    // console.log('helllo', this.state);
  };
  handelMethod = (e) => {
    let method = e.target.name;
    this.setState({
      POST: '#e2e2e2',
      GET: '#e2e2e2',
      PUT: '#e2e2e2',
      DELETE: '#e2e2e2',
    });

    this.setState({ method, [method]: 'green' });
  };

  render() {
    return (
      <div className="form">
        <p className="purl">
          <span className="span">URL:</span>
          <input
            name="input"
            value={this.state.url}
            onChange={(e) => this.handelChange(e, 'url')}
          />
          <button id="button" onClick={this.click}>
            GO!
          </button>
        </p>

        <div></div>
        <button
          style={{ background: this.state.get }}
          name="GET"
          onClick={this.handelMethod}
        >
          GET
        </button>
        <button
          style={{ background: this.state.post }}
          name="POST"
          onClick={this.handelMethod}
        >
          POST
        </button>
        <button
          style={{ background: this.state.put }}
          name="PUT"
          onClick={this.handelMethod}
        >
          PUT
        </button>
        <button
          style={{ background: this.state.delete }}
          name="DELETE"
          onClick={this.handelMethod}
        >
          DELETE
        </button>
        {this.state.method !== 'GET' && (
          <textarea
            className="text"
            onChange={(e) => this.handelChange(e, 'body')}
            placeholder="body as JSON Object"
          ></textarea>
        )}
      </div>
    );
  }
}

export default Form;
