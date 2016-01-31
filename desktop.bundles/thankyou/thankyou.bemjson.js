module.exports = {
    block : 'page',
    title : 'Спасибо за заявку',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : 'Спасибо за заявку' } },
        { elem : 'meta', attrs : { name : 'keywords', content : 'Спасибо за заявку' } },
        { elem : 'meta', attrs : { name : 'author', content : 'Mikhail Makarov' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'meta', attrs : { name : 'robots', content : 'noindex, nofollow' } },
        { elem : 'css', url : 'thankyou.min.css' }
    ],
    content : [
        {
            elem : 'thankyou',
            content : {
                elem : 'thankyou_content',
                content : [
                    {
                        content : 'Спасибо за заявку, наш менеджер свяжется с Вами в течении 15 минут'
                    },
                    {
                        tag : 'a',
                        attrs : { href : 'index.html' },
                        content : 'Вернуться назад'
                    }
                ]
            }
        },
        {
            tag : 'script',
            content : 'setTimeout(function(){window.location.href="index.html";},5000);'
        }
    ]
}