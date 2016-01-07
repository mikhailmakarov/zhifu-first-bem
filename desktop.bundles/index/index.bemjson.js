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
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    content : [
        {
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
                                            content : [
                                                {
                                                    block : 'image',
                                                    alt : 'ORION+',
                                                    url : '../../img/logo.png'
                                                }
                                            ]
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
                        content : 'Приставки DTB-T2 <br> с возможностью наценки <br> до 100% в условиях кризиса!'
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
                    content : {
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
                    }
                }
            ]
        },
        {
            block : 'content',
            content : [
                'content goes here'
            ]
        },
        {
            block : 'footer',
            content : {
                block : 'wrapper',
                content : [
                    'footer content goes here'
                ]
            }
        }
    ]
};
