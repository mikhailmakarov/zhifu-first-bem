module.exports = {
    block : 'page',
    title : 'ORION+',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : 'ORION+' } },
        { elem : 'meta', attrs : { name : 'keywords', content : 'ORION+' } },
        { elem : 'meta', attrs : { name : 'author', content : 'Mikhail Makarov (mikhail@makarov.us)' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'header',
            content : [
                'header content goes here'
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
            content : [
                'footer content goes here'
            ]
        }
    ]
};
