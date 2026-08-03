/* NisiOS - Interactive CV Operating System
   Updated with full LinkedIn profile data - Davide Nisi
*/

const PROFILE = {
  name: "Davide Nisi",
  location: "Ornago, Lombardia, Italia",
  current: "Caracol AM",
  roleHint: "IT Manager",
  headline: "IT Manager presso Caracol AM",
  about: "Nel corso degli anni ho maturato passione e manualita nell'installazione, configurazione e ordinaria manutenzione di apparecchiature informatiche quali Notebook, Desktop, Tablet e Smartphone. Conoscenza delle componenti interne dei computer, le varie architetture, i tipi di memoria, le schede grafiche e quelle audio. Il mio obiettivo e sempre stato quello di crescere, ampliare sempre il mio bagaglio culturale e di assorbire ogni singola novita che il mondo informatico possa offrire giorno dopo giorno. Da un paio di anni ho intrapreso un percorso di crescita in ambito sistemistico per quanto riguarda l'analisi e l'evasione di richieste tramite Incident e Service Request riguardanti Active Directory, Exchange, Console Antipam e Monitoraggio.",
  education: "IIS DON MILANI - Informatica (2011-2016) - Votazione 67",
  recommendations: [
    { author: "Vincenzo Ruggieri", text: "Ho avuto il piacere di lavorare con Davide Nisi per la stessa azienda. Professionista preparato, affidabile e motivato. Grazie al suo know-how ha gestito egregiamente tutto il team, approfondendo minuziosamente ogni aspetto tecnico e di management. Spero un giorno di incrociare nuovamente i nostri percorsi lavorativi." },
    { author: "Matteo Cherobin", text: "Ho avuto il piacere di lavorare con Davide presso la stessa azienda. Nonostante fossimo in due reparti diversi ho avuto la possibilita di collaborare con lui ed apprezzarne il valore tecnico e umano. Grande lavoratore e ottima persona!" }
  ]
};

const EXPERIENCE = [
  {
    title: "IT Manager",
    company: "Caracol AM",
    period: "apr 2024 - Presente (2 anni 5 mesi)",
    location: "Barlassina, Lombardia, Italia - In sede",
    type: "A tempo pieno",
    desc: "IT Manager presso Caracol AM, scale-up europea leader nel Large Format Additive Manufacturing (robotica + stampa 3D industriale)."
  },
  {
    title: "IT Manager",
    company: "Area MediaWeb Srl",
    period: "giu 2023 - gen 2024 (8 mesi)",
    location: "Veduggio, Lombardia, Italia - In sede",
    type: "A tempo pieno",
    desc: "Installation and management of Windows Server (2003 R2, 2019, 2022), Active Directory, DNS, DHCP, File Server, NAS. Gestione reti IT e Gestione IT."
  },
  {
    title: "IT Manager and System Administrator",
    company: "TECMA SOLUTIONS S.p.A.",
    period: "gen 2020 - giu 2023 (3 anni 6 mesi)",
    location: "Milano, Italia",
    type: "A tempo pieno",
    desc: "Installation and management of Windows Server (2019), Active Directory, DNS, DHCP, File Server, NAS. Hardware troubleshooting su Windows/Mac, PC e multifunzione. Microsoft Office 365, Exchange Online, SharePoint Online. Networking (Firewall, Switch, Router, Access Point) e protocolli TCP/IP. Ambienti virtuali on-premise e cloud. Backup ad alta affidabilita e strutture iperconvergenti (Veeam, Iperius, Keepit). MDM WorkspaceONE. Troubleshooting OS e security (Sophos Central). Supporto Operation & Maintenance Server e network device. Gestione domini WEB (Aruba, FileZilla)."
  },
  {
    title: "IT System Administrator",
    company: "Elmec Informatica",
    period: "giu 2019 - gen 2020 (8 mesi)",
    location: "Biassono, Lombardia, Italia",
    type: "A tempo pieno",
    desc: "Proficient in system administration, with expertise in managing IT infrastructures, hardware, and vendor relationships."
  },
  {
    title: "Senior Hardware Technician",
    company: "Elmec Informatica",
    period: "gen 2017 - mag 2019 (2 anni 5 mesi)",
    location: "Biassono, Lombardia, Italia",
    type: "A tempo pieno",
    desc: "Advanced hardware expertise (servers, storage, networking). Troubleshooting e ottimizzazione. Client management, vendor relationship, documentazione e reporting. Continual learning su tecnologie hardware emergenti."
  }
];

