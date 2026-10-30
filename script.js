/* ==================== ОБЩИЙ ТЕСТ (10 вопросов) ==================== */
const generalQuestions = [
  { text:'Что вам больше нравится в свободное время?', answers:[
    {text:'Разбираться в устройствах и программах', type:'analyst'},
    {text:'Рисовать, писать, придумывать истории', type:'creator'},
    {text:'Общаться с друзьями и помогать им', type:'communicator'},
    {text:'Планировать и организовывать мероприятия', type:'organizer'}]},
  { text:'Какой школьный предмет ближе?', answers:[
    {text:'Информатика и математика', type:'analyst'},
    {text:'Литература и искусство', type:'creator'},
    {text:'Биология и обществознание', type:'communicator'},
    {text:'История и экономика', type:'organizer'}]},
  { text:'Как комфортнее работать?', answers:[
    {text:'В одиночку, погружаясь в задачу', type:'analyst'},
    {text:'Свободно, без жёстких рамок', type:'creator'},
    {text:'В команде, обсуждая идеи', type:'communicator'},
    {text:'Руководя процессом и людьми', type:'organizer'}]},
  { text:'Что важнее в работе?', answers:[
    {text:'Логика и точность', type:'analyst'},
    {text:'Творческая самореализация', type:'creator'},
    {text:'Помощь людям', type:'communicator'},
    {text:'Результат и порядок', type:'organizer'}]},
  { text:'Как решаете сложную задачу?', answers:[
    {text:'Разбиваю на части и анализирую', type:'analyst'},
    {text:'Ищу нестандартный подход', type:'creator'},
    {text:'Советуюсь с другими', type:'communicator'},
    {text:'Составляю план и действую', type:'organizer'}]},
  { text:'Что легче всего даётся?', answers:[
    {text:'Точные науки и логика', type:'analyst'},
    {text:'Творчество и воображение', type:'creator'},
    {text:'Общение и убеждение', type:'communicator'},
    {text:'Организация и контроль', type:'organizer'}]},
  { text:'Какая работа интереснее?', answers:[
    {text:'С данными и технологиями', type:'analyst'},
    {text:'Создание контента и дизайна', type:'creator'},
    {text:'С людьми и пациентами', type:'communicator'},
    {text:'Управление проектами', type:'organizer'}]},
  { text:'Главная цель?', answers:[
    {text:'Найти закономерность и решение', type:'analyst'},
    {text:'Создать что-то новое', type:'creator'},
    {text:'Помочь и поддержать', type:'communicator'},
    {text:'Достичь результата и порядка', type:'organizer'}]},
  { text:'Отношение к риску?', answers:[
    {text:'Просчитываю все варианты', type:'analyst'},
    {text:'Люблю экспериментировать', type:'creator'},
    {text:'Обсудим с командой', type:'communicator'},
    {text:'Решу и поведу за собой', type:'organizer'}]},
  { text:'Что мотивирует?', answers:[
    {text:'Решение сложной задачи', type:'analyst'},
    {text:'Возможность творить', type:'creator'},
    {text:'Благодарность людей', type:'communicator'},
    {text:'Достижение цели', type:'organizer'}]}
];

const generalResults = {
  analyst:{ type:'Аналитик', icon:'🧠', profession:'Аналитик данных / программист',
    conclusion:'Вы любите логику и поиск закономерностей. Подойдут профессии, где нужно анализировать данные.',
    develop:'Математика, программирование, работа с таблицами.',
    steps:'Изучайте Python или Excel, решайте логические задачи.' },
  creator:{ type:'Творец', icon:'🎨', profession:'Дизайнер / контент-мейкер',
    conclusion:'Вы цените творчество. Подойдут профессии, связанные с созданием контента.',
    develop:'Основы дизайна, графические редакторы, креативность.',
    steps:'Сделайте дизайн в Canva или Figma, ведите творческий блог.' },
  communicator:{ type:'Коммуникатор', icon:'🤝', profession:'Врач / педагог / специалист по коммуникациям',
    conclusion:'Вы легко общаетесь и хотите помогать. Подойдут профессии с общением.',
    develop:'Биология, обществознание, публичные выступления.',
    steps:'Участвуйте в волонтёрских проектах, изучайте психологию общения.' },
  organizer:{ type:'Организатор', icon:'📋', profession:'Менеджер проектов / маркетолог',
    conclusion:'Вы умеете планировать и вести за собой. Подойдут управленческие профессии.',
    develop:'Экономика, тайм-менеджмент, лидерство.',
    steps:'Организуйте школьное мероприятие, изучайте менеджмент.' }
};

