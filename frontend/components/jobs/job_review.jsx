import React from 'react';

const JobReview = ({review}) => (
  <div className='review'
       key={review.job_id}>
    <h3>{review.rating} stars</h3>
    <p>{review.body}</p>
  </div>
);

export default JobReview;