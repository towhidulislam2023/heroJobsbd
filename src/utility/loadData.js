const loadJobs=async()=>{
    const loadedData = await fetch('jobs.json')
    const jobs=await loadedData.json()
    console.log(jobs);
    return jobs
}
export { loadJobs }