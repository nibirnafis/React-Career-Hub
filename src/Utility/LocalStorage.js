const getStoredJobApplications = () => {
    const storedApplications = localStorage.getItem('job-applications')
    if(storedApplications){
        return JSON.parse(storedApplications)
    }
    console.log(storedApplications)
    return []
}

const saveJobApplication = id => {
    const storedJobApplication = getStoredJobApplications()
    const ifExist = storedJobApplication.find(jobId => jobId === id)
    if(!ifExist){
        storedJobApplication.push(id)
        localStorage.setItem("job-applications", JSON.stringify(storedJobApplication))
    }
}

export { getStoredJobApplications, saveJobApplication }