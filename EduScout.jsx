
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Use this mock data to simulate courses from different platforms.
// In a real application, this would come from an API.
const MOCK_COURSES = [
  { id: 1, title: 'Machine Learning A-Z™', platform: 'Udemy', logo: 'Udemy', price: 19.99, rating: 4.6, duration: '15h', category: 'Technology', description: 'Master machine learning and deep learning with Python & R.', reviews: 120000, difficulty: 'All Levels' },
  { id: 2, title: 'Google UX Design Professional Certificate', platform: 'Coursera', logo: 'Coursera', price: 39.00, rating: 4.8, duration: '6 months', category: 'Business', description: 'Gain in-demand skills and a professional certificate from Google.', reviews: 85000, difficulty: 'Beginner' },
  { id: 3, title: 'The Complete JavaScript Course', platform: 'Udemy', logo: 'Udemy', price: 17.99, rating: 4.7, duration: '68.5h', category: 'Technology', description: 'The #1 JavaScript course to build modern websites.', reviews: 250000, difficulty: 'All Levels' },
  { id: 4, title: 'Foundations of Project Management', platform: 'Coursera', logo: 'Coursera', price: 49.00, rating: 4.7, duration: '5 months', category: 'Business', description: 'Learn to apply key project management skills to your work.', reviews: 78000, difficulty: 'Beginner' },
  { id: 5, title: 'Introduction to Psychology', platform: 'edX', logo: 'edX', price: 0.00, rating: 4.5, duration: '12 weeks', category: 'Science', description: 'Explore the fascinating world of human behavior and mental processes.', reviews: 52000, difficulty: 'Introductory' },
  { id: 6, title: 'Digital Marketing Fundamentals', platform: 'LinkedIn Learning', logo: 'LinkedIn Learning', price: 29.99, rating: 4.6, duration: '8h', category: 'Business', description: 'Learn the essentials of digital marketing, from SEO to social media.', reviews: 45000, difficulty: 'Intermediate' },
  { id: 7, title: 'Adobe Illustrator CC Masterclass', platform: 'Skillshare', logo: 'Skillshare', price: 15.00, rating: 4.9, duration: '10h', category: 'Arts', description: 'Unlock your creative potential with professional illustration techniques.', reviews: 30000, difficulty: 'All Levels' },
  { id: 8, title: 'Data Science with Python', platform: 'Coursera', logo: 'Coursera', price: 49.00, rating: 4.8, duration: '8 months', category: 'Technology', description: 'Learn data analysis, visualization, and machine learning with Python.', reviews: 95000, difficulty: 'Intermediate' },
  { id: 9, title: 'Photography Masterclass', platform: 'Udemy', logo: 'Udemy', price: 14.99, rating: 4.7, duration: '24h', category: 'Arts', description: 'A complete guide to photography, from beginner to advanced.', reviews: 150000, difficulty: 'All Levels' },
  { id: 10, title: 'Public Speaking: How to Ace Your Presentation', platform: 'Skillshare', logo: 'Skillshare', price: 15.00, rating: 4.8, duration: '3h', category: 'Personal Development', description: 'Gain confidence and deliver powerful speeches with proven techniques.', reviews: 25000, difficulty: 'Beginner' },
  { id: 11, title: 'The Science of Well-Being', platform: 'Coursera', logo: 'Coursera', price: 0.00, rating: 4.9, duration: '10 weeks', category: 'Personal Development', description: 'A Yale University course on the principles of happiness and well-being.', reviews: 500000, difficulty: 'Beginner' },
  { id: 12, title: 'SQL Fundamentals for Data Analysis', platform: 'edX', logo: 'edX', price: 99.00, rating: 4.6, duration: '6 weeks', category: 'Technology', description: 'Master SQL for data analysis and build a strong foundation.', reviews: 40000, difficulty: 'Beginner' },
];

// Mock data for other sections
const MOCK_TESTIMONIALS = [
  { name: 'Sarah J.', feedback: "EduScout helped me find the perfect course. The comparison feature is a game-changer!", avatar: 'https://placehold.co/100x100/A78BFA/ffffff?text=SJ' },
  { name: 'Michael K.', feedback: "I saved so much time and money using EduScout. The UI is clean and easy to navigate.", avatar: 'https://placehold.co/100x100/4F46E5/ffffff?text=MK' },
  { name: 'Emily P.', feedback: "The detailed course cards and sorting options made my decision so much easier. Highly recommend!", avatar: 'https://placehold.co/100x100/1D4ED8/ffffff?text=EP' },
];

