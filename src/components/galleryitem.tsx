/*
 * galleryitem.tsx
 * Project: ecnuvis
 * Created: 2023-10-28 14:33:35
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last ModifiØed: 2023-10-28 15:35:04
 * Modified By: Bill Chen (bill.chen@live.com)
 */
import * as React from 'react';
import {Picture} from 'contentlayer/generated';
import Image from 'next/image';
import '@/styles/gallery.scss';
import '@/styles/people.scss';
import {getItemImageURL} from '@/lib/util';

export interface IPictureItemProps {
    picture: Picture,
}

export default function PictureItem(props: IPictureItemProps) {
  const {picture} = props;

  return (
    <div className='relative w-96 h-64 overflow-hidden image-container'>
      <Image src={getItemImageURL('gallery', picture.image)} alt={picture.title}
        width={600} height={400} blurDataURL={picture.blurData} placeholder={'blur'}
        className={`w-96 h-64 object-cover image border-black border-solid border-2`} />
      <div className='overlay-container'>
        <div className='overlay'>
          <div className='text text-xl font-light'>{picture.title}</div>
          {picture.subTitle &&
            <div className='text font-light'>{picture.subTitle}</div>
          }
        </div>
      </div>
    </div>
  );
}
