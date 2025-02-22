import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: any; 
  @Output() delete = new EventEmitter<number>(); 
  mainImageUrl: string = '';
  showShareDropdown = false;

  ngOnInit(): void {
    if (this.product && this.product.images && this.product.images.length > 0) {
      this.mainImageUrl = this.product.images[0];
    }

    const savedLikes = localStorage.getItem(`product_${this.product.id}_likes`);
    if (savedLikes) {
      this.product.likes = parseInt(savedLikes, 10);
    }
  }

  setMainImage(imageUrl: string): void {
    this.mainImageUrl = imageUrl;
  }

  likeProduct() {
    this.product.likes++;
    localStorage.setItem(`product_${this.product.id}_likes`, this.product.likes.toString());
  }

  shareOnWhatsApp() {
    const message = `Посмотрите этот товар: ${this.product.name} - ${this.product.kaspiLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  }

  shareOnFacebook() {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.product.kaspiLink)}`;
    window.open(shareUrl, '_blank', 'noopener');
  }

  shareOnTelegram() {
    const message = `Посмотрите этот товар: ${this.product.name} - ${this.product.kaspiLink}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product.kaspiLink)}&text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.product.kaspiLink)
      .then(() => {
        alert('Ссылка скопирована в буфер обмена!');
      })
      .catch(err => {
        console.error('Не удалось скопировать ссылку: ', err);
        alert('Не удалось скопировать ссылку в буфер обмена.');
      });
  }

  deleteProduct() {
    this.delete.emit(this.product.id);
  }

  toggleShareDropdown() {
    this.showShareDropdown = !this.showShareDropdown;
  }
}