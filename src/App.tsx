import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Code2, 
  Database, 
  Server, 
  Smartphone,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  User,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Contact,
  Cloud,
  Users,
  FileText,
  BookOpen,
  Globe,
  Cpu,
  Zap,
  Settings,
  Monitor,
  Brain,
  Shield,
  Network,
  Activity
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Contact },
  ];

  const skills = {
    'Programming Languages': [
      { name: 'Java (Core Java, J2EE)', level: 90, icon: Code2 },
      { name: 'Python', level: 85, icon: Code2 },
      { name: 'C++', level: 75, icon: Code2 },
      { name: 'JavaScript/TypeScript', level: 80, icon: Code2 },
    ],
    'Test Automation & Scripting': [
      { name: 'Python (Automation, Scripting)', level: 90, icon: Zap },
      { name: 'Java (Tooling)', level: 85, icon: Zap },
      { name: 'CI/CD Pipelines', level: 85, icon: Zap },
      { name: 'Apache Tomcat', level: 75, icon: Server },
    ],
    'Hardware Lab Equipment': [
      { name: 'Oscilloscopes', level: 80, icon: Monitor },
      { name: 'Protocol Analyzers', level: 85, icon: Monitor },
      { name: 'GHS Analyzers', level: 85, icon: Monitor },
      { name: 'Multimeters', level: 80, icon: Monitor },
    ],
    'Validation & Debugging': [
      { name: 'Post-Silicon Validation', level: 90, icon: Cpu },
      { name: 'Firmware Validation', level: 90, icon: Cpu },
      { name: 'JTAG, GHS, XGIG', level: 85, icon: Cpu },
      { name: 'Signal Integrity Debugging', level: 80, icon: Cpu },
    ],
    'Storage Technologies': [
      { name: 'HDD Controllers', level: 85, icon: Database },
      { name: 'SAS/SATA', level: 90, icon: Database },
      { name: 'DHSMR, SMR, CMR', level: 80, icon: Database },
      { name: 'Read & Write Channel', level: 75, icon: Database },
    ],
    'AI & Development Tools': [
      { name: 'AI-Assisted Development', level: 85, icon: Brain },
      { name: 'GitHub Copilot', level: 80, icon: Brain },
      { name: 'ChatGPT/Claude for Code', level: 85, icon: Brain },
      { name: 'Prompt Engineering', level: 80, icon: Brain },
    ],
    'Tools & Platforms': [
      { name: 'JIRA/Confluence', level: 85, icon: Settings },
      { name: 'GitHub/Git', level: 90, icon: Settings },
      { name: 'IntelliJ IDEA/Eclipse', level: 85, icon: Settings },
      { name: 'Postman API', level: 80, icon: Settings },
    ],
    'Databases & OS': [
      { name: 'MySQL/PostgreSQL', level: 80, icon: Database },
      { name: 'Linux/Windows', level: 85, icon: Server },
      { name: 'Oracle/SQLite', level: 75, icon: Database },
      { name: 'Enterprise Systems', level: 80, icon: Server },
    ]
  };

  const experiences = [
    {
      title: 'Software Development Engineer Intern',
      company: 'NTS Nihon Global',
      location: 'Remote',
      period: 'Jun 2025 – Present',
      achievements: [
        'Architected and developed the backend system for the \'Sawari\' mobility payment project, designing scalable RESTful APIs and integrating with payment gateways and mobility services using React Native, TypeScript, Spring Boot/Java, and Supabase',
        'Designed and implemented database schemas and optimized queries in PostgreSQL for core mobility and payment data, ensuring data integrity and performance',
        'Developed and deployed core features for the \'Employee Dashboard\' web application, enhancing user experience and integrating with backend services using React Vite frontend and Spring Boot backend',
        'Actively participated in the full software development lifecycle (SDLC), from requirements gathering and design to implementation, testing, and deployment of web and Android applications',
        'Collaborated with cross-functional teams to define requirements, implement features, and conduct testing for web and mobile applications',
        'Utilized Git for version control and contributed to building automated unit and integration tests for developed features'
      ],
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Lab Technician - Firmware Development Validation',
      company: 'Western Digital Corporation',
      location: 'Bengaluru',
      period: 'May 2023 – Aug 2024',
      achievements: [
        'Validated 100+ trunk integrations and release branches using CI tools, identified critical errors that prevented 30+ crash scenarios and improved system uptime by 20%',
        'Performed debugging on embedded systems and high-speed interfaces (SAS/SATA) using JTAG, GHS, and XGIG, reducing data discrepancies by 15% and isolating firmware-hardware integration bugs',
        'Reported directly to an SDE Embedded Manager, gaining exposure to software development methodologies and higher-level technical problem-solving',
        'Monitored and triggered 50+ firmware builds/week in the CI/CD pipeline, ensured 100% rollback readiness, reducing deployment failure risk by 35%',
        'Maintained the quality of HDD components (SAS, SATA, DHSMR, SMR, CMR) by performing comprehensive testing and debugging',
        'Owned and maintained Tier 1–3 CI test systems, ensuring smooth operation across 500+ StressX, Integration, and Logical branches',
        'Assisted in the assembly, configuration, and maintenance of test benches for silicon validation, ensuring signal integrity and proper connectivity',
        'Developed a Network Monitoring Tool (Java/Python) that reduced power consumption for idle systems and improved connection tracking by 45%',
        'Automated system wake-up/shutdown for 200+ idle nodes, using Magic Packets, log analysis, and Wake-on-LAN, achieved a 45% reduction in power usage',
        'Streamlined troubleshooting processes for complex engineering systems, reducing average resolution time by 2 hours per case for high-priority tickets',
        'Collaborated with global firmware and hardware teams, improving delivery timelines by 15%',
        'Executed 100+ HIL test cases simulating real-time behavior, uncovered 15+ firmware-hardware integration bugs, improving test coverage by 25%',
        'Winner – WDC Industrial Hackathon 2024 for innovation in automation tooling'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Apprenticeship Trainee (Maintenance & Testing)',
      company: 'Bharat Electronics Limited',
      location: 'Bengaluru',
      period: 'Jan 2021 – Jan 2022',
      achievements: [
        'Gained 12 months hands-on experience in testing, verification, and maintenance in the Passive Vacuum Devices (PVD) division',
        'Contributed to 4+ live hardware testing projects involving vacuum furnaces and advanced electronics systems',
        'Performed daily diagnostics and system-level troubleshooting',
        'Gained hands-on experience with Hydrogen Bottom & Top Load Brazing vacuum furnaces and High-Temperature (HT) vacuum Brazing furnaces'
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Operator (Hardware QA)',
      company: 'Wistron (ICT Service Management Solutions)',
      location: 'Bengaluru',
      period: 'May 2020 – Sep 2020',
      achievements: [
        'Diagnosed and resolved 50+ device issues/day related to network, Wi-Fi, and Bluetooth in a fast-paced production line',
        'Reduced device failure rate by 20%',
        'Achieved certifications across seven progressive testing stages within a short timeframe',
        'Collaborated with 3+ engineering teams to perform root cause analysis on 100+ integration failures, cutting resolution time by 30%'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const projects = [
    {
      title: 'Employee Dashboard',
      description: 'Full-stack Employee Dashboard with FastAPI backend and React frontend, featuring secure authentication, 6 user roles, and OTP-based login system.',
      technologies: ['FastAPI', 'Python', 'PostgreSQL', 'React', 'TypeScript', 'JWT', 'Redis', 'Supabase'],
      liveUrl: 'https://abhishekreddys07.github.io/EmployeeDashboard/',
      githubUrl: 'https://github.com/AbhishekReddys07/EmployeeDashboard',
      highlights: ['Improved platform security by 40%', '6 user roles with RBAC', 'OTP-based authentication'],
      color: 'from-blue-600 to-purple-600',
      icon: Users
    },
    {
      title: 'DocCollab - Collaborative Document Editor',
      description: 'Modern collaborative document editing platform with real-time collaboration, advanced privacy controls, and comprehensive version tracking.',
      technologies: ['React', 'TypeScript', 'Supabase', 'Tiptap', 'SCSS', 'Real-time Updates'],
      githubUrl: 'https://github.com/AbhishekReddys07/DocCollab',
      highlights: ['Real-time collaboration', 'Rich WYSIWYG editor', '@Mentions & notifications', 'Version history tracking'],
      color: 'from-emerald-600 to-cyan-600',
      icon: FileText
    },
    {
      title: 'Weather Monitoring System',
      description: 'Flask-based web application for continuous weather monitoring with real-time data retrieval, daily summaries, and configurable alerts.',
      technologies: ['Python', 'Flask', 'SQLite', 'Matplotlib', 'Docker', 'OpenWeatherMap API'],
      githubUrl: 'https://github.com/AbhishekReddys07/Weather-Monitoring',
      highlights: ['Real-time weather data', 'Daily summaries & alerts', 'Data visualizations', 'Dockerized deployment'],
      color: 'from-cyan-600 to-blue-600',
      icon: Cloud
    },
    {
      title: 'Book Review Platform',
      description: 'Full-stack Book Review Platform with JWT authentication, role-based access control, and comprehensive search functionality for 100+ users.',
      technologies: ['React', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/AbhishekReddys07/Book-Review-Platform.github.io',
      highlights: ['100+ active users', 'Row-Level Security', 'JWT + RBAC implementation'],
      color: 'from-purple-600 to-pink-600',
      icon: BookOpen
    },
    {
      title: 'Wake-on-LAN Automation Tool',
      description: 'User-friendly GUI application for remotely powering on or restarting networked systems with advanced security features and real-time status monitoring.',
      technologies: ['Python', 'Tkinter', 'SQLite3', 'Socket Programming', 'Subprocess', 'File I/O'],
      githubUrl: 'https://github.com/AbhishekReddys07/System-Status-Checker-',
      highlights: ['GUI interface with Tkinter', 'Real-time status updates', 'Password protection', 'Modular code structure'],
      color: 'from-orange-600 to-red-600',
      icon: Network
    },
    {
      title: 'Secure Wake-on-LAN with VPN',
      description: 'Advanced Python-based Wake-on-LAN tool with AES-CBC encryption, VPN support, and enhanced security features for enterprise network management.',
      technologies: ['Python', 'AES-CBC Encryption', 'VPN Integration', 'Cryptography Library', 'CLI Interface', 'Socket Programming'],
      githubUrl: 'https://github.com/AbhishekReddys07/WakeOnLane',
      highlights: ['AES-CBC encryption', 'VPN support', 'Device status checks', 'CLI interface'],
      color: 'from-indigo-600 to-purple-600',
      icon: Shield
    },
    {
      title: 'AI Predictive Maintenance System',
      description: 'Intelligent predictive maintenance system leveraging AI and machine learning to predict equipment failures and optimize maintenance schedules.',
      technologies: ['Python', 'Machine Learning', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn', 'Data Analytics'],
      githubUrl: '#',
      highlights: ['AI-powered predictions', 'Equipment failure analysis', 'Maintenance optimization', 'Data-driven insights'],
      color: 'from-green-600 to-teal-600',
      icon: Activity
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'ISBM University',
      period: '2022 – 2025',
      status: 'In Progress'
    },
    {
      degree: 'Diploma',
      field: 'Electronics & Communication Engineering',
      institution: 'MS Polytechnic',
      period: '2020 – 2022',
      status: 'Completed'
    },
    {
      degree: 'ITI',
      field: 'Electrician',
      institution: 'Ashok Group of Institutions',
      period: '2017 – 2019',
      status: 'Completed'
    }
  ];

  const certifications = [
    'Full Stack Engineering',
    'Generative AI',
    'SCRUM Fundamentals',
    'Prompt Engineering'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Abhishek Reddy S
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 text-left rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Abhishek Reddy S
          </h1>
          <div className="text-xl md:text-2xl mb-8 text-blue-100">
            <span className="typing-animation">Software Development Engineer | AI-Powered Developer</span>
          </div>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-blue-50">
            Experienced Software Development Engineer specializing in firmware validation, full-stack development, 
            and AI-assisted programming. Expert in leveraging cutting-edge AI tools to accelerate development 
            and deliver innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/70" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate Software Development Engineer with extensive experience in 
                firmware validation, full-stack development, and AI-assisted programming. My journey spans 
                from embedded systems debugging to building scalable web applications using modern AI tools.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With expertise in hardware validation, software development, and AI-powered development workflows, 
                I leverage tools like GitHub Copilot, ChatGPT, and Claude to accelerate development cycles and 
                deliver innovative solutions. I was recognized as the winner of the WDC Industrial 
                Hackathon 2024 for innovation in automation tooling.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Award className="text-blue-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">WDC Hackathon Winner</h3>
                  <p className="text-gray-600 text-sm">2024 Industrial Hackathon for automation innovation</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-xl">
                  <Brain className="text-emerald-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Development</h3>
                  <p className="text-gray-600 text-sm">Expert in AI-assisted coding and prompt engineering</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-emerald-100 text-gray-800 rounded-full text-sm">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-emerald-500 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p>Improved system uptime by 20% through critical error prevention</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p>Reduced defect resolution time by 30% via efficient troubleshooting</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p>Achieved 45% power usage reduction through automation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p>Developed Network Monitoring Tool with Java and Python</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p>Validated 100+ trunk integrations and release branches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              Comprehensive expertise spanning software development, hardware validation, AI-assisted programming, 
              and modern development tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => {
              const CategoryIcon = skillList[0]?.icon;
              return (
                <div key={category} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-6">
                    {CategoryIcon && <CategoryIcon className="text-blue-600" size={24} />}
                    <h3 className="text-lg font-bold text-gray-900">{category}</h3>
                  </div>
                  <div className="space-y-4">
                    {skillList.map((skill, index) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${
                              categoryIndex === 0 ? 'from-blue-500 to-blue-600' :
                              categoryIndex === 1 ? 'from-emerald-500 to-emerald-600' :
                              categoryIndex === 2 ? 'from-purple-500 to-purple-600' :
                              categoryIndex === 3 ? 'from-cyan-500 to-cyan-600' :
                              categoryIndex === 4 ? 'from-orange-500 to-orange-600' :
                              categoryIndex === 5 ? 'from-pink-500 to-pink-600' :
                              categoryIndex === 6 ? 'from-indigo-500 to-indigo-600' :
                              'from-teal-500 to-teal-600'
                            } transition-all duration-1000 skill-bar`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Development Expertise Highlight */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <Brain size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">AI-Powered Development Expertise</h3>
              <p className="text-lg mb-6 max-w-4xl mx-auto">
                Leveraging cutting-edge AI tools and prompt engineering to accelerate development workflows, 
                enhance code quality, and deliver innovative solutions faster than traditional methods.
              </p>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-4 mb-3">
                    <Code2 size={32} className="mx-auto" />
                  </div>
                  <h4 className="font-semibold">GitHub Copilot</h4>
                  <p className="text-sm opacity-90">AI pair programming</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-4 mb-3">
                    <Brain size={32} className="mx-auto" />
                  </div>
                  <h4 className="font-semibold">ChatGPT/Claude</h4>
                  <p className="text-sm opacity-90">Code generation & debugging</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-4 mb-3">
                    <Zap size={32} className="mx-auto" />
                  </div>
                  <h4 className="font-semibold">Prompt Engineering</h4>
                  <p className="text-sm opacity-90">Optimized AI interactions</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-4 mb-3">
                    <Settings size={32} className="mx-auto" />
                  </div>
                  <h4 className="font-semibold">AI Workflow Integration</h4>
                  <p className="text-sm opacity-90">Seamless development pipeline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Briefcase size={18} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={18} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={18} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid gap-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <project.icon size={32} className="text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                    <div className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIndex) => (
                        <span key={tIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-gray-700 mb-1">{edu.field}</p>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <div className="flex items-center md:justify-end space-x-2 mb-2">
                      <Calendar size={18} className="text-gray-500" />
                      <span className="text-gray-600">{edu.period}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      edu.status === 'In Progress' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              I'm always interested in discussing new opportunities, innovative projects, 
              and collaborations. Let's build something amazing together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="https://www.linkedin.com/in/72a925253abhi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-6 rounded-xl text-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin size={32} className="mx-auto mb-4" />
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <p className="text-blue-100 text-sm">Professional Profile</p>
            </a>

            <a
              href="https://github.com/AbhishekReddys07"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 p-6 rounded-xl text-center hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={32} className="mx-auto mb-4" />
              <h3 className="font-bold mb-2">GitHub</h3>
              <p className="text-emerald-100 text-sm">Code Repository</p>
            </a>

            <a
              href="mailto:reddyabhishek891@gmail.com"
              className="bg-purple-600 p-6 rounded-xl text-center hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={32} className="mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-purple-100 text-sm">reddyabhishek891@gmail.com</p>
            </a>

            <a
              href="tel:+918088749802"
              className="bg-cyan-600 p-6 rounded-xl text-center hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={32} className="mx-auto mb-4" />
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-cyan-100 text-sm">+91 80887 49802</p>
            </a>
          </div>

          {/* Additional Contact Information */}
          <div className="mt-12 text-center">
            <div className="bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="text-blue-400" size={24} />
                  <div className="text-left">
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">reddyabhishek891@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="text-emerald-400" size={24} />
                  <div className="text-left">
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">Bengaluru, India</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-300">
                  Open to remote opportunities and collaborations worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Abhishek Reddy S. All rights reserved. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;