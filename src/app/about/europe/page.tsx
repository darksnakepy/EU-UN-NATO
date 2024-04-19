import List from '@/app/component/List/List'
import './europe.sass'
import ListItem from '@/app/component/ListItem/ListItem'
import Image from 'next/image'

export default function Europe() {
  return (
    <div className='europe'>
      <h1>Europe</h1>
      <p>The European Union (EU) is an economic and political organization composed of 27 European countries. It was founded in 1957 with the Treaty of Rome.</p>
      <p className='list-pres'>The EU aims to ensure:</p>
      <List>
        <ListItem>Peace</ListItem>
        <ListItem>Stability</ListItem>
        <ListItem>Prosperity</ListItem>
      </List>
      <p>through collaboration among its members.</p>
      <h1 className='list-pres'>Europe Main Institutions</h1>
      <List reverse>
        <ListItem>
          <div>
            <h4>European Commission</h4>
            <p>It’s part of the executive of the EU, as it operates as a cabinet government</p>
          </div>
          <Image src={'https://webassets.eurac.edu/31538/1599755809-european-commissionweb.jpg'} width={280} height={185} alt='sss' />
        </ListItem>
        <ListItem>
          <div>
            <h4>European Parliament</h4>
            <p>It’s a legislative body of the EU and it’s directly elected by European citizens every 5 years.</p>
          </div>
          <Image src={'https://static.dw.com/image/39547662_605.jpg'} width={280} height={185} alt='sss' />
        </ListItem>
        <ListItem>
          <div>
            <h4>Council of the European Union</h4>
            <p>It is an essential EU decision-maker as it negotiates and adopts legislative acts</p>
          </div>
          <Image src={'https://webassets.eurac.edu/31538/1599755734-eucouncilalicevaldesaliciweb.jpg'} width={280} height={185} alt='sss' />
        </ListItem>
        <ListItem>
          <div>
            <h4>Court of Justice</h4>
            <p>It’s the European Union’s administrative branch</p>
          </div>
          <Image src={'https://media.licdn.com/dms/image/C4D1BAQGvjFirBtUI0w/company-background_10000/0/1583740221802/european_court_of_justice_cover?e=2147483647&v=beta&t=OtGjRPhNZLWBxxAAYHdH8kRpu76j-i_PuiakR4sh4jA'} width={280} height={185} alt='sss' />
        </ListItem>
        <ListItem>
          <div>
            <h4>European Central Bank</h4>
            <p>It is responsible for the EU's monetary policy and the management of the euro.</p>
          </div>
          <Image src={'https://cdn.corporatefinanceinstitute.com/assets/european-central-bank-ecb.jpg'} width={280} height={185} alt='sss' />
        </ListItem>
      </List>
    </div>
  )
}
