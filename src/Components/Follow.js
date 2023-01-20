import follow from '../Components/follow.module.css'
import {CgProfile} from 'react-icons/cg'

const Follow = () => {
    
    const Data= [ 
        {Icon : <CgProfile />,
         Name : 'Salman Khan'
         },
         {Icon : <CgProfile />,
         Name : 'Sharuk Khan'
         },
         {Icon : <CgProfile />,
         Name : 'Narendra Modi'
         },
    ]

    return (
        <div className={follow.mainComponent}>
            <div className={follow.container}>
            <div className={follow.header}>
                <h2>Who to follow</h2>
            </div>
           <div className={follow.data}>
                {Data.map((element) => <p className={follow.Text}> <span className={follow.Icon}>{element.Icon}</span>  <span className={follow.FollowName}>{element.Name}</span> </p>)}
           </div> 
           </div>
        </div>
    )
}
export default Follow