import React from 'react'
import { useRef } from "react";
import  handleDownload  from '../helpers/handleDownload'
import download_img from '../assets/images/download.png'
import code_img from '../assets/images/code.png'
import like_img from '../assets/images/like.png'
import '../assets/css/GifGridItem.css'
import handleCopyCode from '../helpers/handleCopyCode'
import { SnackBarAlert } from './SnackBarAlert';



const SnackbarType = {
  success: "success",
  fail: "fail",
};

const GifGridItem = ({ title, url, url_download }) => {
  const snackbarRef = useRef(null);
  return (
    <div className='card animate__animated animate__bounce'>
      <ul className="gif-grid-item">
        <li>
          <img src={url} alt={title} />

          <div className="info">
            <img src={download_img}  onClick={() => handleDownload(url_download, title)} alt="Download Gif" />
            <img src={code_img} onClick={() => {handleCopyCode(url); snackbarRef.current.show()}} alt="Copy Code"/>       
          </div>
          
        </li>


      </ul>
      <SnackBarAlert
        ref={snackbarRef}
        message="Code Copied"
        type={SnackbarType.success}
      />
    </div>
  );
};

export default GifGridItem