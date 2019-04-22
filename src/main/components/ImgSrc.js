import React from 'react';

export const ImgSrc = (props) => {
    let content = props.content;
    let src;
    if(content.media.mainImage.imageEssence.provider === "rbtv2"){
        src=content.media.mainImage.imageEssence.aspectRatios["2x3"];
        src = src.replace("/im/", `/im:i:q_70/im:i:w_${props.width}/`);
    } else if(content.media.mainImage.imageEssence.provider === "imageserver") {
        src = `https://image.redbull.com/${content.media.mainImage.imageEssence.templateURL}`;
        src = src.replace("/{op}/", `/0001/1/${props.width}/`);
    }
    return <img className={props.class} src={src}/>;
}              