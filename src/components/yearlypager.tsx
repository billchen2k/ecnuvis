/*
 * yearlypager.tsx
 * Project: ecnuvis
 * Created: 2023-06-06 23:15:14
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-06-06 23:48:40
 * Modified By: Bill Chen (bill.chen@live.com>)
 */
'use client';

import * as React from 'react';
import '@/styles/pager.scss';

export interface IYearlyPagerProps<T> {
  fullData: T[];
  yearResolver: (item: T) => number;
  onSelectionChange?: (items: T[], year: number) => void;
  maximumYears?: number;
}

export function YearlyPager<T>(props: IYearlyPagerProps<T>) {
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
    if (years.length > 0) {
      setSelectedYear(years[0]);
    }
  }, [years]);

  React.useEffect(() => {
    let items: T[] = [];
    if (selectedYear !== -1) {
      items = props.fullData.filter((item) => props.yearResolver(item) === selectedYear);
    } else {
      const earlier = years[years.length - 2];
      items = props.fullData.filter((item) => props.yearResolver(item) < earlier);
    }
    props.onSelectionChange && props.onSelectionChange(items, selectedYear);
  }, [selectedYear, props.fullData]);


  return (
    <div className='flex flex-row gap-2 offset-'>
      {years.map((item) => (
        <div key={item}
          className={`${selectedYear === item ? 'activated' : ''} pager-tab-item`}
          onClick={() => setSelectedYear(item)}
        >
          {item === -1 ? 'Earlier' : item}
        </div>
      ))}
    </div>
  );
}
