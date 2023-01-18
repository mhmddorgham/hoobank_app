import React from 'react'
import styles, { layout } from '../style'
import Button from "./Button.js"
import { card } from '../assets'

const CardDeal = () => (
  <section id='cardDeal' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className='sm:block hidden' /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus.
        Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <img src={card} alt="card" className='w-[100%] h-[100%]' />
    </div>

  </section>

)

export default CardDeal


// <section id='features' className={layout.section}>
//       <div className={layout.sectionInfo}>
//         <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden' /> we’ll handle the money. </h2>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           With the right credit card, you can improve your
//           financial life by building credit, earning rewards and saving money.
//           But with hundreds of credit cards on the market.
//         </p>
//         <Button />
//       </div>
//       <div className={`${layout.sectionImg} flex-col`}>
//         {features.map((featuer) => (
//           <FeatureCard
//             key={featuer.id}
//             {...featuer}
//           />
//         ))}
//       </div>
//     </section>

