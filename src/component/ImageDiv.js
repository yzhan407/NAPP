import React from 'react';
import posed from 'react-pose';
import './ImageDiv.css';
import Card from 'react-bootstrap/Card';
import PNG from './no-image.png';
import Button from 'react-bootstrap/Button';
const PopUp = posed.div({
    open:{
        x:'0%',
        delayChildren:360,
        staggerChildren:60,
    },
    closed:{x:'-100%',delay:360,

    }
});

const Item1 =posed.div({
    open:{x:0,opacity:1},
    closed:{x:100,opacity:0},
});
const Item2 =posed.div({
    open:{x:0,opacity:1},
    closed:{x:100,opacity:0},
});
class ImageDiv extends React.Component{
    constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 ,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    
    addImage(e){
        e.target.src= {PNG};
    }
    render(){
        return(
            <div>
                <div>
                    This site is made possible with news api "https://newsapi.org/"
                </div>
                <PopUp  className="PopUp" pose={this.props.isOpen?'open':'closed'}>
                    <Item1 className="item-1" ><div className="innerdiv">
                        <Card style={{ width: '30vw' }}>
                        <Card.Img variant="top" onError={this.addDefaultSrc} src={this.props.img1} alt="news" />
                        <Card.Body>
                            <Card.Text>
                                {this.props.t1}
                            </Card.Text>
                            <Button variant="primary" href={this.props.url1}>view</Button>
                        </Card.Body>
                        </Card>;
                    </div></Item1>
                    <Item1 className="item-1" ><div className="innerdiv">
                        <Card style={{ width: '30vw' }}>
                        <Card.Img variant="top" src={this.props.img2} alt="news" onError={this.addDefaultSrc}/>
                        <Card.Body>
                            <Card.Text>
                            {this.props.t2}
                            </Card.Text>
                            <Button variant="primary" href={this.props.url2}>view</Button>
                        </Card.Body>
                        </Card>;
                    </div></Item1>
                    <Item1 className="item-1" ><div className="innerdiv">
                        <Card style={{ width: '30vw' }}>
                        <Card.Img variant="top" src={this.props.img3} alt="news" onError={this.addDefaultSrc}/>
                        <Card.Body>
                            <Card.Text>
                            {this.props.t3}
                            </Card.Text>
                            <Button variant="primary" href={this.props.url3}>view</Button>
                        </Card.Body>
                        </Card>;
                    </div></Item1>
                </PopUp>
                <PopUp className='PopUp' pose={this.props.isOpen?'open':'closed'}>
                    <Item2 className="item-2" ><div className="innerdiv">
                        <Card style={{ width: '30vw' }}>
                        <Card.Img variant="top" src={this.props.img4} alt="news" onError={this.addDefaultSrc}/>
                        <Card.Body>
                            <Card.Text>
                            {this.props.t4}
                            </Card.Text>
                            <Button variant="primary" href={this.props.url4}>view</Button>
                        </Card.Body>
                        </Card>;
                    </div></Item2>
                    <Item2 className="item-2" ><div className="innerdiv">
                        <Card style={{ width: '30vw' }}>
                        <Card.Img variant="top" src={this.props.img5} alt="news" onError={this.addDefaultSrc}/>
                        <Card.Body>
                            <Card.Text>
                            {this.props.t5}
                            </Card.Text>
                            <Button variant="primary" href={this.props.url5}>view</Button>
                        </Card.Body>
                        </Card>;
                    </div></Item2>
                    <Item2 className="item-2" ><div className="innerdiv">
                        <Card style={{ width: '30vw' }}>
                        <Card.Img variant="top" src={this.props.img6} alt="news" onError={this.addDefaultSrc}/>
                        <Card.Body>
                            <Card.Text>
                            {this.props.t6}
                            </Card.Text>
                            <Button variant="primary" href={this.props.url6}>view</Button>
                        </Card.Body>
                        </Card>;
                    </div></Item2>
                </PopUp>
                <PopUp className='PopUp' pose={this.props.isOpen?'open':'closed'}>
                    <Item2 className="item-2" ><div className="innerdiv">
                        <Card style={{ width: '30vw' }}>
                        <Card.Img variant="top" src={this.props.img7} alt="news" onError={this.addDefaultSrc}/>
                        <Card.Body>
                            <Card.Text>
                            {this.props.t7}
                            </Card.Text>
                            <Button variant="primary" href={this.props.url7}>view</Button>
                        </Card.Body>
                        </Card>;
                    </div></Item2>
                    <Item2 className="item-2" ><div className="innerdiv">
                        <Card style={{ width: '30vw' }}>
                        <Card.Img variant="top" src={this.props.img8} alt="news" onError={this.addDefaultSrc}/>
                        <Card.Body>
                            <Card.Text>
                            {this.props.t8}
                            </Card.Text>
                            <Button variant="primary" href={this.props.url8}>view</Button>
                        </Card.Body>
                        </Card>;
                    </div></Item2>
                    <Item2 className="item-2" ><div className="innerdiv">
                        <Card style={{ width: '30vw' }}>
                        <Card.Img variant="top" src={this.props.img9} alt="news" onError={this.addDefaultSrc}/>
                        <Card.Body>
                            <Card.Text>
                            {this.props.t9}
                            </Card.Text>
                            <Button variant="primary" href={this.props.url9}>view</Button>
                        </Card.Body>
                        </Card>;
                    </div></Item2>
                </PopUp>
            </div>
        );
    }
}

export default ImageDiv;