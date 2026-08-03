/* NisiOS - Interactive CV Operating System */

const PROFILE = {
  name: "Davide Nisi",
  location: "Ornago, Lombardia, Italia",
  current: "Caracol AM",
  roleHint: "IT Professional - Hardware & Systems",
  about: "Nel corso degli anni ho maturato passione e manualita nell'installazione, configurazione e gestione di sistemi IT. Specializzato in service e supporto Apple (Mac e iOS), deployment di immagini, gestione dispositivi enterprise e troubleshooting hardware/software.\n\nAttualmente in Caracol AM, realta leader nell'Additive Manufacturing robotico su larga scala (LFAM), dove le competenze tecniche di configurazione e supporto sistemi si integrano in un contesto di innovazione industriale avanzata.",
  education: "IIS DON MILANI",
  recommendations: [
    { author: "Vincenzo Ruggieri", text: "Professionista preparato, affidabile e motivato. Grazie al suo know-how ha gestito egregiamente tutto il team, approfondendo minuziosamente ogni aspetto tecnico e di management." },
    { author: "Matteo Cherobin", text: "Nonostante fossimo in due reparti diversi ho avuto la possibilita di collaborare con lui ed apprezzarne il valore tecnico e umano. Grande lavoratore e ottima persona!" }
  ]
};

const CERTS = [
  { name: "Claude 101", issuer: "Anthropic", year: "mag 2026", type: "ai" },
  { name: "ACMT 2018 - Apple Mac Service Certification", issuer: "Apple", year: "nov 2018", type: "apple" },
  { name: "ACIT 2018 - Apple iOS Service Certification", issuer: "Apple", year: "mag 2019", type: "apple" },
  { name: "SVC-18A Apple Service Fundamentals", issuer: "Apple", year: "lug 2018", type: "apple" },
  { name: "Mac Integration Basic 10.13", issuer: "Apple", year: "feb 2018", type: "apple" },
  { name: "Learning System Center Configuration Manager (2016)", issuer: "LinkedIn Learning", year: "mar 2020", type: "default" },
  { name: "Android Enterprise Associate", issuer: "Android Enterprise", year: "ott 2019", type: "android" },
  { name: "Zero-touch enrollment", issuer: "Android Enterprise", year: "nov 2019", type: "android" }
];

const COURSES = ["Basic Exchange", "Decreto Legislativo 231/2001", "Elmec College XXI", "Elmec Major Incident Management", "Lansweeper e Altiris", "Start Program: Excel", "Start Program: PowerPoint", "Start Program: Word e Posta", "Start Program: Social Media", "Start Program: Sicurezza Rischio Basso"];

const PROJECTS = [{
  name: "Emmelibri PDL Rollout",
  period: "mar 2019 - giu 2019",
  desc: "Upgrade tecnologico completo: preparazione in laboratorio di immagini master ad hoc (gestionali, driver, configurazioni), deploy on-site delle postazioni (monitor, tastiere, mouse, laptop), configurazione software e troubleshooting post-installazione."
}];

const SKILLS = [
  { name: "Apple Hardware & Service (Mac / iOS)", level: 92 },
  { name: "Imaging & Deployment (Master Images)", level: 88 },
  { name: "System Configuration & Troubleshooting", level: 90 },
  { name: "Android Enterprise / MDM", level: 75 },
  { name: "SCCM / Endpoint Management", level: 70 },
  { name: "Team Coordination & Support", level: 85 },
  { name: "IT Operations & Incident Management", level: 80 }
];

window.addEventListener('load', function () {
  setTimeout(function () {
    var boot = document.getElementById('boot-screen');
    if (boot) boot.classList.add('fade-out');
    setTimeout(function () {
      if (boot) boot.style.display = 'none';
      var desktop = document.getElementById('desktop');
      if (desktop) desktop.classList.remove('hidden');
      updateClock();
      setInterval(updateClock, 1000);
    }, 600);
  }, 2200);
});

