import React from 'react';
import './css/VideoCard.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import TextTruncate from 'react-text-truncate';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

class VideoCard extends React.Component{
    render(){
        return(
        <div className="videocard">
            <img src={"https://image.tmdb.org/t/p/original"+this.props.image.backdrop_path} alt=""/>
            <h1>Title : <strong>{this.props.image.title || this.props.image.original_title }</strong></h1>
            <TextTruncate
                line={1}
                element="p"
                truncateText="…"
                text={this.props.image.overview}
            />
            <p className="voteAverage"><StarBorderIcon/> {""} <strong>{this.props.image.vote_average}</strong></p>
            <p>language : {this.props.image.original_language}</p>
            <p>Release Date : {this.props.image.release_date} <br/> <ThumbUpAltIcon/> {this.props.image.vote_count} </p>
        </div>
    )}
}

export default VideoCard;