/* NisiOS — Interactive CV Operating System
   Data based on public LinkedIn profile of Davide Nisi (Caracol AM)
*/

const PROFILE = {
  name: "Davide Nisi",
  location: "Ornago, Lombardia, Italia",
  current: "Caracol AM",
  roleHint: "IT Professional · Hardware & Systems",
  about: `Nel corso degli anni ho maturato passione e manualità nell'installazione, configurazione e gestione di sistemi IT. Specializzato in service e supporto Apple (Mac e iOS), deployment di immagini, gestione dispositivi enterprise e troubleshooting hardware/software.

Attualmente in Caracol AM, realtà leader nell'Additive Manufacturing robotico su larga scala (LFAM), dove le competenze tecniche di configurazione e supporto sistemi si integrano in un contesto di innovazione industriale avanzata.`,
  education: "IIS DON MILANI",
  recommendations: [
    {
      author: "Vincenzo Ruggieri",
      text: "Professionista preparato, affidabile e motivato. Grazie al suo know-how ha gestito egregiamente tutto il team, approfondendo minuziosamente ogni aspetto tecnico e di management."
    },
    {
      author: "Matteo Cherobin",
      text: "Nonostante fossimo in due reparti diversi ho avuto la possibilità di collaborare con lui ed apprezzarne il valore tecnico e umano. Grande lavoratore e ottima persona!"
    }
  ]
};

const CERTS = [
  { name: "Claude 101", issuer: "Anthropic", year: "mag 2026", type: "ai" },
  { name: "ACMT 2018 — Apple Mac Service Certification", issuer: "Apple", year: "nov 2018", type: "apple" },
  { name: "ACIT 2018 — Apple iOS Service Certification", issuer: "Apple", year: "mag 2019", type: "apple" },
  { name: "SVC-18A Apple Service Fundamentals", issuer: "Apple", year: "lug 2018", type: "apple" },
  { name: "Mac Integration Basic 10.13", issuer: "Apple", year: "feb 2018", type: "apple" },
  { name: "Learning System Center Configuration Manager (2016)", issuer: "LinkedIn Learning", year: "mar 2020", type: "default" },
  { name: "Android Enterprise Associate", issuer: "Android Enterprise", year: "ott 2019", type: "android" },
  { name: "Zero-touch enrollment", issuer: "Android Enterprise", year: "nov 2019", type: "android" }
];

const COURSES = [
  "Basic Exchange", "Decreto Legislativo 231/2001", "Elmec College XXI",
  "Elmec Major Incident Management", "Lansweeper e Altiris",
  "Start Program: Excel", "Start Program: PowerPoint", "Start Program: Word e Posta",
  "Start Program: Social Media", "Start Program: Sicurezza Rischio Basso"
];

const PROJECTS = [
  {
    name: "Emmelibri PDL Rollout",
    period: "mar 2019 – giu 2019",
    desc: "Upgrade tecnologico completo: preparazione in laboratorio di immagini master ad hoc (gestionali, driver, configurazioni), deploy on-site delle postazioni (monitor, tastiere, mouse, laptop), configurazione software e troubleshooting post-installazione."
  }
];

const SKILLS = [
  { name: "Apple Hardware & Service (Mac / iOS)", level: 92 },
  { name: "Imaging & Deployment (Master Images)", level: 88 },
  { name: "System Configuration & Troubleshooting", level: 90 },
  { name: "Android Enterprise / MDM", level: 75 },
  { name: "SCCM / Endpoint Management", level: 70 },
  { name: "Team Coordination & Support", level: 85 },
  { name: "IT Operations & Incident Management", level: 80 }
];

// ========== BOOT ==========
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('boot-screen').classList.add('fade-out');
    setTimeout(() => {
      document.getElementById('boot-screen').style.display = 'none';
      document.getElementById('desktop').classList.remove('hidden');
      updateClock();
      setInterval(updateClock, 1000);
    }, 600);
  }, 2400);
});

