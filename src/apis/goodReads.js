import React from 'react';
import axios from 'axios';

// const baseURL = 'https://www.goodreads.com/review/show.xml'

const goodReadsKey = 'bnvmG89d34ly1kxsrlUfZA'

goodreads.get('/search',
    {
      params: {
      key: 'bnvmG89d34ly1kxsrlUfZA',
      q: 'All the Light We Cannot See'
      }
)

export default axios.create({
    baseURL: 'https://www.goodreads.com',
});

