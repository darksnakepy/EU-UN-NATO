import React from 'react'
import ListItem from '../ListItem/ListItem'
import './List.sass'

interface ListProps {
  children?: React.ReactElement<typeof ListItem>[]
  flex?: boolean
  reverse?: boolean
}

export default function List({children, flex, reverse} : ListProps) {
  return (
    <div className={['list', flex && 'list--flex'].toString().replaceAll(',', ' ')}>
      {
        React.Children.map(children, (child, i) => (
          <div className={['list-item', reverse && i %2 === 0 ? 'list-item--reversed' : ''].toString().replaceAll(',', ' ')}>
            <div className='list-index'>{i+1}</div>
            <div className='list-content'>{child}</div>
          </div>
        ))
      }
    </div>
  )
}