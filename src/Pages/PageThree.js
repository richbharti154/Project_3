import pagethree from '../Pages/pagethree.module.css'
import Input from '../Atoms/Input'

const PageThree = () => {
    const userName = 'Name'
    const email = 'Email'
    const type = 'date'

    return(
        <div className={pagethree.mainComponent}>

         <div className={pagethree.container}>
         <div className={pagethree.paragraph1}>
            <p>Step 1 of 5</p>
         </div>   
         <div className={pagethree.heading}>
            <h1>Create your account</h1>
         </div>
         <div className={pagethree.inputfieldone}>
          <Input placeHolder={userName} />  
          <Input placeHolder={email}    />
         </div>
         <div className={pagethree.dob}>
          <h3 className={pagethree.headingDob}>Date of birth</h3>
         </div>
         <div className={pagethree.dobParagraph}>
         <p className={pagethree.paragraphDob}>This will not be shown publicly. Confirm your own age, even if this<br/> account is for a business, a pet, or something else.</p>  
         </div>
        <div className={pagethree.InputDob} >
            <input  placeholder='Enter BirthDate' className={pagethree.inputFieldtwo} type='date' />
        </div>  

        </div>    
        </div>
    )
}
export default PageThree