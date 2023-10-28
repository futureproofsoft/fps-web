import Image from 'next/image';
import * as React from 'react';

import AssetsImage from '../../../public/images/asset.png';

export const Assets = () => {
  return (
    <div className='absolute left-0 top-0'>
      <Image src={AssetsImage} alt='Asset image' width={750} />
    </div>
  );
};
