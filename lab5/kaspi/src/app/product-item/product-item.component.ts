import { Component, Input, OnInit } from '@angular/core';
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
  mainImageUrl: string = ''; 

  ngOnInit(): void {
    if (this.product && this.product.images && this.product.images.length > 0) {
      this.mainImageUrl = this.product.images[0];
    }
  }

  setMainImage(imageUrl: string): void {
    this.mainImageUrl = imageUrl; 
  }

  likeProduct() {
    this.product.likes++;
  }

  shareOnWhatsApp() {
    const message = `Посмотрите этот товар: ${this.product.name} - ${this.product.kaspiLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  }

  shareOnFacebook() {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.product.kaspiLink)}`;
    window.open(shareUrl, '_blank');
  }

  shareOnTwitter() {
    const message = `Посмотрите этот товар: ${this.product.name}`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(this.product.kaspiLink)}`;
    window.open(shareUrl, '_blank');
  }

  shareOnVK() {
    const shareUrl = `https://vk.com/share.php?url=${encodeURIComponent(this.product.kaspiLink)}`;
    window.open(shareUrl, '_blank');
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.product.kaspiLink)
  }
}