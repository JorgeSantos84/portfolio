import type { JobDescriptionProps } from '../types/mainTypes';

export const GLOBAL_NAMES = {
  THEME: {
    LIGHT: 'light',
    DARK: 'dark',
  },
  STORAGE_KEY: 'theme',
};

export const PASS_JOBS = {
  ITSECTOR: 'IT Sector',
  CASO: 'CASO LDA',
  SUBLIME_BOUTIQUE: 'Sublime Boutique',
} as const;

export const AVAILABLE_LANGUAGES = {
  EN: 'EN',
  PT: 'PT',
} as const;

export const JOBS_EN: JobDescriptionProps[] = [
  {
    jobName: 'ITSECTOR',
    details: {
      title: 'Software Engineer',
      company: PASS_JOBS.ITSECTOR,
      location: 'Braga, Portugal',
      startDate: '2024/06',
      endDate: 'Present',
      description: [
        {
          title: 'Overview',
          items: [
            'Backend Developer contributing to the development and evolution of the Backend for Frontend (BFF) layer for Banco Montepio’s digital banking platform. Responsible for designing and implementing REST APIs that support both web and mobile applications, while promoting code quality through code reviews, mentoring developers, and contributing to technical decisions within the team.',
          ],
        },
        {
          title: 'Leadership',
          items: [
            'Lead the backend team by coordinating technical tasks and defining implementation approaches.',
            'Perform code reviews, enforcing coding standards and software quality across the team.',
            'Mentor and onboard new developers, accelerating their integration into the project.',
            'Participate in performance evaluations, providing technical feedback for career progression.',
            'Collaborate directly with Business Analysts and software engineers from Banco Montepio to refine requirements and define technical solutions.',
          ],
        },
        {
          title: 'Backend Development',
          items: [
            'Developed backend services for a digital banking platform composed of 14 Spring Boot microservices.',
            'Implemented REST APIs responsible for orchestrating communication between frontend applications (web and mobile apps) and the bank’s core transaction systems.',
            'Designed and implemented a reusable centralized exception-handling framework adopted across all microservices through a shared library.',
            'Developed the OAuth2 stateless authentication flow, implementing token validation and authentication mechanisms.',
            'Developed reusable services for sensitive data encryption, improving consistency and maintainability across the platform.',
            'Defined the team’s unit testing standards using JUnit and Mockito.',
            'Promoted reusable development patterns and engineering best practices to reduce implementation effort.',
            'Worked with Azure DevOps for CI/CD pipeline management, deployment monitoring, and work tracking (Kanban), as well as Application Insights for monitoring, log analysis, and production troubleshooting.',
          ],
        },
        {
          title: 'Technologies',
          items: [],
        },
      ],
      technologies: [
        'Java 21',
        'SpringBoot',
        'Maven',
        'Jakarta',
        'Lombok',
        'Agile',
        'Scrum',
        'JUnit',
        'Mockito',
        'Azure',
        'Git',
        'Swagger',
        'Postman',
      ],
    },
  },
  {
    jobName: 'CASO',
    details: {
      title: 'Software Engineer',
      company: PASS_JOBS.CASO,
      location: 'Braga, Portugal',
      startDate: '2023/02',
      endDate: '2024/06',
      description: [
        {
          title: 'Overview',
          items: [
            'Fullstack developer contributing to the development of a SaaS tailored for the industrial sector',
          ],
        },
        {
          title: 'Fullstack Development',
          items: [
            'Developed microservices using Java, Spring, and MySQL, including RESTful APIs for payment processing (e.g.,MbWay, Multibanco, credit card).',
            'Designed and implemented a digital counter web application from scratch, encompassing both frontend(JavaScript, Bootstrap, HTML, CSS) and backend development',
            'Contributed to the early development of a web application for managing signed digital invoices in PDF format,handling frontend design and backend tasks.',
          ],
        },
        {
          title: 'Development of a Progressive Web App (PWA)',
          items: [
            "Leading the development of a PWA with standalone functionalities, ensuring seamless offline and online experiences using Google's Workbox framework for service worker management.",
            'Designed and implemented both frontend and backend components of the PWA, leveraging Spring for backenddevelopment and Spring Data JPA for database access and management',
          ],
        },
        {
          title: 'Technologies',
          items: [],
        },
      ],
      technologies: [
        'Java 8',
        'JavaScript',
        'JQuery',
        'SpringBoot',
        'Struts',
        'JPA',
        'Hibernate',
        'SQL',
        'HTML',
        'CSS',
      ],
    },
  },
  {
    jobName: 'SUBLIME_BOUTIQUE',
    details: {
      title: 'Software Engineer',
      company: PASS_JOBS.SUBLIME_BOUTIQUE,
      location: 'Braga, Portugal',
      startDate: '2021/01',
      endDate: '2023/01',
      description: [
        {
          title: 'Overview',
          items: [
            'Fullstack developer contributing to the development of two e-commerce platforms for the fashion industry, focusing on both frontend and backend development.',
          ],
        },
        {
          title: 'Fullstack Development',
          items: [
            'Worked on the development of two web apps focused on e-commerce',
            'Managed the front and back end of these websites for two years',
            'Worked with: Javascript/HTML/CSS and Java 8/SpringBoot/Struts/Hibernate/MySQL',
          ],
        },
        {
          title: 'Technologies',
          items: [],
        },
      ],
      technologies: ['Java 8', 'JavaScript', 'JQuery', 'Spring', 'HTML', 'CSS'],
    },
  },
];