function updateClock() {
  var el = document.getElementById('clock');
  if (!el) return;
  var now = new Date();
  el.textContent = now.toLocaleString('it-IT', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}

var zIndex = 20;
var openWindows = new Map();

function buildAbout() {
  var recs = PROFILE.recommendations.map(function (r) {
    return '<blockquote style="border-left:3px solid var(--accent);padding-left:12px;margin:10px 0;color:var(--text-muted);font-style:italic">"' + r.text + '"<br><span style="font-style:normal;font-size:0.8rem;color:var(--text)">- ' + r.author + '</span></blockquote>';
  }).join('');
  return '<div class="profile-header"><div class="avatar">DN</div><div><h2 style="margin:0">' + PROFILE.name + '</h2><p style="margin:4px 0 0;color:var(--text-muted)">' + PROFILE.roleHint + '</p><p style="margin:2px 0 0;font-size:0.82rem">' + PROFILE.location + '</p></div></div><p>' + PROFILE.about.replace(/\n/g, '<br>') + '</p><h3>Formazione</h3><p><strong>' + PROFILE.education + '</strong></p><h3>Referenze</h3>' + recs;
}

function buildExperience() {
  return '<div class="timeline-item"><strong>Caracol AM</strong><div class="meta">Attuale - Ornago / Barlassina - Additive Manufacturing</div><p>Opero all\'interno di una delle scale-up europee piu dinamiche nel Large Format Additive Manufacturing (robotica + 3D printing industriale). Contesto ad alta innovazione dove le competenze di configurazione sistemi, supporto tecnico e deployment trovano applicazione in ambienti produttivi avanzati.</p></div><div class="timeline-item"><strong>Esperienza IT precedente</strong><div class="meta">Installazione - Configurazione - Service - Deployment</div><p>Anni di esperienza pratica su installazione e configurazione di postazioni, gestione immagini master, supporto Apple (Mac e iOS), Android Enterprise e troubleshooting. Capacita dimostrata di gestire team e approfondire aspetti sia tecnici che di management.</p></div><p style="font-size:0.8rem;color:var(--text-muted);margin-top:1.5rem">Nota: i dettagli completi sono disponibili sul profilo LinkedIn pubblico.</p>';
}

function buildCerts() {
  var cards = CERTS.map(function (c) {
    var badge = c.type === 'apple' ? 'Apple' : (c.type === 'android' ? 'Android' : (c.type === 'ai' ? 'AI' : 'IT'));
    return '<div class="cert-card"><strong>' + c.name + '</strong><div class="issuer">' + c.issuer + ' - ' + c.year + '</div><span class="badge ' + c.type + '" style="margin-top:8px">' + badge + '</span></div>';
  }).join('');
  var courses = COURSES.map(function (c) { return '<span class="badge">' + c + '</span>'; }).join('');
  return '<h3>Certificazioni</h3><div class="cert-grid">' + cards + '</div><h3 style="margin-top:1.5rem">Corsi</h3><div style="display:flex;flex-wrap:wrap;gap:6px">' + courses + '</div>';
}

function buildProjects() {
  return PROJECTS.map(function (p) {
    return '<div class="timeline-item"><strong>' + p.name + '</strong><div class="meta">' + p.period + '</div><p>' + p.desc + '</p></div>';
  }).join('') + '<p style="margin-top:1.5rem;color:var(--text-muted);font-size:0.85rem">Altri progetti di supporto IT, imaging e deployment.</p>';
}

function buildSkills() {
  var bars = SKILLS.map(function (s) {
    return '<div class="skill-bar"><label><span>' + s.name + '</span><span>' + s.level + '%</span></label><div class="skill-track"><div class="skill-fill" style="width:' + s.level + '%"></div></div></div>';
  }).join('');
  return '<h3>Competenze principali</h3>' + bars + '<h3 style="margin-top:1.4rem">Stack & Tools</h3><div style="display:flex;flex-wrap:wrap;gap:6px"><span class="badge apple">macOS / Mac Hardware</span><span class="badge apple">iOS Service</span><span class="badge">Imaging / Master Deploy</span><span class="badge">SCCM</span><span class="badge android">Android Enterprise</span><span class="badge">MDM / Zero-touch</span><span class="badge">Lansweeper / Altiris</span><span class="badge">Incident Management</span><span class="badge ai">Claude / AI tools</span></div>';
}

function buildContact() {
  return '<h2>Mettiamoci in contatto</h2><p>Profilo LinkedIn ufficiale:</p><p style="margin:12px 0"><a href="https://it.linkedin.com/in/davide-nisi-8a7324137" target="_blank" rel="noopener" style="color:#60a5fa;text-decoration:none;font-weight:500">linkedin.com/in/davide-nisi-8a7324137</a></p><p style="margin-top:1.5rem;color:var(--text-muted);font-size:0.85rem">Questo sito e un portfolio interattivo (NisiOS) ospitato su GitHub Pages.</p><div style="margin-top:1.8rem;padding:14px;background:var(--bg-panel);border-radius:8px;border:1px solid var(--border)"><strong>NisiOS</strong><br><span style="font-size:0.8rem;color:var(--text-muted)">Sistema Operativo Curriculum - v1.0</span></div>';
}

var windowTemplates = {
  about: { title: "About - Davide Nisi", content: buildAbout() },
  experience: { title: "Experience", content: buildExperience() },
  certs: { title: "Certifications", content: buildCerts() },
  projects: { title: "Projects", content: buildProjects() },
  skills: { title: "Skills & Tools", content: buildSkills() },
  contact: { title: "Contact", content: buildContact() },
  terminal: { title: "Terminal - nisi@NisiOS", content: null }
};

function openWindow(id) {
  if (openWindows.has(id)) {
    var win = openWindows.get(id);
    win.style.zIndex = ++zIndex;
    win.style.display = 'flex';
    updateTaskbar();
    return;
  }
  var tpl = windowTemplates[id];
  if (!tpl) return;

  var win = document.createElement('div');
  win.className = 'window';
  win.dataset.id = id;
  win.style.zIndex = ++zIndex;
  win.style.top = (60 + openWindows.size * 28) + 'px';
  win.style.left = (120 + openWindows.size * 36) + 'px';
  win.style.width = (id === 'terminal' ? '580px' : '520px');

  var isTerminal = id === 'terminal';
  win.innerHTML = '<div class="window-header"><div class="window-title">' + tpl.title + '</div><div class="window-controls"><button class="win-btn win-min" title="Minimizza"></button><button class="win-btn win-max" title="Ingrandisci"></button><button class="win-btn win-close" title="Chiudi"></button></div></div><div class="window-body ' + (isTerminal ? 'terminal-body' : '') + '" id="body-' + id + '">' + (isTerminal ? '' : tpl.content) + '</div>';

  document.getElementById('windows-container').appendChild(win);
  openWindows.set(id, win);

  win.querySelector('.win-close').onclick = function () { closeWindow(id); };
  win.querySelector('.win-min').onclick = function () { win.style.display = 'none'; updateTaskbar(); };
  win.querySelector('.win-max').onclick = function () { win.classList.toggle('maximized'); };

  makeDraggable(win);
  win.addEventListener('mousedown', function () { win.style.zIndex = ++zIndex; });

  if (isTerminal) initTerminal(win.querySelector('.window-body'));
  updateTaskbar();
  var sm = document.getElementById('start-menu');
  if (sm) sm.classList.add('hidden');
}

function closeWindow(id) {
  var win = openWindows.get(id);
  if (win) { win.remove(); openWindows.delete(id); updateTaskbar(); }
}

function updateTaskbar() {
  var container = document.getElementById('running-apps');
  if (!container) return;
  container.innerHTML = '';
  openWindows.forEach(function (win, id) {
    var btn = document.createElement('div');
    btn.className = 'task-app' + (win.style.display !== 'none' ? ' active' : '');
    btn.textContent = (windowTemplates[id].title.split('-')[0] || id).trim();
    btn.onclick = function () {
      if (win.style.display === 'none') { win.style.display = 'flex'; win.style.zIndex = ++zIndex; }
      else { win.style.zIndex = ++zIndex; }
      updateTaskbar();
    };
    container.appendChild(btn);
  });
}

function makeDraggable(win) {
  var header = win.querySelector('.window-header');
  var offsetX, offsetY, dragging = false;
  header.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('win-btn')) return;
    dragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
    win.style.zIndex = ++zIndex;
  });
  document.addEventListener('mousemove', function (e) {
    if (!dragging) return;
    win.style.left = (e.clientX - offsetX) + 'px';
    win.style.top = Math.max(0, e.clientY - offsetY) + 'px';
  });
  document.addEventListener('mouseup', function () { dragging = false; });
}

