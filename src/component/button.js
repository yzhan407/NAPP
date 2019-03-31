import React from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class Allbutton extends React.Component{
    handleClick(e){
        e.preventDefault();
        const id=e.target.id;
        this.props.handleAllClick(id);
    }
    render(){
        return(
            <div className="d-flex flex-column">
              <ButtonGroup className='mt-3'>
                <Button id='business' onClick={this.handleClick.bind(this)} variant="outline-primary">商务/Business</Button>
                <Button id='entertainment' onClick={this.handleClick.bind(this)} variant="outline-primary">娱乐/Entertainment</Button>
                <Button id='health' onClick={this.handleClick.bind(this)} variant="outline-primary">健康/Health</Button>
                <Button id='science' onClick={this.handleClick.bind(this)} variant="outline-primary">科学/Science</Button>
                <Button id='sports' onClick={this.handleClick.bind(this)} variant="outline-primary">体育/Sports</Button>
                <Button id='technology' onClick={this.handleClick.bind(this)} variant="outline-primary">技术/Tech</Button>
              </ButtonGroup>
          </div>

        )
    }
};

export default Allbutton;