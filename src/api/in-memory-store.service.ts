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
        'description': 'this is a simple full website design job that will take an average 2 to 3 months to complete and will be using angular 4 along side with a firebase backend',
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
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis purus neque. Cras tincidunt sit amet ex non rhoncus. Vestibulum facilisis aliquam ligula at pulvinar. In finibus sem sed auctor faucibus. Morbi molestie, augue at volutpat viverra, tellus erat ',
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
