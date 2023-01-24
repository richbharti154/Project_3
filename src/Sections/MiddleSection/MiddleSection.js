import middlesection from '../MiddleSection/middlesection.module.css'
import TweetSection from '../../Components/TweetSection/TweetSection'
import {useState} from 'react'
import {Data , isProfileValue} from '../../Recoil/RecoilAtom'
import { useRecoilState , useRecoilValue } from 'recoil'
import TweetCard from '../../Components/TweetCards/TweetCard'


const MiddleSection = () => {
    const isProfile = useRecoilValue(isProfileValue)
    const [tweetCapture , setTweetCapture] = useState();
    const [addingDataToRecoil , setAddingDataToRecoil] = useRecoilState(Data)

    function captureTweetInput(e) {
     setTweetCapture(e.target.value)   
    }
    let Details = JSON.parse(localStorage.getItem("list"))

    function AddDataToRrecoil(){
        const obj = {
            name: Details.Name,
            tweetText : tweetCapture,
            handlerName : Details.Name,
            tweetPic :"https://th.bing.com/th/id/OIP.AdzhkXtdEuGDv94QoKVmaAHaHa?pid=ImgDet&rs=1"            
        }
        setAddingDataToRecoil([ obj ,...addingDataToRecoil])
        
    }
    console.log(addingDataToRecoil)

    
    return (
        <div className={middlesection.mainComponent}>

        <div className={middlesection.scrollerSection}>

            <h2 className={middlesection.heading}>Home</h2>

            <div className={middlesection.TweetSection}>
               <TweetSection onClick={AddDataToRrecoil} onChange={captureTweetInput} placeholder= 'What’s happening?' />        
            </div>
                     
                <TweetCard />
            </div>    

        </div>
    )
}
export default MiddleSection