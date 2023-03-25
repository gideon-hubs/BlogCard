import React, { Component } from "react";
import './style.css'

class Container extends Component{
    render() {
        return(
            <>
    <div class="container">
      <div class="square">
        <img src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80" class="mask"/>
     <div class="h1">Is {this.props.name} a Design Company?</div>
        <p>{this.props.name}  is more than a tech company; it became a culture unto itself, a passion of most of people and the birthplace of the world’s most revolutionized products.</p>
        
     <div><a href="https://medium.com/@laheshk/is-apple-a-design-company-f5c83514e261" target="_" class="button">Read More</a></div>
      </div>
      </div>
            </>
        );
    }
}

export default Container;