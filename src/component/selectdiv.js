import React from 'react';
import './selectdiv.css';
class Selectdiv extends React.Component{
    handleCountry(e){
        e.preventDefault();
        this.props.handleCountryChange(e.target.value);
    }
    render(){
        return(
            <div className="selectblock">
                <select className="selectCountry" onChange={this.handleCountry.bind(this)}>
                    <option value="cn">Choose a country, default:China  CN  中国</option>
                    <option value="us">United States US 美国</option>
                    <option value="hk">Hong Kong HK 香港</option>
                </select>
            </div>
        );
    }
}

export default Selectdiv;