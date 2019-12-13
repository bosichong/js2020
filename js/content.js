/**
 * 
 * 用来读取markdown内容并加载到页面中
 * 
 */

var conname = getQueryVariable('p') //获得要加载Markdown文章的序列号。
var mkurl = './articles/' + conname + '.md' //组装URL地址
// alert(mkurl)
loadMarkdown(mkurl,"rt")




    
