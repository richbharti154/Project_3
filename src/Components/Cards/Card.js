import card from '../Cards/card.module.css'
import { CgProfile } from 'react-icons/cg'
import { HiBadgeCheck } from 'react-icons/hi'
import {RiMoreFill} from 'react-icons/ri'
import {FaRegComment} from 'react-icons/fa'
import {FaRetweet} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'    
import {CgInsights} from 'react-icons/cg'    
import {FiShare} from 'react-icons/fi'    




const Card = () => {

    const Data= [
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
        <div className={card.mainComponent}>
        
        <div className={card.card}>

          <div className={card.header}>  
          <p className={card.profileIcon}><CgProfile /></p>
          <p className={card.Name}>Elon Musk </p>
          <p className={card.BadgeIcon}><HiBadgeCheck/></p>
          <p className={card.smallName}>@Elon Musk . Jan16</p>
          <p className={card.more}><RiMoreFill /></p>
          </div>

          <div className={card.Media}>
            <img className={card.image} src="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHdpdHRlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
          </div>  

          <div className={card.bottom}>
            {Data.map((element)=> <p className={card.Paragraph}><span className={card.Icon}>{element.Icon}</span> {element.count} </p> )}
            {/* <FaRegComment />
            <FaRetweet /> 
            <AiOutlineHeart /> 
            <CgInsights />
            <FiShare />  */}
          </div>

        </div>
        </div>
    )
}

export default Card