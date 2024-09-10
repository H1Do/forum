import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesPageSchema } from 'pages/ArticlesPage/model/types/articlesPageSchema';
import { ArticleSortField } from 'entities/Article';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/Article/ArticlesPage',
    component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

const articlesPageState = {
    ids: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
    ],
    entities: {
        1: {
            id: '1',
            title: 'JavaScript news',
            subtitle: 'Что нового в JS за 2024 год?',
            img: 'https://logo-base.com/logo/javascript_js_logo_icon.png',
            views: 768,
            createdAt: '26.02.2022',
            userId: '1',
            type: [
                'IT',
                'Programming',
            ],
            blocks: [
                {
                    id: '1',
                    type: 'TEXT',
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                    ],
                },
                {
                    id: '4',
                    type: 'CODE',
                    code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
                },
                {
                    id: '5',
                    type: 'TEXT',
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                    ],
                },
                {
                    id: '2',
                    type: 'IMAGE',
                    src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                    title: 'Рисунок 1 - скриншот сайта',
                },
                {
                    id: '3',
                    type: 'CODE',
                    code: 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);',
                },
                {
                    id: '7',
                    type: 'TEXT',
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                    ],
                },
                {
                    id: '8',
                    type: 'IMAGE',
                    src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                    title: 'Рисунок 1 - скриншот сайта',
                },
                {
                    id: '9',
                    type: 'TEXT',
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                    ],
                },
            ],
            user: {
                id: '1',
                username: 'admin',
                password: '123',
                role: 'ADMIN',
                avatar: 'https://99px.ru/sstorage/1/2024/07/image_1090724185250512146.jpg',
            },
        },
        2: {
            id: '2',
            title: 'Будущее искусственного интеллекта',
            subtitle: 'Искусственный интеллект и его влияние на технологии',
            img: 'https://sofmix-shop.ru/upload/iblock/ef2/rk3qb096rwe8256x0b9i2iubqlh2rly1.jpg',
            views: 1024,
            createdAt: '26.02.2024',
            userId: '1',
            type: [
                'IT',
                'Technology',
            ],
            blocks: [],
            user: {
                id: '1',
                username: 'admin',
                password: '123',
                role: 'ADMIN',
                avatar: 'https://99px.ru/sstorage/1/2024/07/image_1090724185250512146.jpg',
            },
        },
        3: {
            id: '3',
            title: 'Разработка на React',
            subtitle: 'Современные подходы к разработке с React',
            img: 'https://avatars.mds.yandex.net/i?id=da46aa0fb877d73fc13b247d071f7abe_l-4760093-images-thumbs&n=13',
            views: 540,
            createdAt: '15.03.2024',
            userId: '1',
            type: [
                'IT',
                'Programming',
            ],
            blocks: [],
            user: {
                id: '1',
                username: 'admin',
                password: '123',
                role: 'ADMIN',
                avatar: 'https://99px.ru/sstorage/1/2024/07/image_1090724185250512146.jpg',
            },
        },
        4: {
            id: '4',
            title: 'Секреты JavaScript',
            subtitle: 'Продвинутые техники и паттерны JavaScript',
            img: 'https://avatars.mds.yandex.net/i?id=acf89ab9dfa003d6dd53413c77a9e79b_l-5362606-images-thumbs&n=13',
            views: 890,
            createdAt: '10.04.2024',
            userId: '1',
            type: [
                'IT',
                'Programming',
            ],
            blocks: [],
            user: {
                id: '1',
                username: 'admin',
                password: '123',
                role: 'ADMIN',
                avatar: 'https://99px.ru/sstorage/1/2024/07/image_1090724185250512146.jpg',
            },
        },
        5: {
            id: '5',
            title: 'Введение в Python',
            subtitle: 'Основы Python для начинающих',
            img: 'https://avatars.dzeninfra.ru/get-zen_doc/2811422/pub_5fce2e51adaafd0b10bb4054_5fce33080a45a91cf4f1ba31/scale_1200',
            views: 650,
            createdAt: '01.05.2024',
            userId: '2',
            type: [
                'Programming',
            ],
            blocks: [],
            user: {
                id: '2',
                username: 'h1do',
                password: '123',
                role: 'USER',
                avatar: 'https://sopranoclub.ru/images/memy-na-avu-275-memnyh-avatarok/file56870.jpeg',
            },
        },
        6: {
            id: '6',
            title: 'Будущее космических исследований',
            subtitle: 'Новые достижения в космических исследованиях',
            img: 'https://scitechnews.ru/wp-content/uploads/2024/01/1675426626_gas-kvas-com-p-fonovii-risunok-dlya-rabochego-stola-kosmo-39.jpg',
            views: 320,
            createdAt: '20.06.2024',
            userId: '2',
            type: [
                'Science',
            ],
            blocks: [],
            user: {
                id: '2',
                username: 'h1do',
                password: '123',
                role: 'USER',
                avatar: 'https://sopranoclub.ru/images/memy-na-avu-275-memnyh-avatarok/file56870.jpeg',
            },
        },
    },
    isLoading: false,
    view: 'LIST',
    hasMore: true,
    page: 1,
    limit: 4,
    sort: ArticleSortField.CREATED,
    order: 'asc',
    search: '',
    type: 'ALL',
    _inited: true,
};

export const Primary = Template.bind({});
Primary.args = { };
Primary.decorators = [
    StoreDecorator({
        articlesPage: articlesPageState as ArticlesPageSchema,
    }),
];

export const IsLoading = Template.bind({});
IsLoading.args = { };
IsLoading.decorators = [
    StoreDecorator({
        articlesPage: {
            ...articlesPageState as ArticlesPageSchema,
            isLoading: true,
            entities: {},
            ids: [],
        },
    }),
];
