import React from 'react';
import { ImgSrc } from "./ImgSrc";

export const StoryCard = (props) => {
    return (
        <div className='card_content_container'>
            <div className='card_img_container'>
                <ImgSrc content={props.cardContent} width="400" class='card_img'/>
            </div>
            <div className='story_card_content'>
                <div className='story_card_title'>{props.cardContent.content.title}</div>
            </div>
        </div>
    );
}