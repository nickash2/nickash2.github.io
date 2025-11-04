export const siteConfig = {
  name: "Nicholas Assiotis",
  title: "Machine Learning Engineer",
  description: "Portfolio website of Nicholas Assiotis",
  accentColor: "#1d4ed8",
  social: {
    email: "n.ashiotis.work@gmail.com",
    linkedin: "https://www.linkedin.com/in/nicholas-assiotis/",
    twitter: "https://x.com/nickashdev",
    github: "https://github.com/nickash2",
  },
  resume: "/resume.pdf",
  aboutMe:
    "Swiss-Cypriot MSc student in Artificial Intelligence with research and industry experience in machine learning, reinforcement learning, and data-driven decision intelligence; published at ECAI 2025 @ PMLR and SPIE 2025 with collaborations including Harvard Medical School, passionate about bridging AI research and real-world applications in industrial innovation, FinTech, and social good.",
  skills: ["Python", "PyTorch", "TensorFlow/Keras", "NumPy", "Pandas", "Docker"],
  projects: [
  {
    name: "Physics-Informed Graph Neural Networks for Air Pollution Forecasting",
    description:
      "Presented and published at ECAI 2025 @ Bologna, Italy. Developed a Physics-Informed Graph Neural Network (PI-GNN) to forecast urban NO₂ concentrations in the Netherlands by integrating physical constraints into graph-based deep learning. Demonstrated superior accuracy and robustness over standard GNN and RNN baselines.",
    link: "https://github.com/nickash2/forecasting_smog_DL_GNN/tree/physics",
    skills: ["Python", "PyTorch", "Graph Neural Networks", "Physics-Informed Learning", "Machine Learning"],
  },
  {
    name: "Deep Learning Classification of Multi-Spectral OCT Images",
    description:
      "Published at SPIE 2025 in collaboration with Harvard Medical School. Built a DenseNet-based model for colorectal cancer detection from en face multi-spectral OCT images, achieving 91% accuracy and demonstrating the potential of AI-assisted diagnostics.",
    link: "https://spie.org/conferences-and-exhibitions/optical-coherence-tomography-and-coherence-domain-optical-methods-in-biomedicine",
    skills: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "Biomedical Imaging", "Deep Learning"],
  },
  {
    name: "Adaptive Target Update in Deep Deterministic Policy Gradient (DDPG)",
    description:
      "Researched and implemented an adaptive update mechanism for DDPG in continuous control tasks, dynamically adjusting τ to improve stability and performance. Outperformed standard DDPG in Reacher-v5 and Walker2D-v5 environments.",
    link: "https://github.com/nickash2/RL-Adaptive-DDPG",
    skills: ["Python", "PyTorch", "Reinforcement Learning", "Deep RL", "Continuous Control"],
  },
],
  publications: [
    {
      title: "Physics-Informed Graph Neural Networks for Air Pollution Forecasting",
      authors: "N. Assiotis, et al.",
      venue: "European Conference on AI (ECAI) 2025 @ PMLR",
      link: "https://proceedings.mlr.press/v277/assiotis25a",
      year: 2025,
      note: "Presented and published at ECAI 2025, Bologna, Italy",
    },
    {
      title: "Deep Learning Classification of Multi-Spectral OCT Images",
      authors: "N. Assiotis, et al.",
      venue: "SPIE 2025",
      link: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13305/3042820/Deep-learning-classification-of-en-face-multi-spectral-optical-coherence/10.1117/12.3042820.short",
      year: 2025,
      note: "Published in SPIE 2025 in collaboration with Harvard Medical School",
    },
  ],
experience: [
  {
    company: "LT Game Limited",
    title: "Machine Learning Engineer",
    dateRange: "Oct 2024 - Present",
    logo: "/logos/ltgame_logo.jpeg",
    bullets: [
      "Developing and deploying machine learning models for predictive analytics and game optimization.",
      "Building data pipelines and model-serving infrastructure on AWS for scalable experimentation.",
      "Collaborating remotely across research and engineering teams to apply deep learning in real-world settings.",
    ],
  },
  {
    company: "KIOS Research and Innovation Center of Excellence",
    title: "Student Research Collaborator",
    dateRange: "Sep 2024 - Dec 2024",
    logo: "/logos/kios_logo.jpeg",
    bullets: [
      "Contributed to a joint research project with Harvard Medical School on deep learning for medical imaging.",
      "Developed and optimized DenseNet-based models for multi-spectral OCT image classification, published at SPIE 2025.",
      "Analyzed and visualized large-scale biomedical datasets using Python, TensorFlow, and PyTorch.",
    ],
  },
  {
    company: "KIOS Research and Innovation Center of Excellence",
    title: "Research Intern – Undergraduate Research Opportunities Program",
    dateRange: "Jul 2024 - Sep 2024",
    logo: "/logos/kios_logo.jpeg",
    bullets: [
      "Applied CNN architectures to analyze complex medical datasets for journal and conference publications.",
      "Enhanced model performance through hyperparameter tuning and data augmentation in TensorFlow and Keras.",
      "Collaborated with domain experts to ensure research accuracy and contributed to documentation for publication.",
    ],
  },
  {
    company: "Makercie RUG – University of Groningen",
    title: "Software Department Member",
    dateRange: "Sep 2023 - Aug 2024",
    logo: "/logos/makercie_logo.jpeg",
    bullets: [
      "Led design and software integration of an autonomous rover for the European Rover Challenge.",
      "Implemented navigation algorithms using neural networks and sensor fusion for real-time pathfinding.",
      "Worked in a hybrid team environment using Python, C, and ROS for embedded robotics systems.",
    ],
  },
  {
    company: "Makercie RUG – University of Groningen",
    title: "Training & Tech Support Member",
    dateRange: "Jun 2023 - Sep 2023",
    logo: "/logos/makercie_logo.jpeg",
    bullets: [
      "Conducted technical workshops on Python, ROS, and Gazebo simulation for new team members.",
      "Created internal documentation and troubleshooting guides to streamline development workflows.",
      "Supported team training and competition preparation through mentoring and hands-on demos.",
    ],
  },
],
education: [
  {
    school: "Leiden University",
    degree: "Master of Science (MSc) in Computer Science – Artificial Intelligence Specialisation",
    dateRange: "Sep 2025 - Jul 2027",
    logo: "/logos/leiden_logo.jpeg",
    achievements: [
      "Focus on advanced machine learning, reinforcement learning, and data-driven decision intelligence.",
      "Developing research on physics-informed AI and large-scale neural systems.",
      "Relevant coursework: Deep Learning, Reinforcement Learning, Probabilistic AI, and Data-Intensive Computing.",
    ],
  },
  {
    school: "University of Groningen",
    degree: "Bachelor of Science (BSc) in Artificial Intelligence",
    dateRange: "Sep 2022 - Jul 2025",
    logo: "/logos/rug_logo.jpeg",
    achievements: [
      "Graduated with distinction (8.5/10) for Bachelor Thesis on Graph Neural Networks for Air Pollution Forecasting.",
      "Published research at ECAI 2025 @ PMLR and SPIE 2025 in collaboration with Harvard Medical School.",
      "Active member of Cover and Makercie RUG; contributed to European Rover Challenge robotics projects.",
    ],
  },
],


};
