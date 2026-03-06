// data/careers.js

export const jobs = [
    {
        slug: 'senior-ml-engineer',
        title: 'Senior ML Engineer',
        department: 'Engineering',
        location: 'San Francisco, CA',
        type: 'Full-time',
        level: 'Senior',
        description: 'Design and optimize large-scale machine learning systems for sovereign AI infrastructure. You will work on custom GPU kernels, distributed training frameworks, and real-time inference pipelines.',
        requirements: [
            '5+ years experience in ML engineering',
            'Deep expertise in PyTorch, TensorFlow, or JAX',
            'Experience with distributed training at scale',
            'Strong understanding of GPU architecture and CUDA',
            'Experience with model optimization and quantization',
            'MS or PhD in Computer Science or related field preferred'
        ],
        benefits: [
            'Competitive salary + equity',
            'Unlimited PTO',
            'Remote-friendly with office options',
            'Conference and learning budget',
            'Health, dental, and vision insurance',
            'Home office stipend'
        ]
    },
    {
        slug: 'infrastructure-security-lead',
        title: 'Infrastructure Security Lead',
        department: 'Security',
        location: 'Remote',
        type: 'Full-time',
        level: 'Lead',
        description: 'Lead our security engineering team to build and maintain the most secure AI infrastructure in the industry. Define security architecture, threat models, and compliance frameworks for sovereign cloud environments.',
        requirements: [
            '7+ years in infrastructure security',
            'Experience with SOC 2, GDPR, HIPAA compliance',
            'Deep knowledge of zero-trust architecture',
            'Experience securing distributed systems',
            'Strong background in penetration testing',
            'Security certifications (CISSP, CISM) preferred'
        ],
        benefits: [
            'Competitive salary + equity',
            'Unlimited PTO',
            'Fully remote position',
            'Conference and learning budget',
            'Health, dental, and vision insurance',
            'Annual security conference attendance'
        ]
    },
    {
        slug: 'product-designer',
        title: 'Product Designer',
        department: 'Design',
        location: 'New York, NY',
        type: 'Full-time',
        level: 'Mid-Senior',
        description: 'Shape the user experience of our infrastructure management platform. Design intuitive interfaces for complex AI deployment workflows, monitoring dashboards, and developer tools.',
        requirements: [
            '4+ years in product design',
            'Strong portfolio of complex B2B/SaaS products',
            'Proficiency in Figma and prototyping tools',
            'Experience with data visualization and dashboards',
            'Understanding of developer tools and workflows',
            'Interest in AI and infrastructure technology'
        ],
        benefits: [
            'Competitive salary + equity',
            'Unlimited PTO',
            'Hybrid work model',
            'Design tool subscriptions',
            'Health, dental, and vision insurance',
            'Professional development budget'
        ]
    },
    {
        slug: 'devops-engineer',
        title: 'DevOps Engineer',
        department: 'Engineering',
        location: 'Austin, TX',
        type: 'Full-time',
        level: 'Mid-Senior',
        description: 'Build and maintain the deployment infrastructure for our sovereign cloud platform. Work on Kubernetes clusters, CI/CD pipelines, and infrastructure-as-code for GPU-accelerated environments.',
        requirements: [
            '3+ years in DevOps or SRE roles',
            'Expert-level Kubernetes experience',
            'Strong Terraform and infrastructure-as-code skills',
            'Experience with GPU workload management',
            'Monitoring and observability stack experience',
            'Linux systems administration background'
        ],
        benefits: [
            'Competitive salary + equity',
            'Unlimited PTO',
            'Hybrid work model',
            'Home office stipend',
            'Health, dental, and vision insurance',
            'On-call compensation'
        ]
    }
];

export const culture = {
    mission: 'Ignaite is a collective of scientists, engineers, and philosophers dedicated to the mission of democratizing sovereign intelligence.',
    values: [
        { title: 'Sovereignty First', desc: 'We believe the future belongs to those who own their AI.' },
        { title: 'Engineering Excellence', desc: 'We build systems that operate at the edge of what\'s possible.' },
        { title: 'Radical Transparency', desc: 'Full traceability of every decision, from code to deployment.' },
        { title: 'Mission-Driven', desc: 'Every line of code serves the mission of democratizing AI sovereignty.' }
    ]
};
