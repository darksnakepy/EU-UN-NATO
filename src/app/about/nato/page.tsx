import List from '@/app/component/List/List'
import './nato.sass'
import Image from 'next/image'
import ListItem from '@/app/component/ListItem/ListItem'

export default function NatoPage() {
  return (
    <div className="nato">
      <h1>Nato</h1>
      <p className='list-pres'>NATO is a military alliance made up of 32 countries from North America and Europe. It was formed in 1949 to promote peace and security in the North Atlantic area.</p>
      <div className='image-wrapper'>
        <Image src={'https://img.belta.by/images/storage/news/with_archive/2024/000197_1712613340_626629_big.jpg'} width={450} height={250} objectFit='content' alt='antonio-guterres' />
        <p>Nato flag</p>
      </div>
      <p className='list-pres'>
        NATO’s main purpose
      </p>
      <List>
        <ListItem>
          <div>
            <h4>Protect and defend its members</h4>
          </div>
          <Image src={'https://www.agentgearusa.com/wp-content/uploads/second-amendment-protect-and-defend-pin.jpg'} width={280} height={185} alt='sss' />
        </ListItem>
      </List>
      <p>NATO provides a platform for member countries to engage in political dialogue and consultation on security issues. As EU and NU, NATO also has a council: the <span>North Atlantic Council</span></p>
      <div className='image-wrapper'>
        <div className='images'>
          <Image src={'https://www.nato.int/docu/review/files/1711.jpg'} width={450} height={250} objectFit='content' alt='ss-ss' />
          <Image src={'https://www.nato.int/nato_static_fl2014/assets/pictures/stock_2019/20190222_190220-mc-tukey.jpg'} width={450} height={250} objectFit='content' alt='aaa-a' />
        </div>
        <p>NATO promotes military cooperation among its member countries to test their defense capabilities and perhaps enhance them (with military training programs etc..)</p>
      </div>
      <div className='image-wrapper'>
        <div className='images'>
          <Image src={'https://morningstaronline.co.uk/sites/default/files/styles/article_full/public/11%20Nato%20v%20world%20peace.jpg?itok=55ikyALj&c=80fc2d9cb36e586f199dfccbef761fca'} width={450} height={250} objectFit='content' alt='ss-ss' />
          <Image src={'https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt3e4e126b8153648b/63eeca6b998e686b2e53b748/CW-keyArt-thumb.jpg'} width={450} height={250} objectFit='content' alt='aaa-a' />
        </div>
        <p>Another central element of NATO’s interest is <span>Nuclear prevention</span>, since the Cold War</p>
      </div>
    </div>
  )
}