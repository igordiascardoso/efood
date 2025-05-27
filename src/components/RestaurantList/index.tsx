import { Restaurant } from '../../types'
import { RestaurantCard } from '../RestaurantCard'
import * as S from './styles'

type RestaurantListProps = {
  restaurants: Restaurant[]
}

export function RestaurantList({ restaurants }: RestaurantListProps) {
  console.log('Restaurantes:', restaurants.map(r => ({
    id: r.id,
    name: r.name,
    category: r.category,
    highlighted: r.highlighted
  })));
  return (
    <>
      <S.ListContainer>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            highlighted={restaurant.highlighted}
            isFirst={index === 0} // TRUE apenas para o primeiro restaurante
          />
        ))}
      </S.ListContainer>
    </>
  )
}