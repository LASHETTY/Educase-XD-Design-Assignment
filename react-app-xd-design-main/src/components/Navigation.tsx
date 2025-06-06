
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, Plus, Heart, User } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCreateModal, setShowCreateModal] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, path: '/', label: 'Home' },
    { id: 'search', icon: Search, path: '/search', label: 'Search' },
    { id: 'create', icon: Plus, path: null, label: 'Create' },
    { id: 'activity', icon: Heart, path: '/activity', label: 'Activity' },
    { id: 'profile', icon: User, path: '/profile', label: 'Profile' },
  ];

  const handleNavClick = (item: any) => {
    if (item.id === 'create') {
      setShowCreateModal(true);
    } else if (item.path) {
      navigate(item.path);
    }
  };

  const isActive = (path: string | null) => {
    if (!path) return false;
    return location.pathname === path;
  };

  return (
    <>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[375px] bg-white/80 backdrop-blur-lg border-t border-gray-100 px-4 py-2 z-50">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`nav-item ${active ? 'active' : ''} ${
                  item.id === 'create' ? 'text-white' : ''
                }`}
              >
                {item.id === 'create' ? (
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                ) : (
                  <Icon 
                    className={`w-6 h-6 ${
                      active ? 'text-blue-500' : 'text-gray-400'
                    }`} 
                  />
                )}
                <span className={`text-xs mt-1 ${
                  active ? 'text-blue-500' : 'text-gray-400'
                } ${item.id === 'create' ? 'text-gray-600' : ''}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Post</h3>
            <div className="space-y-3">
              <button className="w-full p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium">
                Take Photo
              </button>
              <button className="w-full p-4 bg-gray-100 text-gray-700 rounded-xl font-medium">
                Choose from Gallery
              </button>
              <button className="w-full p-4 bg-gray-100 text-gray-700 rounded-xl font-medium">
                Create Story
              </button>
            </div>
            <button
              onClick={() => setShowCreateModal(false)}
              className="w-full mt-4 p-3 text-gray-500 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
