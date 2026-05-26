export type Language = "uz" | "ru";

export type Translations = {
  nav: {
    home: string;
    about: string;
    services: string;
    arbitration: string;
    advantages: string;
    contact: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    description: string;
    cta1: string;
    cta2: string;
    scrollLabel: string;
  };
  about: {
    label: string;
    title: string;
    description1: string;
    description2: string;
    stats: Array<{ number: string; label: string }>;
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    items: Array<{ title: string; description: string }>;
  };
  arbitration: {
    label: string;
    title: string;
    description1: string;
    description2: string;
    cta: string;
    features: Array<{ name: string; subtitle: string }>;
    highlights: string[];
  };
  advantages: {
    label: string;
    title: string;
    subtitle: string;
    items: Array<{ title: string; description: string }>;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      submit: string;
      success: string;
      successSub: string;
    };
    info: {
      phone: { label: string; value: string };
      email: { label: string; value: string };
      address: { label: string; value: string };
      hours: { label: string; value: string };
    };
  };
  footer: {
    description: string;
    rights: string;
    sections: Array<{ heading: string; links: Array<{ label: string; id: string }> }>;
    tagline: string;
  };
};

// ─────────────────────────────────────────────────
//  UZBEK  (default)
// ─────────────────────────────────────────────────
const uz: Translations = {
  nav: {
    home: "Bosh sahifa",
    about: "Kompaniya haqida",
    services: "Xizmatlar",
    arbitration: "Hakamlik sudi",
    advantages: "Afzalliklar",
    contact: "Kontaktlar",
  },

  hero: {
    tagline: "O'zbekiston Respublikasi yuridik firmasi",
    title: "CAPITAL LEGAL MASTERS",
    subtitle: "Biznesingiz uchun ishonchli huquqiy hamkor",
    description:
      "MCHJ «CAPITAL LEGAL MASTERS» — O'zbekiston Respublikasi qonunchiligi asosida tadbirkorlik faoliyatini kompleks yuridik ta'minlashda ixtisoslashgan professional yuridik firma.",
    cta1: "Xizmatlar",
    cta2: "Bog'lanish",
    scrollLabel: "Pastga aylantiring",
  },

  about: {
    label: "Kompaniya haqida",
    title: "Professional yuridik xizmatlar",
    description1:
      "MCHJ «CAPITAL LEGAL MASTERS» — O'zbekiston Respublikasi qonunchiligiga asoslanib, tadbirkorlik faoliyatini yuridik ta'minlash sohasida ixtisoslashgan professional yuridik firma. Firmamiz yuridik shaxslarni tashkil etishdan tortib korporativ boshqaruvgacha bo'lgan barcha bosqichlarda kompleks huquqiy xizmat ko'rsatadi.",
    description2:
      "Kompaniyamiz huzurida O'zbekiston Respublikasining «Hakamlik sudlari to'g'risida»gi Qonunga muvofiq doimiy faoliyat yurituvchi hakamlik sudi tashkil etilgan bo'lib, u tijorat nizolarini sudga murojaat etmasdan tez va samarali hal etish imkonini beradi.",
    stats: [
      { number: "9", label: "Xizmat yo'nalishi" },
      { number: "100%", label: "Maxfiylik kafolati" },
      { number: "1", label: "Doimiy hakamlik sudi" },
    ],
  },

  services: {
    label: "Xizmatlar",
    title: "Kompleks huquqiy yordam",
    subtitle:
      "Biznes faoliyatining barcha yo'nalishlarida professional yuridik xizmat ko'rsatamiz — tashkil etishdan korporativ boshqaruvgacha",
    items: [
      {
        title: "Ro'yxatdan o'tkazish va tugatish",
        description:
          "Yuridik shaxslarni davlat ro'yxatidan o'tkazish, qayta tashkil etish va tugatish jarayonlarida to'liq huquqiy yordam ko'rsatamiz.",
      },
      {
        title: "Xorijiy vakilxonalar akkreditatsiyasi",
        description:
          "Xorijiy kompaniya va tashkilotlarning vakilxonalarini akkreditatsiya qilish uchun zarur hujjatlarni tayyorlash va rasmiylashtirishda yordam.",
      },
      {
        title: "Litsenziya va ruxsatnomalar",
        description:
          "Faoliyat turiga qarab talab etiladigan litsenziya, sertifikat va maxsus ruxsatnomalarni rasmiylashtirishda to'liq yuridik ko'mak.",
      },
      {
        title: "Biznesni yuridik ta'minlash",
        description:
          "Kompaniyangiz joriy faoliyatini qonuniy asosda olib borish uchun doimiy professional yuridik xizmat va operativ maslahat.",
      },
      {
        title: "Tadbirkorlik maslahat xizmatlari",
        description:
          "Joriy tadbirkorlik faoliyatidagi huquqiy muammolar bo'yicha operativ, amaliy va samarali maslahat ko'rsatish.",
      },
      {
        title: "Korporativ hujjatlarni ishlab chiqish",
        description:
          "Nizom, korporativ tartib qoidalar, ichki yo'riqnomalar va boshqaruv hujjatlarini professional tarzda tayyorlash.",
      },
      {
        title: "Shartnomalar tuzish va ekspertizasi",
        description:
          "Shartnomalar, bitimlar va yuridik hujjatlarni tuzish, ko'rib chiqish hamda huquqiy ekspertizasini amalga oshirish.",
      },
      {
        title: "Muzokaralarda vakillik qilish",
        description:
          "Yuridik masalalarni hal etish uchun olib boriladigan muzokaralarda jismoniy va yuridik shaxslar manfaatlarini himoya qilish.",
      },
      {
        title: "Keng qamrovli yuridik maslahat",
        description:
          "Qonun hujjatlarida taqiqlanmagan barcha masalalar bo'yicha individual yuridik maslahat va professional tavsiyalar berish.",
      },
    ],
  },

  arbitration: {
    label: "Hakamlik sudi",
    title: "Kompaniyamiz huzuridagi doimiy hakamlik sudi",
    description1:
      "O'zbekiston Respublikasining «Hakamlik sudlari to'g'risida»gi Qonunga muvofiq, MCHJ «CAPITAL LEGAL MASTERS» huzurida doimiy faoliyat yurituvchi hakamlik sudi tashkil etilgan. Hakamlik sudi tomonlarga tijorat nizolarini davlat sudiga murojaat etmasdan, tez, maxfiy va samarali tarzda hal etish imkonini beradi.",
    description2:
      "Hakamlik sudining raisi lavozimini Xaydarov J.J. egallaydi. Hakamlik jarayoni maxfiy tarzda olib boriladi, qarorlar O'zbekiston Respublikasi qonunchiligiga muvofiq yuridik kuchga ega bo'lib, ijro etilishi majburiydir.",
    cta: "Murojaat qilish",
    features: [
      {
        name: "Qonuniy asos",
        subtitle: "O'zR «Hakamlik sudlari to'g'risida»gi Qonuni",
      },
      {
        name: "Rais — Xaydarov J.J.",
        subtitle: "Tajribali hakam mutaxassis",
      },
      {
        name: "Tezkor nizo hal qilish",
        subtitle: "Davlat sudiga samarali muqobil",
      },
      {
        name: "To'liq maxfiylik",
        subtitle: "Jarayon konfidensial asosda",
      },
    ],
    highlights: [
      "Doimiy faoliyat yurituvchi sud",
      "Qarorlar yuridik kuchga ega",
      "Maxfiy va tezkor jarayon",
    ],
  },

  advantages: {
    label: "Afzalliklar",
    title: "Nima uchun Capital Legal Masters?",
    subtitle:
      "Biz faqat yuridik maslahatchi emas — biznesingizning ishonchli huquqiy hamkori va strategik sherigimiz",
    items: [
      {
        title: "O'zbekiston qonunchiligini chuqur bilish",
        description:
          "O'zbekiston Respublikasi qonunchiligini, sud amaliyotini va tartibga solish muhitini yaxshi biladigan mutaxassislar jamoasi.",
      },
      {
        title: "Individual yondashuv",
        description:
          "Har bir mijozga shaxsiy mutaxassis biriktiriladi va uning holatiga mos individual huquqiy strategiya ishlab chiqiladi.",
      },
      {
        title: "Operativlik va samaradorlik",
        description:
          "Huquqiy masalalarni minimal vaqt va xarajatda tezkor hamda samarali hal etishga yo'naltirilgan professional yondashuv.",
      },
      {
        title: "Maxfiylik kafolati",
        description:
          "Mijoz ma'lumotlarining mutlaq maxfiyligi professional axloq normalari va NDA shartnomasi asosida ta'minlanadi.",
      },
      {
        title: "Xizmatlarning to'liq spektri",
        description:
          "Yuridik shaxs tashkil etishdan korporativ boshqaruv va hakamlik sudiga qadar biznes faoliyatining barcha bosqichlarida yordam.",
      },
      {
        title: "O'z hakamlik sudimiz",
        description:
          "Kompaniyamiz huzuridagi doimiy hakamlik sudi orqali tijorat nizolarini tez, maxfiy va samarali hal etish imkoniyati.",
      },
    ],
  },

  contact: {
    label: "Kontaktlar",
    title: "Biz bilan bog'laning",
    subtitle: "Bepul dastlabki konsultatsiya oling",
    form: {
      name: "Ismingiz",
      email: "Elektron pochta",
      phone: "Telefon raqami",
      subject: "Murojaat mavzusi",
      message: "Xabar",
      submit: "Yuborish",
      success: "Murojaatingiz qabul qilindi",
      successSub:
        "Mutaxassisimiz siz bilan bir ish kuni ichida bog'lanib, konsultatsiya vaqtini belgilaydi.",
    },
    info: {
      phone: { label: "Telefon", value: "+998 90 015 07 81" },
      email: { label: "Elektron pochta", value: "capitallegalmasters@gmail.com" },
      address: {
        label: "Manzil",
        value:
          "Toshkent shahri, Yunusobod tumani,\nMirzo Ulug'bek mahallasi,\nMUlug'bek MFY, Bodomzor yo'li ko'chasi, 1a-uy",
      },
      hours: { label: "Ish vaqti", value: "Du–Ju: 9:00–18:00" },
    },
  },

  footer: {
    description:
      "MCHJ «CAPITAL LEGAL MASTERS» — O'zbekiston Respublikasi qonunchiligi asosida tadbirkorlik faoliyatini kompleks yuridik ta'minlashga ixtisoslashgan professional yuridik firma. Kompaniyamiz huzurida doimiy hakamlik sudi faoliyat yuritadi.",
    rights: "© 2025 MCHJ «CAPITAL LEGAL MASTERS». Barcha huquqlar himoyalangan.",
    sections: [
      {
        heading: "Navigatsiya",
        links: [
          { label: "Bosh sahifa", id: "home" },
          { label: "Kompaniya haqida", id: "about" },
          { label: "Xizmatlar", id: "services" },
          { label: "Hakamlik sudi", id: "arbitration" },
        ],
      },
      {
        heading: "Kompaniya",
        links: [
          { label: "Afzalliklar", id: "advantages" },
          { label: "Kontaktlar", id: "contact" },
        ],
      },
    ],
    tagline: "Biznesingiz uchun ishonchli huquqiy hamkor",
  },
};

