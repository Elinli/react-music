/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Outlet, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Swiper from '../../components/Swiper/Swiper'
import Album from './components/Album'
import AnchorStation from './components/AnchorStation'
import Artist from './components/Artist'
import RankingList from './components/RankingList'
import Recommend from './components/Recommend'
import SongSheet from './components/SongSheet'
import './style/index.scss'
import downloadImg from '../../assets/img/download.png'
import { connect } from 'react-redux'
function Discover(props) {
  const navigate = useNavigate()
  const location = useLocation()
  const lf = location.pathname.split('/')[1]
  const discoverRouter = [
    {
      path: '/',
      label: '推荐'
    },
    {
      path: '/ranklist',
      label: '排行榜'
    },
    {
      path: '/artist',
      label: '歌手'
    },
    {
      path: '/songsheet',
      label: '歌单'
    },
    {
      path: '/anchorstation',
      label: '主播电台'
    },
    {
      path: '/album',
      label: '专辑'
    }
  ]
  const [currentRouter, setCurrentRouter] = useState('')
  const handleClick = (to) => {
    const navigateRouter = to === '/' ? ('/' + lf) : ('/' + lf + to)
    navigateRouter !== location.pathname && navigate(navigateRouter)
  }
  const handleClickDownload = () => { navigate('/download') }
  useEffect(() => {
    const splitRlt = location.pathname.split('/')
    if (splitRlt[2]) { setCurrentRouter('/' + splitRlt[2]) } else {
      setCurrentRouter('/' + '')
    }
  }, [location.pathname])

  return (
    <div className='discover'>
      <div className='discover-nav' style={{ backgroundColor: props.bgcolor,transition: '0.1s all' }}>
        <ul className='nav-bar'>
          {
            discoverRouter.map((item) => {
              return (<li onClick={() => handleClick(item.path)} key={item.path} className={item.path === currentRouter ? 'selected' : ''}>
                <span>{item.label}  </span>
              </li>)
            })
          }

        </ul>
        <div className='banner-content' style={{ width: '982px', position: 'relative', display: 'flex', justifyContent: 'center', height: '285px' }}>
          <div className='swiper' style={{ width: '730px', display: 'flex' }}>
            <Swiper />

          </div>
          <div onClick={() => handleClickDownload()}>
            <img src={downloadImg} alt="download" style={{ height: '285px',cursor: 'pointer' }} />
          </div>
        </div>
      </div>

      <div className='discover-content'>
        <Routes>
          <Route index element={<Recommend />}></Route>
          <Route path='/ranklist' element={<RankingList />}></Route>
          <Route path='/album' element={<Album />}></Route>
          <Route path='/artist' element={<Artist />}></Route>
          <Route path='/songsheet' element={<SongSheet />}></Route>
          <Route path='/anchorstation' element={<AnchorStation />}></Route>
        </Routes>
        {/* <Outlet></Outlet> */}
      </div>

    </div>
  )
}
const mapStateToProps = ({ bgColorReducer: { bgcolor } }) => {
  return {
    bgcolor
  }
}
export default connect(mapStateToProps)(Discover)
