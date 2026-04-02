export const portfolioData = {
  es: {
    personal: {
      name: "Johan Ramirez",
      title: "Software & Data Engineer",
      location: "Colombia (Remoto)",
      email: "yjramirezrubio@gmail.com",
      linkedin: "https://www.linkedin.com/in/yerson-ramirez-it/",
      github: "https://github.com/",
      cvLink: "/tu-cv.pdf",
      avatarUrl: "/images/img_1.png"
    },
    stackCategories: [
      {
        id: "dev",
        title: "Software & Web Dev",
        icon: "terminal",
        description: "Desarrollo de scripts, automatización de tareas y bases de desarrollo web.",
        skills: [
          { name: "Python", icon: "code" },
          { name: "Javascript", icon: "file-json" },
          { name: "Linux / Bash", icon: "command" },
          { name: "Git & GitHub", icon: "git-merge" }
        ]
      },
      {
        id: "data",
        title: "Data Analytics",
        icon: "bar-chart-2",
        description: "Extracción, transformación y visualización de datos complejos para toma de decisiones.",
        skills: [
          { name: "Data Cleaning", icon: "filter" },
          { name: "ETL Processes", icon: "database" },
          { name: "Data Storytelling", icon: "presentation" }
        ]
      },
      {
        id: "ai",
        title: "GenAI & Automation",
        icon: "cpu",
        description: "Integración de modelos de IA generativa y diseño de flujos de trabajo autónomos (n8n).",
        skills: [
          { name: "Prompting Avanzado", icon: "message-square" },
          { name: "n8n Workflows", icon: "git-commit" },
          { name: "LLM APIs Integration", icon: "zap" }
        ]
      }
    ],
    projects: [
      {
        id: 1,
        title: "Retail Ops Data Pipeline",
        description: "Pipeline de datos ETL robusto y seguro para Retail. Toma datos crudos, los limpia, inserta en base de datos SQLite y despliega web app interactiva.",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        tech: [
          { label: "Python", class: "tag-dev" },
          { label: "SQLite", class: "tag-data" },
          { label: "Streamlit", class: "tag-tools" }
        ],
        links: [
          { title: "App", url: "https://retail-ops-automation-apv9esayoeuswa5t6dnoet.streamlit.app/", icon: "external-link" },
          { title: "Detalles", url: "https://www.notion.so/Retail-Ops-Data-Pipeline-Resumen-del-Proyecto-334826eb5aad8058b524d85fbe86d4a0", icon: "file-text" }
        ]
      },
      {
        id: 2,
        title: "Infraestructura & GenAI",
        description: "Despliegue de modelos de GenAI e integraciones con flujos de trabajo automáticos.",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        tech: [
          { label: "GenAI", class: "tag-ai" },
          { label: "Python", class: "tag-dev" },
          { label: "n8n", class: "tag-tools" }
        ],
        links: [
          { title: "Repositorio", url: "#", icon: "github" }
        ]
      }
    ],
    simulations: [
      {
        id: 1,
        role: "GenAI Powered Data Analytics",
        company: "Tata (Forage)",
        period: "Mar. 2026",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
        link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_699e0efe4a93fafe5d87e4c8_1772932282971_completion_certificate.pdf",
        description: "Análisis de datos impulsados por IA generativa.",
        features: [
          "Limpieza y procesamiento sistemático de grandes conjuntos de datos.",
          "Interpretación de hallazgos mediante técnicas de Data Storytelling."
        ],
        tech: [
          { label: "GenAI", class: "tag-ai" },
          { label: "Data Storytelling", class: "tag-data" },
          { label: "Analytics", class: "tag-data" }
        ]
      },
      {
        id: 2,
        role: "Software Engineering",
        company: "Skyscanner (Forage)",
        period: "Mar. 2026",
        logoUrl: "https://play-lh.googleusercontent.com/zxMphCpCM1amxEvqAcaHyqAlBVB5eLheObwSY2ASUQCXFRXjx74tqE9I2bEKPoCF6UA=s256-rw",
        link: "https://www.theforage.com/completion-certificates/skoQmxqhtgWmKv2pm/p3xGFkpdot5H8NBih_skoQmxqhtgWmKv2pm_699e0efe4a93fafe5d87e4c8_1772755915717_completion_certificate.pdf",
        description: "Simulador de flujos de trabajo de productos a gran escala.",
        features: [
          "Desarrollo colaborativo en simulador de Android enfocado al usuario.",
          "Resolución guiada de incidentes técnicos."
        ],
        tech: [
          { label: "Android Dev", class: "tag-dev" },
          { label: "Issue Tracking", class: "tag-tools" }
        ]
      },
      {
        id: 3,
        role: "Data Labeling",
        company: "Forage Academy",
        period: "Feb. 2026",
        logoUrl: "https://bookface-images.s3.amazonaws.com/small_logos/6ec4d2785125c906ed8554bdfaca38ba13097af0.png",
        link: "https://www.theforage.com/completion-certificates/HgpPSsyQpzob6HEh9/Fnbjyox4Y4SciuEGF_HgpPSsyQpzob6HEh9_699e0efe4a93fafe5d87e4c8_1771983911536_completion_certificate.pdf",
        description: "Procesamiento crítico para el entrenamiento de IA.",
        features: [
          "Categorización sistemática de datos bajo estándares de calidad.",
          "Feedback Delivery para mejorar precisión de modelos ML."
        ],
        tech: [
          { label: "Data Labeling", class: "tag-data" },
          { label: "Machine Learning", class: "tag-ai" }
        ]
      }
    ],
    education: [
      {
        id: 1,
        title: "Completed n8n Course Level 1",
        issuer: "n8n",
        date: "Feb. 2026",
        iconUrl: "https://cdn.raiolanetworks.com/blog/wp-content/uploads/n8n.png",
        url: "https://community.n8n.io/badges/104/completed-n8n-course-level-1?username=yjramirez"
      },
      {
        id: 2,
        title: "Google Project Management",
        issuer: "Coursera",
        date: "Dic. 2022",
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/XUHSKLCVBZ9S"
      },
      {
        id: 3,
        title: "Introduction to Cybersecurity",
        issuer: "Cisco",
        date: "May. 2023",
        iconUrl: "https://translatorswithoutborders.org/wp-content/uploads/2021/12/Cisco-logo.png",
        url: "https://www.credly.com/badges/2b7cd1b3-db5a-436a-ba6e-685decee89b1/linked_in_profile"
      },
      {
        id: 4,
        title: "EF SET English B2",
        issuer: "EF SET",
        date: "Jul. 2023",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/330/330425.png",
        url: "https://cert.efset.org/rBZkp4"
      }
    ],
    strings: {
      "coreStack": "Core Technical Stack",
      "projectsDir": "/mnt/archive/projects",
      "jobSimulations": "Job Simulations",
      "secureCredentials": "SECURE_CREDENTIALS",
      "systemLog": "[SYS_LOG: 2026] MODULAR DASHBOARD INITIALIZED.",
      "cvButton": "CV"
    }
  },
  en: {
    personal: {
      name: "Johan Ramirez",
      title: "Software & Data Engineer",
      location: "Colombia (Remote)",
      email: "yjramirezrubio@gmail.com",
      linkedin: "https://www.linkedin.com/in/yerson-ramirez-it/",
      github: "https://github.com/",
      cvLink: "/tu-cv.pdf",
      avatarUrl: "/images/img_1.png"
    },
    stackCategories: [
      {
        id: "dev",
        title: "Software & Web Dev",
        icon: "terminal",
        description: "Script development, task automation, and web development fundamentals.",
        skills: [
          { name: "Python", icon: "code" },
          { name: "Javascript", icon: "file-json" },
          { name: "Linux / Bash", icon: "command" },
          { name: "Git & GitHub", icon: "git-merge" }
        ]
      },
      {
        id: "data",
        title: "Data Analytics",
        icon: "bar-chart-2",
        description: "Extraction, transformation, and visualization of complex data for decision making.",
        skills: [
          { name: "Data Cleaning", icon: "filter" },
          { name: "ETL Processes", icon: "database" },
          { name: "Data Storytelling", icon: "presentation" }
        ]
      },
      {
        id: "ai",
        title: "GenAI & Automation",
        icon: "cpu",
        description: "Generative AI model integration and autonomous workflow design (n8n).",
        skills: [
          { name: "Advanced Prompting", icon: "message-square" },
          { name: "n8n Workflows", icon: "git-commit" },
          { name: "LLM APIs Integration", icon: "zap" }
        ]
      }
    ],
    projects: [
      {
        id: 1,
        title: "Retail Ops Data Pipeline",
        description: "Robust and secure ETL data pipeline for Retail. Extracts raw data, cleans it, inserts into SQLite database, and deploys an interactive web app.",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        tech: [
          { label: "Python", class: "tag-dev" },
          { label: "SQLite", class: "tag-data" },
          { label: "Streamlit", class: "tag-tools" }
        ],
        links: [
          { title: "App", url: "https://retail-ops-automation-apv9esayoeuswa5t6dnoet.streamlit.app/", icon: "external-link" },
          { title: "Details", url: "https://www.notion.so/Retail-Ops-Data-Pipeline-Resumen-del-Proyecto-334826eb5aad8058b524d85fbe86d4a0", icon: "file-text" }
        ]
      },
      {
        id: 2,
        title: "Infrastructure & GenAI",
        description: "GenAI model deployments and integrations with automated workflows.",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        tech: [
          { label: "GenAI", class: "tag-ai" },
          { label: "Python", class: "tag-dev" },
          { label: "n8n", class: "tag-tools" }
        ],
        links: [
          { title: "Repository", url: "#", icon: "github" }
        ]
      }
    ],
    simulations: [
      {
        id: 1,
        role: "GenAI Powered Data Analytics",
        company: "Tata (Forage)",
        period: "Mar. 2026",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
        link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_699e0efe4a93fafe5d87e4c8_1772932282971_completion_certificate.pdf",
        description: "Data analytics driven by generative AI.",
        features: [
          "Systematic cleaning and processing of large datasets.",
          "Interpretation of findings through Data Storytelling techniques."
        ],
        tech: [
          { label: "GenAI", class: "tag-ai" },
          { label: "Data Storytelling", class: "tag-data" },
          { label: "Analytics", class: "tag-data" }
        ]
      },
      {
        id: 2,
        role: "Software Engineering",
        company: "Skyscanner (Forage)",
        period: "Mar. 2026",
        logoUrl: "https://play-lh.googleusercontent.com/zxMphCpCM1amxEvqAcaHyqAlBVB5eLheObwSY2ASUQCXFRXjx74tqE9I2bEKPoCF6UA=s256-rw",
        link: "https://www.theforage.com/completion-certificates/skoQmxqhtgWmKv2pm/p3xGFkpdot5H8NBih_skoQmxqhtgWmKv2pm_699e0efe4a93fafe5d87e4c8_1772755915717_completion_certificate.pdf",
        description: "Large scale product workflow simulator.",
        features: [
          "Collaborative development in an Android simulator focused on the user.",
          "Guided resolution of technical incidents."
        ],
        tech: [
          { label: "Android Dev", class: "tag-dev" },
          { label: "Issue Tracking", class: "tag-tools" }
        ]
      },
      {
        id: 3,
        role: "Data Labeling",
        company: "Forage Academy",
        period: "Feb. 2026",
        logoUrl: "https://bookface-images.s3.amazonaws.com/small_logos/6ec4d2785125c906ed8554bdfaca38ba13097af0.png",
        link: "https://www.theforage.com/completion-certificates/HgpPSsyQpzob6HEh9/Fnbjyox4Y4SciuEGF_HgpPSsyQpzob6HEh9_699e0efe4a93fafe5d87e4c8_1771983911536_completion_certificate.pdf",
        description: "Critical processing for AI training.",
        features: [
          "Systematic data categorization under quality standards.",
          "Feedback Delivery to improve ML model accuracy."
        ],
        tech: [
          { label: "Data Labeling", class: "tag-data" },
          { label: "Machine Learning", class: "tag-ai" }
        ]
      }
    ],
    education: [
      {
        id: 1,
        title: "Completed n8n Course Level 1",
        issuer: "n8n",
        date: "Feb. 2026",
        iconUrl: "https://cdn.raiolanetworks.com/blog/wp-content/uploads/n8n.png",
        url: "https://community.n8n.io/badges/104/completed-n8n-course-level-1?username=yjramirez"
      },
      {
        id: 2,
        title: "Google Project Management",
        issuer: "Coursera",
        date: "Dec. 2022",
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/XUHSKLCVBZ9S"
      },
      {
        id: 3,
        title: "Introduction to Cybersecurity",
        issuer: "Cisco",
        date: "May. 2023",
        iconUrl: "https://translatorswithoutborders.org/wp-content/uploads/2021/12/Cisco-logo.png",
        url: "https://www.credly.com/badges/2b7cd1b3-db5a-436a-ba6e-685decee89b1/linked_in_profile"
      },
      {
        id: 4,
        title: "EF SET English B2",
        issuer: "EF SET",
        date: "Jul. 2023",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/330/330425.png",
        url: "https://cert.efset.org/rBZkp4"
      }
    ],
    strings: {
      "coreStack": "Core Technical Stack",
      "projectsDir": "/mnt/archive/projects",
      "jobSimulations": "Job Simulations",
      "secureCredentials": "SECURE_CREDENTIALS",
      "systemLog": "[SYS_LOG: 2026] MODULAR DASHBOARD INITIALIZED.",
      "cvButton": "CV"
    }
  }
};
