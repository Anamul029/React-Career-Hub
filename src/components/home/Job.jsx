import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const {id, logo, company_name, job_title, remote_or_onsite, salary, location, job_type } = job;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-8">
                    <button className="p-3 btn">{remote_or_onsite}</button><button className="btn p-3">{job_type}</button>
                </div>
                <p>Salary:{salary}</p>
                <div className="card-actions justify-start">
                    <Link to={`/job/${id}`}> 
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;