import { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'

const Sidebar = () => {

    const [active, setActive] = useState(1);

  return (
    <>
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 sidebar-sticky"> 
                <ul className="nav flex-column">
                    <li className={active === 1 ? 'active nav-item': "nav-item" } onClick={e => setActive(1)}>
                        <a className="nav-link" aria-current="page" href="#">
                            <i className='bi bi-house me-3'></i>
                            <span data-feather="home" className="align-text-bottom"><strong>Dashboard</strong></span>
                        </a>
                    </li>   
                    <li className={active === 2 ? 'active nav-item': "nav-item" } onClick={e => setActive(2)}>
                        <a className="nav-link" href="#">
                            <i className='bi bi-file me-3'></i>                             
                            <span data-feather="file" className="align-text-bottom"><strong>Orders</strong></span>
                        </a>
                    </li>
                    <li className={active === 3 ? 'active nav-item': "nav-item" } onClick={e => setActive(3)}>
                        <a className="nav-link" href="#">
                            <i className='bi bi-cart me-3'></i>                                                         
                            <span data-feather="shopping-cart" className="align-text-bottom"><strong>Products</strong></span>
                        </a>
                    </li>
                    <li className={active === 4 ? 'active nav-item': "nav-item" } onClick={e => setActive(4)}>
                        <a className="nav-link" href="#">
                            <i className='bi bi-people me-3'></i>                                                                                     
                            <span data-feather="users" className="align-text-bottom"><strong>Customers</strong></span>
                        </a>
                    </li>
                    <li className={active === 5 ? 'active nav-item': "nav-item" } onClick={e => setActive(5)}>
                        <a className="nav-link" href="#">
                            <i className='bi bi-graph-up me-3'></i>                                                                                     
                            <span data-feather="bar-chart-2" className="align-text-bottom"><strong>Reports</strong></span>
                        </a>
                    </li>
                    <li className={active === 6 ? 'active nav-item': "nav-item" } onClick={e => setActive(6)}>
                        <a className="nav-link" href="#">
                            <i className='bi bi-puzzle me-3'></i>
                            <span data-feather="layers" className="align-text-bottom"><strong>Integrations</strong></span>
                        </a>
                    </li>                    
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>Saved reports</span>
                    <a className="link-secondary" href="#" aria-label="Add a new report">
                        <span data-feather="plus-circle" className="align-text-bottom"></span>
                    </a>
                </h6>     
                <ul className="nav flex-column mb-2"> 
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className='bi bi-file-text me-3'></i>                            
                            <span data-feather="file-text" className="align-text-bottom">Current month</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className='bi bi-file-text me-3'></i>
                            <span data-feather="file-text" className="align-text-bottom">Last quarter</span>
                        </a>
                    </li>      
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className='bi bi-file-text me-3'></i>                            
                            <span data-feather="file-text" className="align-text-bottom">Social engagement</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className='bi bi-file-text me-3'></i> 
                            <span data-feather="file-text" className="align-text-bottom">Year-end sale</span>
                        </a>
                    </li>                              
                </ul>                           
            </div>
        </nav>
    </>
  )
}

export default Sidebar
