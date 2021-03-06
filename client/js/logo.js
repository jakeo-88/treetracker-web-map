const entity = require("./entity");

const logo = {
  name: "logo",
  load: async function(url, container){
    let src = "/img/logo_floating_map.svg";
    const m = url.match(/.*wallet=(.\S+)/);
    console.log("m:", m);
    let wallet;
    if(m){
      wallet = m[1];
    }else{
      const at = url.match(/https?:\/\.*.*@(.\S+)/);
      if(at){
        wallet = at[1];
      }
    }
    if(wallet){
      const entities = await entity.getByWallet(wallet);
      if(entities && entities.length > 0 && entities[0].logo_url){
        src = entities[0].logo_url;
      }
    }
    container.innerHTML = `<img alt='logo' src='${src}'>`;
  },
};

module.exports = logo;
