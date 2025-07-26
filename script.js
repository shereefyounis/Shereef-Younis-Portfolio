// ========================================
// PROJECT DATA CONFIGURATION
// ========================================

const projects = [
    {
        // Project 1: Fangamer Wireframe
        id: 1,
        title: "Fangamer Wireframe",
        type: "academic",
        description: "A project testing User Interface design and prototyping skills using Adobe XD to modify an existing company website.",
        problem: "-Attempting to modify an existing site, specifically Fangamer, by adjusting its layout on the homepage, cart, checkout, and confirmation screens. Using wireframes to present the new design and give it a fresh look. While it won't be perfect, the goal is to explore a variety of ideas and designs for the site beyond the current one, providing more layout options to work with.",
        about: "- The focus of this project was to test my User Interface design and prototyping skills using Adobe XD, by modifying an existing company website, Fangamer.<br><br>- The project involved analyzing the existing Fangamer website, areas of improvement or changes were identified, and a new wireframe was created to help with the prototyping process.<br><br>- The wireframe was designed to show the designs of improvements or changes of the site in different states and interactions.<br><br>- What I have learned from this project is improtances of wireframing and prototyping in the design process. It allows for a demonstration of the design ideas and interactions before moving on in the projects stages.",
        imageUrl: "Logos/Fangamer Logo.png",
        challenges: "- The main challenge was creating and developing a wireframe that demonstrates the design ideas and interactions of the site, while also taking that wireframe and creating a prototype that shows the stages of the process. A challenge of making sure the material being learned is applied but also knowing that its in the beginning stages so it won't be perfect.",
        course: "- Digital Publishing (GIT 303)",
        program: "- Adobe XD",
        timeline: "- 2 Weeks",
        status: "- Completed",
        OriginalUrl: "https://www.fangamer.com/",
        PrototypeUrl: "https://xd.adobe.com/view/5b317f0a-5318-4210-9e7b-447fbd118887-0e62/?fullscreen",
        finalImages: [
            "Projects/Fangamer screenshot 1.png",
            "Projects/Fangamer screenshot 2.png",
            "Projects/Fangamer screenshot 3.png",
            "Projects/Fangamer screenshot 4.png",
        ]
    },
    {
        // Project 2: eDreams Wireframe
        id: 2,
        title: "eDreams Wireframe",
        type: "academic",
        description: "A project done in my Information Design & Usability course (GIT 340), based on existing website 'eDreams', to show the process of creating wireframes and transition to a final frame.",
        problem: "- Users sometimes need more options after signing in successfully, such as a quick choice to continue or access settings to make changes if needed. Providing users with more freedom and easier access helps them have a smoother experience, as a lack of access could deter them from using the site.<br><br>- Try creating a wireframe that illustrates this scenario based on the travel website eDreams. With multiple types of wireframes, choose one and bring it to life with text, colors, and more to showcase it.",
        about: "- The focus of this project was to create a wireframe for the eDreams website, which is a travel booking platform, and to show the process of creating wireframes and transitioning to a final frame.<br><br>- The project involved analyzing the existing eDreams website, identifying areas for improvement, and creating wireframes that enhance user experience and usability.<br><br>- The wireframes were designed to be user-friendly and functional, ensuring that users can easily navigate through the website and find the information they need.<br><br>- What I have learned from this project is the importance of wireframing in the design process, as it allows for quick iterations and feedback before moving on to the final design.",
        imageUrl: "Logos/eDreams Logo.png",
        challenges: "- The main challenge was to effectively analyze the existing eDreams website and identify areas for improvement while creating wireframes that enhance user experience and usability. Ensuring that the wireframes were user-friendly and functional, while also trying to apply the principles of information design and usability, was a significant challenge I faced during this project.",
        course: "- Information Design & Usability (GIT 340)",
        program: "- Figma",
        timeline: "- 2 Weeks",
        status: "- Completed",
        OriginalUrl: "https://www.edreams.net/",
        finalImages: [
            "Projects/eDreams screenshot 5.png",
        ],
        galleryImages: [
            "Projects/eDreams screenshot 1.png",
            "Projects/eDreams screenshot 2.png",
            "Projects/eDreams screenshot 3.png",
            "Projects/eDreams screenshot 4.png",
        ]
    },
    {
        // Project 3: Jones Soda Poster
        id: 3,
        title: "Jones Soda Poster",
        type: "academic",
        description: "A poster created in my Digital Illustration in Publishing course (GIT 230) for a known brand using Adobe Illustrator.",
        problem: "- Customers typically have limited options when it comes to soda brands, offering a narrow and unappealing selection, which attracts fewer consumers interested in trying new, unique flavors that differ from other brands. Having a wider selection would attract more consumers to the variety of their tasting palate than just a narrow selection.",
        about: "- The focus of this project was to create a visually appealing poster that effectively represents the brand that I chose, Jones Soda, while applying the skills learned in the course for Adobe Photoshop.<br><br>- I chose Jones Soda because of its unique branding and vibrant colors that allows for creative freedom and experimentation with design elements. But its also a brand that I have always enjoyed and grew up with, so I wanted to try creating a poster for it.<br><br>- The poster is designed to capture the essence of Jones Soda's fun and quirky personality, from using bold letters to bring attention, using shadows to bring the depth of the poster, similar but light colors that goes along with the soda's coloring, and adding a slogan that represents the brand.<br><br>- What I have learned from this project is to trying to take a brand and create a poster that represents it to speak to the audience, while also applying the skills learned in the course regarding Adobe Photoshop.",
        imageUrl: "Logos/Jones Soda Logo.png",
        challenges: "- The main challenge was to effectively capture the essence of the brand while applying the skills learned in the course to speak out to the audience. Experimenting with different design elements and ensuring that the poster was visually appealing and aligned with the brand's identity was one of the challenges I faced during this project.",
        course: "- Digital Illustration in Publishing (GIT 230)",
        program: "- Adobe Photoshop",
        timeline: "- 2 Weeks",
        status: "- Completed",
        OriginalUrl: "https://www.jonessoda.com/",
        finalImages: [
            "Projects/Jones Soda Poster Project.png",
        ]
    },

];

