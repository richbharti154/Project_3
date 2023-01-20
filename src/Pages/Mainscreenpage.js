import mainscreenpage from '../Pages/mainscreenpage.module.css'
import {RiHome7Fill } from 'react-icons/ri'
import {CgHashtag , CgProfile } from 'react-icons/cg'
import {FiBell } from 'react-icons/fi'
import {MdOutlineEmail } from 'react-icons/md'  
import {CiCircleMore} from 'react-icons/ci'
import {BsTwitter} from 'react-icons/bs'
import {FaRegListAlt , FaRegBookmark} from 'react-icons/fa'
import TweetButton from '../Atoms/TweetButton.js'
import Searchbar from '../Components/Searchbar.js'  
import {GoSearch } from 'react-icons/go'  
import Trending from '../Components/Trending'
import Follow from '../Components/Follow.js'



const Mainscreeenpage = () => {
  const search = <GoSearch /> 
  const text = 'Search Tweet'
  const icons = [
    {icon:<BsTwitter style={{fontSize: '32px'}} />},
    {icon:<RiHome7Fill /> , iconName:'Home'},
    {icon:<CgHashtag /> , iconName:'Explorer'},
    {icon:<FiBell /> , iconName:'Notifications'},
    {icon:<MdOutlineEmail /> , iconName:'Messages'},
    {icon: <FaRegBookmark />, iconName:'Bookmarks'},
    {icon: <FaRegListAlt />, iconName:'Lists'},
    {icon:<CgProfile /> , iconName:'Profile'},
    {icon:<CiCircleMore /> , iconName:'More'},
  ]

    return (
        <div className={mainscreenpage.mainComponent}>
            
          <div className={mainscreenpage.IconSection}>
            {icons.map((element) => <h1 className={mainscreenpage.IconSize}>{element.icon}<span className={mainscreenpage.IconName}>{element.iconName}</span></h1>)}
            <div className={mainscreenpage.tweetButton}>

            <TweetButton Name='Tweet' />
            </div>
          </div>  
          <div className={mainscreenpage.scrollerSection}>
              
            <h2 className={mainscreenpage.heading}>Home</h2>
          
            <img className={mainscreenpage.image} src="https://i.guim.co.uk/img/media/01cd2598194e1315662236f6c3f6f81ad2d3f7f3/51_0_950_570/master/950.jpg?width=1200&quality=85&auto=format&fit=max&s=730aa9bae1b1d265c04f0f363513da45" />
            <img className={mainscreenpage.image} src="https://i.guim.co.uk/img/media/01cd2598194e1315662236f6c3f6f81ad2d3f7f3/51_0_950_570/master/950.jpg?width=1200&quality=85&auto=format&fit=max&s=730aa9bae1b1d265c04f0f363513da45" />
            <img className={mainscreenpage.image} src="https://i.guim.co.uk/img/media/01cd2598194e1315662236f6c3f6f81ad2d3f7f3/51_0_950_570/master/950.jpg?width=1200&quality=85&auto=format&fit=max&s=730aa9bae1b1d265c04f0f363513da45" />
            <img className={mainscreenpage.image} src="https://i.guim.co.uk/img/media/01cd2598194e1315662236f6c3f6f81ad2d3f7f3/51_0_950_570/master/950.jpg?width=1200&quality=85&auto=format&fit=max&s=730aa9bae1b1d265c04f0f363513da45" /> */}

          </div>
          <div className={mainscreenpage.searchSection}>
            <Searchbar placeholder={search , text}  />
            <div className={mainscreenpage.TrendingSection}>
              <Trending />
            </div>
            <div className={mainscreenpage.follow}>
              <Follow />
            </div>
          </div>
           
        </div>
    )
}

export default Mainscreeenpage