import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Avatar, IconButton} from '@material-ui/core';
import { logout,selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import {auth} from './firebase'
import { useDispatch } from 'react-redux';


const Header = () => {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const signOut = ()=>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })
       
    }
    return ( 
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>

                <img src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt=""/>
            </div>

            <div className="header__middle">
                <SearchIcon/>
                <input type="text" placeholder="Search mail"/>
                <ArrowDropDownIcon className="header__inputCaret"/>
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl}/>
            </div>
        </div>
     );
}
 
export default Header;