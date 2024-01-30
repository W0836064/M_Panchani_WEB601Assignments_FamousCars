// content-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent {
  contentArray = [
    {
      id: 1,
      title: 'Classic Cars Collection',
      image: 'assets/Img/Img2.jpg',
      description: 'Explore a stunning collection of classic cars from different eras.',
      creator: 'Vintage Car Enthusiasts',
      tags: ['Classic', 'Vintage', 'Cars'],
    },
    {
      id: 2,
      title: 'Speedy Sports Cars Race',
      image: 'assets/Img/Img3.jpg',
      description: 'Witness high-speed races featuring the latest sports car models.',
      creator: 'Speedy Racing League',
      type: 'Race',
      tags: ['High Speed', 'Competition', 'Sports Cars'],
    },
    {
      id: 3,
      title: 'Evolution of Supercars',
      image: 'assets/Img/Img1.jpg',
      description: 'Discover the evolution and technological advancements in the world of supercars.',
      creator: 'Auto Tech Innovators',
      type: 'Documentary',
      tags: ['Evolution', 'Supercars', 'Technology'],
    },
    {
      id: 4,
      title: 'Best Off-Road Vehicles',
      image: 'assets/Img/Img2.jpg',
      description: 'Explore the capabilities of the best off-road vehicles tackling challenging terrains.',
      creator: 'Adventure Off-Roaders',
      type: 'Highlights',
      tags: ['Off-Road', 'Adventure', 'Vehicles'],
    },
    {
      id: 5,
      title: 'Luxury Car Showroom Tour',
      image: 'assets/Img/Img3.jpg',
      description: 'Take a virtual tour of a luxury car showroom showcasing the latest models.',
      creator: 'Luxury Cars Inc.',
      type: 'Tour',
      tags: ['Luxury', 'Showroom', 'Cars'],
    }
    // Add more car-related content items as needed
  ];

  handleImageClick(id: number, title: string) {
    console.log(`Clicked on image with ID: ${id} and Title: ${title}`);
  }
}
