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
        color: "blue",
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
        color: "emerald",
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
        color: "violet",
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
        description: "ETL pipeline robusto y seguro para Retail. Extrae datos crudos, los limpia, inserta en SQLite y despliega una web app interactiva con Streamlit para análisis en tiempo real.",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        notionUrl: "https://adventurous-guavaberry-dc6.notion.site/Retail-Ops-Data-Pipeline-Resumen-del-Proyecto-334826eb5aad8058b524d85fbe86d4a0?pvs=74",
        tech: [
          { label: "Python", class: "tag-dev" },
          { label: "SQLite", class: "tag-data" },
          { label: "Streamlit", class: "tag-tools" }
        ],
        links: [
          { title: "Ver App", url: "https://retail-ops-automation-apv9esayoeuswa5t6dnoet.streamlit.app/", icon: "external-link" },
          { title: "Documentación", url: "https://adventurous-guavaberry-dc6.notion.site/Retail-Ops-Data-Pipeline-Resumen-del-Proyecto-334826eb5aad8058b524d85fbe86d4a0?pvs=74", icon: "book-open" }
        ]
      },
      {
        id: 2,
        title: "Marketing A/B Testing Pipeline",
        description: "La pregunta del equipo de Marketing fue: “La Variante B tiene más ventas este mes, ¿la desplegamos a todos?",
        thumbnail: "https://images.unsplash.com/photo-1674027001844-6ad209efd09e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        notionUrl: "https://adventurous-guavaberry-dc6.notion.site/Marketing-A-B-Testing-Pipeline-336826eb5aad80d5b5f7d5254de142bc",
        tech: [
          { label: "Python", class: "tag-dev" },
          { label: "DuckDB", class: "tag-data" },
          { label: "Pandas", class: "tag-data" },
          { label: "DBT", class: "tag-data" },
          { label: "Streamlit", class: "tag-tools" }
        ],
        links: [
          { title: "Ver App", url: "https://proyectomarketingabtest-wpzvh3ecsi8cqqbtunwn3q.streamlit.app/", icon: "external-link" },
          { title: "Documentación", url: "https://adventurous-guavaberry-dc6.notion.site/Marketing-A-B-Testing-Pipeline-336826eb5aad80d5b5f7d5254de142bc", icon: "book-open" }
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
        description: "Análisis de datos impulsados por IA generativa para una de las empresas de consultoría más grandes del mundo.",
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
        description: "Simulación del flujo de trabajo de un producto a gran escala en la empresa líder de viajes.",
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
        description: "Procesamiento crítico de datos para el entrenamiento de modelos de IA, asegurando entradas de alta calidad para Aprendizaje Automático.",
        features: [
          "Categorización sistemática de datos bajo estándares de calidad estrictos.",
          "Retroalimentación para mejorar la precisión de los modelos de ML."
        ],
        tech: [
          { label: "Data Labeling", class: "tag-data" },
          { label: "Machine Learning", class: "tag-ai" }
        ]
      }
    ],
    education: [
      { id: 1, title: "Completed n8n Course Level 1", issuer: "n8n", date: "Feb. 2026", iconUrl: "https://cdn.raiolanetworks.com/blog/wp-content/uploads/n8n.png", url: "https://community.n8n.io/badges/104/completed-n8n-course-level-1?username=yjramirez" },
      { id: 2, title: "Google Project Management", issuer: "Coursera", date: "Dic. 2022", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/XUHSKLCVBZ9S" },
      { id: 3, title: "Introduction to Cybersecurity", issuer: "Cisco", date: "May. 2023", iconUrl: "https://translatorswithoutborders.org/wp-content/uploads/2021/12/Cisco-logo.png", url: "https://www.credly.com/badges/2b7cd1b3-db5a-436a-ba6e-685decee89b1/linked_in_profile" },
      { id: 4, title: "EF SET English Certificate B2", issuer: "EF SET", date: "Jul. 2023", iconUrl: "https://cdn-icons-png.flaticon.com/512/330/330425.png", url: "https://cert.efset.org/rBZkp4" }
    ],
    strings: {
      cvButton: "CV",
      coreStack: "Stack Técnico Principal",
      projectsDir: "/mnt/archivo/proyectos",
      jobSimulations: "Simulaciones Laborales (Forage)",
      secureCredentials: "Credenciales & Certificaciones",
      systemLog: "[SYS_LOG: 2026] DASHBOARD MODULAR INICIALIZADO. Portafolio de Johan Ramirez.",
      viewProject: "Ver Proyecto",
      viewApp: "Ver App",
      viewDocs: "Documentación"
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
        color: "blue",
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
        color: "emerald",
        description: "Extraction, transformation, and visualization of complex data for informed decision making.",
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
        color: "violet",
        description: "Generative AI model integration and autonomous workflow design with n8n.",
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
        description: "Robust and secure ETL data pipeline for Retail operations. Extracts raw data, cleans it, loads into SQLite, and deploys an interactive Streamlit web app for real-time analysis.",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        notionUrl: "https://www.notion.so/Retail-Ops-Data-Pipeline-Resumen-del-Proyecto-334826eb5aad8058b524d85fbe86d4a0",
        tech: [
          { label: "Python", class: "tag-dev" },
          { label: "SQLite", class: "tag-data" },
          { label: "Streamlit", class: "tag-tools" }
        ],
        links: [
          { title: "Live App", url: "https://retail-ops-automation-apv9esayoeuswa5t6dnoet.streamlit.app/", icon: "external-link" },
          { title: "Documentation", url: "https://adventurous-guavaberry-dc6.notion.site/Retail-Ops-Data-Pipeline-Resumen-del-Proyecto-334826eb5aad8058b524d85fbe86d4a0?pvs=74", icon: "book-open" }
        ]
      },
      {
        id: 2,
        title: "Marketing A/B Testing Pipeline",
        description: "The Marketing team asked: 'Variant B has more sales this month — should we roll it out to everyone?' This pipeline answers that with statistical rigor using dbt + DuckDB.",
        thumbnail: "https://images.unsplash.com/photo-1674027001844-6ad209efd09e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        notionUrl: "https://adventurous-guavaberry-dc6.notion.site/Marketing-A-B-Testing-Pipeline-336826eb5aad80d5b5f7d5254de142bc",
        tech: [
          { label: "Python", class: "tag-dev" },
          { label: "DuckDB", class: "tag-data" },
          { label: "Pandas", class: "tag-data" },
          { label: "DBT", class: "tag-data" },
          { label: "Streamlit", class: "tag-tools" }
        ],
        links: [
          { title: "Live App", url: "https://proyectomarketingabtest-wpzvh3ecsi8cqqbtunwn3q.streamlit.app/", icon: "external-link" },
          { title: "Documentation", url: "https://adventurous-guavaberry-dc6.notion.site/Marketing-A-B-Testing-Pipeline-336826eb5aad80d5b5f7d5254de142bc", icon: "book-open" }
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
        description: "Data analytics powered by generative AI for one of the world's largest consulting companies.",
        features: [
          "Systematic cleaning and processing of large datasets.",
          "Findings communicated through Data Storytelling techniques."
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
        description: "Simulated a large-scale product workflow inside the leading travel tech company.",
        features: [
          "Collaborative development in a user-focused Android simulator.",
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
        description: "Critical data processing for AI model training, ensuring high quality inputs for Machine Learning.",
        features: [
          "Systematic data categorization under strict quality standards.",
          "Feedback Delivery to improve ML model accuracy."
        ],
        tech: [
          { label: "Data Labeling", class: "tag-data" },
          { label: "Machine Learning", class: "tag-ai" }
        ]
      }
    ],
    education: [
      { id: 1, title: "Completed n8n Course Level 1", issuer: "n8n", date: "Feb. 2026", iconUrl: "https://cdn.raiolanetworks.com/blog/wp-content/uploads/n8n.png", url: "https://community.n8n.io/badges/104/completed-n8n-course-level-1?username=yjramirez" },
      { id: 2, title: "Google Project Management", issuer: "Coursera", date: "Dec. 2022", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/XUHSKLCVBZ9S" },
      { id: 3, title: "Introduction to Cybersecurity", issuer: "Cisco", date: "May. 2023", iconUrl: "https://translatorswithoutborders.org/wp-content/uploads/2021/12/Cisco-logo.png", url: "https://www.credly.com/badges/2b7cd1b3-db5a-436a-ba6e-685decee89b1/linked_in_profile" },
      { id: 4, title: "EF SET English Certificate B2", issuer: "EF SET", date: "Jul. 2023", iconUrl: "https://cdn-icons-png.flaticon.com/512/330/330425.png", url: "https://cert.efset.org/rBZkp4" }
    ],
    strings: {
      cvButton: "CV",
      coreStack: "Core Technical Stack",
      projectsDir: "/mnt/archive/projects",
      jobSimulations: "Job Simulations (Forage)",
      secureCredentials: "Credentials & Certifications",
      systemLog: "[SYS_LOG: 2026] MODULAR DASHBOARD INITIALIZED. Johan Ramirez's Portfolio.",
      viewProject: "View Project",
      viewApp: "Live App",
      viewDocs: "Documentation"
    }
  }
};
