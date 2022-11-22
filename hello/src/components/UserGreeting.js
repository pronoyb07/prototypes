import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLogggedIn: true
      }
    }



  render() {
    return(
        this.state.isLogggedIn ?
        <div>Welcome</div> :
        <div>Welcome Guest</div>
    )
    // let message
    // if (this.state.isLogggedIn) {
    //     message =<div> Welcome</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>


    
    // if(this.state.isLogggedIn) {
    //     return (
    //         <div>
    //             Welcome
    //         </div>
    //     )
    // }
    // else {
    //     return (
    //         <div>
    //             Welcome Guests
    //         </div>
    //     )
    // }
    // return (
    //     <div>
    //         <div>Welcome</div>
    //         <div>Welcome Guests </div>
    //     </div>
      
    // )
  }
}

export default UserGreeting