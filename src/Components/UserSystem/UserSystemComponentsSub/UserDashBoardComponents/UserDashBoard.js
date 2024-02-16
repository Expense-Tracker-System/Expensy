import React, {useState} from 'react'
import SideBar from '../../UserSystemComponentsMain/UserSideBar';
// import Nav from '../Components/Nav'
import '../../../../Styles/UserStyle/SubComponentsStyle/UserDashBoardStyle/UserDashBoard.css'
import '../../../../Styles/UserStyle/MainComponentsStyle/TopSectionMain.css';
import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';



import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { Button } from 'react-bootstrap';

ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

function Dashboard() {
    const [isOpen, setIsOpen] = useState(true); // Sidebar is initially open
    const data = {
        labels:['Mon', 'Tue' , 'Wed' , 'Thu' , 'Fri ', 'Sat' , ' Sun'],
        datasets: [
            {
                label: 'Income',
                data: [100,200,300,400,500,600,700],
                backgroundColor: '#07393C',
                borderColor: 'black',
                borderWidth: 1,
            },
            {
                label: 'Expense',
                data: [80,300,100,400,50,400,300],
                backgroundColor: '#93FF96',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }

    const options ={

    }

    const percentage = 66;

    return (
        <div>
            
            <main className='col px-4 w-100' style={{marginLeft: isOpen ? "260px " : "62px", width: "110%"}}><SideBar isOpen={isOpen} setIsOpen={setIsOpen}/></main>
            <div className='userdashboard-container container-fluid  px-0 min-vh-100 position-scroll' style={{marginLeft:isOpen? "250px" : "50px"}}>
                <div className='row w-100'>
                    <div className='col top-section-main py-3'>
                        <h1 className='top-section-main-title px-3'>Home</h1>
                    </div>
                </div>
                <div className='row'>
                {/* <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center arounded '>
                    <h1 className='dash'>Dashboard</h1>
                    <div className='d-flex flex-row  border border-primary iconbox'>
                        <i class="bi bi-plus me-4"></i>
                        <i class="bi bi-bell-fill me-4"></i>
                        <i class="bi bi-heart-fill me-4"></i>
                        <div className='box1 me-3'></div>
                        <i class="bi bi-person fs-5"></i>
                    </div>
                </div>  */}
                {/* <div className='col-3 bg-primary vh-120 position-sticky'>
                    <Nav/>
                </div> */}
                <div className='col-10 px-5 m-0 userdashboard-wrapper'>
                    <div className='row g-3 my-2'>
                        <div className='col-md-3 '>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <h3 className='fs-6'>Current Balance</h3>
                                    <p className='fs-5'>$600</p>
                                </div>
            
                            </div>
                        </div>
                        <div className='col-md-3 mx-1'>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <h3 className='fs-6'>Total Income</h3>
                                    <p className='fs-5'>$3000</p>
                                </div>
                            </div>
                        </div>
                    <div className='col-md-3 mx-1 '>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-6'>Total Expense</h3>
                                <p className='fs-5'>$2400</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-row  '>
                    <div className='col-7  w-75  m-0'>
                        <div className='row g-0 my-0  bg-white'>
                            <div className='bg-white d-flex flex-row h-25 d-inline-block'>
                                <h3 className='bg-white'>Latest Transaction</h3>
                                <div>
                                {/* <i class="bi bi-caret-down ic"></i> */}
                                    <input type='text' placeholder=' Week' class="inputbox bi bi-caret-down">
                                    </input>
                                </div>
                            </div>
                        <div className='p-4 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <Bar
                                data = {data}
                                options = {options}
                            ></Bar>
                        </div>
                        {/* <div className='d-flex flex-row '>
                        <div class="box-a"></div>
                            <div class="box-b"></div>
                                {/* <span className='span span1'>Expense</span>
                                <span className='span span2'>Income</span> */}
                        </div>
                    </div>
                    {/* <div className='col-2 bg-info mx-5 rounded position-relative'>
                        <div className='row g-2 my-1 '>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center position-absolute top-0 start-50 translate-middle'>
                                <h5>Limited Transaction</h5>
                            </div>
                            <div className='p-5 bg-white shadow-sm d-flex justify-content-around align-items-center position-absolute top-50 start-50 translate-middle'>
                            </div>
                            <Button className='position-absolute top-100 start-50 translate-middle'>View Transaction</Button>
                        </div>
                    </div> */}
                </div>
                {/* <div className=' my-2'>
                    <h1 className='h1'>Amount Transfer</h1>
                </div> */}
            
                {/* <div className='d-flex flex-row my-0 progessBar mx-1'>
                    <div className='row g-3 my-5 '>
                        <div className='col-md-3 my-0'>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                                </div>
                            </div>
                        </div>
            
                        <div className='col-md-3 my-0'>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 my-0'>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 my-0'>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
                </div> 
            </div>
        </div>
)
}

export default Dashboard
