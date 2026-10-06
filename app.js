const STORAGE_KEY = 'torneo-fifa-la-ganga-v1';

const defaultParticipants = [
  'Santiago', 'Andrés', 'Juan', 'Sebastián', 'Mateo', 'Carlos', 'David', 'Felipe',
  'Lucas', 'Nicolás', 'Tomás', 'Diego', 'José', 'Miguel', 'Esteban', 'Rafael'
];

const defaultTeams = [
  { name: 'Real Madrid', country: 'España', color: '#00ff87', rating: 91 },
  { name: 'Barcelona', country: 'España', color: '#ff4655', rating: 90 },
  { name: 'Manchester City', country: 'Inglaterra', color: '#6ec8ff', rating: 91 },
  { name: 'Liverpool', country: 'Inglaterra', color: '#ff5b5b', rating: 89 },
  { name: 'Bayern Munich', country: 'Alemania', color: '#dcf0ff', rating: 90 },
  { name: 'PSG', country: 'Francia', color: '#0db0ff', rating: 88 },
  { name: 'Arsenal', country: 'Inglaterra', color: '#f2d8a3', rating: 87 },
  { name: 'Inter', country: 'Italia', color: '#1647d9', rating: 88 },
  { name: 'Milan', country: 'Italia', color: '#d0d1db', rating: 86 },
  { name: 'Juventus', country: 'Italia', color: '#d5d3d7', rating: 86 },
  { name: 'Chelsea', country: 'Inglaterra', color: '#1a477d', rating: 85 },
  { name: 'Borussia Dortmund', country: 'Alemania', color: '#f0c11a', rating: 85 }
];

const roundNames = ['Octavos de Final', 'Cuartos de Final', 'Semifinales', 'Final'];

const state = loadState();

const refs = {
  participantForm: document.getElementById('participantForm'),
  participantName: document.getElementById('participantName'),
  participantBulkInput: document.getElementById('participantBulkInput'),
  importParticipantsBtn: document.getElementById('importParticipantsBtn'),
  participantsList: document.getElementById('participantsList'),
  teamForm: document.getElementById('teamForm'),
  teamName: document.getElementById('teamName'),
  teamCountry: document.getElementById('teamCountry'),
  teamColor: document.getElementById('teamColor'),
  teamRating: document.getElementById('teamRating'),
  teamsList: document.getElementById('teamsList'),
  dashboardStats: document.getElementById('dashboardStats'),
  drawTeamsBtn: document.getElementById('drawTeamsBtn'),
  generateMatchesBtn: document.getElementById('generateMatchesBtn'),
  bracketContainer: document.getElementById('bracketContainer'),
  historyList: document.getElementById('historyList'),
  championContent: document.getElementById('championContent'),
  resultModal: document.getElementById('resultModal'),
  matchModalBody: document.getElementById('matchModalBody'),
  closeModalBtn: document.getElementById('closeModalBtn'),
  drawResultsList: document.getElementById('drawResultsList'),
  lotteryPlayer: document.getElementById('lotteryPlayer'),
  lotteryTeam: document.getElementById('lotteryTeam'),
  allowRepeatTeams: document.getElementById('allowRepeatTeams'),
  soundToggle: document.getElementById('soundToggle'),
  animationsToggle: document.getElementById('animationsToggle'),
  bestLoserToggle: document.getElementById('bestLoserToggle'),
  resetTournamentBtn: document.getElementById('resetTournamentBtn'),
  loadSampleParticipantsBtn: document.getElementById('loadSampleParticipantsBtn'),
  clearParticipantsBtn: document.getElementById('clearParticipantsBtn'),
  loadSampleTeamsBtn: document.getElementById('loadSampleTeamsBtn'),
  clearTeamsBtn: document.getElementById('clearTeamsBtn'),
  statsPanel: document.getElementById('statsPanel'),
  featuredMatchup: document.getElementById('featuredMatchup'),
  recentMatches: document.getElementById('recentMatches'),
  topScorers: document.getElementById('topScorers'),
  toggleSpectatorBtn: document.getElementById('toggleSpectatorBtn'),
  dashboardSpectatorBtn: document.getElementById('dashboardSpectatorBtn'),
  advanceRoundBtn: document.getElementById('advanceRoundBtn')
};

