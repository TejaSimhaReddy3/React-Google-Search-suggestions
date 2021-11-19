// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestions, updateSearchInput} = props
  const {suggestion} = suggestions

  const onClickLeft = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="lists-results">
      <p className="suggestionResult">{suggestion}</p>
      <button className="button" onClick={onClickLeft} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