/* ==================== ТЕСТЫ ПО НАПРАВЛЕНИЯМ (по 10) ==================== */
const directionTests = {
  it:{ title:'Тест: IT', questions:[
    {text:'Что интереснее с компьютером?', answers:[
      {text:'Создавать сайты', prof:'web'},
      {text:'Писать приложения', prof:'mobile'},
      {text:'Защищать данные', prof:'cyber'},
      {text:'Обучать нейросети', prof:'ai'}]},
    {text:'Какая задача увлекательнее?', answers:[
      {text:'Сверстать страницу', prof:'web'},
      {text:'Сделать мобильное приложение', prof:'mobile'},
      {text:'Настроить защиту сервера', prof:'cyber'},
      {text:'Обучить модель', prof:'ai'}]},
    {text:'Что ближе?', answers:[
      {text:'Дизайн сайта', prof:'web'},
      {text:'Логика приложения', prof:'mobile'},
      {text:'Шифрование', prof:'cyber'},
      {text:'Алгоритмы и нейросети', prof:'ai'}]},
    {text:'Любимый предмет?', answers:[
      {text:'Информатика и ИЗО', prof:'web'},
      {text:'Информатика и математика', prof:'mobile'},
      {text:'Информатика и физика', prof:'cyber'},
      {text:'Информатика и статистика', prof:'ai'}]},
    {text:'Первый проект?', answers:[
      {text:'Сайт-портфолио', prof:'web'},
      {text:'Приложение-заметки', prof:'mobile'},
      {text:'Проверка паролей', prof:'cyber'},
      {text:'Распознавание картинок', prof:'ai'}]},
    {text:'Работа ближе?', answers:[
      {text:'Делать сайты удобными', prof:'web'},
      {text:'Создавать приложения', prof:'mobile'},
      {text:'Защищать компании', prof:'cyber'},
      {text:'Разрабатывать алгоритмы', prof:'ai'}]},
    {text:'Что читать интереснее?', answers:[
      {text:'Про вёрстку и CSS', prof:'web'},
      {text:'Про Kotlin и Swift', prof:'mobile'},
      {text:'Про хакеров и защиту', prof:'cyber'},
      {text:'Про машинное обучение', prof:'ai'}]},
    {text:'Сильная сторона?', answers:[
      {text:'Внимание к дизайну', prof:'web'},
      {text:'Логика и алгоритмы', prof:'mobile'},
      {text:'Осторожность', prof:'cyber'},
      {text:'Терпение и математика', prof:'ai'}]},
    {text:'По духу ближе?', answers:[
      {text:'Красиво и удобно', prof:'web'},
      {text:'Быстро и удобно', prof:'mobile'},
      {text:'Безопасно', prof:'cyber'},
      {text:'Умно', prof:'ai'}]},
    {text:'Идеальная работа?', answers:[
      {text:'Веб-студия', prof:'web'},
      {text:'Мобильная разработка', prof:'mobile'},
      {text:'Кибербезопасность', prof:'cyber'},
      {text:'Лаборатория ИИ', prof:'ai'}]}
  ]},

  medicine:{ title:'Тест: Медицина', questions:[
    {text:'Что интереснее в медицине?', answers:[
      {text:'Лечить пациентов', prof:'doctor'},
      {text:'Разбираться в лекарствах', prof:'pharma'},
      {text:'Исследовать организмы', prof:'bio'},
      {text:'Восстанавливать людей', prof:'rehab'}]},
    {text:'Любимый предмет?', answers:[
      {text:'Биология и химия', prof:'doctor'},
      {text:'Химия и математика', prof:'pharma'},
      {text:'Биология и физика', prof:'bio'},
      {text:'Биология и физкультура', prof:'rehab'}]},
    {text:'Что важнее?', answers:[
      {text:'Помогать напрямую', prof:'doctor'},
      {text:'Подбирать лекарства', prof:'pharma'},
      {text:'Искать новое в науке', prof:'bio'},
      {text:'Возвращать подвижность', prof:'rehab'}]},
    {text:'Работа ближе?', answers:[
      {text:'Приём пациентов', prof:'doctor'},
      {text:'Аптека', prof:'pharma'},
      {text:'Лаборатория', prof:'bio'},
      {text:'Реабилитация', prof:'rehab'}]},
    {text:'Что изучать с удовольствием?', answers:[
      {text:'Анатомию', prof:'doctor'},
      {text:'Действие лекарств', prof:'pharma'},
      {text:'Клетки и генетику', prof:'bio'},
      {text:'Мышцы и движения', prof:'rehab'}]},
    {text:'Сильная сторона?', answers:[
      {text:'Эмпатия', prof:'doctor'},
      {text:'Внимательность', prof:'pharma'},
      {text:'Научное мышление', prof:'bio'},
      {text:'Физическая подготовка', prof:'rehab'}]},
    {text:'Что ближе?', answers:[
      {text:'Ставить диагноз', prof:'doctor'},
      {text:'Подбирать дозировку', prof:'pharma'},
      {text:'Проводить опыты', prof:'bio'},
      {text:'Занятия ЛФК', prof:'rehab'}]},
    {text:'Где работать?', answers:[
      {text:'В больнице', prof:'doctor'},
      {text:'В аптеке', prof:'pharma'},
      {text:'В лаборатории', prof:'bio'},
      {text:'В центре реабилитации', prof:'rehab'}]},
    {text:'Что интереснее?', answers:[
      {text:'Лечение болезней', prof:'doctor'},
      {text:'Создание лекарств', prof:'pharma'},
      {text:'Изучение ДНК', prof:'bio'},
      {text:'Восстановление после операций', prof:'rehab'}]},
    {text:'Идеальная работа?', answers:[
      {text:'Поликлиника', prof:'doctor'},
      {text:'Аптека', prof:'pharma'},
      {text:'Научная лаборатория', prof:'bio'},
      {text:'Реабилитационный центр', prof:'rehab'}]}
  ]},

  analytics:{ title:'Тест: Аналитика', questions:[
    {text:'С какими данными интереснее?', answers:[
      {text:'Большие наборы данных', prof:'data'},
      {text:'Финансовые отчёты', prof:'finance'},
      {text:'Научные эксперименты', prof:'science'},
      {text:'Поведение пользователей', prof:'product'}]},
    {text:'Что ближе?', answers:[
      {text:'Искать закономерности', prof:'data'},
      {text:'Оценивать риски', prof:'finance'},
      {text:'Проводить исследования', prof:'science'},
      {text:'Улучшать продукт', prof:'product'}]},
    {text:'Любимый предмет?', answers:[
      {text:'Информатика и математика', prof:'data'},
      {text:'Экономика и математика', prof:'finance'},
      {text:'Физика и математика', prof:'science'},
      {text:'Информатика и обществознание', prof:'product'}]},
    {text:'Что выбрать?', answers:[
      {text:'Анализ таблиц и графиков', prof:'data'},
      {text:'Расчёт бюджета', prof:'finance'},
      {text:'Проведение опытов', prof:'science'},
      {text:'Анализ отзывов', prof:'product'}]},
    {text:'Работа ближе?', answers:[
      {text:'Помогать бизнесу данными', prof:'data'},
      {text:'Строить прогнозы', prof:'finance'},
      {text:'Искать закономерности', prof:'science'},
      {text:'Улучшать интерфейс', prof:'product'}]},
    {text:'Сильная сторона?', answers:[
      {text:'Логика и таблицы', prof:'data'},
      {text:'Внимательность к цифрам', prof:'finance'},
      {text:'Терпение', prof:'science'},
      {text:'Эмпатия и аналитика', prof:'product'}]},
    {text:'Что интереснее?', answers:[
      {text:'Строить дашборды', prof:'data'},
      {text:'Считать прибыль', prof:'finance'},
      {text:'Ставить эксперименты', prof:'science'},
      {text:'Изучать пользователей', prof:'product'}]},
    {text:'Где работать?', answers:[
      {text:'В IT-компании', prof:'data'},
      {text:'В банке', prof:'finance'},
      {text:'В институте', prof:'science'},
      {text:'В продуктовой команде', prof:'product'}]},
    {text:'Что ближе?', answers:[
      {text:'SQL и Python', prof:'data'},
      {text:'Excel и модели', prof:'finance'},
      {text:'Статистика', prof:'science'},
      {text:'Метрики и A/B-тесты', prof:'product'}]},
    {text:'Идеальная работа?', answers:[
      {text:'Аналитик данных', prof:'data'},
      {text:'Финансовый аналитик', prof:'finance'},
      {text:'Научный сотрудник', prof:'science'},
      {text:'Продуктовый аналитик', prof:'product'}]}
  ]},

  marketing:{ title:'Тест: Маркетинг', questions:[
    {text:'Что интереснее?', answers:[
      {text:'Рекламные кампании', prof:'marketer'},
      {text:'Визуальный стиль', prof:'designer'},
      {text:'Соцсети бренда', prof:'smm'},
      {text:'Тексты и сценарии', prof:'copywriter'}]},
    {text:'Что ближе?', answers:[
      {text:'Изучать аудиторию', prof:'marketer'},
      {text:'Рисовать макеты', prof:'designer'},
      {text:'Общаться с подписчиками', prof:'smm'},
      {text:'Придумывать истории', prof:'copywriter'}]},
    {text:'Инструмент интереснее?', answers:[
      {text:'Реклама и продвижение', prof:'marketer'},
      {text:'Figma и редакторы', prof:'designer'},
      {text:'Соцсети и контент', prof:'smm'},
      {text:'Тексты и сценарии', prof:'copywriter'}]},
    {text:'Что выбрать?', answers:[
      {text:'Стратегию продвижения', prof:'marketer'},
      {text:'Нарисовать логотип', prof:'designer'},
      {text:'Снять ролик', prof:'smm'},
      {text:'Написать статью', prof:'copywriter'}]},
    {text:'Работа ближе?', answers:[
      {text:'Изучать спрос', prof:'marketer'},
      {text:'Создавать баннеры', prof:'designer'},
      {text:'Писать посты', prof:'smm'},
      {text:'Писать тексты', prof:'copywriter'}]},
    {text:'Сильная сторона?', answers:[
      {text:'Аналитика и стратегия', prof:'marketer'},
      {text:'Творчество и стиль', prof:'designer'},
      {text:'Общение', prof:'smm'},
      {text:'Слово и слог', prof:'copywriter'}]},
    {text:'Что интереснее?', answers:[
      {text:'Запускать рекламу', prof:'marketer'},
      {text:'Рисовать интерфейсы', prof:'designer'},
      {text:'Вести аккаунт', prof:'smm'},
      {text:'Писать лендинги', prof:'copywriter'}]},
    {text:'Где работать?', answers:[
      {text:'В агентстве', prof:'marketer'},
      {text:'В студии дизайна', prof:'designer'},
      {text:'В SMM-отделе', prof:'smm'},
      {text:'В редакции', prof:'copywriter'}]},
    {text:'Что ближе?', answers:[
      {text:'Метрики и воронки', prof:'marketer'},
      {text:'Цвета и шрифты', prof:'designer'},
      {text:'Тренды и мемы', prof:'smm'},
      {text:'Смыслы и истории', prof:'copywriter'}]},
    {text:'Идеальная работа?', answers:[
      {text:'Маркетолог', prof:'marketer'},
      {text:'Дизайнер', prof:'designer'},
      {text:'SMM-специалист', prof:'smm'},
      {text:'Копирайтер', prof:'copywriter'}]}
  ]},

  engineering:{ title:'Тест: Инженерия', questions:[
    {text:'Что интереснее?', answers:[
      {text:'Собирать и разбирать механизмы', prof:'mechanic'},
      {text:'Роботы и автоматика', prof:'robotics'},
      {text:'Строить здания и мосты', prof:'builder'},
      {text:'Электрика и электроника', prof:'electric'}]},
    {text:'Любимый предмет?', answers:[
      {text:'Физика и труд', prof:'mechanic'},
      {text:'Информатика и физика', prof:'robotics'},
      {text:'Математика и черчение', prof:'builder'},
      {text:'Физика и информатика', prof:'electric'}]},
    {text:'Что ближе?', answers:[
      {text:'Ремонт и настройка техники', prof:'mechanic'},
      {text:'Программирование роботов', prof:'robotics'},
      {text:'Проектирование конструкций', prof:'builder'},
      {text:'Схемы и цепи', prof:'electric'}]},
    {text:'Первый проект?', answers:[
      {text:'Собрать модель двигателя', prof:'mechanic'},
      {text:'Сделать робота', prof:'robotics'},
      {text:'Начертить план дома', prof:'builder'},
      {text:'Собрать радиоприёмник', prof:'electric'}]},
    {text:'Сильная сторона?', answers:[
      {text:'Терпение и точность', prof:'mechanic'},
      {text:'Логика и алгоритмы', prof:'robotics'},
      {text:'Пространственное мышление', prof:'builder'},
      {text:'Внимательность', prof:'electric'}]},
    {text:'Где работать?', answers:[
      {text:'На заводе', prof:'mechanic'},
      {text:'В IT-робототехнике', prof:'robotics'},
      {text:'В строительной фирме', prof:'builder'},
      {text:'В энергокомпании', prof:'electric'}]},
    {text:'Что изучать?', answers:[
      {text:'Механику', prof:'mechanic'},
      {text:'Электронику и код', prof:'robotics'},
      {text:'Сопротивление материалов', prof:'builder'},
      {text:'Электротехнику', prof:'electric'}]},
    {text:'Что интереснее читать?', answers:[
      {text:'Про двигатели', prof:'mechanic'},
      {text:'Про нейросети и роботов', prof:'robotics'},
      {text:'Про архитектуру', prof:'builder'},
      {text:'Про электричество', prof:'electric'}]},
    {text:'Идеальная работа?', answers:[
      {text:'Механик', prof:'mechanic'},
      {text:'Инженер-робототехник', prof:'robotics'},
      {text:'Инженер-строитель', prof:'builder'},
      {text:'Инженер-электроник', prof:'electric'}]},
    {text:'Что вам ближе по духу?', answers:[
      {text:'Чинить и налаживать', prof:'mechanic'},
      {text:'Автоматизировать', prof:'robotics'},
      {text:'Строить', prof:'builder'},
      {text:'Подключать и настраивать', prof:'electric'}]}
  ]},

  education:{ title:'Тест: Образование', questions:[
    {text:'Что интереснее?', answers:[
      {text:'Учить детей', prof:'teacher'},
      {text:'Помогать с выбором профессии', prof:'career'},
      {text:'Работать с особенными детьми', prof:'special'},
      {text:'Обучать взрослых', prof:'trainer'}]},
    {text:'Любимый предмет?', answers:[
      {text:'Русский и литература', prof:'teacher'},
      {text:'Обществознание', prof:'career'},
      {text:'Психология', prof:'special'},
      {text:'Информатика', prof:'trainer'}]},
    {text:'Что ближе?', answers:[
      {text:'Объяснять темы', prof:'teacher'},
      {text:'Проводить консультации', prof:'career'},
      {text:'Поддерживать и развивать', prof:'special'},
      {text:'Проводить тренинги', prof:'trainer'}]},
    {text:'Первый проект?', answers:[
      {text:'Провести урок', prof:'teacher'},
      {text:'Помочь другу выбрать вуз', prof:'career'},
      {text:'Позаниматься с младшим', prof:'special'},
      {text:'Провести мастер-класс', prof:'trainer'}]},
    {text:'Сильная сторона?', answers:[
      {text:'Терпение и речь', prof:'teacher'},
      {text:'Аналитика и эмпатия', prof:'career'},
      {text:'Забота и внимание', prof:'special'},
      {text:'Организованность', prof:'trainer'}]},
    {text:'Где работать?', answers:[
      {text:'В школе', prof:'teacher'},
      {text:'В центре карьеры', prof:'career'},
      {text:'В спецшколе', prof:'special'},
      {text:'В корпорации', prof:'trainer'}]},
    {text:'Что изучать?', answers:[
      {text:'Педагогику', prof:'teacher'},
      {text:'Профориентацию', prof:'career'},
      {text:'Спецпсихологию', prof:'special'},
      {text:'Андрагогику', prof:'trainer'}]},
    {text:'Что интереснее читать?', answers:[
      {text:'Про методики обучения', prof:'teacher'},
      {text:'Про профессии', prof:'career'},
      {text:'Про детскую психологию', prof:'special'},
      {text:'Про бизнес-обучение', prof:'trainer'}]},
    {text:'Идеальная работа?', answers:[
      {text:'Учитель', prof:'teacher'},
      {text:'Профориентолог', prof:'career'},
      {text:'Специальный педагог', prof:'special'},
      {text:'Бизнес-тренер', prof:'trainer'}]},
    {text:'Что ближе по духу?', answers:[
      {text:'Учить', prof:'teacher'},
      {text:'Направлять', prof:'career'},
      {text:'Поддерживать', prof:'special'},
      {text:'Развивать', prof:'trainer'}]}
  ]},

  law:{ title:'Тест: Право', questions:[
    {text:'Что интереснее?', answers:[
      {text:'Защищать людей в суде', prof:'lawyer'},
      {text:'Следить за порядком', prof:'police'},
      {text:'Работать с документами', prof:'notary'},
      {text:'Расследовать преступления', prof:'investigator'}]},
    {text:'Любимый предмет?', answers:[
      {text:'Обществознание и история', prof:'lawyer'},
      {text:'Физкультура и ОБЖ', prof:'police'},
      {text:'Русский и обществознание', prof:'notary'},
      {text:'История и обществознание', prof:'investigator'}]},
    {text:'Что ближе?', answers:[
      {text:'Выступать и убеждать', prof:'lawyer'},
      {text:'Помогать и защищать', prof:'police'},
      {text:'Проверять документы', prof:'notary'},
      {text:'Искать улики', prof:'investigator'}]},
    {text:'Первый проект?', answers:[
      {text:'Участвовать в дебатах', prof:'lawyer'},
      {text:'Помогать в школьном патруле', prof:'police'},
      {text:'Составить договор', prof:'notary'},
      {text:'Разобрать детективную историю', prof:'investigator'}]},
    {text:'Сильная сторона?', answers:[
      {text:'Речь и логика', prof:'lawyer'},
      {text:'Смелость и выдержка', prof:'police'},
      {text:'Внимательность', prof:'notary'},
      {text:'Наблюдательность', prof:'investigator'}]},
    {text:'Где работать?', answers:[
      {text:'В адвокатуре', prof:'lawyer'},
      {text:'В органах', prof:'police'},
      {text:'В нотариате', prof:'notary'},
      {text:'В следствии', prof:'investigator'}]},
    {text:'Что изучать?', answers:[
      {text:'Право', prof:'lawyer'},
      {text:'ОБЖ и физподготовку', prof:'police'},
      {text:'Документоведение', prof:'notary'},
      {text:'Криминалистику', prof:'investigator'}]},
    {text:'Что интереснее читать?', answers:[
      {text:'Судебные дела', prof:'lawyer'},
      {text:'Про службу в органах', prof:'police'},
      {text:'Про законы и документы', prof:'notary'},
      {text:'Детективы', prof:'investigator'}]},
    {text:'Идеальная работа?', answers:[
      {text:'Адвокат', prof:'lawyer'},
      {text:'Полицейский', prof:'police'},
      {text:'Нотариус', prof:'notary'},
      {text:'Следователь', prof:'investigator'}]},
    {text:'Что ближе по духу?', answers:[
      {text:'Справедливость', prof:'lawyer'},
      {text:'Порядок', prof:'police'},
      {text:'Точность', prof:'notary'},
      {text:'Истина', prof:'investigator'}]}
  ]},

  design:{ title:'Тест: Дизайн и медиа', questions:[
    {text:'Что интереснее?', answers:[
      {text:'Рисовать и делать макеты', prof:'designer'},
      {text:'Снимать видео', prof:'videographer'},
      {text:'Писать статьи', prof:'journalist'},
      {text:'Монтировать и обрабатывать', prof:'editor'}]},
    {text:'Любимый предмет?', answers:[
      {text:'ИЗО и информатика', prof:'designer'},
      {text:'Литература и МХК', prof:'videographer'},
      {text:'Литература и русский', prof:'journalist'},
      {text:'Информатика', prof:'editor'}]},
    {text:'Что ближе?', answers:[
      {text:'Создавать визуал', prof:'designer'},
      {text:'Снимать кадры', prof:'videographer'},
      {text:'Искать факты', prof:'journalist'},
      {text:'Собирать материал', prof:'editor'}]},
    {text:'Первый проект?', answers:[
      {text:'Логотип для класса', prof:'designer'},
      {text:'Клип для школы', prof:'videographer'},
      {text:'Статья в газету', prof:'journalist'},
      {text:'Монтаж видео', prof:'editor'}]},
    {text:'Сильная сторона?', answers:[
      {text:'Творчество и вкус', prof:'designer'},
      {text:'Видение кадра', prof:'videographer'},
      {text:'Слог и логика', prof:'journalist'},
      {text:'Внимательность', prof:'editor'}]},
    {text:'Где работать?', answers:[
      {text:'В студии дизайна', prof:'designer'},
      {text:'На телевидении', prof:'videographer'},
      {text:'В редакции', prof:'journalist'},
      {text:'В продакшене', prof:'editor'}]},
    {text:'Что изучать?', answers:[
      {text:'Figma и Photoshop', prof:'designer'},
      {text:'Видеосъёмку', prof:'videographer'},
      {text:'Журналистику', prof:'journalist'},
      {text:'Монтаж и цветокоррекцию', prof:'editor'}]},
    {text:'Что интереснее читать?', answers:[
      {text:'Про дизайн', prof:'designer'},
      {text:'Про кино', prof:'videographer'},
      {text:'Про медиа', prof:'journalist'},
      {text:'Про технику монтажа', prof:'editor'}]},
    {text:'Идеальная работа?', answers:[
      {text:'Дизайнер', prof:'designer'},
      {text:'Видеограф', prof:'videographer'},
      {text:'Журналист', prof:'journalist'},
      {text:'Видеомонтажёр', prof:'editor'}]},
    {text:'Что ближе по духу?', answers:[
      {text:'Красота', prof:'designer'},
      {text:'Движение', prof:'videographer'},
      {text:'Правда', prof:'journalist'},
      {text:'Точность', prof:'editor'}]}
  ]}
};

