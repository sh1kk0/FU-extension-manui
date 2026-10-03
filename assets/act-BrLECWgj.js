import{O as v,L as W,l as Q,c as _,g as H,a as c,A as I,b as Z,p as ee,s as te,d as ae,i as G,N as J,P as V,e as se,f as y,h as m,j as Y,k as ne,D as ie,E as oe}from"./state-BRBlYLjA.js";/* empty css              */const K=new URLSearchParams(window.location.search),l=document.getElementById("app"),N=[{key:"skill",label:"Habilidade",icon:"bolt"},{key:"spell",label:"Magia",icon:"sparkle"},{key:"passive",label:"Passiva",icon:"shield"}],re=L=>N.find(k=>k.key===L.type)||N[0];v.onReady(async()=>{var U,q;const L=await v.player.getId(),k=await v.player.getRole();let x;try{if(x=K.get("char"),!x){const a=K.get("token");x=(q=(U=(a?await v.scene.items.getItems([a]):[])[0])==null?void 0:U.metadata)==null?void 0:q[W]}}catch{l.innerHTML='<div class="card"><div class="empty">Não consegui carregar esta ficha agora. Feche e tenta de novo.</div></div>';return}if(!x){l.innerHTML='<div class="card"><div class="empty">Este token ainda não tem ficha.<br>Clique com o botão direito nele e escolha <b>Vincular ficha</b>.</div></div>';return}let f;try{f=await Q(v)}catch{l.innerHTML='<div class="card"><div class="empty">Não consegui carregar os dados desta cena. Feche e tenta de novo.</div></div>';return}let E=await _(v),M=H(f,E),p="stats";const b=new Set;let S=JSON.stringify(f),T=!1;const g=()=>f.characters[x],$=async()=>{S=JSON.stringify(f),await ae(v,f)},P=(a,t,e,s,n,i)=>{const o=c(n[t]/(n[e]||1)*100,0,100),r=s==="hp"&&Y(n),d=s==="hp"&&(r||o<=0)?r?"crisis":"low":"",h=s==="hp"?'<div class="vhalf" title="Limiar de Crise"></div>':"";return`
      <div class="vital">
        <button class="round-btn sm" data-step="${t}:-5" ${i} aria-label="Diminuir ${a} em 5">⟪</button>
        <button class="round-btn" data-step="${t}:-1" ${i} aria-label="Diminuir ${a}">−</button>
        <div class="vbar" data-drag="${t}:${e}" role="slider" aria-label="${a}" aria-valuemin="0" aria-valuemax="${n[e]}" aria-valuenow="${n[t]}">
          <div class="vfill ${s} ${d}" style="width:${o}%"></div>
          ${h}
          <span class="vtag">${a}${s==="hp"&&r?" · CRISE":""}</span>
          <span class="vnums"><input type="text" inputmode="numeric" class="vcur" data-f="${t}" value="${n[t]}" ${i} aria-label="${a} atual (aceita +6, -6 ou 10 + 3)" title="Aceita atalhos: +6, -6 ou 10 + 3"/><i>/</i><input type="number" data-f="${e}" value="${n[e]}" ${i} aria-label="${a} máximo"/></span>
        </div>
        <button class="round-btn" data-step="${t}:1" ${i} aria-label="Aumentar ${a}">+</button>
        <button class="round-btn sm" data-step="${t}:5" ${i} aria-label="Aumentar ${a} em 5">⟫</button>
      </div>`},D=(a,t,e,s,n)=>`
    <div class="stat">
      <span class="stat-name">${a} ${t}</span>
      <div class="stat-row">
        <button class="round-btn sm" data-step="${e}:-1" ${n} aria-label="Diminuir ${t}">−</button>
        <input type="number" data-f="${e}" value="${s[e]}" ${n}/>
        <button class="round-btn sm" data-step="${e}:1" ${n} aria-label="Aumentar ${t}">+</button>
      </div>
    </div>`,A=(a,t,e,s,n)=>`
    <div class="stat">
      <span class="stat-name">${a} ${t}</span>
      <div class="stat-row solo"><input type="number" data-f="${e}" value="${s[e]}" ${n}/></div>
    </div>`,R=(a,t,e,s)=>`
    <button class="cond ${s} ${t.conditions[a.key]?"on":""}" data-cond="${a.key}" aria-pressed="${!!t.conditions[a.key]}" ${e}>
      <span class="cond-mark">${m(a.icon)}</span><span class="cond-label">${a.label}</span></button>`;function X(a,t){return p==="stats"?`<div class="attr-grid">${ne.map(e=>`
        <div class="attr" title="${e.name}">
          <div class="attr-head"><b>${e.short}</b><span>${e.name}</span></div>
          <div class="dice">${ie.map(s=>`<button class="die ${a.attrs[e.key]===s?"on":""}" data-die="${e.key}:${s}" ${t}>d${s}</button>`).join("")}</div>
        </div>`).join("")}</div>`:p==="cond"?`<div class="cond-head neg">Negativas</div><div class="cond-grid">${J.map(e=>R(e,a,t,"neg")).join("")}</div>
              <div class="cond-head pos">Positivas</div><div class="cond-grid">${V.map(e=>R(e,a,t,"pos")).join("")}</div>`:p==="inv"?`<div class="inv">${a.inventory.map((e,s)=>`<div class="inv-row"><span>${y(e)}</span><button class="x-btn" data-inv-del="${s}" ${t} aria-label="Remover ${y(e)}">×</button></div>`).join("")||'<div class="empty">Inventário vazio.</div>'}</div>
              <div class="inv-add"><input type="text" id="inv-new" placeholder="Adicionar item…" maxlength="40" ${t}/><button class="round-btn" id="inv-add" ${t} aria-label="Adicionar">+</button></div>`:p==="affin"?`<div class="affin-grid">${oe.map(e=>{const s=a.affinities[e.key]||"normal",n=I.find(i=>i.key===s)||I[0];return`<button class="affin ${s}" data-affin="${e.key}" ${t} title="${n.label}">
          <span class="affin-el">${e.label}</span><span class="affin-badge">${n.short}</span></button>`}).join("")}</div>
      <div class="empty" style="padding-top:10px">Clique pra alternar: Normal → Resiste → Vulnerável → Imune → Absorve.</div>`:`<div class="powers">
      ${a.powers.map(e=>{const s=re(e);return`
        <div class="power ${b.has(e.id)?"open":""}">
          <div class="power-head" data-power-toggle="${e.id}" aria-expanded="${b.has(e.id)}">
            <button class="power-type" data-power-type="${e.id}" title="Tipo: ${s.label} (clique pra trocar)" ${t}>${m(s.icon,"sm")}</button>
            <input type="text" class="power-name" data-power-name="${e.id}" value="${y(e.name)}" placeholder="Nome do poder" maxlength="60" ${t}/>
            ${e.cost?`<span class="power-cost">${y(e.cost)}</span>`:""}
            ${m("chevron","chev")}
          </div>
          <div class="power-body">
            <div class="power-meta">
              <span class="power-type-label">${m(s.icon,"sm")} ${s.label}</span>
              <input type="text" class="power-cost-input" data-power-cost="${e.id}" value="${y(e.cost||"")}" placeholder="Custo (ex: 5 PM)" maxlength="20" ${t}/>
            </div>
            <textarea data-power-desc="${e.id}" placeholder="Descrição, alvo, efeito…" rows="3" ${t}>${y(e.desc)}</textarea>
            <button class="x-btn" data-power-del="${e.id}" ${t} aria-label="Remover poder">${m("trash","sm")} Remover</button>
          </div>
        </div>`}).join("")||'<div class="empty">Nenhum poder cadastrado.</div>'}
      <button class="wide-btn ghost" id="power-add" ${t}>${m("plus","sm")} Novo poder</button>
    </div>`}function u(){const a=g();if(!a){l.innerHTML='<div class="card"><div class="empty">Ficha não encontrada.</div></div>';return}if(G(a,M)&&k!=="GM"){l.innerHTML='<div class="card"><div class="empty">🔒 As informações desta criatura são segredo do mestre.</div></div>';return}const t=a.ownerId===L||k==="GM"?"":"disabled";j=t==="";const e=[...J,...V].filter(s=>a.conditions[s.key]).length;l.innerHTML=`
      <div class="card">
        <header class="card-head">
          <div class="avatar">
            <div class="avatar-ring"><div class="avatar-img">${se(a)}</div></div>
            <label class="lvl" title="Nível"><input type="number" data-f="level" value="${a.level}" ${t} aria-label="Nível"/></label>
          </div>
          <div class="head-text">
            <input class="name-input" type="text" data-f="name" value="${y(a.name)}" maxlength="18" ${t} aria-label="Nome"/>
            <span class="head-sub">${G(a,M)?"🔒 Criatura":"Personagem"} · Nível ${a.level}</span>
          </div>
        </header>

        <section class="vitals">${P("HP","hp","maxHp","hp",a,t)}${P("MP","mp","maxMp","mp",a,t)}</section>

        <section class="stats">
          ${D(m("star","sm"),"Fábula","fp",a,t)}${D(m("bag","sm"),"Inventário","ip",a,t)}
          ${A(m("shield","sm"),"Defesa","def",a,t)}${A(m("sparkle","sm"),"D. Mágica","mdef",a,t)}
        </section>

        <nav class="seg">
          <button class="seg-btn ${p==="stats"?"on":""}" data-tab="stats">Atributos</button>
          <button class="seg-btn ${p==="cond"?"on":""}" data-tab="cond">Condições${e?` <em>${e}</em>`:""}</button>
          <button class="seg-btn ${p==="inv"?"on":""}" data-tab="inv">Itens <em>${a.inventory.length}</em></button>
          <button class="seg-btn ${p==="powers"?"on":""}" data-tab="powers">Poderes <em>${a.powers.length}</em></button>
          <button class="seg-btn ${p==="affin"?"on":""}" data-tab="affin">Afinidades</button>
        </nav>
        <section class="card-body">${X(a,t)}</section>
      </div>`}const C=()=>l.contains(document.activeElement)&&/INPUT|SELECT/.test(document.activeElement.tagName),O=()=>{if(C()){T=!0;return}u()};let j=!1,w=null;function z(a,t,e){const s=a.getBoundingClientRect(),n=s.width?c((t-s.left)/s.width,0,1):0;return Math.round(n*e)}function B(a){const t=g();if(!t||!w)return;const{stat:e,maxStat:s,bar:n}=w;t[e]=c(z(n,a,t[s]),0,t[s]);const i=c(t[e]/(t[s]||1)*100,0,100),o=n.querySelector(".vfill"),r=n.querySelector(`input[data-f="${e}"]`);if(o&&(o.style.width=i+"%"),r&&(r.value=t[e]),e==="hp"&&o){const d=Y(t);o.classList.toggle("crisis",d),o.classList.toggle("low",!d&&i<=0);const h=n.querySelector(".vtag");h&&(h.textContent=d?"HP · CRISE":"HP")}}l.addEventListener("pointerdown",a=>{if(!j)return;const t=a.target.closest("[data-drag]");if(!t||a.target.tagName==="INPUT")return;const[e,s]=t.dataset.drag.split(":");w={stat:e,maxStat:s,bar:t},t.setPointerCapture(a.pointerId),B(a.clientX)}),l.addEventListener("pointermove",a=>{w&&B(a.clientX)}),l.addEventListener("pointerup",async()=>{w&&(w=null,u(),await $())}),l.addEventListener("click",async a=>{const t=a.target.closest("[data-power-type]");if(t){const o=g();if(!o||t.disabled)return;const r=o.powers.find(d=>d.id===t.dataset.powerType);if(r){const d=N.findIndex(h=>h.key===(r.type||"skill"));r.type=N[(d+1)%N.length].key,u(),await $()}return}const e=a.target.closest("[data-power-toggle]");if(e&&a.target.tagName!=="INPUT"){const o=e.dataset.powerToggle;b.has(o)?b.delete(o):b.add(o),u();return}const s=a.target.closest("button");if(!s)return;const n=g(),i=s.dataset;if(i.tab){p=i.tab,u();return}if(!(!n||s.disabled)){if(i.step){const[o,r]=i.step.split(":"),d={hp:n.maxHp,mp:n.maxMp,fp:99,ip:99}[o];n[o]=c(n[o]+parseInt(r,10),0,d)}else if(i.die){const[o,r]=i.die.split(":");n.attrs[o]=parseInt(r,10)}else if(i.cond)n.conditions[i.cond]=!n.conditions[i.cond];else if(i.affin){const o=n.affinities[i.affin]||"normal",r=I.findIndex(d=>d.key===o);n.affinities[i.affin]=I[(r+1)%I.length].key}else if(i.invDel!==void 0)n.inventory.splice(parseInt(i.invDel,10),1);else if(s.id==="inv-add"){const o=document.getElementById("inv-new"),r=o.value.trim();if(!r||n.inventory.length>=30)return;n.inventory.push(r.slice(0,40)),o.value=""}else if(s.id==="power-add"){if(n.powers.length>=40)return;const o=Z();n.powers.push({id:o,name:"",desc:"",type:"skill",cost:""}),b.add(o)}else if(i.powerDel!==void 0)n.powers=n.powers.filter(o=>o.id!==i.powerDel),b.delete(i.powerDel);else return;u(),await $()}}),l.addEventListener("keydown",async a=>{if(a.key==="Enter"&&a.target.id==="inv-new"){document.getElementById("inv-add").click();return}if(a.target.classList.contains("vcur")&&(a.key==="ArrowUp"||a.key==="ArrowDown")){a.preventDefault();const t=g();if(!t||a.target.disabled)return;const e=a.target.dataset.f,s=e==="hp"?"maxHp":"maxMp";t[e]=c(t[e]+(a.key==="ArrowUp"?1:-1),0,t[s]),a.target.value=t[e],await $()}});const F={hp:[0,"maxHp"],mp:[0,"maxMp"],fp:[0,99],ip:[0,99],def:[0,99],mdef:[0,99],level:[1,99]};l.addEventListener("change",async a=>{const t=a.target,e=g();if(!e)return;if(t.dataset.powerName!==void 0){const n=e.powers.find(i=>i.id===t.dataset.powerName);n&&(n.name=t.value.trim().slice(0,60)),await $();return}if(t.dataset.powerCost!==void 0){const n=e.powers.find(i=>i.id===t.dataset.powerCost);n&&(n.cost=t.value.trim().slice(0,20)),await $(),C()||u();return}if(t.dataset.powerDesc!==void 0){const n=e.powers.find(i=>i.id===t.dataset.powerDesc);n&&(n.desc=t.value.slice(0,2e3)),await $();return}const s=t.dataset.f;if(s){if(s==="name")e.name=t.value.trim().slice(0,18)||e.name;else if(s==="hp"||s==="mp"){const n=s==="hp"?"maxHp":"maxMp";e[s]=c(Math.round(ee(t.value,e[s])),0,e[n]),t.value=e[s]}else if(s==="maxHp"){const n=parseInt(t.value,10);e.maxHp=c(n,1,9999),e.hp=c(e.hp,0,e.maxHp)}else if(s==="maxMp"){const n=parseInt(t.value,10);e.maxMp=c(n,0,9999),e.mp=c(e.mp,0,e.maxMp)}else if(F[s]){const n=parseInt(t.value,10),[i,o]=F[s];e[s]=c(n,i,typeof o=="string"?e[o]:o)}else return;await $(),C()||u()}}),l.addEventListener("focusout",()=>{T&&(T=!1,setTimeout(u,60))}),v.party.onChange(async()=>{E=await _(v),M=H(f,E),O()}),v.scene.onMetadataChange(a=>{const t=te(a),e=JSON.stringify(t);e!==S&&(S=e,f=t,M=H(f,E),O())}),u()});
