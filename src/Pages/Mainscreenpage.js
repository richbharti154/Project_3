import mainscreenpage from '../Pages/mainscreenpage.module.css'
import LeftSection from '../Sections/LeftSection/LeftSection'
import MiddleSection from '../Sections/MiddleSection/MiddleSection'
import RightSection from '../Sections/RightSection/RightSection'
import TweetSection from '../Components/TweetSection/TweetSection'
import { useRecoilValue } from 'recoil'
import { isDialogBox } from '../Recoil/RecoilAtom'
import {isLogin} from '../Recoil/RecoilAtom'

const Mainscreeenpage = () => {
  const LoginStatus = useRecoilValue(isLogin)
  const Value = useRecoilValue(isDialogBox)
    return (
        <div>
       {LoginStatus && <div className={mainscreenpage.mainComponent}>
          <LeftSection />

          {Value ? <dialog  className={mainscreenpage.DialogueBox} >
            <div className={mainscreenpage.DialogueContainer}>
              <TweetSection placeholder='What’s happening?' />  
            </div></dialog> : null}


          <MiddleSection />
          <RightSection />           
        </div>}
       { !LoginStatus && <h1 className={mainscreenpage}> Please Login First </h1>}
        </div>
    )
}

export default Mainscreeenpage