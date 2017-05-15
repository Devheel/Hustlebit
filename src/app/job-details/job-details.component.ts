import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: 'job-details.component.html',
  styleUrls: ['job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  private id: any;

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.map((params) => params['id'])
      .do(id => this.id = parseInt(id, 10))
      .subscribe(id => console.log(id));
  }
}
