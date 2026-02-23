
        // Mock data
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

        const MOCK_TESTIMONIALS = [
            { name: 'Sarah J.', feedback: "EduScout helped me find the perfect course. The comparison feature is a game-changer!", avatar: 'https://placehold.co/100x100/A78BFA/ffffff?text=SJ' },
            { name: 'Michael K.', feedback: "I saved so much time and money using EduScout. The UI is clean and easy to navigate.", avatar: 'https://placehold.co/100x100/4F46E5/ffffff?text=MK' },
            { name: 'Emily P.', feedback: "The detailed course cards and sorting options made my decision so much easier. Highly recommend!", avatar: 'https://placehold.co/100x100/1D4ED8/ffffff?text=EP' },
        ];

        const MOCK_BLOG_POSTS = [
            { id: 1, title: 'Choosing the Right Course Platform', author: 'EduScout Team', date: 'Oct 2, 2023', content: "The world of online education is vast, with platforms like Coursera, Udemy, and edX each offering a unique experience. When choosing a platform, consider factors like course accreditation, instructor expertise, and learning format. For example, Coursera and edX often partner with universities, while Udemy provides a wide variety of courses from independent instructors. Your choice depends on your goals: are you seeking a professional certificate, a new hobby, or a deep dive into a specific skill? Each platform has its strengths, so take the time to explore and find the one that best fits your needs." },
            { id: 2, title: '5 Tips for Effective Online Learning', author: 'Sarah Lee', date: 'Sep 25, 2023', content: "Online learning requires discipline and a structured approach. To get the most out of your courses, try these five tips: 1. Create a dedicated study space. 2. Set a regular schedule and stick to it. 3. Participate in forums and discussions to engage with the material. 4. Take breaks to avoid burnout and maintain focus. 5. Apply what you learn through hands-on projects. By treating your online course like a real commitment, you'll maximize your learning and retain information more effectively." },
            { id: 3, title: 'The Future of Education: Micro-credentials', author: 'David Chen', date: 'Sep 18, 2023', content: "The future of education is shifting towards micro-credentials and specialized skills. Instead of traditional long-term degrees, learners are increasingly seeking short, focused courses that provide immediate, applicable knowledge. This trend is driven by the rapid pace of technological change, where a skill learned today may be obsolete tomorrow. Micro-credentials allow professionals to continuously upskill and adapt to new industry demands, making them a powerful tool for career growth in the modern economy." },
        ];

        // State variables
        let currentPage = 'home';
        let isDarkMode = false;
        let compareList = [];
        let cart = [];

        // DOM elements
        const pages = {
            'home': document.getElementById('home-page'),
            'compare': document.getElementById('compare-page'),
            'cart': document.getElementById('cart-page'),
            'checkout': document.getElementById('checkout-page'),
            'about': document.getElementById('about-page'),
            'contact': document.getElementById('contact-page'),
            'blogPost': document.getElementById('blog-post-page'),
            'signIn': document.getElementById('signIn-page'),
            'signUp': document.getElementById('signUp-page')
        };
        const courseCardsContainer = document.getElementById('course-cards');
        const topPicksCardsContainer = document.getElementById('top-picks-cards');
        const testimonialsContainer = document.getElementById('testimonials-section');
        const blogPostsContainer = document.getElementById('blog-posts-section');
        const compareTableContainer = document.getElementById('compare-table-container');
        const cartContainer = document.getElementById('cart-container');
        const cartCountSpan = document.getElementById('cart-count');
        const searchInput = document.getElementById('search-input');
        const sortBySelect = document.getElementById('sort-by');
        const categoryFiltersContainer = document.getElementById('category-filters');
        const compareMessageBox = document.getElementById('compareMessageBox');
        const cartMessageBox = document.getElementById('cartMessageBox');
        const checkoutMessageBox = document.getElementById('checkoutMessageBox');
        const darkModeToggle = document.getElementById('darkModeToggle');
        const paymentForm = document.getElementById('payment-form');
        const checkoutTotalSpan = document.getElementById('checkout-total');

        // Helper function to show a temporary message
        function showMessage(messageBox, message) {
            messageBox.textContent = message;
            messageBox.classList.add('translate-y-0', 'opacity-100');
            setTimeout(() => {
                messageBox.classList.remove('translate-y-0', 'opacity-100');
                messageBox.classList.add('-translate-y-full', 'opacity-0');
            }, 3000);
        }

        // Navigation function
        function navigateTo(page, data = null) {
            // Hide all pages
            for (const pageName in pages) {
                if(pages[pageName]) pages[pageName].classList.remove('active');
            }

            // Show the target page
            if (pages[page]) {
                pages[page].classList.add('active');
                currentPage = page;
            }

            // Handle specific page logic
            if (page === 'blogPost' && data) {
                document.getElementById('blog-title').textContent = data.title;
                document.getElementById('blog-meta').textContent = `By ${data.author} on ${data.date}`;
                document.getElementById('blog-content').textContent = data.content;
            } else if (page === 'compare') {
                renderComparisonTable();
            } else if (page === 'cart') {
                renderCartTable();
            } else if (page === 'checkout') {
                renderCheckoutPage();
            }

            window.scrollTo(0, 0);
        }

        // Dark mode toggle function
        function toggleDarkMode() {
            isDarkMode = !isDarkMode;
            document.documentElement.classList.toggle('dark', isDarkMode);
            updateDarkModeIcon();
        }

        function updateDarkModeIcon() {
            const icon = isDarkMode ? `
                <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 14a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm4-4a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM3 10a1 1 0 01-1 1H1a1 1 0 110-2h1a1 1 0 011 1zm14.732-5.732a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 111.414-1.414l.707.707zM3.268 14.732a1 1 0 01-1.414-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707zM16.464 16.464l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 01-1.414 1.414zm-12 0l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM10 5a5 5 0 100 10 5 5 0 000-10zm-6 5a6 6 0 1112 0 6 6 0 01-12 0z" />
                </svg>` : `
                <svg class="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.914A10 10 0 0111.546 2.457a1 1 0 01.953 2.155A7.999 7.999 0 0011.05 15.011a1 1 0 01.916 1.815 10.001 10.001 0 015.327-3.915 1 1 0 01.004-1.014z" />
                </svg>`;
            darkModeToggle.innerHTML = icon;
        }

        // Render functions
        function renderCourseCard(course) {
            return `
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-sm font-semibold text-gray-500 dark:text-gray-400">${course.platform}</span>
                        <span class="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                            $${course.price === 0.00 ? 'Free' : course.price.toFixed(2)}
                        </span>
                    </div>
                    <div class="flex flex-col flex-grow">
                        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-50">${course.title}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">${course.description}</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div class="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400">
                            <span class="text-lg mr-1">🛒</span>
                            ${course.rating.toFixed(1)} (${(course.reviews / 1000).toFixed(0)}k)
                        </div>
                        <div class="flex items-center space-x-2">
                            
                        </div>
                    </div>
                </div>
            `;
        }

        function renderFilteredCourses(filtered) {
            courseCardsContainer.innerHTML = filtered.map(renderCourseCard).join('');
            if (filtered.length === 0) {
                courseCardsContainer.innerHTML = `<div class="md:col-span-2 lg:col-span-3 text-center py-10 text-gray-500 dark:text-gray-400">No courses found matching your criteria.</div>`;
            }
        }

        function renderTopPicks() {
            const topPicks = MOCK_COURSES.slice(0, 3);
            topPicksCardsContainer.innerHTML = topPicks.map(renderCourseCard).join('');
        }

        function renderTestimonials() {
            testimonialsContainer.innerHTML = MOCK_TESTIMONIALS.map(testimonial => `
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}" class="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-indigo-200 dark:border-indigo-700"/>
                    <p class="text-gray-600 dark:text-gray-300 italic mb-4">"${testimonial.feedback}"</p>
                    <p class="font-semibold text-gray-900 dark:text-gray-100">- ${testimonial.name}</p>
                </div>
            `).join('');
        }

        function renderBlogPosts() {
            blogPostsContainer.innerHTML = MOCK_BLOG_POSTS.map(post => `
                <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 class="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">${post.title}</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">By ${post.author} on ${post.date}</p>
                    <button onclick="navigateTo('blogPost', MOCK_BLOG_POSTS.find(p => p.id === ${post.id}))" class="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">Read More</button>
                </div>
            `).join('');
        }

        function renderCategories() {
            const categories = ['All', 'Technology', 'Business', 'Arts', 'Science', 'Personal Development'];
            categoryFiltersContainer.innerHTML = `
                <span class="font-semibold text-gray-700 dark:text-gray-300">Categories:</span>
                ${categories.map(cat => `
                    <button
                        onclick="filterAndRenderCourses('${cat}', sortBySelect.value)"
                        class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900"
                        data-category="${cat}"
                    >
                        ${cat}
                    </button>
                `).join('')}
            `;
            // Add initial active class to 'All'
            categoryFiltersContainer.querySelector('[data-category="All"]').classList.add('bg-indigo-600', 'text-white', 'shadow-lg');
            categoryFiltersContainer.querySelector('[data-category="All"]').classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300', 'hover:bg-indigo-100', 'dark:hover:bg-indigo-900');
        }

        function filterAndRenderCourses(category, sortBy) {
            const searchQuery = searchInput.value.toLowerCase();
            let filtered = MOCK_COURSES.filter(course =>
                course.title.toLowerCase().includes(searchQuery) &&
                (category === 'All' || course.category === category)
            );

            // Sort logic
            filtered.sort((a, b) => {
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
            renderFilteredCourses(filtered);

            // Update active category button
            const buttons = categoryFiltersContainer.querySelectorAll('button');
            buttons.forEach(btn => {
                btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-lg');
                btn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300', 'hover:bg-indigo-100', 'dark:hover:bg-indigo-900');
            });
            categoryFiltersContainer.querySelector(`[data-category="${category}"]`).classList.add('bg-indigo-600', 'text-white', 'shadow-lg');
            categoryFiltersContainer.querySelector(`[data-category="${category}"]`).classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300', 'hover:bg-indigo-100', 'dark:hover:bg-indigo-900');
        }

        function addToCompare(courseId) {
            const course = MOCK_COURSES.find(c => c.id === courseId);
            if (course && !compareList.some(c => c.id === course.id)) {
                compareList.push(course);
                showMessage(compareMessageBox, 'Course added to comparison list!');
            }
        }

        function removeFromCompare(courseId) {
            compareList = compareList.filter(c => c.id !== courseId);
            renderComparisonTable();
        }

        function renderComparisonTable() {
            if (compareList.length === 0) {
                compareTableContainer.innerHTML = `
                    <div class="text-center py-10 text-gray-500 dark:text-gray-400">
                        Add courses to the comparison table from the main page.
                    </div>
                `;
                return;
            }

            const headerHtml = compareList.map(course => `
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    <div class="flex justify-between items-center">
                        <span>${course.title}</span>
                        <button onclick="removeFromCompare(${course.id})" class="text-red-500 hover:text-red-700 text-lg">
                            &times;
                        </button>
                    </div>
                </th>
            `).join('');

            const tableRows = [
                { title: 'Platform', field: 'platform' },
                { title: 'Price', field: 'price' },
                { title: 'Rating', field: 'rating' },
                { title: 'Duration', field: 'duration' },
                { title: 'Category', field: 'category' },
            ];

            const bodyHtml = tableRows.map(row => `
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">${row.title}</td>
                    ${compareList.map(course => {
                        let value = course[row.field];
                        if (row.field === 'price') {
                            value = `$${value === 0.00 ? 'Free' : value.toFixed(2)}`;
                        }
                        return `<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">${value}</td>`;
                    }).join('')}
                </tr>
            `).join('');

            compareTableContainer.innerHTML = `
                <div class="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Feature</th>
                                ${headerHtml}
                            </tr>
                        </thead>
                        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            ${bodyHtml}
                        </tbody>
                    </table>
                </div>
            `;
        }

        // Cart functions
        function updateCartCount() {
            cartCountSpan.textContent = cart.length;
            if (cart.length > 0) {
                cartCountSpan.classList.remove('hidden');
            } else {
                cartCountSpan.classList.add('hidden');
            }
        }

        function addToCart(courseId) {
            const course = MOCK_COURSES.find(c => c.id === courseId);
            if (course && !cart.some(c => c.id === course.id)) {
                cart.push(course);
                updateCartCount();
                showMessage(cartMessageBox, 'Course added to cart!');
            }
        }

        function removeFromCart(courseId) {
            cart = cart.filter(c => c.id !== courseId);
            updateCartCount();
            renderCartTable();
        }
        
        function renderCartTable() {
            if (cart.length === 0) {
                cartContainer.innerHTML = `
                    <div class="text-center py-10 text-gray-500 dark:text-gray-400">
                        Your cart is empty.
                    </div>
                `;
                return;
            }

            const total = cart.reduce((sum, item) => sum + item.price, 0);

            const cartItemsHtml = cart.map(item => `
                <div class="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm mb-4">
                    <div class="flex items-center space-x-4">
                        <div class="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                            $${item.price.toFixed(2)}
                        </div>
                        <div class="flex-1">
                            <h4 class="font-semibold text-lg text-gray-900 dark:text-gray-100">${item.title}</h4>
                            <p class="text-sm text-gray-500 dark:text-gray-400">${item.platform}</p>
                        </div>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.14-2.043-2.258a48.517 48.517 0 00-1.558-.194M5.6 5.79a2.25 2.25 0 01-2.244-2.077L4.772 5.79m0 0a48.11 48.11 0 013.478-.397" />
                        </svg>
                    </button>
                </div>
            `).join('');

            cartContainer.innerHTML = `
                <div class="space-y-4">
                    ${cartItemsHtml}
                </div>
                <div class="mt-8 flex justify-between items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div class="text-lg font-bold text-gray-900 dark:text-gray-100">
                        Total: $${total.toFixed(2)}
                    </div>
                    <button onclick="navigateTo('checkout')" class="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
                        Checkout
                    </button>
                </div>
            `;
        }

        // Checkout/Payment functions
        function renderCheckoutPage() {
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            checkoutTotalSpan.textContent = `$${total.toFixed(2)}`;
        }

        function handlePayment(event) {
            event.preventDefault();
            // Simulate payment process
            console.log('Processing payment...');
            
            // Clear the cart
            cart = [];
            updateCartCount();
            
            // Show a success message
            showMessage(checkoutMessageBox, 'Payment successful! Thank you.');
            
            // Redirect after a short delay
            setTimeout(() => {
                navigateTo('home');
            }, 3000);
        }

        // Initial setup and event listeners
        window.onload = () => {
            renderCategories();
            filterAndRenderCourses('All', sortBySelect.value);
            renderTopPicks();
            renderTestimonials();
            renderBlogPosts();
            updateDarkModeIcon();
            updateCartCount();
            
            darkModeToggle.addEventListener('click', toggleDarkMode);
            searchInput.addEventListener('input', () => filterAndRenderCourses(document.querySelector('#category-filters .bg-indigo-600').dataset.category, sortBySelect.value));
            sortBySelect.addEventListener('change', () => filterAndRenderCourses(document.querySelector('#category-filters .bg-indigo-600').dataset.category, sortBySelect.value));
            paymentForm.addEventListener('submit', handlePayment);
        };