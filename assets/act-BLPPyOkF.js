import{O as f,L as X,l as W,c as _,g as T,a as u,A as I,b as Z,p as Q,s as ee,i as ae,N as G,P as z,d as te,e as v,f as c,h as se,j as J,k as ne,D as ie,E as re}from"./state-BBULZNc2.js";/* empty css              */const V=new URLSearchParams(window.location.search),l=document.getElementById("app"),q=[{key:"skill",label:"Habilidade",icon:"bolt"},{key:"spell",label:"Magia",icon:"sparkle"},{key:"passive",label:"Passiva",icon:"shield"}],oe=N=>q.find(E=>E.key===N.type)||q[0];f.onReady(async()=>{var F,U;const N=await f.player.getId(),E=await f.player.getRole();let x;try{if(x=V.get("char"),!x){const t=V.get("token");x=(U=(F=(t?await f.scene.items.getItems([t]):[])[0])==null?void 0:F.metadata)==null?void 0:U[X]}}catch{l.innerHTML='<div class="card"><div class="empty">Não consegui carregar esta ficha agora. Feche e tenta de novo.</div></div>';return}if(!x){l.innerHTML='<div class="card"><div class="empty">Este token ainda não tem ficha.<br>Clique com o botão direito nele e escolha <b>Vincular ficha</b>.</div></div>';return}let $;try{$=await W(f)}catch{l.innerHTML='<div class="card"><div class="empty">Não consegui carregar os dados desta cena. Feche e tenta de novo.</div></div>';return}let k=await _(f),A=T($,k),p="stats";const y=new Set;let M=JSON.stringify($),S=!1;const g=()=>$.characters[x],b=async()=>{M=JSON.stringify($),await se(f,$)},D=(t,e,a,s,n,i)=>{const r=u(n[e]/(n[a]||1)*100,0,100),o=s==="hp"&&J(n),d=s==="hp"&&(o||r<=0)?o?"crisis":"low":"",h=s==="hp"?'<div class="vhalf" title="Limiar de Crise"></div>':"";return`
      <div class="vital">
        <button class="round-btn sm" data-step="${e}:-5" ${i} aria-label="Diminuir ${t} em 5">⟪</button>
        <button class="round-btn" data-step="${e}:-1" ${i} aria-label="Diminuir ${t}">−</button>
        <div class="vbar" data-drag="${e}:${a}" role="slider" aria-label="${t}" aria-valuemin="0" aria-valuemax="${n[a]}" aria-valuenow="${n[e]}">
          <div class="vfill ${s} ${d}" style="width:${r}%"></div>
          ${h}
          <span class="vtag">${c(s==="hp"?"heart":"droplet","sm")}${s==="hp"&&o?" <b>CRISE</b>":""}</span>
          <span class="vnums"><input type="text" inputmode="numeric" class="vcur" data-f="${e}" value="${n[e]}" ${i} aria-label="${t} atual (aceita +6, -6 ou 10 + 3)" title="Aceita atalhos: +6, -6 ou 10 + 3"/><i>/</i><input type="number" data-f="${a}" value="${n[a]}" ${i} aria-label="${t} máximo"/></span>
        </div>
        <button class="round-btn" data-step="${e}:1" ${i} aria-label="Aumentar ${t}">+</button>
        <button class="round-btn sm" data-step="${e}:5" ${i} aria-label="Aumentar ${t} em 5">⟫</button>
      </div>`},C=(t,e,a,s,n)=>`
    <div class="stat">
      <span class="stat-name">${t} ${e}</span>
      <div class="stat-row">
        <button class="round-btn sm" data-step="${a}:-1" ${n} aria-label="Diminuir ${e}">−</button>
        <input type="number" data-f="${a}" value="${s[a]}" ${n}/>
        <button class="round-btn sm" data-step="${a}:1" ${n} aria-label="Aumentar ${e}">+</button>
      </div>
    </div>`,H=(t,e,a,s,n)=>`
    <div class="stat">
      <span class="stat-name">${t} ${e}</span>
      <div class="stat-row solo"><input type="number" data-f="${a}" value="${s[a]}" ${n}/></div>
    </div>`,P=(t,e,a,s)=>`
    <button class="cond ${s} ${e.conditions[t.key]?"on":""}" data-cond="${t.key}" aria-pressed="${!!e.conditions[t.key]}" ${a}>
      <span class="cond-mark">${c(t.icon)}</span><span class="cond-label">${t.label}</span></button>`;function Y(t,e){if(p==="stats")return`<div class="attr-grid">${ne.map(a=>`
        <div class="attr" title="${a.name}">
          <div class="attr-head"><b>${a.short}</b><span>${a.name}</span></div>
          <div class="dice">${ie.map(s=>`<button class="die ${t.attrs[a.key]===s?"on":""}" data-die="${a.key}:${s}" ${e}>d${s}</button>`).join("")}</div>
        </div>`).join("")}</div>`;if(p==="cond")return`<div class="cond-head neg">Negativas</div><div class="cond-grid">${G.map(a=>P(a,t,e,"neg")).join("")}</div>
              <div class="cond-head pos">Positivas</div><div class="cond-grid">${z.map(a=>P(a,t,e,"pos")).join("")}</div>`;if(p==="equip"){const a=(s,n,i,r)=>`
        <div class="equip-group">
          <div class="equip-head">${c(i,"sm")} ${n}</div>
          ${t.equipment[s].map((o,d)=>`<div class="inv-row"><span>${v(o)}</span><button class="x-btn" data-eq-del="${s}:${d}" ${e} aria-label="Remover ${v(o)}">×</button></div>`).join("")||'<div class="equip-empty">Nada equipado</div>'}
          <div class="inv-add"><input type="text" data-eq-new="${s}" placeholder="${r}" maxlength="50" ${e}/><button class="round-btn" data-eq-add="${s}" ${e} aria-label="Adicionar">+</button></div>
        </div>`;return`
        ${a("weapons","Armas equipadas","sword2","Ex: Espada longa")}
        <div class="equip-group">
          <div class="equip-head">${c("armor","sm")} Armadura</div>
          <input type="text" class="equip-single" data-eq-armor value="${v(t.equipment.armor)}" placeholder="Nenhuma armadura" maxlength="50" ${e}/>
        </div>
        ${a("accessories","Acessórios","accessory","Ex: Anel de proteção")}`}return p==="inv"?`<div class="inv">${t.inventory.map((a,s)=>`<div class="inv-row"><span>${v(a)}</span><button class="x-btn" data-inv-del="${s}" ${e} aria-label="Remover ${v(a)}">×</button></div>`).join("")||'<div class="empty">Inventário vazio.</div>'}</div>
              <div class="inv-add"><input type="text" id="inv-new" placeholder="Adicionar item…" maxlength="40" ${e}/><button class="round-btn" id="inv-add" ${e} aria-label="Adicionar">+</button></div>`:p==="affin"?`<div class="affin-grid">${re.map(a=>{const s=t.affinities[a.key]||"normal",n=I.find(i=>i.key===s)||I[0];return`<button class="affin ${s}" data-affin="${a.key}" ${e} title="${n.label}">
          <span class="affin-el">${a.label}</span><span class="affin-badge">${n.short}</span></button>`}).join("")}</div>
      <div class="empty" style="padding-top:10px">Clique pra alternar: Normal → Resiste → Vulnerável → Imune → Absorve.</div>`:`<div class="powers">
      ${t.powers.map(a=>{const s=oe(a);return`
        <div class="power ${y.has(a.id)?"open":""}">
          <div class="power-head" data-power-toggle="${a.id}" aria-expanded="${y.has(a.id)}">
            <button class="power-type" data-power-type="${a.id}" title="Tipo: ${s.label} (clique pra trocar)" ${e}>${c(s.icon,"sm")}</button>
            <input type="text" class="power-name" data-power-name="${a.id}" value="${v(a.name)}" placeholder="Nome do poder" maxlength="60" ${e}/>
            ${a.cost?`<span class="power-cost">${v(a.cost)}</span>`:""}
            ${c("chevron","chev")}
          </div>
          <div class="power-body">
            <div class="power-meta">
              <span class="power-type-label">${c(s.icon,"sm")} ${s.label}</span>
              <input type="text" class="power-cost-input" data-power-cost="${a.id}" value="${v(a.cost||"")}" placeholder="Custo (ex: 5 PM)" maxlength="20" ${e}/>
            </div>
            <textarea data-power-desc="${a.id}" placeholder="Descrição, alvo, efeito…" rows="3" ${e}>${v(a.desc)}</textarea>
            <button class="x-btn" data-power-del="${a.id}" ${e} aria-label="Remover poder">${c("trash","sm")} Remover</button>
          </div>
        </div>`}).join("")||'<div class="empty">Nenhum poder cadastrado.</div>'}
      <button class="wide-btn ghost" id="power-add" ${e}>${c("plus","sm")} Novo poder</button>
    </div>`}function m(){const t=g();if(!t){l.innerHTML='<div class="card"><div class="empty">Ficha não encontrada.</div></div>';return}if(ae(t,A)&&E!=="GM"){l.innerHTML='<div class="card"><div class="empty">🔒 As informações desta criatura são segredo do mestre.</div></div>';return}const e=t.ownerId===N||E==="GM"?"":"disabled";O=e==="";const a=[...G,...z].filter(s=>t.conditions[s.key]).length;l.innerHTML=`
      <div class="card">
        <header class="card-head">
          <div class="avatar">
            <div class="avatar-ring"><div class="avatar-img">${te(t)}</div></div>
            <label class="lvl" title="Nível"><input type="number" data-f="level" value="${t.level}" ${e} aria-label="Nível"/></label>
          </div>
          <div class="head-text">
            <input class="name-input" type="text" data-f="name" value="${v(t.name)}" maxlength="18" ${e} aria-label="Nome"/>
            ${t.isEnemy?`<input class="rank-input" type="text" data-f="rank" value="${v(t.rank)}" placeholder="Rank (Tropa, Elite, Chefe…)" maxlength="24" ${e} aria-label="Rank"/>`:`<span class="head-sub">Personagem · Nível ${t.level}</span>`}
          </div>
        </header>

        <section class="vitals">${D("HP","hp","maxHp","hp",t,e)}${D("MP","mp","maxMp","mp",t,e)}</section>

        <section class="stats">
          ${C(c("star","sm"),t.isEnemy?"Ultima":"Fábula","fp",t,e)}${C(c("bag","sm"),"Inventário","ip",t,e)}
          ${H(c("shield","sm"),"Defesa","def",t,e)}${H(c("sparkle","sm"),"D. Mágica","mdef",t,e)}
          <div class="stat wide">
            <span class="stat-name">${c("coin","sm")} Zênite</span>
            <div class="stat-row solo"><input type="number" data-f="zenit" value="${t.zenit}" ${e}/></div>
          </div>
        </section>

        <nav class="seg">
          <button class="seg-btn ${p==="stats"?"on":""}" data-tab="stats">Atributos</button>
          <button class="seg-btn ${p==="cond"?"on":""}" data-tab="cond">Condições${a?` <em>${a}</em>`:""}</button>
          <button class="seg-btn ${p==="equip"?"on":""}" data-tab="equip">Equip.</button>
          <button class="seg-btn ${p==="inv"?"on":""}" data-tab="inv">Itens <em>${t.inventory.length}</em></button>
          <button class="seg-btn ${p==="powers"?"on":""}" data-tab="powers">Poderes <em>${t.powers.length}</em></button>
          <button class="seg-btn ${p==="affin"?"on":""}" data-tab="affin">Afinidades</button>
        </nav>
        <section class="card-body">${Y(t,e)}</section>
      </div>`}const L=()=>l.contains(document.activeElement)&&/INPUT|SELECT/.test(document.activeElement.tagName),R=()=>{if(L()){S=!0;return}m()};let O=!1,w=null;function K(t,e,a){const s=t.getBoundingClientRect(),n=s.width?u((e-s.left)/s.width,0,1):0;return Math.round(n*a)}function j(t){const e=g();if(!e||!w)return;const{stat:a,maxStat:s,bar:n}=w;e[a]=u(K(n,t,e[s]),0,e[s]);const i=u(e[a]/(e[s]||1)*100,0,100),r=n.querySelector(".vfill"),o=n.querySelector(`input[data-f="${a}"]`);if(r&&(r.style.width=i+"%"),o&&(o.value=e[a]),a==="hp"&&r){const d=J(e);r.classList.toggle("crisis",d),r.classList.toggle("low",!d&&i<=0);const h=n.querySelector(".vtag");h&&(h.innerHTML=c("heart","sm")+(d?" <b>CRISE</b>":""))}}l.addEventListener("pointerdown",t=>{if(!O)return;const e=t.target.closest("[data-drag]");if(!e||t.target.tagName==="INPUT")return;const[a,s]=e.dataset.drag.split(":");w={stat:a,maxStat:s,bar:e},e.setPointerCapture(t.pointerId),j(t.clientX)}),l.addEventListener("pointermove",t=>{w&&j(t.clientX)}),l.addEventListener("pointerup",async()=>{w&&(w=null,m(),await b())}),l.addEventListener("click",async t=>{const e=t.target.closest("[data-power-type]");if(e){const r=g();if(!r||e.disabled)return;const o=r.powers.find(d=>d.id===e.dataset.powerType);if(o){const d=q.findIndex(h=>h.key===(o.type||"skill"));o.type=q[(d+1)%q.length].key,m(),await b()}return}const a=t.target.closest("[data-power-toggle]");if(a&&t.target.tagName!=="INPUT"){const r=a.dataset.powerToggle;y.has(r)?y.delete(r):y.add(r),m();return}const s=t.target.closest("button");if(!s)return;const n=g(),i=s.dataset;if(i.tab){p=i.tab,m();return}if(!(!n||s.disabled)){if(i.step){const[r,o]=i.step.split(":"),d={hp:n.maxHp,mp:n.maxMp,fp:99,ip:99}[r];n[r]=u(n[r]+parseInt(o,10),0,d)}else if(i.die){const[r,o]=i.die.split(":");n.attrs[r]=parseInt(o,10)}else if(i.cond)n.conditions[i.cond]=!n.conditions[i.cond];else if(i.affin){const r=n.affinities[i.affin]||"normal",o=I.findIndex(d=>d.key===r);n.affinities[i.affin]=I[(o+1)%I.length].key}else if(i.eqAdd){const r=l.querySelector(`[data-eq-new="${i.eqAdd}"]`),o=r?r.value.trim():"",d=n.equipment[i.eqAdd];if(!o||!Array.isArray(d)||d.length>=10)return;d.push(o.slice(0,50))}else if(i.eqDel){const[r,o]=i.eqDel.split(":"),d=n.equipment[r];Array.isArray(d)&&d.splice(parseInt(o,10),1)}else if(i.invDel!==void 0)n.inventory.splice(parseInt(i.invDel,10),1);else if(s.id==="inv-add"){const r=document.getElementById("inv-new"),o=r.value.trim();if(!o||n.inventory.length>=30)return;n.inventory.push(o.slice(0,40)),r.value=""}else if(s.id==="power-add"){if(n.powers.length>=40)return;const r=Z();n.powers.push({id:r,name:"",desc:"",type:"skill",cost:""}),y.add(r)}else if(i.powerDel!==void 0)n.powers=n.powers.filter(r=>r.id!==i.powerDel),y.delete(i.powerDel);else return;m(),await b()}}),l.addEventListener("keydown",async t=>{if(t.key==="Enter"&&t.target.id==="inv-new"){document.getElementById("inv-add").click();return}if(t.key==="Enter"&&t.target.dataset&&t.target.dataset.eqNew){const e=l.querySelector(`[data-eq-add="${t.target.dataset.eqNew}"]`);e&&e.click();return}if(t.target.classList.contains("vcur")&&(t.key==="ArrowUp"||t.key==="ArrowDown")){t.preventDefault();const e=g();if(!e||t.target.disabled)return;const a=t.target.dataset.f,s=a==="hp"?"maxHp":"maxMp";e[a]=u(e[a]+(t.key==="ArrowUp"?1:-1),0,e[s]),t.target.value=e[a],await b()}});const B={hp:[0,"maxHp"],mp:[0,"maxMp"],fp:[0,99],ip:[0,99],def:[0,99],mdef:[0,99],level:[1,99],zenit:[0,999999]};l.addEventListener("change",async t=>{const e=t.target,a=g();if(!a)return;if(e.dataset.powerName!==void 0){const n=a.powers.find(i=>i.id===e.dataset.powerName);n&&(n.name=e.value.trim().slice(0,60)),await b();return}if(e.dataset.powerCost!==void 0){const n=a.powers.find(i=>i.id===e.dataset.powerCost);n&&(n.cost=e.value.trim().slice(0,20)),await b(),L()||m();return}if(e.dataset.powerDesc!==void 0){const n=a.powers.find(i=>i.id===e.dataset.powerDesc);n&&(n.desc=e.value.slice(0,2e3)),await b();return}if(e.dataset.eqArmor!==void 0){a.equipment.armor=e.value.trim().slice(0,50),await b();return}const s=e.dataset.f;if(s){if(s==="name")a.name=e.value.trim().slice(0,18)||a.name;else if(s==="rank")a.rank=e.value.trim().slice(0,24);else if(s==="hp"||s==="mp"){const n=s==="hp"?"maxHp":"maxMp";a[s]=u(Math.round(Q(e.value,a[s])),0,a[n]),e.value=a[s]}else if(s==="maxHp"){const n=parseInt(e.value,10);a.maxHp=u(n,1,9999),a.hp=u(a.hp,0,a.maxHp)}else if(s==="maxMp"){const n=parseInt(e.value,10);a.maxMp=u(n,0,9999),a.mp=u(a.mp,0,a.maxMp)}else if(B[s]){const n=parseInt(e.value,10),[i,r]=B[s];a[s]=u(n,i,typeof r=="string"?a[r]:r)}else return;await b(),L()||m()}}),l.addEventListener("focusout",()=>{S&&(S=!1,setTimeout(m,60))}),f.party.onChange(async()=>{k=await _(f),A=T($,k),R()}),f.scene.onMetadataChange(t=>{const e=ee(t),a=JSON.stringify(e);a!==M&&(M=a,$=e,A=T($,k),R())}),m()});
