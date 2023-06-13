/*
 * util.ts
 * Project: ecnuvis
 * Created: 2023-06-06 19:15:55
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-06-06 20:30:01
 * Modified By: Bill Chen (bill.chen@live.com>)
 */
import {parse, parseISO, format} from 'date-fns';
import {utcToZonedTime} from 'date-fns-tz';

export const isoDateFromFileName = (fileName: string, fileDate?: string): Date => {
  let dt;
  if (fileDate) {
    dt = parseISO(fileDate);
  } else {
    const segments = fileName.split('_');
    if (segments.length == 0) {
      throw new Error(`Fail to parse date for ${fileName}:' +
       'No date is specified in the file header, thus date string is needed in the file name (like 20230601_filename), which does not exist.`);
    }
    dt = parse(segments[0], 'yyyyMMdd', new Date());
  }
  return dt;
};

export const formatDateUtc8 = (date: Date): string => {
  const timeZone = 'Asia/Shanghai';
  const utc8Date = utcToZonedTime(date, timeZone);
  const formatStr = 'yyyy.MM.dd';
  return format(utc8Date, formatStr);
};
