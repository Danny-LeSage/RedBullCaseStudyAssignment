import React from 'react';
import { Card } from "./Card";

export const MasonryGrid = (props) => {
    const data = props.data;

    const columnWrapper = {};
    const result = [];

    for (let i = 0; i < props.columns; i++) {
        columnWrapper[`column${i}`] = [];
        }

    for (let i = 1; i < data.length; i++) {
        const columnIndex = i % props.columns;
        let cardDiv = <Card id={i} cardContent={data[i]}/>;
        columnWrapper[`column${columnIndex}`].push(cardDiv);
    }


    for (let i = 0; i < props.columns; i++) {
        result.push(
            <div className='grid_column' key={`column${i}`}>
                {columnWrapper[`column${i}`]}
            </div>
        );
    }

    return <div className='grid'>{result}</div>;
}