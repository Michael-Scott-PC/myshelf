import React from 'react';
import axios from 'axios';

// const baseURL = 'https://www.goodreads.com/review/show.xml'

const goodReadsKey = ''

goodreads.get('/search',
    {
      params: {
      key: goodReadsKey,
      q: 'All the Light We Cannot See'
      }
)

export default axios.create({
    baseURL: 'https://www.goodreads.com',
});

