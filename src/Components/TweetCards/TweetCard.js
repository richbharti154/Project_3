import tweetcard from '../TweetCards/tweetcard.module.css'
import {Data ,isLikeValue , clickedProfileIndex} from '../../Recoil/RecoilAtom'
import { useRecoilValue , useRecoilState } from 'recoil'
import { FaUserCircle } from 'react-icons/fa'
import { HiBadgeCheck } from 'react-icons/hi'
import {RiMoreFill} from 'react-icons/ri'
import {FaRegComment} from 'react-icons/fa'
import {FaRetweet} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'    
import {AiOutlineHeart} from 'react-icons/ai'    
import {CgInsights} from 'react-icons/cg'    
import {FiShare} from 'react-icons/fi'  
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'

const TweetCard = () => {
    const [isLike , setIsLike] = useRecoilState(isLikeValue)
    const [likeCount , setLikeCount] = useState(100)
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
            Icon : isLike ?<AiFillHeart style={{color:'#FF0080'}} onClick={Like}/> :<AiOutlineHeart onClick={Like} />,
            count : '100.27K'
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
        setLikeCount(likeCount + 1)
    }

    useEffect(() => {   // Added useEffect because i was not getting the updated recoil value

    } , [clickedProfile])

    function filteringClickedPost(index){
        // console.log(tweetData.filter((element) => element.name === tweetData[index].name))
        const clickedObject= tweetData.filter((element) => element.name === tweetData[index].name)
        setClickedProfile(clickedObject)
        navigate('/post')
        // console.log(clickedProfile)
    }
   
    function filteringClickedProfile(index){
        const clickedObject= tweetData.filter((element) => element.name === tweetData[index].name)
        setClickedProfile(clickedObject)
       navigate('/profile1') 
    }

    return (
        <div className={tweetcard.mainComponent}>            
            {tweetData.map((element , index) => <div ><div  className={tweetcard.header}><p onClick={()=>filteringClickedProfile(index)} className={tweetcard.profileIcon}><FaUserCircle  /></p>
          <p onClick={()=>filteringClickedPost(index)} className={tweetcard.Name}>{element.name} </p>
          <p onClick={()=>filteringClickedPost(index)} className={tweetcard.BadgeIcon}><HiBadgeCheck/></p>
          <p onClick={()=>filteringClickedPost(index)} className={tweetcard.smallName}>{element.handlerName} . Jan16</p>
          <p onClick={()=>filteringClickedPost(index)} className={tweetcard.more}><RiMoreFill /></p></div>
          <p onClick={()=>filteringClickedPost(index)} className={tweetcard.caption}>{element.tweetText} </p>
          <img onClick={()=>filteringClickedPost(index)} className={tweetcard.Image} src={element.tweetPic} />
          <div className={tweetcard.bottom}>
            {Icons.map((element)=> <p className={tweetcard.Paragraph}><span className={tweetcard.Icon}>{element.Icon}</span> {element.count} </p> )}
          </div>
          <p className={tweetcard.border}></p>
          </div> ) } 

         
        </div>
    )
}

export default TweetCard
