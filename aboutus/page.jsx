'use client'
import React from 'react';
import { Heart, Shield, Users, Target, Globe, Award, Star, Calendar, Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram, BookOpen, GraduationCap, Lightbulb, Code, Feather } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./aboutus.css"
import AboutusSidebar from './Sidebaraboutus';
import Header from './Header';
import Hero from './Hero';
import Static from './Static';
import Misson from './Misson';
import Feature from './Feature';
import Team from './Team';
import Technology from './Technology';
import Contect from './Contect';
import Value from './Value';

function About() {
  const pathname = usePathname();
  const isActive = (path) => {
    return pathname === path;
  }
  return (
    <div className="flex h-screen bg-gray-50">
      <AboutusSidebar />
      {/* Main Content */}

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}

        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">

            {/* Hero Section */}
           <Hero></Hero>

            {/* Stats Section */}
            <Static></Static>

            {/* Mission & Vision */}
            <Misson></Misson>

            {/* Values Section */}
            <Value></Value>

            {/* Features Section */}
           <Feature></Feature>
           
            {/* Team Section */}
            <Team></Team>

            {/* Technology Stack */}
           <Technology></Technology>

            {/* Contact Section */}
            <Contect></Contect>
          </div>
        </main>
      </div>
    </div>
  );
}

export default About;