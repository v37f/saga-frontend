import { TArtStyleType, TMinMaxFilterOption, TNewsBlockType } from './types';

export const MAIN_SECTION_NEWS_NUMBER = 4;
export const PASSWORD_REGEX = /^[A-Za-z0-9]+$/;
export const PHONE_NUMBER_REGEX =
  /(\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/;
export const MAIN_SECTION_PRODUCTS_NUMBER = 8;
export const MAIN_SECTION_ARTISTS_NUMBER = 10;

export const CUSTOMER_ROLE = 'buyer';
export const SELLER_ROLE = 'seller';

export const DEFAULT_ROUTE = '/';
export const NOT_FOUND_ROUTE = '/*';

// customer routes
export const CATALOG_ROUTE = '/catalog';
export const ARTISTS_ROUTE = '/artists';
export const NEWS_ROUTE = '/news';
export const CONSULTATION_ROUTE = '/consultation';
export const PRICE_ANALYTICS_ROUTE = '/priceanalytics';
export const CUSTOMER_PROFILE_ROUTE = '/profile';
export const CART_ROUTE = '/cart';
export const CUSTOMER_FAVORITE_PRODUCTS_ROUTE = '/favoriteproducts';
export const CUSTOMER_FAVORITE_ARTISTS_ROUTE = '/favoriteartists';
export const CUSTOMER_ORDERS_ROUTE = '/orders';
export const CUSTOMER_SUBSCRIPTION_ROUTE = '/subscription';

// seller routes
export const SELLER_GOODS_ROUTE = '/goods';
export const SELLER_ORDERS_ROUTE = '/orders';

// [title, value]
export const CATEGORY_FILTER_OPTIONS: Map<string, string> = new Map([
  ['Живопись', 'Живопись'],
  ['Графика', 'Графика'],
  ['Фотография', 'Фотография'],
  ['Digital', 'Digital'],
]);

// [title, value]
export const STYLE_FILTER_OPTIONS: Map<string, string> = new Map([
  ['Абстракция', 'Абстракция'],
  ['Интерьерное искусство', 'Интерьерное искусство'],
  ['Концептуальное искусство', 'Концептуальное искусство'],
  ['Минимализм', 'Минимализм'],
  ['Фигуративное искусство', 'Фигуративное искусство'],
  ['Экспрессионизм', 'Экспрессионизм'],
  ['Pop Art', 'Pop Art'],
  ['Street Art', 'Street Art'],
]);

// [title, value]
export const SIZE_FILTER_OPTIONS: Map<string, TMinMaxFilterOption> = new Map([
  ['Small (до 40 см)', { min: 0, max: 40 }],
  ['Medium (40 - 100 см)', { min: 40, max: 100 }],
  ['Large (100 - 160 см)', { min: 100, max: 160 }],
  ['Oversize (более 160 см)', { min: 160, max: 10000 }],
]);

// [title, value]
export const ORIENTATION_FILTER_OPTIONS: Map<string, string> = new Map([
  ['Вертикальная', 'вертикальная'],
  ['Горизонтальная', 'горизонтальная'],
  ['Квадратная', 'квадратная'],
]);

export const CHEAP_COST_KEY = 'до 20 000 ₽';
export const EXPENSIVE_COST_KEY = 'от 500 000 ₽';
// [title, value]
export const PRICE_FILTER_OPTIONS: Map<string, TMinMaxFilterOption> = new Map([
  [CHEAP_COST_KEY, { min: 0, max: 20000 }],
  ['20 000 - 50 000 ₽', { min: 20000, max: 50000 }],
  ['50 000 - 100 000 ₽', { min: 50000, max: 100000 }],
  ['100 000 - 200 000 ₽', { min: 100000, max: 200000 }],
  ['200 000 - 500 000 ₽', { min: 200000, max: 500000 }],
  [EXPENSIVE_COST_KEY, { min: 500000, max: 500000000000 }],
]);

export const ARTIST_TITLE_BY_STYLE: Map<TArtStyleType, string> = new Map([
  ['Абстракция', 'Абстракционисты'],
  ['Интерьерное искусство', 'Интерьерное искусство'],
  ['Концептуальное искусство', 'Концептуалисты'],
  ['Минимализм', 'Минималисты'],
  ['Фигуративное искусство', 'Фигуративисты'],
  ['Экспрессионизм', 'Экспрессионисты'],
  ['Pop Art', 'Pop Art'],
  ['Street Art', 'Street Art'],
]);

export const NEWS_TITLE_BY_BLOCK: Map<TNewsBlockType, string> = new Map([
  ['Популярные новости', 'Популярные новости'],
  ['Новые художники', 'Новые художники'],
]);

export const PAINTING_CATEGORY_NAME = 'Живопись';
export const GRAPHIC_CATEGORY_NAME = 'Графика';
export const PHOTOGRAPHY_CATEGORY_NAME = 'Фотография';
export const DIGITAL_CATEGORY_NAME = 'Digital';

export const SAGA_ALL_RUSSIAN_PHONE = '+78001205250';
export const SAGA_MOSCOW_PHONE = '+74954562421';
export const SAGA_HELP_MAIL = 'help@sagaart.ru';

export const DEFAULT_VISIBLE_PRODUCTS = 12;
export const VISIBLE_PRODUCTS_INCREMENT = 6;

export const ALL_SHOWS = new Map([
  ['centre pompidou', 'centre pompidou'],
  ['centre pompidou', 'centre pompidou'],
  ['whitney museum of american art', 'whitney museum of american art'],
  ['the metropolitan museum of art', 'the metropolitan museum of art'],
  [
    'los angeles county museum of art (lacma)',
    'los angeles county museum of art (lacma)',
  ],
  ['guggenheim museum bilbao', 'guggenheim museum bilbao'],
  ['louisiana museum of art', 'louisiana museum of art'],
  [
    'hirshhorn museum and sculpture garden',
    'hirshhorn museum and sculpture garden',
  ],
  ['museum of contemporary art', 'museum of contemporary art'],
  ['los angeles (moca)', 'los angeles (moca)'],
  ['tate britain', 'tate britain'],
  ['museum ludwig', 'museum ludwig'],
  ['national gallery of victoria', 'national gallery of victoria'],
  ['hamburger bahnhof', 'hamburger bahnhof'],
  ['neue nationalgalerie', 'neue nationalgalerie'],
  ['national portrait gallery - london', 'national portrait gallery - london'],
  ['art institute of chicago', 'art institute of chicago'],
  [
    'national museum of modern and contemporary art - korea (mmca)',
    'national museum of modern and contemporary art - korea (mmca)',
  ],
  ['museo tamayo', 'museo tamayo'],
  ['tel aviv museum of art', 'tel aviv museum of art'],
  ['tate liverpool', 'tate liverpool'],
  [
    'international center of photography (icp)',
    'international center of photography (icp)',
  ],
  ['mca chicago', 'mca chicago'],
  ['new museum', 'new museum'],
  ['dallas museum of art', 'dallas museum of art'],
  ['brooklyn museum', 'brooklyn museum'],
  ['museum of modern art (moma)', 'museum of modern art (moma)'],
  ['tate modern', 'tate modern'],
  ['solomon r. guggenheim museum', 'solomon r. guggenheim museum'],
  ['national gallery of art', 'national gallery of art'],
  ['washington', 'washington'],
  ['d.c.', 'd.c.'],
  [
    'ullens center for contemporary art (ucca)',
    'ullens center for contemporary art (ucca)',
  ],
  [
    'san francisco museum of modern art (sfmoma)',
    'san francisco museum of modern art (sfmoma)',
  ],
  ['perez art museum miami (pamm)', 'perez art museum miami (pamm)'],
  ['mass moca', 'mass moca'],
  ['museo reina sofia', 'museo reina sofia'],
  ['moma ps1', 'moma ps1'],
  ['serpentine galleries', 'serpentine galleries'],
  [
    "museu d'art contemporani de barcelona (macba)",
    "museu d'art contemporani de barcelona (macba)",
  ],
  ['jewish museum', 'jewish museum'],
  ['k20 grabbeplatz', 'k20 grabbeplatz'],
  ['dia:beacon', 'dia:beacon'],
  ['museum fur moderne kunst', 'museum fur moderne kunst'],
  ['frankfurt (mmk)', 'frankfurt (mmk)'],
  [
    'museum of contemporary art australia (mca)',
    'museum of contemporary art australia (mca)',
  ],
  ['institute of contemporary art', 'institute of contemporary art'],
  ['miami (ica miami)', 'miami (ica miami)'],
  ['aspen art museum', 'aspen art museum'],
  ['schirn kunsthalle frankfurt', 'schirn kunsthalle frankfurt'],
  ['dallas contemporary', 'dallas contemporary'],
  ['hammer museum', 'hammer museum'],
  ['garage museum of contemporary art', 'garage museum of contemporary art'],
  ['deichtorhallen hamburg', 'deichtorhallen hamburg'],
  ['yuz museum shanghai', 'yuz museum shanghai'],
  ['mori art museum', 'mori art museum'],
  ['the broad', 'the broad'],
  ['tai kwun', 'tai kwun'],
  ['fondation beyeler', 'fondation beyeler'],
  ['malba', 'malba'],
  ['boston', 'boston'],
  ['stedelijk museum amsterdam', 'stedelijk museum amsterdam'],
  ['castello di rivoli', 'castello di rivoli'],
  ['leeum - samsung museum of art', 'leeum - samsung museum of art'],
  ['dia:chelsea', 'dia:chelsea'],
  ['kunstmuseum basel', 'kunstmuseum basel'],
  ['power station of art', 'power station of art'],
  ['museo jumex', 'museo jumex'],
  ['met breuer', 'met breuer'],
  ['lenbachhaus', 'lenbachhaus'],
  [
    'palazzo grassi - punta della dogana',
    'palazzo grassi - punta della dogana',
  ],
  ['nasher sculpture center', 'nasher sculpture center'],
  ['haus der kunst', 'haus der kunst'],
  ['institute of contemporary arts', 'institute of contemporary arts'],
  ['london', 'london'],
  ['whitechapel gallery', 'whitechapel gallery'],
  ['secession', 'secession'],
  ['kunsthalle basel', 'kunsthalle basel'],
  ['m+', 'm+'],
  [
    "museo d'arte contemporanea di roma (macro)",
    "museo d'arte contemporanea di roma (macro)",
  ],
  ['kroller-muller museum', 'kroller-muller museum'],
  ['fondazione prada', 'fondazione prada'],
  ['martin-gropius-bau', 'martin-gropius-bau'],
  ['the bass museum of art', 'the bass museum of art'],
  ['palais de tokyo', 'palais de tokyo'],
  ['rockbund art museum', 'rockbund art museum'],
  ['studio museum in harlem', 'studio museum in harlem'],
  ['national gallery singapore', 'national gallery singapore'],
  ['k21 standehaus', 'k21 standehaus'],
  ['kw institute for contemporary art', 'kw institute for contemporary art'],
  ['jeu de paume', 'jeu de paume'],
  ['zeitz mocaa', 'zeitz mocaa'],
  ['museum of old and new art', 'museum of old and new art'],
  ['musée du louvre', 'musée du louvre'],
  [
    'museu de arte moderna de sao paulo (mam)',
    'museu de arte moderna de sao paulo (mam)',
  ],
  ['museu de arte moderna (mam rio)', 'museu de arte moderna (mam rio)'],
]);
