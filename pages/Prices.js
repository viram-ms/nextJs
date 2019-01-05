import React from 'react';
import styled from 'styled-components';

 const Button = styled.button`
 color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
   `;

   const Select = styled.select`
   color:gray;
   font-size:20px;
   padding:20px;
  `;


class Prices extends React.Component{
    state = {
        currency:'USD'
    }
    
    
    render(){

        let list='';

        if(this.state.currency==='USD'){
           list= <li className="list-group-item">
                Bitcoin rates for {this.props.bpi.USD.description} : <span className="badge badge-primary">{this.props.bpi.USD.code}</span>
                <strong>{this.props.bpi.USD.rate}</strong>
                </li>
        }
        else if(this.state.currency==='GBP'){
          list=  <li className="list-group-item">
                Bitcoin rates for {this.props.bpi.GBP.description} : <span className="badge badge-primary">{this.props.bpi.GBP.code}</span>
                <strong>{this.props.bpi.GBP.rate}</strong>
                </li>
        }
        else if(this.state.currency==='EUR'){
            list = <li className="list-group-item">
            Bitcoin rates for {this.props.bpi.EUR.description} : <span className="badge badge-primary">{this.props.bpi.EUR.code}</span>
            <strong>{this.props.bpi.EUR.rate}</strong>
            </li>
        }

        return(
            <div>
                <ul className="List-group">
               {list}
                </ul>
                <br />
                <Select onChange={e => this.setState({currency:e.target.value})}> 
                    <option value="USD">USD</option> 
                    <option value="GBP">GBP</option> 
                    <option value="EUR">EUR</option>    

                </Select>
                <Button>button</Button>
            </div>
        );
    }
}
export default Prices;