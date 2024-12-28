import type { Project, Course } from "@types";

export const Projects: Project[] = [
  {
    title: "Personal Firewall Development",
    description:
      "Develop a basic personal firewall that monitors and filters incoming and outgoing network traffic based on security rules.",
    skills: ["Networking", "Firewall Concepts", "Programming (Python/C++)"],
    prerequisites: [
      "Wireshark for network traffic analysis",
      "Python or C++ development environment (e.g., PyCharm, Visual Studio)",
      "Access to a test network or virtual machine for simulations",
    ],
    role: "Network Security Engineer",
  },
  {
    title: "Web Application Vulnerability Scanner",
    description:
      "Create a tool to identify vulnerabilities like SQL injection, XSS, and CSRF in web applications.",
    skills: ["Web Security", "Vulnerability Assessment", "Python/JavaScript"],
    prerequisites: [
      "Burp Suite Community Edition for testing",
      "Local web server (e.g., XAMPP, WAMP) for hosting vulnerable apps",
      "Python/JavaScript runtime and IDE (e.g., VS Code, PyCharm)",
    ],
    role: "Web Application Security Analyst",
  },
  {
    title: "Password Manager",
    description:
      "Build a secure password manager to store and generate strong passwords for users.",
    skills: [
      "Cryptography",
      "Data Encryption",
      "Secure Storage",
      "UI/UX Design",
    ],
    prerequisites: [
      "A cryptography library (e.g., PyCryptodome for Python)",
      "Database system (e.g., SQLite or MongoDB)",
      "Figma or Sketch for UI/UX design mockups",
    ],
    role: "Software Developer",
  },
  {
    title: "Penetration Testing Lab Setup",
    description:
      "Set up a virtual lab with vulnerable machines to practice penetration testing techniques.",
    skills: ["Virtualization", "Penetration Testing", "Ethical Hacking"],
    prerequisites: [
      "VirtualBox or VMware for virtualization",
      "Kali Linux or Parrot OS for penetration testing",
      "Preconfigured vulnerable machines (e.g., Metasploitable, OWASP Juice Shop)",
    ],
    role: "Penetration Tester",
  },
  {
    title: "IoT Security Assessment Tool",
    description:
      "Develop a tool to assess the security of IoT devices, including vulnerability scanning and firmware analysis.",
    skills: ["IoT", "Reverse Engineering", "Python"],
    prerequisites: [
      "Firmware extraction tools (e.g., Binwalk, Firmware Mod Kit)",
      "Python environment with relevant libraries (e.g., Scapy for networking)",
      "Access to IoT devices or emulators for testing",
    ],
    role: "IoT Security Specialist",
  },
  {
    title: "Digital Forensics Toolkit",
    description:
      "Create a set of tools to perform digital forensics tasks such as data recovery and evidence analysis.",
    skills: ["Forensics", "Data Recovery", "File Systems"],
    prerequisites: [
      "Autopsy or FTK Imager for forensic analysis",
      "Disk imaging tools (e.g., dd, Clonezilla)",
      "Test data sets or drives for analysis practice",
    ],
    role: "Digital Forensics Analyst",
  },
  {
    title: "Secure Messaging App",
    description:
      "Develop a messaging app that uses end-to-end encryption to ensure secure communication.",
    skills: ["Cryptography", "Mobile App Development", "Security Protocols"],
    prerequisites: [
      "Firebase or AWS for backend services",
      "A cryptography SDK (e.g., OpenSSL, Libsodium)",
      "Development environment (e.g., Android Studio, Xcode)",
    ],
    role: "Mobile Security Developer",
  },
  {
    title: "Malware Analysis Framework",
    description:
      "Design a framework to analyze malware behavior using sandboxing and static analysis techniques.",
    skills: ["Malware Analysis", "Sandboxing", "Reverse Engineering"],
    prerequisites: [
      "Cuckoo Sandbox for dynamic analysis",
      "IDA Pro or Ghidra for reverse engineering",
      "Access to malware samples in a controlled environment",
    ],
    role: "Malware Analyst",
  },
  {
    title: "Two-Factor Authentication System",
    description:
      "Implement a two-factor authentication system using OTPs or biometric authentication.",
    skills: ["Authentication", "Cryptography", "API Development"],
    prerequisites: [
      "Google Authenticator or Authy for testing OTPs",
      "Twilio or SendGrid accounts for sending OTPs via SMS or email",
      "Cryptography libraries (e.g., PyCryptodome, Bcrypt)",
    ],
    role: "Security Engineer",
  },
];

export const Courses: Course[] = [
  {
    title: "Google Cybersecurity Professional Certificate",
    skills:
      "Network Security, Python Programming, Linux, Incident Response, Risk Management, SQL",
    duration: "6 Months",
    provider: "Google",
    icon: "cib:google",
    link: "https://www.coursera.org/professional-certificates/google-cybersecurity",
  },
  {
    title: "CompTIA Security+ (SY0-601) Certification Training",
    skills:
      "Risk Assessment, Cryptography, Network Security, System Security, Incident Response",
    duration: "3 Months",
    provider: "CompTIA (via Coursera)",
    icon: "cib:coursera",
    link: "https://www.coursera.org/learn/comptia-security-701",
  },
  {
    title: "IBM Cybersecurity Analyst Professional Certificate",
    skills:
      "Security Operations, SIEM Tools, Threat Intelligence, Endpoint Protection, Cryptography",
    duration: "8 Months",
    provider: "IBM",
    icon: "cib:ibm",
    link: "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst",
  },
  {
    title: "Cisco CyberOps Associate Certification Training",
    skills:
      "Security Monitoring, Threat Analysis, Incident Handling, Security Policy Development",
    duration: "6 Months",
    provider: "Cisco Networking Academy",
    icon: "cib:cisco",
    link: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/cyberops/cyberops-associate/index.html",
  },
  {
    title: "Certified Ethical Hacker (CEH) Certification",
    skills:
      "Penetration Testing, Vulnerability Analysis, Social Engineering, Network Scanning",
    duration: "5 Days",
    provider: "EC-Council",
    icon: "simple-icons:comptia",
    link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
  },
  {
    title: "AWS Security Essentials",
    skills: "Cloud Security, IAM, Compliance, Risk Management, Data Protection",
    duration: "1 Day",
    provider: "Amazon Web Services",
    icon: "cib:amazon-aws",
    link: "https://aws.amazon.com/training/classroom/aws-security-essentials/",
  },
];
