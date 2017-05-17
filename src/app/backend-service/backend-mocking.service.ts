import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {JobInterface} from './job.model';
import {GONFIG} from './config';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ExceptionService} from '../core/exception.service';

const url = GONFIG.jobs;

@Injectable()
export class BackendMockingService {
  constructor( public http: Http, public exceptionService: ExceptionService ) {}

  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return <T>(body && body.data || {});
  }
  getJobs() {
    // TODO add a spinner service here
    return <Observable<JobInterface[]>>this.http
      .get(url)
      .map(res => this.extractData<JobInterface[]>(res))
      .catch(this.exceptionService.catchBadResponse);
    // TODO end the spinner here by calling finnaly on the observable
  }
  getJob(id) {
    return <Observable<JobInterface>>this.http
      .get(`${url}/${id}`)
      .map(res => this.extractData<JobInterface>(res))
      .catch(this.exceptionService.catchBadResponse);
  }
}
