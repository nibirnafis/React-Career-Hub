const AppliedJob = ({appliedId}) => {

    const {id, logo, job_title, job_type, remote_or_onsite, company_name, salary, location} = appliedId

    return (
        <div className="flex justify-between items-center p-[30px] border-[1px] border-slate-600 rounded-[8px] m-6">
            <div className="flex justify-center items-center gap-8">
                <div className="flex min-w-[240px] min-h-[240px] bg-slate-800 rounded-[8px]">
                    <img className="m-auto" src={logo} alt="" />
                </div>
                <div>
                    <p className="font-bold text-[24px] mb-[8px]">{job_title}</p>
                    <p className="mb-[16px]">{company_name}</p>
                    <div className="flex mb-[16px]">
                        <p className="py-[9px] px-[19px] mr-3 border-[1px]">{remote_or_onsite}</p>
                        <p className="py-[9px] px-[19px] border-[1px]">{job_type}</p>
                    </div>
                    <div className="flex">
                        <p className="mr-6">Location: {location}</p>
                        <p>Salary: {salary}</p>
                    </div>
                </div>
            </div>
            <div>
                <button className="bg-violet-800 py-[10px] px-[18px] rounded-[8px]">View Details</button>
            </div>
        </div>
    );
};

export default AppliedJob;