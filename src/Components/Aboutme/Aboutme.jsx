import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { BsGithub, BsLinkedin } from 'react-icons/bs';


const Aboutme = () => {
    const [text] = useTypewriter({
        words: ['ABOUT ME', 'ABOUT ME', 'ABOUT ME'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <div className="bg-slate-900">
          <div>
          <h2 className='text-center'>
                <span className='text-4xl  font-bold bg-gradient-to-r from-red-500  via-blue-500 to-green-500 text-transparent bg-clip-text'>{text}</span>
                <Cursor cursorColor='green' />
            </h2> 
            </div> 
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="... ">
                <div className=''>
                            <img src="https://i.ibb.co/bvfCWLt/Whats-App-Image-2024-01-20-at-11-53-57-26e5f3c7-removebg-preview.png" alt="" className="text-center rounded-md object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 animate-border i nline-block bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1 border-4 border-[bg-gradient-to-r from-yellow-500 via-red-500 to-green-500 bg-[length:400%_400%]]" />
                        </div>
                </div>
                <div className="... text-white">
                    <h2 className='text-2xl bg-gradient-to-r from-red-500  via-blue-500 to-green-500 text-transparent bg-clip-text mb-0 lg:mb-3'>FRONT END DEVELOPER</h2>
                    <p className='text-[#848484] mb-0 lg:mb-2'>React Developers play a crucial role in frontend development, contributing to visually appealing and user-friendly web applications. With their skills, businesses can create web applications that load quickly, perform well, and adapt seamlessly to various screen sizes and devices.</p>
                    <h3 className='flex items-center text-xl text-white mb-0 lg:mb-2'><MdEmail /> afrin12490@gmail.com</h3>
                    <div className='flex text-3xl gap-4'>
                        <FaFacebook className='text-[#3f3ff4]'></FaFacebook>
                        <BsLinkedin />
                        <FaTwitter />
                        <BsGithub />
                        <FaInstagramSquare />
                    </div>
                </div>
             
            </div>         
        </div>
        
    );
};

export default Aboutme;