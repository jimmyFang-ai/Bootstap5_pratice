const modalByDelete = document.querySelector('#deleteModal');

// 打開 modal 觸發事件監聽
modalByDelete.addEventListener('show.bs.modal' , (event)=> {
   const botton = event.relatedTarget; // 指向 刪除按鈕的標籤元素
   const orderId = botton.dataset.bsOrderId;
  
//  選取modal 元素中 deleteText 
   const modalText = modalByDelete.querySelector('#deleteText');
   modalText.textContent = orderId;
})