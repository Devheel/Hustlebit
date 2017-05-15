import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobInterface } from '../backend-service/job.model';
import { BackendMockingService } from '../backend-service/backend-mocking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jobs: Array<JobInterface>;
  constructor(public router: Router, public backend: BackendMockingService ) { }

  getJobs() {
    this.backend.getJobs().subscribe( jobs => {
      this.jobs = jobs;
    });
  }
  ngOnInit() {
    this.getJobs();
  }
  toTheDetailsPage(id) {
    this.router.navigate(['job'], id);
  }
}