/* ==================== ПРОФЕССИИ (32) ==================== */
const professions = {
  web:{icon:'💻',title:'Веб-разработчик',direction:'it',desc:'Создаёт сайты и веб-приложения.',skills:'HTML, CSS, JavaScript, логика',subjects:'Информатика, математика, английский'},
  mobile:{icon:'📱',title:'Мобильный разработчик',direction:'it',desc:'Разрабатывает приложения для смартфонов.',skills:'Kotlin/Swift, UI/UX, алгоритмы',subjects:'Информатика, математика'},
  cyber:{icon:'🛡️',title:'Специалист по кибербезопасности',direction:'it',desc:'Защищает данные от взломов.',skills:'Сети, криптография, Linux',subjects:'Информатика, математика, физика'},
  ai:{icon:'🤖',title:'ML-инженер',direction:'it',desc:'Обучает нейросети и создаёт умные алгоритмы.',skills:'Python, математика, ML',subjects:'Информатика, математика, статистика'},

  doctor:{icon:'🩺',title:'Врач',direction:'medicine',desc:'Диагностирует и лечит пациентов.',skills:'Биология, химия, эмпатия',subjects:'Биология, химия, русский'},
  pharma:{icon:'💊',title:'Фармацевт',direction:'medicine',desc:'Работает с лекарствами и консультирует.',skills:'Химия, биология, точность',subjects:'Химия, биология'},
  bio:{icon:'🧬',title:'Биотехнолог',direction:'medicine',desc:'Исследует живые системы и создаёт лекарства.',skills:'Биология, химия, наука',subjects:'Биология, химия, математика'},
  rehab:{icon:'🏋️',title:'Реабилитолог',direction:'medicine',desc:'Помогает восстанавливаться после травм.',skills:'Анатомия, ЛФК, терпение',subjects:'Биология, физкультура'},

  data:{icon:'📊',title:'Аналитик данных',direction:'analytics',desc:'Анализирует данные и помогает решениям.',skills:'SQL, Python, статистика',subjects:'Математика, информатика, экономика'},
  finance:{icon:'📈',title:'Финансовый аналитик',direction:'analytics',desc:'Оценивает риски и строит прогнозы.',skills:'Экономика, математика, Excel',subjects:'Математика, экономика, обществознание'},
  science:{icon:'🔬',title:'Научный исследователь',direction:'analytics',desc:'Проводит исследования и ищет закономерности.',skills:'Логика, терпение, статистика',subjects:'Математика, физика, информатика'},
  product:{icon:'🧩',title:'Продуктовый аналитик',direction:'analytics',desc:'Улучшает продукт по метрикам.',skills:'Метрики, A/B-тесты, эмпатия',subjects:'Информатика, обществознание'},

  marketer:{icon:'📣',title:'Маркетолог',direction:'marketing',desc:'Продвигает продукты и идеи.',skills:'Стратегия, аналитика, реклама',subjects:'Обществознание, экономика, русский'},
  designer:{icon:'🎨',title:'Дизайнер',direction:'marketing',desc:'Создаёт визуальный стиль брендов.',skills:'Figma, композиция, цвет',subjects:'ИЗО, информатика, литература'},
  smm:{icon:'📲',title:'SMM-специалист',direction:'marketing',desc:'Ведёт соцсети брендов.',skills:'Контент, общение, тренды',subjects:'Обществознание, русский, информатика'},
  copywriter:{icon:'✍️',title:'Копирайтер',direction:'marketing',desc:'Пишет тексты и сценарии.',skills:'Слог, сторителлинг, редактура',subjects:'Русский, литература, обществознание'},

  mechanic:{icon:'🔧',title:'Механик',direction:'engineering',desc:'Ремонтирует и обслуживает технику и механизмы.',skills:'Механика, терпение, точность',subjects:'Физика, труд, математика'},
  robotics:{icon:'🤖',title:'Инженер-робототехник',direction:'engineering',desc:'Проектирует и программирует роботов.',skills:'Электроника, программирование, логика',subjects:'Информатика, физика, математика'},
  builder:{icon:'🏗️',title:'Инженер-строитель',direction:'engineering',desc:'Проектирует здания и сооружения.',skills:'Черчение, математика, пространственное мышление',subjects:'Математика, физика, черчение'},
  electric:{icon:'⚡',title:'Инженер-электроник',direction:'engineering',desc:'Работает с электрикой и электронными системами.',skills:'Физика, электротехника, внимательность',subjects:'Физика, информатика, математика'},

  teacher:{icon:'👩‍🏫',title:'Учитель',direction:'education',desc:'Обучает детей и помогает им развиваться.',skills:'Педагогика, речь, терпение',subjects:'Русский, литература, обществознание'},
  career:{icon:'🧭',title:'Профориентолог',direction:'education',desc:'Помогает людям выбрать профессию.',skills:'Психология, эмпатия, аналитика',subjects:'Обществознание, психология'},
  special:{icon:'🧸',title:'Специальный педагог',direction:'education',desc:'Работает с детьми с особыми потребностями.',skills:'Психология, забота, терпение',subjects:'Психология, биология'},
  trainer:{icon:'🎓',title:'Бизнес-тренер',direction:'education',desc:'Обучает взрослых и проводит тренинги.',skills:'Организованность, речь, харизма',subjects:'Обществознание, информатика'},

  lawyer:{icon:'⚖️',title:'Адвокат',direction:'law',desc:'Защищает права людей в суде.',skills:'Право, речь, логика',subjects:'Обществознание, история'},
  police:{icon:'👮',title:'Полицейский',direction:'law',desc:'Следит за порядком и защищает людей.',skills:'Выдержка, физподготовка, ответственность',subjects:'ОБЖ, физкультура, обществознание'},
  notary:{icon:'📜',title:'Нотариус',direction:'law',desc:'Работает с документами и договорами.',skills:'Внимательность, право, точность',subjects:'Обществознание, русский'},
  investigator:{icon:'🔎',title:'Следователь',direction:'law',desc:'Расследует преступления и ищет истину.',skills:'Наблюдательность, логика, выдержка',subjects:'Обществознание, история'},

  videographer:{icon:'🎥',title:'Видеограф',direction:'design',desc:'Снимает и создаёт видеоконтент.',skills:'Видение кадра, техника, креатив',subjects:'МХК, информатика, литература'},
  journalist:{icon:'📰',title:'Журналист',direction:'design',desc:'Пишет статьи и ищет факты.',skills:'Слог, логика, любознательность',subjects:'Литература, русский, обществознание'},
  editor:{icon:'🎞️',title:'Видеомонтажёр',direction:'design',desc:'Монтирует и обрабатывает видео.',skills:'Монтаж, цветокоррекция, внимание',subjects:'Информатика, МХК'}
};

