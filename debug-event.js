// 临时调试代码

// 假设gizwitsWS是可访问的
console.log('Original onOnlineStatus handler:', gizwitsWS.onOnlineStatus);

// 添加一个代理来跟踪事件是否被使用
const originalHandler = gizwitsWS.onOnlineStatus;
gizwitsWS.onOnlineStatus = function(...args) {
  console.log('onOnlineStatus was called!', args);
  if (originalHandler) {
    return originalHandler.apply(this, args);
  }
};

// 一段时间后检查
setTimeout(() => {
  console.log('If you see this message without seeing "onOnlineStatus was called!", the event might not be used.');
}, 60000); // 等待1分钟
