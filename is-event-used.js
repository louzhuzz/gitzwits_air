// 简单的事件使用检测工具

function isEventUsed(obj, eventName) {
  // 方法1：检查对象上是否存在该属性的自定义实现
  if (Object.prototype.hasOwnProperty.call(obj, eventName) && 
      typeof obj[eventName] !== 'undefined') {
    return true;
  }
  
  // 方法2：如果使用EventEmitter，检查是否有监听器
  if (typeof obj.listeners === 'function') {
    const listeners = obj.listeners(eventName);
    return listeners && listeners.length > 0;
  }
  
  // 方法3：如果有自定义的_events存储
  if (obj._events && obj._events[eventName]) {
    return true;
  }
  
  return false;
}

// 示例使用：
// const isUsed = isEventUsed(gizwitsWS, 'onOnlineStatus');
// console.log(`onOnlineStatus is ${isUsed ? 'used' : 'not used'}`);
