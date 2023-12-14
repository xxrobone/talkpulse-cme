import React from 'react';

const Avatar = ({ image = '', name = 'bob' }) => {
  return (
    <div>
      {image ? <img src='' alt='' /> : ''}

      <p>{name}</p>
    </div>
  );
};

export default Avatar;
