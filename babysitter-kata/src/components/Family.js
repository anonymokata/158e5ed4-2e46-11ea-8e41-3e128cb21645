import React from 'react'

function Family(props) {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         families: ['A', 'B', 'C'],
    //         selected: ''
    //     }
    // }
    // setFamily(event) {
    //     console.log(event.target.textContent)
    //     let family = event.target.textContent
    //     console.log(family)
    //     this.setState({selected: family})
    // }
    return (
        <div className='row m-3'>
            <h1 className='col-12'>Family:</h1>
            <div className="dropdown col-12">
                <select onChange={props.handleSelect}>
                    <option>Select a Family</option>
                    <option className='dropdown-item' value='A'>A</option>
                    <option className='dropdown-item' value='B'>B</option>
                    <option className='dropdown-item' value='C'>C</option>
                </select>
            </div>
        </div>
    )
}

export default Family