const CERTS = [
  { name: "Claude 101", issuer: "Anthropic", year: "mag 2026", type: "ai" },
  { name: "Learning System Center Configuration Manager (2016)", issuer: "LinkedIn Learning", year: "mar 2020", type: "default" },
  { name: "ACMT 2018 - Apple Mac Service Certification", issuer: "Apple", year: "nov 2018", type: "apple" },
  { name: "ACIT 2018 - Apple iOS Service Certification", issuer: "Apple", year: "mag 2019", type: "apple" },
  { name: "SVC-18A Apple Service Fundamentals", issuer: "Apple", year: "lug 2018", type: "apple" },
  { name: "Mac Integration Basic 10.13", issuer: "Apple", year: "feb 2018", type: "apple" },
  { name: "Android Enterprise Associate", issuer: "Android Enterprise", year: "ott 2019", type: "android" },
  { name: "Zero-touch enrollment", issuer: "Android Enterprise", year: "nov 2019", type: "android" }
];

const COURSES = ["Basic Exchange", "Decreto Legislativo 231 del 2001", "Elmec College XXI", "Elmec Major Incident Management", "Lansweeper e Altiris", "Start Program: Excel", "Start Program: PowerPoint", "Start Program: Word e Posta", "Start Program: Social Media", "Start Program: Sicurezza Rischio Basso"];

const PROJECTS = [{
  name: "Emmelibri PDL Rollout",
  period: "mar 2019 - giu 2019",
  company: "Elmec Informatica",
  desc: "Il progetto e stato sviluppato con l'obiettivo di effettuare un Upgrade tecnologico per il cliente con una preparazione in Laboratorio che prevedeva una prima fase di Deploy delle Immagini Master create ad hoc con tutti i vari gestionali, configurazioni e aggiornamenti Driver. Poi intervento direttamente On-Site presso le varie sedi e punti vendita per l'installazione della nuova postazione comprensiva di Monitor di fascia Business, tastiera, Mouse, Laptop e configurazione software con eventuale Troubleshooting in caso di necessita."
}];

const SKILLS = [
  { name: "Windows Server / Active Directory", level: 92 },
  { name: "System Administration & Troubleshooting", level: 90 },
  { name: "Networking (Firewall, Switch, Router)", level: 85 },
  { name: "Microsoft 365 / Exchange Online", level: 88 },
  { name: "Hardware Support (Windows / Mac)", level: 90 },
  { name: "Backup & Hyperconverged (Veeam)", level: 82 },
  { name: "MDM / WorkspaceONE", level: 78 },
  { name: "IT Management & Team Coordination", level: 88 }
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
  }, 2000);
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
  return '<div class="profile-header"><div class="avatar">DN</div><div><h2 style="margin:0">' + PROFILE.name + '</h2><p style="margin:4px 0 0;color:var(--text-muted)">' + PROFILE.roleHint + ' @ ' + PROFILE.current + '</p><p style="margin:2px 0 0;font-size:0.82rem">' + PROFILE.location + '</p></div></div><p>' + PROFILE.about.replace(/\n/g, '<br>') + '</p><h3>Formazione</h3><p><strong>' + PROFILE.education + '</strong></p><h3>Referenze</h3>' + recs;
}

function buildExperience() {
  return EXPERIENCE.map(function (e) {
    return '<div class="timeline-item"><strong>' + e.title + '</strong> - ' + e.company + '<div class="meta">' + e.period + ' | ' + e.location + '</div><p>' + e.desc + '</p></div>';
  }).join('');
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
    return '<div class="timeline-item"><strong>' + p.name + '</strong><div class="meta">' + p.period + ' | ' + p.company + '</div><p>' + p.desc + '</p></div>';
  }).join('');
}

