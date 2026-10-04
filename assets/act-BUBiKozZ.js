import{O as m,L as z,l as W,c as _,g as D,a as c,A as I,b as Q,p as Z,s as ee,i as ae,N as G,P as J,d as te,e as b,f as p,h as se,j as V,k as ne,D as ie,E as oe}from"./state-DUmvdShx.js";/* empty css              */const Y=new URLSearchParams(window.location.search),l=document.getElementById("app"),k=[{key:"skill",label:"Habilidade",icon:"bolt"},{key:"spell",label:"Magia",icon:"sparkle"},{key:"passive",label:"Passiva",icon:"shield"}],re=M=>k.find(E=>E.key===M.type)||k[0];m.onReady(async()=>{var U,q;const M=await m.player.getId(),E=await m.player.getRole();let x;try{if(x=Y.get("char"),!x){const t=Y.get("token");x=(q=(U=(t?await m.scene.items.getItems([t]):[])[0])==null?void 0:U.metadata)==null?void 0:q[z]}}catch{l.innerHTML='<div class="card"><div class="empty">Não consegui carregar esta ficha agora. Feche e tenta de novo.</div></div>';return}if(!x){l.innerHTML='<div class="card"><div class="empty">Este token ainda não tem ficha.<br>Clique com o botão direito nele e escolha <b>Vincular ficha</b>.</div></div>';return}let f;try{f=await W(m)}catch{l.innerHTML='<div class="card"><div class="empty">Não consegui carregar os dados desta cena. Feche e tenta de novo.</div></div>';return}let N=await _(m),L=D(f,N),u="stats";const y=new Set;let T=JSON.stringify(f),S=!1;const g=()=>f.characters[x],$=async()=>{T=JSON.stringify(f),await se(m,f)},H=(t,a,e,s,n,i)=>{const o=c(n[a]/(n[e]||1)*100,0,100),r=s==="hp"&&V(n),d=s==="hp"&&(r||o<=0)?r?"crisis":"low":"",h=s==="hp"?'<div class="vhalf" title="Limiar de Crise"></div>':"";return`
      <div class="vital">
        <button class="round-btn sm" data-step="${a}:-5" ${i} aria-label="Diminuir ${t} em 5">⟪</button>
        <button class="round-btn" data-step="${a}:-1" ${i} aria-label="Diminuir ${t}">−</button>
        <div class="vbar" data-drag="${a}:${e}" role="slider" aria-label="${t}" aria-valuemin="0" aria-valuemax="${n[e]}" aria-valuenow="${n[a]}">
          <div class="vfill ${s} ${d}" style="width:${o}%"></div>
          ${h}
          <span class="vtag">${p(s==="hp"?"heart":"droplet","sm")}${s==="hp"&&r?" <b>CRISE</b>":""}</span>
          <span class="vnums"><input type="text" inputmode="numeric" class="vcur" data-f="${a}" value="${n[a]}" ${i} aria-label="${t} atual (aceita +6, -6 ou 10 + 3)" title="Aceita atalhos: +6, -6 ou 10 + 3"/><i>/</i><input type="number" data-f="${e}" value="${n[e]}" ${i} aria-label="${t} máximo"/></span>
        </div>
        <button class="round-btn" data-step="${a}:1" ${i} aria-label="Aumentar ${t}">+</button>
        <button class="round-btn sm" data-step="${a}:5" ${i} aria-label="Aumentar ${t} em 5">⟫</button>
      </div>`},P=(t,a,e,s,n)=>`
    <div class="stat">
      <span class="stat-name">${t} ${a}</span>
      <div class="stat-row">
        <button class="round-btn sm" data-step="${e}:-1" ${n} aria-label="Diminuir ${a}">−</button>
        <input type="number" data-f="${e}" value="${s[e]}" ${n}/>
        <button class="round-btn sm" data-step="${e}:1" ${n} aria-label="Aumentar ${a}">+</button>
      </div>
    </div>`,A=(t,a,e,s,n)=>`
    <div class="stat">
      <span class="stat-name">${t} ${a}</span>
      <div class="stat-row solo"><input type="number" data-f="${e}" value="${s[e]}" ${n}/></div>
    </div>`,R=(t,a,e,s)=>`
    <button class="cond ${s} ${a.conditions[t.key]?"on":""}" data-cond="${t.key}" aria-pressed="${!!a.conditions[t.key]}" ${e}>
      <span class="cond-mark">${p(t.icon)}</span><span class="cond-label">${t.label}</span></button>`;function K(t,a){return u==="stats"?`<div class="attr-grid">${ne.map(e=>`
        <div class="attr" title="${e.name}">
          <div class="attr-head"><b>${e.short}</b><span>${e.name}</span></div>
          <div class="dice">${ie.map(s=>`<button class="die ${t.attrs[e.key]===s?"on":""}" data-die="${e.key}:${s}" ${a}>d${s}</button>`).join("")}</div>
        </div>`).join("")}</div>`:u==="cond"?`<div class="cond-head neg">Negativas</div><div class="cond-grid">${G.map(e=>R(e,t,a,"neg")).join("")}</div>
              <div class="cond-head pos">Positivas</div><div class="cond-grid">${J.map(e=>R(e,t,a,"pos")).join("")}</div>`:u==="inv"?`<div class="inv">${t.inventory.map((e,s)=>`<div class="inv-row"><span>${b(e)}</span><button class="x-btn" data-inv-del="${s}" ${a} aria-label="Remover ${b(e)}">×</button></div>`).join("")||'<div class="empty">Inventário vazio.</div>'}</div>
              <div class="inv-add"><input type="text" id="inv-new" placeholder="Adicionar item…" maxlength="40" ${a}/><button class="round-btn" id="inv-add" ${a} aria-label="Adicionar">+</button></div>`:u==="affin"?`<div class="affin-grid">${oe.map(e=>{const s=t.affinities[e.key]||"normal",n=I.find(i=>i.key===s)||I[0];return`<button class="affin ${s}" data-affin="${e.key}" ${a} title="${n.label}">
          <span class="affin-el">${e.label}</span><span class="affin-badge">${n.short}</span></button>`}).join("")}</div>
      <div class="empty" style="padding-top:10px">Clique pra alternar: Normal → Resiste → Vulnerável → Imune → Absorve.</div>`:`<div class="powers">
      ${t.powers.map(e=>{const s=re(e);return`
        <div class="power ${y.has(e.id)?"open":""}">
          <div class="power-head" data-power-toggle="${e.id}" aria-expanded="${y.has(e.id)}">
            <button class="power-type" data-power-type="${e.id}" title="Tipo: ${s.label} (clique pra trocar)" ${a}>${p(s.icon,"sm")}</button>
            <input type="text" class="power-name" data-power-name="${e.id}" value="${b(e.name)}" placeholder="Nome do poder" maxlength="60" ${a}/>
            ${e.cost?`<span class="power-cost">${b(e.cost)}</span>`:""}
            ${p("chevron","chev")}
          </div>
          <div class="power-body">
            <div class="power-meta">
              <span class="power-type-label">${p(s.icon,"sm")} ${s.label}</span>
              <input type="text" class="power-cost-input" data-power-cost="${e.id}" value="${b(e.cost||"")}" placeholder="Custo (ex: 5 PM)" maxlength="20" ${a}/>
            </div>
            <textarea data-power-desc="${e.id}" placeholder="Descrição, alvo, efeito…" rows="3" ${a}>${b(e.desc)}</textarea>
            <button class="x-btn" data-power-del="${e.id}" ${a} aria-label="Remover poder">${p("trash","sm")} Remover</button>
          </div>
        </div>`}).join("")||'<div class="empty">Nenhum poder cadastrado.</div>'}
      <button class="wide-btn ghost" id="power-add" ${a}>${p("plus","sm")} Novo poder</button>
    </div>`}function v(){const t=g();if(!t){l.innerHTML='<div class="card"><div class="empty">Ficha não encontrada.</div></div>';return}if(ae(t,L)&&E!=="GM"){l.innerHTML='<div class="card"><div class="empty">🔒 As informações desta criatura são segredo do mestre.</div></div>';return}const a=t.ownerId===M||E==="GM"?"":"disabled";j=a==="";const e=[...G,...J].filter(s=>t.conditions[s.key]).length;l.innerHTML=`
      <div class="card">
        <header class="card-head">
          <div class="avatar">
            <div class="avatar-ring"><div class="avatar-img">${te(t)}</div></div>
            <label class="lvl" title="Nível"><input type="number" data-f="level" value="${t.level}" ${a} aria-label="Nível"/></label>
          </div>
          <div class="head-text">
            <input class="name-input" type="text" data-f="name" value="${b(t.name)}" maxlength="18" ${a} aria-label="Nome"/>
            ${t.isEnemy?`<input class="rank-input" type="text" data-f="rank" value="${b(t.rank)}" placeholder="Rank (Tropa, Elite, Chefe…)" maxlength="24" ${a} aria-label="Rank"/>`:`<span class="head-sub">Personagem · Nível ${t.level}</span>`}
          </div>
        </header>

        <section class="vitals">${H("HP","hp","maxHp","hp",t,a)}${H("MP","mp","maxMp","mp",t,a)}</section>

        <section class="stats">
          ${P(p("star","sm"),t.isEnemy?"Ultima":"Fábula","fp",t,a)}${P(p("bag","sm"),"Inventário","ip",t,a)}
          ${A(p("shield","sm"),"Defesa","def",t,a)}${A(p("sparkle","sm"),"D. Mágica","mdef",t,a)}
        </section>

        <nav class="seg">
          <button class="seg-btn ${u==="stats"?"on":""}" data-tab="stats">Atributos</button>
          <button class="seg-btn ${u==="cond"?"on":""}" data-tab="cond">Condições${e?` <em>${e}</em>`:""}</button>
          <button class="seg-btn ${u==="inv"?"on":""}" data-tab="inv">Itens <em>${t.inventory.length}</em></button>
          <button class="seg-btn ${u==="powers"?"on":""}" data-tab="powers">Poderes <em>${t.powers.length}</em></button>
          <button class="seg-btn ${u==="affin"?"on":""}" data-tab="affin">Afinidades</button>
        </nav>
        <section class="card-body">${K(t,a)}</section>
      </div>`}const C=()=>l.contains(document.activeElement)&&/INPUT|SELECT/.test(document.activeElement.tagName),O=()=>{if(C()){S=!0;return}v()};let j=!1,w=null;function X(t,a,e){const s=t.getBoundingClientRect(),n=s.width?c((a-s.left)/s.width,0,1):0;return Math.round(n*e)}function B(t){const a=g();if(!a||!w)return;const{stat:e,maxStat:s,bar:n}=w;a[e]=c(X(n,t,a[s]),0,a[s]);const i=c(a[e]/(a[s]||1)*100,0,100),o=n.querySelector(".vfill"),r=n.querySelector(`input[data-f="${e}"]`);if(o&&(o.style.width=i+"%"),r&&(r.value=a[e]),e==="hp"&&o){const d=V(a);o.classList.toggle("crisis",d),o.classList.toggle("low",!d&&i<=0);const h=n.querySelector(".vtag");h&&(h.innerHTML=p("heart","sm")+(d?" <b>CRISE</b>":""))}}l.addEventListener("pointerdown",t=>{if(!j)return;const a=t.target.closest("[data-drag]");if(!a||t.target.tagName==="INPUT")return;const[e,s]=a.dataset.drag.split(":");w={stat:e,maxStat:s,bar:a},a.setPointerCapture(t.pointerId),B(t.clientX)}),l.addEventListener("pointermove",t=>{w&&B(t.clientX)}),l.addEventListener("pointerup",async()=>{w&&(w=null,v(),await $())}),l.addEventListener("click",async t=>{const a=t.target.closest("[data-power-type]");if(a){const o=g();if(!o||a.disabled)return;const r=o.powers.find(d=>d.id===a.dataset.powerType);if(r){const d=k.findIndex(h=>h.key===(r.type||"skill"));r.type=k[(d+1)%k.length].key,v(),await $()}return}const e=t.target.closest("[data-power-toggle]");if(e&&t.target.tagName!=="INPUT"){const o=e.dataset.powerToggle;y.has(o)?y.delete(o):y.add(o),v();return}const s=t.target.closest("button");if(!s)return;const n=g(),i=s.dataset;if(i.tab){u=i.tab,v();return}if(!(!n||s.disabled)){if(i.step){const[o,r]=i.step.split(":"),d={hp:n.maxHp,mp:n.maxMp,fp:99,ip:99}[o];n[o]=c(n[o]+parseInt(r,10),0,d)}else if(i.die){const[o,r]=i.die.split(":");n.attrs[o]=parseInt(r,10)}else if(i.cond)n.conditions[i.cond]=!n.conditions[i.cond];else if(i.affin){const o=n.affinities[i.affin]||"normal",r=I.findIndex(d=>d.key===o);n.affinities[i.affin]=I[(r+1)%I.length].key}else if(i.invDel!==void 0)n.inventory.splice(parseInt(i.invDel,10),1);else if(s.id==="inv-add"){const o=document.getElementById("inv-new"),r=o.value.trim();if(!r||n.inventory.length>=30)return;n.inventory.push(r.slice(0,40)),o.value=""}else if(s.id==="power-add"){if(n.powers.length>=40)return;const o=Q();n.powers.push({id:o,name:"",desc:"",type:"skill",cost:""}),y.add(o)}else if(i.powerDel!==void 0)n.powers=n.powers.filter(o=>o.id!==i.powerDel),y.delete(i.powerDel);else return;v(),await $()}}),l.addEventListener("keydown",async t=>{if(t.key==="Enter"&&t.target.id==="inv-new"){document.getElementById("inv-add").click();return}if(t.target.classList.contains("vcur")&&(t.key==="ArrowUp"||t.key==="ArrowDown")){t.preventDefault();const a=g();if(!a||t.target.disabled)return;const e=t.target.dataset.f,s=e==="hp"?"maxHp":"maxMp";a[e]=c(a[e]+(t.key==="ArrowUp"?1:-1),0,a[s]),t.target.value=a[e],await $()}});const F={hp:[0,"maxHp"],mp:[0,"maxMp"],fp:[0,99],ip:[0,99],def:[0,99],mdef:[0,99],level:[1,99]};l.addEventListener("change",async t=>{const a=t.target,e=g();if(!e)return;if(a.dataset.powerName!==void 0){const n=e.powers.find(i=>i.id===a.dataset.powerName);n&&(n.name=a.value.trim().slice(0,60)),await $();return}if(a.dataset.powerCost!==void 0){const n=e.powers.find(i=>i.id===a.dataset.powerCost);n&&(n.cost=a.value.trim().slice(0,20)),await $(),C()||v();return}if(a.dataset.powerDesc!==void 0){const n=e.powers.find(i=>i.id===a.dataset.powerDesc);n&&(n.desc=a.value.slice(0,2e3)),await $();return}const s=a.dataset.f;if(s){if(s==="name")e.name=a.value.trim().slice(0,18)||e.name;else if(s==="rank")e.rank=a.value.trim().slice(0,24);else if(s==="hp"||s==="mp"){const n=s==="hp"?"maxHp":"maxMp";e[s]=c(Math.round(Z(a.value,e[s])),0,e[n]),a.value=e[s]}else if(s==="maxHp"){const n=parseInt(a.value,10);e.maxHp=c(n,1,9999),e.hp=c(e.hp,0,e.maxHp)}else if(s==="maxMp"){const n=parseInt(a.value,10);e.maxMp=c(n,0,9999),e.mp=c(e.mp,0,e.maxMp)}else if(F[s]){const n=parseInt(a.value,10),[i,o]=F[s];e[s]=c(n,i,typeof o=="string"?e[o]:o)}else return;await $(),C()||v()}}),l.addEventListener("focusout",()=>{S&&(S=!1,setTimeout(v,60))}),m.party.onChange(async()=>{N=await _(m),L=D(f,N),O()}),m.scene.onMetadataChange(t=>{const a=ee(t),e=JSON.stringify(a);e!==T&&(T=e,f=a,L=D(f,N),O())}),v()});
