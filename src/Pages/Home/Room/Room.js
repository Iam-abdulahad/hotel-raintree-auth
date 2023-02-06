import React from 'react';

const Room = ({product}) => {
          const { name, img, price } = product;
          return (
                    <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
                              <div class="card">
                                        <img src={img} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                                  <h5 class="card-title">{name}</h5>
                                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                  <h3>${price}</h3>
                                                  <a href="#" className="btn btn-primary">BUY NOW</a>
                                        </div>
                              </div>
                    </div>
          );
};

export default Room;