import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Find your Cannabis at MedLeafMate',
    subHeading: 'Bridging the gap between the cannabis industry and you',
    text: 'MedLeafMate brings you one step closer to finding the cannabis products suited to your needs. The app offers resources, locations, menus and helps you find the strain that will be the most beneficial to you. ',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Sign up for our subscribers’ list!',
    subHeading: 'MATCHING USERS WITH A COMBINATION OF CBD AND THC PRODUCTS',
    features: [
        {
            title: 'Search by Strain',
            description: 'Find the product you need before you head out to a dispensary near you.',
            icon: 'plant-buds'
        },
        {
            title: 'Search Products by Symptoms',
            description: 'Customize your feed by letting us know what ails you and we can narrow down the CBD or THC products you need.',
            icon: 'plant-medical'
        },
        {
            title: 'Track Doses',
            description: 'Use the in-app tracker to ensure you are using the correct dosage.',
            icon: 'timer'
        },
        {
            title: 'Search by Location',
            description: 'It is always convenient to find a quality product that is closest to you.',
            icon: 'online-plant-store'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'There is a lot of misinformation regarding the cannabis industry. Not only do they promote an unnecessary stigma but also keep people who seek cannabis products from learning about how to use and control intake. MedLeafMate is bringing you a platform that provides access, information, and self-regulation when it comes to cannabis.',
        'You can find the strain for you by inputting your ailments or even simply finding what you need via a dispensary near you. What\'s more, we will also connect you with promotions and deals on your preferred products.',
    ],
}

export const benefitsContent = {
    heading: 'Always be in the know',
    text: 'Debunk myths and find helpful resources in the form of expert advice, medical journals and articles on Cannabis. The Highlights section is designed to keep you up to date so that you are able to use and explore both CBD and THC products appropriately and responsibly.',
    benefits: [
        {
            title: 'Find Resources',
            description: 'Read articles and get access to helpful information regarding cannabis.',
            icon: 'tasks-list'
        },
        {
            title: 'Get Recommendations ',
            description: 'Apart from browsing daily updated menus, the MedLeafMate app takes your custom preferences and produces recommendations just for you.',
            icon: 'news-feed'
        },
        {
            title: 'Promotion Alerts',
            description: 'Get notifications every time a dispensary near you starts a new promotion. ',
            icon: 'bulb-alert'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is this app compatible with iOS or Android?',
            answer: 'The answer will be here......',

        },
        {
            question: 'What do I do in case something is not working on my app?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'Who is MedLeafMate for?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Find a Dispensary Near You',
    text: [
        'Find a Dispensary Near You or Join as a CBD Store',
        'Download MedLeafMate today and take advantage of the vast resources from the cannabis industry in one place.'
    ]
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'User Sign up',
    whyUsBtn: `Why ${siteName}?`,
    ctaBtn: 'Download App',
    accent: 'Dispensary Sign Up',
    tertiary: 'Pre Sign-up'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
