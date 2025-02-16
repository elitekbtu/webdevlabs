import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      name: 'Samsung Galaxy S24 Ultra 1TB',
      description: 'Смартфон Samsung Galaxy S24 Ultra 1TB титан черный',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      name: 'Samsung Galaxy S24 Plus 512GB',
      description: 'Смартфон Samsung Galaxy S24 Plus 512GB черный',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hce/h74/84963707191326.png?format=gallery-medium',
      name: 'Samsung Galaxy S24 256GB',
      description: 'Смартфон Samsung Galaxy S24 256GB черный',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h74/84963707191326.png?format=gallery-medium',
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd8/hfc/86302547968030.jpg?format=gallery-medium',
      name: 'Apple iPhone 15 Pro 256GB',
      description: 'Смартфон Apple iPhone 15 Pro 256GB серый титан',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-belyi-113138285/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd8/hfc/86302547968030.jpg?format=gallery-medium',
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/he9/86319872344094.jpg?format=gallery-medium',
      name: 'Apple iPhone 15 Pro Max 256GB',
      description: 'Смартфон Apple iPhone 15 Pro Max 256GB серый титан',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h55/he9/86319872344094.jpg?format=gallery-medium',
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h01/h5f/86303746293790.jpg?format=gallery-medium',
      name: 'Apple iPhone 15 128GB',
      description: 'Смартфон Apple iPhone 15 128GB черный',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h01/h5f/86303746293790.jpg?format=gallery-medium',
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb9/h78/86320811999262.jpg?format=gallery-medium',
      name: 'Apple iPhone 15 Plus 256GB',
      description: 'Смартфон Apple iPhone 15 Plus 256GB черный',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-plus-256gb-chernyi-113138036/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb9/h78/86320811999262.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h67/h01/84526692565022.png?format=gallery-medium',
      name: 'Xiaomi Redmi 13C 8 ГБ/256 ГБ',
      description: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-sinii-114695505/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h67/h01/84526692565022.png?format=gallery-medium'
      ]

    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7d/h8d/84949020835870.jpg?format=gallery-medium',
      name: 'Poco M6 Pro 8 ГБ/256 ГБ',
      description: 'Смартфон Poco M6 Pro 8 ГБ/256 ГБ черный',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/poco-m6-pro-nfc-8-gb-256-gb-chernyi-115989051/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7d/h8d/84949020835870.jpg?format=gallery-medium',
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h1c/84932692574238.jpg?format=gallery-medium',
      name: 'Samsung Galaxy A25 5G 6 ГБ/128 ГБ',
      description: 'Смартфон Samsung Galaxy A25 5G 6 ГБ/128 ГБ темно-синий',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a25-5g-6-gb-128-gb-temno-sinii-115937459/?c=750000000', 
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h1c/84932692574238.jpg?format=gallery-medium',
      ]
    }
  ];

  shareProduct(link: string) {
    const message = `Check out this product: ${link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
    window.open(telegramUrl, '_blank');
  }
}