import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../Applied Job/AppliedJob";

const AppliedJobs = () => {

    const [ appliedIds, setAppliedIds ] = useState([])
    const allJobs = useLoaderData()

    useEffect(()=>{
        const storedApplicationsId = localStorage.getItem('job-applications')
        if(storedApplicationsId){
            const appliedJobsIds = JSON.parse(storedApplicationsId)
            const appliedJobsIdsNum = appliedJobsIds.map(id => parseInt(id))
            const appliedJobs = allJobs.filter(job => appliedJobsIdsNum.includes(job.id))
            setAppliedIds(appliedJobs)
        }
    }, [])


    return (
        <div className="flex flex-col max-w-[1320px] m-auto">
            <h3 className="font-extrabold text-[32px] m-auto py-[40px]">Applied Jobs</h3>
            <div>
                {
                    appliedIds.map((appliedId, idx) => <AppliedJob key={idx} appliedId={appliedId}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;