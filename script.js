// Project data
const projects = [
    {
        // Project 1: Fangamer Wireframe
        id: 1,
        title: "Fangamer Wireframe",
        description: "A project testing User Interface design and prototyping skills using Adobe XD to modify an existing company website.",
        about: "- The focus of this project was to test my User Interface design and prototyping skills using Adobe XD, by modifying an existing company website, Fangamer.<br><br>- The project involved analyzing the existing Fangamer website, areas of improvement or changes were identified, and a new wireframe was created to help with the prototyping process.<br><br>- The wireframe was designed to show the designs of improvements or changes of the site in different states and interactions.<br><br>- What I have learned from this project is improtances of wireframing and prototyping in the design process. It allows for a demonstration of the design ideas and interactions before moving on in the projects stages.",
        imageUrl: "Logos/Fangamer Logo.png",
        technologies: ["N/A", "N/A", "N/A", "N/A", "N/A"],
        features: [
            "Adobe XD",
            "Design",
            "Prototyping",
            "User Interface Design",
            "Wireframing"
        ],
        challenges: "- The main challenge was creating and developing a wireframe that demonstrates the design ideas and interactions of the site, while also taking that wireframe and creating a prototype that shows the stages of the process. A challenge of making sure the material being learned is applied but also knowing that its in the beginning stages so it won't be perfect.",
        course: "- Digital Publishing (GIT 303)",
        program: "- Adobe XD",
        timeline: "- 2 Weeks",
        status: "- Completed",
        OriginalUrl: "https://www.fangamer.com/",
        PrototypeUrl: "https://xd.adobe.com/view/5b317f0a-5318-4210-9e7b-447fbd118887-0e62/?fullscreen",
        galleryImages: [
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
        description: "A project done in my Information Design & Usability course (GIT 340), based on existing website “eDreams”, to show the process of creating wireframes and transition to a final frame.",
        about: "- The focus of this project was to create a wireframe for the eDreams website, which is a travel booking platform, and to show the process of creating wireframes and transitioning to a final frame.<br><br>- The project involved analyzing the existing eDreams website, identifying areas for improvement, and creating wireframes that enhance user experience and usability.<br><br>- The wireframes were designed to be user-friendly and functional, ensuring that users can easily navigate through the website and find the information they need.<br><br>- What I have learned from this project is the importance of wireframing in the design process, as it allows for quick iterations and feedback before moving on to the final design.",
        imageUrl: "Logos/eDreams Logo.png",
        features: [
            "Figma",
            "Design",
            "Wireframing"
        ],
        challenges: "- The main challenge was to effectively analyze the existing eDreams website and identify areas for improvement while creating wireframes that enhance user experience and usability. Ensuring that the wireframes were user-friendly and functional, while also trying to apply the principles of information design and usability, was a significant challenge I faced during this project.",
        course: "- Information Design & Usability (GIT 340)",
        program: "- Figma",
        timeline: "- 2 Weeks",
        status: "- Completed",
        OriginalUrl: "https://www.edreams.net/",
        galleryImages: [
            "Projects/eDreams screenshot 1.png",
            "Projects/eDreams screenshot 2.png",
            "Projects/eDreams screenshot 3.png",
            "Projects/eDreams screenshot 4.png",
            "Projects/eDreams screenshot 5.png",
        ]
    },
    {
        // Project 3: Jones Soda Poster
        id: 3,
        title: "Jones Soda Poster",
        description: "A poster created in my Digital Illustration in Publishing course (GIT 230) for a known brand using Adobe Illustrator.",
        about: "- The focus of this project was to create a visually appealing poster that effectively represents the brand that I chose, Jones Soda, while applying the skills learned in the course for Adobe Photoshop.<br><br>- I chose Jones Soda because of its unique branding and vibrant colors that allows for creative freedom and experimentation with design elements. But its also a brand that I have always enjoyed and grew up with, so I wanted to try creating a poster for it.<br><br>- The poster is designed to capture the essence of Jones Soda's fun and quirky personality, from using bold letters to bring attention, using shadows to bring the depth of the poster, similar but light colors that goes along with the soda's coloring, and adding a slogan that represents the brand.<br><br>- What I have learned from this project is to trying to take a brand and create a poster that represents it to speak to the audience, while also applying the skills learned in the course regarding Adobe Photoshop.",
        imageUrl: "Logos/Jones Soda Logo.png",
        features: [
            "Adobe Photoshop",
            "Branding",
            "Design",
            "Speaking to Audience"
        ],
        challenges: "- The main challenge was to effectively capture the essence of the brand while applying the skills learned in the course to speak out to the audience. Experimenting with different design elements and ensuring that the poster was visually appealing and aligned with the brand's identity was one of the challenges I faced during this project.",
        course: "- Digital Illustration in Publishing (GIT 230)",
        program: "- Adobe Photoshop",
        timeline: "- 2 Weeks",
        status: "- Completed",
        OriginalUrl: "https://www.jonessoda.com/",
        galleryImages: [
            "Projects/Jones Soda Poster Project.png",
        ]
    },

];

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const projectModal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const mobileMenu = document.getElementById('mobileMenu');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    setupEventListeners();
});

