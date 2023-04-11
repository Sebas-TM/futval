import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { FiUser, FiGrid, FiChevronDown, FiHome, FiUsers, FiX, FiMenu } from "react-icons/fi";
import { GoDashboard } from "react-icons/go";
import { BiFootball } from "react-icons/bi";
import '../styles/layout.css'
const Layout = () => {

    const [sidebar, setSidebar] = useState(false)


    const [width, setWidth] = useState(90);

    const openSidebar = () => {
        setWidth(250);
        setSidebar(!sidebar)
    };

    const closeSidebar = () => {
        setWidth(90)
        setSidebar(!sidebar)
    }
    return (
        <div className='container-fluid '>
            <div className='row '>

                <div style={{ width: `${width}px` }} className="custom-class box bg-dark scrollbar overflow-auto" >

                    <div className={sidebar ? 'w-100 d-flex justify-content-end menu-burguer ' : 'w-100  menu-burguer'}>
                        <FiMenu onClick={openSidebar} className={!sidebar ? 'fs-4 text-white ' : 'd-none'} />
                        <FiX
                            className={sidebar ? 'fs-4 text-white' : 'd-none'}
                            onClick={closeSidebar}
                        />
                    </div>
                    <div className={sidebar ? 'custom-class2' : 'custom-class-closed '}>
                        <a className='text-decoration-none   mb-4  d-flex justify-content-center gap-2 align-items-center  text-white mt-1'>
                            <div className='bg-white rounded-4 p-1'>
                                <BiFootball className='fs-2 text-black' />
                            </div>
                            <span className={sidebar ? 'fs-4' : 'd-none'}>Futval</span>
                        </a>

                        <ul className={sidebar ? "nav nav-pills d-flex flex-column  " : "nav nav-pills d-flex flex-column align-items-center "} id='parentM'>
                            <li className="nav-item my-1">
                                <a className="nav-link d-flex justify-content-between align-items-center text-white" data-bs-toggle="collapse" href="#submenu0" role="button" aria-expanded="false" aria-controls="submenu0">
                                    <div className='d-flex align-items-center gap-2'>
                                        <FiHome className='fs-4' />
                                        <span className={sidebar ? 'fs-5' : 'd-none'}>Home</span>
                                    </div>
                                    <FiChevronDown className={sidebar ? 'fs-5' : 'd-none'} />
                                </a>
                                <ul className={sidebar ? 'collapse' : 'd-none'} id='submenu0'>
                                    <li className="nav-item">
                                        <a href="#" className='nav-link text-white'>Item 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" className='nav-link text-white'>Item 2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" className='nav-link text-white'>Item 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item my-1">
                                <a href="#" className="nav-link d-flex gap-2 align-items-center text-white" aria-current="page">
                                    <GoDashboard className='fs-4' />
                                    <span className={sidebar ? 'fs-5' : 'd-none'}>Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item my-1">
                                <a className="nav-link d-flex justify-content-between align-items-center text-white" data-bs-toggle="collapse" href="#submenu" role="button" aria-expanded="false" aria-controls="submenu0">
                                    <div className='d-flex align-items-center gap-2'>
                                        <FiUsers className='fs-4' />
                                        <span className={sidebar ? 'fs-5' : 'd-none'}>Clientes</span>
                                    </div>
                                    <FiChevronDown className={sidebar ? 'fs-5' : 'd-none'} />
                                </a>
                                <ul className={sidebar ? 'collapse' : 'd-none'} id='submenu'>
                                    <li className="nav-item">
                                        <a href="#" className='nav-link text-white'>Item 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" className='nav-link text-white'>Item 2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" className='nav-link text-white'>Item 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item my-1">
                                <a className="nav-link d-flex justify-content-between align-items-center text-white" data-bs-toggle="collapse" href="#submenu2" role="button" aria-expanded="false" aria-controls="submenu0">
                                    <div className='d-flex align-items-center gap-2'>
                                        <FiGrid className='fs-4' />
                                        <span className={sidebar ? 'fs-5' : 'd-none'}>Productos</span>
                                    </div>
                                    <FiChevronDown className={sidebar ? 'fs-5' : 'd-none'} />
                                </a>
                                <ul className={sidebar ? 'collapse' : 'd-none'} id='submenu2'>
                                    <li className="nav-item">
                                        <a href="#" className='nav-link text-white'>Item 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" className='nav-link text-white'>Item 2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" className='nav-link text-white'>Item 3</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='col p-2 scrollbar overflow-auto vh-100'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout