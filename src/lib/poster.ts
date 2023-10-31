/*
 * poster.ts
 * Project: ecnuvis
 * Created: 2023-06-07 16:00:52
 * Author: Bill Chen (bill.chen@live.com)
 * -----
 * Last Modified: 2023-10-30 23:40:51
 * Modified By: Bill Chen (bill.chen@live.com)
 */

/**
 * The keywords and their weights for the word stream.
 */
export const keywords: Record<string, number> = {
  'Data Visualization': 10,
  'Info-VIS': 5,
  'Human-computer Interaction': 10,
  'Visual Analytics': 10,
  'Spatial-temporal Data': 10,
  'Intelligent Design': 5,
  'Fin-tech': 10,
  'Augmented Reality': 10,
  'Virtual Reality': 8,
  'Machine Learning': 10,
  'High-dimensional Data': 10,
  'Computer Graphics': 5,
  'Bionic Design': 10,
  'AIGC': 20,
  'Graph Analysis': 8,
  'Geovisualization': 10,
  'Layout Generation': 8,
  'Steganography': 5,
  'Color Perception': 10,
  'Streaming Data': 2,
  'ML4VIS': 10,
  'Visual Natural Language Interface': 10,
};

// These words will be displayed with bold font in the stream.
export const boldWords: string[] = [
  'Visualization',
  'Analytics',
  'Analysis',
  'AIGC',
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
