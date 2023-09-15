

import React from 'react'
import '../css/UserPage.css'
import { NavLink, useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'


const UserPage = () => {

  const {user}=useAuth0()
    const params = useParams()

    console.log(user.picture)
    return (
        <>
            <div id='user-profile-page'>
                <div id='user-profile-page-gradient'>
                </div>
                <div  id='main-body'>
                <div id='user-profile-page-profile-photo-followers-following'>
                    <div id='user-profile-page-profile-photo'>
                    <img src='https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_202,w_202/v1/gk-static/gk/img/avatar/taco.png' alt='profile'/>

                    </div>
                    <div id='user-profile-page-followers-following'>
                        <div>
                            <p>FOLLOWERS</p>
                            <p>0</p>
                        </div>
                        <div>
                            <p>FOLLOWING</p>
                            <p>0</p>
                        </div>
                    </div>
                </div>
                <div id='user-profile-page-username' className='font-normal font-cabin'>
                    <p>{user.email} <br /> {user.name.toLocaleUpperCase()}{}</p>
                    <p></p>
                </div>
                <div id='user-profile-page-filters'>
                    <div id='user-profile-page-filters-container' className='text-xl font-bold font-cabin'>
                        <div className=''>
                            <p > FILTERS</p>
                            <NavLink to='/userprofile/activity' activeClassName='active' >Activity</NavLink>
                            <NavLink to='/userprofile/recipes' activeClassName='active'>Recipes</NavLink>
                            <NavLink to='/userprofile/photos' activeClassName='active'>Photos</NavLink>
                            <NavLink to='/userprofile/reviews' activeClassName='active'>Reviews</NavLink>
                            <NavLink to='/userprofile/tweaks' activeClassName='active'>Tweaks</NavLink>
                            <NavLink to='/userprofile/questions' activeClassName='active'>Questions</NavLink>
                            <NavLink to='/userprofile/followers' activeClassName='active'>Followers</NavLink>
                            <NavLink to='/userprofile/following' activeClassName='active'>Following</NavLink>
                        </div>
                        <div >
                            <h3>{params.filtername.toUpperCase()}</h3>
                              
                              
                              <h3 className='mt-10 font-normal md:text-3xl md:mt-20' >UH OH!</h3>
                              
                              <h3 className='text-lg font-normal sm:text-xl md:text-3xl'>Looks like {user.name} has not uploaded yet!</h3>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default UserPage;