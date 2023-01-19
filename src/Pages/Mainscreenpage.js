import mainscreenpage from '../Pages/mainscreenpage.module.css'
import {RiHome7Fill } from 'react-icons/ri'
import {CgHashtag , CgProfile } from 'react-icons/cg'
import {FiBell } from 'react-icons/fi'
import {MdOutlineEmail } from 'react-icons/md'
import {CiCircleMore} from 'react-icons/ci'
import {BsTwitter} from 'react-icons/bs'


const Mainscreeenpage = () => {

    return (
        <div className={mainscreenpage.mainComponent}>
            
          <div className={mainscreenpage.IconSection}>
            
            <ul>
                <li className={mainscreenpage.IconSize}><BsTwitter /></li>
                <li className={mainscreenpage.IconSize}><RiHome7Fill /></li>
                <li className={mainscreenpage.IconSize}><CgHashtag /></li>
                <li className={mainscreenpage.IconSize}><FiBell /></li>
                <li className={mainscreenpage.IconSize}><MdOutlineEmail /></li>
                <li className={mainscreenpage.IconSize}><CgProfile /></li>
                <li className={mainscreenpage.IconSize}><CiCircleMore /></li>
            </ul>
          </div>  
          <div className={mainscreenpage.scrollerSection}>
            <h2 className={mainscreenpage.heading}>Home</h2>
            <img className={mainscreenpage.image} src="https://i.guim.co.uk/img/media/01cd2598194e1315662236f6c3f6f81ad2d3f7f3/51_0_950_570/master/950.jpg?width=1200&quality=85&auto=format&fit=max&s=730aa9bae1b1d265c04f0f363513da45" />
            <img className={mainscreenpage.image} src="https://i.guim.co.uk/img/media/01cd2598194e1315662236f6c3f6f81ad2d3f7f3/51_0_950_570/master/950.jpg?width=1200&quality=85&auto=format&fit=max&s=730aa9bae1b1d265c04f0f363513da45" />
            <img className={mainscreenpage.image} src="https://i.guim.co.uk/img/media/01cd2598194e1315662236f6c3f6f81ad2d3f7f3/51_0_950_570/master/950.jpg?width=1200&quality=85&auto=format&fit=max&s=730aa9bae1b1d265c04f0f363513da45" />
            <img className={mainscreenpage.image} src="https://i.guim.co.uk/img/media/01cd2598194e1315662236f6c3f6f81ad2d3f7f3/51_0_950_570/master/950.jpg?width=1200&quality=85&auto=format&fit=max&s=730aa9bae1b1d265c04f0f363513da45" />
            <img className={mainscreenpage.image} src="https://i.guim.co.uk/img/media/01cd2598194e1315662236f6c3f6f81ad2d3f7f3/51_0_950_570/master/950.jpg?width=1200&quality=85&auto=format&fit=max&s=730aa9bae1b1d265c04f0f363513da45" />

          </div>
          <div className={mainscreenpage.searchSection}>
            <h2>Right searchSection</h2>
          </div>
           
        </div>
    )
}

export default Mainscreeenpage