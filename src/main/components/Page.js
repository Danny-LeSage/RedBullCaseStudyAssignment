import React from 'react';
import {TopPanel} from './TopPanel';
import {BottomPanel} from './BottomPanel';

class Page extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            width: 0,
            height: 0
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);        
    }


    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    componentDidMount() {

        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        fetch("/v3/api/composition/v3/feed/en-INT?filter[type]=stories,videos&page[limit]=12&scoring=masonry&rb3Schema=v1:cardList")
          .then(res => {
            return res.json();
          } )
          .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    data: result.data
                });
            },
            // Handle error here
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
          )
    }


    render() {
        const { error, isLoaded, data } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className='page'>
                    <TopPanel data={data[0]} width={this.state.width}/>
                    <BottomPanel data={data} width={this.state.width}/>
                </div>
            );
        }
    }
}


export default Page