import trending from '../Components/trending.module.css'
import {RiMoreFill} from 'react-icons/ri'

const Trending = () => {
    const Data = [ 
        {
            Trending : 'Trending in India',
            Hashtag : '#ViratKohli',
            count : '23k Tweets',
            isNotIntrested : true
        },
        {
            Trending : 'Trending in India',
            Hashtag : '#GujaratRiots',
            count : '53.2k Tweets',
            isNotIntrested : true
        },{
            Trending : 'Trending in USA',
            Hashtag : '#WhiteHouse',
            count : '92.6k Tweets',
            isNotIntrested : true
         }
        ,{
            Trending : 'Trending in Pakistan',
            Hashtag : '#BombBlast',
            count : '13.6k Tweets',
            isNotIntrested : true
        },
        //{
        //     Trending : 'Trending in india',
        //     Hashtag : '#TajMahal',
        //     count : '70k Tweets'
        // },{
        //     Trending : 'Trending in india',
        //     Hashtag : '#Engineers',
        //     count : '42.1 Tweets'
        // },

    ]

    return (
        <div className={trending.mainComponent}>
         <div className={trending.heading}>
            <div className={trending.container}>
            <h2>What’s happening</h2>
            {Data.map((element) => element.isNotIntrested && <p className={trending.paragraph}>{element.Trending} <p className={trending.moreIcon}><RiMoreFill /></p> <h2 className={trending.Hashtag}>{element.Hashtag}</h2> {element.count}   </p>)}
            </div>          
        </div>  
        

        </div>
    )
}

export default Trending