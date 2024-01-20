// helper-files/content-list.ts
import { Content } from './content-interface';

export class ContentList {
  private contentArray: Content[] = [];

  constructor() {}

  get content(): Content[] {
    return this.contentArray;
  }

  add(item: Content): void {
    this.contentArray.push(item);
  }

  getCount(): number {
    return this.contentArray.length;
  }

  getContentAtIndex(index: number): string {
    const contentItem = this.contentArray[index];
    return `
      <div>
        <h3>${contentItem.title}</h3>
        <p>Description: ${contentItem.description}</p>
        <p>Creator: ${contentItem.creator}</p>
        ${contentItem.imgURL ? `<img src="${contentItem.imgURL}" alt="Image">` : ''}
        <p>Type: ${contentItem.type || 'N/A'}</p>
      </div>
    `;
  }
}
