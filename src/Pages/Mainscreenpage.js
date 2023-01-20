import mainscreenpage from '../Pages/mainscreenpage.module.css'
import LeftSection from '../Sections/LeftSection/LeftSection'
import MiddleSection from '../Sections/MiddleSection/MiddleSection'
import RightSection from '../Sections/RightSection/RightSection'

const Mainscreeenpage = () => {

    return (
        <div className={mainscreenpage.mainComponent}>
          <LeftSection />
          <MiddleSection />
          <RightSection />           
        </div>
    )
}

export default Mainscreeenpage