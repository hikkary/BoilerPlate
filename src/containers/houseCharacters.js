import axios from 'axios'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { CommonText } from '../components/texts'
import Layout from './layout'

const HouseList = styled.div`
  align-items: center;
  background-color: yellow;
  display: flex;
  height: 150px;
  justify-content: center;
`
const StyledLink = styled(Link)`
  font-size: 30px;
  margin: 5px;
  text-decoration: none;
`

const StudentList = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

class HomePage extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    characters: []
  }

  componentDidMount() {
    this.getHouse()
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.houseName !== prevProps.match.params.houseName
    ) {
      this.getHouse()
    }
  }

  getHouse = () => {
    const { match } = this.props
    axios
      .get(
        `http://hp-api.herokuapp.com/api/characters/house/${
          match.params.houseName
        }`
      )
      .then(res => {
        this.setState({ characters: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Layout>
        <HouseList>
          <StyledLink to="/house/slytherin">slytherin</StyledLink>
          <StyledLink to="/house/gryffindor">gryffindor</StyledLink>
          <StyledLink to="/house/ravenclaw">ravenclaw</StyledLink>
        </HouseList>
        <StudentList>
          {this.state.characters.map((character, index) => (
            <CommonText key={index}>{character.name}</CommonText>
          ))}
        </StudentList>
      </Layout>
    )
  }
}

export default HomePage
