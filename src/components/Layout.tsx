import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Calendar, PlusCircle, GraduationCap } from 'lucide-react';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap size={28} className="text-indigo-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Newton School</h1>
                <p className="text-xs text-gray-500">Campus Events Portal</p>
              </div>
            </Link>
            
            <nav className="hidden md:flex space-x-1">
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => 
                  `px-4 py-2 rounded-md text-sm font-medium transition ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <span className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  Events
                </span>
              </NavLink>
              
              <NavLink 
                to="/submit" 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-md text-sm font-medium transition ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <span className="flex items-center">
                  <PlusCircle size={16} className="mr-2" />
                  Submit Event
                </span>
              </NavLink>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex space-x-1">
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => 
                  `p-2 rounded-md transition ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <Calendar size={20} />
              </NavLink>
              
              <NavLink 
                to="/submit" 
                className={({ isActive }) => 
                  `p-2 rounded-md transition ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <PlusCircle size={20} />
              </NavLink>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <GraduationCap size={20} className="text-indigo-600 mr-2" />
              <span className="text-gray-600 text-sm">© 2025 Newton School of Technology</span>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;