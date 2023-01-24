import middlesection from '../MiddleSection/middlesection.module.css'
import TweetSection from '../../Components/TweetSection/TweetSection'
import Card from '../../Components/Cards/Card'
import {useState} from 'react'
import {Data} from '../../Recoil/RecoilAtom'
import { useRecoilState } from 'recoil'
import TweetCard from '../../Components/TweetCards/TweetCard'


const MiddleSection = () => {
    const [tweetCapture , setTweetCapture] = useState();
    const [AddingDataToRecoil , setAddingDataToRecoil] = useRecoilState(Data)

    function captureTweetInput(e) {
     setTweetCapture(e.target.value)   
    }
    let Details = JSON.parse(localStorage.getItem("list"))
    Details = Details.Name
    console.log(Details)
    
    return (
        <div className={middlesection.mainComponent}>

        <div className={middlesection.scrollerSection}>

            <h2 className={middlesection.heading}>Home</h2>

            <div className={middlesection.TweetSection}>
               <TweetSection onChange={captureTweetInput} placeholder= 'What’s happening?' />        
            </div>
                     
                <TweetCard />
            </div>    

        </div>
    )
}
export default MiddleSection