export const JOBS_PT: JobDescriptionProps[] = [
  {
    jobName: 'ITSECTOR',
    details: {
      title: 'Engenheiro de Software',
      company: PASS_JOBS.ITSECTOR,
      location: 'Braga, Portugal',
      startDate: '2024/06',
      endDate: 'Presente',
      description: [
        {
          title: 'Visão Geral',
          items: [
            'Desenvolvimento de soluções backend para a plataforma de banca digital do Banco Montepio,' +
              'implementando serviços na camada Backend for Frontend (BFF) responsáveis pela integração entre as aplicações web e mobile e os' +
              'sistemas centrais do banco. Para além do desenvolvimento de software, contribuo para a qualidade técnica da' +
              'equipa através da revisão de código, mentoria de novos elementos, definição de boas práticas de desenvolvimento e' +
              'colaboração direta com Business Analysts e equipas técnicas do cliente',
          ],
        },
        {
          title: 'Liderança',
          items: [
            'Coordenar tecnicamente a equipa backend, distribuindo tarefas e definindo a abordagem de implementação das diferentes funcionalidades.',
            'Realizar revisões de código (Pull Requests), assegurando o cumprimento das boas práticas de desenvolvimento, qualidade e consistência do código.',
            'Integrar e acompanhar novos elementos da equipa através de mentoring técnico.',
            'Participar na avaliação de desempenho dos colaboradores, fornecendo feedback técnico ao departamento de Recursos Humanos.',
            'Colaborar diretamente com Business Analysts e equipas de desenvolvimento do cliente.',
          ],
        },
        {
          title: 'Desenvolvimento Backend',
          items: [
            'Desenvolver serviços backend para uma plataforma de banca digital composta por 14 microserviços Spring Boot, organizados por diferentes áreas de negócio.',
            'Desenvolver APIs REST responsáveis pela comunicação entre as aplicações web e mobile e os sistemas transacionais centrais do banco.',
            'Conceber e implementar uma biblioteca comum para tratamento centralizado de exceções, utilizada por todos os microserviços da plataforma.',
            'Desenvolver o processo de autenticação stateless baseado em OAuth2, incluindo a validação e gestão de tokens de autenticação.',
            'Desenvolver componentes reutilizáveis para encriptação de dados sensíveis, promovendo maior consistência e reutilização entre serviços.',
            'Definir o standard de testes unitários da equipa utilizando JUnit e Mockito.',
            'Promover padrões de desenvolvimento reutilizáveis e boas práticas de engenharia de software, contribuindo para reduzir o esforço de implementação e aumentar a qualidade das entregas.',
          ],
        },
        {
          title: 'Tecnologias',
          items: [],
        },
      ],
      technologies: [
        'Java 21',
        'SpringBoot',
        'Maven',
        'Jakarta',
        'Lombok',
        'Agile',
        'Scrum',
        'JUnit',
        'Mockito',
        'Azure',
        'Git',
        'Swagger',
        'Postman',
      ],
    },
  },
  {
    jobName: 'CASO',
    details: {
      title: 'Engenheiro de Software',
      company: PASS_JOBS.CASO,
      location: 'Braga, Portugal',
      startDate: '2023/02',
      endDate: '2024/06',
      description: [
        {
          title: 'Visão Geral',
          items: [
            'Desenvolvedor Fullstack contribuindo para o desenvolvimento de um SaaS direcionado para o setor industrial',
          ],
        },
        {
          title: 'Desenvolvimento Fullstack',
          items: [
            'Desenvolver microserviços utilizando Java, Spring e MySQL, incluindo APIs REST para processamento de pagamentos (ex.: MbWay, Multibanco, cartão de crédito).',
            'Conceber e implementar uma aplicação web de contador digital do zero, abrangendo tanto o frontend (JavaScript, Bootstrap, HTML, CSS) como o backend.',
            'Contribuir para o desenvolvimento inicial de uma aplicação web para gestão de faturas digitais assinadas em formato PDF, tratando do design do frontend e das tarefas do backend.',
          ],
        },
        {
          title: 'Desenvolvimento de uma Progressive Web App (PWA)',
          items: [
            'Liderar o desenvolvimento de uma PWA com funcionalidades independentes, garantindo experiências contínuas offline e online utilizando o framework Workbox do Google para gestão de service workers.',
            'Conceber e implementar tanto os componentes frontend como backend da PWA, utilizando Spring para o desenvolvimento do backend e Spring Data JPA para acesso e gestão da base de dados.',
          ],
        },
        {
          title: 'Tecnologias',
          items: [],
        },
      ],
      technologies: [
        'Java 8',
        'JavaScript',
        'JQuery',
        'SpringBoot',
        'Struts',
        'JPA',
        'Hibernate',
        'SQL',
        'HTML',
        'CSS',
      ],
    },
  },
  {
    jobName: 'SUBLIME_BOUTIQUE',
    details: {
      title: 'Engenheiro de Software',
      company: PASS_JOBS.SUBLIME_BOUTIQUE,
      location: 'Braga, Portugal',
      startDate: '2021/01',
      endDate: '2023/01',
      description: [
        {
          title: 'Visão Geral',
          items: [
            'Desenvolvedor Fullstack contribuindo para o desenvolvimento de duas plataformas de e-commerce para a indústria da moda, com foco tanto no frontend quanto no backend.',
          ],
        },
        {
          title: 'Desenvolvimento Fullstack',
          items: [
            'Trabalhou no desenvolvimento de duas aplicações web focadas em e-commerce',
            'Geriu o frontend e o backend desses websites durante dois anos',
            'Trabalhou com: Javascript/HTML/CSS e Java 8/SpringBoot/Struts/Hibernate/MySQL',
          ],
        },
        {
          title: 'Tecnologias',
          items: [],
        },
      ],
      technologies: ['Java 8', 'JavaScript', 'JQuery', 'Spring', 'HTML', 'CSS'],
    },
  },
];
