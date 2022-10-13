// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teams: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teams: updatedData, isLoading: true})
  }

  render() {
    const {teams} = this.state
    return (
      <div>
        {teams.map(eachItem => (
          <TeamCard key={eachItem.id} teamDetails={eachItem} />
        ))}
      </div>
    )
  }
}

export default Home