/* ==================== СОСТОЯНИЕ ==================== */
let mode = 'general';
let currentQuestion = 0;
let scores = {};
let lastResult = null;

/* ==================== НАВИГАЦИЯ ==================== */
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

function showSection(id){
  sections.forEach(s => s.classList.toggle('visible', s.id === id));
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
  window.scrollTo({top:0, behavior:'smooth'});
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showSection(link.getAttribute('href').slice(1));
  });
});

/* ==================== ТЕМА ==================== */
const themeBtn = document.getElementById('themeToggle');
function applyTheme(light){
  document.body.classList.toggle('light', light);
  themeBtn.textContent = light ? '☀️' : '🌙';
  localStorage.setItem('theme', light ? 'light' : 'dark');
}
themeBtn.addEventListener('click', () => applyTheme(!document.body.classList.contains('light')));
applyTheme(localStorage.getItem('theme') === 'light');

/* ==================== ЭЛЕМЕНТЫ ТЕСТА ==================== */
const testStart = document.getElementById('testStart');
const quizBox = document.getElementById('quizBox');
const resultBox = document.getElementById('resultBox');
const qCounter = document.getElementById('qCounter');
const qPercent = document.getElementById('qPercent');
const progressFill = document.getElementById('progressFill');
const questionText = document.getElementById('questionText');
const answersBox = document.getElementById('answersBox');

