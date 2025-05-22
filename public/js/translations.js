const translations = {
    en: {
        title: "DISCHARGE ADVICE",
        subtitle: "Access organised important medical advice and care instructions following your hospital visit.",
        appointments: "UPCOMING APPOINTMENTS",
        appointmentsSubtitle: "View and manage your upcoming medical appointments.",
        contacts: "IMPORTANT CONTACTS",
        contactsSubtitle: "Quick access to important hospital contact information.",
        // Navigation items
        nav: {
            home: "Home",
            appointments: "Appointments",
            contacts: "Contacts"
        },
        // Advice categories
        categories: {
            wound: "Wound Care",
            fever: "Fever",
            asthma: "Asthma",
            medication: "Medication",
            followup: "Follow-up",
            headache: "Headache",
            dengue: "Dengue",
            cellulitis: "Cellulitis",
            chestpain: "Chest Pain",
            abdominalpain: "Abdominal Pain",
            allergy: "Allergy",
            deepveinthrombosis: "Deep Vein Thrombosis",
            diabetes: "Diabetes",
            giddiness: "Giddiness",
            gastroenteritis: "Gastroenteritis",
            headinjury: "Head Injury",
            hypertension: "Hypertension"
        },
        // Card content
        cards: {
            wound: {
                title: "Wound Care",
                description: "Proper wound care instructions for healing"
            },
            fever: {
                title: "Fever Management",
                description: "Guidelines for managing fever at home"
            },
            asthma: {
                title: "Asthma Care",
                description: "Asthma management and prevention tips"
            },
            medication: {
                title: "Medication Guide",
                description: "Important information about your medications"
            },
            followup: {
                title: "Follow-up Care",
                description: "Schedule and prepare for your follow-up visit"
            }
        }
    },
    zh: {
        title: "出院建议",
        subtitle: "获取医院就诊后的重要医疗建议和护理指导。",
        appointments: "即将到来的预约",
        appointmentsSubtitle: "查看和管理您的医疗预约。",
        contacts: "重要联系方式",
        contactsSubtitle: "快速访问重要的医院联系信息。",
        // Navigation items
        nav: {
            home: "首页",
            appointments: "预约",
            contacts: "联系方式"
        },
        // Advice categories
        categories: {
            wound: "伤口护理",
            fever: "发烧",
            asthma: "哮喘",
            medication: "药物",
            followup: "复诊",
            headache: "头痛",
            dengue: "登革热",
            cellulitis: "蜂窝组织炎",
            chestpain: "胸痛",
            abdominalpain: "腹痛",
            allergy: "过敏",
            deepveinthrombosis: "深静脉血栓",
            diabetes: "糖尿病",
            giddiness: "眩晕",
            gastroenteritis: "肠胃炎",
            headinjury: "头部受伤",
            hypertension: "高血压"
        },
        // Card content
        cards: {
            wound: {
                title: "伤口护理",
                description: "伤口愈合的正确护理指导"
            },
            fever: {
                title: "发烧管理",
                description: "在家管理发烧的指南"
            },
            asthma: {
                title: "哮喘护理",
                description: "哮喘管理和预防提示"
            },
            medication: {
                title: "用药指南",
                description: "关于您用药的重要信息"
            },
            followup: {
                title: "复诊护理",
                description: "安排和准备您的复诊"
            }
        }
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

    // Update navigation items
    const navLinks = document.querySelectorAll('.nav-tab');
    navLinks.forEach(link => {
        const key = link.getAttribute('data-nav-key');
        if (key && translations[lang].nav[key]) {
            link.textContent = translations[lang].nav[key];
        }
    });

    // Update category icons text
    const categoryIcons = document.querySelectorAll('.category-icon span');
    categoryIcons.forEach(icon => {
        const key = icon.getAttribute('data-category-key');
        if (key && translations[lang].categories[key]) {
            icon.textContent = translations[lang].categories[key];
        }
    });

    // Update advice cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const key = card.getAttribute('data-card-key');
        if (key && translations[lang].cards[key]) {
            const title = card.querySelector('h3');
            const description = card.querySelector('p');
            if (title) title.textContent = translations[lang].cards[key].title;
            if (description) description.textContent = translations[lang].cards[key].description;
        }
    });

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