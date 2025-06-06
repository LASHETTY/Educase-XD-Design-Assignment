
import { useState } from 'react';
import { Settings, Grid, Bookmark, Tag, MoreHorizontal, Heart, MessageCircle } from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const userPosts = [
    { id: 1, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop", likes: 124 },
    { id: 2, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=200&fit=crop", likes: 89 },
    { id: 3, image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop", likes: 156 },
    { id: 4, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop", likes: 203 },
    { id: 5, image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=200&fit=crop", likes: 67 },
    { id: 6, image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=200&fit=crop", likes: 189 },
  ];

  const stats = [
    { label: 'Posts', value: '42' },
    { label: 'Followers', value: '1.2k' },
    { label: 'Following', value: '289' },
  ];

  const tabs = [
    { id: 'posts', icon: Grid, label: 'Posts' },
    { id: 'saved', icon: Bookmark, label: 'Saved' },
    { id: 'tagged', icon: Tag, label: 'Tagged' },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-lg border-b border-gray-100 p-4 z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Profile</h1>
          <Settings className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="p-6 bg-white">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">Sarah Chen</h2>
            <p className="text-gray-600">@sarahc</p>
            <p className="text-sm text-gray-500 mt-1">UI/UX Designer & Developer</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-around mb-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div className="mb-6">
          <p className="text-gray-700 mb-2">
            Creating beautiful digital experiences ✨
          </p>
          <p className="text-gray-700 mb-2">
            📍 San Francisco, CA
          </p>
          <p className="text-blue-600">
            🔗 sarah-chen.dev
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 btn-primary">
            Edit Profile
          </button>
          <button className="btn-secondary">
            Share Profile
          </button>
          <button className="p-3 border border-gray-200 rounded-xl">
            <MoreHorizontal className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Highlights */}
      <div className="p-4 bg-white border-b border-gray-100">
        <div className="flex space-x-4 overflow-x-auto">
          <div className="flex flex-col items-center space-y-2 min-w-[64px]">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl">
                +
              </div>
            </div>
            <span className="text-xs text-gray-600">New</span>
          </div>
          {['Work', 'Travel', 'Food', 'Nature'].map((highlight) => (
            <div key={highlight} className="flex flex-col items-center space-y-2 min-w-[64px]">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-0.5">
                <div className="w-full h-full bg-gray-200 rounded-full"></div>
              </div>
              <span className="text-xs text-gray-600">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-white border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center py-3 border-b-2 transition-colors duration-300 ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-400'
            }`}
          >
            <tab.icon className="w-5 h-5" />
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="p-1 bg-gray-50">
        <div className="grid grid-cols-3 gap-1">
          {userPosts.map((post) => (
            <div key={post.id} className="relative aspect-square group">
              <img
                src={post.image}
                alt="User post"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center space-x-4 text-white">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-5 h-5 fill-white" />
                    <span className="font-medium">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">12</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
