import React from 'react';
import './Page.css';
import Pagination from 'react-bootstrap/Pagination';





    
class Page extends React.Component{
    state={
        active:1,
    };
    handlePageChange(e){
        this.props.handlePage(e.target.id);
        this.setState({
            active: Number(e.target.id),
        })
    }
    createItems(){
        let items=[];
        for (let number = 1; number <= 6; number++) {
            items.push(
              <Pagination.Item id={number} key={number} active={number === this.state.active}>
                {number}
              </Pagination.Item>,
            );
          }
        return items;  
    }
    render(){
        return(
            <div className="page-item">
                <Pagination onClick={this.handlePageChange.bind(this)}>
                    {this.createItems()}
                </Pagination>
            </div>
        )
    }
};

export default Page;