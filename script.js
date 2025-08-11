document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const themeIconLight = document.getElementById('theme-icon-light');
    const themeIconDark = document.getElementById('theme-icon-dark');
    const mobileThemeIconLight = document.getElementById('mobile-theme-icon-light');
    const mobileThemeIconDark = document.getElementById('mobile-theme-icon-dark');
    
    // Check for saved theme preference in local storage
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme) {
        document.documentElement.classList.add(currentTheme);
        if (currentTheme === 'dark') {
            themeIconLight.classList.add('hidden');
            themeIconDark.classList.remove('hidden');
            mobileThemeIconLight.classList.add('hidden');
            mobileThemeIconDark.classList.remove('hidden');
        }
    }
    
    function toggleTheme() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            themeIconLight.classList.remove('hidden');
            themeIconDark.classList.add('hidden');
            mobileThemeIconLight.classList.remove('hidden');
            mobileThemeIconDark.classList.add('hidden');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            themeIconLight.classList.add('hidden');
            themeIconDark.classList.remove('hidden');
            mobileThemeIconLight.classList.add('hidden');
            mobileThemeIconDark.classList.remove('hidden');
        }
    }

    themeToggle.addEventListener('click', toggleTheme);
    mobileThemeToggle.addEventListener('click', toggleTheme);

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
});