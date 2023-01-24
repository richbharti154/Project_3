import tweetsection from '../TweetSection/tweetsection.module.css'
import {FaUserCircle} from 'react-icons/fa'
import {MdOutlinePhotoSizeSelectActual} from 'react-icons/md'
import {RiFileGifLine} from 'react-icons/ri'
import {TfiList} from 'react-icons/tfi'
import {BsEmojiSmile} from 'react-icons/bs'
import {TbCalendarTime} from 'react-icons/tb'
import {SlLocationPin} from 'react-icons/sl'


const TweetSection = (props) => {

    return (
        <div className={tweetsection.mainComponent }>
            <div className={tweetsection.container }>
           <span className={tweetsection.Icon}><FaUserCircle /></span>
            <input onChange={props.onChange } placeholder={props.placeholder}  className={tweetsection.searchButton}  />
            </div>
            <div className={tweetsection.bottom}>
               < MdOutlinePhotoSizeSelectActual/><RiFileGifLine/><TfiList/><BsEmojiSmile/><TbCalendarTime/><SlLocationPin/>
               <span className={tweetsection.tweetButton}><button className={tweetsection.Button}>Tweet</button></span>
            </div>
        </div>
    )
}

export default TweetSection