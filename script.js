// Project data
const projects = [
    {
        id: 1,
        title: "Fangamer Wireframe",
        description: "A project testing User Interface design and prototyping skills using Adobe XD to modify an existing company website.",
        overview: "N/A",
        imageUrl: "Logos/Fangamer Logo.png",
        technologies: ["N/A", "N/A", "N/A", "N/A", "N/A"],
        features: [
            "N/A",
            "N/A",
            "N/A",
            "N/A",
            "N/A",
            "N/A"
        ],
        challenges: "N/A",
        client: "N/A",
        timeline: "N/A",
        role: "N/A",
        status: "N/A",
        OriginalUrl: "N/A",
        githubUrl: "N/A",
        galleryImages: [
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
            "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
        ]
    },
    {
        id: 2,
        title: "eDreams Wireframe",
        description: "A project testing User Interface design and prototyping skills using Adobe XD to modify an existing company website.",
        overview: "N/A",
        imageUrl: "Logos/Fangamer Logo.png",
        technologies: ["N/A", "N/A", "N/A", "N/A", "N/A"],
        features: [
            "N/A",
            "N/A",
            "N/A",
            "N/A",
            "N/A",
            "N/A"
        ],
        challenges: "N/A",
        client: "N/A",
        timeline: "N/A",
        role: "N/A",
        status: "N/A",
        OriginalUrl: "N/A",
        githubUrl: "N/A",
        galleryImages: [
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
            "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
        ]
    },
    {
        id: 3,
        title: "Jones Soda Poster",
        description: "A project testing User Interface design and prototyping skills using Adobe XD to modify an existing company website.",
        overview: "N/A",
        imageUrl: "Logos/Fangamer Logo.png",
        technologies: ["N/A", "N/A", "N/A", "N/A", "N/A"],
        features: [
            "N/A",
            "N/A",
            "N/A",
            "N/A",
            "N/A",
            "N/A"
        ],
        challenges: "N/A",
        client: "N/A",
        timeline: "N/A",
        role: "N/A",
        status: "N/A",
        OriginalUrl: "https://www.jonessoda.com/",
        galleryImages: [
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
            "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
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

// Open project modal
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
            <div class="modal-section-title">Project Overview</div>
            <div class="modal-text">${project.overview}</div>
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
                <div class="modal-section-title">Technical Challenges</div>
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
                ${project.timeline ? `
                    <div class="info-item">
                        <div class="info-label">Timeline</div>
                        <div class="info-value">${project.timeline}</div>
                    </div>
                ` : ''}
                ${project.role ? `
                    <div class="info-item">
                        <div class="info-label">Role</div>
                        <div class="info-value">${project.role}</div>
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
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1rem;">
                    ${project.galleryImages.map((image, index) => `
                        <img 
                            src="${image}" 
                            alt="${project.title} screenshot ${index + 1}"
                            style="border-radius: 0.5rem; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); cursor: pointer; transition: transform 0.2s ease;"
                            onmouseover="this.style.transform='scale(1.05)'"
                            onmouseout="this.style.transform='scale(1)'"
                        >
                    `).join('')}
                </div>
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
                ${project.githubUrl ? `
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                        <svg style="width: 1rem; height: 1rem; margin-right: 0.5rem;" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Code
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
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