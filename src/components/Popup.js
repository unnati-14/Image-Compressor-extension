import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import Dropzone from './Dropzone'

export default function popup() {
    return (
        <>
        <div class="modal-header">
        <h1 class="logo">
            <img src="PicChic logo.PNG" alt="PicChic image compressor" class="logo-icon" />PicChic Image Compressor
            {/* <span class="version"> (1.0.0)</span> */}
        </h1>
        </div>
        <div class="modal-content">
            <Link to="/dropzone">Drag and Drop file here</Link>
            <div> Or Browse from Device</div>
        </div>
        </>
    )
}