const MOCK_BLOG_POSTS = [
  {
    id: 1,
    title: 'Choosing the Right Course Platform',
    author: 'EduScout Team',
    date: 'Oct 2, 2023',
    content: "The world of online education is vast, with platforms like Coursera, Udemy, and edX each offering a unique experience. When choosing a platform, consider factors like course accreditation, instructor expertise, and learning format. For example, Coursera and edX often partner with universities, while Udemy provides a wide variety of courses from independent instructors. Your choice depends on your goals: are you seeking a professional certificate, a new hobby, or a deep dive into a specific skill? Each platform has its strengths, so take the time to explore and find the one that best fits your needs."
  },
  {
    id: 2,
    title: '5 Tips for Effective Online Learning',
    author: 'Sarah Lee',
    date: 'Sep 25, 2023',
    content: "Online learning requires discipline and a structured approach. To get the most out of your courses, try these five tips: 1. Create a dedicated study space. 2. Set a regular schedule and stick to it. 3. Participate in forums and discussions to engage with the material. 4. Take breaks to avoid burnout and maintain focus. 5. Apply what you learn through hands-on projects. By treating your online course like a real commitment, you'll maximize your learning and retain information more effectively."
  },
  {
    id: 3,
    title: 'The Future of Education: Micro-credentials',
    author: 'David Chen',
    date: 'Sep 18, 2023',
    content: "The future of education is shifting towards micro-credentials and specialized skills. Instead of traditional long-term degrees, learners are increasingly seeking short, focused courses that provide immediate, applicable knowledge. This trend is driven by the rapid pace of technological change, where a skill learned today may be obsolete tomorrow. Micro-credentials allow professionals to continuously upskill and adapt to new industry demands, making them a powerful tool for career growth in the modern economy."
  },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [compareList, setCompareList] = useState([]);
  const [showCompareAlert, setShowCompareAlert] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [authPage, setAuthPage] = useState('none'); // 'none', 'signIn', 'signUp'

  // Helper function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Helper function to change page
  const navigateTo = (page, data = null) => {
    setCurrentPage(page);
    setAuthPage('none'); // Reset auth page
    if (page === 'blogPost' && data) {
      setSelectedBlog(data);
    } else {
      setSelectedBlog(null);
    }
    if (page === 'home') {
      window.scrollTo(0, 0);
    }
  };

  // Logic to add a course to the comparison table
  const addToCompare = (course) => {
    if (!compareList.some(c => c.id === course.id)) {
      setCompareList([...compareList, course]);
      setShowCompareAlert(true);
      setTimeout(() => setShowCompareAlert(false), 3000);
    }
  };

  // Logic to remove a course from the comparison table
  const removeFromCompare = (courseId) => {
    setCompareList(compareList.filter(c => c.id !== courseId));
  };

  // Filter and sort logic for courses
  const filteredCourses = MOCK_COURSES
    .filter(course =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === 'All' || course.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'duration') {
        const durationA = parseFloat(a.duration);
        const durationB = parseFloat(b.duration);
        return durationA - durationB;
      }
      return 0;
    });

  // A component to render a single course card
  const CourseCard = ({ course }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">{course.platform}</span>
        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
          ${course.price === 0.00 ? 'Free' : course.price.toFixed(2)}
        </span>
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-50">{course.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">{course.description}</p>
      </div>
      <div className="flex flex-wrap items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400">
          <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
          {course.rating.toFixed(1)} ({course.reviews / 1000}k)
        </div>
        <button
          onClick={() => addToCompare(course)}
          className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors duration-300"
        >
          Compare
        </button>
      </div>
    </div>
  );

  return (
    <div className={`font-sans ${darkMode ? 'dark' : ''}`}>
      {/* Container for dark mode styling */}
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500">
        {/* Navigation Bar */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md py-4 transition-colors duration-500">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                EduScout
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <button onClick={() => navigateTo('home')} className="hover:text-indigo-600 transition-colors duration-300">Home</button>
              <button onClick={() => navigateTo('home')} className="hover:text-indigo-600 transition-colors duration-300">Categories</button>
              <button onClick={() => navigateTo('compare')} className="hover:text-indigo-600 transition-colors duration-300">Compare</button>
              <button onClick={() => navigateTo('about')} className="hover:text-indigo-600 transition-colors duration-300">About</button>
              <button onClick={() => navigateTo('contact')} className="hover:text-indigo-600 transition-colors duration-300">Contact</button>
            </nav>
            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                {darkMode ? (
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 14a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm4-4a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM3 10a1 1 0 01-1 1H1a1 1 0 110-2h1a1 1 0 011 1zm14.732-5.732a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 111.414-1.414l.707.707zM3.268 14.732a1 1 0 01-1.414-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707zM16.464 16.464l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 01-1.414 1.414zm-12 0l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM10 5a5 5 0 100 10 5 5 0 000-10zm-6 5a6 6 0 1112 0 6 6 0 01-12 0z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.914A10 10 0 0111.546 2.457a1 1 0 01.953 2.155A7.999 7.999 0 0011.05 15.011a1 1 0 01.916 1.815 10.001 10.001 0 015.327-3.915 1 1 0 01.004-1.014z" />
                  </svg>
                )}
              </button>
              <button onClick={() => setAuthPage('signIn')} className="hidden sm:inline-block px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                Sign In
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </header>

        {/* Compare Alert Message */}
        {showCompareAlert && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform z-50">
            Course added to comparison list!
          </div>
        )}

        {/* Dynamic Content based on currentPage and authPage states */}
        <main className="pt-20">
          {authPage === 'signIn' && (
            <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen-minus-header">
              <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Sign In</h2>
                <form className="space-y-6">
                  <div>
                    <input type="email" placeholder="Email Address" className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                  </div>
                  <div>
                    <input type="password" placeholder="Password" className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                  </div>
                  <button type="submit" className="w-full px-6 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
                    Sign In
                  </button>
                </form>
                <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
                  Don't have an account? <button onClick={() => setAuthPage('signUp')} className="text-indigo-600 font-semibold hover:underline">Sign Up</button>
                </div>
              </div>
            </div>
          )}

          {authPage === 'signUp' && (
            <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen-minus-header">
              <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Sign Up</h2>
                <form className="space-y-6">
                  <div>
                    <input type="text" placeholder="Full Name" className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                  </div>
                  <div>
                    <input type="password" placeholder="Password" className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                  </div>
                  <button type="submit" className="w-full px-6 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
                    Sign Up
                  </button>
                </form>
                <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
                  Already have an account? <button onClick={() => setAuthPage('signIn')} className="text-indigo-600 font-semibold hover:underline">Sign In</button>
                </div>
              </div>
            </div>
          )}

          {currentPage === 'home' && authPage === 'none' && (
            <>
              {/* Hero Section */}
              <section className="relative overflow-hidden pt-24 pb-32 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800">
                <div className="absolute inset-0 z-0 opacity-20">
                  <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 320" fill="none">
                    <path d="M0,224L48,224C96,224,192,224,288,213.3C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,213.3C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Find the Best Course, <br className="hidden md:inline"/>Smarter with EduScout
                  </h1>
                  <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto mb-8 opacity-90">
                    Compare online courses from all major platforms to make an informed decision and invest in your future.
                  </p>
                  <div className="flex justify-center mb-6">
                    <div className="relative w-full max-w-xl">
                      <input
                        type="text"
                        placeholder="Search for a course..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full py-4 pl-12 pr-4 text-gray-800 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                      />
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button onClick={() => navigateTo('compare')} className="px-6 py-3 bg-white text-indigo-600 rounded-full shadow-md font-semibold hover:bg-gray-100 transition-colors duration-300">
                      Start Comparing
                    </button>
                    <button className="px-6 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300">
                      Explore Categories
                    </button>
                  </div>
                </div>
              </section>

              {/* Course Filters & Sort Section */}
              <section className="py-12 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Categories:</span>
                    {['All', 'Technology', 'Business', 'Arts', 'Science', 'Personal Development'].map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                          selectedCategory === category
                            ? 'bg-indigo-600 text-white shadow-lg'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <label htmlFor="sort" className="font-semibold text-gray-700 dark:text-gray-300">Sort By:</label>
                    <select
                      id="sort"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                    >
                      <option value="rating">Rating</option>
                      <option value="price">Price</option>
                      <option value="duration">Duration</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Course Card Grid */}
              <section className="pb-16 container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">Browse All Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                  {filteredCourses.length === 0 && (
                    <div className="md:col-span-2 lg:col-span-3 text-center py-10 text-gray-500 dark:text-gray-400">
                      No courses found matching your criteria.
                    </div>
                  )}
                </div>
              </section>

              {/* Top Picks Section */}
              <section className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">Top Picks</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MOCK_COURSES.slice(0, 3).map(course => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </div>
              </section>

              {/* Testimonials Section */}
              <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100">What Our Students Say</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {MOCK_TESTIMONIALS.map((testimonial, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-indigo-200 dark:border-indigo-700"/>
                        <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{testimonial.feedback}"</p>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">- {testimonial.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Blog Section */}
              <section className="py-16 bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100">Read Our Latest Blog Posts</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {MOCK_BLOG_POSTS.map(post => (
                      <div key={post.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">{post.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">By {post.author} on {post.date}</p>
                        <button onClick={() => navigateTo('blogPost', post)} className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">Read More</button>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          {currentPage === 'compare' && authPage === 'none' && (
            <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">Course Comparison Table</h2>
              {compareList.length > 0 ? (
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Feature</th>
                        {compareList.map(course => (
                          <th key={course.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            <div className="flex justify-between items-center">
                              <span>{course.title}</span>
                              <button onClick={() => removeFromCompare(course.id)} className="text-red-500 hover:text-red-700 text-lg">
                                &times;
                              </button>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Platform</td>
                        {compareList.map(course => <td key={course.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{course.platform}</td>)}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Price</td>
                        {compareList.map(course => <td key={course.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">${course.price === 0.00 ? 'Free' : course.price.toFixed(2)}</td>)}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Rating</td>
                        {compareList.map(course => <td key={course.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{course.rating.toFixed(1)}</td>)}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Duration</td>
                        {compareList.map(course => <td key={course.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{course.duration}</td>)}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Category</td>
                        {compareList.map(course => <td key={course.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{course.category}</td>)}
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                  Add courses to the comparison table from the main page.
                </div>
              )}
            </section>
          )}

          {currentPage === 'about' && authPage === 'none' && (
            <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">About EduScout</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  EduScout was founded with a simple mission: to make online learning accessible and transparent for everyone. With thousands of courses available across countless platforms, finding the right one can be overwhelming. We're here to cut through the noise.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Our platform provides a single, unified place to compare courses based on price, rating, duration, and content. We believe that with the right information, you can make the best choice for your educational journey.
                </p>
              </div>
            </section>
          )}

          {currentPage === 'contact' && authPage === 'none' && (
            <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">Contact Us</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Have a question, feedback, or a suggestion? We'd love to hear from you.
                </p>
                <form className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div>
                    <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                  </div>
                  <div>
                    <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                  </div>
                  <div>
                    <textarea placeholder="Your Message" rows="5" className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                  </div>
                  <button type="submit" className="w-full px-6 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
                    Send Message
                  </button>
                </form>
                <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
                  <p className="font-semibold">EduScout Headquarters</p>
                  <p>123 Learning Lane, Knowledge City, 12345</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </div>
            </section>
          )}

          {currentPage === 'blogPost' && authPage === 'none' && selectedBlog && (
            <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <button onClick={() => navigateTo('home')} className="flex items-center text-indigo-600 dark:text-indigo-400 font-semibold mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Blog
                </button>
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">{selectedBlog.title}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">By {selectedBlog.author} on {selectedBlog.date}</p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">{selectedBlog.content}</p>
              </div>
            </section>
          )}

        </main>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <h3 className="text-lg font-bold mb-4 text-white">EduScout</h3>
              <p className="text-sm">Find and compare the best online courses to accelerate your learning journey.</p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors duration-300">Home</button></li>
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors duration-300">Categories</button></li>
                <li><button onClick={() => navigateTo('compare')} className="hover:text-white transition-colors duration-300">Compare</button></li>
                <li><button onClick={() => navigateTo('about')} className="hover:text-white transition-colors duration-300">About</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4 text-white">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors duration-300">Blog</button></li>
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors duration-300">Testimonials</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors duration-300">Contact</button></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4 text-white">Newsletter</h4>
              <p className="text-sm mb-4">Stay up to date with new courses and learning tips.</p>
              <form className="flex">
                <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-l-lg bg-gray-800 dark:bg-gray-700 border border-gray-700 dark:border-gray-600 focus:outline-none"/>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
            &copy; 2023 EduScout. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

// Root element setup
const container = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);

// This script loads Tailwind CSS and other dependencies.
document.addEventListener('DOMContentLoaded', () => {
  const script = document.createElement('script');
  script.src = 'https://cdn.tailwindcss.com';
  document.head.appendChild(script);

  const style = document.createElement('style');
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; }
    #root { height: 100%; width: 100%; }
    html {
      height: 100%;
      width: 100%;
      scroll-behavior: smooth;
    }
  `;
  document.head.appendChild(style);
});
