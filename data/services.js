// data/services.js

export const services = [
    {
        slug: 'compute-engine',
        title: 'Compute Engine',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/><line x1="15" y1="4" x2="15" y2="20"/><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/></svg>`,
        shortDesc: 'High-density GPU clusters optimized for massive AI training and inference workloads at scale.',
        fullDesc: 'Our Compute Engine delivers unprecedented processing power through custom-designed GPU clusters, purpose-built for the most demanding AI workloads. With direct hardware acceleration protocols, we achieve sub-millisecond latency for real-time inference tasks.',
        features: [
            'Custom GPU cluster architecture',
            'Sub-millisecond inference latency',
            'Automatic workload balancing',
            'Direct hardware acceleration protocols',
            'Dedicated bandwidth allocation',
            'Real-time performance monitoring'
        ],
        stats: { gpus: '10,000+', latency: '<1ms', uptime: '99.99%' }
    },
    {
        slug: 'sovereign-cloud',
        title: 'Sovereign Cloud',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
        shortDesc: 'Fully isolated environments with strictly regional data residency and localized governance compliance.',
        fullDesc: 'Sovereign Cloud provides fully isolated cloud infrastructure that guarantees data residency within your borders. Every bit of data is encrypted, stored, and processed within your designated region, ensuring complete compliance with local regulations.',
        features: [
            'Regional data residency guarantees',
            'Fully isolated environments',
            'Localized governance compliance',
            'End-to-end encryption at rest and in transit',
            'Zero cross-border data movement',
            'Custom compliance frameworks'
        ],
        stats: { regions: '12+', compliance: '100%', isolation: 'Complete' }
    },
    {
        slug: 'private-training',
        title: 'Private Training',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
        shortDesc: 'Custom LLM fine-tuning and model alignment performed entirely on your encrypted private datasets.',
        fullDesc: 'Private Training ensures your most sensitive data never leaves your infrastructure. Our platform enables full LLM fine-tuning, model alignment, and custom training workflows on your encrypted datasets with zero data exposure.',
        features: [
            'On-premise LLM fine-tuning',
            'Encrypted dataset management',
            'Custom model alignment',
            'Zero data exposure guarantee',
            'Federated learning support',
            'Model versioning and rollback'
        ],
        stats: { models: '50+', privacy: '100%', speed: '40% faster' }
    },
    {
        slug: 'edge-deployment',
        title: 'Edge Deployment',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
        shortDesc: 'Low-latency inference nodes located at the network edge for real-time industrial applications.',
        fullDesc: 'Deploy AI models directly at the network edge for real-time inference in industrial, defense, and IoT environments. Our edge nodes are optimized for low-latency, high-throughput processing in bandwidth-constrained scenarios.',
        features: [
            'Sub-5ms edge inference',
            'Industrial-grade hardware',
            'Offline-capable operations',
            'Secure mesh networking',
            'Automatic model synchronization',
            'Environmental sensor integration'
        ],
        stats: { nodes: '200+', latency: '<5ms', offline: 'Yes' }
    },
    {
        slug: 'security-audit',
        title: 'Security Audit',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        shortDesc: 'Comprehensive penetration testing and rigorous compliance monitoring for high-security environments.',
        fullDesc: 'Our Security Audit service provides enterprise-grade security assessments, penetration testing, and ongoing compliance monitoring. We ensure your AI infrastructure meets the highest security standards for regulated industries.',
        features: [
            'Comprehensive penetration testing',
            'Continuous compliance monitoring',
            'SOC 2 Type II certification',
            'GDPR and HIPAA compliance',
            'Incident response protocols',
            'Security architecture review'
        ],
        stats: { audits: '500+', compliance: 'SOC 2', response: '< 1hr' }
    },
    {
        slug: 'white-glove-support',
        title: 'White-Glove Support',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
        shortDesc: '24/7 access to our lead engineering team for architecting custom private infrastructure solutions.',
        fullDesc: 'White-Glove Support gives you direct access to our senior engineering team around the clock. From initial architecture design to ongoing optimization, our experts work as an extension of your team.',
        features: [
            '24/7 dedicated engineering team',
            'Custom architecture consulting',
            'Priority incident response',
            'Quarterly business reviews',
            'Migration planning and execution',
            'Performance optimization workshops'
        ],
        stats: { sla: '99.99%', response: '15min', engineers: 'Dedicated' }
    }
];
