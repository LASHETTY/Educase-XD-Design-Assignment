
import { useState } from 'react';
import { Search, Filter, TrendingUp } from 'lucide-react';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const trendingTopics = [
    { tag: '#coding', posts: '2.4M' },
    { tag: '#webdev', posts: '1.8M' },
    { tag: '#javascript', posts: '3.2M' },
    { tag: '#react', posts: '1.5M' },
    { tag: '#design', posts: '2.1M' },
  ];

  const searchResults = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop",
      likes: '1.2k'
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=200&fit=crop",
      likes: '956'
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=200&fit=crop",
      likes: '2.1k'
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=200&fit=crop",
      likes: '843'
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=200&fit=crop",
      likes: '1.5k'
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=200&fit=crop",
      likes: '678'
    },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'photos', label: 'Photos' },
    { id: 'videos', label: 'Videos' },
    { id: 'people', label: 'People' },
    { id: 'tags', label: 'Tags' },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-lg border-b border-gray-100 p-4 z-10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Explore
        </h1>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-12 py-3 bg-gray-100 rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
          />
          <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-2 mt-4 overflow-x-auto">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeFilter === filter.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-orange-500" />
          <h2 className="text-lg font-semibold text-gray-900">Trending Now</h2>
        </div>
        
        <div className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
              <div>
                <p className="font-semibold text-blue-600">{topic.tag}</p>
                <p className="text-sm text-gray-500">{topic.posts} posts</p>
              </div>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Results Grid */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Discover</h2>
        <div className="grid grid-cols-3 gap-1">
          {searchResults.map((result) => (
            <div key={result.id} className="relative aspect-square">
              <img
                src={result.image}
                alt="Search result"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  {result.likes}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
