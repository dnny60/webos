import React from 'react';
import { getFunName } from '../helpers'




class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = event => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. get the text from thar input
        console.log(this.myInput.current.value);
        const storeName = this.myInput.current.value
        // 3. Change the page to 
        // no refersh
        this.props.history.push(`/store/${storeName}`);
        
    }

    render() {
        {/*console.log(this); */}
        return (
        <React.Fragment>

        {/* This is comment format */}

        <form className='store-selector' onSubmit={this.goToStore}> 
         
            <h2>Please Enter A store</h2>
            <input 
            ref={this.myInput}
            type = 'text'
            required 
            placeholder = 'Store Name'
            defaultValue={getFunName()}

            />
            <button type ='submit'>Visit Store -></button>
        </form>

        </React.Fragment>
        );
    }
}


export default StorePicker;