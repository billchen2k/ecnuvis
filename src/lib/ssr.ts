/*
 * ssr.ts
 * Project: ecnuvis
 * Created: 2023-10-30 14:55:59
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-10-31 16:12:19
 * Modified By: Bill Chen (bill.chen@live.com)
 */
import {getPlaiceholder} from 'plaiceholder';
import * as fs from 'fs';

// https://blog.olivierlarose.com/articles/placeholder-guide-using-next-image
export const getBlurData = async (url: string): Promise<string> => {
  let buffer: Buffer;
  if (url.startsWith('http')) {
    // remote image
    buffer = await fetch(url).then(async (res) => {
      return Buffer.from(await res.arrayBuffer());
    });
  } else {
    const pathname = `./public${url}`;
    // if does not exists
    if (!fs.existsSync(pathname)) {
      console.warn(`Image ${pathname} cannot be found. Using placeholder to generate blur data...`);
      buffer = fs.readFileSync('./public/images/placeholder.jpg');
    } else {
      buffer = fs.readFileSync(pathname);
    }
  }
  const {base64} = await getPlaiceholder(buffer, {
    removeAlpha: true,
    saturation: 1.5,
    size: 8,
  });
  return base64;
};
