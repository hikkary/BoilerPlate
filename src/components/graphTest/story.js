import React from 'react'
import { storiesOf } from '@storybook/react'
import Graph from './index'
import Area from './areaGraph'

import Bg from '../../static/bg.jpg'

storiesOf('Graph', module)
  .add('Vertical Bar', () => <Graph />)
  .add('Vertical Bar Background', () => <Graph background={Bg} />)
  .add('Area', () => <Area />)