/* ==================== ЛОГИКА ТЕСТА ==================== */
function getQuestions(){
  return mode === 'general' ? generalQuestions : directionTests[mode].questions;
}

function startQuiz(newMode){
  mode = newMode;
  currentQuestion = 0;
  lastResult = null;

  if (mode === 'general'){
    scores = { analyst:0, creator:0, communicator:0, organizer:0 };
  } else {
    scores = {};
    directionTests[mode].questions.forEach(q =>
      q.answers.forEach(a => { scores[a.prof] = 0; }));
  }

  testStart.classList.add('hidden');
  resultBox.classList.add('hidden');
  quizBox.classList.remove('hidden');
  renderQuestion();
  window.scrollTo({top:0, behavior:'smooth'});
}

function renderQuestion(){
  const list = getQuestions();
  const q = list[currentQuestion];
  const title = mode === 'general' ? 'Общий тест' : directionTests[mode].title;
  qCounter.textContent = `${title} — вопрос ${currentQuestion + 1} из ${list.length}`;
  const percent = Math.round((currentQuestion / list.length) * 100);
  qPercent.textContent = percent + '%';
  progressFill.style.width = percent + '%';
  questionText.textContent = q.text;
  answersBox.innerHTML = '';

  q.answers.forEach(ans => {
    const btn = document.createElement('button');
    btn.className = 'answer-card';
    btn.type = 'button';
    btn.textContent = ans.text;
    btn.addEventListener('click', () => selectAnswer(ans));
    answersBox.appendChild(btn);
  });
}

