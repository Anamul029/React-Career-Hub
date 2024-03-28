import { useEffect, useState } from "react";
import Job from "../home/Job";



const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);
    const [datalength,setDatalength]=useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-3xl text-center">Featured Job:{jobs.length}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt doloremque similique consectetur odit reprehenderit unde vitae consequuntur fugiat dolor saepe reiciendis, nisi explicabo in labore tempore sed rem eligendi?</p>
            </div>
            <div className="container mx-auto grid gap-24 md:grid-cols-2">
               {
                jobs.slice(0,datalength).map(job=><Job key={job.id} job={job}></Job>)
               }
            </div>
            <div className="flex justify-center">
                <div className={datalength===jobs.length&&'hidden'}>
                <button onClick={()=>setDatalength(jobs.length)} className="btn bg-slate-300">Show all Jobs</button>
                </div>
                
            </div>
        </div>
    );
};

export default FeaturedJob;