// Render projects
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
    card.onclick = () => openProjectModal(project);
    
    card.innerHTML = `
        <img 
            src="${project.imageUrl}" 
            alt="${project.title}"
            class="project-image"
        >
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            
            <div class="project-link">
                <span class="project-link-text">
                    View Details →
                </span>
            </div>
        </div>
    `;
    
    return card;
}

// Open project modal & Information
function openProjectModal(project) {
    if (!projectModal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div class="modal-title">${project.title}</div>
        <div class="modal-description">${project.description}</div>
        
        <img 
            src="${project.imageUrl}" 
            alt="${project.title}"
            class="modal-image"
        >
        
        <div class="modal-section">
            <div class="modal-section-title">Project Description</div>
            <div class="modal-text">${project.about}</div>
        </div>
        
        ${project.features && project.features.length > 0 ? `
            <div class="modal-section">
                <div class="modal-section-title">Key Features</div>
                <ul class="modal-features">
                    ${project.features.map(feature => `
                        <li class="modal-feature">
                            <svg class="feature-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            <span>${feature}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        ` : ''}
        
        ${project.challenges ? `
            <div class="modal-section">
                <div class="modal-section-title"> Challenges</div>
                <div class="modal-text">${project.challenges}</div>
            </div>
        ` : ''}
        
        <div class="modal-section">
            <div class="modal-section-title">Project Information</div>
            <div class="modal-info">
                ${project.client ? `
                    <div class="info-item">
                        <div class="info-label">Client</div>
                        <div class="info-value">${project.client}</div>
                    </div>
                ` : ''}
                ${project.course ? `
                    <div class="info-item">
                        <div class="info-label">Course</div>
                        <div class="info-value">${project.course}</div>
                    </div>
                ` : ''}
                ${project.timeline ? `
                    <div class="info-item">
                        <div class="info-label">Timeline</div>
                        <div class="info-value">${project.timeline}</div>
                    </div>
                ` : ''}
                ${project.program ? `
                    <div class="info-item">
                        <div class="info-label">Program</div>
                        <div class="info-value">${project.program}</div>
                    </div>
                ` : ''}
                ${project.status ? `
                    <div class="info-item">
                        <div class="info-label">Status</div>
                        <div class="info-value">${project.status}</div>
                    </div>
                ` : ''}
            </div>
        </div>
        
        ${project.galleryImages && project.galleryImages.length > 0 ? `
            <div class="modal-section">
                <div class="modal-section-title">Project Gallery</div>
                <div class="gallery-carousel">
                    <button class="gallery-prev" aria-label="Previous image">&lt;</button>
                    <img 
                        src="${project.galleryImages[0]}"
                        alt="${project.title} screenshot 1"
                        class="gallery-image gallery-image-${project.id}"
                        id="galleryImage"
                        style="border-radius: 0.5rem; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3); transition: transform 0.2s ease; display: block; margin: 0 auto; width: auto; height: auto;"
                    >
                    <button class="gallery-next" aria-label="Next image">&gt;</button>
                </div>
                <div class="gallery-counter" id="galleryCounter">1 / ${project.galleryImages.length}</div>
            </div>
        ` : ''}
        
        <div class="modal-section">
            <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                ${project.OriginalUrl ? `
                    <a href="${project.OriginalUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                        <svg style="width: 1rem; height: 1rem; margin-right: 0.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                        Original Site
                    </a>
                ` : ''}
                ${project.PrototypeUrl ? `
                    <a href="${project.PrototypeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                        <svg style="width: 1rem; height: 1rem; margin-right: 0.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                        Prototype
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Carousel functionality for gallery images
    if (project.galleryImages && project.galleryImages.length > 0) {
        let currentIndex = 0;
        const images = project.galleryImages;
        const galleryImage = document.getElementById('galleryImage');
        const galleryCounter = document.getElementById('galleryCounter');
        const prevBtn = modalBody.querySelector('.gallery-prev');
        const nextBtn = modalBody.querySelector('.gallery-next');

        function updateGallery() {
            galleryImage.src = images[currentIndex];
            galleryImage.alt = `${project.title} screenshot ${currentIndex + 1}`;
            galleryCounter.textContent = `${currentIndex + 1} / ${images.length}`;
        }

        prevBtn.onclick = () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateGallery();
        };
        nextBtn.onclick = () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateGallery();
        };
    }
}

// Close modal
function closeModal() {
    if (!projectModal) return;
    
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
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
    if (!mobileMenu) return;
    
    mobileMenu.classList.toggle('active');
    
    // Toggle hamburger animation
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (mobileBtn) {
        mobileBtn.classList.toggle('active');
    }
}

// Close mobile menu
function closeMobileMenu() {
    if (!mobileMenu) return;
    
    mobileMenu.classList.remove('active');
    
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (mobileBtn) {
        mobileBtn.classList.remove('active');
    }
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Contact Form (Show loading state)
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';    // Send email using EmailJS
    emailjs.send(
        'service_3nyk5mo',
        'template_vlspnll',
        {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
        }
    )
    .then(() => {
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        event.target.reset();
    })
    .catch((error) => {
        showNotification('Failed to send message. Please try again.', 'error');
        console.error('EmailJS error:', error);
    })
    .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--slate-800);
        color: var(--foreground);
        padding: 1rem 1.5rem;
        border-radius: var(--radius);
        border: 1px solid var(--slate-700);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    if (type === 'success') {
        notification.style.borderLeft = '4px solid var(--primary)';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Setup event listeners
function setupEventListeners() {
    // Close modal when clicking outside
    if (projectModal) {
        projectModal.addEventListener('click', function(event) {
            if (event.target === projectModal) {
                closeModal();
            }
        });
    }
    
    // Handle escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
            closeMobileMenu();
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-header') && mobileMenu && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && mobileMenu && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.project-card, .about-img, .skill-tag').forEach(el => {
        observer.observe(el);
    });
}

// Add some CSS animations for better UX
const style = document.createElement('style');
style.textContent = `
    .mobile-btn.active .hamburger:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-btn.active .hamburger:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-btn.active .hamburger:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .notification {
        font-size: 0.875rem;
        line-height: 1.4;
    }
    
    .gallery-carousel {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin: 1.5rem 0;
    }
    .gallery-image {
        width: 100%;
        max-width: 500px;
        height: auto;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);
        transition: transform 0.2s ease;
        display: block;
    }
    .gallery-image-1 {
        max-width: 750px;
        width: 80%;
    }
    .gallery-image-2 {
        max-width: 850px;
        width: 90%;
    }
    .gallery-image-3 {
        max-width: 400px;
        width: 60%;
    }
    .gallery-prev,
    .gallery-next {
        background: var(--slate-800, #222);
        color: var(--foreground, #fff);
        border: none;
        border-radius: 50%;
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1.5rem;
        cursor: pointer;
        transition: background 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .gallery-prev:hover,
    .gallery-next:hover {
        background: var(--primary, #007bff);
        color: #fff;
    }
    .gallery-counter {
        text-align: center;
        margin-top: 0.5rem;
        color: var(--foreground, #fff);
        font-size: 1rem;
    }
    
    @media (max-width: 640px) {
        .modal-content {
            margin: 1rem;
            max-height: calc(100vh - 2rem);
        }
        
        .modal-body {
            padding: 1rem;
        }
        
        .hero-buttons {
            flex-direction: column;
            width: 100%;
        }
        
        .hero-buttons .btn {
            width: 100%;
        }
    }
`;

document.head.appendChild(style);