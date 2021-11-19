// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {suggestionL: ''}

  onChangeSearchResult = event => {
    this.setState({suggestionL: event.target.value})
  }

  updateSearchInput = value => {
    this.setState({suggestionL: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {suggestionL} = this.state
    const searchResults = suggestionsList.filter(eachResult =>
      eachResult.suggestion.toLowerCase().includes(suggestionL.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-img"
            alt="google logo"
          />
          <div className="search-input-container">
            <div className="searchInput">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
                className="searchIcon"
                alt="search icon"
              />
              <input
                type="search"
                className="input-bar"
                placeholder="Search Google"
                onChange={this.onChangeSearchResult}
                value={suggestionL}
              />
            </div>
            <ul className="list-container">
              {searchResults.map(eachResult => (
                <SuggestionItem
                  key={eachResult.id}
                  suggestions={eachResult}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
