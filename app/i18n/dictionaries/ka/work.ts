import type { WorkText } from "@/app/i18n/types";

export const work: WorkText = {
  experiences: [
    { role: "Frontend დეველოპერი", company: "WEGRIDS", period: "ნოე 2025 – დღემდე", description: "გეიმინგ სტარტაპის ერთადერთი frontend დეველოპერი: სრული frontend არქიტექტურა, UI და ფუნქციების მიწოდება." },
    { role: "Frontend დეველოპერი", company: "Novatori", period: "მაი 2024 – დღემდე", description: "ვქმნი ვებ ინტერფეისებს React-ით, ვაწყობ რესპონსივ და ინტერაქტიულ კომპონენტებს, ვაერთებ API-ებს და ვმუშაობ ჰიბრიდულ გუნდში." },
    { role: "Software QA მენეჯერი", company: "დავით ტატიშვილის სამედიცინო ცენტრი", period: "ივლ 2019 – დღემდე", description: "ვხელმძღვანელობ კლინიკისა და სადაზღვევო სისტემების ციფრულ ინტეგრაციას — ქაღალდის პროცესებს ავტომატიზაციით ვცვლი. ადმინ. დრო ~30%-ით შემცირდა, დღიური მიღება 20–25%-ით გაიზარდა." },
  ],
  skills: { label: "04 / უნარები და გზა", title: "ჩემი უნარები და გამოცდილება", techStack: "ტექნოლოგიები", journey: "ჩემი გზა" },
  journey: [
    { year: "2019", title: "Software QA მენეჯერი", description: "შევუერთდი დავით ტატიშვილის სამედიცინო ცენტრს და ციფრულ ტრანსფორმაციას ვუძღვები" },
    { year: "2023", title: "პროგრამირების აღმოჩენა", description: "დამოუკიდებლად დავიწყე frontend-ის სწავლა — HTML, CSS, JavaScript" },
    { year: "2024", title: "Novatori — პროფესიული სწავლება და სტაჟირება", description: "პროფესიული კურსის შემდეგ შევუერთდი frontend სტაჟიორად და React-ით ვმუშაობდი" },
    { year: "2025", title: "Frontend დეველოპერი WEGRIDS-ში", description: "გეიმინგ სტარტაპის ერთადერთი frontend დეველოპერი" },
  ],
  services: {
    label: "03 / სერვისები",
    titleStart: "რას",
    titleAccent: "შევქმნი",
    titleEnd: "შენთვის",
    builtWith: "ტექნოლოგიები",
    whereIDidIt: "სად გავაკეთე",
    startProject: "დავიწყოთ პროექტი",
    items: {
      frontend: { title: "Frontend დეველოპმენტი", description: "რესპონსივ და სწრაფი ვებ ინტერფეისები React-ით, Next.js-ით და Angular-ით — ყველა მოწყობილობაზე.", stack: ["React", "Next.js", "Angular 21", "TypeScript", "Tailwind CSS"], proof: [{ place: "WeGrids Web", result: "ერთადერთი frontend დეველოპერი — სტრიმინგი, რილსები, ტურნირები" }] },
      mobile: { title: "მობაილ დეველოპმენტი", description: "iOS და Android აპები React Native-ით და Expo-თი — პროტოტიპიდან პროდაქშენამდე.", stack: ["React Native", "Expo", "Zustand", "React Query", "Socket.IO"], proof: [{ place: "WeGrids Mobile", result: "ლაივ სტრიმები, კრეატორის სტუდია, საფულე — 3 ენაზე" }] },
      webApps: { title: "ვებ აპლიკაციები", description: "სრული ვებ აპები: state მენეჯმენტი, რეალურ დროში მონაცემები და API ინტეგრაცია.", stack: ["TypeScript", "REST API", "Socket.IO", "NestJS", "Electron"], proof: [{ place: "Billo", result: "ინვოისების აპი ვებისთვის, macOS-ისა და Windows-ისთვის" }, { place: "WeGrids Web", result: "რეალურ დროში მესენჯერი და ლაივ ჩატი Socket.IO-ზე" }] },
      performance: { title: "სიჩქარის ოპტიმიზაცია", description: "უფრო სწრაფი ჩატვირთვა, უკეთესი ხელმისაწვდომობა და Core Web Vitals — მომხმარებლისა და SEO-სთვის.", stack: ["SSR", "Code splitting", "სურათების ოპტიმიზაცია", "Lighthouse"], proof: [{ place: "WeGrids Web", result: "სერვერზე რენდერი Angular SSR-ით" }] },
      uiux: { title: "UI/UX იმპლემენტაცია", description: "დიზაინი გადაქცეული ზუსტ, ინტერაქტიულ ინტერფეისად, ფრთხილი ანიმაციით.", stack: ["Tailwind CSS", "SCSS", "Angular Material", "NativeWind", "CSS ანიმაცია"], proof: [{ place: "WeGrids Mobile", result: "Onboarding, მუქი და ღია თემა" }, { place: "ეს პორტფოლიო", result: "Glass დიზაინი, 3D დახრა და მოწყობილობების მაკეტები" }] },
      automation: { title: "პროცესების ავტომატიზაცია", description: "ხელით და ქაღალდზე შესრულებული სამუშაო ჩანაცვლებულია სისტემით, რომელიც დროს ზოგავს და შეცდომებს ამცირებს.", stack: ["პროცესების ანალიზი", "სისტემების ინტეგრაცია", "QA", "ციფრული ფორმები"], proof: [{ place: "სამედიცინო ცენტრი", result: "~30%-ით ნაკლები ადმინ. დრო, 20–25%-ით მეტი პაციენტი დღეში" }, { place: "Billo", result: "თვიური ინვოისი წამებში, ხელით შევსების ნაცვლად" }] },
    },
  },
  projects: {
    label: "05 / რჩეული პროექტები",
    previous: "წინა პროექტი",
    next: "შემდეგი პროექტი",
    liveDemo: "ლაივ დემო",
    sourceCode: "კოდი",
    privateCode: "კომპანიის დახურული კოდი",
    screensSoon: "სქრინები მალე",
    items: {
      wegridsWeb: { category: "გეიმინგ პლატფორმა · ვები", description: "WeGrids გეიმინგ პლატფორმის ვებ აპი მომხმარებლებისთვის. როგორც ერთადერთი frontend დეველოპერი, მთელ არქიტექტურას ვფლობ — ლაივ სტრიმინგი, მოკლე რილსები, ტურნირები, რეიტინგები და კრეატორების მონეტიზაცია.", highlights: ["ლაივ სტრიმინგი და ჩატი", "რილსები და სთორები", "ტურნირები და ბრეკეტები", "რეალურ დროში მესენჯერი"] },
      wegridsMobile: { category: "გეიმინგ პლატფორმა · iOS და Android", description: "WeGrids გეიმინგ პლატფორმა ჯიბეში — ლაივ სტრიმინგი, რილსები და სთორები, ტურნირები, სქვადები, კრეატორის სტუდია და ქოინების საფულე, ქართულ, ინგლისურ და რუსულ ენებზე.", highlights: ["ლაივ სტრიმები და საჩუქრები", "კრეატორის სტუდია", "სქვადები და მესიჯები", "საფულე და გატანა"] },
      billo: { category: "ფინანსები · ვები და დესკტოპი", description: "ინვოისების აპი, რომელიც შევქმენი, რომ თვიური ინვოისები ხელით აღარ ამეკრიფა. გამომწერები, კლიენტი კომპანიები და შაბლონები ერთ ადგილას — ახალი ინვოისი წამებში იქმნება, ისტორია თვეების მიხედვითაა დალაგებული. მუშაობს ბრაუზერში და დესკტოპ აპად macOS-სა და Windows-ზე.", highlights: ["ინვოისები შაბლონებიდან", "ისტორია თვეების მიხედვით", "macOS და Windows აპი", "ანგარიშები და პაროლის აღდგენა"] },
    },
  },
};