// ─────────────────────────────────────────────────
//  RUSSIAN
// ─────────────────────────────────────────────────
const ru: Translations = {
  nav: {
    home: "Главная",
    about: "О компании",
    services: "Услуги",
    arbitration: "Третейский суд",
    advantages: "Преимущества",
    contact: "Контакты",
  },

  hero: {
    tagline: "Юридическая фирма Республики Узбекистан",
    title: "CAPITAL LEGAL MASTERS",
    subtitle: "Надёжный правовой партнёр для вашего бизнеса",
    description:
      "ООО «CAPITAL LEGAL MASTERS» — профессиональная юридическая фирма, специализирующаяся на комплексном юридическом сопровождении предпринимательской деятельности в соответствии с законодательством Республики Узбекистан.",
    cta1: "Услуги",
    cta2: "Связаться",
    scrollLabel: "Прокрутить вниз",
  },

  about: {
    label: "О компании",
    title: "Профессиональные юридические услуги",
    description1:
      "ООО «CAPITAL LEGAL MASTERS» — профессиональная юридическая фирма, осуществляющая деятельность в соответствии с законодательством Республики Узбекистан. Фирма специализируется на комплексном юридическом сопровождении предпринимательской деятельности на всех её этапах — от регистрации юридических лиц до корпоративного управления.",
    description2:
      "При компании в соответствии с Законом Республики Узбекистан «О третейских судах» учреждён постоянно действующий третейский суд, предоставляющий сторонам возможность разрешать коммерческие споры быстро и конфиденциально, без обращения в государственные суды.",
    stats: [
      { number: "9", label: "Направлений услуг" },
      { number: "100%", label: "Гарантия конфиденциальности" },
      { number: "1", label: "Постоянно действующий третейский суд" },
    ],
  },

  services: {
    label: "Услуги",
    title: "Комплексная правовая помощь",
    subtitle:
      "Оказываем профессиональные юридические услуги по всем направлениям деловой деятельности — от учреждения до корпоративного управления",
    items: [
      {
        title: "Регистрация, реорганизация и ликвидация",
        description:
          "Полная правовая помощь при государственной регистрации юридических лиц, их реорганизации и ликвидации на всех этапах.",
      },
      {
        title: "Аккредитация иностранных представительств",
        description:
          "Содействие в аккредитации представительств иностранных компаний и организаций: подготовка документов и их надлежащее оформление.",
      },
      {
        title: "Лицензии и разрешения",
        description:
          "Правовая помощь в получении лицензий, сертификатов и специальных разрешений, необходимых для ведения соответствующего вида деятельности.",
      },
      {
        title: "Юридическое сопровождение бизнеса",
        description:
          "Постоянное профессиональное юридическое обслуживание, обеспечивающее законное ведение текущей деятельности компании.",
      },
      {
        title: "Консультирование по предпринимательству",
        description:
          "Оперативные и практически ориентированные консультации по правовым вопросам текущей предпринимательской деятельности.",
      },
      {
        title: "Разработка корпоративных документов",
        description:
          "Профессиональная подготовка уставов, корпоративных регламентов, внутренних положений и управленческой документации.",
      },
      {
        title: "Составление и экспертиза договоров",
        description:
          "Составление, проверка и правовая экспертиза договоров, соглашений и иных юридических документов.",
      },
      {
        title: "Представительство на переговорах",
        description:
          "Защита интересов физических и юридических лиц при проведении переговоров по правовым вопросам.",
      },
      {
        title: "Юридические консультации",
        description:
          "Индивидуальные юридические консультации и профессиональные рекомендации по вопросам, не запрещённым законодательством.",
      },
    ],
  },

  arbitration: {
    label: "Третейский суд",
    title: "Постоянно действующий третейский суд при нашей компании",
    description1:
      "В соответствии с Законом Республики Узбекистан «О третейских судах» при ООО «CAPITAL LEGAL MASTERS» учреждён постоянно действующий третейский суд. Третейский суд предоставляет сторонам возможность разрешать коммерческие споры без обращения в государственные суды — быстро, конфиденциально и эффективно.",
    description2:
      "Председателем третейского суда является Хайдаров Дж.Дж. Третейское разбирательство осуществляется в конфиденциальном порядке; решения суда имеют юридическую силу в соответствии с законодательством Республики Узбекистан и подлежат обязательному исполнению.",
    cta: "Обратиться",
    features: [
      {
        name: "Правовая основа",
        subtitle: "Закон РУз «О третейских судах»",
      },
      {
        name: "Председатель — Хайдаров Дж.Дж.",
        subtitle: "Опытный третейский судья",
      },
      {
        name: "Оперативное разрешение споров",
        subtitle: "Эффективная альтернатива государственному суду",
      },
      {
        name: "Полная конфиденциальность",
        subtitle: "Разбирательство на конфиденциальной основе",
      },
    ],
    highlights: [
      "Постоянно действующий суд",
      "Решения имеют юридическую силу",
      "Конфиденциальное производство",
    ],
  },

  advantages: {
    label: "Преимущества",
    title: "Почему Capital Legal Masters?",
    subtitle:
      "Мы не просто юридические советники — мы надёжный правовой партнёр и стратегический союзник вашего бизнеса",
    items: [
      {
        title: "Глубокое знание законодательства Узбекистана",
        description:
          "Команда специалистов, досконально знающих законодательство Республики Узбекистан, судебную практику и регуляторную среду.",
      },
      {
        title: "Индивидуальный подход",
        description:
          "Каждому клиенту назначается персональный специалист, разрабатывается индивидуальная правовая стратегия под конкретную ситуацию.",
      },
      {
        title: "Оперативность и эффективность",
        description:
          "Профессиональный подход, ориентированный на быстрое и результативное решение правовых вопросов при минимальных затратах времени и средств.",
      },
      {
        title: "Гарантия конфиденциальности",
        description:
          "Абсолютная конфиденциальность информации клиентов обеспечивается стандартами профессиональной этики и соглашением о неразглашении (NDA).",
      },
      {
        title: "Полный спектр услуг",
        description:
          "Комплексная правовая помощь на всех этапах деловой деятельности — от регистрации юридического лица до корпоративного управления и третейского разбирательства.",
      },
      {
        title: "Собственный третейский суд",
        description:
          "Постоянно действующий третейский суд при нашей компании обеспечивает быстрое, конфиденциальное и эффективное разрешение коммерческих споров.",
      },
    ],
  },

  contact: {
    label: "Контакты",
    title: "Свяжитесь с нами",
    subtitle: "Получите бесплатную первичную консультацию",
    form: {
      name: "Ваше имя",
      email: "Электронная почта",
      phone: "Номер телефона",
      subject: "Тема обращения",
      message: "Сообщение",
      submit: "Отправить",
      success: "Ваше обращение принято",
      successSub:
        "Наш специалист свяжется с вами в течение одного рабочего дня для согласования времени консультации.",
    },
    info: {
      phone: { label: "Телефон", value: "+998 90 015 07 81" },
      email: { label: "Электронная почта", value: "capitallegalmasters@gmail.com" },
      address: {
        label: "Адрес",
        value:
          "г. Ташкент, Юнусабадский р-н,\nмахалля Мирзо Улугбека,\nМФЙ «МУлугбек», ул. Бодомзор йули, д. 1а",
      },
      hours: { label: "Режим работы", value: "Пн–Пт: 9:00–18:00" },
    },
  },

  footer: {
    description:
      "ООО «CAPITAL LEGAL MASTERS» — профессиональная юридическая фирма, специализирующаяся на комплексном юридическом сопровождении предпринимательской деятельности в соответствии с законодательством Республики Узбекистан. При компании действует постоянно действующий третейский суд.",
    rights: "© 2025 ООО «CAPITAL LEGAL MASTERS». Все права защищены.",
    sections: [
      {
        heading: "Навигация",
        links: [
          { label: "Главная", id: "home" },
          { label: "О компании", id: "about" },
          { label: "Услуги", id: "services" },
          { label: "Третейский суд", id: "arbitration" },
        ],
      },
      {
        heading: "Компания",
        links: [
          { label: "Преимущества", id: "advantages" },
          { label: "Контакты", id: "contact" },
        ],
      },
    ],
    tagline: "Надёжный правовой партнёр для вашего бизнеса",
  },
};

export const translations: Record<Language, Translations> = { uz, ru };
