import banner_img from './assets/banner_img.png'

const HeroSection = () => {
    return (
        <div className="flex justify-center bg-red-500 pt-[25px]">
            <div className='flex flex-col justify-center'>
                <p className="font-extrabold text-[80px] leading-tight">One Step <br />Closer To Your <br />
                Dream Job</p>
                <p className="font-light text-[16px] mt-[16px]">Explore thousands of job opportunities with all the <br />
                information you need. Its your future. Come find it. Manage all <br />
                your job application from start to finish.</p>
                <div className='mt-[32px]'>
                    <button className="font-extrabold text-[20px] py-[20px] px-[28px] bg-amber-400 rounded-[8px]">Get Started</button>
                </div>
            </div>
            <div className='flex justify-end'>
                <img src={banner_img} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;