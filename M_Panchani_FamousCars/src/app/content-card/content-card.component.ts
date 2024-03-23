// src/app/content-card/content-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
  
})
export class ContentCardComponent {
  @Input() content!: Content;
  @Output() imageClick: EventEmitter<string> = new EventEmitter();
  @Input() boxShadow: boolean = false; // Declare boxShadow input property
  constructor() {}
  onImageClick() {
    // Add your logic here
    console.log('Image clicked!');
  }
  
}