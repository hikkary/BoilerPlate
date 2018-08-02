import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  background-color: red;
`

// Create Proptypes
export default class List extends React.PureComponent {
  state = {
    datas: null,
    loading: true
  }

  componentDidMount() {
    const { type } = this.props
    axios({
      method: 'GET',
      url: `https://wayne-api.ezeeworld.com/${type}`,
      headers: {
        // 'Cache-Control': 'no-cache'
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjE1NmU1MjMyNTNmYzQ0Y2QxNTJjOWIiLCJpYXQiOjE1MzA1NDExMjgsImV4cCI6MTUzMzEzMzEyOH0.8Sbi0Xuuq-uvY-Ji_CQZt3ssad-TVf-BaGdUxgPBXhA'
      }
    }).then(result => {
      console.log(result)
      this.setState({ datas: result, loading: false })
    })
  }

  render() {
    const { datas } = this.state
    return (
      <React.Fragment>
        {this.state.loading ? (
          <p>loading</p>
        ) : (
          <ListContainer>
            {datas.data.map((data, key) => this.props.listMap(data, key))}
          </ListContainer>
        )}
      </React.Fragment>
    )
  }
}
