import commentbox from './commentbox.module.css'
import {useRecoilState} from 'recoil'
import {ImageAdress} from '../../Recoil/RecoilAtom'
import {FaUserCircle} from 'react-icons/fa'
import {MdOutlinePhotoSizeSelectActual} from 'react-icons/md'
import {RiFileGifLine} from 'react-icons/ri'
import {TfiList} from 'react-icons/tfi'
import {BsEmojiSmile} from 'react-icons/bs'
import {TbCalendarTime} from 'react-icons/tb'
import {SlLocationPin} from 'react-icons/sl'


const CommentBox = () => {
    const [imageLocation , setImageLocation] = useRecoilState(ImageAdress)
    return(
        <div>
            <div className={commentbox.container }>
            <span className={commentbox.Icon}><FaUserCircle  /></span>
            <input className={commentbox.searchButton}  />
            </div>
            <div className={commentbox.bottom}>
            <label for='files'>< MdOutlinePhotoSizeSelectActual/></label><input onChange={(e) => setImageLocation(URL.createObjectURL(e.target.files[0])) } type='file' id='files' className={commentbox.fileUpload} /><RiFileGifLine/><TfiList/><BsEmojiSmile/><TbCalendarTime/><SlLocationPin/>
            <span className={commentbox.tweetButton}><button className={commentbox.Button}>reply</button></span>
            </div>
        </div>
    )
}

export default CommentBox