import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Layout from './layout'
import Input from '../components/input'

const Form = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 350px;
  text-align: center;
`

const StyledSubmit = styled(Input)`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.color.primaryColor};
`

class Library extends Component {
  state = {
    books: [],
    title: null,
    years: null,
    pages: null
  }

  componentDidMount() {
    this.getBooks()
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state)
    })
  }

  deleteBook = id => {
    axios
      .delete(`http://localhost:8080/book/${id}`)
      .then(res => {
        this.getBooks()
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  postBook = e => {
    e.preventDefault()
    axios
      .post('http://localhost:8080/book', {
        title: this.state.title,
        years: this.state.years,
        pages: this.state.pages
      })
      .then(res => {
        console.log(res)
        this.getBooks()
      })
      .catch(err => {
        console.log(err)
      })
  }

  getBooks = () => {
    axios.get('http://localhost:8080/book').then(res => {
      this.setState({ books: res.data.books })
    })
  }

  render() {
    console.log(this.state.book)
    return (
      <Layout>
        {this.state.books ? (
          this.state.books.map(book => (
            <div key={book.id}>
              <p>
                titre : {book.title} | années : {book.years} | pages :{' '}
                {book.pages}
              </p>
              <div onClick={() => this.deleteBook(book.id)}> x</div>
            </div>
          ))
        ) : (
          <p>pas de livre</p>
        )}
        <Form onSubmit={this.postBook}>
          <p>Ajouter Livre</p>
          <Input
            onChange={this.inputHandler}
            name="title"
            placeholder="enter Title"
          />
          <Input
            onChange={this.inputHandler}
            name="years"
            placeholder="enter years"
            type="number"
          />
          <Input
            onChange={this.inputHandler}
            name="pages"
            placeholder="enter pages"
            type="number"
          />
          <StyledSubmit type="submit" value="Ajouter Livre" />
        </Form>
      </Layout>
    )
  }
}

export default Library
