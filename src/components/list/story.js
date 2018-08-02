import React from 'react'
import { storiesOf } from '@storybook/react'
import List from './index'

import { AssoMap, AttendeeMap, CourseList, EventList } from './mapLists'

storiesOf('List', module)
  .add('List Asso', () => <List listMap={AssoMap} type="asso" />)
  .add('List Student', () => <List listMap={AttendeeMap} type="attendee" />)
  .add('List Course', () => <List listMap={CourseList} type="course" />)
  .add('List Event', () => <List listMap={EventList} type="event" />)
  .add('List UserInfo', () => <List listMap={AttendeeMap} type="userInfo" />)
