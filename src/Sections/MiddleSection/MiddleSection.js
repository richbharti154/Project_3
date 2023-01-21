import middlesection from '../MiddleSection/middlesection.module.css'
import TweetSection from '../../Components/TweetSection/TweetSection'


const MiddleSection = () => {

    return (
        <div className={middlesection.mainComponent}>

        <div className={middlesection.scrollerSection}>

            <h2 className={middlesection.heading}>Home</h2>

            <div className={middlesection.TweetSection}>
               <TweetSection placeholder= 'What’s happening?' />        
            </div>            
  
            </div>    

        </div>
    )
}
export default MiddleSection