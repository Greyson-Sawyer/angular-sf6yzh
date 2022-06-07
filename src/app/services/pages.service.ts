import { Injectable } from '@angular/core';

export interface Page {
  title: string;
  shotBy: string;
  creatorLink: string;
  videoSrc: string;
  videoType: string;
  images: string[];
}

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  pages: Page[] = [
    {
      title: 'Emma',
      shotBy: '@AndrewGSalama',
      creatorLink: 'https://www.instagram.com/andrewgsalama/',
      videoSrc:
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/emma%2Femma_v23.mp4?alt=media&token=43c35544-67ec-4537-bb50-4cadabc3cfba',
      videoType: 'video/mp4',
      images: [
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        
      ],
    },
    {
      title: 'Emma',
      shotBy: '@AndrewGSalama',
      creatorLink: 'https://www.instagram.com/andrewgsalama/',
      videoSrc:
        'https://firebasestorage.googleapis.com/v0/b/greyson-color.appspot.com/o/emma%2Femma_v23.mp4?alt=media&token=43c35544-67ec-4537-bb50-4cadabc3cfba',
      videoType: 'video/mp4',
      images: [
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
  
      ],
    },
  ];
  constructor() {}
}
