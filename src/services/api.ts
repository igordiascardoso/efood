import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define types for menu items and restaurants based on JSON structure
type MenuItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

// Existing types for purchase functionality
type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      numberAdress: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

// Aí com o ENDPOINT

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getCardapio: builder.query<MenuItem[], string>({
      query: (id) => `restaurantes/${id}`,
      transformResponse: (response: Restaurante) => response.cardapio
    }),
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getRestauranteId: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetCardapioQuery,
  useGetRestauranteIdQuery,
  usePurchaseMutation
} = api

export default api