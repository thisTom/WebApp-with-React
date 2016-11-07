import React,{ Component } from 'react'
import {WhiteSpace, WingBlank, Flex, Carousel, Tabs, Grid} from 'antd-mobile'
import {AppDownTip, Header, Nav, Title, ShopList, Message } from '../components'

class Home extends Component {
  state = {
    fastNav: [
      {
		    icon: './images/item1.png',
		    text: '限定皮肤',
		    link: '#',
      },
      {
		    icon: './images/item2.png',
		    text: '限定皮肤',
		    link: '#',
      },
      {
		    icon: './images/item3.png',
		    text: '限定皮肤',
		    link: '#',
      },
      {
		    icon: './images/item3.png',
		    text: '限定皮肤',
		    link: '#',
      },
		  {
		    icon: './images/item2.png',
		    text: '限定皮肤',
		    link: '#',
      },
      {
		    icon: './images/item1.png',
		    text: '限定皮肤',
		    link: '#',
      },
      {
		    icon: './images/item1.png',
		    text: '限定皮肤',
		    link: '#',
      },
      {
		    icon: './images/item2.png',
		    text: '限定皮肤',
		    link: '#',
      }, 
		  {
		    icon: './images/item2.png',
		    text: '限定皮肤',
		    link: '#',
      },
      {
		    icon: './images/item1.png',
		    text: '限定皮肤',
		    link: '#',
      },
      {
		    icon: './images/item1.png',
		    text: '限定皮肤',
		    link: '#',
      },
      {
		    icon: './images/item2.png',
		    text: '限定皮肤',
		    link: '#',
      },
    ],
    shopLists: [
      {
        id: 1,
        thumb: 'http://temp.im/160x120/FF9500/000',
        label: '五折优惠',
        discount_scale: '8',
        title: '年年有鱼',
        caption: '本市最棒的烤鱼店',
        tag: '美食',
        distance: '2.5km',
        discount_text: '本店支持微信支付',
        discount_time: '周一到周五每天9:00-24:00'
      },{
        id: 2,
        thumb: 'http://temp.im/160x120/FF9500/000',
        label: '五折优惠',
        discount_scale: '9',
        title: '年年有鱼2',
        caption: '本市最棒的烤鱼店2',
        tag: '美食',
        distance: '12.5km',
        discount_text: '本店支持微信支付',
        discount_time: '周一到周五每天9:00-24:00'
      }
    ],
    messages: [
      {
        link: '#',
        desc: '众聚云购测试版'
      },{
        link: '#',
        desc: '众聚云购测试版开发中'
      },{
        link: '#',
        desc: '活动消息栏'
      }

    ]
  }

  render() {
    const carSettings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true
    }
    const { fastNav, shopLists, messages } = this.state

    return (
      <div>
      	<AppDownTip />
        <Header />
        <Carousel {...carSettings} className='homeSlide'>
          <div>
            <img src="../../images/1.jpg" alt=""/>
          </div>
          <div>
            <img src="../../images/2.jpg" alt=""/>
          </div>
          <div>
            <img src="../../images/3.jpg" alt=""/>
          </div>
          <div>
            <img src="../../images/4.jpg" alt=""/>
          </div>
        </Carousel>
				<div className='homeGrid'>
					<Grid
		        data={fastNav}
		        hasLine={false}
		        isCarousel
			    />
				</div>
        <Message data={messages}/>
        <Title text="精品好店" linkName="查看全部" path="/shop" />
        <div className="plr20 bg-white">
          {shopLists.map(item =>
            <ShopList key={item.id} data={item} />
          )}
        </div>
        <Nav />
      </div>
    )
  }
}

export default Home