document.querySelectorAll('.icon').forEach(function (icon) {
  icon.addEventListener('click', function () { openWindow(icon.dataset.window); });
});

var startBtn = document.getElementById('start-btn');
if (startBtn) {
  startBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    var sm = document.getElementById('start-menu');
    if (sm) sm.classList.toggle('hidden');
  });
}

document.querySelectorAll('#start-menu li').forEach(function (li) {
  li.addEventListener('click', function () { openWindow(li.dataset.window); });
});

document.addEventListener('click', function (e) {
  if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn')) {
    var sm = document.getElementById('start-menu');
    if (sm) sm.classList.add('hidden');
  }
});

function initTerminal(container) {
  var history = [];
  var histIdx = -1;

  function print(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function newLine() {
    var line = document.createElement('div');
    line.className = 'terminal-input-line';
    line.innerHTML = '<span class="prompt">nisi@NisiOS:~$</span> <input class="terminal-input" spellcheck="false" autocomplete="off">';
    container.appendChild(line);
    var input = line.querySelector('input');
    input.focus();
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        var cmd = input.value.trim();
        input.disabled = true;
        history.push(cmd);
        histIdx = history.length;
        processCommand(cmd, print, newLine);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (histIdx > 0) { histIdx--; input.value = history[histIdx] || ''; }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (histIdx < history.length - 1) { histIdx++; input.value = history[histIdx] || ''; }
        else { histIdx = history.length; input.value = ''; }
      }
    });
    container.scrollTop = container.scrollHeight;
  }

  print('<div class="output">NisiOS Terminal v1.0 - Digita <span style="color:#58a6ff">help</span> per i comandi disponibili.</div>');
  newLine();
}

