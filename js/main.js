let scrolld = document.querySelector('.content__right')

scrolld.addEventListener('scroll', function () {
   let title = document.querySelector('.title-now')
   title.classList.toggle('stiky', this.scrollTop >= 2)
})

