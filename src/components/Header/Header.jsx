import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='job-container'>
      <div className='header flex justify-between items-center'>
        <Link to='/'>
          <div className='flex gap-2 justify-center items-center'>
            <BriefcaseIcon className="h-10 w-10 text-blue-700" />
            <p className='text-2xl md:text-4xl font-extrabold'>Talent  <span className='text-primary'>Sync</span></p>
          </div>
        </Link>
        <div className=''>
          <ul className='hidden md:flex gap-5 items-center'>
            <li>
              <NavLink to='/'
                className={({ isActive }) =>
                  isActive
                    ? "nav-link"
                    : "nav-link-inactive"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/statistics'
                className={({ isActive }) =>
                  isActive
                    ? "nav-link"
                    : "nav-link-inactive"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink to='/applied'
                className={({ isActive }) =>
                  isActive
                    ? "nav-link"
                    : "nav-link-inactive"
                }
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to='/blogs'
                className={({ isActive }) =>
                  isActive
                    ? "nav-link"
                    : "nav-link-inactive"
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button className='btn btn-primary bg-gradient-to-r from-blue-600 to-indigo-500 text-white'>Start Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Header;