import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface QuickAction {
  id: string;
  icon: string;
  tooltip: string;
  action: () => void;
}

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss']
})
export class QuickActionsComponent {
  isExpanded = false;
  
  actions: QuickAction[] = [
    {
      id: 'search',
      icon: '🔍',
      tooltip: 'Search resources',
      action: () => this.searchResources()
    },
    {
      id: 'favorites',
      icon: '⭐',
      tooltip: 'View favorites',
      action: () => this.viewFavorites()
    },
    {
      id: 'recent',
      icon: '🕐',
      tooltip: 'Recent items',
      action: () => this.viewRecent()
    },
    {
      id: 'random',
      icon: '🎲',
      tooltip: 'Random inspiration',
      action: () => this.getRandomInspiration()
    }
  ];

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  executeAction(action: QuickAction): void {
    action.action();
  }

  private searchResources(): void {
    console.log('Opening search...');
  }

  private viewFavorites(): void {
    console.log('Viewing favorites...');
  }

  private viewRecent(): void {
    console.log('Viewing recent items...');
  }

  private getRandomInspiration(): void {
    const inspirations = [
      'Try a new color palette today!',
      'Experiment with a different art style',
      'Draw something from your childhood',
      'Create art inspired by your favorite song',
      'Combine two unrelated concepts'
    ];
    const random = inspirations[Math.floor(Math.random() * inspirations.length)];
    alert(`Today\'s inspiration: ${random}`);
  }
}