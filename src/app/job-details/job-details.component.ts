import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendMockingService } from '../backend-service/backend-mocking.service';
import { JobInterface } from '../backend-service/job.model';

@Component({
  selector: 'app-job-details',
  templateUrl: 'job-details.component.html',
  styleUrls: ['job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  private id: number;
  public data: JobInterface;

  constructor(public route: ActivatedRoute, public backend: BackendMockingService, public router: Router ) {  }

  ngOnInit() {
    this.route.params.map((params) => params['id'])
      .do(id => this.id = parseInt(id, 10))
      .subscribe(id => this.id = id);
    this.backend.getJob(this.id).subscribe(data => this.data = data);
  }
  backTohome() {
    this.router.navigate(['/home']);
  }


}