function selectAnswer(ans){
  const key = mode === 'general' ? ans.type : ans.prof;
  scores[key]++;
  currentQuestion++;

  if (currentQuestion < getQuestions().length){
    renderQuestion();
  } else {
    progressFill.style.width = '100%';
    qPercent.textContent = '100%';
    showResult();
  }
}

function showResult(){
  let winnerKey, percent, data;
  let max = -1;
  for (const k in scores) if (scores[k] > max){ max = scores[k]; winnerKey = k; }

  if (mode === 'general'){
    percent = Math.round((scores[winnerKey] / generalQuestions.length) * 100);
    data = generalResults[winnerKey];
    lastResult = { type:data.type, profession:data.profession, percent,
      conclusion:data.conclusion, develop:data.develop, steps:data.steps };
    document.getElementById('resultType').textContent = 'Ваш тип: ' + data.type;
    document.getElementById('resultIcon').textContent = data.icon;
  } else {
    percent = Math.round((scores[winnerKey] / getQuestions().length) * 100);
    data = professions[winnerKey];
    lastResult = { type:data.title, profession:data.title, percent,
      conclusion:'Вы набрали больше всего баллов в этой профессии — она вам подходит.',
      develop:data.skills,
      steps:'Изучите предметы: ' + data.subjects + '. Начните с небольших проектов.' };
    document.getElementById('resultType').textContent = 'Подходящая профессия: ' + data.title;
    document.getElementById('resultIcon').textContent = data.icon;
  }

  document.getElementById('resultProfession').textContent = 'Профессия: ' + lastResult.profession;
  document.getElementById('resultPercent').textContent = percent + '%';
  document.getElementById('resultConclusion').textContent = lastResult.conclusion;
  document.getElementById('resultDevelop').textContent = lastResult.develop;
  document.getElementById('resultSteps').textContent = lastResult.steps;

  const resultFill = document.getElementById('resultFill');
  resultFill.style.width = '0%';
  setTimeout(() => { resultFill.style.width = percent + '%'; }, 100);

  quizBox.classList.add('hidden');
  resultBox.classList.remove('hidden');
}

