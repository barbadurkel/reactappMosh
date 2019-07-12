import React, { Component } from 'react'

export class Counter extends Component {
    state = {
        count : 0,
        tags: []
    
    };
    

    // constructor(){
    //     super();
    //     // we bind the handleIncrement method to this
    //     this.handleIncrement = this.handleIncrement.bind(this);

    // }

    //2nd way to bind : converting to arrow function (that inherit the this keyword)
    handleIncrement = () => {
            console.log("Increment Clicked", this);
    }



    renderTags(){
        if(this.state.tags.length === 0) return <p>No tags.</p>
        return <ul>{this.state.tags.map( tag => <li key={tag}>{tag}</li>)}</ul>;

    }
        /* IN JS if this is called in :
        - a method part of an object, then 'this' references the object
        - a standalone function, then 'this' references the windows object 
        (or undefined if use strict) => MUST bind() the standalone function
        */

    handleIncrement(){
        console.log('Increment Clicked', this);
        // obj.method
    }



    render() {
        return (
           <div>
               {/* In JS, you can apply logical operations 
            between non boolean values, hence the use of the string below which
            the expression 'boolean && a && b ' will return the last operand : b! */}

               {this.state.tags.length === 0 && 'Please create a new tag!'}
               {this.renderTags()}

               
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
           </div>
        );
    }
   
    getBadgeClasses(){
        let classes ="badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
       const {count} = this.state;
       return count === 0 ? "Zero" : count;
    }

    

    
}

export default Counter
