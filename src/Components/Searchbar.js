import searchbar from '../Components/searchbar.module.css';


const Searchbar = (props) => {
console.log(props.placeholder)
    return (
         <div>
            <input placeholder={props.placeholder} className={searchbar.searchButton}  />
         </div>
    )
}

export default Searchbar