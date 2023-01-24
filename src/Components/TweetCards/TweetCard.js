import tweetcard from '../TweetCards/tweetcard.module.css'
import {Data} from '../../Recoil/RecoilAtom'
import { useRecoilValue } from 'recoil'
import { FaUserCircle } from 'react-icons/fa'
import { HiBadgeCheck } from 'react-icons/hi'
import {RiMoreFill} from 'react-icons/ri'
import {FaRegComment} from 'react-icons/fa'
import {FaRetweet} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'    
import {CgInsights} from 'react-icons/cg'    
import {FiShare} from 'react-icons/fi'   


const TweetCard = () => {
    const tweetData = useRecoilValue(Data)
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

    return (
        <div className={tweetcard.mainComponent}>            
            {tweetData.map((element) => <><div className={tweetcard.header}><p className={tweetcard.profileIcon}><FaUserCircle /></p>
          <p className={tweetcard.Name}>{element.name} </p>
          <p className={tweetcard.BadgeIcon}><HiBadgeCheck/></p>
          <p className={tweetcard.smallName}>{element.handlerName} . Jan16</p>
          <p className={tweetcard.more}><RiMoreFill /></p></div>
          <p className={tweetcard.caption}>{element.tweetText} </p>
          <img className={tweetcard.Image} src={element.tweetPic} />
          <div className={tweetcard.bottom}>
            {Icons.map((element)=> <p className={tweetcard.Paragraph}><span className={tweetcard.Icon}>{element.Icon}</span> {element.count} </p> )}
          </div>
          <p className={tweetcard.border}></p>
          </>) } 

         
        </div>
    )
}

export default TweetCard
