import { useNavigate } from "react-router-dom"
import { Recommendation, RecommendationName, RecommendationPrice, RecommendationAdd } from "./styled"

export default function Recommendations({ category, id, URL, name, value }) {
    const navigate = useNavigate()

    function handleImageClick() {
        navigate(`/${category}/${id}`)
        window.scrollTo(0, 0)
    }

    return (
        <Recommendation>
            <img src={URL} onClick={handleImageClick} />
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
