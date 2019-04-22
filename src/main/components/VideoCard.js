import React from 'react';
import { ImgSrc } from "./ImgSrc";

export const VideoCard = (props) => {
    let duration;
    let minutes = Math.floor(props.cardContent.duration / 60);
    let seconds = props.cardContent.duration - minutes * 60;
    if (seconds < 10) {
        duration = `${minutes}:0${seconds} min`;
    } else {
        duration = `${minutes}:${seconds} min`;
    }

    return (
        <div className='card_content_container'>
            <div className='card_img_container'>
                <ImgSrc content={props.cardContent} width="400" class='card_img'/>
                <div className='video_player_container'>
                    <div className='video_player'></div>
                </div>
                <div className='video_card_content_container'>
                    <div className='video_card_title'>{props.cardContent.content.title}</div>
                    <div className='video_card_duration'>{duration}</div>
                </div>
            </div> 
        </div>
    );
}