import './navbar.scss';
import {SearchOutlinedIcon,LanguageOutlinedIcon,DarkModeOutlinedIcon,NotificationsNoneOutlinedIcon
  ,ListOutlinedIcon,FullscreenExitOutlinedIcon,ChatBubbleOutlineOutlinedIcon} from './index';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...'/>
          <SearchOutlinedIcon/>
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlinedIcon className='icon'/>
            English
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon className='icon'/>
          </div>
          <div className='item'>
            <FullscreenExitOutlinedIcon className='icon'/>
          </div>
          <div className='item'>
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ListOutlinedIcon className='icon'/>
          </div>
          <div className='item'>
            <img src='https://e0.pxfuel.com/wallpapers/619/566/desktop-wallpaper-shri-rama-lord-rama-angry.jpg' alt='' className='avatar'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;