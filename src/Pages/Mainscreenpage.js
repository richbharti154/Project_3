import mainscreenpage from '../Pages/mainscreenpage.module.css'
import LeftSection from '../Sections/LeftSection/LeftSection'
import MiddleSection from '../Sections/MiddleSection/MiddleSection'
import RightSection from '../Sections/RightSection/RightSection'
import TweetSection from '../Components/TweetSection/TweetSection'
import { useRecoilValue } from 'recoil'
import { atomState } from '../Recoil/RecoilAtom'

const Mainscreeenpage = () => {

  const Value = useRecoilValue(atomState)
    return (
        <div>
        <div className={mainscreenpage.mainComponent}>
          <LeftSection />

          {Value ? <dialog  className={mainscreenpage.DialogueBox} >
            <div className={mainscreenpage.DialogueContainer}>
              <TweetSection placeholder='What’s happening?' />  
            </div></dialog> : null}


          <MiddleSection />
          <RightSection />           
        </div>
       
        </div>
    )
}

export default Mainscreeenpage