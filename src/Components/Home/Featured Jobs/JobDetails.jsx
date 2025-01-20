import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../../../Utility/LocalStorage";

const JobDetails = () => {

    const jobDetail = useLoaderData()
    const {id} = useParams()
    const thisJob = jobDetail[id-1]
    const {logo, job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = thisJob
    const {phone, email, address} = contact_information

    const handleJobApplication = id => {
        saveJobApplication(id)
    }

    return (
        <>
        <p className="font-extrabold text-[32px] text-center mt-[80px]">Job Details</p>
        <div className="grid grid-cols-3 max-w-[1320px] my-[80px] mx-auto gap-6">
            <div className="flex flex-col gap-6 col-span-2">
                <div>
                    <img src={logo} alt="" />
                </div>
                <p><span className="font-bold text-[16px]">Job Description:</span> {job_description}</p>
                <p><span className="font-bold text-[16px]">Job Responsibility:</span> {job_responsibility}</p>
                <p><span className="font-bold text-[16px]">Job Requirements:</span> {educational_requirements}</p>
                <p><span className="font-bold text-[16px]">Job Experiences:</span> {experiences}</p>
            </div>
            <div className="flex flex-col p-[30px] bg-slate-800 rounded-[8px]">
                <div className="mb-8">
                    <p className="font-bold text-[20px]">Job Details</p>
                    <p>Salary: {salary}</p>
                    <p>Job title: {job_title}</p>
                </div>
                <div className="mb-8">
                    <p className="font-bold text-[20px]">Contact Information</p>
                    <p>Phone: {phone}</p>
                    <p>Email: {email}</p>
                    <p>Address: {address}</p>
                </div>
                <button onClick={()=>handleJobApplication(id)} className="bg-violet-800 py-[10px] px-[18px] rounded-[8px]">Apply</button>
            </div>
        </div>
        </>
    );
};

export default JobDetails;