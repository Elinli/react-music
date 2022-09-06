import React from 'react'
import Board from '../../../components/Board/Board'
import Card from '../../../components/Card/Card'
export default function Recommend() {
  const content = <div>
    1
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>
    <p>就斤斤计较斤斤计较</p>

  </div>
  return (
    <div className='recommend' style={{ display: 'flex',height: '100%' }}>

      <div style={{ flexGrow: 1,width: '730px' }}>
        <Card title={<div>我是白字大萨达</div>} content={content}>

        </Card>
      </div>
      <div style={{ width: '254px' }}>
        <Board ></Board>
      </div>
    </div>
  )
}
