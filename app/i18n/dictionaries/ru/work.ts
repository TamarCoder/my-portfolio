import type { WorkText } from "@/app/i18n/types";

export const work: WorkText = {
  experiences: [
    { role: "Frontend-разработчик", company: "WEGRIDS", period: "Ноя 2025 – н.в.", description: "Единственный frontend-разработчик игрового стартапа: вся frontend-архитектура, UI и запуск функций." },
    { role: "Frontend-разработчик", company: "Novatori", period: "Май 2024 – н.в.", description: "Создаю веб-интерфейсы на React, адаптивные и интерактивные компоненты, интегрирую API и работаю в гибридной команде." },
    { role: "QA-менеджер ПО", company: "Медицинский центр Давида Татишвили", period: "Июл 2019 – н.в.", description: "Руковожу цифровой интеграцией клиники и страховых систем — заменяю бумажные процессы автоматизацией. Админ. время сократилось на ~30%, приём пациентов вырос на 20–25% в день." },
  ],
  skills: { label: "04 / Навыки и путь", title: "Мои навыки и опыт", techStack: "Технологии", journey: "Мой путь" },
  journey: [
    { year: "2019", title: "QA-менеджер ПО", description: "Пришла в медицинский центр Давида Татишвили и руковожу цифровой трансформацией" },
    { year: "2023", title: "Открыла программирование", description: "Начала самостоятельно изучать frontend — HTML, CSS, JavaScript" },
    { year: "2024", title: "Novatori — обучение и стажировка", description: "Прошла профессиональное обучение, затем стала frontend-стажёром и работала с React" },
    { year: "2025", title: "Frontend-разработчик в WEGRIDS", description: "Единственный frontend-разработчик игрового стартапа" },
  ],
  services: {
    label: "03 / Услуги",
    titleStart: "Что я могу",
    titleAccent: "создать",
    titleEnd: "для вас",
    builtWith: "Технологии",
    whereIDidIt: "Где я это делала",
    startProject: "Начать проект",
    items: {
      frontend: { title: "Frontend-разработка", description: "Адаптивные и быстрые веб-интерфейсы на React, Next.js и Angular — удобные на любом устройстве.", stack: ["React", "Next.js", "Angular 21", "TypeScript", "Tailwind CSS"], proof: [{ place: "WeGrids Web", result: "Единственный frontend-разработчик — стриминг, рилсы, турниры" }] },
      mobile: { title: "Мобильная разработка", description: "Приложения для iOS и Android на React Native и Expo — от прототипа до продакшена.", stack: ["React Native", "Expo", "Zustand", "React Query", "Socket.IO"], proof: [{ place: "WeGrids Mobile", result: "Стримы, студия автора, кошелёк — на 3 языках" }] },
      webApps: { title: "Веб-приложения", description: "Полноценные веб-приложения: управление состоянием, данные в реальном времени и интеграция API.", stack: ["TypeScript", "REST API", "Socket.IO", "NestJS", "Electron"], proof: [{ place: "Billo", result: "Приложение для счетов: веб, macOS и Windows" }, { place: "WeGrids Web", result: "Мессенджер и чат в реальном времени на Socket.IO" }] },
      performance: { title: "Оптимизация скорости", description: "Быстрая загрузка, доступность и Core Web Vitals — для пользователей и SEO.", stack: ["SSR", "Code splitting", "Оптимизация изображений", "Lighthouse"], proof: [{ place: "WeGrids Web", result: "Серверный рендеринг на Angular SSR" }] },
      uiux: { title: "Реализация UI/UX", description: "Дизайн превращается в точный интерактивный интерфейс с аккуратной анимацией.", stack: ["Tailwind CSS", "SCSS", "Angular Material", "NativeWind", "CSS-анимация"], proof: [{ place: "WeGrids Mobile", result: "Онбординг, тёмная и светлая темы" }, { place: "Это портфолио", result: "Glass-дизайн, 3D-наклон и макеты устройств" }] },
      automation: { title: "Автоматизация процессов", description: "Ручная и бумажная работа заменяется системами, которые экономят время и снижают ошибки.", stack: ["Анализ процессов", "Интеграция систем", "QA", "Цифровые формы"], proof: [{ place: "Медцентр", result: "~30% меньше админ. времени, на 20–25% больше пациентов в день" }, { place: "Billo", result: "Ежемесячные счета за секунды, а не вручную" }] },
    },
  },
  projects: {
    label: "05 / Избранные проекты",
    previous: "Предыдущий проект",
    next: "Следующий проект",
    liveDemo: "Демо",
    sourceCode: "Исходный код",
    privateCode: "Закрытый код компании",
    screensSoon: "Скриншоты скоро",
    items: {
      wegridsWeb: { category: "Игровая платформа · Веб", description: "Веб-приложение игровой платформы WeGrids для пользователей. Как единственный frontend-разработчик, я отвечаю за всю архитектуру — стриминг игр, короткие рилсы, турниры, рейтинги и монетизацию авторов.", highlights: ["Стриминг и чат", "Рилсы и сторис", "Турниры и сетки", "Мессенджер в реальном времени"] },
      wegridsMobile: { category: "Игровая платформа · iOS и Android", description: "Игровая платформа WeGrids в кармане — стримы, рилсы и сторис, турниры, сквады, студия автора и кошелёк с монетами, на английском, грузинском и русском.", highlights: ["Стримы и подарки", "Студия автора", "Сквады и сообщения", "Кошелёк и выплаты"] },
      billo: { category: "Финансы · Веб и десктоп", description: "Приложение для счетов, которое я сделала, чтобы больше не набирать ежемесячные счета вручную. Отправители, компании-клиенты и шаблоны в одном месте — новый счёт за секунды, история сгруппирована по месяцам. Работает в браузере и как десктоп-приложение для macOS и Windows.", highlights: ["Счета из шаблонов", "История по месяцам", "Приложение для macOS и Windows", "Аккаунты и сброс пароля"] },
    },
  },
};
