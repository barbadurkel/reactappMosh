import React, { Component } from 'react'
import { throwStatement } from '@babel/types';

export class Counter extends Component {
 
    // constructor(){
    //     super();
    //     // we bind the handleIncrement method to this
    //     this.handleIncrement = this.handleIncrement.bind(this);

    // }

    //2nd way to bind : converting to arrow function (that inherit the this keyword)


    // renderTags(){
    //     if(this.state.tags.length === 0) return <p>No tags.</p>
    //     return <ul>{this.state.tags.map( tag => <li key={tag}>{tag}</li>)}</ul>;

    // }
        /* IN JS if this is called in :
        - a method part of an object, then 'this' references the object
        - a standalone function, then 'this' references the windows object 
        (or undefined if use strict) => MUST bind() the standalone function
        */



    render() {


        console.log('props', this.props);

        return (
           <div>
               {/* In JS, you can apply logical operations 
            between non boolean values, hence the use of the string below which
            the expression 'boolean && a && b ' will return the last operand : b! */}

               {/* {this.state.tags.length === 0 && 'Please create a new tag!'}
               {this.renderTags()} */}

            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick= { () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick= { () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
           </div>
        );
    }
   
    getBadgeClasses(){
        let classes ="badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
       const {value} = this.props.counter;
       return value === 0 ? "Zero" : value;
    }

    

    
}

export default Counter
