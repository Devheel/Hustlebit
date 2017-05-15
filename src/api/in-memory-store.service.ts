import { InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryStoreService implements InMemoryDbService {
  createDb() {
    const jobs = [
      {
        'title': 'Design a full website',
        'id': 1,
        'postedOn': '22/11/2017',
        'bids': 32,
        'postedBy': 'yassbaat',
        'category': 'web design',
        'ends': '30/11/2017',
        'prize': 50,
        'isOpen': true,
        'tags': {
          '0': 'Coding',
          '1': 'Design',
          '2': 'Angular'
        }
      },
      {
        'title': 'Full stack developer',
        'id': 2,
        'postedOn': '24/11/2017',
        'bids': 12,
        'postedBy': 'yassbaat',
        'category': 'web development',
        'ends': '30/11/2018',
        'prize': 350,
        'isOpen': false,
        'tags': {
          '0': 'Full Stack',
          '1': 'TypeScript',
          '2': 'ES6'
        }
      }
    ];
    return {jobs};
  }

}