import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  items = [
    'Heuring "Covered"',
    'In Car',
    'Baby Arif contributes',
    'Chad hits that Bubbly Mic',
    'Robo Betsy',
    'Sticking',
    'Angular Testing',
    'Build is broken',
    'I forgot what I did',
    'Meeting',
    'Bug',
    'Migration',
    'Cape Kick us off',
    'Turn around testing',
    'Conference Call',
    'Becca Has something for us',
    'Mouse on the mic',
    'Working in boomi',
    'Gap Analysis',
    'Release',
    'CLO claps',
    'Fax Service',
    'Fighting the Octopus',
    'Mic Feedback',
    'Mic Muted',
  ];

  constructor() {
  }

  public getItems() {
    return this.items;
  }

  shuffle() {
    for (let i = this.items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.items[i];
      this.items[i] = this.items[j];
      this.items[j] = temp;
    }
  }
}
