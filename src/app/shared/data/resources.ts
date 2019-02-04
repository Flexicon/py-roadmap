import { Topic } from '../models/topic.model';

export const topics: Topic[] = [
  {
    title: 'Numbers, Strings and Lists',
    checklist: [
      { title: 'Removing whitespace from a string' },
      { title: 'Transforming text to uppercase and lowercase' },
      { title: 'Converting strings to integers' },
      { title: 'Replacing a portion of text with different text' },
      { title: 'Getting a portion of a string' },
      { title: 'Splitting a string into an array based on a character' },
      { title: 'Adding items to an array' },
      { title: 'Merging two or more arrays together' },
      { title: 'Filtering and transforming arrays' }
    ]
  },
  {
    title: 'Variables, naming and Functions',
    checklist: [
      { title: 'Variable/Constant naming formats' },
      { title: 'Function declarations' },
      { title: 'Understanding variable scope' },
      { title: 'Setting default values for function arguments' },
      { title: 'Lambdas' }
    ]
  }
];
