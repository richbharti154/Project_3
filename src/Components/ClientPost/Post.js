import post from './post.module.css'
import LeftSection from '../../Sections/LeftSection/LeftSection'
import RightSection from '../../Sections/RightSection/RightSection'
import {clickedProfileIndex} from '../../Recoil/RecoilAtom'
import {useRecoilValue} from 'recoil'
import { FaRegComment , FaRetweet} from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import {CgInsights} from 'react-icons/cg'
import {FiShare} from 'react-icons/fi'
import {FaUserCircle} from 'react-icons/fa'
import {HiBadgeCheck} from 'react-icons/hi'
import {RiMoreFill} from 'react-icons/ri'
const Icons= [
    {
        Icon : <FaRegComment />,
        count : '4000'
    },
    {
        Icon : <FaRetweet />,
        count : '8000'
    },
    {
        Icon : <AiOutlineHeart />,
        count : '75.27K'
    },
    {
        Icon : <CgInsights />,
        count : '1.9M'
    },
    {
        Icon: <FiShare />
    }
]


const Post = () => {
    const clickedProfile  = useRecoilValue(clickedProfileIndex)
    return (
        <div className={post.mainComponent}>
            <LeftSection />
            <div className={post.middleSection}>
            {clickedProfile.map((element) => <><div className={post.header}><p className={post.profileIcon}><FaUserCircle /></p>
          <p className={post.Name}>{element.name} </p>
          <p className={post.BadgeIcon}><HiBadgeCheck/></p>
          <p className={post.smallName}>{element.handlerName} . Jan16</p>
          <p className={post.more}><RiMoreFill /></p></div>
          <p className={post.caption}>{element.tweetText} </p>
          <img className={post.Image} src={element.tweetPic} />
          <div className={post.bottom}>
            {Icons.map((element)=> <p className={post.Paragraph}><span className={post.Icon}>{element.Icon}</span> {element.count} </p> )}
          </div>
          <p className={post.border}></p>
          </>) } 
 
            </div>
            <RightSection />
        </div>
    )
}
export default Post