import List from '@/app/component/List/List'
import './un.sass'
import Image from 'next/image'
import ListItem from '@/app/component/ListItem/ListItem'

export default function UnPage() {
  return (
    <div className="un">
      <h1>United Nations</h1>
      <p>
        UN stands for United Nations and it’s an international organization founded in 1945. 
        It’s currently made up of 193 Member States and it has been envolved over the years to keep peace across the world.
        UN is managed by its Secretary-General <span>Antonio Guterres</span>
      </p>
      <div className='image-wrapper'>
        <Image src={'https://roma.embaixadaportugal.mne.gov.pt/images/GuterresONU.JPG'} width={450} height={250} alt='antonio-guterres' />
        <p>Antonio Guterres</p>
      </div>
      <h1 className='list-pres'>UN's Main Bodies</h1>
      <List>
        <ListItem>
          <div>
            <h4>General assembly</h4>
            <p>It’s like the big decision-making group of the United Nations.</p>
          </div>
          <Image src={'https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2023/12/11/4134151-61951190.jpg?itok=gVY4OFML'} width={280} height={185} alt='sss' />
        </ListItem>
        <ListItem>
          <div>
            <h4>Security Council</h4>
            <p>It’s the main group in charge that keeps peace and safety around the world. </p>
          </div>
          <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/United_Nations_Security_Council.jpg/1024px-United_Nations_Security_Council.jpg'} width={280} height={185} alt='aaa' />
        </ListItem>
        <ListItem>
          <div>
            <h4>Economic and Social Council</h4>
            <p>It's like a hub for the UN and its agencies to work together on sustainable development goals, encouraging discussions and new ideas.</p>
          </div>
          <Image src={'https://www.dagdok.org/digitalAssets/740/c_740426-l_3-k_imagepuff.gif'} width={280} height={185} alt='eee' />
        </ListItem>
      </List>
    </div>
  )
}