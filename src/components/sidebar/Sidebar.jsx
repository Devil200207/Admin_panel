import './sidebar.scss';
import {DashboardIcon,Person2OutlinedIcon,SettingsIcon,StoreMallDirectoryOutlinedIcon,CreditCardIcon,LocalShippingIcon
,BarChartIcon,NotificationsNoneIcon,SettingsSystemDaydreamIcon,PsychologyIcon,LogoutIcon,AccountCircleOutlinedIcon} from '../index';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className='logo'>myadmin</span>
        </div>
        <hr></hr>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LIST</p>
                <li>
                    <Person2OutlinedIcon/>
                    <span>Users</span>
                </li>
                <li>
                    <StoreMallDirectoryOutlinedIcon/>
                    <span>Products</span>
                </li>
                <li>
                    <CreditCardIcon/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <BarChartIcon/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamIcon/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyIcon/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">color option</div>
    </div>
  )
}

export default Sidebar;