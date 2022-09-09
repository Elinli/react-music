import React from 'react'
import Board from '../../../components/Board/Board'
import Card from '../../../components/Card/Card'
import CardTitle from '../../../components/Card/CardTitle'
import CardContent from '../../../components/Card/CardContent'
import { useCardWidget } from '../../../hooks/useCardWidget'
export default function Recommend() {
  const { title,content,more,custom } = useCardWidget()

  return (
    <div className='recommend' style={{ display: 'flex',height: '100%' }}>

      <div style={{ flexGrow: 1,width: '730px' }}>
        <Card title={<CardTitle title={title} more={more} custom={custom}></CardTitle>} content={<CardContent content={content}></CardContent>}>

        </Card>
      </div>
      <div style={{ width: '254px' }}>
        <Board ></Board>
      </div>
    </div>
  )
}
