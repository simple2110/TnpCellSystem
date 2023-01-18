import React from 'react'
import "./Home.css"
import AddIcon from '@mui/icons-material/Add';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';





const Home = () => {
  return (
    <div className='Home'>
        
            <div className="grid">
                <div className="grid-items">
                    <div className="card">
                        <div className="card-icon">

                            <AddIcon sx={{fontSize:'5rem'}}/>
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                Add Drive
                            </div>
                            <p className="card-text">
                                Add new Company drives to manage applications and event.
                            </p>
                            <button className='card-btn'>
                                Click Here <span>&rarr;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid-items">
                    <div className="card">
                        <div className="card-icon">

                            <AlarmOnIcon sx={{fontSize:'5rem'}}/>
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                Current Drives
                            </div>
                            <p className="card-text">
                                Manage current running drives company wise and manage interview rounds.
                            </p>
                            <button className='card-btn'>
                                Click Here <span>&rarr;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid-items">
                    <div className="card">
                        <div className='card-icon'>

                            <AvTimerIcon  sx={{fontSize:'5rem'}}/>
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                Upcoming Drives
                            </div>
                            <p className="card-text">
                                Check the calendar of upcoming drive and manage well.
                            </p>
                            <button className='card-btn'>
                                Click Here <span>&rarr;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid-items">
                    <div className="card">
                        <div className="card-icon">
                            <CalendarMonthIcon  sx={{fontSize:'5rem'}}/>
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                Past Drives
                            </div>
                            <p className="card-text">
                                Past drives will give statistics about successful placements and internships 
                            </p>
                            <button className='card-btn'>
                                Click Here <span>&rarr;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid-items">
                    <div className="card">
                        <div className="card-icon">

                            <GroupIcon  sx={{fontSize:'5rem'}}/>
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                Students list
                            </div>
                            <p className="card-text">
                                manageable database of students to fetch student details easily.
                            </p>
                            <button className='card-btn'>
                                Click Here <span>&rarr;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid-items">
                    <div className="card">
                        <div className="card-icon">

                            <AccountCircleIcon  sx={{fontSize:'5rem'}}/>
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                List of Admins
                            </div>
                            <p className="card-text">
                                Manage admins and roles
                            </p>
                            <button className='card-btn'>
                                Click Here <span>&rarr;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
           
        
    </div>
  )
}

export default Home