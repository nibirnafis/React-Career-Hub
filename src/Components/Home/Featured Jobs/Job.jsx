import { Link } from "react-router-dom";


const Job = ({job}) => {

    const {id, logo, job_title, job_type, remote_or_onsite, company_name} = job

    return (
        <div className="p-[40px] border-[1px] border-slate-600 rounded-[8px]">
            <div className="mb-[32px]">
                <img src={logo} alt="" />
            </div>
            <p className="font-bold text-[24px] mb-[8px]">{job_title}</p>
            <p className="mb-[16px]">{company_name}</p>
            <div className="flex mb-[16px]">
                <p className="py-[9px] px-[19px] mr-3 border-[1px]">{remote_or_onsite}</p>
                <p className="py-[9px] px-[19px] border-[1px]">{job_type}</p>
            </div>
            <Link to={`/job-details/${id}`}>
                <button className="bg-violet-800 py-[10px] px-[18px] rounded-[8px]">View Details</button>
            </Link>
        </div>
    );
};

export default Job;