import React, { Component } from 'react';
import './App.css';
import Allbutton from './component/button';
import Selectdiv from './component/selectdiv';
import ImageDiv from './component/ImageDiv';
import Logo from './logo.svg';

class App extends Component {
  state={
    buttonid:undefined,
    data: undefined,
    countryName:'cn',
    isOpen:false,
    img1:"noimage.png",
    img2:"noimage.png",
    img3:"noimage.png",
    img4:"noimage.png",
    img5:"noimage.png",
    img6:"noimage.png",
    img7:"noimage.png",
    img8:"noimage.png",
    img9:"noimage.png",
    t1:"ready to render",
    t2:"ready to render",
    t3:"ready to render",
    t4:"ready to render",
    t5:"ready to render",
    t6:"ready to render",
    t7:"ready to render",
    t8:"ready to render",
    t9:"ready to render",
    url1:"",
    url2:"",
    url3:"",
    url4:"",
    url5:"",
    url6:"",
    url7:"",
    url8:"",
    url9:"",
  };
  handleCountryChange(countryName){
    this.setState({
      countryName: countryName,
    });
    console.log(countryName);
  };
  nullImage(imgurl){
    if (!imgurl){
      return "no-image.png"
    }
    else{
      return imgurl;
    }
  }
  handleAllClick=async(id)=>{
    const api_call=await fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.countryName}&category=${id}&apiKey=d0dc8443dfdd45e0b01b4e15b237b688`);
    const data=await api_call.json();
    console.log(data);
    const imgurl1=this.nullImage(data.articles[0].urlToImage);
    const imgurl2=this.nullImage(data.articles[1].urlToImage);
    const imgurl3=this.nullImage(data.articles[2].urlToImage);
    const imgurl4=this.nullImage(data.articles[3].urlToImage);
    const imgurl5=this.nullImage(data.articles[4].urlToImage);
    const imgurl6=this.nullImage(data.articles[5].urlToImage);
    const imgurl7=this.nullImage(data.articles[6].urlToImage);
    const imgurl8=this.nullImage(data.articles[7].urlToImage);
    const imgurl9=this.nullImage(data.articles[8].urlToImage);
    const url1=data.articles[0].url;
    const url2=data.articles[1].url;
    const url3=data.articles[2].url;
    const url4=data.articles[3].url;
    const url5=data.articles[4].url;
    const url6=data.articles[5].url;
    const url7=data.articles[6].url;
    const url8=data.articles[7].url;
    const url9=data.articles[8].url;

    if (this.state.isOpen===false){
      this.setState({
        buttonid:id,
        data:data,
        isOpen:true,
        img1:imgurl1,
        img2:imgurl2,
        img3:imgurl3,
        img4:imgurl4,
        img5:imgurl5,
        img6:imgurl6,
        img7:imgurl7,
        img8:imgurl8,
        img9:imgurl9,
        t1:data.articles[0].title,
        t2:data.articles[1].title,
        t3:data.articles[2].title,
        t4:data.articles[3].title,
        t5:data.articles[4].title,
        t6:data.articles[5].title,
        t7:data.articles[6].title,
        t8:data.articles[7].title,
        t9:data.articles[8].title,
        url1:url1,
        url2:url2,
        url3:url3,
        url4:url4,
        url5:url5,
        url6:url6,
        url7:url7,
        url8:url8,
        url9:url9,
      });
      console.log(imgurl1);
    }
    else{
      this.setState({
        buttonid:id,
        data:data,
        isOpen:false,
        img1:imgurl1,
        img2:imgurl2,
        img3:imgurl3,
        img4:imgurl4,
        img5:imgurl5,
        img6:imgurl6,
        img7:imgurl7,
        img8:imgurl8,
        img9:imgurl9,
        t1:data.articles[0].title,
        t2:data.articles[1].title,
        t3:data.articles[2].title,
        t4:data.articles[3].title,
        t5:data.articles[4].title,
        t6:data.articles[5].title,
        t7:data.articles[6].title,
        t8:data.articles[7].title,
        t9:data.articles[8].title,
        url1:url1,
        url2:url2,
        url3:url3,
        url4:url4,
        url5:url5,
        url6:url6,
        url7:url7,
        url8:url8,
        url9:url9,
      });
      console.log(imgurl1);
    }
    
  };
  render() {
    return (
      <div>
        <h1><img src={Logo} alt="logo" className="App-logo img-control"></img>News</h1>
          <Allbutton handleAllClick={this.handleAllClick.bind(this)}/>
          <Selectdiv handleCountryChange={this.handleCountryChange.bind(this)}/>
          <ImageDiv isOpen={this.state.isOpen} data={this.state.data}
          img1={this.state.img1}
          img2={this.state.img2}
          img3={this.state.img3}
          img4={this.state.img4}
          img5={this.state.img5}
          img6={this.state.img6}
          img7={this.state.img7}
          img8={this.state.img8}
          img9={this.state.img9}
          t1={this.state.t1}
          t2={this.state.t2}
          t3={this.state.t3}
          t4={this.state.t4}
          t5={this.state.t5}
          t6={this.state.t6}
          t7={this.state.t7}
          t8={this.state.t8}
          t9={this.state.t9}
          url1={this.state.url1}
          url2={this.state.url2}
          url3={this.state.url3}
          url4={this.state.url4}
          url5={this.state.url5}
          url6={this.state.url6}
          url7={this.state.url7}
          url8={this.state.url8}
          url9={this.state.url9}/>
          

      </div>
    );
  }
}

export default App;
