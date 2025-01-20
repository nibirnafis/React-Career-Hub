import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])

    return (
        <>
        <div className="item-center mb-[130px]">
            <div className='text-center mb-[32px]'>
                <p className="font-bold text-[48px] ">Featured Jobs</p>
                <p className="font-light text-[16px] ">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
                {
                    jobs.map(job=> <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="flex mt-[40px]">
                <button className="font-bold bg-violet-800 py-[10px] px-[18px] rounded-[8px] m-auto">See All Jobs</button>
            </div>
        </div>
        </>
    );
};

export default FeaturedJobs;