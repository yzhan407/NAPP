import React from 'react';
import './button.css';
import Selectdiv from './selectdiv'
import moment from 'moment';
class Allbutton extends React.Component{
    handleClick(e){
        e.preventDefault();
        const id=e.target.id;
        this.props.handleAllClick(id);
    }
    render(){
        return(
            <div className="head-buttons-div">
            <div className='time-zone'> Today is: {moment().format('MMMM Do YYYY')}</div>
              <div>
                <button className="head-buttons" id='business' onClick={this.handleClick.bind(this)} variant="outline-primary">Business</button>
                <button className="head-buttons" id='entertainment' onClick={this.handleClick.bind(this)} variant="outline-primary">Entertainment</button>
                <button className="head-buttons" id='health' onClick={this.handleClick.bind(this)} variant="outline-primary">Health</button>
                <button className="head-buttons" id='science' onClick={this.handleClick.bind(this)} variant="outline-primary">Science</button>
                <button className="head-buttons" id='sports' onClick={this.handleClick.bind(this)} variant="outline-primary">Sports</button>
                <button className="head-buttons" id='technology' onClick={this.handleClick.bind(this)} variant="outline-primary">Tech</button>
              </div>
              <div><Selectdiv handleCountryChange={this.props.handleCountryChange.bind(this)}/></div>
            </div>
        )
    }
};

export default Allbutton;