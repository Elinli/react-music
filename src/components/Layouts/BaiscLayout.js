import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import './style/layout.scss'
export default function BaiscLayouts() {
  return (
    <div className='layout container'>
      <div className='scrollable yScroll'>
        <Header></Header>

        <div className='layout-content'>
          <Outlet></Outlet>
        </div>
        <div className='authentication'>
          <div className='link'>
            <p>服务条款| 隐私政策| 儿童隐私政策| 版权投诉| 投资者关系| 广告合作 | 廉正举报| 联系我们</p>
            <p>网易公司版权所有©1997-2022杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</p>
            <p>粤B2-20090191-18  工业和信息化部备案管理系统网站  浙公网安备 33010902002564号</p>
            <p>互联网宗教信息服务许可证：浙（2022）0000120 监督举报邮箱：51jubao@service.netease.com</p>
          </div>
          <div className='opert'>
            hhahahaa
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
