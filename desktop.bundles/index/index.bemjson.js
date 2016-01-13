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
                            },
                            {
                                elem : 'calc_line',
                                content : 'Здесь выбор наценки'
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
                            group : 5
                        },
                        {
                            text : 'Магазины электроники и бытовой техники',
                            group : 6
                        },
                        {
                            text : 'Магазины CD/DVD',
                            group : 7
                        },
                        {
                            text : 'Магазины товаров для&nbsp;дома',
                            group : 8
                        },
                        {
                            text : 'Магазины радиотоваров',
                            group : 9
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
                            text : 'Занимаюсь установкой антенного оборудования, сам я монтажник. Периодически работа стационарных антен не устраивает клиентов и я предлагаю установку DTB-T2. Не было ни одного возврата. Товар отличный!'
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
                            salary : '-',
                            text : 'Являюсь управляющим менеджером "Связного". Товар поступил к нам не так давно. План выполнили по нему достаточно просто, к моему удивлению. Оказывается мало у кого есть хорошее цифровое телевидение.'
                        },
                        right : {
                            image : 'astakhovkm',
                            fio : 'Астахов Константин Михайлович',
                            city : 'Щелково',
                            status : 'Салоны сотовой связи',
                            salary : '-',
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
                            text : 'Приобрел приставки для расширения товарного выбора. Покупают достаточно часто. За месяц сделал 40 000 руб только на приставках dtb-t2!'
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
            block : 'faq',
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
        },
        {
            elem : 'last_header',
            content : 'Если у Вас остались вопросы звоните по телефону:'
        },
        {
            elem : 'last_header_phone',
            content : '8 (800) 400-11-29'
        },
        {
            elem : 'last_sub_header',
            content : 'Наш менеджер ответит на все интересующие вопросы за 2 минуты.'
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
