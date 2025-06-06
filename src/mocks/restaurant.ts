import { Restaurant } from '../types';
import rest1 from '../assets/images/restaurante1.png';
import rest2 from '../assets/images/restaurante2.png';
import cover1 from '../assets/images/cover-hioki-sushi.png';
import menuImg1 from '../assets/images/menu-pizza-marguerita.png';

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    cover: cover1,
    highlighted: true,
    category: 'Japonesa',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. \nExperimente o Japão sem sair do lar com nosso delivery!',
    image: rest1,
    dishes: [
      {
        id: 1,
        name: 'Nigiri de Salmão',
        description: '6 peças de nigiri com fatias de salmão fresco sobre arroz',
        photo: menuImg1,
        price: 69.9,
        serving: '6 peças',
        category: 'Sushi'
      },
      {
        id: 2,
        name: 'Sashimi de Atum',
        description: '10 fatias finas de atum cru selecionado',
        photo: menuImg1,
        price: 99.9,
        serving: '10 fatias',
        category: 'Sashimi'
      },
      {
        id: 3,
        name: 'Uramaki California',
        description: '8 peças de uramaki com kani, pepino e manga',
        photo: menuImg1,
        price: 59.9,
        serving: '8 peças',
        category: 'Sushi'
      },
      {
        id: 4,
        name: 'Sashimi de Polvo',
        description: '12 fatias finas de polvo cru com molho ponzu',
        photo: menuImg1,
        price: 109.9,
        serving: '12 fatias',
        category: 'Sashimi'
      },
      {
        id: 5,
        name: 'Temaki de Salmão',
        description: '2 unidades de temaki com salmão, cream cheese e cebolinha',
        photo: menuImg1,
        price: 49.9,
        serving: '2 unidades',
        category: 'Sushi'
      },
      {
        id: 6,
        name: 'Sashimi Misto',
        description: '15 fatias finas de peixe cru variado (salmão, atum e tilápia)',
        photo: menuImg1,
        price: 129.9,
        serving: '15 fatias',
        category: 'Sashimi'
      }
    ]
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    cover: cover1,
    highlighted: true,
    category: 'Italiana',
    rating: 4.5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: rest2,
    dishes: [
      {
        id: 1,
        name: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        photo: menuImg1,
        price: 89.9,
        serving: '8 fatias',
        category: 'Pizza',
        detailDescription:
          'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.'
      },
      {
        id: 2,
        name: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        photo: menuImg1,
        price: 89.9,
        serving: '8 fatias',
        category: 'Pizza',
        detailDescription:
          'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.'
      }
    ]
  }
];