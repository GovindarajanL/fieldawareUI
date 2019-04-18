export class AssignedJobs {

    job:string;
    jobLocation:string;
    jobDate:string;
    assignedTo:string;

    getJob(){
            return this.job;
    }

    setJob(val){
        this.job = val;
    }

    getJobLocation(){
            return this.jobLocation;
    }

    setJobLocation(val){
        this.jobLocation = val;
    }

    getJobDate(){
        return this.jobDate;
    }

    setJobDate(val){
        this.jobDate = val;
    }   

    constructor(job,jobloc,jobDate){
        this.job = job;
        this.jobLocation = jobloc;
        this.jobDate = jobDate;
    }

}
