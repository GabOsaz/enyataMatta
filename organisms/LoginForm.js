import { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { emailRegex, passwordRegex } from "../utilities/regex";
import { useRouter } from 'next/router'

function LoginForm() {
    const router = useRouter()
    const [ password, setPassword ] = useState({
        error: false,
        value: ""
    });

    const [ email, setEmail ] = useState({
        error: false,
        value: ""
    })

    const [showEmailError, setShowEmailError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password.error || email.error || !password.value || !email.value) return;
        router.push('overview');
    };

    const handleEmailChange = (e) => {
        // Trim value & convert to lowercase
        const value = e.target.value.trim().toLowerCase();
    
        // Test if email is valid
        const isValidEmail = emailRegex.test(value);
    
        setEmail({
          value,
          error: !isValidEmail
        });
    
        // Hide error message if fixed.
        isValidEmail ? setShowEmailError(false) : setShowEmailError(true)
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value
    
        // Test if email is valid
        const isValidPassword = passwordRegex.test(value);
    
        setPassword({
          value,
          error: !isValidPassword
        });
    
        // Hide error message if fixed.
        isValidPassword ? setShowPasswordError(false) : setShowPasswordError(true)
    };

  return (
    <div className="py-9 px-16 rounded-lg border border-border-color border-opacity-30">
        <div className="font-semibold text-2xl text-[#434854]"> Login </div>
        <div className="mt-2 text-base font-normal text-[#737373]"> Kindly enter your details to log in </div>

        <form onSubmit={e => handleSubmit(e)} className="mt-[62px] flex flex-col w-[335px] space-y-8">
            <div className="">
                <Input
                    label='Email Address'
                    value={email.value}
                    onChange={(e) => handleEmailChange(e)}
                    type='text'
                    error={email.error}
                    register={() => {}}
                />
                {showEmailError && <p className="w-full text-red-500 text-xs mt-1">Please enter a valid email address.</p>}
            </div>

            <div className="">
                <Input
                    label='Password'
                    value={password.value}
                    onChange={(e) => handlePasswordChange(e)}
                    type='password'
                    error={password.error}
                    register={() => {}}
                />
                {showPasswordError && <p className="w-full text-red-500 text-xs mt-1">Passwords must contain at least one letter and number, and be at least 8 characters long.</p>}
            </div>

            <Button 
                disabled={password.error || email.error || !password.value || !email.value}
                text='Log in'
                extraStyles='font-normal bg-primaryBlue text-white w-full py-3 text-base rounded-[6px]'
            />
        </form>

        <div className="mt-6 font-normal text-sm text-primaryBlue text-center cursor-pointer"> Forgot your password? </div>

        <div className="mt-24 text-center text-xs text-[#303B54] font-normal space-x-1">
            <span className="underline cursor-pointer"> Privacy Policy </span>
            <span className="text-text-color-3"> and </span>
            <span className="underline cursor-pointer"> Terms of Services </span>
        </div>

    </div>
  )
}

export default LoginForm