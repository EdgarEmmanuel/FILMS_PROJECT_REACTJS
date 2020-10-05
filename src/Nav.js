import React from 'react';
import './css/Nav.css';
import requests from './service/requests';


class Nav extends React.Component{
    render(){
        return(
           <div className="nav">
            <h2 onClick={()=>this.props.setSelected(requests.TrendingDay)}>TrendingDay</h2>
            <h2 onClick={()=>this.props.setSelected(requests.TopRated)}>Top Rated</h2>
            <h2 onClick={()=>this.props.setSelected(requests.Action)}>Action</h2>
            <h2 onClick={()=>this.props.setSelected(requests.Comedy)}>Comedy</h2>
            <h2 onClick={()=>this.props.setSelected(requests.Mystery)}>Mystery</h2>
            <h2 onClick={()=>this.props.setSelected(requests.Scifi)}>Sci-fi</h2>
            <h2 onClick={()=>this.props.setSelected(requests.Animation)}>Animation</h2>
            <h2 onClick={()=>this.props.setSelected(requests.fetchTV)}>TV Movie</h2>
           </div>
        )
    }
}

export default Nav;