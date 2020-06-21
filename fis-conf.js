//npm install -g fis-parser-node-sass
fis.match('**/*.scss', {
    rExt: '.css', // from .scss to .css
    parser: fis.plugin('node-sass', {
        //fis-parser-node-sass option
    })
});

fis.match('template/*', {
    // 设置 release 为 FALSE，不再产出此文件
    release: false
}).match('fis-conf.js', {
    release: false
}).match('*.json', {
    release: false
}).match('*.md', {
    release: false
})


fis.set('project.ignore', [
    'dist/**',
    'node_modules/**',
    '.git/**',
    '.svn/**'
]);