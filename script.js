Vue.component('book', {
    template: 'books',
    props: ['title, author', 'content']
});

new Vue ({
    el: '#app',
    data: {
        author: 'David Flanagan1111',
        title: 'JavaScript the Guide',
        content: 'COntent of this book'
    }
})