import leftsection from '../LeftSection/leftsection.module.css'
import {RiHome7Fill } from 'react-icons/ri'
import {CgHashtag , CgProfile } from 'react-icons/cg'
import {FiBell } from 'react-icons/fi'
import {MdOutlineEmail } from 'react-icons/md'  
import {CiCircleMore} from 'react-icons/ci'
import {BsTwitter} from 'react-icons/bs'
import {FaRegListAlt , FaRegBookmark} from 'react-icons/fa'
import TweetButton from '../../Atoms/TweetButton'
import {atomState} from '../../Recoil/RecoilAtom'
import {useRecoilState} from 'recoil'


const LeftSection = () => {
    const [isDialogue , setIsDialogueBox] = useRecoilState(atomState)

    function Toggle() {
      setIsDialogueBox(!isDialogue)
    }
    
    const icons = [
        {icon:<BsTwitter style={{fontSize: '32px'}} />},
        {icon:<RiHome7Fill /> , iconName:'Home'},
        {icon:<CgHashtag /> , iconName:'Explorer'},
        {icon:<FiBell /> , iconName:'Notifications'},
        {icon:<MdOutlineEmail /> , iconName:'Messages'},
        {icon: <FaRegBookmark />, iconName:'Bookmarks'},
        {icon: <FaRegListAlt />, iconName:'Lists'},
        {icon:<CgProfile /> , iconName:'Profile'},
        {icon:<CiCircleMore /> , iconName:'More'},
      ]

    return (
            <div className={leftsection.mainComponent}>

            <div className={leftsection.IconSection}>
            {icons.map((element) => <h1 className={leftsection.IconSize}>{element.icon}<span className={leftsection.IconName}>{element.iconName}</span></h1>)}
            <div className={leftsection.tweetButton}>

            <TweetButton Name='Tweet' onClick={Toggle} />
            </div>
            </div>
            <div className={leftsection.profileIcon}>

            </div>  
            </div>
    )
}
export default LeftSection