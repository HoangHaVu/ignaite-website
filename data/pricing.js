// data/pricing.js

export const plans = [
    {
        name: 'Starter',
        price: '$2,499',
        period: '/month',
        description: 'For teams exploring sovereign AI with essential compute and security features.',
        features: [
            '4 GPU instances (A100)',
            'Single-region data residency',
            'Standard encryption (AES-256)',
            'Community support',
            '99.9% uptime SLA',
            'Basic monitoring dashboard',
            'API access'
        ],
        cta: 'Start Free Trial',
        featured: false
    },
    {
        name: 'Professional',
        price: '$9,999',
        period: '/month',
        description: 'For growing enterprises requiring multi-region sovereignty and advanced capabilities.',
        features: [
            '16 GPU instances (A100/H100)',
            'Multi-region data residency',
            'Zero-trust encryption',
            'Priority support (4hr SLA)',
            '99.95% uptime SLA',
            'Advanced monitoring & alerts',
            'Private model training',
            'Custom compliance reports',
            'Edge deployment (5 nodes)'
        ],
        cta: 'Get Started',
        featured: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For mission-critical deployments requiring maximum control, security, and dedicated infrastructure.',
        features: [
            'Unlimited GPU instances',
            'Global sovereign infrastructure',
            'Air-gapped deployment option',
            'Dedicated engineering team (24/7)',
            '99.99% uptime SLA',
            'Full security audit & compliance',
            'Custom model development',
            'White-glove onboarding',
            'Unlimited edge nodes',
            'Executive business reviews'
        ],
        cta: 'Contact Sales',
        featured: false
    }
];

export const faq = [
    {
        q: 'What does "sovereign AI" mean?',
        a: 'Sovereign AI means complete ownership and control over your AI infrastructure, models, and data. Your data never leaves your designated regions, and you maintain full autonomy over your AI systems without vendor lock-in.'
    },
    {
        q: 'Can I migrate from my current cloud provider?',
        a: 'Yes. Our White-Glove Support team specializes in migration planning and execution. We provide detailed migration playbooks and dedicated engineering support throughout the entire process.'
    },
    {
        q: 'What compliance certifications do you support?',
        a: 'We support SOC 2 Type II, GDPR, HIPAA, ISO 27001, and FedRAMP certifications. Our Enterprise plan includes custom compliance framework support for industry-specific requirements.'
    },
    {
        q: 'Is there a free trial available?',
        a: 'Yes, the Starter plan includes a 14-day free trial with full access to all Starter features. No credit card required to start.'
    }
];
