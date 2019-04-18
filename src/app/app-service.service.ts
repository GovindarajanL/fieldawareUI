import { Injectable } from '@angular/core';
import {AssignedJobs} from '../app/domain/assigned-jobs'

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }
  // Need to make the rest call and get the response from the AWS service
  getAssignedJobs(){

    var response:AssignedJobs[] = [];
    response.push(new AssignedJobs('JobId1',"Chennai","04-MAY-2019"));
    response.push(new AssignedJobs('JobId2',"Chennai","05-MAY-2019"));
    response.push(new AssignedJobs('JobId3',"Chennai","06-MAY-2019"));
    return response;
  }
}
