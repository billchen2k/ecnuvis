/*
 * loading.tsx
 * Project: ecnuvis
 * Created: 2023-06-06 17:41:32
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-06-10 13:45:06
 * Modified By: Bill Chen (bill.chen@live.com>)
 */
'use client';
import * as React from 'react';

export interface IRootLoadingProps {
}

export default function RootLoading(props: IRootLoadingProps) {
  return (
    <div>
      <i>Loading...</i>
    </div>
  );
}
