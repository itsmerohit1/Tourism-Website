import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
export default function Cards() {
    return (
      <div className='cards'>
          <h1>Check out these cool places , you'll love it !</h1>  
          
        <div className="cards__container">
         <div className="cards__wrapper">
             <ul className="cards__items">
                
              <CardItem
                src ="https://cf.bstatic.com/data/xphoto/1182x887/390/39065169.jpg?size=S" 
                text = " Located at Waitomo Caves, New Zealand" 
                description ="The Waitomo Glowworm Caves attraction is a cave at Waitomo on the North Island of New Zealand. It is known for its population of Arachnocampa luminosa, a glowworm species found exclusively in New Zealand. This cave is part of the waitomo streamway system that includes the Ruakuri Cave, Lucky Strike, and Tumutumu Cave. "
                label = 'Adventure'
                path= '/services'
                 />

            <CardItem
              src='https://cf.bstatic.com/data/xphoto/1182x887/390/39065180.jpg?size=S'
              text='Leh, India'
              description='The Waitomo Glowworm Caves attraction is a cave at Waitomo on the North Island of New Zealand. It is known for its population of Arachnocampa luminosa, a glowworm species found exclusively in New Zealand. This cave is part of the waitomo streamway system that includes the Ruakuri Cave, Lucky Strike, and Tumutumu Cave.
              '
              label='Beauty'
              path='/services'
            />
            </ul>

            <ul className="cards__items">
               <CardItem
              src='https://cf.bstatic.com/data/xphoto/1182x887/390/39065242.jpg?size=S'
              text='San Gil, Colombia' 
              description='This is the adventure sports capital of Colombia, so expect to meet a lot of thrill-seeking travelers in the otherwise quiet town of San Gil. A pretty spot in the Department of Santander, the city is close to green mountains, rivers, trails, and the Chicamocha Canyon.

              '
              label='Mystery'
              path='/services'
            />

            <CardItem
              src='https://cf.bstatic.com/data/xphoto/1182x887/568/56833425.jpg?size=S'
              text='Coral Bay, Western Australia '
              description= 'Coral Bay is a marine-lovers paradise and one of Western Australia’s premier family holiday destinations. Named Coral Bay due to the beautiful coral gardens which lie mere metres from the pristine white sandy beach, this tiny, laidback seaside location is a must-visit destination for nature lovers.
          '
              label='Beauty'
              path='/products'
            />
            </ul>

            <ul className="cards__items">
            <CardItem
              src='https://bstatic.com/xdata/images/xphoto/1182x887/68238961.jpg?k=685f70227a81756a001567cc7bc7edf72d950db07560002bbf18aa3f8a67d82d&o=?size=S'
              text='Headlands International Dark Sky Park, Mackinaw City, Michigan'

              description='The Headlands Park in Michigan, USA has more to offer than dazzling views of Orion and the Milky Way. Artificial lighting is rare within the 243-hectare park on the northern tip of the Lower Peninsula of Michigan, and Emmet County intends to keep the area as natural as possible.
            
              '
              label='Adrenaline'
              path='/sign-up'
            />

             <CardItem
              src='https://cdn1.goibibo.com/voy_ing/t_fs/himachal-pradesh-shimla-147616947938o.jpeg'
               text='Shimla, Himachal Pradesh'

               description=' Himachal Pradesh is a fantastic tourist place on the basis of its diversity and natural beauty.   It is undoubtedly one of the best tourist destinations for summers. You can experience amazing scenic beauty, serene landscapes in places like Manali, Shimla, Dalhousie and many more
                
              '
              label='Beauty'
              path='/sign-up'
            />
            </ul>

            <ul className="cards__items">
          <CardItem
              src='https://images.theconversation.com/files/228846/original/file-20180723-189310-1ymcybu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=600&h=451&fit=crop&dpr=1'
              text='Taj Mahal , India '

              description='  A wonder of the world whose architectural beauty has been unique ever since it was built is the tribute of love and romance built by the emperor of Mughal Empire, Shah Jahan as a symbol of love for his wife Mumtaz Mahal known as Taj Mahal.

              Taj Mahal was designed by an architect from Iran who was one of the well-known and famous Islamic architects  '
                label='Beauty'
              path='/sign-up'
            />
 
          <CardItem
              src='http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/mount-abu.jpg'
               text='Mount Abu, Rajasthan '

              description=' Serving as a source of comfort from the sultry dessert climate of Rajasthan, Mount Abu, the state’s only hill station stands at a height of 1722 metres above sea level, and is embraced by lush green hills of the Aravalli range.

Studded with a colourful mix of rustic abodes of tribal communities  '
     path='/sign-up'
            />

            

             </ul>
         </div>
        </div>
      </div>
    )
}
