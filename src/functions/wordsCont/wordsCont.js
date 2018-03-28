/**
 * @file 给定英文文章，获取文章中重复单词的个数
 * @author Marx
 */

var article = 'ha ha ha ha aaa bbb aaa aaa ccc cccc ccc';
var arr = article.split(' ');
var wordCont = {}
for (var i = 0; i < arr.length; i++) {
    if (wordCont[arr[i]]) {
        continue;
    }
    else {
        wordCont[arr[i]] = 1;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                wordCont[arr[i]] += 1;
            }
        }
    }
}

console.log(wordCont);