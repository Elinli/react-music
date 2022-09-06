import headerStyle from './style/header.module.scss'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import search from '../../assets/img/search.svg'
import { useEffect, useState } from 'react'
export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [headerRouters, setHeaderRouters] = useState([])

  useEffect(() => {
    setHeaderRouters([{
      path: '/discover',
      label: '发现音乐'
    }, {
      path: '/mymusic',
      label: '我的音乐'
    }, {
      path: '/pointer',
      label: '关注'
    }, {
      path: '/mall',
      label: '商城'
    }, {
      path: '/musicer',
      label: '音乐人'
    }, {
      path: '/download',
      label: '客户端下载'
    }])
  }, [])
  const handleClick = (to) => {
    console.log(to)
    location.pathname !== to && navigate(to)
  }
  return (
    <div className={headerStyle.header}>
      <div className={headerStyle.eft}>
        <div className={headerStyle.content}>
          <img className={headerStyle.logo} src={logo} alt="云音乐" />
          <span className={headerStyle.logotitle}>Eli 云音乐</span>
        </div>
        <ul className={headerStyle.topbar}>
          {headerRouters.map(item =>
            <li onClick={() => handleClick(item.path)} key={item.path} className={location.pathname.includes(item.path) ? headerStyle.isselected : ''}>
              {item.label}
              <div className={headerStyle.mark}></div></li>
          )}

        </ul>
        <div className={headerStyle.search}>
          <input type="text" className={headerStyle.input} />
          <img src={search} alt="搜索" className={headerStyle.icon} />
          <div className={headerStyle.button}>创作者中心</div>
          <span className={headerStyle.avatar}>
            <img src="http://p3.music.126.net/7giMpyqNF-xZrPIvwOyfPg==/109951165793211323.jpg?param=30y30" alt="avatar" />

          </span>
        </div>
      </div>
      <div className={headerStyle['header-focus']}></div>
    </div>
  )
}
