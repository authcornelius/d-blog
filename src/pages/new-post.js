import React, { useState } from 'react';
import '../styles/newPost.css';
import { FaArrowLeft, FaUpload } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Textarea from '../components/textArea';
import GalleryLogo from '../assets/gallery.png'

function NewPost() {
  const [textareaContent, setTextareaContent] = useState('');

  const handleTextareaChange = (event) => {
    setTextareaContent(event.target.value);
  };

  return (
    <div className='mt-4 newPost'>
      <div className='container-fluid'>
        <div className='d-flex col-12 px-lg-5'>
          <div className='d-flex col-6 my-2'>
            <Link to="/home">
              <FaArrowLeft className='FaArrowLeft m-2' />
            </Link>
            <h1 className=' my-1'>Draft</h1>
          </div>

          <div className='col-6 text-end publish d-flex justify-content-end'>
            <button className='btn btn-lg mx-5 one d-none d-lg-flex text-center'>Preview</button>
            <button className={`btn btn-lg two ${textareaContent ? 'btn-primary' : 'btn-secondary'}`}>Publish</button>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='border mt-5 input d-flex justify-content-center align-items-center' style={{ height: '150px' }}>
          <div className='text-center'>
            <label htmlFor="image" className="custom-file-upload d-block col-12">
              <img src={GalleryLogo} alt='Gallery' />
              <p>Add Header Image</p>
            </label>
            <input type="file" id="image" name="image" accept="image/*" className='d-none'/>
          </div>
        </div>
      </div>

      <div className='container blog mt-5'>
        <h1 className=' text-black'>Title</h1>
        <input className='col-12 mt-3 p-3 rounded' placeholder='Add a subtitle'/>
        <Textarea value={textareaContent} onChange={handleTextareaChange} />
      </div>
    </div>
  );
}

export default NewPost;