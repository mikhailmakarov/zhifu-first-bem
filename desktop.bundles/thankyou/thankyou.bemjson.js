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
            elem : 'metrika',
            content : '<!-- Yandex.Metrika counter --> <script type="text/javascript"> (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter35033825 = new Ya.Metrika({ id:35033825, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/35033825" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->'
        },
        {
            tag : 'script',
            content : 'setTimeout(function(){window.location.href="index.html";},5000);'
        }
    ]
}