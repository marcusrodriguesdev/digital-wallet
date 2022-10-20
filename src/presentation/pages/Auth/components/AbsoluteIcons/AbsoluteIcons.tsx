import React from 'react'

import { Assets } from '@/presentation/theme/Assets'

import { ContainerArrow, ContainerCircle, ContainerColumn } from './AbsoluteIcons.styles'

const AbsoluteIcons: React.FC = () => {
  return (
    <React.Fragment>
      <ContainerColumn>
        <img src={Assets.ColumnGroup} alt="columns group" />
      </ContainerColumn>
      <ContainerCircle>
        <img src={Assets.CircleGroup} alt="circle" />
      </ContainerCircle>
      <ContainerArrow>
        <img src={Assets.ArrowGroup} alt="arrow" />
      </ContainerArrow>
    </React.Fragment>
  )
}

export { AbsoluteIcons }
