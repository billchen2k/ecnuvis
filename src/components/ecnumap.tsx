/*
 * ecnumap.tsx
 * Project: ecnuvis
 * Created: 2023-11-02 01:23:56
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-11-02 01:53:14
 * Modified By: Bill Chen (bill.chen@live.com)
 */

'use client';
import Image from 'next/image';
import * as React from 'react';
import Map, {Marker} from 'react-map-gl';

export interface IECNUMapProps {
}

export default function ECNUMap(props: IECNUMapProps) {
  return (
    <div className='h-80 max-w-[40rem] w-full my-4'>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 121.399562,
          latitude: 31.229407,
          zoom: 13,
        }}
        style={{width: '100%', height: '100%'}}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker longitude={121.398911} latitude={31.229437} anchor='bottom'>
          <Image src={'assets/icons/marker.svg'} width={32} height={32} alt={'marker icon'}/>
        </Marker>
      </Map>
    </div>

  );
}