function createDefaultState() {
  return {
    tournamentName: 'TORNEO DE FIFA LA GANGA',
    participants: defaultParticipants.map((name, index) => ({
      id: `p-${index + 1}`,
      name,
      avatar: '',
      status: 'active',
      teamId: null,
      teamName: '',
      wins: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      diff: 0,
      eliminated: false
    })),
    teams: defaultTeams.map((team, index) => ({
      id: `t-${index + 1}`,
      ...team,
      logo: ''
    })),
    assignments: [],
    rounds: [],
    currentRoundIndex: 0,
    champion: null,
    bestLoserWinnerId: null,
    history: [],
    settings: {
      allowRepeatTeams: true,
      soundOn: false,
      animationsOn: true,
      bestLoserRule: true,
      spectatorMode: false
    },
    stats: {
      matchesPlayed: 0,
      pendingMatches: 0
    }
  };
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return createDefaultState();
  try {
    const parsed = JSON.parse(saved);
    return { ...createDefaultState(), ...parsed, settings: { ...createDefaultState().settings, ...(parsed.settings || {}) } };
  } catch (error) {
    return createDefaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function bind() {
  refs.participantForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = refs.participantName.value.trim();
    if (!name) return;
    addParticipant(name);
    refs.participantName.value = '';
    refs.participantName.focus();
  });

  refs.importParticipantsBtn.addEventListener('click', () => {
    const names = refs.participantBulkInput.value
      .split(/\n|,/) 
      .map((n) => n.trim())
      .filter(Boolean);
    if (!names.length) return;
    names.forEach(addParticipant);
    refs.participantBulkInput.value = '';
  });

  refs.teamForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = refs.teamName.value.trim();
    const country = refs.teamCountry.value.trim();
    const color = refs.teamColor.value;
    const rating = Number(refs.teamRating.value) || 85;
    if (!name) return;
    addTeam({ name, country, color, rating });
    refs.teamName.value = '';
    refs.teamCountry.value = '';
    refs.teamColor.value = '#00ff87';
    refs.teamRating.value = '88';
  });

  refs.drawTeamsBtn.addEventListener('click', runDrawAnimation);
  refs.generateMatchesBtn.addEventListener('click', generateTournamentMatches);
  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.resultModal.addEventListener('click', (event) => {
    if (event.target === refs.resultModal) closeModal();
  });
  refs.resetTournamentBtn.addEventListener('click', resetTournament);
  refs.loadSampleParticipantsBtn.addEventListener('click', loadSampleParticipants);
  refs.clearParticipantsBtn.addEventListener('click', () => {
    state.participants = [];
    saveState();
    render();
  });
  refs.loadSampleTeamsBtn.addEventListener('click', loadSampleTeams);
  refs.clearTeamsBtn.addEventListener('click', () => {
    state.teams = [];
    saveState();
    render();
  });
  refs.allowRepeatTeams.addEventListener('change', (event) => {
    state.settings.allowRepeatTeams = event.target.checked;
    saveState();
  });
  refs.soundToggle.addEventListener('change', (event) => {
    state.settings.soundOn = event.target.checked;
    saveState();
  });
  refs.animationsToggle.addEventListener('change', (event) => {
    state.settings.animationsOn = event.target.checked;
    document.body.classList.toggle('reduce-motion', !event.target.checked);
    saveState();
  });
  refs.bestLoserToggle.addEventListener('change', (event) => {
    state.settings.bestLoserRule = event.target.checked;
    saveState();
  });
  refs.toggleSpectatorBtn.addEventListener('click', () => {
    state.settings.spectatorMode = !state.settings.spectatorMode;
    document.body.classList.toggle('spectator-mode', state.settings.spectatorMode);
    saveState();
  });
  refs.dashboardSpectatorBtn.addEventListener('click', () => refs.toggleSpectatorBtn.click());
  refs.advanceRoundBtn.addEventListener('click', advanceRoundManual);

  refs.allowRepeatTeams.checked = state.settings.allowRepeatTeams;
  refs.soundToggle.checked = state.settings.soundOn;
  refs.animationsToggle.checked = state.settings.animationsOn;
  refs.bestLoserToggle.checked = state.settings.bestLoserRule;
  document.body.classList.toggle('spectator-mode', state.settings.spectatorMode);
  document.body.classList.toggle('reduce-motion', !state.settings.animationsOn);
}

function addParticipant(name) {
  const cleanName = name.trim();
  if (!cleanName) return;
  if (state.participants.some((p) => p.name.toLowerCase() === cleanName.toLowerCase())) return;

  state.participants.push({
    id: `p-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    name: cleanName,
    avatar: '',
    status: 'active',
    teamId: null,
    teamName: '',
    wins: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    diff: 0,
    eliminated: false
  });
  saveState();
  render();
}

function addTeam(teamData) {
  const name = teamData.name.trim();
  if (!name) return;
  if (state.teams.some((team) => team.name.toLowerCase() === name.toLowerCase())) return;

  state.teams.push({
    id: `t-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    name,
    country: teamData.country || 'Sin país',
    color: teamData.color || '#00ff87',
    rating: Number(teamData.rating) || 85,
    logo: ''
  });
  saveState();
  render();
}

function loadSampleParticipants() {
  state.participants = defaultParticipants.map((name, index) => ({
    id: `p-${index + 1}`,
    name,
    avatar: '',
    status: 'active',
    teamId: null,
    teamName: '',
    wins: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    diff: 0,
    eliminated: false
  }));
  state.assignments = [];
  state.rounds = [];
  state.champion = null;
  state.bestLoserWinnerId = null;
  state.history = [];
  saveState();
  render();
}

function loadSampleTeams() {
  state.teams = defaultTeams.map((team, index) => ({
    id: `t-${index + 1}`,
    ...team,
    logo: ''
  }));
  saveState();
  render();
}

function resetTournament() {
  const confirmed = window.confirm('¿Quieres reiniciar todo el torneo?');
  if (!confirmed) return;
  const fresh = createDefaultState();
  Object.assign(state, fresh);
  saveState();
  render();
}