function processCommand(cmd, print, newLine) {
  var lower = cmd.toLowerCase();
  var output = '';
  if (!cmd) { newLine(); return; }

  if (lower === 'help') {
    output = 'Comandi: whoami, about, experience, certs, projects, skills, contact, neofetch, clear, help';
  } else if (lower === 'whoami') {
    output = PROFILE.name + '<br>' + PROFILE.roleHint + '<br>' + PROFILE.location + '<br>Attuale: ' + PROFILE.current;
  } else if (lower === 'about') {
    output = PROFILE.about.replace(/\n/g, '<br>');
  } else if (lower === 'experience') {
    output = 'Caracol AM (attuale)<br>Scale-up europea leader in Large Format Additive Manufacturing.<br><br>Precedente esperienza IT: installazione, configurazione, imaging, service Apple, Android Enterprise, troubleshooting e coordinamento team.';
  } else if (lower === 'certs' || lower === 'certifications') {
    output = CERTS.map(function (c) { return '- ' + c.name + ' (' + c.issuer + ', ' + c.year + ')'; }).join('<br>');
  } else if (lower === 'projects') {
    output = PROJECTS.map(function (p) { return p.name + ' (' + p.period + ')<br>  ' + p.desc; }).join('<br><br>');
  } else if (lower === 'skills') {
    output = SKILLS.map(function (s) { return s.name + ' - ' + s.level + '%'; }).join('<br>');
  } else if (lower === 'contact') {
    output = 'LinkedIn: https://it.linkedin.com/in/davide-nisi-8a7324137';
  } else if (lower === 'neofetch') {
    output = 'nisi@NisiOS<br>-------------<br>OS: NisiOS 1.0<br>Host: Davide Nisi Workstation<br>Kernel: IT-Support 5.x<br>Shell: nisi-sh<br>Skills: Apple ***** | Imaging ****<br>Certs: ACMT - ACIT - Android Enterprise - Claude';
  } else if (lower === 'clear') {
    var body = document.getElementById('body-terminal');
    if (body) body.innerHTML = '';
    newLine();
    return;
  } else {
    output = 'comando non trovato: ' + cmd + '<br>Digita help per l\'elenco dei comandi.';
  }

  print('<div class="output">' + output + '</div>');
  newLine();
}
