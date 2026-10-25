document.querySelectorAll('[data-panel]').forEach(button=>button.addEventListener('click',()=>document.getElementById(button.dataset.panel+'-panel').showModal()));
document.querySelectorAll('dialog').forEach(dialog=>{
 dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close();});
 dialog.addEventListener('close',()=>{dialog.querySelectorAll('iframe').forEach(frame=>{const src=frame.getAttribute('src');frame.setAttribute('src',src);});dialog.querySelectorAll('audio,video').forEach(media=>media.pause());});
});
