import Image from 'next/image';
import * as React from 'react';

import AssetsImage from '../../../public/images/asset.png';

export const Assets = () => {
  return (
    <div className='flash absolute left-0 top-0 w-full'>
      <Image src={AssetsImage} alt='Asset image' width={1040} />
    </div>
  );
};
