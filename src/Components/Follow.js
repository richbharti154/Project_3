import follow from '../Components/follow.module.css'
import {CgProfile} from 'react-icons/cg'
import Tweet from '../Atoms/Tweet/Tweet'
import { HiBadgeCheck } from 'react-icons/hi'


const Follow = () => {
    
    const Data= [ 
        {Icon : <CgProfile />,
         Name : 'SharukKhan',
         Badge : <HiBadgeCheck />
         },
         {Icon : <CgProfile />,
         Name : 'SalmanKhan',
         Badge : <HiBadgeCheck />

         },
         {Icon : <CgProfile />,
         Name : 'Saif AliKhan',
         Badge : <HiBadgeCheck />

         },
    ]

    return (
        <div className={follow.mainComponent}>
            <div className={follow.container}>
            <div className={follow.header}>
                <h2>Who to follow</h2>
            </div>
           <div className={follow.data}>
              {Data.map( (element) => <p className={follow.Section}>
                <span className={follow.Icon}>{element.Icon}</span>
                {element.Name}
                <span className={follow.Badge}>{element.Badge}</span>    
                <Tweet Name='Follow' />
                </p>   )}
                  
           </div> 
           </div>
        </div>
    )
}
export default Follow