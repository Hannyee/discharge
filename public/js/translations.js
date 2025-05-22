const translations = {
    en: {
        title: "DISCHARGE ADVICE",
        subtitle: "Access organised important medical advice and care instructions following your hospital visit.",
        appointments: "UPCOMING APPOINTMENTS",
        appointmentsSubtitle: "View and manage your upcoming medical appointments.",
        contacts: "IMPORTANT CONTACTS",
        contactsSubtitle: "Quick access to important hospital contact information."
    },
    zh: {
        title: "出院建议",
        subtitle: "获取医院就诊后的重要医疗建议和护理指导。",
        appointments: "即将到来的预约",
        appointmentsSubtitle: "查看和管理您的医疗预约。",
        contacts: "重要联系方式",
        contactsSubtitle: "快速访问重要的医院联系信息。"
    }
};

function changeLanguage(lang) {
    // Update header content
    const header = document.querySelector('header');
    if (header) {
        const title = header.querySelector('h1');
        const subtitle = header.querySelector('p');
        
        if (title) title.textContent = translations[lang].title;
        if (subtitle) subtitle.textContent = translations[lang].subtitle;
    }

    // Update page-specific content
    const currentPage = window.location.pathname;
    if (currentPage.includes('appointments')) {
        const title = document.querySelector('header h1');
        const subtitle = document.querySelector('header p');
        if (title) title.textContent = translations[lang].appointments;
        if (subtitle) subtitle.textContent = translations[lang].appointmentsSubtitle;
    } else if (currentPage.includes('contacts')) {
        const title = document.querySelector('header h1');
        const subtitle = document.querySelector('header p');
        if (title) title.textContent = translations[lang].contacts;
        if (subtitle) subtitle.textContent = translations[lang].contactsSubtitle;
    }

    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', lang);
}

// Initialize language based on stored preference or default to English
document.addEventListener('DOMContentLoaded', () => {
    const storedLang = localStorage.getItem('selectedLanguage') || 'en';
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = storedLang;
        changeLanguage(storedLang);
    }
}); 