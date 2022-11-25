import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      this.cbRef = null
      this.setCbref = (element) => {
        this.cbRef = element
      }
    }


    componentDidMount() {

      if(this.cbRef) {
        this.cbRef.focus()
      }
      // this.inputRef.current.focus()
      // console.log(this.inputRef)
    }

    clicHandler = () => {
      alert(this.inputRef.current.value)
    }



  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.setCbref}/>
        <button onClick={this.clicHandler}>Click Me!!</button>
      </div>
    )
  }
}

export default RefsDemo