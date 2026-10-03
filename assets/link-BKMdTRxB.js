import{O as a,l as y,L as l,e as I,f as h,b as L,u as $,d as b,m as R}from"./state-BRBlYLjA.js";/* empty css              */const c=new URLSearchParams(window.location.search).get("token"),o=document.getElementById("app"),T=`${R}/link-popover`;a.onReady(async()=>{var g,f;const p=await a.player.getId(),m=await a.player.getRole();let n,i;try{n=await y(a),i=(c?await a.scene.items.getItems([c]):[])[0]}catch{o.innerHTML='<div class="card"><div class="empty">Não consegui carregar os dados desta cena. Feche e tenta de novo.</div></div>';return}if(!i){o.innerHTML='<div class="card"><div class="empty">Token não encontrado.</div></div>';return}const r=(g=i.metadata)==null?void 0:g[l],v=((f=i.image)==null?void 0:f.url)||"",u=()=>a.popover.close(T);async function k(t){await a.scene.items.updateItems([c],s=>{for(const d of s)d.metadata[l]=t});const e=n.characters[t];e&&!e.portrait&&v&&(e.portrait=v,await b(a,n)),u()}const w=Object.entries(n.characters).filter(([,t])=>t.ownerId===p||m==="GM");o.innerHTML=`
    <div class="card">
      <div class="card-title">Vincular token</div>
      <div class="pick-list">
        ${w.length?w.map(([t,e])=>`
          <button class="pick ${t===r?"on":""}" data-id="${t}">
            <span class="pick-ptr">${I(e)}</span>
            <span class="pick-name">${h(e.name)}</span>
            ${t===r?'<span class="pick-tag">vinculado</span>':""}
          </button>`).join(""):'<div class="empty">Você ainda não tem nenhuma ficha.</div>'}
      </div>
      <button class="wide-btn" id="btn-new">+ Criar ficha nova e vincular</button>
      ${r?'<button class="wide-btn ghost" id="btn-unlink">Desvincular este token</button>':""}
    </div>`,o.addEventListener("click",async t=>{const e=t.target.closest(".pick");if(e){await k(e.dataset.id);return}if(t.target.id==="btn-new"){const s=L();n.characters[s]=$(p,"Novo personagem",m==="GM"),await b(a,n),await k(s)}else t.target.id==="btn-unlink"&&(await a.scene.items.updateItems([c],s=>{for(const d of s)delete d.metadata[l]}),u())})});
