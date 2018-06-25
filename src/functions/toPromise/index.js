/**
 * @file 同步函数转换成返回 Promise 的函数
 * @author Marx
 */

/**
 * 同步函数转换成返回 Promise 的函数
 *
 * @param {Function} fn 要转换的同步函数
 * @return {Promise}
 */
export default function (fn) {
    return function (...params) {
        return new Promise((resolve, reject) => {
            try {
                const result = fn(...params);
                resolve(result);
            }
            catch (err) {
                reject(err);
            }
        });
    };
}
