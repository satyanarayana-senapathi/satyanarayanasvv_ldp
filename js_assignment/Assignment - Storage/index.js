
window.localStorage.setItem('local',window.localStorage.getItem('local')||0);
window.sessionStorage.setItem('sessional',0);
function gen(){
    document.getElementById('local').textContent=window.localStorage.getItem('local');
    document.getElementById('sessional').textContent=window.sessionStorage.getItem('sessional');
}
function increment1(){
      window.localStorage.setItem('local',parseInt(window.localStorage.getItem('local'))+1);
      document.getElementById('local').textContent=window.localStorage.getItem('local');
}
function increment2(){
    window.sessionStorage.setItem('sessional',parseInt(window.sessionStorage.getItem('sessional'))+1);
    document.getElementById('sessional').textContent=window.sessionStorage.getItem('sessional');
}

