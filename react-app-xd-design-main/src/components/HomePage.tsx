
import { useState } from 'react';
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal } from 'lucide-react';

const HomePage = () => {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const posts = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        username: "@sarahc",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      caption: "Working on some amazing new features! ✨ #coding #tech",
      likes: 245,
      comments: 32,
      time: "2h"
    },
    {
      id: 2,
      user: {
        name: "Alex Rodriguez",
        username: "@alexr",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      caption: "Late night coding session with coffee ☕ Who else is up working?",
      likes: 189,
      comments: 24,
      time: "4h"
    },
    {
      id: 3,
      user: {
        name: "Maya Patel",
        username: "@mayap",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      caption: "Building the future, one line of code at a time 🚀 #webdev",
      likes: 312,
      comments: 45,
      time: "6h"
    }
  ];

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      return newLiked;
    });
  };

  return (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-lg border-b border-gray-100 p-4 z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Discover
          </h1>
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Stories */}
      <div className="p-4">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          <div className="flex flex-col items-center space-y-2 min-w-[64px]">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl">
                +
              </div>
            </div>
            <span className="text-xs text-gray-600">Your Story</span>
          </div>
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col items-center space-y-2 min-w-[64px]">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-0.5">
                <img
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="text-xs text-gray-600 truncate w-16 text-center">
                {post.user.name.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white">
            {/* Post Header */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-3">
                <img
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
                  <p className="text-xs text-gray-500">{post.time} ago</p>
                </div>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>

            {/* Post Image */}
            <div className="relative">
              <img
                src={post.image}
                alt="Post"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Post Actions */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className="transition-transform duration-200 hover:scale-110"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        likedPosts.has(post.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-700'
                      }`}
                    />
                  </button>
                  <MessageCircle className="w-6 h-6 text-gray-700" />
                  <Share className="w-6 h-6 text-gray-700" />
                </div>
                <Bookmark className="w-6 h-6 text-gray-700" />
              </div>

              <p className="font-semibold text-gray-900 mb-1">
                {post.likes + (likedPosts.has(post.id) ? 1 : 0)} likes
              </p>
              <p className="text-gray-900">
                <span className="font-semibold">{post.user.username}</span>{' '}
                {post.caption}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                View all {post.comments} comments
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