function shuffle(list) {
  const array = [...list];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getAvailableTeams() {
  return state.teams.filter((team) => team.name && team.name.trim());
}

function assignRandomTeams() {
  const activeParticipants = state.participants.filter((p) => p.status === 'active' && !p.eliminated);
  const availableTeams = getAvailableTeams();
  if (activeParticipants.length === 0 || availableTeams.length === 0) {
    alert('Debes tener participantes y equipos antes de sortear.');
    return;
  }

  if (!state.settings.allowRepeatTeams && activeParticipants.length > availableTeams.length) {
    alert('Hay más participantes que equipos disponibles y la repetición está desactivada.');
    return;
  }

  const clonedParticipants = activeParticipants.map((participant) => ({ ...participant }));
  const clonedTeams = [...availableTeams];

  const assignments = [];
  const teamPool = state.settings.allowRepeatTeams ? [...clonedTeams].flatMap((team) => Array(activeParticipants.length).fill(team)) : [...clonedTeams];
  const shuffledParticipants = shuffle(clonedParticipants);
  const shuffledTeams = shuffle(teamPool);

  shuffledParticipants.forEach((participant) => {
    let selectedTeam = null;
    if (state.settings.allowRepeatTeams) {
      selectedTeam = shuffledTeams.shift();
    } else {
      const existingUsed = assignments.map((item) => item.teamId);
      const eligible = shuffledTeams.filter((team) => !existingUsed.includes(team.id));
      selectedTeam = eligible.length ? eligible[0] : shuffledTeams[0];
      if (selectedTeam) {
        const index = shuffledTeams.indexOf(selectedTeam);
        if (index !== -1) shuffledTeams.splice(index, 1);
      }
    }

    if (!selectedTeam) {
      const fallback = clonedTeams[Math.floor(Math.random() * clonedTeams.length)];
      selectedTeam = fallback;
    }

    assignments.push({
      participantId: participant.id,
      participantName: participant.name,
      teamId: selectedTeam.id,
      teamName: selectedTeam.name,
      country: selectedTeam.country,
      rating: selectedTeam.rating
    });
  });

  state.assignments = assignments;
  state.participants = state.participants.map((participant) => {
    const assignment = assignments.find((item) => item.participantId === participant.id);
    if (!assignment) return participant;
    return {
      ...participant,
      teamId: assignment.teamId,
      teamName: assignment.teamName,
      status: participant.status === 'active' ? 'active' : participant.status
    };
  });
  saveState();
  render();
}

function runDrawAnimation() {
  const participants = state.participants.filter((p) => p.status === 'active' && !p.eliminated);
  const teams = getAvailableTeams();
  if (!participants.length || !teams.length) {
    alert('Añade participantes y equipos para empezar el sorteo.');
    return;
  }

  if (state.assignments.length) {
    renderDrawResults();
    return;
  }

  const playerDisplay = refs.lotteryPlayer;
  const teamDisplay = refs.lotteryTeam;
  const randomParticipant = participants[Math.floor(Math.random() * participants.length)];
  const randomTeam = teams[Math.floor(Math.random() * teams.length)];
  playerDisplay.textContent = randomParticipant.name;
  teamDisplay.textContent = randomTeam.name;

  const pace = 70;
  let iteration = 0;
  const timer = setInterval(() => {
    iteration += 1;
    const candidatePlayer = participants[Math.floor(Math.random() * participants.length)];
    const candidateTeam = teams[Math.floor(Math.random() * teams.length)];
    playerDisplay.textContent = candidatePlayer.name;
    teamDisplay.textContent = candidateTeam.name;

    if (iteration >= 18) {
      clearInterval(timer);
      assignRandomTeams();
      playSound('draw');
    }
  }, pace);
}

function renderDrawResults() {
  refs.drawResultsList.innerHTML = '';
  if (!state.assignments.length) {
    refs.lotteryPlayer.textContent = '-';
    refs.lotteryTeam.textContent = '-';
    return;
  }

  state.assignments.forEach((assignment) => {
    const item = document.createElement('div');
    item.className = 'result-chip';
    item.innerHTML = `
      <strong>${assignment.participantName}</strong>
      <span>⚽ ${assignment.teamName}</span>
    `;
    refs.drawResultsList.appendChild(item);
  });
}

function generateTournamentMatches() {
  const activeParticipants = state.participants.filter((p) => p.status === 'active' && !p.eliminated);
  if (activeParticipants.length < 2) {
    alert('Necesitas al menos dos participantes activos.');
    return;
  }

  if (!state.assignments.length) {
    alert('Primero realiza el sorteo de equipos.');
    return;
  }

  let players = [...activeParticipants];
  if (players.length % 2 !== 0) {
    const bestLoser = getBestLoserIfNeeded();
    if (bestLoser) {
      players.push({ ...bestLoser, isBye: true });
    } else {
      players.push({ id: `bye-${Date.now()}`, name: 'BYE', isBye: true, status: 'active', teamName: '---' });
    }
  }

  const roundMatches = createRoundMatches(players, roundNames[0]);

  state.rounds = [{ name: roundNames[0], matches: roundMatches }];
  state.currentRoundIndex = 0;
  saveState();
  render();
}

function createRoundMatches(players, roundName, isBestLoserPlayoff = false) {
  const entrants = isBestLoserPlayoff
    ? [...players].sort(compareBestLoserStats)
    : shuffle(players);
  const matches = [];

  for (let index = 0; index < entrants.length; index += 2) {
    const first = entrants[index];
    const second = entrants[index + 1];
    const isBye = !second;
    const playersInMatch = isBye ? [{ ...first }, { ...first }] : [{ ...first }, { ...second }];
    matches.push({
      id: `match-${Date.now()}-${index}-${Math.random().toString(16).slice(2, 6)}`,
      round: roundName,
      players: playersInMatch,
      scores: [0, 0],
      winnerId: isBye ? first.id : null,
      winnerName: isBye ? first.name : null,
      status: isBye ? 'finished' : 'pending',
      automatic: isBye,
      isBestLoserPlayoff
    });
  }

  return matches;
}

function compareBestLoserStats(a, b) {
  if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
  if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
  if (a.goalsAgainst !== b.goalsAgainst) return a.goalsAgainst - b.goalsAgainst;
  if (b.eliminatedRoundIndex !== a.eliminatedRoundIndex) {
    return b.eliminatedRoundIndex - a.eliminatedRoundIndex;
  }
  if (b.wins !== a.wins) return b.wins - a.wins;
  return a.name.localeCompare(b.name, 'es', { sensitivity: 'base' });
}

function getBestLoserCandidates() {
  const candidates = state.participants.filter((participant) => (participant.eliminated || participant.status === 'eliminated')
    && !participant.bestLoserPlayoffEliminated);
  if (!candidates.length) return [];

  const tournamentStats = new Map();
  state.rounds.forEach((round, roundIndex) => {
    round.matches.forEach((match) => {
      if (match.status !== 'finished' || match.automatic || match.isBestLoserPlayoff || !match.winnerId || !match.players?.[0] || !match.players?.[1]) return;

      const [playerA, playerB] = match.players;
      const [scoreA, scoreB] = match.scores || [0, 0];
      [
        { player: playerA, goalsFor: Number(scoreA) || 0, goalsAgainst: Number(scoreB) || 0 },
        { player: playerB, goalsFor: Number(scoreB) || 0, goalsAgainst: Number(scoreA) || 0 }
      ].forEach(({ player, goalsFor, goalsAgainst }) => {
        const stats = tournamentStats.get(player.id) || {
          goalsFor: 0,
          goalsAgainst: 0,
          wins: 0,
          eliminatedRoundIndex: -1
        };
        stats.goalsFor += goalsFor;
        stats.goalsAgainst += goalsAgainst;
        if (match.winnerId === player.id) stats.wins += 1;
        else stats.eliminatedRoundIndex = roundIndex;
        tournamentStats.set(player.id, stats);
      });
    });
  });

  return candidates
    .map((participant) => {
      const stats = tournamentStats.get(participant.id) || {};
      const goalsFor = stats.goalsFor ?? participant.goalsFor ?? 0;
      const goalsAgainst = stats.goalsAgainst ?? participant.goalsAgainst ?? 0;
      return {
        ...participant,
        goalsFor,
        goalsAgainst,
        wins: stats.wins ?? participant.wins ?? 0,
        eliminatedRoundIndex: stats.eliminatedRoundIndex ?? -1,
        goalDifference: goalsFor - goalsAgainst
      };
    })
    .sort(compareBestLoserStats);
}

function getBestLoserIfNeeded() {
  const candidates = getBestLoserCandidates();
  if (!candidates.length) return null;
  const topDifference = candidates[0].goalDifference;
  return candidates.filter((candidate) => candidate.goalDifference === topDifference).length === 1
    ? candidates[0]
    : null;
}

function findRoundMatches() {
  if (!state.rounds.length) return [];
  return state.rounds[state.currentRoundIndex]?.matches || [];
}

function renderDashboard() {
  const active = state.participants.filter((p) => p.status === 'active' && !p.eliminated).length;
  const totalMatches = state.rounds.reduce((acc, round) => acc + round.matches.length, 0);
  const completedMatches = state.history.length;
  const currentRound = state.rounds[state.currentRoundIndex]?.name || 'Sin iniciar';

  const stats = [
    { label: 'Participantes', value: state.participants.length, className: 'accent' },
    { label: 'Equipos', value: state.teams.length, className: 'cyan' },
    { label: 'Partidos jugados', value: completedMatches, className: 'gold' },
    { label: 'Pendientes', value: Math.max(0, totalMatches - completedMatches), className: 'alert' },
    { label: 'Restantes', value: active, className: 'accent' },
    { label: 'Ronda', value: currentRound, className: 'cyan' }
  ];

  refs.dashboardStats.innerHTML = stats
    .map((item) => `
      <div class="stat-card ${item.className}">
        <span class="label">${item.label}</span>
        <span class="value">${item.value}</span>
      </div>
    `)
    .join('');
}

function renderPhaseProgress() {
  const phases = document.querySelectorAll('.phase-step');
  const activeIndex = state.rounds.length
    ? Math.min(state.currentRoundIndex + 2, phases.length - 1)
    : state.assignments.length ? 2 : 1;

  phases.forEach((phase, index) => {
    const isComplete = index < activeIndex;
    const isActive = index === activeIndex;
    phase.classList.toggle('complete', isComplete);
    phase.classList.toggle('active', isActive);

    const label = phase.querySelector('small');
    if (isComplete) label.textContent = 'COMPLETADO';
    else if (isActive) label.textContent = state.rounds.length ? 'EN VIVO' : index === 2 ? 'LISTO' : 'PENDIENTE';
    else label.textContent = `FASE 0${index + 1}`;
  });

  const currentRound = state.rounds[state.currentRoundIndex];
  if (currentRound?.isBestLoserPlayoff) {
    const tournamentRoundsBefore = state.rounds.slice(0, state.currentRoundIndex)
      .filter((round) => !round.isBestLoserPlayoff).length;
    const playoffPhase = phases[Math.min(tournamentRoundsBefore + 1, phases.length - 1)];
    if (playoffPhase) playoffPhase.querySelector('small').textContent = 'DESEMPATE';
  }
}

function renderFeaturedMatchup() {
  const matches = state.rounds.flatMap((round) => round.matches);
  const match = matches.find((item) => item.status !== 'finished' && !item.winnerId) || matches.at(-1);
  const players = match?.players || state.participants.slice(0, 2);
  const [playerA, playerB] = players;

  if (!playerA || !playerB) {
    refs.featuredMatchup.innerHTML = '<p class="featured-empty">Añade al menos dos participantes para mostrar el partido destacado.</p>';
    return;
  }

  const teamFor = (player) => state.teams.find((team) => team.id === player.teamId)
    || state.teams.find((team) => team.name === player.teamName);
  const teamA = teamFor(playerA);
  const teamB = teamFor(playerB);
  const scoreA = match?.scores?.[0];
  const scoreB = match?.scores?.[1];
  const centerScore = match ? `${scoreA ?? 0} : ${scoreB ?? 0}` : 'VS';

  refs.featuredMatchup.innerHTML = `
    <div class="matchup-player">
      <span class="player-rating">${teamA?.rating || playerA.rating || '--'}</span>
      <span class="player-monogram">${playerA.name.charAt(0).toUpperCase()}</span>
      <strong>${playerA.name}</strong>
      <small>${playerA.teamName || teamA?.name || 'Equipo por asignar'}</small>
      <div class="player-record"><span>V ${playerA.wins || 0}</span><span>D ${playerA.losses || 0}</span><span>GF ${playerA.goalsFor || 0}</span></div>
    </div>
    <div class="matchup-center"><strong>${centerScore}</strong><small>${match?.round || 'PRÓXIMO CRUCE'}</small></div>
    <div class="matchup-player">
      <span class="player-rating">${teamB?.rating || playerB.rating || '--'}</span>
      <span class="player-monogram">${playerB.name.charAt(0).toUpperCase()}</span>
      <strong>${playerB.name}</strong>
      <small>${playerB.teamName || teamB?.name || 'Equipo por asignar'}</small>
      <div class="player-record"><span>V ${playerB.wins || 0}</span><span>D ${playerB.losses || 0}</span><span>GF ${playerB.goalsFor || 0}</span></div>
    </div>
    <div class="featured-actions">
      ${match && match.status !== 'finished'
        ? `<button class="btn btn-primary" type="button" data-featured-match="${match.id}">REGISTRAR MARCADOR</button>`
        : '<a class="btn btn-primary" href="#draw">PREPARAR ENFRENTAMIENTOS</a>'}
    </div>
  `;

  refs.featuredMatchup.querySelector('[data-featured-match]')?.addEventListener('click', (event) => {
    openMatchModal(event.currentTarget.dataset.featuredMatch);
  });
}

function renderTopScorers() {
  const leaders = [...state.participants]
    .sort((a, b) => (b.goalsFor || 0) - (a.goalsFor || 0) || (b.wins || 0) - (a.wins || 0))
    .slice(0, 4);

  refs.topScorers.innerHTML = leaders.length
    ? leaders.map((participant, index) => `
      <div class="scorer-row">
        <span class="scorer-rank">${String(index + 1).padStart(2, '0')}</span>
        <div><strong>${participant.name}</strong><small>${participant.teamName || 'Equipo por asignar'}</small></div>
        <span class="scorer-goals">${participant.goalsFor || 0}</span>
      </div>
    `).join('')
    : '<div class="scorer-row"><small>Sin goleadores registrados.</small></div>';
}

function renderParticipants() {
  refs.participantsList.innerHTML = '';
  if (!state.participants.length) {
    refs.participantsList.innerHTML = '<div class="player-item"><div>Sin participantes aún.</div></div>';
    return;
  }

  state.participants.forEach((participant) => {
    const item = document.createElement('div');
    item.className = 'player-item';
    item.innerHTML = `
      <div class="player-main">
        <div class="avatar">${participant.name.charAt(0).toUpperCase()}</div>
        <div>
          <strong>${participant.name}</strong><br>
          <small>${participant.teamName || 'Sin equipo'} • ${participant.status}</small>
        </div>
      </div>
      <div class="item-actions">
        <button class="icon-btn" type="button" data-action="edit-participant" data-id="${participant.id}">✏️</button>
        <button class="icon-btn delete" type="button" data-action="delete-participant" data-id="${participant.id}">🗑️</button>
      </div>
    `;
    refs.participantsList.appendChild(item);
  });

  refs.participantsList.querySelectorAll('[data-action="delete-participant"]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      state.participants = state.participants.filter((p) => p.id !== id);
      saveState();
      render();
    });
  });

  refs.participantsList.querySelectorAll('[data-action="edit-participant"]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const participant = state.participants.find((p) => p.id === id);
      if (!participant) return;
      const nextName = prompt('Editar nombre del participante:', participant.name);
      if (!nextName || !nextName.trim()) return;
      participant.name = nextName.trim();
      saveState();
      render();
    });
  });
}

