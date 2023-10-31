/*
 * poster.tsx
 * Project: ecnuvis
 * Created: 2023-06-07 15:55:39
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-10-30 23:44:21
 * Modified By: Bill Chen (bill.chen@live.com)
 */
'use client';
import * as React from 'react';
import '@/styles/poster.scss';
import {boldWords, randKeyword} from '@/lib/poster';

export interface IPosterProps {
}

export default function Poster(props: IPosterProps) {
  const LINE_COUNT = 4;
  const FPS = 5;
  const PIXEL_PER_FRAME = 5;

  const containerRef = React.useRef<HTMLDivElement>(null);
  const [lines, setLines] = React.useState<string[][]>([]);
  const [offsets, setOffsets] = React.useState<number[]>(Array.from({length: LINE_COUNT}, () => 0));

  const curOffsets = React.useRef<number[]>(Array.from({length: LINE_COUNT}, () => 0));
  const curReverses = React.useRef<boolean[]>(Array.from({length: LINE_COUNT}, () => false));

  // Init lines and reset the offsets.
  const initLines = React.useCallback(() => {
    const newLines = [];
    for (let i = 0; i < LINE_COUNT; i++) {
      const line: string[] = [];
      for (let j = 0; j < 20; j++) {
        line.push(randKeyword());
      }
      newLines.push(line);
    }
    setLines(newLines);
  }, [setLines]);

  const animate = React.useCallback(() => {
    const containerWidth = containerRef.current?.getBoundingClientRect().width || 0;
    const newOffsets = curOffsets.current.map((offset, index) => {
      const lineElement = document.getElementById(`poster-line-${index}`);
      if (lineElement) {
        const lineRect = lineElement.getBoundingClientRect();
        const lineLength = lineRect.width;
        const c = index % 2 === 0 ? -PIXEL_PER_FRAME : PIXEL_PER_FRAME;
        if (Math.abs(offset) + containerWidth > lineLength * 0.8) {
          curReverses.current[index] = !curReverses.current[index];
        }
        return curReverses.current[index] ? offset - c : offset + c;
      }
      return offset;
    });
    curOffsets.current = newOffsets;
    setOffsets(newOffsets);
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 1000 / FPS);
  }, [setOffsets]);

  const wordDoms = React.useMemo(() => {
    return lines.map((line, lIndex) => {
      return line.map((word, wIndex) => (
        <div key={`word-${lIndex}-${wIndex}`} className={`flex flex-row gap-6`}>
          {word.split(' ').map((segment, sIndex) => {
            if (boldWords.includes(segment)) {
              return <span className='font-bold' key={sIndex}>{segment.toUpperCase()}</span>;
            } else {
              return <span key={sIndex}>{segment.toUpperCase()}</span>;
            }
          })}
          <span></span>
        </div>
      ));
    } );
  }, [lines]);


  // Generate lines
  React.useEffect(() => {
    initLines();
    animate();
  }, []);


  return (
    <div ref={containerRef} className='w-full h-80 overflow-hidden'>
      <div className='flex flex-col justify-between h-80 text-poster' style={{
        transition: `opacity 1s linear`,
        opacity: lines.length > 0 ? 1.0 : 0,
      }}>
        {wordDoms.map((line, index) => (
          <div id={`poster-line-${index}`} key={index}
            className={`flex flex-row gap-6 ${index % 2 !== 0 ? 'self-end' : 'self-start'} `}
            style={{
              transition: `all ${1 / FPS * 1.1}s linear`,
              transform: `translateX(${offsets[index] || 0}px)`,
            }}
          >
            {line.map((word, index) => (
              <div key={index} >
                {word}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
