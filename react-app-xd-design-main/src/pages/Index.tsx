
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Search, Heart, User, Plus, ArrowRight, Star, Bookmark } from 'lucide-react';
import HomePage from '../components/HomePage';
import SearchPage from '../components/SearchPage';
import ProfilePage from '../components/ProfilePage';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div className="mobile-container">
        <div className="flex flex-col h-full">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Routes>
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Index;
