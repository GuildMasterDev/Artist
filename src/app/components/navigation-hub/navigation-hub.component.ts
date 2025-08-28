import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  resources: Resource[];
}

interface Resource {
  name: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-navigation-hub',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-hub.component.html',
  styleUrls: ['./navigation-hub.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class NavigationHubComponent {
  categories: ResourceCategory[] = [
    {
      id: 'tools',
      title: 'Creative Tools',
      description: 'Digital art software, DAWs, and creative applications',
      icon: '🎨',
      color: '#FF6B6B',
      resources: [
        { name: 'Adobe Creative Cloud', url: 'https://www.adobe.com/creativecloud.html', description: 'Industry standard creative suite' },
        { name: 'Procreate', url: 'https://procreate.art/', description: 'Digital illustration app' },
        { name: 'Blender', url: 'https://www.blender.org/', description: 'Free 3D creation suite' },
        { name: 'Ableton Live', url: 'https://www.ableton.com/', description: 'Music production software' },
        { name: 'Figma', url: 'https://www.figma.com/', description: 'Collaborative design tool' }
      ]
    },
    {
      id: 'learning',
      title: 'Learning Resources',
      description: 'Tutorials, courses, and educational content',
      icon: '📚',
      color: '#4ECDC4',
      resources: [
        { name: 'Proko', url: 'https://www.proko.com/', description: 'Art instruction videos' },
        { name: 'Domestika', url: 'https://www.domestika.org/', description: 'Creative courses' },
        { name: 'Skillshare', url: 'https://www.skillshare.com/', description: 'Online learning community' },
        { name: 'YouTube Creator Hub', url: 'https://www.youtube.com/creators/', description: 'Video creation resources' },
        { name: 'Drawabox', url: 'https://drawabox.com/', description: 'Free drawing fundamentals' }
      ]
    },
    {
      id: 'inspiration',
      title: 'Inspiration Gallery',
      description: 'Museums, portfolios, and art collections',
      icon: '✨',
      color: '#95E1D3',
      resources: [
        { name: 'Behance', url: 'https://www.behance.net/', description: 'Creative portfolios' },
        { name: 'ArtStation', url: 'https://www.artstation.com/', description: 'Digital art showcase' },
        { name: 'Dribbble', url: 'https://dribbble.com/', description: 'Design inspiration' },
        { name: 'Google Arts & Culture', url: 'https://artsandculture.google.com/', description: 'Virtual museum tours' },
        { name: 'DeviantArt', url: 'https://www.deviantart.com/', description: 'Art community' }
      ]
    },
    {
      id: 'community',
      title: 'Community & Projects',
      description: 'Connect with other artists and collaborate',
      icon: '🤝',
      color: '#F38181',
      resources: [
        { name: 'Reddit r/Art', url: 'https://www.reddit.com/r/Art/', description: 'Art discussion forum' },
        { name: 'Discord Art Communities', url: 'https://discord.com/servers/art', description: 'Real-time chat' },
        { name: 'Polywork', url: 'https://www.polywork.com/', description: 'Professional collaboration' },
        { name: 'Indie Hackers', url: 'https://www.indiehackers.com/', description: 'Creative entrepreneurs' },
        { name: 'Product Hunt', url: 'https://www.producthunt.com/', description: 'Discover new tools' }
      ]
    },
    {
      id: 'assets',
      title: 'Asset Libraries',
      description: 'Free resources, textures, and materials',
      icon: '📦',
      color: '#AA96DA',
      resources: [
        { name: 'Unsplash', url: 'https://unsplash.com/', description: 'Free stock photos' },
        { name: 'Freepik', url: 'https://www.freepik.com/', description: 'Graphics and vectors' },
        { name: 'Poly Haven', url: 'https://polyhaven.com/', description: '3D assets and HDRIs' },
        { name: 'Font Awesome', url: 'https://fontawesome.com/', description: 'Icon library' },
        { name: 'Google Fonts', url: 'https://fonts.google.com/', description: 'Free typography' }
      ]
    },
    {
      id: 'marketplace',
      title: 'Art Marketplace',
      description: 'Sell and showcase your artwork',
      icon: '💎',
      color: '#FCBAD3',
      resources: [
        { name: 'Etsy', url: 'https://www.etsy.com/', description: 'Handmade and vintage' },
        { name: 'Society6', url: 'https://society6.com/', description: 'Print on demand' },
        { name: 'Gumroad', url: 'https://gumroad.com/', description: 'Digital products' },
        { name: 'OpenSea', url: 'https://opensea.io/', description: 'NFT marketplace' },
        { name: 'Patreon', url: 'https://www.patreon.com/', description: 'Creator subscriptions' }
      ]
    }
  ];

  selectedCategory: ResourceCategory | null = null;

  selectCategory(category: ResourceCategory): void {
    this.selectedCategory = this.selectedCategory === category ? null : category;
  }

  openResource(url: string): void {
    if ((window as any).electronAPI) {
      (window as any).electronAPI.openExternal(url);
    } else {
      window.open(url, '_blank');
    }
  }
}