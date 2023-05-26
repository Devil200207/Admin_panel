import './sidebar.scss';
import {DashboardIcon,Person2OutlinedIcon,SettingsIcon,StoreMallDirectoryOutlinedIcon,CreditCardIcon,LocalShippingIcon
,BarChartIcon,NotificationsNoneIcon,SettingsSystemDaydreamIcon,PsychologyIcon,LogoutIcon,AccountCircleOutlinedIcon} from '../index';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className='logo'>Myadmin</span>
        </div>
        <hr></hr>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LIST</p>
                <li>
                    <Person2OutlinedIcon className="icon"/>
                    <span>Users</span>
                </li>
                <li>
                    <StoreMallDirectoryOutlinedIcon className="icon"/>
                    <span>Products</span>
                </li>
                <li>
                    <CreditCardIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <BarChartIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <label>
                <input type="checkbox" class="slider"/>
                <div class="switch">
                    <div class="suns"></div>
                    <div class="moons">
                        <div class="star star-1"></div>
                        <div class="star star-2"></div>
                        <div class="star star-3"></div>
                        <div class="star star-4"></div>
                        <div class="star star-5"></div>
                        <div class="first-moon"></div>
                    </div>
                    <div class="sand"></div>
                    <div class="bb8">
                        <div class="antennas">
                            <div class="antenna short"></div>
                            <div class="antenna long"></div>
                        </div>
                        <div class="head">
                            <div class="stripe one"></div>
                            <div class="stripe two"></div>
                            <div class="eyes">
                                <div class="eye one"></div>
                                <div class="eye two"></div>
                            </div>
                            <div class="stripe detail">
                                <div class="detail zero"></div>
                                <div class="detail zero"></div>
                                <div class="detail one"></div>
                                <div class="detail two"></div>
                                <div class="detail three"></div>
                                <div class="detail four"></div>
                                <div class="detail five"></div>
                                <div class="detail five"></div>
                            </div>
                            <div class="stripe three"></div>
                        </div>
                        <div class="ball">
                            <div class="lines one"></div>
                            <div class="lines two"></div>
                            <div class="ring one"></div>
                            <div class="ring two"></div>
                            <div class="ring three"></div>
                        </div>
                        <div class="shadow"></div>
                    </div>
                </div>
            </label>
        </div>
    </div>
  )
}

export default Sidebar;