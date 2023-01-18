import {useState} from 'react'
import Input from '../Atoms/Input.js'
import {isValidemail , isValidPassword} from '../Helper/Validations'

const SignIn = () => {
    const [ emailCapture , setEmailCapture] = useState()
    const [ passwordCapture , setPasswordCapture] = useState()
    const [ emailError , setEmailError] = useState(false)
    const [ passwordError , setPasswordError] = useState(false)

    const placeHolderEmail = ' @EmailAdress'
    const placeHolderPassword = ' @Password'

   function emailValidation (e){
    const emailValidated = isValidemail(e.target.value)
    setEmailCapture(e.target.value)
    setEmailError(!emailValidated)
   } 

   function passwordValidation (e) {
    const passwordValidated = isValidPassword(e.target.value)
    setPasswordCapture(e.target.value)
    setPasswordError(!passwordValidated)    
   }

    return (
        <div>
            <Input placeHolder = {placeHolderEmail} onChange = {emailValidation} />
            {/* {emailError && <p> Enter Valid Email</p>} */}
            <Input placeHolder = {placeHolderPassword} onChange = {passwordValidation} />
            {/* {passwordError && <p> Enter Valid Password</p>} */}

        </div>
    )
}
export default SignIn