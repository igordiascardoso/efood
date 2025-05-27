import * as S from './styles'
import { Restaurant } from '../../types'
import star from '../../assets/images/estrela.svg'
import { Link } from 'react-router-dom'

type RestaurantCardProps = {
  restaurant: Restaurant
  highlighted?: boolean
  isFirst?: boolean // Controla a visibilidade da tag "Destaque da semanaa"
}

export const RestaurantCard = ({ restaurant, highlighted, isFirst }: RestaurantCardProps) => {
  console.log(`Card ${restaurant.name} - ID: ${restaurant.id} - Destaque: ${highlighted} - Primeiro: ${isFirst}`)
  return (
    <S.CardContainer>
      {highlighted ? (
        <S.TagsContainer>
          {isFirst && <S.HighlightTag>Destaque da semana</S.HighlightTag>}
          <S.CategoryTag>{restaurant.category}</S.CategoryTag>
        </S.TagsContainer>
      ) : null}
      <S.CardImage src={restaurant.image} alt={restaurant.name} />
      <S.CardContent>
        <S.CardHeader>
          <S.CardTitle>{restaurant.name}</S.CardTitle>
          <S.CardRating>
            <span>{restaurant.rating}</span>
            <img src={star} alt="rating" />
          </S.CardRating>
        </S.CardHeader>
        <S.CardDescription>{restaurant.description}</S.CardDescription>
        <Link to={`/Restaurant/${restaurant.id}`}>
          <S.CardButton>Saiba mais</S.CardButton>
        </Link>
      </S.CardContent>
    </S.CardContainer>
  )
}