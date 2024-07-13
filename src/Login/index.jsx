import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

export default function Login() {
    return (
        <div className="font-Poppins w-full h-[100vh] flex justify-center items-center bg-[#FAE6CA]">
            <div className="flex w-[50vw] h-[50vh] justify-center gap-[80px] items-center rounded-full bg-[#EF6D7A]">
                <div className="flex flex-col gap-[30px] justify-center">
                    <div className="flex justify-evenly items-center text-white rounded-xl w-[250px] h-[50px] bg-[#507DC0]">
                        <FaFacebookF size={30} />
                        <p>Login with Facebook</p>
                    </div>
                    <div className="flex justify-evenly items-center text-white rounded-xl w-[250px] h-[50px] bg-[#64CCF1]">
                        <FaTwitter size={30} />
                        <p>Login with Twitter</p>
                    </div>
                    <div className="flex justify-evenly items-center text-white rounded-xl w-[250px] h-[50px] bg-[#DF4930]">
                        <TiSocialGooglePlus size={30} />
                        <p>Login with Google+</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="w-[3px] h-[80px] border-none rounded-2xl bg-[#FAE6CA]">

                    </div>
                    <div className="w-[50px] h-[50px] border-4 rounded-full flex items-center justify-center border-[#FAE6CA]">
                        <p><strong>OR</strong></p>
                    </div>
                    <div className="w-[3px] h-[80px] border-none border-2 rounded-2xl bg-[#FAE6CA]">

                    </div>
                </div>
                <div className="flex flex-col justify-center gap-[30px]">
                    <div className="flex justify-center items-center gap">
                        <strong className='text-[25px]'>Sign In Manually</strong>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[8px]">
                        <input className='w-[250px] h-[50px] pl-[20px] rounded-xl placeholder-black'
                         type="text" placeholder='Username or email' />
                        <input className='w-[250px] h-[50px] pl-[20px] rounded-xl placeholder-black'
                         type="password" placeholder='Password' />
                    </div>
                    <div className="flex justify-center items-center">
                            <button className='bg-[#FAE6CA] flex justify-center items-center text-[18px] text-black font-bold w-[80px] h-[50px] rounded-xl'
                            >LOGIN</button>
                    </div>
                    <div className="flex justify-center gap-[5px] items-center">
                        <Link to='./cadastro'>
                            <p className='text-[#FAE6CA]'><strong>Register Now</strong></p>
                        </Link>
                        <div className="w-[5px] h-[20px] flex border-none rounded-2xl bg-[#FAE6CA]">

                        </div>
                        <p className='text-black'>Forgot Password?</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}