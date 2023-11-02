/*
 * page.tsx
 * Project: ecnuvis
 * Created: 2023-10-28 13:10:41
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-11-01 19:12:10
 * Modified By: Bill Chen (bill.chen@live.com)
 */

'use client';
import PictureItem from '@/components/galleryitem';
import {getItemImageURL} from '@/lib/util';
import {Picture, allPictures} from 'contentlayer/generated';
import Image from 'next/image';
import * as React from 'react';

export interface IGalleryProps {
}

export default function Gallery(props: IGalleryProps) {
  const [focusedPic, setFocusedPic] = React.useState<Picture | undefined>(undefined);
  const [showHover, setShowHover] = React.useState<boolean>(false);
  const [imgLoading, setImgLoading] = React.useState<boolean>(false);

  const hideHover = () => {
    setShowHover(false);
    setFocusedPic(undefined);
  };

  return (
    <div>
      <div className='flex flex-row gap-4 flex-wrap'>
        {Array.from({length: 1}, () => allPictures).flatMap((item) => item)
            .sort((a, b) => {
              return new Date(b.dateCalc).getTime() - new Date(a.dateCalc).getTime();
            })
            .map((pic, idx) => (
              <div key={pic.image + pic.id} onClick={() => {
                setFocusedPic(pic);
                setShowHover(true);
                setImgLoading(true);
              }}>
                <PictureItem picture={pic} />
              </div>
            ))}
      </div>
      <div className='fixed top-0 right-0 w-screen h-screen flex flex-col items-center z-10 justify-center bg-black/80' style={{
        opacity: showHover ? 1 : 0,
        pointerEvents: showHover ? 'auto' : 'none',
        transition: 'all 0.2s',
      }} onClick={() => {
        hideHover();
      }}
      >
        {focusedPic &&
          <div className='flex flex-col'>
            <div className='relative'>
              <Image src={getItemImageURL('gallery', focusedPic.image)}
                alt={focusedPic?.title || ''} placeholder='blur' blurDataURL={focusedPic.blurData}
                width={2000} height={2000} layout='responsive'
                onLoad={() => setImgLoading(false)}
                className={`max-h-[85vh] max-w-[85vw] min-w-[30vw] min-h-[30vh] object-contain
                image shadow-lg shadow-neutral-800/50 transition-all duration-200`} />
              {imgLoading &&
                <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-neutral-900/60'>
                  <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white' />
                </div>
              }
            </div>

            <div className='flex flex-row gap-2 w-full text-[#eeeeee] font-light pt-2 opacity-70 transition-all duration-200'>
              <div className='flex flex-col'>
                <div className='text-lg font-bold'>{focusedPic.title}</div>
                <div>{focusedPic.subTitle}</div>
              </div>
              <div className='flex flex-1' />
              <div className='flex '>
                {focusedPic.dateCalc.substring(0, 10)}
              </div>
            </div>
          </div>
        }
      </div>
    </div>

  );
}