// ========================================
// DOM ELEMENTS & INITIALIZATION
// ========================================

const projectsGrid = document.getElementById('projectsGrid');
const mobileMenu = document.getElementById('mobileMenu');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    setupEventListeners();
});

// ========================================
// PROJECT RENDERING FUNCTIONS
// ========================================
function renderProjects() {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in-up';
    
    // Get the project page URL based on project ID
    const projectPages = {
        1: 'project-fangamer.html',
        2: 'project-edreams.html',
        3: 'project-jones-soda.html'
    };
    
    const projectUrl = projectPages[project.id] || '#';
    
    // Add click handler
    card.onclick = () => {
        window.location.href = projectUrl;
    };
    
    card.innerHTML = `
        <img 
            src="${project.imageUrl}" 
            alt="${project.title}"
            class="project-image"
        >
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <div class="project-badge ${project.type}">${project.type}</div>
        </div>
    `;
    
    return card;
}


// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    console.log('toggleMobileMenu called');
    alert('Toggle function called!'); // Temporary debug alert
    console.log('mobileMenu element:', mobileMenu);
    
    if (!mobileMenu) {
        console.log('mobileMenu not found!');
        alert('Mobile menu element not found!');
        return;
    }
    
    mobileMenu.classList.toggle('active');
    console.log('Mobile menu classes after toggle:', mobileMenu.className);
    
    // Toggle hamburger animation
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (mobileBtn) {
        mobileBtn.classList.toggle('active');
        console.log('Mobile button classes after toggle:', mobileBtn.className);
    } else {
        console.log('mobileMenuBtn not found!');
    }
}

// Close mobile menu
function closeMobileMenu() {
    if (!mobileMenu) return;
    
    mobileMenu.classList.remove('active');
    
    // Reset hamburger animation
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (mobileBtn) {
        mobileBtn.classList.remove('active');
    }
}

// Add event listeners for navigation
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Navigation link handlers
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
    console.log('Found nav links:', navLinks.length);
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const href = this.getAttribute('data-href');
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                scrollToSection(targetId);
                closeMobileMenu();
            }
        });
    });

    // Mobile menu button
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    console.log('Mobile menu button found:', mobileMenuBtn);
    
    if (mobileMenuBtn) {
        // Remove any existing listeners first
        mobileMenuBtn.removeEventListener('click', toggleMobileMenu);
        // Add the event listener
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Mobile menu button clicked!');
            toggleMobileMenu();
        });
        console.log('Mobile menu button event listener added');
    } else {
        console.error('Mobile menu button not found!');
    }

    // Contact form handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const formObject = Object.fromEntries(formData);
            
            console.log('Form submitted:', formObject);
            
            // Show success message (you can replace this with actual form submission)
            alert('Thank you for your message! I\'ll get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }

    // Download resume handler
    const downloadBtn = document.getElementById('downloadResume');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your resume download logic here
            console.log('Resume download requested');
        });
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.1s';
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.project-card, .skill-tag');
    animateElements.forEach(el => observer.observe(el));
});

