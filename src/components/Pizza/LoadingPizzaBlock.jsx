import React from 'react';
import ContentLoader from 'react-content-loader';
function LoadingPizzaBlock() {
  return (
    <div>
      <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={460}
        viewBox='0 0 280 460'
        backgroundColor='#b30f0f'
        foregroundColor='#ecebeb'>
        <circle cx='134' cy='136' r='134' />
        <circle cx='142' cy='132' r='5' />
        <rect x='4' y='281' rx='3' ry='3' width='280' height='26' />
        <rect x='0' y='312' rx='6' ry='6' width='280' height='84' />
        <rect x='10' y='480' rx='0' ry='0' width='123' height='13' />
        <rect x='4' y='405' rx='3' ry='3' width='91' height='31' />
        <rect x='145' y='402' rx='14' ry='14' width='129' height='53' />
      </ContentLoader>
    </div>
  );
}

export default LoadingPizzaBlock;
