import React from 'react';
import { Header } from '../components/Header';
import { AboutMeSection } from '../components/AboutMeSection';

export default function About() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 mt-12">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <AboutMeSection />
      </div>
    </div>
  );
}
