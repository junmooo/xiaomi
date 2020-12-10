const mysql = require('mysql');

const superagent = require('superagent')

const cheerio = require('cheerio')

superagent.get('https://www.mi.com/search?keyword=%E6%89%8B%E6%9C%BA').end((err,data) => {
    if (err) return console.log('爬取页面失败')
    console.log(data.text);
    parsePage(data.text)
})

function parsePage(page) {
    const $ = cheerio.load(page)
    const lis = []
    $('.span16 ul li').each(function(index,item) {
        const obj ={
          goods_img: $(item).find('img').prop('src'),
          title: $(item).find('.title').text(),
          desc: $(item).find('.desc').text(),
          price: $(item).find('span.num').text(),
        }
        lis.push(obj)
    })
    console.log(lis);
}

