import React, { useState } from 'react';
import '../styles/newPost.css';
import { FaArrowLeft, FaUpload } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Textarea from '../components/textArea';

function NewPost() {
  const [textareaContent, setTextareaContent] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleTextareaChange = (event) => {
    const content = event.target.value;
    setTextareaContent(content);
    setIsButtonDisabled(content === ''); // Disable button if content is empty
  };

  const handlePublish = () => {
    // Handle publish logic here
    console.log("Publishing:", textareaContent);
    // Reset textarea after publish if needed
    setTextareaContent('');
    setIsButtonDisabled(true); // Disable button after publish
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
            <button
              className={`btn btn-lg two ${textareaContent ? 'btn-primary' : 'btn-secondary'}`}
              onClick={handlePublish}
              disabled={isButtonDisabled} // Disable button when no content
            >
              Publish
            </button>
          </div>
        </div>
      </div>

      <div className='container'>
        <label htmlFor="image" className="custom-file-upload">
          <FaUpload /> Choose an image
        </label>
        <input type="file" id="image" name="image" accept="image/*" className='d-flex justify-content-center col-12'/>
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
