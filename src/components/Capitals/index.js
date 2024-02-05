import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCountryId: countryAndCapitalsList[0].id}

  getActiveCountryId = event => {
    this.setState({activeCountryId: event.target.value})
  }

  getCountry = () => {
    const {activeCountryId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeCountryId,
    )
    return activeCountry.country
  }

  render() {
    const {activeCountryId} = this.state
    const country = this.getCountry(activeCountryId)

    return (
      <div className="container">
        <div className="country-card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select
              className="select"
              onChange={this.getActiveCountryId}
              value={activeCountryId}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  key={eachCountry.id}
                  value={eachCountry.id}
                  className="option"
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="is-capital">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
