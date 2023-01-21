import tweetsection from '../TweetSection/tweetsection.module.css'
import {CgProfile} from 'react-icons/cg'
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
           <span className={tweetsection.Icon}><CgProfile /></span>
            <input placeholder={props.placeholder}  className={tweetsection.searchButton}  />
            </div>
            <div className={tweetsection.bottom}>
               < MdOutlinePhotoSizeSelectActual/><RiFileGifLine/><TfiList/><BsEmojiSmile/><TbCalendarTime/><SlLocationPin/>
            </div>
        </div>
    )
}

export default TweetSection