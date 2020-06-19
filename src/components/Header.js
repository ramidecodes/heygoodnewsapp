import React from 'react';
import config from '../../config';
import hgnLogo from '../assets/img/HGN_Logo.png';

export default function Footer() {
  return (
    <header id="header">
      <img height="200" src={hgnLogo} alt="Hey Good News" />
      <h1>{'HeyGoodNews'}</h1>
      <p>
        {
          'A news aggregator that uses machine learning to filter positive and inspiring content.'
        }
      </p>
    </header>
  );
}
