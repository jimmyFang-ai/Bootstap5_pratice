// 選取動元素
  // 展開按鈕
const toggleMenuBtn = document.querySelector('#toggled-btn');
  // 選取整個body 
const body = document.querySelector('body');

// 利用點擊 toggledBtn 動作觸發 監聽的事件
toggleMenuBtn.addEventListener('click' , (evt) => {
   evt.preventDefault; // 取消 a 標籤預設行為 (返回頂端功能)
   // 在body 上添加寫好的 .sidebar-toggled 進行切換
   body.classList.toggle('sidebar-toggled');
})

