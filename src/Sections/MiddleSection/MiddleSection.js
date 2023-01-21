import middlesection from '../MiddleSection/middlesection.module.css'
import TweetSection from '../../Components/TweetSection/TweetSection'
import Card from '../../Components/Cards/Card'


const MiddleSection = () => {

    return (
        <div className={middlesection.mainComponent}>

        <div className={middlesection.scrollerSection}>

            <h2 className={middlesection.heading}>Home</h2>

            <div className={middlesection.TweetSection}>
               <TweetSection placeholder= 'What’s happening?' />        
            </div>
                     
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>    

        </div>
    )
}
export default MiddleSection