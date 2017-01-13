import Vue from 'vue';
/**
 * 全局注册弱提示
 */
export default {
    install() {
        let timer = null;
        let index = 0;
        Vue.prototype.$show = (msg) => {
          index++;
          if(index >=2){
            return
          }
            clearTimeout(timer);
           let newDiv = document.createElement("div");
               newDiv.id = 'totalAlert';
               newDiv.setAttribute('class','total-alert')
               newDiv.innerHTML = msg;
               newDiv.setAttribute('class','total-alert alert-show')
               document.querySelector("#app").appendChild(newDiv);
              timer = setTimeout(() => {
                newDiv.parentNode.removeChild(newDiv);
                index = 0
              }, 2000);
        };
    }
};