// ========================================
// PROJECT DETAIL PAGE FUNCTIONS
// ========================================

// Gallery functionality for project detail pages
function initGallery() {
    const galleryContainer = document.querySelector('.gallery-images');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!galleryContainer) return;
    
    const images = galleryContainer.querySelectorAll('.gallery-image');
    let currentIndex = 0;
    let autoScrollInterval;
    
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        
        currentIndex = index;
    }
    
    function nextImage() {
        const newIndex = (currentIndex + 1) % images.length;
        showImage(newIndex);
    }
    
    function prevImage() {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(newIndex);
    }
    
    function resetAutoScroll() {
        // Clear existing interval
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
        }
        // Start new interval
        autoScrollInterval = setInterval(nextImage, 8000);
    }
    
    function manualNextImage() {
        nextImage();
        resetAutoScroll();
    }
    
    function manualPrevImage() {
        prevImage();
        resetAutoScroll();
    }
    
    function manualShowImage(index) {
        showImage(index);
        resetAutoScroll();
    }
    
    // Event listeners for manual navigation
    if (nextBtn) nextBtn.addEventListener('click', manualNextImage);
    if (prevBtn) prevBtn.addEventListener('click', manualPrevImage);
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => manualShowImage(index));
    });
    
    // Initialize auto-advance gallery
    resetAutoScroll();
    
    // Initialize first image
    showImage(0);
}

// Initialize gallery on page load
document.addEventListener('DOMContentLoaded', initGallery);

// ========================================
// IMAGE MODAL FUNCTIONALITY
// ========================================

function initImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.querySelector('.modal-close');
    
    if (!modal || !modalImage) return;
    
    // Add click listeners to single project images (not in galleries)
    const singleImages = document.querySelectorAll('.single-project-image');
    singleImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Add click listeners to final design images
    const finalImages = document.querySelectorAll('.final-image');
    finalImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Add click listener to gallery container to handle gallery images
    const galleryContainer = document.querySelector('.gallery-images');
    if (galleryContainer) {
        galleryContainer.addEventListener('click', function(e) {
            // Only respond to clicks on the active gallery image
            if (e.target.classList.contains('gallery-image') && e.target.classList.contains('active')) {
                modal.style.display = 'block';
                modalImage.src = e.target.src;
                modalImage.alt = e.target.alt;
                document.body.style.overflow = 'hidden';
            }
        });
    }
    
    // Close modal when clicking the X
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target.classList.contains('modal-content')) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Initialize modal on page load
document.addEventListener('DOMContentLoaded', initImageModal);

// Back to projects functionality
function goBackToProjects() {
    window.location.href = 'index.html#projects';
}

// Global navigation functions for gallery navigation zones
function manualNextImage() {
    // Find the gallery and trigger next image
    const galleryContainer = document.querySelector('.gallery-images');
    if (galleryContainer) {
        const images = galleryContainer.querySelectorAll('.gallery-image');
        const indicators = document.querySelectorAll('.indicator');
        let currentIndex = 0;
        
        // Find current active image
        images.forEach((img, index) => {
            if (img.classList.contains('active')) {
                currentIndex = index;
            }
        });
        
        // Calculate next index
        const nextIndex = (currentIndex + 1) % images.length;
        
        // Update images
        images.forEach((img, i) => {
            img.classList.toggle('active', i === nextIndex);
        });
        
        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === nextIndex);
        });
        
        // Reset auto-scroll if the function exists
        if (typeof resetAutoScroll === 'function') {
            resetAutoScroll();
        }
    }
}

function manualPrevImage() {
    // Find the gallery and trigger previous image
    const galleryContainer = document.querySelector('.gallery-images');
    if (galleryContainer) {
        const images = galleryContainer.querySelectorAll('.gallery-image');
        const indicators = document.querySelectorAll('.indicator');
        let currentIndex = 0;
        
        // Find current active image
        images.forEach((img, index) => {
            if (img.classList.contains('active')) {
                currentIndex = index;
            }
        });
        
        // Calculate previous index
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        
        // Update images
        images.forEach((img, i) => {
            img.classList.toggle('active', i === prevIndex);
        });
        
        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === prevIndex);
        });
        
        // Reset auto-scroll if the function exists
        if (typeof resetAutoScroll === 'function') {
            resetAutoScroll();
        }
    }
}

// Add this to your project detail pages
document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', goBackToProjects);
    }
});