function restartQuiz(){ startQuiz(mode); }

function backToStart(){
  resultBox.classList.add('hidden');
  quizBox.classList.add('hidden');
  testStart.classList.remove('hidden');
  window.scrollTo({top:0, behavior:'smooth'});
}

/* ==================== КНОПКИ ЗАПУСКА ТЕСТОВ ==================== */
document.getElementById('startTestBtn').addEventListener('click', () => {
  showSection('test');
  backToStart();
});

/* Карточки направлений на главной */
document.querySelectorAll('.direction-card').forEach(card => {
  card.addEventListener('click', () => {
    showSection('test');
    startQuiz(card.dataset.direction);
  });
});

/* Кнопки выбора теста на стартовом экране */
document.querySelectorAll('.test-choice').forEach(btn => {
  btn.addEventListener('click', () => startQuiz(btn.dataset.mode));
});

document.getElementById('restartBtn').addEventListener('click', restartQuiz);
document.getElementById('backToStartBtn').addEventListener('click', backToStart);

/* ==================== ГРАМОТА PDF (скачивание файлом) ==================== */
document.getElementById('shareBtn').addEventListener('click', () => {
  if (!lastResult){ alert('Сначала пройдите тест.'); return; }

  if (typeof html2pdf === 'undefined'){
    alert('Библиотека PDF не загрузилась. Проверьте интернет и обновите страницу.');
    return;
  }

  const name = (document.getElementById('userName').value || 'Участник проекта').trim();
  const today = new Date().toLocaleDateString('ru-RU');
  const btn = document.getElementById('shareBtn');
  const oldText = btn.textContent;
  btn.textContent = 'Готовим грамоту…';
  btn.disabled = true;

  // Создаем контейнер для грамоты
  const cert = document.createElement('div');
  cert.style.position = 'fixed';
  cert.style.left = '0'; // Ставим в 0, но скрываем через z-index и opacity
  cert.style.top = '0';
  cert.style.zIndex = '-9999';
  cert.style.opacity = '0';
  cert.style.pointerEvents = 'none';
  cert.style.width = '794px';  // A4 при 96 dpi
  cert.style.height = '1123px';
  cert.style.background = '#ffffff';
  cert.style.fontFamily = '"Times New Roman", Times, serif';
  cert.style.padding = '40px';
  cert.style.boxSizing = 'border-box';
  cert.style.color = '#000000';

  // Используем простую верстку (без flex), чтобы html2canvas её точно прочитал
  cert.innerHTML = `
    <div style="border: 6px solid #312e81; height: 100%; padding: 15px; box-sizing: border-box; text-align: center;">
      <div style="border: 2px solid #a78bfa; height: 100%; padding: 40px 30px; box-sizing: border-box;">
        
        <div style="font-size: 16px; color: #6a5cff; letter-spacing: 4px; font-weight: bold; text-transform: uppercase; margin-bottom: 10px;">
          🏅 Официальный документ 🏅
        </div>
        
        <h1 style="font-size: 56px; color: #312e81; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 2px;">
          Грамота
        </h1>
        
        <p style="font-size: 20px; color: #64748b; margin-bottom: 40px; font-style: italic;">
          настоящим подтверждается, что
        </p>
        
        <h2 style="font-size: 44px; color: #000000; border-bottom: 3px solid #a78bfa; padding-bottom: 10px; margin: 0 auto 30px auto; width: 80%;">
          ${name}
        </h2>
        
        <p style="font-size: 18px; color: #64748b; margin-bottom: 20px;">
          успешно прошёл(ла) профориентационный тест и показал(а) отличные результаты
        </p>
        
        <div style="background: #f0f0ff; border: 1px solid #c7d2fe; padding: 25px; margin: 0 auto 30px auto; width: 75%;">
          <div style="font-size: 16px; color: #6a5cff; margin-bottom: 10px;">Рекомендованное направление:</div>
          <div style="font-size: 32px; font-weight: bold; color: #312e81; margin-bottom: 10px;">
            ${lastResult.profession}
          </div>
          <div style="font-size: 18px; color: #334155;">
            Совпадение: <b>${lastResult.percent}%</b>
          </div>
        </div>

        <div style="font-size: 16px; line-height: 1.5; color: #333333; margin: 0 auto 30px auto; width: 85%; text-align: left;">
          <b>Наставление:</b> ${lastResult.develop}
        </div>

        <table style="width: 100%; margin-top: 40px; border-collapse: collapse;">
          <tr>
            <td style="text-align: left; width: 33%; vertical-align: bottom;">
              <div style="font-size: 14px; color: #64748b;">Дата выдачи:</div>
              <div style="font-size: 18px; font-weight: bold;">${today}</div>
            </td>
            <td style="text-align: center; width: 33%; vertical-align: bottom;">
              <div style="font-size: 40px; color: #a78bfa;">✨</div>
            </td>
            <td style="text-align: right; width: 33%; vertical-align: bottom;">
              <div style="font-size: 14px; color: #64748b;">Проект:</div>
              <div style="font-size: 18px; font-weight: bold;">Моя будущая профессия</div>
            </td>
          </tr>
        </table>

      </div>
    </div>
  `;

  document.body.appendChild(cert);

  html2pdf().set({
    margin: 0,
    filename: `Грамота_${name.replace(/\s+/g, '_')}.pdf`,
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }).from(cert).save().then(() => {
    document.body.removeChild(cert);
    btn.textContent = oldText;
    btn.disabled = false;
  }).catch(err => {
    console.error(err);
    document.body.removeChild(cert);
    btn.textContent = oldText;
    btn.disabled = false;
    alert('Не удалось создать PDF. Попробуйте ещё раз.');
  });
});

