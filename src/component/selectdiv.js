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
                    <option value="">--Choose a country or region--</option>
                    <option value="cn">China CN</option>
                    <option value="us">United States US</option>
                    <option value="hk">Hong Kong HK</option>
                </select>
            </div>
        );
    }
}

export default Selectdiv;