function renderTeams() {
  refs.teamsList.innerHTML = '';
  if (!state.teams.length) {
    refs.teamsList.innerHTML = '<div class="team-item"><div>Sin equipos aún.</div></div>';
    return;
  }

  state.teams.forEach((team) => {
    const item = document.createElement('div');
    item.className = 'team-item';
    item.innerHTML = `
      <div class="team-main">
        <div class="team-swatch" style="background:${team.color};"></div>
        <div>
          <strong>${team.name}</strong><br>
          <small>${team.country} • OVR ${team.rating}</small>
        </div>
      </div>
      <div class="item-actions">
        <button class="icon-btn" type="button" data-action="edit-team" data-id="${team.id}">✏️</button>
        <button class="icon-btn delete" type="button" data-action="delete-team" data-id="${team.id}">🗑️</button>
      </div>
    `;
    refs.teamsList.appendChild(item);
  });

  refs.teamsList.querySelectorAll('[data-action="delete-team"]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      state.teams = state.teams.filter((team) => team.id !== id);
      saveState();
      render();
    });
  });

  refs.teamsList.querySelectorAll('[data-action="edit-team"]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const team = state.teams.find((item) => item.id === id);
      if (!team) return;
      const name = prompt('Nuevo nombre del equipo:', team.name);
      if (name) team.name = name.trim();
      const country = prompt('País del equipo:', team.country);
      if (country) team.country = country.trim();
      const rating = Number(prompt('Rating del equipo:', String(team.rating || 85)));
      if (!Number.isNaN(rating)) team.rating = Math.max(60, Math.min(99, rating));
      saveState();
      render();
    });
  });
}

