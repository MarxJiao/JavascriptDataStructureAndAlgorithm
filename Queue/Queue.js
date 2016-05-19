/**
 * @file js实现队列
 * @author Marx
 */

/**
 * 队列类
 * 
 * @class
 */
function Queue() {
    
    /**
     * 用数组储存队列元素
     */
    var items = [];
    
    /**
     * 向队列中添加元素
     * @param {any} element 要添加的元素
     */
    this.enqueue = function(element){
        items.push(element);
    };
    
    /**
     * 从队列中删除元素
     * @return {any} 被删除的元素
     */
    this.dequeue = function(){
        return items.shift();
    };
    
    /**
     * 返回队列的头部
     * @return {any} 对列的头部
     */
    this.front = function(){
        return items[0];
    };

    /**
     * 返回队列是否为空
     * @return {boolean} 队列是否为空
     */
    this.isEmpty = function(){
        return items.length == 0;
    };

    /**
     * 清空队列
     */
    this.clear = function(){
        items = [];
    };
    
    /**
     * 返回队列长度
     * @return {number} 队列长度
     */
    this.size = function(){
        return items.length;
    };
    
    /**
     * 打印队列
     */
    this.print = function(){
        console.log(items.toString());
    };
}