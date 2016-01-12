module.exports = {
    block : 'page',
    title : 'ORION+',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : 'ORION+' } },
        { elem : 'meta', attrs : { name : 'keywords', content : 'ORION+' } },
        { elem : 'meta', attrs : { name : 'author', content : 'Mikhail Makarov' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '../../libs/normalize-css/normalize.css' },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [
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
                            block : 'menu-item',
                            val : 1,
                            content : 'ДОСТУП К ЦЕНАМ'
                        },
                        {
                            block : 'menu-item',
                            val : 1,
                            content : 'КАТАЛОГ'
                        },
                        {
                            block : 'menu-item',
                            val : 1,
                            content : 'РАСЧЕТ ЗАРАБОТКА ПО РЕГИОНУ'
                        },
                        {
                            block : 'menu-item',
                            val : 1,
                            content : 'ОТЗЫВЫ'
                        },
                        {
                            block : 'menu-item',
                            val : 1,
                            content : 'ВОПРОСЫ'
                        }
                    ]
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
                                            block : 'phone',
                                            content : '8 (800) 400-11-29'
                                        },
                                        {
                                            block : 'callback',
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
                        content : 'Приставки DTB-T2 с&nbsp;возможностью наценки до&nbsp;100% в условиях кризиса!'
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
                                    elem : 'box_center',
                                    content : {
                                        block : 'image',
                                        url : '../../img/box-center.png'
                                    }
                                }
                            ]
                        },
                        {
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
                    ]
                }
            ]
        },
        {
            elem : 'second_screen_header',
            tag : 'h2',
            content : '9 бонусов, которые позволяют отлично зарабатывать на продаже DTB-T2!'
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
                mods : { theme : 'orion' },
                text : 'Получить отлаженную систему продаж'
            }
        },
        {
            block : 'screen_header',
            content : {
                elem : 'text',
                content : 'КАТАЛОГ'
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
                                content : 'ORION+&nbsp;RS&nbsp;T&nbsp;19&nbsp;HD'
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
            block : 'calc_screen',
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
                                        block : 'input',
                                        mods : { theme : 'orion' },
                                        type : 'search',
                                        placeholder : 'Введите регион'
                                    },
                                    {
                                        block : 'input',
                                        mods : { theme : 'orion' },
                                        type : 'search',
                                        placeholder : 'Введите город'
                                    },
                                    {
                                        block : 'button',
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
                                                mix : { block : 'calc_screen', elem : 'calc_line_input' },
                                                mods : { theme : 'orion_short', type : 'search' },
                                                val : '50000'
                                            }
                                        ]
                                    },
                                    {
                                        elem : 'slider_purchases',
                                        content : 'ЗДЕСЬ БУДЕТ СЛАЙДЕР'
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
                                                mix : { block : 'calc_screen', elem : 'calc_line_input' },
                                                mods : { theme : 'orion_short', type : 'search' },
                                                val : '50000'
                                            }
                                        ]
                                    },
                                    {
                                        elem : 'slider_outgoings',
                                        content : 'ЗДЕСЬ БУДЕТ СЛАЙДЕР'
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
                            }
                        ]
                    }
                ]
            }
        },
        {
            block : 'screen_header',
            content : {
                elem : 'text',
                content : 'Посмотрите результаты наших клиентов'
            }
        },
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
                                content : 'Этот сайт увидел свет в рекламной студии'
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
        }
    ]
};
