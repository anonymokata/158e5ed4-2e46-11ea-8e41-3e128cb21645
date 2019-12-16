import React from 'react'

function Hours(props) {
    return (
        <div className='row m-3'>
            <h1 className='col-12'>Hours:</h1>
            <form className='col-12 timeForm'>
                <div className="col-6 form-group">
                    <label htmlFor="formControlRange">Choose a start time</label>
                    <input type="time" id="startTime" min='17:00' defaultValue='17:00' required />
                </div>
                <div className="col-6 form-group">
                    <label htmlFor="formControlRange">Choose an end time</label>
                    <input type="time" id="endTime" max='04:00' defaultValue='04:00' required />
                </div>
                <div className='col-12'>
                    <button onClick={props.handleClick} title='Calculate'>Calculate Pay</button>
                </div>
            </form>
        </div>
    )
}

// class Hours extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             hours: []
//         }
//     }
//     render() {
//         return (
//             <div className='row m-3'>
//                 <h1 className='col-12'>Hours:</h1>
//                 <form className='col-12 slider'>
//                     <div class="form-group">
//                         <label for="formControlRange">Example Range input</label>
//                         <input type="range" class="form-control-range" id="formControlRange" />
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

export default Hours