/**
 * @file js实现栈
 * @author Marx
 */

/**
 * 栈实现代码
 * 
 * @class
 */
function Stack() {
    
    /**
     * 用数组来保存栈的元素
     */
    var items = [];
    
    /**
     * 向栈中添加数据的方法push()
     * 
     * @param {any} element 要向栈中添加的数据
     */
    this.push = function(element){
        items.push(element);
    };
    
    /**
     * 从栈中移除数据的方法pop()
     * 
     * @return {any} 被移除的元素
     */
    this.pop = function(){
        return items.pop();
    };
    
    /**
     * 返回栈顶的元素peek()
     * 
     * @return {any} 栈顶的元素
     */
    this.peek = function(){
        return items[items.length-1];
    };
    
    /**
     * 返回是否为空栈
     * 
     * @return {boolean} 是否为空栈
     */
    this.isEmpty = function(){
        return items.length == 0;
    };

    /**
     * 返回栈的大小
     * 
     * @return {number} 栈的大小
     */
    this.size = function(){
        return items.length;
    };

    /**
     * 清空栈
     */
    this.clear = function(){
        items = [];
    };
    
    /**
     * 打印栈
     */
    this.print = function(){
        console.log(items.toString());
    };
}