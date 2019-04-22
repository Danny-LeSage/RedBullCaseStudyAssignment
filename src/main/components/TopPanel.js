import React from 'react';
import { ImgSrc } from "./ImgSrc";

export const TopPanel = (props) => {
    const data = props.data;
    return (
        <div className='top_panel'>
            <ImgSrc content={data} width={props.width} class='top_panel_img'/>}/>
            <div className='top_panel_text_container'>
                <h2 className='top_panel_title'> {data.content.title}</h2>
                <h4 className='top_panel_standfirst'>{data.content.standfirst}</h4>
            </div>
        </div>
    );
}