import React from 'react'
export type IProps={
  name?:String
}
export const Greet=(props:IProps)=> {
  return (
    <div>Hello {props.name}</div>
  )
}
