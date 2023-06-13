/*
 * poster.ts
 * Project: ecnuvis
 * Created: 2023-06-07 16:00:52
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-06-09 10:35:20
 * Modified By: Bill Chen (bill.chen@live.com>)
 */

/**
 * The keywords and their weights for the word stream.
 */
export const keywords: Record<string, number> = {
  'Data Visualization': 10,
  'Information Visualization': 10,
  'Human-computer Interaction': 10,
  'Visual Analytics': 10,
  'Spatial-temporal Data Mining': 10,
  'Intelligent Design': 10,
  'Fin-tech': 10,
  'Augmented Reality': 10,
  'Virtual Reality': 8,
  'Machine Learning': 10,
  'High-dimensional Data': 10,
  'Computer Graphics': 10,
  'Graph Analysis': 8,
  'Geovisualization': 10,
  'Layout Generation': 8,
  'Steganography': 5,
  'Color Theory': 5,
  'Streaming Data': 5,
  'Visual Natural Language Interface': 5,
};

// These words will be displayed with bold font in the stream.
export const boldWords: string[] = [
  'Visualization',
  'Analytics',
  'Interaction',
  'Design',
  'Data',
];

export const randKeyword = (): string => {
  const keys = Object.keys(keywords);
  const weights = Object.values(keywords);
  const sum = weights.reduce((a, b) => a + b, 0);
  const rand = Math.random() * sum;
  let acc = 0;
  for (let i = 0; i < keys.length; i++) {
    acc += weights[i];
    if (acc >= rand) {
      return keys[i];
    }
  }
  return keys[0];
};
