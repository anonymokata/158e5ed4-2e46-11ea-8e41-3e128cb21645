import React, { Component } from 'react'

class Family extends Component {
    constructor(props) {
        super(props)
        this.state = {
            families: ['A', 'B', 'C'],
            selected: ''
        }
    }
    // setFamily(event) {
    //     console.log(event.target.textContent)
    //     let family = event.target.textContent
    //     console.log(family)
    //     this.setState({selected: family})
    // }
    render() {
        return (
            <div className='row'>
                <h1 className='col-12'>Family:</h1>
                <div className="dropdown col-12">
                    <select>
                        <option>Select a Family</option>
                        {this.state.families.map((family) => (
                            <option key={family} className='dropdown-item' value={family} onClick={this.setFamily}>{family}</option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }
}

export default Family