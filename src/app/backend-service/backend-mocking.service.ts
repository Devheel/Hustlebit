import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {JobInterface} from './job.model';
import {GONFIG} from './config';
import {Observable} from 'Rxjs/Observable';

let url = GONFIG.jobs;

@Injectable()
export class BackendMockingService {
  constructor( public http:Http){}

  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error(`Bad response status: ${res.status}`);
    }
    let body = res.json ? res.json() : null;
    return <T>(body && body.data || {});
  }

  getJobs(){
    return <Observable<JobInterface[]>>this.http
      .get(url)
      .map(res => this.extractData<JobInterface[]>(res))
      .catch(err => console.log(err))
  }
}
