import{O as n,l as i,s as c,a as l,e as d}from"./state-DUmvdShx.js";/* empty css              */const m=document.getElementById("app");n.onReady(async()=>{let a;try{a=await i(n)}catch{return}let o=JSON.stringify(a);r(),n.scene.onMetadataChange(e=>{try{const s=c(e),t=JSON.stringify(s);if(t===o)return;o=t,a=s,r()}catch{}});function r(){const e=Object.values(a.characters).filter(s=>s.isBoss&&s.bossShown);m.innerHTML=e.map(s=>{const t=l(s.hp/(s.maxHp||1)*100,0,100);return`
        <div class="boss-card">
          <div class="boss-name">${d(s.name)}</div>
          <div class="boss-track"><div class="boss-fill ${t<=30?"low":""}" style="width:${t}%"></div></div>
        </div>`}).join("")}});
