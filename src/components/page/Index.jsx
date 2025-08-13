import work from '../../image/work.png'
import facebook from '../../image/facebook.png'
import link from '../../image/link.png'
import insta from '../../image/insta.png'

export default function Index(){

    return(
        <>
            <div className='m-10'>
                <header className="flex gap-7 items-center justify-between">
                    <div className="flex gap-7 items-center">
                        <a className="text-2xl focus:text-[#232028] text-gray-400 font-bold hover:text-[#232028] cursor-pointer" href="#">Shortly</a>
                        <a className="focus:text-[#232028] text-gray-400 font-bold hover:text-[#232028] cursor-pointer" href="#">Features</a>
                        <a className="focus:text-[#232028] text-gray-400 font-bold hover:text-[#232028] cursor-pointer" href="#">Pricing</a>
                        <a className="focus:text-[#232028] text-gray-400 font-bold hover:text-[#232028] cursor-pointer" href="#">Resources</a>
                    </div>
                    
                    <div className="flex gap-7 items-center">
                        <a className="focus:text-[#232028] text-gray-400 font-bold hover:text-[#232028] cursor-pointer" href="#">Login</a>
                        <div className="text-white rounded-full px-8 pt-2 pb-2 font-bold bg-[#6B63FF] cursor-pointer">Sign Up</div>
                    </div>
                </header>
                <section className='flex justify-between items-center mt-10'>
                    <div className=''>
                        <h1 className="text-[#232028] font-bold text-6xl">More than just <br/> shorter links</h1>
                        <p className="text-gray-400 mt-2">Build your brand's recognition and get detailed <br/> insights on how your links are performing.</p>
                        <button className="bg-[#6B63FF] cursor-pointer text-white font-bold rounded-full p-2 px-6 mt-5">Get Started</button>
                    </div>

                    <div className=''>
                        <img src={work} alt="" className='w-lg'/>
                    </div>
                </section>
                <section className='mt-10'>
                    <div className='bg-[#4b406a] w-3xl p-10 rounded-md flex gap-4 '>
                        <input className='bg-white border-white w-md rounded-md p-2' type="search" name="" id="" placeholder='shorten a link here...' />
                        <button className="bg-[#6B63FF] cursor-pointer text-white font-bold rounded-md p-2 px-6">shorten it</button>
                    </div>
                </section>

                <section className='mt-10 bg-[#eff1f5]'>
                    <div>
                        <h2 className='text-[#232028] font-bold text-2xl text-center'>Advanced statistics</h2>
                        <p className='text-center text-gray-400 p-5'>Track how your links are performing across  the web with<br/>our advanced statistics dashboard</p>
                    </div>
                </section>

                <section>
                    <div className='bg-[#4b406a] p-10 items-center justify-center flex flex-col'>
                        <h1 className='text-white font-bold text-3xl'>Boost your links today</h1>
                        <button className='bg-[#6B63FF] p-2 mt-6 px-6 cursor-pointer text-white font-bold rounded-full'>Get Started</button>
                    </div>
                </section>

                <footer className='bg-[#232028]'>
                    <div className='flex text-white justify-around p-10'>
                        <div>
                            <h1 className='text-xl font-bold'>Shortly</h1>
                        </div>
                            <div>         
                                <h3 className='text-sm font-bold'>Features</h3>
                                <ul className='text-sm mt-4 leading-relaxed'>
                                    <li>Link Shortening</li>
                                    <li>Branded Links</li>
                                    <li>Analytics</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className='text-sm font-bold'>Resources</h3>
                                <ul className='text-sm mt-4 leading-relaxed'>
                                    <li>Blog</li>
                                    <li>Developers</li>
                                    <li>Support</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className='text-sm font-bold'>Company</h3>
                                <ul className='text-sm mt-4 leading-relaxed'>
                                    <li>About</li>
                                    <li>Our Time</li>
                                    <li>Careers</li>
                                    <li>Contact</li>
                                </ul>
                            </div>

                            <div className='flex gap-5'>
                                <img className='w-5 h-5' src={facebook} alt="" />
                                <img className='w-5 h-5' src={link} alt="" />
                                <img className='w-5 h-5' src={insta} alt="" />
                            </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
