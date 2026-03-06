// data/case-studies.js

export const caseStudies = [
    {
        slug: 'global-quantum-systems',
        title: 'Global Quantum Systems',
        client: 'Global Quantum Systems',
        industry: 'Finance',
        badge: 'Finance',
        summary: 'Reduced model training cycle by 40% while ensuring 100% data residency within national borders.',
        challenge: 'Global Quantum Systems needed to deploy high-frequency trading models that required sub-millisecond latency while maintaining strict data sovereignty requirements across multiple jurisdictions.',
        solution: 'We deployed a dedicated Ignaite Compute Engine cluster with sovereign cloud isolation, enabling private model training and real-time inference without any data leaving designated regions.',
        results: [
            { label: 'Training Cycle Reduction', value: '40%' },
            { label: 'Data Residency Compliance', value: '100%' },
            { label: 'Inference Latency', value: '<1ms' },
            { label: 'Cost Savings', value: '35%' }
        ],
        testimonial: {
            quote: 'Ignaite reduced our model training cycle by 40% while ensuring 100% data residency within our borders.',
            author: 'Marcus Thorne',
            role: 'CTO, Global Quantum Systems'
        }
    },
    {
        slug: 'meridian-logistics',
        title: 'Meridian Logistics',
        client: 'Meridian Logistics',
        industry: 'Logistics',
        badge: 'Logistics',
        summary: 'Dynamic routing intelligence reduced delivery times by 28% and fuel costs by 22% across the fleet.',
        challenge: 'Meridian Logistics operated a fleet of 5,000+ vehicles across three continents, struggling with inefficient routing and escalating fuel costs in an increasingly complex supply chain.',
        solution: 'Ignaite deployed edge inference nodes across key distribution hubs, enabling real-time route optimization and predictive maintenance scheduling using private fleet data.',
        results: [
            { label: 'Delivery Time Reduction', value: '28%' },
            { label: 'Fuel Cost Savings', value: '22%' },
            { label: 'Fleet Efficiency', value: '+45%' },
            { label: 'Downtime Reduction', value: '60%' }
        ],
        testimonial: {
            quote: 'The edge deployment transformed our operations. We\'re making smarter decisions in real-time at every hub.',
            author: 'Elena Vasquez',
            role: 'VP Operations, Meridian Logistics'
        }
    },
    {
        slug: 'nexgen-biotech',
        title: 'NexGen Biotech',
        client: 'NexGen Biotech',
        industry: 'Biotech',
        badge: 'Biotech',
        summary: 'Accelerated drug discovery pipeline by 3x with private AI training on sensitive genomic datasets.',
        challenge: 'NexGen Biotech needed to run complex protein folding simulations and drug interaction models on highly sensitive genomic data that could never leave their secure research facility.',
        solution: 'We implemented a fully air-gapped Ignaite Private Training environment within their research facility, enabling custom model training on encrypted genomic datasets.',
        results: [
            { label: 'Pipeline Acceleration', value: '3x' },
            { label: 'Data Security', value: 'Air-gapped' },
            { label: 'Model Accuracy', value: '+25%' },
            { label: 'Research Output', value: '2x' }
        ],
        testimonial: {
            quote: 'For the first time, we can leverage cutting-edge AI without compromising the security of our genomic research.',
            author: 'Dr. Sarah Chen',
            role: 'Head of Research, NexGen Biotech'
        }
    }
];
