import { Component } from '@angular/core';
import { AssignedJobs } from './domain/assigned-jobs';
import {AppServiceService} from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'field-scheduling';
  assignedJobs:AssignedJobs[];

  constructor(private appservice: AppServiceService) { }

  ngOnInit() {
    this.assignedJobs = this.appservice.getAssignedJobs();
  }

  
}
