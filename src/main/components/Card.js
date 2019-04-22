import React from 'react';
import {VideoCard} from './VideoCard';
import {StoryCard} from './StoryCard';

export const Card = (props) => {
    let cardContent = props.cardContent;
    let contentContainer;
    if(cardContent.type === "video"){
        contentContainer = <VideoCard  cardContent={props.cardContent}/>
    } else if(cardContent.type === "story") {
        contentContainer = <StoryCard cardContent={props.cardContent}/>
    }

    return (
        <div className='card_container' key={`card ${props.id}`}>
            <div className='card'>
                {contentContainer}
            </div>
        </div>
    );
}