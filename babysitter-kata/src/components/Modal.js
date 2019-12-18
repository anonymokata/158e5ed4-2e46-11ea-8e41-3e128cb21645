import React, { Component } from 'react'

function Modal(props) {
    // eslint-disable-next-line no-useless-constructor
    return (
        <div className='modal'>
            <div className='modal-dialog'>

                <div className='modal-content'>
                    <div className='bg-white black br4 pt4 shadow-5 tc'>
                        <p className='modal-body'>{props.message}</p>
                        <button className='b--black-10 bg-transparent dt justify-center items-center ph5 pv3 pointer w-100' onClick={props.dismissModal}>Dismiss</button>
                    </div>
                </div>
            </div>
        </div>

        // <div className="modal" tabIndex="-1" role="dialog">
        //     <div className="modal-dialog" role="document">
        //         <div className="modal-content">
        //             <div className="modal-header">
        //                 <h5 className="modal-title">Modal title</h5>
        //                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //                     <span aria-hidden="true">&times;</span>
        //                 </button>
        //             </div>
        //             <div className="modal-body">
        //                 <p>{props.message}</p>
        //             </div>
        //             <div className="modal-footer">
        //                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        //                 <button type="button" className="btn btn-primary">Save changes</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Modal
