import tweetcard from '../TweetCards/tweetcard.module.css'
import {Data} from '../../Recoil/RecoilAtom'
import { useRecoilValue } from 'recoil'
import { FaUserCircle } from 'react-icons/fa'
import { HiBadgeCheck } from 'react-icons/hi'
import {RiMoreFill} from 'react-icons/ri'


const TweetCard = () => {
    const tweetData = useRecoilValue(Data)

    return (
        <div className={tweetcard.mainComponent}>            
            {tweetData.map((element) => <><div className={tweetcard.header}><p className={tweetcard.profileIcon}><FaUserCircle /></p>
          <p className={tweetcard.Name}>{element.name} </p>
          <p className={tweetcard.BadgeIcon}><HiBadgeCheck/></p>
          <p className={tweetcard.smallName}>{element.handlerName} . Jan16</p>
          <p className={tweetcard.more}><RiMoreFill /></p></div>
          <p className={tweetcard.caption}>{element.tweetText} </p>
          <img className={tweetcard.Image} src={element.tweetPic} />
          <p className={tweetcard.border}></p>
          </>) } 
        </div>
    )
}

export default TweetCard

/*<p className={card.profileIcon}><FaUserCircle /></p>
          <p className={card.Name}>Elon Musk </p>
          <p className={card.BadgeIcon}><HiBadgeCheck/></p>
          <p className={card.smallName}>@Elon Musk . Jan16</p>
          <p className={card.more}><RiMoreFill /></p> */