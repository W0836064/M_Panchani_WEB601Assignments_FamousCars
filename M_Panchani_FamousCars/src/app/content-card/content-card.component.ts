// content-card.component.ts
import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList = new ContentList();

  constructor() {
    this.contentList.add({
      id: 1,
      title: 'Rolls Royce',
      description: 'Luxury at its finest, the Rolls Royce is a symbol of elegance and opulence.',
      creator: 'Sir Henry Royce',
      imgURL: 'assets/Img/Img1.jpg',
      type: 'Luxury',
      tags: ['Luxury', 'High-End', 'Status Symbol']
    });

    this.contentList.add({
      id: 2,
      title: 'Bentley',
      description: 'Known for its blend of luxury and performance, the Bentley is a timeless classic.',
      creator: 'W.O. Bentley',
      imgURL: 'assets/Img/Img2.jpg',
      type: 'Classic',
      tags: ['Luxury', 'Performance', 'Timeless Design']
    });

    this.contentList.add({
      id: 3,
      title: 'Ferrari',
      description: 'A symbol of speed and passion, Ferrari cars are synonymous with the thrill of driving.',
      creator: 'Enzo Ferrari',
      imgURL: 'assets/Img/Img3.jpg',
      type: 'Sport',
      tags: ['Sports Car', 'Speed', 'Passion']
    });
  }

  ngOnInit(): void {

  }
}