function updateClock() {
  const now = new Date();
  const opts = { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' };
  document.getElementById('clock').textContent = now.toLocaleString('it-IT', opts);
}

// ========== WINDOW SYSTEM ==========
let zIndex = 20;
const openWindows = new Map();

const windowTemplates = {
  about: {
    title: "👤 About — Davide Nisi",
    content: `
      <div class="profile-header">
        <div class="avatar">DN</div>
        <div>
          <h2 style="margin:0">${PROFILE.name}</h2>
          <p style="margin:4px 0 0;color:var(--text-muted)">${PROFILE.roleHint}</p>
          <p style="margin:2px 0 0;font-size:0.82rem">${PROFILE.location}</p>
        </div>
      </div>
      <p>${PROFILE.about}</p>
      <h3>Formazione</h3>
      <p><strong>${PROFILE.education}</strong></p>
      <h3>Referenze</h3>
      ${PROFILE.recommendations.map(r => `
        <blockquote style="border-left:3px solid var(--accent);padding-left:12px;margin:10px 0;color:var(--text-muted);font-style:italic">
          "${r.text}"
          <br><span style="font-style:normal;font-size:0.8rem;color:var(--text)">— ${r.author}</span>
        </blockquote>
      `).join('')}
    `
  },
  experience: {
    title: "💼 Experience",
    content: `
      <div class="timeline-item">
        <strong>Caracol AM</strong>
        <div class="meta">Attuale · Ornago / Barlassina area · Additive Manufacturing</div>
        <p>Opero all'interno di una delle scale-up europee più dinamiche nel Large Format Additive Manufacturing (robotica + 3D printing industriale). Contesto ad alta innovazione dove le competenze di configurazione sistemi, supporto tecnico e deployment trovano applicazione in ambienti produttivi avanzati.</p>
      </div>
      <div class="timeline-item">
        <strong>Esperienza IT precedente</strong>
        <div class="meta">Installazione · Configurazione · Service · Deployment</div>
        <p>Anni di esperienza pratica su installazione e configurazione di postazioni, gestione immagini master, supporto Apple (Mac e iOS), Android Enterprise e troubleshooting. Capacità dimostrata di gestire team e approfondire aspetti sia tecnici che di management.</p>
      </div>
      <p style="font-size:0.8rem;color:var(--text-muted);margin-top:1.5rem">
        Nota: i dettagli completi di ruoli e date sono disponibili sul profilo LinkedIn pubblico.
      </p>
    `
  },
  certs: {
    title: "📜 Certifications & Courses",
    content: `
      <h3>Certificazioni</h3>
      <div class="cert-grid">
        ${CERTS.map(c => `
          <div class="cert-card">
            <strong>${c.name}</strong>
            <div class="issuer">${c.issuer} · ${c.year}</div>
            <span class="badge ${c.type}" style="margin-top:8px">${c.type === 'apple' ? 'Apple' : c.type === 'android' ? 'Android' : c.type === 'ai' ? 'AI' : 'IT'}</span>
          </div>
        `).join('')}
      </div>
      <h3 style="margin-top:1.5rem">Corsi e formazione aggiuntiva</h3>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        ${COURSES.map(c => `<span class="badge">${c}</span>`).join('')}
      </div>
    `
  },
  projects: {
    title: "🚀 Projects",
    content: `
      ${PROJECTS.map(p => `
        <div class="timeline-item">
          <strong>${p.name}</strong>
          <div class="meta">${p.period}</div>
          <p>${p.desc}</p>
        </div>
      `).join('')}
      <p style="margin-top:1.5rem;color:var(--text-muted);font-size:0.85rem">
        Altri progetti e attività di supporto IT, imaging e deployment realizzati nel corso della carriera.
      </p>
    `
  },
  skills: {
    title: "⚙️ Skills & Tools",
    content: `
      <h3>Competenze principali</h3>
      ${SKILLS.map(s => `
        <div class="skill-bar">
          <label><span>${s.name}</span><span>${s.level}%</span></label>
          <div class="skill-track"><div class="skill-fill" style="width:${s.level}%"></div></div>
        </div>
      `).join('')}
      <h3 style="margin-top:1.4rem">Stack & Tools</h3>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        <span class="badge apple">macOS / Mac Hardware</span>
        <span class="badge apple">iOS Service</span>
        <span class="badge">Imaging / Master Deploy</span>
        <span class="badge">SCCM</span>
        <span class="badge android">Android Enterprise</span>
        <span class="badge">MDM / Zero-touch</span>
        <span class="badge">Lansweeper / Altiris</span>
        <span class="badge">Incident Management</span>
        <span class="badge">Exchange Basics</span>
        <span class="badge ai">Claude / AI tools</span>
      </div>
    `
  },
  contact: {
    title: "📧 Contact",
    content: `
      <h2>Mettiamoci in contatto</h2>
      <p>Profilo LinkedIn ufficiale:</p>
      <p style="margin:12px 0">
        <a href="https://it.linkedin.com/in/davide-nisi-8a7324137" target="_blank" rel="noopener"
           style="color:#60a5fa;text-decoration:none;font-weight:500">
          linkedin.com/in/davide-nisi-8a7324137 →
        </a>
      </p>
      <p style="margin-top:1.5rem;color:var(--text-muted);font-size:0.85rem">
        Questo sito è un portfolio interattivo (NisiOS) ospitato su GitHub Pages. 
        I dati sono basati sulle informazioni pubbliche del profilo LinkedIn.
      </p>
      <div style="margin-top:1.8rem;padding:14px;background:var(--bg-panel);border-radius:8px;border:1px solid var(--border)">
        <strong>NisiOS</strong><br>
        <span style="font-size:0.8rem;color:var(--text-muted)">Sistema Operativo Curriculum · v1.0</span>
      </div>
    `
  },
  terminal: {
    title: "⌨️ Terminal — nisi@nisiOS",
    content: null // special handling
  }
};

function openWindow(id) {
  if (openWindows.has(id)) {
    const win = openWindows.get(id);
    win.style.zIndex = ++zIndex;
    win.style.display = 'flex';
    updateTaskbar();
    return;
  }

  const tpl = windowTemplates[id];
  if (!tpl) return;

  const win = document.createElement('div');
  win.className = 'window';
  win.dataset.id = id;
  win.style.zIndex = ++zIndex;
  win.style.top = `${60 + openWindows.size * 28}px`;
  win.style.left = `${120 + openWindows.size * 36}px`;
  win.style.width = id === 'terminal' ? '580px' : '520px';

  const isTerminal = id === 'terminal';

  win.innerHTML = `
    <div class="window-header">
      <div class="window-title">${tpl.title}</div>
      <div class="window-controls">
        <button class="win-btn win-min" title="Minimizza"></button>
        <button class="win-btn win-max" title="Ingrandisci"></button>
        <button class="win-btn win-close" title="Chiudi"></button>
      </div>
    </div>
    <div class="window-body ${isTerminal ? 'terminal-body' : ''}" id="body-${id}">
      ${isTerminal ? '' : tpl.content}
    </div>
  `;

  document.getElementById('windows-container').appendChild(win);
  openWindows.set(id, win);

  // Controls
  win.querySelector('.win-close').onclick = () => closeWindow(id);
  win.querySelector('.win-min').onclick = () => {
    win.style.display = 'none';
    updateTaskbar();
  };
  win.querySelector('.win-max').onclick = () => {
    win.classList.toggle('maximized');
  };

  // Drag
  makeDraggable(win);

  // Bring to front on click
  win.addEventListener('mousedown', () => {
    win.style.zIndex = ++zIndex;
  });

  if (isTerminal) initTerminal(win.querySelector('.window-body'));

  updateTaskbar();
  document.getElementById('start-menu').classList.add('hidden');
}

function closeWindow(id) {
  const win = openWindows.get(id);
  if (win) {
    win.remove();
    openWindows.delete(id);
    updateTaskbar();
  }
}

function updateTaskbar() {
  const container = document.getElementById('running-apps');
  container.innerHTML = '';
  openWindows.forEach((win, id) => {
    const btn = document.createElement('div');
    btn.className = 'task-app' + (win.style.display !== 'none' ? ' active' : '');
    btn.textContent = windowTemplates[id].title.split('—')[0].trim() || id;
    btn.onclick = () => {
      if (win.style.display === 'none') {
        win.style.display = 'flex';
        win.style.zIndex = ++zIndex;
      } else {
        win.style.zIndex = ++zIndex;
      }
      updateTaskbar();
    };
    container.appendChild(btn);
  });
}

function makeDraggable(win) {
  const header = win.querySelector('.window-header');
  let offsetX, offsetY, dragging = false;

  header.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('win-btn')) return;
    dragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
    win.style.zIndex = ++zIndex;
  });

  document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    win.style.left = `${e.clientX - offsetX}px`;
    win.style.top = `${Math.max(0, e.clientY - offsetY)}px`;
  });

  document.addEventListener('mouseup', () => { dragging = false; });
}

