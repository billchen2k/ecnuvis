/*
 * puiblicationitem.tsx
 * Project: ecnuvis
 * Created: 2023-07-03 15:33:46
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-07-03 15:39:30
 * Modified By: Bill Chen (bill.chen@live.com)
 */
import {getInjectedAuthors} from '@/lib/publication';
import {Publication} from 'contentlayer/generated';
import * as React from 'react';

export interface IPublicationItemProps {
    publication: Publication
}

export default function PublicationItem(props: IPublicationItemProps) {
  return (
    <div>
      {JSON.stringify(props.publication)}
      <br />
      {JSON.stringify(getInjectedAuthors(props.publication.authors))}
    </div>
  );
}
