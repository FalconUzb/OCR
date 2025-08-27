import { Description } from "@radix-ui/react-toast"
import { features, title } from "process"

export const translations = {
  en: {
    // Navigation
    nav: {
      features: "Features",
      deployment: "Deployment",
      pricing: "Pricing",
      documentation: "Documentation",
      signIn: "Sign In",
      getStarted: "Get Started",
    },

    // Header
    solutions: "Solutions",
    // pricing: "Pricing",
    documentation: "Documentation",
    contact: "Contact",
    getStarted: "Get Started",

    // Hero Section
    aiPoweredOcr: "AI-Powered OCR Technology",
    transformingData: "Transforming Data",
    intoInsight: "into Insight",
    withAdvancedOcr: "with Advanced OCR",
    heroDescription:
      "Local fine-tuned models tailored for your enterprise needs. Empower your applications with our cutting-edge OCR API featuring flexible deployment options: On-Premises or SaaS.",
    exploreSolutions: "Explore Our Solutions",
    watchDemo: "Watch Demo",
    liveProcessing: "Live Processing",
    idDocument: "ID Document",
    faceDetection: "Face Detection",
    documentOcr: "Document OCR",
    active: "Active",
    realTime: "Real-time",
    idCards: "ID Cards",
    faceAi: "Face AI",
    documents: "Documents",

    // Features
    features: "Features",
    featuresTitle: "Powerful OCR Capabilities",
    featuresSubtitle: "Advanced AI-powered features designed for enterprise-grade document processing",
    aiPoweredRecognition: "AI-Powered Recognition",
    aiPoweredRecognitionDesc:
      "Advanced neural networks trained on diverse document types for superior accuracy and context understanding.",
    lightningFastProcessing: "Lightning Fast Processing",
    lightningFastProcessingDesc:
      "Process thousands of documents per minute with our optimized inference pipeline and parallel processing.",
    enterpriseSecurity: "Enterprise Security",
    enterpriseSecurityDesc:
      "Bank-grade encryption, SOC 2 compliance, and on-premises deployment options for maximum data protection.",
    multiLanguageSupport: "Multi-Language Support",
    multiLanguageSupportDesc:
      "Support for 100+ languages with specialized models for regional document formats and handwriting styles.",
    customFineTuning: "Custom Fine-Tuning",
    customFineTuningDesc:
      "Train models on your specific document types and formats for industry-leading accuracy on your use cases.",
    advancedAnalytics: "Advanced Analytics",
    advancedAnalyticsDesc:
      "Comprehensive insights into processing performance, accuracy metrics, and usage patterns with detailed reporting.",
    powerfulFeaturesTitle: "Powerful Features for Modern Enterprises",
    powerfulFeaturesSubtitle:
      "Harness the power of AI with our reliable and secure OCR solutions designed for enterprise-scale operations.",

    // Deployment Options
    deployment: {
      title: "Flexible Deployment Options",
      subtitle: "Choose the deployment model that best fits your security requirements and infrastructure needs.",
      titleHighlight: "tariffs",
      saasDescription: "Get started instantly with our cloud-hosted API. Perfect for rapid development and scaling.",
      saas: {
        title: "SaaS API Service",
        description: "Get started instantly with our cloud-hosted API. Perfect for rapid development and scaling.",
        uptime: "99.9% uptime SLA with global CDN",
        scaling: "Auto-scaling infrastructure",
        pricing: "Pay-per-use pricing model",
        monitoring: "Real-time monitoring & analytics",
        button: "Start Free Trial",
      },
      onPrem: {
        title: "On-Premises Deployment",
        description: "Deploy within your infrastructure for maximum security and control. Ideal for regulated industries.",
        sovereignty: "Complete data sovereignty",
        custom: "Custom model fine-tuning",
        support: "Dedicated support & training",
        airgap: "Air-gapped deployment options",
        button: "Contact Sales",
      },
    },

    // Technical Specs
    technical: {
      title: "Technical Specifications",
      subtitle: "Built on cutting-edge AI technology with enterprise-grade performance and reliability.",
      tabs: {
        performance: "Performance",
        accuracy: "Accuracy",
        integration: "Integration",
      },
      performance: {
        speed:{
          title: "Processing Speed",
          description: "Pages per minute with parallel processing",
        },
        response:{
          title: "Response Time",
          description: "Average API response time globally",
        },
        throughput:{
          title: "Throughput",
          description: "Documents processed daily",
        },
      },
      accuracy: {
        text:{
          title: "Text Recognition",
          description: "Accuracy on printed documents",
        },
        handwriting:{
          title: "Handwriting",
          description: "Accuracy on handwritten text",
        },
        table:{
          title: "Table Extraction",
          description: "Structured data extraction accuracy",
        },
      },
      integration: {
        supportedFormats: "Supported Formats",
        apiStandards: "API Standards",
      },
    },

    // Case Studies
    cases: {
      title: "Success Stories",
      subtitle: "See how leading enterprises are transforming their document processing with our OCR AI solutions.",
      keyResults: "Key results",
      financial: {
        company: "Leading Financial Company",
        challenge: "Needed faster, more accurate processing of financial documents and claims.",
        quote: "OCR AI helped us achieve near-perfect accuracy and dramatically reduce processing costs.",
        industry: "Financial Services",
        metrics: {
          accuracy: "99.7%", // in a percentage
          speed: "High-speed document processing",
          cost: "Significant cost reduction",
        },
        result: "Improved efficiency and accuracy in financial document workflows.",
      },  
      healthcare: {
        company: "Global Healthcare Provider",
        challenge: "Faced difficulties digitizing medical records and insurance claims.",
        quote: "With OCR AI, we streamlined our healthcare data processing with remarkable accuracy.",
        industry: "Healthcare",
        metrics: {
          accuracy: "97.2%", // in a percentage
          speed: "Accelerated claim and record processing",
          cost: "Reduced operational expenses",
        },
        result: "Enabled reliable, compliant, and efficient healthcare document processing.",
      },  
      logistics: {
        company: "International Logistics Company",
        challenge: "Needed automation for shipping documents and customs paperwork.",
        quote: "OCR AI transformed our supply chain by automating critical document handling.",
        industry: "Logistics & Supply Chain",
        metrics: {
          accuracy: "98.9%", // in a percentage
          speed: "Streamlined shipping and customs processing",
          cost: "Lowered document handling costs",
        },
        result: "Boosted efficiency across logistics and supply chain operations.",
      },
      metrics: {
        accuracy: "Accuracy", // in a percentage
        speed: "Speed",
        cost: "Cost",
      },
    },

    // Pricing
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the plan that fits your needs. Scale up or down anytime with no hidden fees.",
      popular: "Best choice for most users",
      starter: {
        name: "Starter",
        unit: "per document",
        description: "Perfect for small businesses and developers",
        features: {
          pages: "Pages per month",
          accuracy: "Accuracy per page",
          api: "API requests per month",
          analytics: "Analytics and reporting",
        },
        cta: "Start Free Trial",
      },
      professional: {
        name: "Professional",
        unit: "per document",
        description: "Ideal for growing businesses with higher volumes",
        features: {
          pages: "Pages per month",
          accuracy: "Accuracy per page",
          priority: "Priority support",
          analytics: "Analytics and reporting",
          training: "Training and fine-tuning",
          sla: "99.9% uptime SLA",
        },
        cta: "Contact Sales",
      },
      enterprise: {
        name: "Enterprise",
        unit: "per document",
        description: "For large organizations with specific requirements",
        features: {
          unlimited: "Unlimited pages per month",
          deployment: "Flexible deployment options",
          tuning: "Custom model fine-tuning",
          priority: "Priority support",
          security: "Advanced security measures",
          integrations: "Integration with existing systems",
          training: "Training and fine-tuning",
        },
        cta: "Contact Sales",
      },
      disclaimer: "All plans include 14-day free trial • No setup fees • Cancel anytime",
    },

    // Footer
    footer: {
      brand: "OCR.AI",
      description: "Transforming data into insight with advanced OCR solutions. Local fine-tuned models for enterprise needs with flexible deployment options.",
      product: {
        title: "Product",
        features: "Features",
        pricing: "Pricing",
        docs: "API Documentation",
        status: "Status",
      },
      company: {
        title: "Company",
        about: "About",
        blog: "Blog",
        careers: "Careers",
        contact: "Contact",
      },
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        security: "Security",
      },
      copyright: "© 2025 OCR.AI. All rights reserved.",
    },

    // Industry Solutions
    industry: {
      title: "Industry-Specific Solutions",
      subtitle:
        "Tailored OCR AI solutions designed for the unique challenges and compliance requirements of your industry",
      financial: "Financial Services",
      government: "Government & Border Control",
      travel: "Travel & Hospitality",
      healthcare: "Healthcare",
      logistics: "Logistics & Supply Chain",
      insurance: "Insurance",
      learnMore: "Learn More",
      dontSeeIndustry: "Don't see your industry?",
      wevGotYouCovered: "We've got you covered.",
      flexiblePlatform:
        "Our flexible OCR AI platform adapts to any industry's unique document processing needs. Let's discuss your specific requirements.",
      discussNeeds: "Discuss Your Needs",
      viewAllUseCases: "View All Use Cases",
    },

    // ROI Metrics
    roi: {
      title: "Measurable Impact in Weeks, Not Months",
      titleHighlight: "roi.titleHighlight", // Fixed missing key
      subtitle: "Join thousands of organizations that have transformed their document processing with proven results",
      accuracyRate: "Accuracy Rate",
      accuracyDesc: "Out-of-the-box precision for document processing",
      fasterProcessing: "Faster Processing",
      fasterDesc: "Reduce document processing time from hours to minutes",
      roiIncrease: "ROI Increase",
      roiDesc: "Average return on investment within 6 months",
      effortReduction: "Effort Reduction",
      effortDesc: "Decrease in manual data entry and processing tasks",
      readyToSeeResults: "Ready to see these results for your business?",
      personalizedRoi: "Get a personalized ROI calculation based on your document volume and current processes.",
      calculateRoi: "Calculate Your ROI",
      scheduleDemo: "Schedule Demo",
    },

    // Industries
    industries: {
      title: "Industry Solutions",
      titleHighlight: "Tailored for Your Sector",
      subtitle: "Specialized OCR solutions designed for industry-specific challenges",
      learnMore: "Learn More",
      financial: {
        title: "Financial Services",
        description: "Process loan applications, KYC documents, and financial statements with precision",
        features: {
          identity: "identity",
          authentication: "authentication",
          compliance: "compliance",
          risk: "risk",
        }
      },
      government: {
        title: "Government & Border Control",
        description: "Secure identity verification and document processing for government agencies",
        features: {
          passport: "passport",
          visa: "visa",
          security: "security",
          forensic: "forensic",
        },
      },
      travel: {
        title: "Travel & Hospitality",
        description: "Streamline check-ins and identity verification for seamless customer experiences",
        features: {
          checkin: "checkin",
          age: "age",
          validation: "validation",
          registration: "registration",
        }
      },
      healthcare: {
        title: "Healthcare",
        description: "Digitize medical records and insurance claims with HIPAA compliance",
        features: {
          patient: "patient",
          insurance: "insurance",
          medical: "medical",
          hipaa: "hipaa",
        }
      },
      logistics: {
        title: "Logistics & Supply Chain",
        description: "Automate shipping documents and inventory management processes",
        features: {
          lading: "lading",
          invoice: "invoice",
          customs: "customs",
          delivery: "delivery",
        }
      },
      insurance: {
        title: "Insurance",
        description: "Accelerate claims processing and policy management with intelligent document extraction",
        features: {
          claims: "claims",
          policy: "policy",
          damage: "damage",
          fraud: "fraud",
        }
      },
    },
  
    // CTA
    cta: {
      title: "Ready to Transform Your Document Processing?",
      description: "Unlock the power of intelligent document processing with a solution built around your business.",
      question: "Don't see your industry?",
      answer: "We've got you covered with custom solutions.",
      discuss: "Let’s discuss your requirements.",
      viewAll: "View all use cases",
    }, 
  },
  ru: {
    // Navigation
    nav: {
      features: "Возможности",
      deployment: "Развертывание",
      pricing: "Цены",
      documentation: "Документация",
      signIn: "Войти",
      getStarted: "Начать",
    },

    // Header
    solutions: "Решения",
    // pricing: "Цены",
    documentation: "Документация",
    contact: "Контакты",
    getStarted: "Начать",

    // Hero Section
    aiPoweredOcr: "OCR Технология на базе ИИ",
    transformingData: "Преобразование данных",
    intoInsight: "в аналитику",
    withAdvancedOcr: "с помощью продвинутого OCR",
    heroDescription:
      "Локально настроенные модели, адаптированные под потребности вашего предприятия. Расширьте возможности ваших приложений с помощью нашего передового OCR API с гибкими вариантами развертывания: On-Premises или SaaS.",
    exploreSolutions: "Изучить решения",
    watchDemo: "Смотреть демо",
    liveProcessing: "Обработка в реальном времени",
    idDocument: "Документ удостоверения",
    faceDetection: "Распознавание лиц",
    documentOcr: "OCR документов",
    active: "Активно",
    realTime: "Реальное время",
    idCards: "ID карты",
    faceAi: "Face AI",
    documents: "Документы",

    // Features
    features: "Возможности",
    featuresTitle: "Мощные возможности OCR",
    featuresSubtitle: "Продвинутые функции на базе ИИ, разработанные для корпоративной обработки документов",
    aiPoweredRecognition: "Распознавание на базе ИИ",
    aiPoweredRecognitionDesc:
      "Продвинутые нейронные сети, обученные на различных типах документов для превосходной точности и понимания контекста.",
    lightningFastProcessing: "Молниеносная обработка",
    lightningFastProcessingDesc:
      "Обрабатывайте тысячи документов в минуту с помощью нашего оптимизированного конвейера вывода и параллельной обработки.",
    enterpriseSecurity: "Корпоративная безопасность",
    enterpriseSecurityDesc:
      "Шифрование банковского уровня, соответствие SOC 2 и варианты развертывания на собственных серверах для максимальной защиты данных.",
    multiLanguageSupport: "Поддержка множества языков",
    multiLanguageSupportDesc:
      "Поддержка 100+ языков со специализированными моделями для региональных форматов документов и стилей почерка.",
    customFineTuning: "Индивидуальная настройка",
    customFineTuningDesc:
      "Обучайте модели на ваших конкретных типах и форматах документов для ведущей в отрасли точности в ваших случаях использования.",
    advancedAnalytics: "Продвинутая аналитика",
    advancedAnalyticsDesc:
      "Комплексная аналитика производительности обработки, метрик точности и паттернов использования с подробной отчетностью.",
    powerfulFeaturesTitle: "Мощные функции для современных предприятий",
    powerfulFeaturesSubtitle:
      "Используйте силу ИИ с нашими надежными и безопасными OCR решениями, разработанными для корпоративных операций.",

    // Deployment Options
    deployment: {
      title: "Гибкие варианты развертывания",
      subtitle: "Выберите модель развертывания, которая наилучшим образом соответствует вашим требованиям безопасности и инфраструктуры.",
      titleHighlight: "тарифы",
      saasDescription: "Начните мгновенно с нашим облачным API. Идеально подходит для быстрого развития и масштабирования.",
      saas: {
        title: "Облачный сервис SaaS API",
        description: "Начните мгновенно с нашим облачным API. Идеально подходит для быстрого развития и масштабирования.",
        uptime: "99,9% доступности SLA с глобальным CDN",
        scaling: "Автоматическое масштабирование инфраструктуры",
        pricing: "Модель оплаты по мере использования",
        monitoring: "Мониторинг и аналитика в реальном времени",
        button: "Начать бесплатный пробный период",
      },
      onPrem: {
        title: "Локальное развертывание",
        description: "Развертывание в вашей инфраструктуре для максимальной безопасности и контроля. Идеально для регулируемых отраслей.",
        sovereignty: "Полный суверенитет данных",
        custom: "Индивидуальная донастройка моделей",
        support: "Выделенная поддержка и обучение",
        airgap: "Варианты изолированного развертывания (air-gapped)",
        button: "Связаться с отделом продаж",
      },
    },

    // Technical Specs
    technical: {
      title: "Технические характеристики",
      subtitle: "Создано на основе передовых технологий ИИ с корпоративным уровнем производительности и надежности.",
      tabs: {
        performance: "Производительность",
        accuracy: "Точность",
        integration: "Интеграция",
      },
      performance: {
        speed:{
          title: "Скорость обработки",
          description: "Страниц в минуту при параллельной обработке",
        },
        response:{
          title: "Время отклика",
          description: "Среднее время отклика API по всему миру",
        },
        throughput:{
          title: "Пропускная способность",
          description: "Количество документов, обрабатываемых ежедневно",
        },
      },
      accuracy: {
        text:{
          title: "Распознавание текста",
          description: "Точность на печатных документах",
        },
        handwriting:{
          title: "Рукописный текст",
          description: "Точность распознавания рукописного текста",
        },
        table:{
          title: "Извлечение таблиц",
          description: "Точность извлечения структурированных данных",
        },
      },
      integration: {
        supportedFormats: "Поддерживаемые форматы",
        apiStandards: "Стандарты API",
      },
    },

    // Case Studies
    cases: {
      title: "Истории успеха",
      subtitle: "Узнайте, как ведущие компании трансформируют обработку документов с помощью наших OCR AI решений.",
      keyResults: "Ключевые результаты",
      financial: {
        company: "Крупная финансовая компания",
        challenge: "Потребовалась более быстрая и точная обработка финансовых документов и заявок.",
        quote: "OCR AI помог нам достичь почти идеальной точности и значительно сократить расходы на обработку.",
        industry: "Финансовые услуги",
        metrics: {
          accuracy: "99.7%", // в процентах
          speed: "Высокоскоростная обработка документов",
          cost: "Значительное снижение затрат",
        },
        result: "Улучшена эффективность и точность обработки финансовых документов.",
      },  
      healthcare: {
        company: "Глобальная медицинская организация",
        challenge: "Возникли трудности с оцифровкой медицинских записей и страховых заявлений.",
        quote: "С помощью OCR AI мы оптимизировали обработку медицинских данных с высокой точностью.",
        industry: "Здравоохранение",
        metrics: {
          accuracy: "97.2%", // в процентах
          speed: "Ускоренная обработка заявок и медицинских записей",
          cost: "Снижение операционных расходов",
        },
        result: "Обеспечена надежная, соответствующая требованиям и эффективная обработка медицинских документов.",
      },  
      logistics: {
        company: "Международная логистическая компания",
        challenge: "Необходима была автоматизация для транспортных документов и таможенной документации.",
        quote: "OCR AI преобразовал нашу цепочку поставок, автоматизировав обработку ключевых документов.",
        industry: "Логистика и цепочка поставок",
        metrics: {
          accuracy: "98.9%", // в процентах
          speed: "Оптимизированная обработка транспортных и таможенных документов",
          cost: "Снижение затрат на обработку документов",
        },
        result: "Повышена эффективность в логистике и управлении цепочкой поставок.",
      },
      metrics: {
        accuracy: "Точность", // in a percentage
        speed: "Скорость",
        cost: "Цена",
      },
    },

    // Pricing
    pricing: {
      title: "Простое и прозрачное ценообразование",
      subtitle: "Выберите план, который соответствует вашим потребностям. Масштабируйтесь вверх или вниз в любое время без скрытых комиссий.",
      popular: "Лучший выбор для большинства пользователей",
      starter: {
        name: "Стартовый",
        unit: "за документ",
        description: "Идеально для малого бизнеса и разработчиков",
        features: {
          pages: "Страниц в месяц",
          accuracy: "Точность на страницу",
          api: "API-запросов в месяц",
          analytics: "Аналитика и отчётность",
        },
        cta: "Начать бесплатный пробный период",
      },
      professional: {
        name: "Профессиональный",
        unit: "за документ",
        description: "Идеально для развивающихся компаний с большим объёмом документов",
        features: {
          pages: "Страниц в месяц",
          accuracy: "Точность на страницу",
          priority: "Приоритетная поддержка",
          analytics: "Аналитика и отчётность",
          training: "Обучение и тонкая настройка",
          sla: "99.9% времени безотказной работы (SLA)",
        },
        cta: "Связаться с отделом продаж",
      },
      enterprise: {
        name: "Корпоративный",
        unit: "за документ",
        description: "Для крупных организаций с особыми требованиями",
        features: {
          unlimited: "Неограниченное количество страниц в месяц",
          deployment: "Гибкие варианты развертывания",
          tuning: "Индивидуальная тонкая настройка модели",
          priority: "Приоритетная поддержка",
          security: "Расширенные меры безопасности",
          integrations: "Интеграция с существующими системами",
          training: "Обучение и тонкая настройка",
        },
        cta: "Связаться с отделом продаж",
      },
      disclaimer: "Все планы включают 14-дневный бесплатный пробный период • Без платы за установку • Отмена в любое время",
    },

    // Footer
    footer: {
      brand: "OCR.AI",
      description: "Преобразуем данные в инсайты с помощью передовых OCR-решений. Локальные дообученные модели для корпоративных нужд с гибкими вариантами развертывания.",
      product: {
        title: "Продукт",
        features: "Функции",
        pricing: "Цены",
        docs: "API Документация",
        status: "Статус",
      },
      company: {
        title: "Компания",
        about: "О нас",
        blog: "Блог",
        careers: "Карьера",
        contact: "Контакты",
      },
      legal: {
        privacy: "Политика конфиденциальности",
        terms: "Условия использования",
        security: "Безопасность",
      },
      copyright: "© 2025 OCR.AI. Все права защищены.",
    },


    // Industry Solutions
    industry: {
      title: "Отраслевые решения",
      subtitle:
        "Индивидуальные OCR AI решения, разработанные для уникальных вызовов и требований соответствия вашей отрасли",
      financial: "Финансовые услуги",
      government: "Правительство и пограничный контроль",
      travel: "Путешествия и гостеприимство",
      healthcare: "Здравоохранение",
      logistics: "Логистика и цепочка поставок",
      insurance: "Страхование",
      learnMore: "Узнать больше",
      dontSeeIndustry: "Не видите свою отрасль?",
      wevGotYouCovered: "Мы вас покрыли.",
      flexiblePlatform:
        "Наша гибкая OCR AI платформа адаптируется к уникальным потребностям обработки документов любой отрасли. Давайте обсудим ваши конкретные требования.",
      discussNeeds: "Обсудить ваши потребности",
      viewAllUseCases: "Посмотреть все случаи использования",
    },

    // ROI Metrics
    roi: {
      title: "Измеримое воздействие за недели, а не месяцы",
      titleHighlight: "roi.titleHighlight", // Fixed missing key
      subtitle:
        "Присоединяйтесь к тысячам организаций, которые трансформировали обработку документов с проверенными результатами",
      accuracyRate: "Уровень точности",
      accuracyDesc: "Готовая к использованию точность для обработки документов",
      fasterProcessing: "Более быстрая обработка",
      fasterDesc: "Сократите время обработки документов с часов до минут",
      roiIncrease: "Увеличение ROI",
      roiDesc: "Средняя окупаемость инвестиций в течение 6 месяцев",
      effortReduction: "Сокращение усилий",
      effortDesc: "Уменьшение задач ручного ввода данных и обработки",
      readyToSeeResults: "Готовы увидеть эти результаты для вашего бизнеса?",
      personalizedRoi: "Получите персонализированный расчет ROI на основе объема ваших документов и текущих процессов.",
      calculateRoi: "Рассчитать ваш ROI",
      scheduleDemo: "Запланировать демо",
    },

    // Industries
    industries: {
      title: "Отраслевые решения",
      titleHighlight: "С учетом вашей сферы",
      subtitle: "Специализированные OCR-решения для отраслевых задач",
      learnMore: "Узнать больше",
      financial: {
        title: "Финансовые услуги",
        description: "Обрабатывайте кредитные заявки, документы KYC и финансовые отчеты с высокой точностью",
        features: {
          identity: "идентификация",
          authentication: "аутентификация",
          compliance: "соответствие",
          risk: "риск",
        }
      },
      government: {
        title: "Государство и пограничный контроль",
        description: "Безопасная проверка личности и обработка документов для государственных органов",
        features: {
          passport: "паспорт",
          visa: "виза",
          security: "безопасность",
          forensic: "криминалистика",
        },
      },
      travel: {
        title: "Путешествия и гостиничный бизнес",
        description: "Упрощайте регистрацию и проверку личности для безупречного клиентского опыта",
        features: {
          checkin: "регистрация",
          age: "возраст",
          validation: "валидация",
          registration: "учет",
        }
      },
      healthcare: {
        title: "Здравоохранение",
        description: "Оцифровка медицинских карт и страховых случаев с соблюдением HIPAA",
        features: {
          patient: "пациент",
          insurance: "страхование",
          medical: "медицинский",
          hipaa: "HIPAA",
        }
      },
      logistics: {
        title: "Логистика и цепочка поставок",
        description: "Автоматизируйте обработку транспортных документов и управление запасами",
        features: {
          lading: "коносамент",
          invoice: "счет-фактура",
          customs: "таможня",
          delivery: "доставка",
        }
      },
      insurance: {
        title: "Страхование",
        description: "Ускоряйте обработку страховых случаев и управление полисами с помощью интеллектуального извлечения документов",
        features: {
          claims: "заявки",
          policy: "полис",
          damage: "ущерб",
          fraud: "мошенничество",
        }
      },
    },

    // CTA
    cta: {
      title: "Готовы преобразовать обработку ваших документов?",
      description: "Откройте возможности интеллектуальной обработки документов с решением, созданным специально для вашего бизнеса.",
      question: "Не видите свою отрасль?",
      answer: "У нас есть индивидуальные решения для вас.",
      discuss: "Давайте обсудим ваши требования.",
      viewAll: "Посмотреть все варианты использования",
    },
  },

  uz: {
    // Navigation
    nav: {
      features: "Imkoniyatlar",
      deployment: "Joylashtirish",
      pricing: "Narxlar",
      documentation: "Hujjatlar",
      signIn: "Kirish",
      getStarted: "Boshlash",
    },

    // Header
    solutions: "Yechimlar",
    // pricing: "Narxlar",
    documentation: "Hujjatlar",
    contact: "Aloqa",
    getStarted: "Boshlash",

    // Hero Section
    aiPoweredOcr: "AI asosidagi OCR texnologiyasi",
    transformingData: "Ma'lumotlarni",
    intoInsight: "tahlilga",
    withAdvancedOcr: "ilg'or OCR bilan aylantirish",
    heroDescription:
      "Korxonangiz ehtiyojlariga moslashtirilgan mahalliy sozlangan modellar. Moslashuvchan joylashtirish variantlari bilan ilg'or OCR API orqali ilovalaringizni kuchaytiring: On-Premises yoki SaaS.",
    exploreSolutions: "Yechimlarni o'rganish",
    watchDemo: "Demo ko'rish",
    liveProcessing: "Jonli ishlov berish",
    idDocument: "Shaxsni tasdiqlovchi hujjat",
    faceDetection: "Yuz aniqlash",
    documentOcr: "Hujjat OCR",
    active: "Faol",
    realTime: "Real vaqt",
    idCards: "ID kartalar",
    faceAi: "Face AI",
    documents: "Hujjatlar",

    // Features
    features: "Imkoniyatlar",
    featuresTitle: "Kuchli OCR imkoniyatlari",
    featuresSubtitle:
      "Korxona darajasidagi hujjatlarni qayta ishlash uchun mo'ljallangan ilg'or AI asosidagi xususiyatlar",
    aiPoweredRecognition: "AI asosidagi tanib olish",
    aiPoweredRecognitionDesc:
      "Turli xil hujjat turlarida o'qitilgan ilg'or neyron tarmoqlari yuqori aniqlik va kontekstni tushunish uchun.",
    lightningFastProcessing: "Chaqmoq tezligida ishlov berish",
    lightningFastProcessingDesc:
      "Optimallashtirilgan xulosa quvuri va parallel ishlov berish bilan daqiqada minglab hujjatlarni qayta ishlang.",
    enterpriseSecurity: "Korxona xavfsizligi",
    enterpriseSecurityDesc:
      "Bank darajasidagi shifrlash, SOC 2 muvofiqlik va maksimal ma'lumotlar himoyasi uchun o'z serverlarida joylashtirish variantlari.",
    multiLanguageSupport: "Ko'p tillarni qo'llab-quvvatlash",
    multiLanguageSupportDesc:
      "Mintaqaviy hujjat formatlari va qo'lyozma uslublari uchun maxsus modellar bilan 100+ tillarni qo'llab-quvvatlash.",
    customFineTuning: "Maxsus sozlash",
    customFineTuningDesc:
      "O'zingizning aniq hujjat turlari va formatlaringizda modellarni o'qiting, foydalanish holatlaringizda sohada yetakchi aniqlik uchun.",
    advancedAnalytics: "Ilg'or tahlillar",
    advancedAnalyticsDesc:
      "Batafsil hisobot bilan ishlov berish samaradorligi, aniqlik ko'rsatkichlari va foydalanish naqshlariga keng qamrovli tushunchalar.",
    powerfulFeaturesTitle: "Zamonaviy korxonalar uchun kuchli imkoniyatlar",
    powerfulFeaturesSubtitle:
      "Korxona miqyosidagi operatsiyalar uchun mo'ljallangan ishonchli va xavfsiz OCR yechimlari bilan AI kuchidan foydalaning.",

    // Deployment Options
    deployment: {
      title: "Moslashuvchan joriy etish variantlari",
      subtitle: "Xavfsizlik talablari va infratuzilma ehtiyojlaringizga eng mos keladigan joriy etish modelini tanlang.",
      titleHighlight: "tariflari",
      saasDescription: "Bulutli API xizmatimiz bilan darhol ish boshlang. Tezkor rivojlanish va kengaytirish uchun juda qulay.",
      saas: {
        title: "SaaS API xizmati",
        description: "Bulutli API xizmatimiz bilan darhol ish boshlang. Tezkor rivojlanish va kengaytirish uchun juda qulay.",
        uptime: "99.9% ishlash kafolati (SLA) va global CDN",
        scaling: "Avtomatik masshtablash infratuzilmasi",
        pricing: "Foydalanish asosida to‘lov modeli",
        monitoring: "Real vaqt rejimida monitoring va tahlil",
        button: "Bepul sinov davrini boshlash",
      },
      onPrem: {
        title: "Mahalliy serverda joriy etish",
        description: "Maksimal xavfsizlik va nazorat uchun o‘z infratuzilmangizda joriy eting. Qattiq tartibga solinadigan sohalar uchun ideal.",
        sovereignty: "Ma’lumotlar ustidan to‘liq suverenitet",
        custom: "Modelni individual moslashtirish",
        support: "Maxsus qo‘llab-quvvatlash va o‘quv dasturlari",
        airgap: "Aloqadan butunlay ajratilgan (air-gapped) joriy etish imkoniyatlari",
        button: "Savdo bo‘limi bilan bog‘lanish",
      },
    },

    // Technical Specs
    technical: {
      title: "Texnik xususiyatlar",
      subtitle: "Eng zamonaviy sun’iy intellekt texnologiyalari asosida, korporativ darajadagi samaradorlik va ishonchlilik bilan yaratilgan.",
      tabs: {
        performance: "Ishlash samaradorligi",
        accuracy: "Aniqlik",
        integration: "Integratsiya",
      },
      performance: {
        speed:{
          title: "Qayta ishlash tezligi",
          description: "Parallel qayta ishlash orqali daqiqasiga sahifalar soni",
        },
        response:{
          title: "Javob vaqti",
          description: "API’ning dunyo bo‘yicha o‘rtacha javob berish vaqti",
        },
        throughput:{
          title: "O‘tkazuvchanlik",
          description: "Kunlik qayta ishlanadigan hujjatlar soni",
        },
      },
      accuracy: {
        text:{
          title: "Matnni tanib olish",
          description: "Chop etilgan hujjatlarda aniqlik darajasi",
        },
        handwriting:{
          title: "Qo‘lyozma matn",
          description: "Qo‘lda yozilgan matnni aniqlik bilan tanib olish",
        },
        table:{
          title: "Jadvalni ajratib olish",
          description: "Strukturaviy ma’lumotlarni ajratib olish aniqligi",
        },
      },
      integration: {
        supportedFormats: "Qo‘llab-quvvatlanadigan formatlar",
        apiStandards: "API standartlari",
      },
    },

    // Case Studies
    cases: {
      title: "Muvaffaqiyat Sharhlari",
      subtitle: "Yetakchi korxonalar bizning OCR AI yechimlarimiz yordamida hujjatlarni qayta ishlash jarayonlarini qanday o‘zgartirayotganini ko‘ring.",
      keyResults: "Asosiy natijalar",
      financial: {
        company: "Yirik moliyaviy kompaniya",
        challenge: "Moliyaviy hujjatlar va da’volarni tezroq va aniqroq qayta ishlash zarur edi.",
        quote: "OCR AI bizga deyarli mukammal aniqlikka erishish va qayta ishlash xarajatlarini sezilarli darajada kamaytirishga yordam berdi.",
        industry: "Moliyaviy xizmatlar",
        metrics: {
          accuracy: "99.7%", // foizda
          speed: "Yuqori tezlikda hujjatlarni qayta ishlash",
          cost: "Xarajatlarning sezilarli qisqarishi",
        },
        result: "Moliyaviy hujjatlar bilan ishlash samaradorligi va aniqligi yaxshilandi.",
      },  
      healthcare: {
        company: "Global tibbiyot tashkiloti",
        challenge: "Tibbiy yozuvlar va sug‘urta da’volarini raqamlashtirishda qiyinchiliklarga duch kelindi.",
        quote: "OCR AI yordamida biz tibbiy ma’lumotlarni qayta ishlash jarayonini yuqori aniqlik bilan soddalashtirdik.",
        industry: "Sog‘liqni saqlash",
        metrics: {
          accuracy: "97.2%", // foizda
          speed: "Da’vo va yozuvlarni tezlashtirilgan qayta ishlash",
          cost: "Operatsion xarajatlarning kamayishi",
        },
        result: "Tibbiy hujjatlarni ishonchli, talabga mos va samarali qayta ishlash yo‘lga qo‘yildi.",
      },  
      logistics: {
        company: "Xalqaro logistika kompaniyasi",
        challenge: "Yuk hujjatlari va bojxona hujjatlarini avtomatlashtirish zarur edi.",
        quote: "OCR AI bizning ta’minot zanjirimizni asosiy hujjatlarni avtomatlashtirish orqali tubdan o‘zgartirdi.",
        industry: "Logistika va ta’minot zanjiri",
        metrics: {
          accuracy: "98.9%", // foizda
          speed: "Yuk va bojxona hujjatlarini soddalashtirilgan qayta ishlash",
          cost: "Hujjatlarni qayta ishlash xarajatlarining kamayishi",
        },
        result: "Logistika va ta’minot zanjiri jarayonlarida samaradorlik oshirildi.",
      },
      metrics: {
        accuracy: "Aniqlik", // in a percentage
        speed: "Tezlik",
        cost: "Narx",
      },
    },

    // Pricing
    pricing: {
      title: "Oddiy va Shaffof Narxlash",
      subtitle: "O‘z ehtiyojlaringizga mos rejani tanlang. Hech qanday yashirin to‘lovlarsiz istalgan vaqtda kengaytiring yoki qisqartiring.",
      popular: "Eng zo'r tanlov",
      starter: {
        name: "Boshlang‘ich",
        unit: "hujjat uchun",
        description: "Kichik biznes va dasturchilar uchun ideal",
        features: {
          pages: "Oyiga sahifalar soni",
          accuracy: "Har bir sahifadagi aniqlik",
          api: "Oyiga API so‘rovlari",
          analytics: "Analitika va hisobotlar",
        },
        cta: "Bepul sinovdan boshlang",
      },
      professional: {
        name: "Professional",
        unit: "hujjat uchun",
        description: "Ko‘proq hajmdagi hujjatlar bilan ishlaydigan bizneslar uchun ideal",
        features: {
          pages: "Oyiga sahifalar soni",
          accuracy: "Har bir sahifadagi aniqlik",
          priority: "Ustuvor qo‘llab-quvvatlash",
          analytics: "Analitika va hisobotlar",
          training: "O‘qitish va nozik sozlash",
          sla: "99.9% ishlash kafolati (SLA)",
        },
        cta: "Savdo bo‘limi bilan bog‘laning",
      },
      enterprise: {
        name: "Korporativ",
        unit: "hujjat uchun",
        description: "Maxsus talablariga ega yirik tashkilotlar uchun",
        features: {
          unlimited: "Oyiga cheksiz sahifalar",
          deployment: "Moslashuvchan joriy etish imkoniyatlari",
          tuning: "Moslashtirilgan model sozlash",
          priority: "Ustuvor qo‘llab-quvvatlash",
          security: "Kengaytirilgan xavfsizlik choralar",
          integrations: "Mavjud tizimlar bilan integratsiya",
          training: "O‘qitish va nozik sozlash",
        },
        cta: "Savdo bo‘limi bilan bog‘laning",
      },
      disclaimer: "Barcha rejalar 14 kunlik bepul sinovni o‘z ichiga oladi • O‘rnatish uchun qo‘shimcha to‘lov yo‘q • Istalgan vaqtda bekor qilish mumkin",
    },

    // Footer
    footer: {
      brand: "OCR.AI",
      description: "Ma’lumotlarni ilg‘or OCR yechimlari yordamida tahlil va bilimga aylantiramiz. Korporativ ehtiyojlar uchun moslashtirilgan lokal modellar va moslashuvchan joriy etish imkoniyatlari.",
      product: {
        title: "Mahsulot",
        features: "Xususiyatlar",
        pricing: "Narxlash",
        docs: "API Hujjatlari",
        status: "Holat",
      },
      company: {
        title: "Kompaniya",
        about: "Biz haqimizda",
        blog: "Blog",
        careers: "Karyera",
        contact: "Aloqa",
      },
      legal: {
        privacy: "Maxfiylik siyosati",
        terms: "Xizmat ko‘rsatish shartlari",
        security: "Xavfsizlik",
      },
      copyright: "© 2025 OCR.AI. Barcha huquqlar himoyalangan.",
    },


    // Industry Solutions
    industry: {
      title: "Sohaga xos yechimlar",
      subtitle: "Sohangizning noyob qiyinchiliklari va muvofiqlik talablari uchun mo'ljallangan OCR AI yechimlari",
      financial: "Moliyaviy xizmatlar",
      government: "Hukumat va chegara nazorati",
      travel: "Sayohat va mehmondo'stlik",
      healthcare: "Sog'liqni saqlash",
      logistics: "Logistika va ta'minot zanjiri",
      insurance: "Sug'urta",
      learnMore: "Batafsil o'rganish",
      dontSeeIndustry: "Sohangizni ko'rmayapsizmi?",
      wevGotYouCovered: "Biz sizni qamrab oldik.",
      flexiblePlatform:
        "Bizning moslashuvchan OCR AI platformamiz har qanday sohaning noyob hujjatlarni qayta ishlash ehtiyojlariga moslashadi. Keling, maxsus talablaringizni muhokama qilaylik.",
      discussNeeds: "Ehtiyojlaringizni muhokama qilish",
      viewAllUseCases: "Barcha foydalanish holatlarini ko'rish",
    },

    // ROI Metrics
    roi: {
      title: "Oylar emas, haftalar ichida o'lchanadigan ta'sir",
      titleHighlight: "roi.titleHighlight", // Fixed missing key
      subtitle:
        "Isbotlangan natijalar bilan hujjatlarni qayta ishlashni o'zgartirgan minglab tashkilotlarga qo'shiling",
      accuracyRate: "Aniqlik darajasi",
      accuracyDesc: "Hujjatlarni qayta ishlash uchun tayyor aniqlik",
      fasterProcessing: "Tezroq ishlov berish",
      fasterDesc: "Hujjatlarni qayta ishlash vaqtini soatlardan daqiqalargacha qisqartiring",
      roiIncrease: "ROI o'sishi",
      roiDesc: "6 oy ichida o'rtacha investitsiya daromadliligi",
      effortReduction: "Harakat kamayishi",
      effortDesc: "Qo'lda ma'lumot kiritish va qayta ishlash vazifalarining kamayishi",
      readyToSeeResults: "Biznesingiz uchun bu natijalarni ko'rishga tayyormisiz?",
      personalizedRoi: "Hujjat hajmi va joriy jarayonlaringiz asosida shaxsiylashtirilgan ROI hisobini oling.",
      calculateRoi: "ROI ni hisoblash",
      scheduleDemo: "Demo rejalashtirish",
    },

    // Industries
    industries: {
      title: "Sanoat yechimlari",
      titleHighlight: "Sizning sohangiz uchun moslashtirilgan",
      subtitle: "Sohaga xos muammolar uchun maxsus OCR yechimlari",
      learnMore: "Batafsil ma’lumot",
      financial: {
        title: "Moliyaviy xizmatlar",
        description: "Kredit arizalari, KYC hujjatlari va moliyaviy hisobotlarni yuqori aniqlikda qayta ishlang",
        features: {
          identity: "shaxsni aniqlash",
          authentication: "autentifikatsiya",
          compliance: "moslik",
          risk: "xavf",
        }
      },
      government: {
        title: "Davlat va chegara nazorati",
        description: "Davlat idoralari uchun xavfsiz shaxsni tasdiqlash va hujjatlarni qayta ishlash",
        features: {
          passport: "pasport",
          visa: "viza",
          security: "xavfsizlik",
          forensic: "kriminalistika",
        },
      },
      travel: {
        title: "Sayohat va mehmondo‘stlik",
        description: "Ro‘yxatdan o‘tish va shaxsni tasdiqlash jarayonlarini soddalashtirib, mijozlar uchun qulaylik yarating",
        features: {
          checkin: "ro‘yxatdan o‘tish",
          age: "yosh",
          validation: "tasdiqlash",
          registration: "ro‘yxatga olish",
        }
      },
      healthcare: {
        title: "Sog‘liqni saqlash",
        description: "Tibbiy kartalar va sug‘urta da’volarini HIPAA talablari asosida raqamlashtiring",
        features: {
          patient: "bemor",
          insurance: "sug‘urta",
          medical: "tibbiy",
          hipaa: "HIPAA",
        }
      },
      logistics: {
        title: "Logistika va ta’minot zanjiri",
        description: "Yuk hujjatlari va ombor boshqaruvi jarayonlarini avtomatlashtiring",
        features: {
          lading: "konsament",
          invoice: "hisob-faktura",
          customs: "bojxona",
          delivery: "yetkazib berish",
        }
      },
      insurance: {
        title: "Sug‘urta",
        description: "Hujjatlardan aqlli ma’lumot olish orqali da’volarni ko‘rib chiqish va polislarni boshqarishni tezlashtiring",
        features: {
          claims: "da’volar",
          policy: "polis",
          damage: "zarar",
          fraud: "firibgarlik",
        }
      },
    },

    // CTA
    cta: {
      title: "Hujjatlarni qayta ishlash jarayonini o‘zgartirishga tayyormisiz?",
      description: "Aynan biznesingiz uchun yaratilgan aqlli hujjatlarni qayta ishlash yechimlari imkoniyatlarini oching.",
      question: "Sizning sohangizni topmadingizmi?",
      answer: "Bizda siz uchun maxsus yechimlar mavjud.",
      discuss: "Keling, talablaringizni muhokama qilamiz.",
      viewAll: "Barcha qo‘llanilish holatlarini ko‘rish",
    },
  },
}

export type Language = keyof typeof translations
export type TranslationKey =
  | keyof typeof translations.en
  | `nav.${keyof typeof translations.en.nav}`
  | `deployment.${keyof typeof translations.en.deployment}`
  | `technical.${keyof typeof translations.en.technical}`
  | `cases.${keyof typeof translations.en.cases}`
  | `pricing.${keyof typeof translations.en.pricing}`
  | `footer.${keyof typeof translations.en.footer}`
  | `industry.${keyof typeof translations.en.industry}`
  | `roi.${keyof typeof translations.en.roi}`
  | `industries.${keyof typeof translations.en.industries}`
  | `cta.${keyof typeof translations.en.cta}`