// ========== ICONS & START MENU ==========
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('dblclick', () => openWindow(icon.dataset.window));
  icon.addEventListener('click', () => openWindow(icon.dataset.window)); // single click for mobile friendliness
});

document.getElementById('start-btn').addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById('start-menu').classList.toggle('hidden');
});

document.querySelectorAll('#start-menu li').forEach(li => {
  li.addEventListener('click', () => openWindow(li.dataset.window));
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn')) {
    document.getElementById('start-menu').classList.add('hidden');
  }
});

// ========== TERMINAL ==========
function initTerminal(container) {
  const history = [];
  let histIdx = -1;

  const print = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  };

  const newLine = () => {
    const line = document.createElement('div');
    line.className = 'terminal-input-line';
    line.innerHTML = `<span class="prompt">nisi@NisiOS:~$</span> <input class="terminal-input" spellcheck="false" autocomplete="off">`;
    container.appendChild(line);
    const input = line.querySelector('input');
    input.focus();

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = input.value.trim();
        input.disabled = true;
        history.push(cmd);
        histIdx = history.length;
        processCommand(cmd, print, newLine);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (histIdx > 0) {
          histIdx--;
          input.value = history[histIdx] || '';
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (histIdx < history.length - 1) {
          histIdx++;
          input.value = history[histIdx] || '';
        } else {
          histIdx = history.length;
          input.value = '';
        }
      }
    });

    container.scrollTop = container.scrollHeight;
  };

  print(`<div class="output">NisiOS Terminal v1.0 — Digita <span style="color:#58a6ff">help</span> per i comandi disponibili.</div>`);
  newLine();
}

