import React from 'react'
import styled from 'styled-components'

const ListRow = styled.div`
  border: 1px solid black;
  padding: 5px;
  width: 100%;
`

const AssoMap = (data, key) => {
  return (
    <ListRow key={key}>
      <span>{data.name}</span>
    </ListRow>
  )
}

const CourseList = (data, key) => {
  return (
    <ListRow key={key}>
      <span>{data.title}</span>
    </ListRow>
  )
}

const EventList = (data, key) => {
  return (
    <ListRow key={key}>
      <span>{data.title}</span>
    </ListRow>
  )
}

const AttendeeMap = (data, key) => {
  return (
    <ListRow key={key}>
      <span>{data.firstName}</span>
    </ListRow>
  )
}

export { AssoMap, AttendeeMap, CourseList, EventList }
