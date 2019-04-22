import React from 'react';
import {MasonryGrid} from "./MasonryGrid";

export const BottomPanel = (props) => {
    const data = props.data;
    let columns = 3;
    
    if(props.width<1000){
        columns = 2;
    } else if(props.width < 650){
        columns = 1;
    }
    return (
        <div className='bottom_panel'>
            <div className='grid_container'>
                <MasonryGrid columns={columns} data={data}/>
            </div>
        </div>
    );
}               