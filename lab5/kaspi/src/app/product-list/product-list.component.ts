import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() categoryId: number = 0;

  products = [
    {
        id: 1,
        categoryId: 1,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
        name: 'Смартфон Samsung Galaxy S24 Ultra 12GB/256GB Titanium Black',
        description: 'Samsung Galaxy S24 Ultra 12GB/256GB Titanium Black',
        rating: 4.9,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000'
    },
    {
        id: 2,
        categoryId: 1,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium',
        name: 'Ноутбук Apple MacBook Air 13 Late 2020 MGN63 серый',
        description: 'Apple MacBook Air 13 Late 2020 MGN63 серый',
        rating: 4.8,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h27/hec/63947824496670.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hc3/h83/63947832557598.jpg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAiOa9BhBqEiwABCdG87xvDWLGHEABAczStu0X5cct7RJui9ZEd0OGN3B3somKPJyz0wtBwRoCdqEQAvD_BwE'
    },
    {
        id: 3,
        categoryId: 1,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
        name: 'Наушники AirPods 3-го поколения Apple',
        description: 'Наушники AirPods 3-го поколения Apple',
        rating: 4.7,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/he8/h47/64362670358558.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h30/ha4/64362737860638.jpg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAiOa9BhBqEiwABCdG87xvDWLGHEABAczStu0X5cct7RJui9ZEd0OGN3B3somKPJyz0wtBwRoCdqEQAvD_BwE'
    },
    {
        id: 4,
        categoryId: 1,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hc4/hd7/83874224406558.jpg?format=gallery-medium',
        name: 'Смарт-часы Apple Watch Series 9 41mm Starlight Aluminium Case с Starlight Sport Band (MR8X3)',
        description: 'Смарт-часы Apple Watch Series 9 41mm Starlight Aluminium Case с Starlight Sport Band (MR8X3)',
        rating: 4.9,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/hc4/hd7/83874224406558.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h28/h01/83874224472094.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hbc/h43/83874224537630.jpg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-starlight-bezhevyi-113398424/?c=750000000'
    },
    {
        id: 5,
        categoryId: 1,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha8/h66/86274404515870.png?format=gallery-medium',
        name: 'Телевизор Xiaomi TV A Pro 65 65"',
        description: 'Телевизор Xiaomi TV A Pro 65 65"',
        rating: 4.6,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h15/hb2/86274404384798.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/he7/h25/86274404450334.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/ha8/h66/86274404515870.png?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/xiaomi-a-pro-l65ma-sru-165-sm-chernyi-120384149/?c=750000000'
    },

    {
        id: 6,
        categoryId: 2,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf2/hfe/64267519361054.jpg?format=gallery-medium',
        name: 'Куртка демисезонная мужская Columbia Pike Lake',
        description: 'Куртка демисезонная мужская Columbia Pike Lake',
        rating: 4.5,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/hf2/hfe/64267519361054.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h2c/hc5/64267522506782.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hfd/hc8/64267525521438.jpg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/demisezonnaja-kurtka-columbia-1958661-010-chernyi-l-102319001/?c=750000000'
    },
    {
        id: 7,
        categoryId: 2,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hb6/h45/86332256911390.jpg?format=gallery-medium',
        name: 'Кроссовки мужские Adidas Ownr.Thegame Lifestyle Баскетбольные',
        description: 'Кроссовки мужские Adidas Ownr.Thegame Lifestyle Баскетбольные',
        rating: 4.7,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/hb6/h45/86332256911390.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hb8/h54/86332256976926.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h7a/heb/86332257042462.jpg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/krossovki-adidas-breaknet-lifestyle-court-hp8961-teens-chernyi-34-120622554/?c=750000000'
    },
    {
        id: 8,
        categoryId: 2,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/p3a/21207502.jpg?format=gallery-medium',
        name: 'Худи женское Sela',
        description: 'Худи женское Sela',
        rating: 4.8,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pa8/p0f/21207497.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pa7/p3a/21207500.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pe0/p3a/21207502.jpg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/hudi-sela-276309158-krasnyi-m-133696978/?c=750000000'
    },
    {
        id: 9,
        categoryId: 2,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pd5/4921256.jpeg?format=gallery-medium',
        name: 'Джинсы мужские Levis 501',
        description: 'Джинсы мужские Levi\'s 501',
        rating: 4.6,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pef/pd5/4921256.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p17/pc7/4921264.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pf2/p6a/4921270.jpeg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/dzhinsy-svobodnogo-kroja-levis-29037-0078-temno-sinii-w36-l34-128994807/?c=750000000'
    },
    {
        id: 10,
        categoryId: 2,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pda/pda/18290303.jpeg?format=gallery-medium',
        name: 'Футболка Skims черный',
        description: 'Футболка Skims черный',
        rating: 4.9,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pda/pda/18290303.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pe1/p77/18290311.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p3a/p6a/18290315.jpeg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/futbolka-skims-031124-15-chernyi-44-132912107/?c=750000000'
    },
    {
        id: 11,
        categoryId: 3,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/heb/h08/63781743329310.jpg?format=gallery-medium',
        name: 'Шантарам',
        description: 'Шантарам',
        rating: 4.8,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/heb/h08/63781743329310.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h1c/h7a/63781743755294.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h53/h11/63781744279582.jpg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/roberts-g-d-shantaram-26013272/?c=750000000'
    },
    {
        id: 12,
        categoryId: 3,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h68/h0e/63813957550110.jpg?format=gallery-medium',
        name: 'Айн Рэнд Атлант расправил плечи',
        description: 'Айн Рэнд Атлант расправил плечи',
        rating: 4.9,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h68/h0e/63813957550110.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h23/h19/63813961023518.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h29/h79/63813963382814.jpg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/rend-a-atlant-raspravil-plechi-v-3-knigah-26003724/?c=750000000'
    },
    {
        id: 13,
        categoryId: 3,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h2c/h0d/86675860324382.jpg?format=gallery-medium',
        name: 'Мастер и Маргарита',
        description: 'Мастер и Маргарита',
        rating: 4.7,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h2c/h0d/86675860324382.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h00/he8/86675860357150.jpg?format=gallery-large',
            'https://resources.cdn-kaspi.kz/img/m/p/hef/h6b/86675860422686.png?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/bulgakov-m-a-master-i-margarita-105221836/?c=7500000000'
    },
    {
        id: 14,
        categoryId: 3,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h39/82589056991262.jpg?format=gallery-medium',
        name: '1Q84',
        description: '1Q84',
        rating: 4.9,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/hcb/h39/82589056991262.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hcb/h39/82589056991262.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hcb/h39/82589056991262.jpg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/murakami-h-1q84-tysjacha-nevest-sot-vosem-desjat-chetyre-kniga-2-ijul---sentjabr--112380491/?c=750000000'
    },
    {
        id: 15,
        categoryId: 3,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p11/p6f/5203786.jpg?format=gallery-medium',
        name: 'Дюна',
        description: 'Фрэнк Герберт Дюна',
        rating: 4.7,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p11/p6f/5203786.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pf4/p6e/5203787.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pd8/p6e/5203788.jpg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/gerbert-frenk-djuna-129068633/?c=750000000'
    },

    {
        id: 16,
        categoryId: 4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h96/h44/86318166212638.jpg?format=gallery-medium',
        name: 'Cковорода-гриль Tefal Unlimited G7222874 28 см',
        description: 'Сковорода-гриль Tefal Unlimited G7222874 28 см',
        rating: 4.9,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h96/h44/86318166212638.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h9d/hd8/86318166343710.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h9b/h07/86318166605854.jpg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/skovoroda-gril-tefal-unlimited-e2294074-26-sm-aljuminii-101040397/?c=750000000'
    },
    {
        id: 17,
        categoryId: 4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h56/h0a/85528965611550.jpg?format=gallery-medium',
        name: 'Гладильная доска Hausmann Goldblatt Eco',
        description: 'Гладильная доска Hausmann Goldblatt Eco',
        rating: 4.7,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h56/h0a/85528965611550.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/he7/h5c/85526092382238.jpg?format=gallery-large',
            'https://resources.cdn-kaspi.kz/img/m/p/h0e/h9c/85528965742622.jpg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/hausmann-napol-naja-compact-hm-3162-110x33-sm-117757596/?c=750000000'
    },
    {
        id: 18,
        categoryId: 4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h62/hd2/86123850334238.png?format=gallery-medium',
        name: 'Кофемашина Philips Series 2200 EP2224/40',
        description: 'Кофемашина Philips Series 2200 EP2224/40',
        rating: 4.8,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h62/hd2/86123850334238.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h8e/h86/86071818190878.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h63/h1b/86071818223646.jpg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/kofemashina-philips-ep1224-series-1200-chernyi-100563966/?c=750000000'
    },
    {
        id: 19,
        categoryId: 4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
        name: 'Пылесос Deerma DX700',
        description: 'Пылесос Deerma DX700',
        rating: 4.6,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hd3/h67/63803862581278.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h20/he1/63803865792542.jpg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000'
    },
    {
        id: 20,
        categoryId: 4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/he9/h11/63920022323230.jpg?format=gallery-medium',
        name: 'Утюг Philips DST3011/20',
        description: 'Утюг Philips DST3011/20',
        rating: 4.5,
        likes: 0,
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/he9/h11/63920022323230.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h40/hf1/63920025468958.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h4d/h55/63920028287006.jpg?format=gallery-medium'
        ],
        kaspiLink: 'https://kaspi.kz/shop/p/philips-dst6001-20-sinii-100346520/?c=750000000'
    }
];


  onProductDelete(productId: number) {
    this.products = this.products.filter(product => product.id !== productId);
  }

  get filteredProducts() {
    return this.products.filter(product => product.categoryId === this.categoryId);
  }
}