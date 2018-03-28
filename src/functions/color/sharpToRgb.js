/**
 * @file 转换带#的颜色值到rgb颜色值
 * @author Marx
 * @since 2018-03-23
 */

/**
 * 转换带#的颜色值到rgb颜色值
 *
 * @param {string} colorString 带#颜色值
 * @return {string} rgb颜色值
 */
export default function (colorString) {
    const colorNum = colorString.replace('#', '');
    const colors = [];
    if (colorNum.length === 6) {
        colors[0] = colorNum.slice(0, 2);
        colors[1] = colorNum.slice(2, 4);
        colors[2] = colorNum.slice(4);
    }
    if (colorNum.length === 3) {
        colors[0] = colorNum.slice(0, 1) + colorNum.slice(0, 1);
        colors[1] = colorNum.slice(1, 2) + colorNum.slice(1, 2);
        colors[2] = colorNum.slice(2) + colorNum.slice(2);
    }
    return colors.map(color => parseInt(color, 16)).join(',');
}
