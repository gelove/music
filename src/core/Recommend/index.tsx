import React, {useRef} from 'react'
import Scroll from '@/components/Scroll'
import Slide from '@/components/Slide'
// import { renderRoutes } from "react-router-config";

// import { NavLink } from 'react-router-dom';//利用NavLink组件进行路由跳转

interface scrollFunc {
  finishPullDown: Function
  getBScroll: Function
  refresh: Function
}

function Recommend() {
  // const { route } = props;
  const ref = useRef(null);

  const bannerList = [1,2,3,4].map (item => {
    return "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"
  });

  const handlePullDown = (pos: any) => {
    setTimeout(()=>{
      console.log('数据已刷新')
      const scrollRef = ref.current! as scrollFunc
      scrollRef.finishPullDown()
      scrollRef.refresh()
    }, 1000)
  }

  return (
    <div style={{ height: 'calc(100vh - 44px)' }}>
      <Scroll ref={ ref } pullDownLoading={true} pullDown={handlePullDown}>
        <div style={{ height: 1000 }}>
        <Slide slideBanner={bannerList}></Slide>
        </div>
      </Scroll>
    </div>
  )
}

export default React.memo(Recommend)