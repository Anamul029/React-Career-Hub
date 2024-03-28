import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    const INT = parseInt(id)
    const job=jobs.find(job=>INT===job.id)
    console.log(job)
    return (
        <div>
            <h4>hello job details</h4>
        </div>
    );
};

export default JobDetails;