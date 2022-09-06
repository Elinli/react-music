import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import BasicLayout from '../components/Layouts/BaiscLayout'
import ErrorPage from '../views/ErrorPage'

import Discover from '../views/discover/Discover'
import Mymusic from '../views/mymusic/Mymusic'
import Pointer from '../views/pointer/Pointer'
import Mall from '../views/mall/Mall'
import Musicer from '../views/musicer/Musicer'
import Download from '../views/download/Download'
import Musician from '../views/musician/Musician'

export function BasicRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/musician' element={<Musician />}></Route>
        <Route path='/' exact element={<BasicLayout />}>

          {/* <Route index element={<Discover></Discover>} > */}
          {/* <Route index element={<Recommend />}></Route>
            <Route path='/ranklist' element={<RankingList />}></Route>
            <Route path='/album' element={<Album />}></Route>
            <Route path='/artist' element={<Artist />}></Route>
            <Route path='/songsheet' element={<SongSheet />}></Route>
            <Route path='/anchorstation' element={<AnchorStation />}></Route> */}

          <Route path='/' element={<Navigate to='/discover'></Navigate>} />
          <Route path='/discover/*' element={<Discover></Discover>}>
            {/* <Route index element={<Recommend />}></Route>
            <Route path='ranklist' element={<RankingList />}></Route>
            <Route path='album' element={<Album />}></Route>
            <Route path='artist' element={<Artist />}></Route>
            <Route path='songsheet' element={<SongSheet />}></Route>
            <Route path='anchorstation' element={<AnchorStation />}></Route> */}
          </Route>
          <Route path='/mymusic' exact element={<Mymusic />} />
          <Route path='/pointer' exact element={<Pointer />} />
          <Route path='/mall' exact element={<Mall />} />
          <Route path='/musicer' exact element={<Musicer />} />
          <Route path='/download' exact element={<Download />} />

          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router >
  )
}