function buildSkills() {
  var bars = SKILLS.map(function (s) {
    return '<div class="skill-bar"><label><span>' + s.name + '</span><span>' + s.level + '%</span></label><div class="skill-track"><div class="skill-fill" style="width:' + s.level + '%"></div></div></div>';
  }).join('');
  return '<h3>Competenze principali</h3>' + bars + '<h3 style="margin-top:1.4rem">Stack & Tools</h3><div style="display:flex;flex-wrap:wrap;gap:6px"><span class="badge">Windows Server</span><span class="badge">Active Directory</span><span class="badge">Microsoft 365</span><span class="badge">Veeam</span><span class="badge">Sophos</span><span class="badge">WorkspaceONE</span><span class="badge apple">macOS / Hardware</span><span class="badge">Networking</span><span class="badge ai">Claude / AI</span></div>';
}

function buildContact() {
  return '<h2>Mettiamoci in contatto</h2><p>Profilo LinkedIn ufficiale:</p><p style="margin:12px 0"><a href="https://www.linkedin.com/in/davide-nisi-8a7324137" target="_blank" rel="noopener" style="color:#60a5fa;text-decoration:none;font-weight:500">linkedin.com/in/davide-nisi-8a7324137</a></p><p style="margin-top:1.5rem;color:var(--text-muted);font-size:0.85rem">NisiOS - portfolio interattivo ospitato su GitHub Pages. Dati aggiornati dal profilo LinkedIn.</p><div style="margin-top:1.8rem;padding:14px;background:var(--bg-panel);border-radius:8px;border:1px solid var(--border)"><strong>NisiOS</strong><br><span style="font-size:0.8rem;color:var(--text-muted)">Sistema Operativo Curriculum - v1.1</span></div>';
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
  win.style.width = (id === 'terminal' ? '600px' : '560px');

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

  print('<div class="output">NisiOS Terminal v1.1 - Digita <span style="color:#58a6ff">help</span> per i comandi disponibili.</div>');
  newLine();
}

function processCommand(cmd, print, newLine) {
  var lower = cmd.toLowerCase();
  var output = '';
  if (!cmd) { newLine(); return; }

  if (lower === 'help') {
    output = 'Comandi: whoami, about, experience, certs, projects, skills, contact, neofetch, clear, help';
  } else if (lower === 'whoami') {
    output = PROFILE.name + '<br>' + PROFILE.roleHint + ' @ ' + PROFILE.current + '<br>' + PROFILE.location;
  } else if (lower === 'about') {
    output = PROFILE.about.replace(/\n/g, '<br>');
  } else if (lower === 'experience') {
    output = EXPERIENCE.map(function (e) {
      return '<strong>' + e.title + '</strong> @ ' + e.company + '<br>' + e.period + '<br>' + e.desc;
    }).join('<br><br>');
  } else if (lower === 'certs' || lower === 'certifications') {
    output = CERTS.map(function (c) { return '- ' + c.name + ' (' + c.issuer + ', ' + c.year + ')'; }).join('<br>');
  } else if (lower === 'projects') {
    output = PROJECTS.map(function (p) { return '<strong>' + p.name + '</strong> (' + p.period + ')<br>' + p.desc; }).join('<br><br>');
  } else if (lower === 'skills') {
    output = SKILLS.map(function (s) { return s.name + ' - ' + s.level + '%'; }).join('<br>');
  } else if (lower === 'contact') {
    output = 'LinkedIn: https://www.linkedin.com/in/davide-nisi-8a7324137';
  } else if (lower === 'neofetch') {
    output = 'nisi@NisiOS<br>-------------<br>OS: NisiOS 1.1<br>Host: Davide Nisi - IT Manager<br>Company: Caracol AM<br>Kernel: Windows Server / AD / M365<br>Skills: System Admin ***** | Hardware *****<br>Certs: Claude 101 - SCCM - Apple';
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
