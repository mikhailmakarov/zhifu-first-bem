module.exports = {
    block : 'page',
    title : 'DVB T2 приставка, оптом - Всем крупнооптовая цена! Жми!',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : 'Оптовая продажа приставок DVB-T2, с наценкой до 100% в условиях кризиса! Начинайте зарабатывать от 50 000 рублей на бесплатном цифровом телевидении!' } },
        { elem : 'meta', attrs : { name : 'keywords', content : 'приставка dvb t2' } },
        { elem : 'meta', attrs : { name : 'author', content : 'Mikhail Makarov' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '../../libs/normalize-css/normalize.css' },
        { elem : 'css', url : '../../jquery-ui/jquery-ui.min.css'},
        { elem : 'css', url : '../../jquery-gritter/jquery.gritter.css'},
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [
        { elem : 'js', url : '../../libs/jquery/dist/jquery.min.js' },
        { elem : 'js', url : '../../jquery-ui/jquery-ui.min.js' },
        { elem : 'js', url : '../../jquery-gritter/jquery.gritter.min.js'},
        { elem : 'js', url : 'index.min.js' }
    ],
    content : [
        {
            elem : 'menu_wrapper',
            content : {
                block : 'wrapper',
                content : {
                    block : 'menu',
                    mods : { theme : 'orion' },
                    content : [
                        {
                            hash : '1',
                            content : 'ДОСТУП К ЦЕНАМ'
                        },
                        {
                            hash : '2',
                            content : 'КАТАЛОГ'
                        },
                        {
                            hash : '3',
                            content : 'РАСЧЕТ ЗАРАБОТКА ПО РЕГИОНУ'
                        },
                        {
                            hash : '4',
                            content : 'ОТЗЫВЫ'
                        },
                        {
                            hash : '5',
                            content : 'ВОПРОСЫ'
                        }
                    ].map(function(item) {
                        return {
                            block : 'menu-item',
                            val : item.val,
                            tag : 'a',
                            attrs : { href : '#' + item.hash },
                            content : item.content
                        }
                    })
                }
            }
        },
        {
            block : 'first_screen',
            content : [
                {
                    elem : 'header_wrapper',
                    content : {
                        block : 'wrapper',
                        content : {
                            block : 'header',
                            js : true,
                            content : [
                                {
                                    elem : 'side',
                                    elemMods : { align : 'left' },
                                    content : [
                                        {
                                            block : 'logo',
                                            content : {
                                                block : 'image',
                                                alt : 'ORION+',
                                                url : '../../img/logo.png'
                                            }
                                        },
                                        {
                                            elem : 'description',
                                            content: 'Оптовые продажи приставок для бесплатного цифрового телевидения'
                                        }
                                    ]
                                },
                                {
                                    elem : 'side',
                                    elemMods : { align : 'right' },
                                    content : [
                                        {
                                            elem : 'phone',
                                            content : {
                                                tag : 'a',
                                                attrs : { href : 'tel:+7(499)341-40-55' },
                                                content : '+7 (499) 341-40-55'
                                            }
                                        },
                                        {
                                            elem : 'callback',
                                            content : 'Вам перезвонить?'
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                },
                {
                    block : 'utp',
                    content : {
                        elem : 'text',
                        tag : 'h1',
                        content : 'Приставки DVB-T2 с&nbsp;возможностью наценки до&nbsp;100% в условиях кризиса!'
                    }
                },
                {
                    elem : 'sub_utp',
                    content : [
                        {
                            elem : 'text',
                            content : 'Напрямую от производителя!'
                        },
                        {
                            elem : 'text',
                            content : 'Доставка в любой регион от 1 дня!'
                        }
                    ]
                },
                {
                    block : 'wrapper',
                    content : [
                        {
                            block : 'boxes',
                            content : [
                                {
                                    elem : 'box_left',
                                    content : {
                                        block : 'image',
                                        url : '../../img/box-left.png'
                                    }
                                },
                                {
                                    elem : 'box_right',
                                    content : {
                                        block : 'image',
                                        url : '../../img/box-right.png'
                                    }
                                },
                                {
                                    elem : 'box_fourth',
                                    content : {
                                        block : 'image',
                                        url : '../../img/box-fourth.png'
                                    }
                                },
                                {
                                    elem : 'box_center',
                                    content : {
                                        block : 'image',
                                        url : '../../img/box-center.png'
                                    }
                                }
                            ]
                        },
                        {
                            block : 'hash_wrapper',
                            attrs : { id : '1' },
                            content : {
                                block : 'promo',
                                mix : { block : 'clearfix' },
                                content : [
                                    {
                                        elem : 'side',
                                        elemMods : { align : 'left'},
                                        content : [
                                            {
                                                elem : 'header',
                                                content : 'Сегодня акция!'
                                            },
                                            {
                                                elem : 'sub_header',
                                                content : 'Первая партия <br> по <br> крупнооптовой цене!'
                                            }
                                        ]
                                    },
                                    {
                                        elem : 'side',
                                        elemMods : { align : 'right'},
                                        content : [
                                            {
                                                elem : 'form_header',
                                                content : 'Получите доступ ко всем оптовым ценам на сегодняшний день'
                                            },
                                            {
                                                elem : 'form_action',
                                                tag : 'form',
                                                method : 'POST',
                                                action : 'index.html',
                                                content : [
                                                    {
                                                        elem : 'inputs_wrapper',
                                                        content : [
                                                            {
                                                                block : 'input',
                                                                mods : { theme : 'orion', icon : 'user' },
                                                                type : 'search',
                                                                name : 'name',
                                                                placeholder : 'Введите имя'
                                                            },
                                                            {
                                                                block : 'input',
                                                                mods : { theme : 'orion', icon : 'phone' },
                                                                type : 'search',
                                                                name : 'phone',
                                                                placeholder : 'Введите телефон'
                                                            },
                                                            {
                                                                block : 'input',
                                                                mods : { theme : 'orion', icon : 'mail' },
                                                                type : 'search',
                                                                name : 'email',
                                                                placeholder : 'Введите e-mail'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem : 'button_wrapper',
                                                        content : {
                                                            block : 'button',
                                                            mods : { theme : 'orion' },
                                                            type : 'submit',
                                                            name : 'form',
                                                            val : '1',
                                                            text : 'Получить доступ к оптовым ценам'
                                                        }
                                                    },
                                                    {
                                                        elem : 'checkbox_wrapper',
                                                        content : {
                                                            block : 'checkbox',
                                                            mods : { theme : 'orion' },
                                                            name : 'subscribe',
                                                            text : 'Получать ежедневное обновление цен'
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            elem : 'second_screen_header',
            tag : 'h2',
            content : '9 бонусов, которые позволяют отлично зарабатывать на продаже DVB-T2!'
        },
        {
            block : 'second_screen',
            content : {
                block : 'wrapper',
                content : {
                    block : 'bonuses',
                    tag : 'ul',
                    content: [
                        {
                            header : 'Заводская гарантия 1&nbsp;год',
                            description : 'Если вам попался брак, мы вернем полную стоимость или заменим его со следующей поставкой.',
                            icon : 'certificate'
                        },
                        {
                            header : 'Доход от 50&nbsp;000&nbsp;руб до <br> 150&nbsp;000&nbsp;руб',
                            description : 'Емкость рынка любого региона России не менее 5&nbsp;000 потенциальных покупателей!',
                            icon : 'money'
                        },
                        {
                            header : 'Возврат непроданного <br> товара',
                            description : 'Вернем Вам деньги за неликвидный товар.',
                            icon : 'money_back'
                        },
                        {
                            header : 'Рекламные материалы <br> в подарок',
                            description : 'Предоставляем листовки, плакаты и другие рекламные материалы бесплатно!',
                            icon : 'gift'
                        },
                        {
                            header : 'Доставка за наш счет!',
                            description : 'Бесплатная доставка до транспортной компании или в любой регион России при заказе от&nbsp;10&nbsp;штук!!',
                            icon : 'truck'
                        },
                        {
                            header : 'Делимся выгодной системой продаж!',
                            description : 'Каждому клиенту при первом заказе мы предоставляем 100% рабочую систему продаж, которая способна увеличить прибыль в&nbsp;2&nbsp;раза!',
                            icon : 'graph'
                        },
                        {
                            header : 'На наш товар накручивают больше',
                            description : 'Наличие собственной логистической базы и собственное производство, позволяет нам предлагать минимальную цену на рынке.',
                            icon : 'percent'
                        },
                        {
                            header : 'Продвинем в интернете',
                            description : 'Комплексная помощь в продвижении Вашего продукта в Яндекс и Google.',
                            icon : 'globe'
                        },
                        {
                            header : 'Сертифицированный товар',
                            description : 'К каждой партии прикрепляем сертификат качества!',
                            icon : 'roll'
                        }
                    ].map(function(item) {
                        return {
                            elem : 'bonus_item',
                            tag : 'li',
                            mods : { icon : item.icon },
                            content : [
                                {
                                    elem : 'header',
                                    tag : 'span',
                                    content : item.header
                                },
                                {
                                    elem : 'description',
                                    tag : 'span',
                                    content : item.description
                                }
                            ]
                        };
                    })
                }
            }
        },
        {
            elem : 'bonus_button_wrapper',
            content : {
                block : 'button',
                mix : { block : 'page', elem : 'getprices_button' },
                mods : { theme : 'orion' },
                text : 'Получить отлаженную систему продаж'
            }
        },
        {
            block : 'hash_wrapper',
            attrs: { id : '2' },
            content : {
                block : 'screen_header',
                content : {
                    elem : 'text',
                    content : 'КАТАЛОГ'
                }
            }
        },
        {
            block : 'wrapper',
            content : {
                block : 'slider',
                mix : { block : 'clearfix' },
                content : [
                    {
                        elem : 'side',
                        mods : { align : 'left' },
                        content : {
                            block : 'image',
                            mix : { block : 'slider', elem : 'big_image' },
                            url : '../../img/box-right.png'
                        }
                    },
                    {
                        elem : 'side',
                        mods : { align : 'right' },
                        content : [
                            {
                                elem : 'header',
                                content : 'Цифровой телевизионный приемник'
                            },
                            {
                                elem : 'header',
                                mix : { block : 'slider', elem : 'editable_header' },
                                content : 'ORION+&nbsp;RS-T19HD'
                            },
                            {
                                block : 'button',
                                mix : { block : 'slider', elem : 'button' },
                                mods : { theme : 'orion' },
                                text : 'получить прайс-лист'
                            },
                            {
                                elem : 'preview',
                                content : 'Технические характеристики модели'
                            },
                            {
                                elem : 'goods_list',
                                content : [
                                    {
                                        name : 'rs-t18hd',
                                        image : '18.png'
                                    },
                                    {
                                        name : 'rs-t19hd',
                                        image : 'box-right.png',
                                        state : 'active'
                                    },
                                    {
                                        name : 'rs-t20hd',
                                        image : 'box-center.png',
                                    },
                                    {
                                        name : 'rs-t21hd',
                                        image : 'box-left.png',
                                    }
                                ].map(function(item) {
                                    return {
                                        elem : 'good_item',
                                        tag : 'li',
                                        content : [
                                            {
                                                block : 'image',
                                                mix : { block : 'slider', elem : 'icon' },
                                                url : '../../img/' + item.image,
                                                alt : item.name
                                            },
                                            {
                                                elem : 'name',
                                                mods : { active : ( item.state === 'active' ? 'yes' : '' ) },
                                                content : item.name
                                            }
                                        ]
                                    };
                                })
                            }
                        ]
                    }
                ]
            }
        },
        {
            block : 'hash_wrapper',
            attrs : { id : '3' },
            content : {
                block : 'calc_screen',
                js : true,
                content : {
                    elem : 'wrapper',
                    content : [
                        {
                            elem : 'header',
                            content : 'Сколько Вы сможете зарабатывать на продаже в своем регионе?'
                        },
                        {
                            elem : 'calc_lines',
                            content : [
                                {
                                    elem : 'calc_line',
                                    content : [
                                        {
                                            block : 'select',
                                            mods : { mode: 'radio-check', theme : 'islands', size : 'xl' },
                                            //type : 'search',
                                            optionsMaxHeight: 300,
                                            text : 'Введите регион',
                                            val : 0,
                                            options : [
                                                    { text: "Адыгея Респ", val: "01" },
                                                    { text: "Алтай Респ", val: "04" },
                                                    { text: "Алтайский край", val: "22" },
                                                    { text: "Амурская обл", val: "28" },
                                                    { text: "Архангельская обл", val: "29" },
                                                    { text: "Астраханская обл", val: "30" },
                                                    { text: "Башкортостан Респ", val: "02" },
                                                    { text: "Белгородская обл", val: "31" },
                                                    { text: "Брянская обл", val: "32" },
                                                    { text: "Бурятия Респ", val: "03" },
                                                    { text: "Владимирская обл", val: "33" },
                                                    { text: "Волгоградская обл", val: "34" },
                                                    { text: "Вологодская обл", val: "35" },
                                                    { text: "Воронежская обл", val: "36" },
                                                    { text: "Дагестан Респ", val: "05" },
                                                    { text: "Еврейская Аобл", val: "79" },
                                                    { text: "Забайкальский край", val: "75" },
                                                    { text: "Ивановская обл", val: "37" },
                                                    { text: "Ингушетия Респ", val: "06" },
                                                    { text: "Иркутская обл", val: "38" },
                                                    { text: "Кабардино-Балкарская Респ", val: "07" },
                                                    { text: "Калининградская обл", val: "39" },
                                                    { text: "Калмыкия Респ", val: "08" },
                                                    { text: "Калужская обл", val: "40" },
                                                    { text: "Камчатский край", val: "41" },
                                                    { text: "Карачаево-Черкесская Респ", val: "09" },
                                                    { text: "Карелия Респ", val: "10" },
                                                    { text: "Кемеровская обл", val: "42" },
                                                    { text: "Кировская обл", val: "43" },
                                                    { text: "Коми Респ", val: "11" },
                                                    { text: "Костромская обл", val: "44" },
                                                    { text: "Краснодарский край", val: "23" },
                                                    { text: "Красноярский край", val: "24" },
                                                    { text: "Курганская обл", val: "45" },
                                                    { text: "Курская обл", val: "46" },
                                                    { text: "Ленинградская обл", val: "47" },
                                                    { text: "Липецкая обл", val: "48" },
                                                    { text: "Магаданская обл", val: "49" },
                                                    { text: "Марий Эл Респ", val: "12" },
                                                    { text: "Мордовия Респ", val: "13" },
                                                    { text: "Москва г", val: "77" },
                                                    { text: "Московская обл", val: "50" },
                                                    { text: "Мурманская обл", val: "51" },
                                                    { text: "Ненецкий АО", val: "83" },
                                                    { text: "Нижегородская обл", val: "52" },
                                                    { text: "Новгородская обл", val: "53" },
                                                    { text: "Новосибирская обл", val: "54" },
                                                    { text: "Омская обл", val: "55" },
                                                    { text: "Оренбургская обл", val: "56" },
                                                    { text: "Орловская обл", val: "57" },
                                                    { text: "Пензенская обл", val: "58" },
                                                    { text: "Пермский край", val: "59" },
                                                    { text: "Приморский край", val: "25" },
                                                    { text: "Псковская обл", val: "60" },
                                                    { text: "Ростовская обл", val: "61" },
                                                    { text: "Рязанская обл", val: "62" },
                                                    { text: "Самарская обл", val: "63" },
                                                    { text: "Санкт-Петербург г", val: "78" },
                                                    { text: "Саратовская обл", val: "64" },
                                                    { text: "Саха /Якутия/ Респ", val: "14" },
                                                    { text: "Сахалинская обл", val: "65" },
                                                    { text: "Свердловская обл", val: "66" },
                                                    { text: "Северная Осетия - Алания Респ", val: "15" },
                                                    { text: "Смоленская обл", val: "67" },
                                                    { text: "Ставропольский край", val: "26" },
                                                    { text: "Тамбовская обл", val: "68" },
                                                    { text: "Татарстан Респ", val: "16" },
                                                    { text: "Тверская обл", val: "69" },
                                                    { text: "Томская обл", val: "70" },
                                                    { text: "Тульская обл", val: "71" },
                                                    { text: "Тыва Респ", val: "17" },
                                                    { text: "Тюменская обл", val: "72" },
                                                    { text: "Удмуртская Респ", val: "18" },
                                                    { text: "Ульяновская обл", val: "73" },
                                                    { text: "Хабаровский край", val: "27" },
                                                    { text: "Хакасия Респ", val: "19" },
                                                    { text: "Ханты-Мансийский Автономный округ - Югра АО", val: "86" },
                                                    { text: "Челябинская обл", val: "74" },
                                                    { text: "Чеченская Респ", val: "20" },
                                                    { text: "Чувашская Респ", val: "21" },
                                                    { text: "Чукотский АО", val: "87" },
                                                    { text: "Ямало-Ненецкий АО", val: "89" },
                                                    { text: "Ярославская обл", val: "76" }
                                            ]
                                        },
                                        {
                                            block : 'input',
                                            mods : { theme : 'orion' },
                                            type : 'search',
                                            placeholder : 'Введите город'
                                        },
                                        {
                                            block : 'button',
                                            mix : { block : 'calc_screen', elem : 'region_submitter'},
                                            mods : { theme : 'orion' },
                                            text : 'ВЫБРАТЬ'
                                        }
                                    ]
                                },
                                {
                                    elem : 'calc_line',
                                    content : [
                                        {
                                            elem : 'calc_line_centering',
                                            content : [
                                                {
                                                    elem : 'calc_line_header',
                                                    content : 'ОБЪЕМ ЗАКУПКИ ПРИСТАВОК (руб.)'
                                                },
                                                {
                                                    block : 'input',
                                                    mix : { block : 'calc_screen', elem : 'purchases_input' },
                                                    mods : { theme : 'orion_short', type : 'search' },
                                                    val : '50000'
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'slider',
                                            js : true
                                        },
                                        {
                                            elem : 'calc_line_centering',
                                            content : [
                                                {
                                                    text : '5&nbsp;тыс.руб'
                                                },
                                                {
                                                    text : '50&nbsp;тыс.руб'
                                                },
                                                {
                                                    text : '100&nbsp;тыс.руб'
                                                },
                                                {
                                                    text : '150&nbsp;тыс.руб'
                                                }
                                            ].map(function(item) {
                                                return {
                                                    elem : 'sub_text',
                                                    content : item.text
                                                };
                                            })
                                        }
                                    ]
                                },
                                {
                                    elem : 'calc_line',
                                    content : [
                                        {
                                            elem : 'calc_line_centering',
                                            content : [
                                                {
                                                    elem : 'calc_line_header',
                                                    content : 'ИЗДЕРЖКИ - АРЕНДА, ЗАРПЛАТА (руб.)'
                                                },
                                                {
                                                    block : 'input',
                                                    mix : { block : 'calc_screen', elem : 'outgoings_input' },
                                                    mods : { theme : 'orion_short', type : 'search' },
                                                    val : '10000'
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'slider',
                                            js : true
                                        },
                                        {
                                            elem : 'calc_line_centering',
                                            content : [
                                                {
                                                    text : '5&nbsp;тыс.руб'
                                                },
                                                {
                                                    text : '15&nbsp;тыс.руб'
                                                },
                                                {
                                                    text : '30&nbsp;тыс.руб'
                                                },
                                                {
                                                    text : '60&nbsp;тыс.руб'
                                                }
                                            ].map(function(item) {
                                                return {
                                                    elem : 'sub_text',
                                                    content : item.text
                                                };
                                            })
                                        }
                                    ]
                                },
                                {
                                    elem : 'calc_line',
                                    content : [
                                        {
                                            elem : 'calc_line_header',
                                            mods : { float : 'left' },
                                            content : 'НАЦЕНКА'
                                        },
                                        {
                                            block : 'radio-group',
                                            val : 75,
                                            mix : { block : 'calc_screen', elem : 'nacenka_selector' },
                                            mods : { theme : 'orion', type : 'line' },
                                            options : [
                                                { val : 50, text : '50%' },
                                                { val : 75, text : '75%' },
                                                { val : 100, text : '100%' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem : 'bottom',
                            content : [
                                {
                                    elem : 'bottom_item',
                                    content : [
                                        {
                                            block : 'image',
                                            url : '../../img/purchases.png'
                                        },
                                        'Закупка: ',
                                        {
                                            elem : 'purchases_num',
                                            tag : 'span',
                                            content : '50&nbsp;000&nbsp;руб.'
                                        }
                                    ]
                                },
                                {
                                    elem : 'bottom_item',
                                    content : [
                                        {
                                            block : 'image',
                                            url : '../../img/profit.png'
                                        },
                                        'Чистая прибыль: ',
                                        {
                                            elem : 'profit_num',
                                            tag : 'span',
                                            content : '105&nbsp;000&nbsp;руб.'
                                        }
                                    ]
                                },
                                {
                                    elem : 'result',
                                    content : [
                                        'За 12 месяцев я получу:',
                                        {
                                            elem : 'profit_year',
                                            content : '1&nbsp;260&nbsp;000&nbsp;руб.'
                                        },
                                        {
                                            block : 'button',
                                            mods : { theme : 'orion' },
                                            text : 'Хочу такую прибыль'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        },
        {
            block : 'hash_wrapper',
            attrs : { id : '4' },
            content : {
                block : 'screen_header',
                content : {
                    elem : 'text',
                    content : 'Посмотрите результаты наших клиентов'
                }
            }
        },
        {
            block : 'recalls',
            mix : { block : 'wrapper' },
            content : [
                {
                    elem : 'button_line',
                    content : [
                        {
                            text : 'Установщики антенного оборудования',
                            group : 1,
                            active : true
                        },
                        {
                            text : 'салоны сотовой связи',
                            group : 2
                        },
                        {
                            text : 'Магазины компьютерной техники',
                            group : 3
                        },
                        {
                            text : 'Магазины оборудования для спутникового ТВ',
                            group : 4
                        },
                        {
                            text : 'Рынки',
                            group : 9
                        },
                        {
                            text : 'Магазины электроники и бытовой техники',
                            group : 5
                        },
                        {
                            text : 'Магазины CD/DVD',
                            group : 6
                        },
                        {
                            text : 'Магазины товаров для&nbsp;дома',
                            group : 8
                        },
                        {
                            text : 'Магазины радиотоваров',
                            group : 7
                        }
                    ].map(function(item) {
                        return {
                            elem : 'button',
                            mix : { block : 'recalls', elem : 'group_' + item.group },
                            mods : { active : ( item.active === true ? 'yes' : '' )  },
                            content : {
                                elem : 'button_text',
                                content : item.text
                            }
                        }
                    })
                },
                [
                    {
                        left : {
                            image : 'shnurovas',
                            fio : 'Шнуров Александр Степанович',
                            city : 'Коломна',
                            status : 'Установщики антенного оборудования',
                            salary : '80 000 руб',
                            text : 'Занимаюсь установкой антенного оборудования, сам я монтажник. Периодически работа стационарных антен не устраивает клиентов и я предлагаю установку DVB-T2. Не было ни одного возврата. Товар отличный!'
                        },
                        right : {
                            image : 'nikiforovis',
                            fio : 'Астафьев Михаил Валерьевич',
                            city : 'Новгород',
                            status : 'Установщики антенного оборудования',
                            salary : '50 000 руб',
                            text : 'Приемник рекомендую. Начал работу с орионом, так как для себя присматривал. По совместительству занимаюсь монтажем антен и допродаю установки своим клиентам. Полезны были рекомендации по продажам! Условия приемлемые.'
                        },
                        group : 1,
                        active : true
                    },
                    {
                        left : {
                            image : 'vinilenkoia',
                            fio : 'Виниленко Игорь Александрович',
                            city : 'Иваново',
                            status : 'Салоны сотовой связи',
                            salary : '75 000 руб',
                            text : 'Являюсь управляющим менеджером "Связного". Товар поступил к нам не так давно. План выполнили по нему достаточно просто, к моему удивлению. Оказывается мало у кого есть хорошее цифровое телевидение.'
                        },
                        right : {
                            image : 'astakhovkm',
                            fio : 'Астахов Константин Михайлович',
                            city : 'Щелково',
                            status : 'Салоны сотовой связи',
                            salary : '83 000 руб',
                            text : 'Сделали акцент на продажу цифровых приемников в этом месяце. Обратились в Орион. Привлекло предложение дешевой стартовой закупки. Клиенты довольны, жалоб нет, товар продается!'
                        },
                        group : 2
                    },
                    {
                        left : {
                            image : 'petrenkodv',
                            fio : 'Петренко Дмитрий Владимирович',
                            city : 'Саратов',
                            status : 'Магазины компьютерной техники',
                            salary : '100 000 руб',
                            text : 'Хороший товар для доп продажи. Спрос есть без всякой рекламы. Достаточно просто интересоваться у покупателей качеством их телевидения. Сама приставка недорогая, по этому клиенты принимают решение достаточно быстро.'
                        },
                        right : {
                            image : 'zvyagincevss',
                            fio : 'Звягинцев Сергей Сергеевич',
                            city : 'Ижевск',
                            status : 'Магазины компьютерной техники',
                            salary : '45 000 руб',
                            text : 'В нашем магазине большой ассортимент компьютерной техники, но мы хотели расширятся в направлении жк телевизоров и телевидения в целом. Цифровые приставки оказались отличным дополнением. Подняли прибыль на 45 000 руб.'
                        },
                        group : 3
                    },
                    {
                        left : {
                            image : 'krylovaf',
                            fio : 'Крылов Алексей Федорович',
                            city : 'Уфа',
                            status : 'Магазины оборудования для спутникового ТВ',
                            salary : '75 000 руб',
                            text : 'Понравились условия Ориона. Увидел рекламу вконтакте решил посмотреть сайт. Отличные условия. Понравилось, что впредачу дали рекламные материалы. Товар ходовой.'
                        },
                        right : {
                            image : 'chernavskyiv',
                            fio : 'Чернавский Илья Валентинович',
                            city : 'Сергиев Посад',
                            status : 'Магазины оборудования для спутникового ТВ',
                            salary : '90 000 руб',
                            text : 'До этого в нашем магазине продавались только приставки поддерживающее телевидение с абонентской платой. Когда я узнал о существовании приставок без абонентки, тут же закупил первую пробную партию, которая разошлась за неделю!'
                        },
                        group : 4
                    },
                    {
                        left : {
                            image : 'lukhovskoyva',
                            fio : 'Луховской Вячеслав Александрович',
                            city : 'Тула',
                            status : 'Магазины электроники и бытовой техники',
                            salary : '120 000 руб',
                            text : 'Клиенты сами часто спрашивали про приставки и просто искал более выгодные условия. Важна была оперативная доставка, с этим все впорядке.'
                        },
                        right : {
                            image : 'gorkovenkodu',
                            fio : 'Горьковенко Дмитрий Юрьевич',
                            city : 'Воскресенск',
                            status : 'Магазины электроники и бытовой техники',
                            salary : '50 000 руб',
                            text : 'Продолжаю бизнес отца. На приставки попал случайно. Помогли рекомендации по продвижению в интернете. Спасибо!'
                        },
                        group : 5
                    },
                    {
                        left : {
                            image : 'ionovma',
                            fio : 'Ионов Михаил Алексеевич',
                            city : 'Киров',
                            status : 'Магазины CD/DVD',
                            salary : '30 000 руб',
                            text : 'У нас точка с компьютерными играми, дисками и комплектующими. Решили расширить ветку и добавили приставки. Мы использовали только офлайн методы привлечения (листовки, плакаты) и в результате подняли выручку на 30 000 руб.'
                        },
                        right : {
                            image : 'zubovov',
                            fio : 'Зубов Олег Владимирович',
                            city : 'Пермь',
                            status : 'Магазины CD/DVD',
                            salary : '60 000 руб',
                            text : 'Цифровое телевидение сейчас, очень востребованный продукт. Намеренно искали именно без абонентской платы, чтобы возражений у клиентов было меньше. На сайте заинтересовало продвижение через интернет. Обратились и все хорошо. Сейчас понимаю, что только вывесками много клиентов не нагонишь.'
                        },
                        group : 6
                    },
                    {
                        left : {
                            image : 'fanfilovna',
                            fio : 'Фанфилов Николай Александрович',
                            city : 'Воронеж',
                            status : 'Магазины радиотоваров',
                            salary : '40 000 руб',
                            text : 'Приобрел приставки для расширения товарного выбора. Покупают достаточно часто. За месяц сделал 40 000 руб только на приставках dvb-t2!'
                        },
                        right : {
                            image : 'kolesnikovov',
                            fio : 'Колесников Олег Владиславович',
                            city : 'Клин',
                            status : 'Магазины радиотоваров',
                            salary : '70 000 руб',
                            text : 'Начал привлекать людей из интернета по технологиям ориона. Приставки хорошо расходятся. В живую меньше заказов, но я пока рекламу не развесил еще.'
                        },
                        group : 7
                    },
                    {
                        left : {
                            image : 'khrebtovavi',
                            fio : 'Хребтова Валерия Игоревна',
                            city : 'Чебоксары',
                            status : 'Магазины товаров для дома',
                            salary : '30 000 руб',
                            text : 'Приобрели первую партию на пробу и начали предлагать каждому клиенту. Чтобы выглядело не навязчиво, во время разговора ссылались что каналы плохо ловят у нас в городе и т.д. Работает прекрасно!'
                        },
                        right : {
                            image : 'pticinaov',
                            fio : 'Птицина Ольга Владимировна',
                            city : 'Пенза',
                            status : 'Магазины товаров для дома',
                            salary : '45 000 руб',
                            text : 'Сделали посадочную страницу специально под приставки. Заказы каждый день. За условия огромное спасибо менеджеру Николаю, подстроился под нашу ситуацию.'
                        },
                        group : 8
                    },
                    {
                        left : {
                            image : 'dovydovaas',
                            fio : 'Довыдова Анна Сергеевна',
                            city : 'Сергиев Посад',
                            status : 'Рынки',
                            salary : '20 000 руб',
                            text : 'Решили закупить себе на точку приставок, особо без рекламы продаж 10 в месяц делаем. Накручиваем чуть больше 50%.'
                        },
                        right : {
                            image : 'dubkovia',
                            fio : 'Дубков Илья Анатольевич',
                            city : 'Рыбное',
                            status : 'Рынки',
                            salary : '35 000 руб',
                            text : 'В целом продажи идут. С интернетом не дружу по этому продаем только тем кто на рынке есть. Хорошие цены у поставщиков, по этому и обратился.'
                        },
                        group : 9
                    }
                ].map(function(item) {
                    return {
                        elem : 'container',
                        mix : [
                            { block : 'recalls', elem : 'group_' + item.group },
                            { block : 'clearfix' }
                        ],
                        mods : { active : ( item.active === true ? 'yes' : '' ) },
                        content : [
                            {
                                elem : 'recall',
                                mods : { side : 'left' },
                                content : [
                                    /*{
                                        block : 'image',
                                        url : '../../img/' + item.left.image + '.jpg',
                                        alt : item.left.fio
                                    },*/
                                    {
                                        elem : 'recall_fio',
                                        content : item.left.fio
                                    },
                                    {
                                        elem : 'recall_city',
                                        content : item.left.city
                                    },
                                    {
                                        elem : 'recall_status',
                                        content : item.left.status
                                    },
                                    {
                                        elem : 'recall_salary',
                                        content : [
                                            'Прибыль в месяц: ',
                                            {
                                                elem : 'recall_salary_num',
                                                tag : 'span',
                                                content: item.left.salary
                                            }
                                        ]
                                    },
                                    {
                                        elem : 'recall_text',
                                        content : item.left.text
                                    },
                                ]
                            },
                            {
                                elem : 'recall',
                                mods : { side : 'right' },
                                content : [
                                    /*{
                                        block : 'image',
                                        url : '../../img/' + item.right.image + '.jpg',
                                        alt : item.right.fio
                                    },*/
                                    {
                                        elem : 'recall_fio',
                                        content : item.right.fio
                                    },
                                    {
                                        elem : 'recall_city',
                                        content : item.right.city
                                    },
                                    {
                                        elem : 'recall_status',
                                        content : item.right.status
                                    },
                                    {
                                        elem : 'recall_salary',
                                        content : [
                                            'Прибыль в месяц: ',
                                            {
                                                elem : 'recall_salary_num',
                                                tag : 'span',
                                                content : item.right.salary
                                            }
                                        ]
                                    },
                                    {
                                        elem : 'recall_text',
                                        content : item.right.text
                                    },
                                ]
                            }
                        ]
                    }
                })
            ]
        },
        {
            elem : 'bonus_button_wrapper',
            content : {
                block : 'button',
                mix : { block : 'recall', elem : 'write' },
                mods : { theme : 'orion' },
                text : 'оставить отзыв'
            }
        },
        {
            block : 'hash_wrapper',
            attrs : { id : '5' },
            content : {
                block : 'faq',
                js : true,
                content : {
                    elem : 'wrapper',
                    mix : { block : 'wrapper' },
                    content : [
                        {
                            elem : 'header',
                            content : '4 вопроса, которые задает каждый 2-й наш клиент:'
                        },
                        [
                            {
                                question : 'Какая минимальная партия закупки?',
                                answer : 'Минимальная партия закупки составляет от 10 штук'
                            },
                            {
                                question : 'Как сделать заказ?',
                                answer : 'Вы оставляете заявку или звоните по телефону + 8 (800) 400-11-29<br>Мы высылаем Вам свежий прайс в формате Exel (с пометками на хитах продаж), Вы отмечаете какие Вам интересны и в каком количестве или объясняете нашему менеджеру по телефону.'
                            },
                            {
                                question : 'Как часто меняется прайс лист?',
                                answer : 'В связи с нестабильным курсом доллара прайс меняется каждый день, но Вам не нужно будет запрашивать его все время.<br>Достаточно один раз оставить заявку на сайте и Вы будите получать свежий прайс автоматически каждый день.'
                            },
                            {
                                question : 'Можно ли купить в рассрочку или кредит?',
                                answer : 'Нет, мы не продаем товар в кредит или рассрочку'
                            }
                        ].map(function (item) {
                            return {
                                elem : 'item_container',
                                mix : { block : 'faq', elem : 'answer_hidden' },
                                content : [
                                    {
                                        elem : 'question',
                                        content : [
                                            {
                                                elem : 'question_text',
                                                content : item.question
                                            },
                                            {
                                                elem : 'question_button',
                                                content : [
                                                    'Читать ответ',
                                                    {
                                                        block : 'button',
                                                        mix : { block : 'faq', elem : 'button' },
                                                        mods : { theme : 'orion' },
                                                        text : '>'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem : 'answer',
                                        content : item.answer
                                    }
                                ]
                            };
                        })
                    ]
                }
            }
        },
        {
            elem : 'last_header',
            content : 'Если у Вас остались вопросы звоните по телефону:'
        },
        {
            elem : 'last_header_phone',
            content : {
                tag : 'a',
                attrs : { href : 'tel:+7(499)341-40-55' },
                content : '+7 (499) 341-40-55'
            }
        },
        {
            elem : 'last_sub_header',
            content : 'Наш менеджер ответит на все интересующие вопросы за 2 минуты.'
        },
        {
            elem : 'where_to_buy_header',
            content : 'ГДЕ КУПИТЬ ПРИСТАВКУ DVB-T2 ORION+'
        },
        {
            elem : 'where_to_buy',
            content : 'г. Москва, Пятницкое шоссе, дом 18, павильон 6'
        },
 /*       {
            block : 'partners',
            mix : { block : 'wrapper' },
            content : [
                {
                    elem : 'header',
                    content : 'Наши партнеры:'
                },
                {
                    elem : 'column',
                    content : [
                        {
                            elem : 'region_letter',
                            content : 'Б'
                        },
                        {
                            elem : 'region_name',
                            content : 'Брянская область'
                        },
                        {
                            elem : 'region_item',
                            content : 'г. Брянск, проспект Ленина, «Центральный дом быта» оф.122<br>http://ciberland.ru<br>+7 (4832) 75-38-99, +7 (4832) 303-312'
                        },
                        {
                            elem : 'region_letter',
                            content : 'В'
                        },
                        {
                            elem : 'region_name',
                            content : 'Волгоградская область'
                        },
                        {
                            elem : 'region_item',
                            content : 'г. Волгоград, ул. Танкистов, 9<br>http://компас34.рф/<br>+7 (927) 523-77-07, +7 (8443) 55-40-05,<br>+7 (8442) 78-01-52'
                        },
                        {
                            elem : 'region_item',
                            content : 'г. Волжский, Б-р Профсоюзов, 9<br>http://компас34.рф/<br>+7 (927) 523-77-07, +7 (8443) 55-40-05,<br>+7 (8442) 78-01-52'
                        },
                        {
                            elem : 'region_item',
                            content : 'г. Волжский, ул. Оломоуцкая, д. 35, оф.1<br>http://компас34.рф/<br>+7 (927) 523-77-07, +7 (8443) 55-40-05,<br>+7 (8442) 78-01-52'
                        },
                        {
                            elem : 'region_item',
                            content : 'г. Калач-На-Дону, ул. Октябрьская, 305Б<br>http://компас34.рф/<br>+7 (927) 523-77-07, +7 (8443) 55-40-05,<br>+7 (8442) 78-01-52'
                        },
                        {
                            elem : 'region_item',
                            content : 'г. Михайловка, ул. Обороны д.57<br>http://компас34.рф/<br>+7 (927) 523-77-07, +7 (8443) 55-40-05,<br>+7 (8442) 78-01-52'
                        },
                        {
                            elem : 'region_item',
                            content : 'р.п. Средняя Ахтуба, ул. Пригородная, 2Б<br>http://компас34.рф/<br>+7 (927) 523-77-07, +7 (8443) 55-40-05,<br>+7 (8442) 78-01-52'
                        }
                    ]
                },
                {
                    elem : 'column',
                    content : [
                        {
                            elem : 'region_letter',
                            content : 'М'
                        },
                        {
                            elem : 'region_name',
                            content : 'Москва и Московская область'
                        },
                        {
                            elem : 'region_item',
                            content : 'г. Москва, Пятницкое шоссе, дом 18, павильон 49<br>http://satsupermarket.ru/<br>+7 45-19-60'
                        },
                        {
                            elem : 'region_item',
                            content : 'г. Москва Пятницкое шоссе, 18 тк Митинский радиорынок, пав. 53<br>+7 (915) 077-79-99'
                        },
                        {
                            elem : 'region_item',
                            content : 'г. Москва, 1-ый проезд Перова поля, дом 8<br>http://www.resiver.org, http://perovotv.ru<br>+7 (495) 306-42-00, +7 (495) 306-27-83'
                        },
                        {
                            elem : 'region_item',
                            content : 'г. Москва, ул.Пилота Нестерова, д 5, 3 этаж, офис 8<br>http://3dsattv.ru<br>+7 (495) 609-69-09, +7 (925) 357-20-39'
                        },
                        {
                            elem : 'region_item',
                            content : 'г. Москва, Волгоградский пр-т, д.32, к.8<br>http://mastersvyazi.ru<br>+7 (499) 502-00-00'
                        },
                        {
                            elem : 'region_item',
                            content : 'г. Москва, Марксистская улица д. 5, оф.23<br>http://avs-moscow.ru<br>+7 (495) 798-44-56, +7 (495) 911-00-36,<br>+7 (909) 919-69-60'
                        },
                        {
                            elem : 'region_item',
                            content : 'г. Орехово-Зуево, ул. Володарского д. 106<br>http://trikolor-shop.ru<br>+7 (495) 509-49-84, +7 (926) 898-45-45'
                        },
                        {
                            elem : 'region_item',
                            content : 'Подольский район, г. Климовск, ул. 50 лет октября, д. 13 б<br>+7 (925) 059-40-40'
                        }
                    ]
                },
                {
                    elem : 'column',
                    content : [
                        {
                            elem : 'region_letter',
                            content : 'Р'
                        },
                        {
                            elem : 'region_name',
                            content : 'Рязанская область'
                        },
                        {
                            elem : 'region_item',
                            content : 'г. Рязань, ул. Вокзальная д.15<br>http://www.compvek.com<br>+7 (4912) 51-22-25, +7 (4912) 99-58-82,<br>+7 (915) 590-75-00'
                        },
                        {
                            elem : 'region_letter',
                            content : 'С'
                        },
                        {
                            elem : 'region_name',
                            content : 'Ставропольский край'
                        },
                        {
                            elem : 'region_item',
                            content : 'г. Ставрополь, ул. Рогожникова 9<br>http://radio26.ru<br>+7 (8652) 99-13-22, +7 (918) 746-20-61'
                        }
                    ]
                }
            ]
        },*/
        {
            block : 'footer',
            content : {
                elem : 'wrapper',
                mix : { block : 'wrapper' },
                content : [
                    {
                        elem : 'logo',
                        content : [
                            {
                                block : 'image',
                                mix : { block : 'footer', elem : 'logo_image' },
                                alt : 'ORION+',
                                url : '../../img/logo.png'
                            },
                            {
                                elem : 'description',
                                mix : { block : 'footer', elem : 'description' },
                                content: 'Оптовые продажи приставок для бесплатного цифрового телевидения'
                            }
                        ]
                    },
                    {
                        block : 'edison',
                        mix : { block : 'footer', elem : 'edison' },
                        content : [
                            {
                                elem : 'header',
                                tag : 'a',
                                attrs : { target : '_blank', href : '//edison.bz/sozdanie_lending_peydzh?utm_source=с_сайта_приставок&utm_medium=с_сайта_приставок&utm_campaign=с_сайта_приставок&utm_content=с_сайта_приставок&utm_term=с_сайта_приставок' },
                                content : 'Создание лендинг пейдж'
                            },
                            {
                                elem : 'logo'
                            }
                        ]
                    },
                    {
                        elem : 'callback',
                        content : {
                            block : 'button',
                            mix : { block : 'footer', elem : 'button' },
                            mods : { theme : 'orion' },
                            text : 'Задать свой вопрос'
                        }
                    }
                ]
            }
        },
        {
            block : 'popup_callback',
            content : [
                {
                    elem : 'close_button',
                    content : 'X'
                },
                {
                    elem : 'header',
                    content : 'ЗАДАТЬ СВОЙ ВОПРОС'
                },
                {
                    elem : 'block',
                    content : 'Оставьте заявку и наш менеджер даст исчерпывающий ответ на любой Ваш вопрос'
                },
                {
                    elem : 'block',
                    content : {
                        block : 'input',
                        mods : { theme : 'orion', icon : 'phone' },
                        name : 'phone',
                        placeholder : 'Введите телефон'
                    }
                },
                {
                    elem : 'block',
                    content : {
                        block : 'button',
                        mods : { theme : 'orion' },
                        text : 'ЗАДАТЬ СВОЙ ВОПРОС'
                    }
                }
            ]
        },
        {
            block : 'popup_getsystem',
            content : [
                {
                    elem : 'close_button',
                    content : 'X'
                },
                {
                    elem : 'header',
                    content : 'ПОЛУЧИТЕ СИСТЕМУ ПРОДАЖ'
                },
                {
                    elem : 'block',
                    content : 'Оставьте заявку и наш менеджер расскажет все о пошаговой системе продаж DVB-T2!'
                },
                {
                    elem : 'block',
                    content : {
                        block : 'input',
                        mods : { theme : 'orion', icon : 'phone' },
                        name : 'phone',
                        placeholder : 'Введите телефон'
                    }
                },
                {
                    elem : 'block',
                    content : {
                        block : 'button',
                        mods : { theme : 'orion' },
                        text : 'ПОЛУЧИТЬ СИСТЕМУ ПРОДАЖ'
                    }
                }
            ]
        },
        {
            block : 'popup_getprices',
            content : [
                {
                    elem : 'close_button',
                    content : 'X'
                },
                {
                    elem : 'header',
                    content : 'ПОЛУЧИТЕ ПРАЙС ЛИСТ'
                },
                {
                    elem : 'block',
                    content : 'Оставьте заявку и наш менеджер свяжется с Вами и вышлет прайс на почту'
                },
                {
                    elem : 'block',
                    content : {
                        block : 'input',
                        mods : { theme : 'orion', icon : 'user' },
                        name : 'name',
                        placeholder : 'Введите имя'
                    }
                },
                {
                    elem : 'block',
                    content : {
                        block : 'input',
                        mods : { theme : 'orion', icon : 'phone' },
                        name : 'phone',
                        placeholder : 'Введите телефон'
                    }
                },
                {
                    elem : 'block',
                    content : {
                        block : 'input',
                        mods : { theme : 'orion', icon : 'mail' },
                        name : 'email',
                        placeholder : 'Введите e-mail'
                    }
                },
                {
                    elem : 'block',
                    content : {
                        block : 'button',
                        mods : { theme : 'orion' },
                        text : 'ПОЛУЧИТЬ ПРАЙС ЛИСТ'
                    }
                }
            ]
        },
        {
            block : 'popup_recall',
            mix : { block : 'clearfix' },
            content : [
                {
                    elem : 'close_button',
                    content : 'X'
                },
                {
                    elem : 'side',
                    mods : { align : 'left' },
                    content : [
                        {
                            elem : 'block',
                            content : {
                                block : 'input',
                                mods : { theme : 'orion' },
                                name : 'name',
                                placeholder : 'Введите имя*'
                            }
                        },
                        {
                            elem : 'block',
                            content : {
                                block : 'input',
                                mods : { theme : 'orion' },
                                name : 'lastname',
                                placeholder : 'Введите фамилию*'
                            }
                        },
                        {
                            elem : 'block',
                            content : {
                                block : 'input',
                                mods : { theme : 'orion' },
                                name : 'middlename',
                                placeholder : 'Введите отчество'
                            }
                        },
                        {
                            elem : 'block',
                            content : {
                                block : 'input',
                                mods : { theme : 'orion' },
                                name : 'offer',
                                placeholder : 'Введите номер договора*'
                            }
                        },
                        {
                            elem : 'block',
                            content : {
                                block : 'input',
                                mods : { theme : 'orion' },
                                name : 'salary',
                                placeholder : 'Результат (руб/мес)*'
                            }
                        },
                        {
                            elem : 'block',
                            content : {
                                block : 'input',
                                mods : { theme : 'orion' },
                                name : 'city',
                                placeholder : 'Введите город*'
                            }
                        },
                        {
                            block : 'checkbox',
                            mix : { block : 'popup_recall', elem : 'checkbox' },
                            mods : { theme : 'orion' },
                            name : 'agreement',
                            text : 'Даю согласие на публикацию отзыва на сайте'
                        },
                        {
                            elem : 'comment',
                            content : 'Все поля с * обязательны для заполнения'
                        }
                    ]
                },
                {
                    elem : 'side',
                    mods : { align : 'right' },
                    content : [
                        {
                            elem : 'block',
                            content : {
                                block : 'textarea',
                                mix : { block : 'popup_recall', elem : 'textarea' },
                                mods : { theme : 'orion', width : 'available' },
                                name : 'recall',
                                placeholder : 'Введите текст отзыва'
                            }
                        },
                        {
                            block : 'button',
                            mods : { theme : 'orion' },
                            text : 'ОСТАВИТЬ ОТЗЫВ'
                        }
                    ]
                }
            ]
        },
        {
            block : 'popup_tech',
            content : [
                {
                    elem : 'close_button',
                    content : 'X'
                },
                {
                    elem : 'header',
                    mix : { block : 'popup_tech', elem : 'orion_rs-t19hd' },
                    content : 'ЦИФРОВАЯ ПРИСТАВКА ORION+ RS T 19 HD'
                },
                {
                    elem : 'header',
                    mix : { block : 'popup_tech', elem : 'orion_rs-t20hd' },
                    content : 'ЦИФРОВАЯ ПРИСТАВКА ORION+ RS T 20 HD'
                },
                {
                    elem : 'header',
                    mix : { block : 'popup_tech', elem : 'orion_rs-t21hd' },
                    content : 'ЦИФРОВАЯ ПРИСТАВКА ORION+ RS T 21 HD'
                },
                {
                    elem : 'tabs',
                    content : [
                        {
                            text : 'Характеристики',
                            active : true,
                            num : 1
                        },
                        {
                            text : 'Возможности',
                            num : 2
                        },
                        {
                            text : 'Комплектация',
                            num : 3
                        },
                        {
                            text : 'Обновление ПО',
                            num : 5
                        }
                    ].map(function(item) {
                        return {
                            elem : 'tab',
                            mods : { active : (item.active ? true : '') },
                            attrs : { tabid : item.num },
                            content : item.text
                        }
                    })
                },
                {
                    elem : 'content',
                    content : [
                        {
                            elem : 'tab_content',
                            mods : { num : '1' },
                            content : [
                                {
                                    elem : 'orion_rs-t18hd',
                                    content : [
                                        'Цифровой приёмник Orion+ RS T18 HD с повышенной чувствительностью тюнера и не большого размера возможность крепленияя на заднию панель телевизора ( что делает его очень удобным в использавании) предназначен для просмотра цифрового телевидения (формат DVB-T и DVB-T2) и может использоваться с любым телевизором, имеющим аудио-видео вход или HDMI вход (в том числе и компьютерные мониторы).Автоматическая и ручная настройка всех доступных ТВ и радио каналов,большие возможности мульти медия плеера.',
                                        'Меню управления на русском языке, понятный интерфейс. Управлять устройством вы можете с помощью удобного пульта (поставляется в комплекте). Номер канала, выбранный вами для просмотра, отображается на экране телевизора. Есть возможность подключения LCD дисплея на задней понели приёмника. Orion+ RS T 19 HD вы можете использовать как медиаплеер и как устройство для записи ТВ программ (на внешние USB носитель)',
                                        {
                                            tag : 'ul',
                                            content : [
                                                'Стандард DVB-T/T2',
                                                'Поддержка CD/HD MPEG-4',
                                                'Режим Multiple PLP',
                                                'Телетекст',
                                                'Таймер записи',
                                                'Time Shift',
                                                'Воспроизведение медиафайлов, музыки, фото',
                                                'USB 2.0',
                                                'Шнур 3RCA - 3RCA (тюльпаны)',
                                                'LED-диспелй с индикацией часов и каналов',
                                                'Корпус Пластик',
                                                'Блок питания, внешний',
                                                'Интерфейсы подключения HDMI, RCA',
                                                'Процессор MSТAR 7T01',
                                                'Тюнер R 836',
                                                'Диапазон частот 174-862 МГц',
                                                'Потребляемая мощность 100-240V/ 5V-2A',
                                                'Габариты корпуса, мм. 168/95/38 мм'
                                            ].map(function(item) {
                                                return {
                                                    tag : 'li',
                                                    content : item
                                                }
                                            })
                                        }
                                    ]
                                },
                                {
                                    elem : 'orion_rs-t19hd',
                                    content : [
                                        'Цифровой приёмник Orion+ RS T19 HD с повышенной чувствительностью тюнера и не большого размера возможность крепленияя на заднию панель телевизора ( что делает его очень удобным в использавании) предназначен для просмотра цифрового телевидения (формат DVB-T и DVB-T2) и может использоваться с любым телевизором, имеющим аудио-видео вход или HDMI вход (в том числе и компьютерные мониторы).Автоматическая и ручная настройка всех доступных ТВ и радио каналов,большие возможности мульти медия плеера.',
                                        'Меню управления на русском языке, понятный интерфейс. Управлять устройством вы можете с помощью удобного пульта (поставляется в комплекте). Номер канала, выбранный вами для просмотра, отображается на экране телевизора. Есть возможность подключения LCD дисплея на задней понели приёмника. Orion+ RS T 19 HD вы можете использовать как медиаплеер и как устройство для записи ТВ программ (на внешние USB носитель)',
                                        {
                                            tag : 'ul',
                                            content : [
                                                'Стандард DVB-T/T2',
                                                'Поддержка CD/HD MPEG-4',
                                                'Режим Multiple PLP',
                                                'Телетекст',
                                                'Таймер записи',
                                                'Time Shift',
                                                'Воспроизведение медиафайлов, музыки, фото',
                                                'USB 2.0',
                                                'Корпус Пластик',
                                                'Блок питания, внешний',
                                                'Интерфейсы подключения HDMI, RCA',
                                                'Процессор MSТAR 7T01',
                                                'Тюнер R 836',
                                                'Диапазон частот 174-862 МГц',
                                                'Потребляемая мощность 100-240V/ 5V-2A',
                                                'Габариты корпуса, мм. 120/70/22 мм'
                                            ].map(function(item) {
                                                return {
                                                    tag : 'li',
                                                    content : item
                                                }
                                            })
                                        }
                                    ]
                                },
                                {
                                    elem : 'orion_rs-t20hd',
                                    content : [
                                        'Цифровой приёмник Orion+ RS T20 HD с повышенной чувствительностью тюнера и не большими размерами в металлическом корпусе,предназначен для просмотра цифрового телевидения (формат DVB-T и DVB-T2) и может использоваться с любым телевизором, или компьютерным монитором имеющим аудио-видео вход или HDMI вход . Управлять устройством вы можете как с помощью удобного пульта (поставляется в комплекте), так и с помощью кнопок, расположенных на передней панели устройства. Номер канала, выбранный вами для просмотра, отображается на лицевой части ресивера, а в режиме ожидания отоброжается текущее время. Orion+ RS T 20 HD вы можете использовать как медиаплеер и как устройство для записи ТВ программ (на внешние USB носители)',
                                        {
                                            tag : 'ul',
                                            content : [
                                                'Стандард DVB-T/T2',
                                                'Поддержка CD/HD MPEG-4',
                                                'Режим Multiple PLP',
                                                'Телетекст',
                                                'Таймер записи',
                                                'Time Shift',
                                                'Воспроизведение медиафайлов, музыки, фото',
                                                'USB 2.0',
                                                'Шнур 3RCA - 3RCA (тюльпаны)',
                                                'LED-диспелй с индикацией часов и каналов',
                                                'Корпус Метал',
                                                'Блок питания, внешний',
                                                'Интерфейсы подключения HDMI, RCA',
                                                'Процессор MSТAR 7T01',
                                                'Тюнер R 836',
                                                'Диапазон частот 174-862 МГц',
                                                'Потребляемая мощность 100-240V/ 5V-2A',
                                                'Габариты корпуса, мм.145/95/35 мм'
                                            ].map(function(item) {
                                                return {
                                                    tag : 'li',
                                                    content : item
                                                }
                                            })
                                        }
                                    ]
                                },
                                {
                                    elem : 'orion_rs-t21hd',
                                    content : [
                                        'Цифровой приёмник Orion+ RS T21 HD ( самая популярная модель) с повышенной чувствительностью тюнера предназначен для просмотра цифрового телевидения (формат DVB-T и DVB-T2) и может использоваться с любым телевизором, или компьютерным монитором имеющим аудио-видео вход или HDMI вход. Управлять устройством вы можете как с помощью удобного пульта (поставляется в комплекте), так и с помощью кнопок, расположенных на передней панели устройства. Номер канала, выбранный вами для просмотра, отображается на лицевой части ресивера.Orion+ RS T 21 HD вы можете использовать как медиаплеер и как устройство для записи ТВ программ (на внешние USB носители)',
                                        {
                                            tag : 'ul',
                                            content : [
                                                'Стандард DVB-T/T2',
                                                'Поддержка CD/HD MPEG-4',
                                                'Режим Multiple PLP',
                                                'Телетекст',
                                                'Таймер записи',
                                                'Time Shift',
                                                'Воспроизведение медиафайлов, музыки, фото',
                                                'USB 2.0',
                                                'Шнур 3RCA - 3RCA (тюльпаны)',
                                                'LED-диспелй с индикацией часов и каналов',
                                                'Корпус Метал',
                                                'Блок питания, внешний',
                                                'Интерфейсы подключения HDMI, RCA',
                                                'Процессор MSТAR 7T01',
                                                'Тюнер R 836',
                                                'Диапазон частот 174-862 МГц',
                                                'Потребляемая мощность 100-240V/ 5V-2A',
                                                'Габариты корпуса, мм. 168/95/38 мм'
                                            ].map(function(item) {
                                                return {
                                                    tag : 'li',
                                                    content : item
                                                }
                                            })
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem : 'tab_content',
                            mods : { num : '2' },
                            content : [
                                {
                                    elem : 'orion_rs-t18hd',
                                    content : {
                                        tag : 'ul',
                                        content : [
                                            'Поддерживаемые стандарты: DVB-T2 и DVB-T HD/SD, поддержка режима Multiple PLP',
                                            'Автоматическая и ручная настройка всех доступных ТВ и радио каналов',
                                            'Меню управления на русском языке, удобное меню и понятный интерфейс',
                                            'Поддержка субтитров и Телетекста, TimeShift - функция отложенного просмотра',
                                            'Электронный программный гид 7 дней (EPG)',
                                            'Функция «Родительский контроль»',
                                            'Функция удаления каналов, сортировка, пропуск каналов, создание списка любимых каналов',
                                            'Запись ТВ программ на внешние USB накопители',
                                            'Обновление программного обеспечения через USB 2.0',
                                            'Аудио-Видео выход HDMI 1.3 для высококачественного изображения',
                                            'Аудио-Видео выходы RCA (CVBS, Audio R,L)',
                                            'Поддержка функции TimeShift (возможность поставить прямой эфир «на паузу» и вернуться к просмотру с того же самого места позднее).',
                                            'Таймеры включения/записи/отключения',
                                            'ANT OUT функция подключения и передачи сигнала на другие приставки',
                                            'Отображение номера канала на передней панели приёмника, в режиме ожидания текущее время'
                                        ].map(function(item) {
                                            return {
                                                tag : 'li',
                                                content : item
                                            }
                                        })
                                    }
                                },
                                {
                                    elem : 'orion_rs-t19hd',
                                    content : {
                                        tag : 'ul',
                                        content : [
                                            'Поддерживаемые стандарты: DVB-T2 и DVB-T HD/SD, поддержка режима Multiple PLP',
                                            'Автоматическая и ручная настройка всех доступных ТВ и радио каналов',
                                            'Меню управления на русском языке, удобное меню и понятный интерфейс',
                                            'Поддержка субтитров и Телетекста, TimeShift - функция отложенного просмотра',
                                            'Электронный программный гид 7 дней (EPG)',
                                            'Функция «Родительский контроль»',
                                            'Функция удаления каналов, сортировка, пропуск каналов, создание списка любимых каналов',
                                            'Запись ТВ программ на внешние USB накопители',
                                            'Обновление программного обеспечения через USB 2.0',
                                            'Аудио-Видео выход HDMI 1.3 для высококачественного изображения',
                                            'Аудио-Видео выходы RCA (CVBS, Audio R,L)',
                                            'Поддержка функции TimeShift (возможность поставить прямой эфир «на паузу» и вернуться к просмотру с того же самого места позднее).',
                                            'Таймеры включения/записи/отключения',
                                            'ANT OUT функция подключения и передачи сигнала на другие приставки',
                                            'Отображение номера канала на передней панели приёмника, в режиме ожидания текущее время'
                                        ].map(function(item) {
                                            return {
                                                tag : 'li',
                                                content : item
                                            }
                                        })
                                    }
                                },
                                {
                                    elem : 'orion_rs-t20hd',
                                    content : {
                                        tag : 'ul',
                                        content : [
                                            'Поддерживаемые стандарты: DVB-T2 и DVB-T HD/SD, поддержка режима Multiple PLP',
                                            'Автоматическая и ручная настройка всех доступных ТВ и радио каналов',
                                            'Меню управления на русском языке, удобное меню и понятный интерфейс',
                                            'Поддержка субтитров и Телетекста, TimeShift - функция отложенного просмотра',
                                            'Электронный программный гид 7 дней (EPG)',
                                            'Функция «Родительский контроль»',
                                            'Функция удаления каналов, сортировка, пропуск каналов, создание списка любимых каналов',
                                            'Запись ТВ программ на внешние USB накопители',
                                            'Обновление программного обеспечения через USB 2.0',
                                            'Аудио-Видео выход HDMI 1.3 для высококачественного изображения',
                                            'Аудио-Видео выходы RCA (CVBS, Audio R,L)',
                                            'Поддержка функции TimeShift (возможность поставить прямой эфир «на паузу» и вернуться к просмотру с того же самого места позднее).',
                                            'Таймеры включения/записи/отключения',
                                            'Отображение номера канала на передней панели приёмника, в режиме ожидания текущее время'
                                        ].map(function(item) {
                                            return {
                                                tag : 'li',
                                                content : item
                                            }
                                        })
                                    }
                                },
                                {
                                    elem : 'orion_rs-t21hd',
                                    content : {
                                        tag : 'ul',
                                        content : [
                                            'Поддерживаемые стандарты: DVB-T2 и DVB-T HD/SD, поддержка режима Multiple PLP',
                                            'Автоматическая и ручная настройка всех доступных ТВ и радио каналов',
                                            'Меню управления на русском языке, удобное меню и понятный интерфейс',
                                            'Поддержка субтитров и Телетекста, TimeShift - функция отложенного просмотра',
                                            'Электронный программный гид 7 дней (EPG)',
                                            'Функция «Родительский контроль»',
                                            'Функция удаления каналов, сортировка, пропуск каналов, создание списка любимых каналов',
                                            'Запись ТВ программ на внешние USB накопители',
                                            'Обновление программного обеспечения через USB 2.0',
                                            'Аудио-Видео выход HDMI 1.3 для высококачественного изображения',
                                            'Аудио-Видео выходы RCA (CVBS, Audio R,L)',
                                            'Поддержка функции TimeShift (возможность поставить прямой эфир «на паузу» и вернуться к просмотру с того же самого места позднее).',
                                            'Таймеры включения/записи/отключения',
                                            'ANT OUT функция подключения и передачи сигнала на другие приставки',
                                            'Отображение номера канала на передней панели приёмника, в режиме ожидания текущее время'
                                        ].map(function(item) {
                                            return {
                                                tag : 'li',
                                                content : item
                                            }
                                        })
                                    }
                                }
                            ]
                        },
                        {
                            elem : 'tab_content',
                            mods : { num : '3' },
                            content : [
                                {
                                    elem : 'orion_rs-t18hd',
                                    content : {
                                        tag : 'ul',
                                        content : [
                                            'Приёмник для цифрового ТВ 1шт',
                                            'Кабель ( RCA ) Тюльпаны 1шт',
                                            'Пульт дистанционного управления 1 шт',
                                            'Батарейки ААА типа для пульта дистанционного управления 2 шт',
                                            'Внешний блок питания ( адаптер )',
                                            'Инструкция пользователя'
                                        ].map(function(item) {
                                            return {
                                                tag : 'li',
                                                content : item
                                            }
                                        })
                                    }
                                },
                                {
                                    elem : 'orion_rs-t19hd',
                                    content : {
                                        tag : 'ul',
                                        content : [
                                            'Приёмник для цифрового ТВ 1шт',
                                            'Выносной ИК- порт 1 шт',
                                            'Кабель Jack- Тюльпаны 1шт',
                                            'Крепление приёмника 1 шт',
                                            'Пульт дистанционного управления 1 шт',
                                            'Батарейки ААА типа для пульта дистанционного управления 2 шт',
                                            'Внешний блок питания ( адаптер )',
                                            'Инструкция пользователя'
                                        ].map(function(item) {
                                            return {
                                                tag : 'li',
                                                content : item
                                            }
                                        })
                                    }
                                },
                                {
                                    elem : 'orion_rs-t20hd',
                                    content : {
                                        tag : 'ul',
                                        content : [
                                            'Приёмник для цифрового ТВ 1шт',
                                            'Кабель ( RCA ) Тюльпаны 1шт',
                                            'Пульт дистанционного управления 1 шт',
                                            'Батарейки ААА типа для пульта дистанционного управления 2 шт',
                                            'Внешний блок питания ( адаптер )',
                                            'Инструкция пользователя'
                                        ].map(function(item) {
                                            return {
                                                tag : 'li',
                                                content : item
                                            }
                                        })
                                    }
                                },
                                {
                                    elem : 'orion_rs-t21hd',
                                    content : {
                                        tag : 'ul',
                                        content : [
                                            'Приёмник для цифрового ТВ 1шт',
                                            'Кабель ( RCA ) Тюльпаны 1шт',
                                            'Пульт дистанционного управления 1 шт',
                                            'Батарейки ААА типа для пульта дистанционного управления 2 шт',
                                            'Внешний блок питания ( адаптер )',
                                            'Инструкция пользователя'
                                        ].map(function(item) {
                                            return {
                                                tag : 'li',
                                                content : item
                                            }
                                        })
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            elem : 'metrika',
            content : '<!-- Yandex.Metrika counter --> <script type="text/javascript"> (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter35033825 = new Ya.Metrika({ id:35033825, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/35033825" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->'
        },
        {
            elem : 'callback-hunter',
            content : '<script type="text/javascript" src="//cdn.callbackhunter.com/cbh.js?hunter_code=188f3a6367fb7a66c74f8b85a5bdb10e" charset="UTF-8"></script>'
        }
    ]
};
