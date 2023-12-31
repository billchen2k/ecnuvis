/*
 * yearlypager.tsx
 * Project: ecnuvis
 * Created: 2023-06-06 23:15:14
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-11-01 17:07:55
 * Modified By: Bill Chen (bill.chen@live.com)
 */
'use client';

import * as React from 'react';
import '@/styles/pager.scss';

export interface IYearlyPagerProps<T> {
  fullData: T[];
  yearResolver: (item: T) => number;
  onSelectionChange?: (items: T[], year: number) => void;
  maximumYears?: number;
  showAll?: boolean;
  customStatus?: string;
}

export function YearlyPager<T>(props: IYearlyPagerProps<T>) {
  // -2: all, -1: earlier; -3: under custom status
  const [selectedYear, setSelectedYear] = React.useState<number>(0);

  const years = React.useMemo(() => {
    const years = new Set<number>();
    props.fullData.forEach((item) => {
      years.add(props.yearResolver(item));
    });
    const allYears = Array.from(years).sort((a, b) => b - a);
    if (props.maximumYears && allYears.length > props.maximumYears) {
      const candidateYears = allYears.slice(0, props.maximumYears);
      candidateYears.push(-1);
      return candidateYears;
    }
    return allYears;
  }, [props.fullData]);

  React.useEffect(() => {
    if (props.showAll) {
      setSelectedYear(-2);
    } else if (years.length > 0) {
      setSelectedYear(years[0]);
    }
  }, []);

  React.useEffect(() => {
    let items: T[] = [];
    if (selectedYear === -3) {
      return;
    } else if (selectedYear === -2) {
      items = props.fullData;
    } else if (selectedYear === -1) {
      const earlier = years[years.length - 2];
      items = props.fullData.filter((item) => props.yearResolver(item) < earlier);
    } else {
      items = props.fullData.filter((item) => props.yearResolver(item) === selectedYear);
    }
    props.onSelectionChange && props.onSelectionChange(items, selectedYear);
  }, [selectedYear]);


  React.useEffect(() => {
    if (props.customStatus) {
      setSelectedYear(-3);
    }
    if (!props.customStatus && props.showAll) {
      setSelectedYear(-2);
    }
  }, [props.customStatus]);


  return (
    <div className='pager-tab-container overflow-x-scroll overflow-y-clip'>
      {props.customStatus &&
        <div className='activated pager-tab-item whitespace-nowrap'>
          {props.customStatus}
        </div>
      }
      {props.showAll && <div key={-2}
        className={`${selectedYear === -2 && !props.customStatus ? 'activated' : ''} pager-tab-item`}
        onClick={() => setSelectedYear(-2)}
      >ALL</div>}
      {years.map((item) => (
        <div key={item}
          className={`${selectedYear === item && !props.customStatus ? 'activated' : ''} pager-tab-item`}
          onClick={() => setSelectedYear(item)}
        >
          {item === -1 ? 'Earlier' : item}
        </div>
      ))}
    </div>
  );
}
