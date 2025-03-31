// 创建一个脚本来检测事件是否被使用

function checkEventUsage(obj, eventName) {
  // 检查是否有监听器
  if (obj._events && obj._events[eventName] && 
      (obj._events[eventName].length > 0 || typeof obj._events[eventName] === 'function')) {
    console.log(`Event ${eventName} has listeners attached.`);
    return true;
  }
  
  // 检查原型链上的事件处理器是否被重写
  const descriptor = Object.getOwnPropertyDescriptor(obj, eventName);
  if (descriptor && (descriptor.get || descriptor.set || typeof descriptor.value === 'function')) {
    console.log(`Event ${eventName} has been overridden or has handlers defined.`);
    return true;
  }
  
  console.log(`Event ${eventName} appears to be unused.`);
  return false;
}

// 使用示例
// 假设 gizwitsWS 是一个全局变量或从某处导入
// checkEventUsage(gizwitsWS, 'onOnlineStatus');
