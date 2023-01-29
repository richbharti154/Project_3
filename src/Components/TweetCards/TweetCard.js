import tweetcard from '../TweetCards/tweetcard.module.css'
import {Data ,isLikeValue , clickedProfileIndex} from '../../Recoil/RecoilAtom'
import { useRecoilValue , useRecoilState } from 'recoil'
import { FaUserCircle } from 'react-icons/fa'
import { HiBadgeCheck } from 'react-icons/hi'
import {RiMoreFill} from 'react-icons/ri'
import {FaRegComment} from 'react-icons/fa'
import {FaRetweet} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'    
import {CgInsights} from 'react-icons/cg'    
import {FiShare} from 'react-icons/fi'  
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const TweetCard = () => {
    const [isLike , setIsLike] = useRecoilState(isLikeValue)
    const [clickedProfile , setClickedProfile] = useRecoilState(clickedProfileIndex)
    const tweetData = useRecoilValue(Data)
    const navigate = useNavigate()
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
            Icon : <AiOutlineHeart style={{color: isLike ? 'red' : 'white'}} onClick={Like}/>,
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

    function Like() {
        setIsLike(!isLike)
    }

    useEffect(() => {   // Added useEffect because i was not getting the updated recoil value

    } , [clickedProfile])

    function filteringClickedProfile(index){
        // console.log(tweetData.filter((element) => element.name === tweetData[index].name))
        const clickedObject= tweetData.filter((element) => element.name === tweetData[index].name)
        setClickedProfile(clickedObject)
        navigate('/post')
        // console.log(clickedProfile)
    }
   

    return (
        <div className={tweetcard.mainComponent}>            
            {tweetData.map((element , index) => <div onClick={()=>filteringClickedProfile(index)}><div  className={tweetcard.header}><p className={tweetcard.profileIcon}><FaUserCircle  /></p>
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
          </div>) } 

         
        </div>
    )
}

export default TweetCard
