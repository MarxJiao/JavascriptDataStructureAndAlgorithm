/**
 * @file 数组去重
 *
 * @author Marx
 */

/**
 * 数组去重
 *
 * @param {Array} ele 要去重的数组
 * @return {Array} 去重后的数组
 */
function getNoRepeatArr(ele) {
    var newArr = [];
    for (var i = 0, len = ele.length; i < len; i++) {
        var notRepeat = true;
        for (var j = 0; j < i; j++) {
            if (ele[j] === ele[i]) {
                notRepeat = false;
            }
        }
        if (notRepeat) {
            newArr.push(ele[i]);
        }
    }
    return newArr;
}
