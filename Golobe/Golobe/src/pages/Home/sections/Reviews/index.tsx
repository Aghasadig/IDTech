import React from 'react'
import "./reviews.css"

const Reviews = () => {
  return (

    <section className='reviews'>
        <div className='reviewsHeader'>
         <div className='reviewsHeaderTextContent'>

            <h2>Reviews</h2>
            <p>What people says about Golobe facilities</p>

         </div>
         <button className='reviewsHeaderButton'>
            See All
         </button>
        </div>

        <div className="reviewsCardsWrapper">
            <div className="reviewsCard">
                <div className="reviewsCardHeader">
                    <h2>“A real sense of community, nurtured”</h2>
                    <p>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
</p>
<button className='reviewsCardButton'>
    View more
</button>
                </div>

                <div className="reviewsCardMain"></div>
                <div className="reviewsCardFooter"></div>
            </div>
        </div>


    </section>
  )
}

export default Reviews;