import React, { useState } from 'react';
import '../styles/newPost.css';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Textarea from '../components/textArea';
import GalleryLogo from '../assets/gallery.png';
import axios from 'axios';

function NewPost() {
  const [textareaContent, setTextareaContent] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const handleTextareaChange = (event) => {
    setTextareaContent(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('content', textareaContent);
    if (selectedFile) {
      formData.append('headerImage', selectedFile);
    }

    try {
      const response = await axios.post('https://tracker.standardlife.org.ng/api/blog/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Post published successfully', response.data);
      // Redirect to home or show success message
    } catch (error) {
      console.error('Error publishing post', error);
      // Show error message
    }
  };

  return (
    <div className='mt-4 newPost'>
      <form onSubmit={handleSubmit}>
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
              <button type="submit" className={`btn btn-lg two ${textareaContent ? 'btn-primary' : 'btn-secondary'}`}>Publish</button>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='border mt-5 input d-flex justify-content-center align-items-center'>
            {imagePreview ? (
              <label htmlFor="image" className="custom-file-upload d-block col-12" style={{ cursor: 'pointer' }}>
                <img src={imagePreview} alt="Header" style={{ width: '100%', height: '10rem', objectFit: '' }} />
              </label>
            ) : (
              <div className='text-center'>
                <label htmlFor="image" className="custom-file-upload d-block col-12">
                  <img src={GalleryLogo} alt='Gallery' />
                  <p>Add Header Image</p>
                </label>
                <input type="file" id="image" name="image" accept="image/*" className='d-none' onChange={handleImageChange} />
              </div>
            )}
            <input type="file" id="image" name="image" accept="image/*" className='d-none' onChange={handleImageChange} />
          </div>
        </div>

        <div className='container blog mt-5'>
          <h1 className=' text-black'>Title</h1>
          <input className='col-12 mt-3 p-3 rounded' placeholder='Add a subtitle' value={title} onChange={handleTitleChange}/>
          <Textarea value={textareaContent} onChange={handleTextareaChange} />
        </div>
      </form>
    </div>
  );
}

export default NewPost;