function renderBracket() {
  if (!state.rounds.length) {
    refs.bracketContainer.innerHTML = '<p class="muted">Todavía no hay enfrentamientos generados.</p>';
    return;
  }

  const currentRound = state.rounds[state.currentRoundIndex];
  const columns = [];

  state.rounds.forEach((round, index) => {
    const matches = round.matches;
    const column = document.createElement('div');
    column.className = 'round-column';
    const title = document.createElement('div');
    title.className = 'round-title';
    title.textContent = index === 0 ? `${round.name}` : round.name;
    column.appendChild(title);

    matches.forEach((match) => {
      const card = document.createElement('div');
      const isFinished = match.status === 'finished' || Boolean(match.winnerId);
      card.className = `match-card ${isFinished ? 'finished' : ''}`;
      const players = match.players || [];
      const playerA = players[0] || { name: 'Sin rival' };
      const playerB = players[1] || { name: 'BYE' };
      const p1Name = playerA.name || 'Sin rival';
      const p2Name = playerB.name || 'BYE';
      const p1Score = match.scores?.[0] ?? 0;
      const p2Score = match.scores?.[1] ?? 0;
      const winnerA = match.winnerId === playerA.id;
      const winnerB = match.winnerId === playerB.id;

      card.innerHTML = `
        <div class="match-header">
          <span>${match.round || round.name}</span>
          <span>${isFinished ? 'Listo' : 'Pendiente'}</span>
        </div>
        <div class="match-player ${winnerA ? 'winner' : ''}">
          <span>${p1Name}</span>
          <span class="match-score">${p1Score}${match.penalties ? `<small> (${match.penalties[0]} pen.</small>` : ''}</span>
        </div>
        <div class="match-player ${winnerB ? 'winner' : ''}">
          <span>${p2Name}</span>
          <span class="match-score">${p2Score}${match.penalties ? `<small> (${match.penalties[1]} pen.</small>` : ''}</span>
        </div>
        <div class="match-actions">
          <button class="btn btn-small" type="button" data-action="open-result" data-match-id="${match.id}">Registrar</button>
        </div>
      `;
      column.appendChild(card);
    });

    columns.push(column);
  });

  refs.bracketContainer.innerHTML = '';
  const container = document.createElement('div');
  container.className = 'bracket-grid';
  columns.forEach((column) => container.appendChild(column));
  refs.bracketContainer.appendChild(container);

  refs.bracketContainer.querySelectorAll('[data-action="open-result"]').forEach((button) => {
    button.addEventListener('click', () => openMatchModal(button.dataset.matchId));
  });

  const progress = document.createElement('div');
  progress.className = 'round-title';
  progress.textContent = `Ronda actual: ${currentRound ? currentRound.name : 'Sin iniciar'}`;
  refs.bracketContainer.appendChild(progress);
}

function openMatchModal(matchId) {
  const allMatches = state.rounds.flatMap((round) => round.matches);
  const match = allMatches.find((item) => item.id === matchId);
  if (!match) return;

  refs.matchModalBody.innerHTML = `
    <form class="match-form" id="matchResultForm">
      <div class="players">
        <div class="player-box">
          <strong>${match.players[0]?.name || 'Sin rival'}</strong>
          <div>${match.players[0]?.teamName || ''}</div>
        </div>
        <div class="vs-slab">VS</div>
        <div class="player-box">
          <strong>${match.players[1]?.name || 'Sin rival'}</strong>
          <div>${match.players[1]?.teamName || ''}</div>
        </div>
      </div>
      <div class="score-inputs">
        <input type="number" min="0" max="20" name="scoreA" value="${match.scores?.[0] ?? 0}" />
        <div class="vs-slab">—</div>
        <input type="number" min="0" max="20" name="scoreB" value="${match.scores?.[1] ?? 0}" />
      </div>
      ${match.isBestLoserPlayoff ? `
        <div class="playoff-penalties" id="playoffPenalties" style="display:none">
          <strong>DESEMPATE POR PENALES</strong>
          <label>${match.players[0]?.name || 'Jugador 1'} <input type="number" min="0" max="20" name="penaltyA" value="0" /></label>
          <label>${match.players[1]?.name || 'Jugador 2'} <input type="number" min="0" max="20" name="penaltyB" value="0" /></label>
        </div>
      ` : ''}
      <button class="btn btn-primary" type="submit">⚽ CONFIRMAR RESULTADO</button>
    </form>
  `;

  refs.resultModal.classList.remove('hidden');
  refs.resultModal.setAttribute('aria-hidden', 'false');

  document.getElementById('matchResultForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const scoreA = Number(formData.get('scoreA')) || 0;
    const scoreB = Number(formData.get('scoreB')) || 0;
    const penaltyA = formData.has('penaltyA') ? Number(formData.get('penaltyA')) : null;
    const penaltyB = formData.has('penaltyB') ? Number(formData.get('penaltyB')) : null;
    if (match.isBestLoserPlayoff && scoreA === scoreB && penaltyA === penaltyB) {
      alert('Ingresa una tanda de penales con resultados distintos para decidir el partido.');
      return;
    }
    reportMatchResult(match.id, scoreA, scoreB, penaltyA, penaltyB);
    closeModal();
  });

  if (match.isBestLoserPlayoff) {
    const scoreInputs = refs.matchModalBody.querySelectorAll('input[name="scoreA"], input[name="scoreB"]');
    const penalties = document.getElementById('playoffPenalties');
    const updatePenaltyVisibility = () => {
      penalties.style.display = scoreInputs[0].value === scoreInputs[1].value ? 'grid' : 'none';
    };
    scoreInputs.forEach((input) => input.addEventListener('input', updatePenaltyVisibility));
    updatePenaltyVisibility();
  }
}

function closeModal() {
  refs.resultModal.classList.add('hidden');
  refs.resultModal.setAttribute('aria-hidden', 'true');
}

function reportMatchResult(matchId, scoreA, scoreB, penaltyA = null, penaltyB = null) {
  const currentRound = state.rounds[state.currentRoundIndex];
  if (!currentRound) return;

  const match = currentRound.matches.find((item) => item.id === matchId);
  if (!match) return;

  const playerA = match.players[0];
  const playerB = match.players[1];
  if (!playerA || !playerB) return;

  if (match.isBestLoserPlayoff && scoreA === scoreB && (!Number.isFinite(penaltyA) || !Number.isFinite(penaltyB) || penaltyA === penaltyB)) {
    alert('El desempate no puede terminar igualado: ingresa penales distintos para elegir al ganador.');
    return;
  }

  match.scores = [scoreA, scoreB];
  match.status = 'finished';
  match.penalties = match.isBestLoserPlayoff && scoreA === scoreB ? [penaltyA, penaltyB] : null;
  match.winnerId = scoreA === scoreB
    ? match.isBestLoserPlayoff ? (penaltyA > penaltyB ? playerA.id : playerB.id) : playerA.id
    : scoreA > scoreB ? playerA.id : playerB.id;
  match.winnerName = match.winnerId === playerA.id ? playerA.name : playerB.name;

  const participantA = state.participants.find((p) => p.id === playerA.id);
  const participantB = state.participants.find((p) => p.id === playerB.id);
  if (!match.isBestLoserPlayoff) {
    if (participantA) {
      participantA.goalsFor = (participantA.goalsFor || 0) + scoreA;
      participantA.goalsAgainst = (participantA.goalsAgainst || 0) + scoreB;
      participantA.diff = participantA.goalsFor - participantA.goalsAgainst;
    }
    if (participantB) {
      participantB.goalsFor = (participantB.goalsFor || 0) + scoreB;
      participantB.goalsAgainst = (participantB.goalsAgainst || 0) + scoreA;
      participantB.diff = participantB.goalsFor - participantB.goalsAgainst;
    }
  }

  const winnerParticipant = state.participants.find((p) => p.id === match.winnerId);
  if (winnerParticipant && !match.isBestLoserPlayoff) {
    winnerParticipant.wins = (winnerParticipant.wins || 0) + 1;
    winnerParticipant.status = 'active';
    winnerParticipant.eliminated = false;
  }

  const loserParticipant = state.participants.find((p) => p.id !== match.winnerId && [playerA.id, playerB.id].includes(p.id));
  if (loserParticipant && !match.isBestLoserPlayoff) {
    loserParticipant.losses = (loserParticipant.losses || 0) + 1;
    loserParticipant.status = 'eliminated';
    loserParticipant.eliminated = true;
  }
  if (loserParticipant && match.isBestLoserPlayoff) {
    loserParticipant.bestLoserPlayoffEliminated = true;
  }

  state.history.push({
    id: `history-${Date.now()}`,
    round: match.round,
    playerA: playerA.name,
    playerB: playerB.name,
    scoreA,
    scoreB,
    winnerId: match.winnerId,
    winnerName: match.winnerName,
    penalties: match.penalties,
    isBestLoserPlayoff: match.isBestLoserPlayoff
  });

  const roundDone = currentRound.matches.every((item) => item.status === 'finished' || Boolean(item.winnerId));
  if (roundDone) {
    advanceToNextRound();
  }

  saveState();
  render();
}

function advanceToNextRound() {
  const currentRound = state.rounds[state.currentRoundIndex];
  if (!currentRound) return;

  const winners = currentRound.matches
    .map((match) => {
      const winnerId = match.winnerId;
      if (!winnerId) return null;
      const participant = state.participants.find((p) => p.id === winnerId);
      return participant || null;
    })
    .filter(Boolean);

  if (currentRound.isBestLoserPlayoff) {
    if (winners.length > 1) {
      const nextPlayoffRound = {
        name: 'Desempate mejor perdedor',
        isBestLoserPlayoff: true,
        matches: createRoundMatches(winners, 'Desempate mejor perdedor', true)
      };
      state.rounds.push(nextPlayoffRound);
      state.currentRoundIndex = state.rounds.length - 1;
      saveState();
      render();
      return;
    }

    const playoffWinner = winners[0];
    const sourceRound = state.rounds.slice(0, state.currentRoundIndex).reverse()
      .find((round) => !round.isBestLoserPlayoff);
    if (!playoffWinner || !sourceRound) return;

    const participant = state.participants.find((item) => item.id === playoffWinner.id);
    if (participant) {
      participant.status = 'active';
      participant.eliminated = false;
    }
    state.bestLoserWinnerId = playoffWinner.id;
    const sourceWinners = sourceRound.matches
      .map((match) => state.participants.find((item) => item.id === match.winnerId))
      .filter(Boolean);
    const tournamentRoundCount = state.rounds.filter((round) => !round.isBestLoserPlayoff).length;
    const nextRoundName = roundNames[tournamentRoundCount] || 'Final';
    const nextRound = {
      name: nextRoundName,
      matches: createRoundMatches([...sourceWinners, participant || playoffWinner], nextRoundName)
    };
    state.rounds.push(nextRound);
    state.currentRoundIndex = state.rounds.length - 1;
    saveState();
    render();
    return;
  }

  if (winners.length <= 1) {
    state.champion = winners[0] || null;
    if (state.champion) {
      state.champion.status = 'campeón';
    }
    saveState();
    render();
    return;
  }

  const tournamentRoundCount = state.rounds.filter((round) => !round.isBestLoserPlayoff).length;
  const roundName = roundNames[tournamentRoundCount] || 'Final';
  const nextRoundPlayers = [...winners];

  if (nextRoundPlayers.length % 2 !== 0 && state.settings.bestLoserRule) {
    const candidates = getBestLoserCandidates();
    const leadingCandidates = candidates.length
      ? candidates.filter((candidate) => candidate.goalDifference === candidates[0].goalDifference)
      : [];
    if (leadingCandidates.length > 1) {
      state.rounds.push({
        name: 'Desempate mejor perdedor',
        isBestLoserPlayoff: true,
        matches: createRoundMatches(leadingCandidates, 'Desempate mejor perdedor', true)
      });
      state.currentRoundIndex = state.rounds.length - 1;
      saveState();
      render();
      return;
    }
    if (leadingCandidates.length === 1) {
      const bestLoser = leadingCandidates[0];
      nextRoundPlayers.push(bestLoser);
      const participant = state.participants.find((item) => item.id === bestLoser.id);
      if (participant) {
        participant.status = 'active';
        participant.eliminated = false;
      }
      state.bestLoserWinnerId = bestLoser.id;
    }
  }

  state.rounds.push({ name: roundName, matches: createRoundMatches(nextRoundPlayers, roundName) });
  state.currentRoundIndex = state.rounds.length - 1;
  saveState();
  render();
}

function findBestLoserFromAll() {
  return getBestLoserIfNeeded();
}

function advanceRoundManual() {
  const currentRound = state.rounds[state.currentRoundIndex];
  if (!currentRound) return;
  if (currentRound.matches.some((match) => match.status !== 'finished')) {
    alert('Primero finaliza todos los partidos de la ronda actual.');
    return;
  }
  advanceToNextRound();
}

function renderStatsPanel() {
  const maxGoals = state.participants.reduce((best, participant) => {
    return participant.goalsFor > (best?.goalsFor || -1) ? participant : best;
  }, null);

  const bestDefense = state.participants.reduce((best, participant) => {
    return participant.goalsAgainst < (best?.goalsAgainst ?? Number.POSITIVE_INFINITY) ? participant : best;
  }, null);

  const totalGoals = state.history.reduce((sum, match) => sum + match.scoreA + match.scoreB, 0);
  const averageGoals = state.history.length ? (totalGoals / state.history.length).toFixed(1) : '0.0';

  const highestScoring = state.history.reduce((best, match) => {
    const total = match.scoreA + match.scoreB;
    if (!best || total > best.total) return { match, total };
    return best;
  }, null);

  const pendingPlayoff = state.rounds.find((round) => round.isBestLoserPlayoff
    && round.matches.some((match) => match.status === 'pending'));
  const bestLoser = state.participants.find((participant) => participant.id === state.bestLoserWinnerId);
  const leadingCandidates = getBestLoserCandidates();
  const bestLoserValue = pendingPlayoff
    ? `Desempate pendiente (${leadingCandidates.length})`
    : bestLoser?.name || (leadingCandidates.length > 1 ? `Desempate pendiente (${leadingCandidates.length})` : leadingCandidates[0]?.name || 'Sin datos');

  const metrics = [
    { title: 'Máximo goleador', value: maxGoals ? `${maxGoals.name} — ${maxGoals.goalsFor} goles` : 'Sin datos' },
    { title: 'Mejor defensa', value: bestDefense ? `${bestDefense.name} — ${bestDefense.goalsAgainst} recibidos` : 'Sin datos' },
    { title: 'Equipo campeón', value: state.teams[0]?.name || 'Sin datos' },
    { title: 'Participante campeón', value: state.champion?.name || 'Sin coronar' },
    { title: 'Número de partidos', value: String(state.history.length) },
    { title: 'Promedio de goles', value: `${averageGoals}` },
    { title: 'Mejor perdedor', value: bestLoserValue },
    { title: 'Partido con más goles', value: highestScoring ? `${highestScoring.match.playerA} ${highestScoring.match.scoreA} - ${highestScoring.match.scoreB} ${highestScoring.match.playerB}` : 'Sin datos' }
  ];

  refs.statsPanel.innerHTML = metrics
    .map((metric) => `
      <div class="metric-box">
        <h4>${metric.title}</h4>
        <div class="metric-value">${metric.value}</div>
      </div>
    `)
    .join('');
}

function renderHistory() {
  refs.historyList.innerHTML = '';
  refs.recentMatches.innerHTML = '';
  if (!state.history.length) {
    refs.historyList.innerHTML = '<div class="history-row"><span>Aún no hay partidos jugados.</span></div>';
    refs.recentMatches.innerHTML = '<div class="history-row"><span>Aún no hay resultados registrados.</span></div>';
    return;
  }

  state.history.slice().reverse().forEach((match) => {
    [refs.historyList, refs.recentMatches].forEach((container) => {
      const row = document.createElement('div');
      row.className = 'history-row';
      row.innerHTML = `
        <span>${match.round}</span>
        <strong>${match.playerA} ${match.scoreA} - ${match.scoreB} ${match.playerB}</strong>
        <span>Ganador: ${match.winnerName}</span>
      `;
      container.appendChild(row);
    });
  });
}

function renderChampion() {
  if (!state.champion) {
    refs.championContent.innerHTML = '<div class="champion-badge">🏆</div><h4>Sin campeón aún</h4>';
    return;
  }

  refs.championContent.innerHTML = `
    <div class="champion-badge">🏆</div>
    <h4>${state.champion.name}</h4>
    <div>${state.champion.teamName || 'Equipo ganador'}</div>
    <div>🔥 ¡CAMPEÓN DEL TORNEO DE FIFA LA GANGA! 🔥</div>
  `;
}

function render() {
  renderDashboard();
  renderPhaseProgress();
  renderFeaturedMatchup();
  renderTopScorers();
  renderParticipants();
  renderTeams();
  renderDrawResults();
  renderBracket();
  renderStatsPanel();
  renderHistory();
  renderChampion();
  updateSettingsInputs();
  saveState();
}

function updateSettingsInputs() {
  refs.allowRepeatTeams.checked = state.settings.allowRepeatTeams;
  refs.soundToggle.checked = state.settings.soundOn;
  refs.animationsToggle.checked = state.settings.animationsOn;
  refs.bestLoserToggle.checked = state.settings.bestLoserRule;
}

function playSound(kind) {
  if (!state.settings.soundOn || !window.AudioContext) return;

  const context = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = kind === 'draw' ? 'triangle' : 'sine';
  oscillator.frequency.value = kind === 'draw' ? 440 : 660;
  gain.gain.value = 0.02;
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.18);
}

bind();
render();
