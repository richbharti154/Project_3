import searchbar from '../Components/searchbar.module.css';

const Searchbar = (props) => {

    return (
         <div>
            <input placeholder={props.placeholder} className={searchbar.searchButton}  />
         </div>
    )
}

export default Searchbar