function processCommand(cmd, print, newLine) {
  const lower = cmd.toLowerCase();
  let output = '';

  if (!cmd) {
    newLine();
    return;
  }

  switch (true) {
    case lower === 'help':
      output = `Comandi disponibili:
  whoami          — Informazioni utente
  about           — Biografia
  experience      — Esperienza lavorativa
  certs           — Certificazioni
  projects        — Progetti
  skills          — Competenze
  contact         — Contatti / LinkedIn
  neofetch        — System info stile neofetch
  clear           — Pulisce lo schermo
  help            — Questo messaggio`;
      break;
    case lower === 'whoami':
      output = `${PROFILE.name}\n${PROFILE.roleHint}\n${PROFILE.location}\nAttuale: ${PROFILE.current}`;
      break;
    case lower === 'about':
      output = PROFILE.about;
      break;
    case lower === 'experience':
      output = `Caracol AM (attuale)
  Scale-up europea leader in Large Format Additive Manufacturing (robotica + 3D printing industriale).

Precedente esperienza IT:
  Installazione, configurazione, imaging, service Apple (Mac/iOS), Android Enterprise, troubleshooting e coordinamento team.`;
      break;
    case lower === 'certs' || lower === 'certifications':
      output = CERTS.map(c => `• ${c.name} (${c.issuer}, ${c.year})`).join('\n');
      break;
    case lower === 'projects':
      output = PROJECTS.map(p => `${p.name} (${p.period})\n  ${p.desc}`).join('\n\n');
      break;
    case lower === 'skills':
      output = SKILLS.map(s => `${s.name.padEnd(40)} ${s.level}%`).join('\n');
      break;
    case lower === 'contact':
      output = `LinkedIn: https://it.linkedin.com/in/davide-nisi-8a7324137`;
      break;
    case lower === 'neofetch':
      output = `
          .-/+oossssoo+/-.               nisi@NisiOS
      \\`:+ssssssssssssssssss+:\\`           -------------
    -+ssssssssssssssssssyyssss+-         OS: NisiOS 1.0 (Professional)
  .ossssssssssssssssssdMMMNysssso.       Host: Davide Nisi Workstation
 /ssssssssssshdmmNNmmyNMMMMhssssss/      Kernel: IT-Support 5.x
+ssssssssshmydMMMMMMMNddddyssssssss+     Uptime: ${Math.floor(Math.random()*400)+100} days
/sssssssshNMMMyhhyyyyhmNMMMNhssssssss/   Shell: nisi-sh
.ssssssssdMMMNhsssssssssshNMMMdssssss.   DE: NisiDesktop
 +sssshhhyNMMNysssssssssssyNMMMyyysss+   Theme: Dark Professional
  +ssyyssyNMMNhssssssssssshNMMNydysss    Terminal: NisiTerm
   .ossssyNMMNyssssssssssyNMMNyoosss.    CPU: Problem Solver
     -+sssyNMMhssssssssssyNMMhoysss-     Memory: High Reliability
       \\`.:+sssyNNysssssssyNNyssss:.      Skills: Apple ★★★★★ | Imaging ★★★★☆
          .-/+oossssoo+/-.               Certs: ACMT · ACIT · Android Enterprise · Claude`;
      break;
    case lower === 'clear':
      const body = document.getElementById('body-terminal');
      body.innerHTML = '';
      newLine();
      return;
    default:
      output = `comando non trovato: ${cmd}\nDigita 'help' per l'elenco dei comandi.`;
  }

  print(`<div class="output">${output}</div>`);
  newLine();
}
