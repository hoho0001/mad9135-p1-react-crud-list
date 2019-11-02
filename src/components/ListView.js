// Lien Ho Hoang - 2019/11/02

import React from 'react'
import ListItem from './ListItem'

function ListView(props) {
  return (
    <div>
      <h2>View items</h2>
      <div>
          {props.items && props.items.map((item) => (
              <ListItem key={item.id} item={item} handleEdit={props.handleEdit} handleDelete={props.handleDelete} />
            ))
          }
          </div>
    </div>
  )
}

export default ListView


