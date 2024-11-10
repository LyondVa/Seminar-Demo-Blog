import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  articles = [
    { id: 1, title: 'Getting Started with TypeScript', imageUrl: 'https://media.licdn.com/dms/image/D4D12AQGB2QPC4G45IQ/article-cover_image-shrink_720_1280/0/1707750533629?e=2147483647&v=beta&t=4gFOtQUWUWwqjrJz3fWVXbKxFCACSgiok9HZBdpptig' },
    { id: 2, title: 'Understanding Dependency Injection', imageUrl: 'https://images.ctfassets.net/cjwb7umaxoxv/5h8hh06UGf8vdPJWyDY7cW/368601787fafc4e01765705856e1e6d2/codedependency.png' },
    { id: 3, title: 'Building Reactive Forms', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61f6HfYXNFqrPbZGwUPQt73RTaWy0G1knqw&s' },
    { id: 4, title: 'Angular Routing Guide', imageUrl: 'https://miro.medium.com/v2/resize:fit:1000/0*tjHPRoTbmmVDrSW3.jpg' },
  ];

  ngOnInit(): void {}
}