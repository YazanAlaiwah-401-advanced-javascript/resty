import React from 'react';
import './form.scss';

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
            url:'',
            method:'',
            requstes:[],
            post:'#e2e2e2',
            get:'#e2e2e2',
            put:'#e2e2e2',
            delete:'#e2e2e2'
        }
    }
    handelUrl = (e) => {
        this.setState({url:e.target.value})
        console.log(this.state.url)
    }
    click = (e) =>{
        let requstes = this.state.requstes;
       let html = <p><span className="span">{this.state.method}</span>{this.state.url}</p>;
       requstes.push(html)
        this.setState({requstes})
        console.log('helllo',this.state)
    }
    handelMethod = (e) =>{
        let method = e.target.name
        this.setState({post:'#e2e2e2',get:'#e2e2e2',put:'#e2e2e2',delete:'#e2e2e2'})

        this.setState({ method,[method]:'green' })
    }

  render() {
  return ( 
    <div className="form">
        <p className='purl'><span className='span'>URL:</span> 
        <input onChange={this.handelUrl} />
        <button id='button' onClick={this.click}>GO!</button>
        </p>
        
        <div></div>
        <button style={{background:this.state.get}} name='get' onClick={this.handelMethod}>GET</button>
        <button style={{background:this.state.post}} name='post' onClick={this.handelMethod}>POST</button>
        <button style={{background:this.state.put}} name='put' onClick={this.handelMethod}>PUT</button>
        <button style={{background:this.state.delete}} name='delete' onClick={this.handelMethod}>DELETE</button>
        <div className="continar">
            {this.state.requstes}
        </div>
    </div>
    )
  }
  
}

export default Form;