/* ==================== ПРОФЕССИИ: КЛИК → ТЕСТ ==================== */
const profGrid = document.getElementById('professionsGrid');

function renderProfessions(filter = 'all'){
  profGrid.innerHTML = '';
  const all = Object.values(professions);
  const list = filter === 'all' ? all : all.filter(p => p.direction === filter);

  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'glass card prof-card';
    card.innerHTML = `
      <div class="card-icon">${p.icon}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="prof-meta"><strong>Навыки:</strong> ${p.skills}<br>
      <strong>Предметы:</strong> ${p.subjects}</div>
      <div class="prof-hint">Нажмите, чтобы пройти тест →</div>`;

    card.addEventListener('click', () => {
      showSection('test');
      startQuiz(p.direction);
    });

    profGrid.appendChild(card);
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProfessions(btn.dataset.filter);
  });
});

/* ==================== ИНИЦИАЛИЗАЦИЯ ==================== */
renderProfessions();
/* ==================== ФОРМА ОБРАТНОЙ СВЯЗИ ==================== */
const contactForm = document.getElementById('contactForm');
if (contactForm){
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const msg = document.getElementById('formMsg');
    msg.textContent = 'Спасибо! Ваше сообщение отправлено (демо-режим).';
    msg.style.display = 'block';
    msg.style.color = '#a78bfa';
    contactForm.reset();
    setTimeout(() => { msg.style.display = 'none'; }, 5000);
  });
}
/* Улучшение нажатий для сенсорных экранов (телефоны) */
document.querySelectorAll('.direction-card, .prof-card, .test-choice, .answer-card, .btn').forEach(el => {
  el.addEventListener('touchstart', function() {
    this.style.transform = 'scale(0.97)';
    this.style.opacity = '0.8';
  }, {passive: true});

  el.addEventListener('touchend', function() {
    this.style.transform = '';
    this.style.opacity = '';
  });
});