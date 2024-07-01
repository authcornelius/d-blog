import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Home.css';
import { FaSearch } from 'react-icons/fa';
import { CiFilter } from 'react-icons/ci';
import Card from '../components/card';
import BlogImage from '../assets/Rectangle-7.png'
import Header from '../components/header';

function Home() {
  const [selectedValue, setSelectedValue] = useState('');

  const menuItems = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'Posts', link: '/home' },
    { id: 3, title: 'Subscribers', link: '/subscribers' },
    { id: 4, title: 'Statistics', link: '/statistics' },
    { id: 5, title: 'Settings', link: '/settings' },
  ];

  
  const options = ['Older', 'Recent', 'Trending'];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  
  const HomeBlog = [
    {
      image: BlogImage,
      heading: 'Creating a new blog post',
      paragraph: 'The purpose of this post is to show a provide a walk-through on how to post on D-Blog as a first timer',
      date: 'Apr 13, 2024',
      time: '4 min read'
    },

    {
      image: BlogImage,
      heading: 'Creating a new blog post',
      paragraph: 'The purpose of this post is to show a provide a walk-through on how to post on D-Blog as a first timer',
      date: 'Apr 13, 2024',
      time: '4 min read'
    },

    {
      image: BlogImage,
      heading: 'Creating a new blog post',
      paragraph: 'The purpose of this post is to show a provide a walk-through on how to post on D-Blog as a first timer',
      date: 'Apr 13, 2024',
      time: '4 min read'
    },

    {
      image: BlogImage,
      heading: 'Creating a new blog post',
      paragraph: 'The purpose of this post is to show a provide a walk-through on how to post on D-Blog as a first timer',
      date: 'Apr 13, 2024',
      time: '4 min read'
    },
  ];
  
  const statusItems = [
    { id: 1, title: `Published (${HomeBlog.length})`, link: '/home' },
    { id: 2, title: 'Draft', link: '/' },
    { id: 3, title: 'scheduled', link: '/subscribers' },
  ];

  return (
    <section>
      <Header />
      
      <div className="container-fluid px-md-5">
        <div className=" mb-3 text-center">
          <h1>Bisola's Space</h1>
        </div>
        <div className=" text-center border-2 border-top-lg border-bottom py-2">
          <nav className="text-center justify-content-center d-flex">
            <ul className="menu-list justify-content-center">
              {menuItems.map(item => (
                <li key={item.id} className="nav-item">
                  <NavLink
                    to={item.link}
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    exact
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='d-flex my-5'>
          <div className='col-6'>
            <h1>Your Posts</h1>
          </div>

          <div className='col-6 text-end'>
            <Link to='/newpost' className='newPost'>
              <button className='btn btn-lg'>
                Create New Post
              </button>
            </Link>
          </div>
        </div>

        <div className='row'>
          <div className=' d-flex order-md-1 order-lg-2 col-12 col-lg-6 justify-content-lg-end justify-content-sm-between'>
            <div className=' d-flex col-7 search px-1 py-1 rounded-2'>
              <button
                  className=""
                  type="button"
              >
                  <FaSearch className='FaSearch mx-2' />
              </button>
              <input
                  type="text"
                  className="my-2 w-100"
                  placeholder="Search"
              />
            </div>

            <div className='mx-2 my-3 col-5 col-lg-3 d-flex justify-content-end text-end'>
              <CiFilter className='my-1 mx-md-3'/>

              <span>Filter: </span>

              <select className='mx-md-3' id="dynamic-options" value={selectedValue} onChange={handleChange}>
                <option value="">Older</option>
                {options.map((option, index) => (
                  <option key={index} value={option.toLowerCase().replace(' ', '')}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='col-12 col-lg-6 order-md-2 order-lg-1'>
            <ul className="menu-list">
              {statusItems.map(item => (
                <li key={item.id} className="nav-item">
                  <NavLink
                    to={item.link}
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    exact
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          
        </div>

        <div>
          {HomeBlog.map((data, index) => (
            <Card
              key={index}
              image={data.image}
              heading={data.heading}
              paragraph={data.paragraph}
              date={data.date}
              time={data.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
