// console.log('Request');

// setTimeout(function(){
//     console.log("Preparing data...");
//     const backend = {
//         server: 202,
//         host: 'local'
//     }
//     setTimeout(function(){
//         console.log('Data ', backend);
//     }, 2000)
// }, 2000);
const delay = ms =>{
    return new Promise(resolve => setTimeout(()=>resolve(),ms))
}
const url = 'https://api.vk.com/method/friends.search?user_id=532495994&v=5.131&access_token=e3ea6d9157f76fd17fac7313fc7c90f759d576edf168c1303ee6774059fad4950909a4ec60ee280746ca3&callback=callbackFunc"';

// function get_fetch(){
//     return delay(2000).then(()=>{
//         return fetch(url)
//     }).then(response => response.json())
// }
// get_fetch()
// .then(data =>{
//     console.log('Data', data);
// })
// .catch(e => console.error(e));
async function fetchAsync(){
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
}
var array = new Array();
var script = document.createElement('script');
script.src = url;
document.getElementsByTagName("head")[0].appendChild(script);
function callbackFunc(result) {
    console.log(result);
    var str = result.count;
    console.log(str);

}


 const URL = "e3ea6d9157f76fd17fac7313fc7c90f759d576edf168c1303ee6774059fad4950909a4ec60ee280746ca3";