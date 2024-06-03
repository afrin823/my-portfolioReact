import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { HiOutlineDownload } from "react-icons/hi";


const Banner = () => {

    const [text] = useTypewriter({
        words: ['Front End Developer', 'React Developer', 'JavaScript Developer'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <div>
            <section className=" bg-slate-900  bg-[url('https://i.ibb.co/RCLYHn5/bg.png')]" >
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-3xl font-bold leading-none sm:text-6xl bg-gradient-to-r from-blue-500  via-green-500 to-red-500 text-transparent bg-clip-text">Hello
                        </h1>
                        <h3 className='text-xl font-bold  bg-gradient-to-r from-red-500  via-blue-500 to-green-500 text-transparent bg-clip-text'>I am <span className='text-2xl'>SABIKUN NAHAR AFRIN</span>

                        </h3>
                        <h2>
                            <span className='text-3xl font-bold bg-gradient-to-r from-red-500  via-blue-500 to-green-500 text-transparent bg-clip-text'>{text}</span>
                            <Cursor cursorColor='red' />
                        </h2>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 text-[#636363]">Dictum aliquam porta in condimentum ac integer
                            <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button className="animate-border inline-block rounded-md bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold">Resume </a>
                            </button>
                            {/* <HiOutlineDownload /> */}
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Malesuada</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
                        <div className='animate-border i nline-block rounded-full bg-white bg-gradient-to-r from-yellow-500 via-red-500 to-green-500 bg-[length:400%_400%] p-1'>
                            <img src="https://i.ibb.co/KXk8XND/Whats-App-Image-2024-01-20-at-11-53-58-59f7e45c-removebg-preview.png" alt="" className="rounded-full object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 animate-border i nline-block bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1" />
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;