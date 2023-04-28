import { Recommendation, RecommendationName, RecommendationPrice, RecommendationAdd } from "./styled"

export default function Recommendations({ URL, name, value }) {

    return (
        <Recommendation>
            <img src={URL} />
            <RecommendationName>
                {name.toUpperCase()}
            </RecommendationName>
            <RecommendationPrice>
                {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </RecommendationPrice>
            <RecommendationAdd>
                ADD TO CART
            </RecommendationAdd>
        </Recommendation>
    )
}
