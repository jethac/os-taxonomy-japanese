const profiles = {
  compare: {
    key: 'ja-shared-capability',
    dir: null,
    label: 'Compare',
    axisLabel: 'Capability progression',
    axisValue(topic) {
      return topic.stage ?? 1;
    },
    formatRange(topic) {
      return capabilityStageLabel(topic.stage ?? 1);
    }
  },
  'native-child': {
    key: 'ja-L1-child',
    dir: 'native-child',
    label: 'Native child',
    axisLabel: 'Grade',
    axisValue(topic) {
      return topic.gradeRangeStart ?? topic.ageRangeStart ?? 0;
    },
    formatRange(topic) {
      const grade =
        topic.gradeRangeStart === null
          ? topic.ageRangeStart === topic.ageRangeEnd
            ? `age ${topic.ageRangeStart}`
            : `age ${topic.ageRangeStart}-${topic.ageRangeEnd}`
          : topic.gradeRangeStart === topic.gradeRangeEnd
            ? `grade ${topic.gradeRangeStart}`
            : `grade ${topic.gradeRangeStart}-${topic.gradeRangeEnd}`;
      return grade;
    }
  },
  'l2-adult': {
    key: 'ja-L2-adult',
    dir: 'l2-adult',
    label: 'Adult L2',
    axisLabel: 'Level',
    axisValue(topic) {
      return levelValue(topic.levelRangeStart);
    },
    formatRange(topic) {
      return topic.levelRangeStart === topic.levelRangeEnd
        ? `${topic.levelRangeStart}`
        : `${topic.levelRangeStart}-${topic.levelRangeEnd}`;
    }
  }
};

const domainColors = [
  '#49d9c8',
  '#f6b95d',
  '#8297ff',
  '#ff6f91',
  '#78d67c',
  '#f58b57',
  '#6db9ff',
  '#c78cff',
  '#ff544d',
  '#61c99c',
  '#68d2e8',
  '#d9829e',
  '#e5d7bd'
];

const jlptLevels = ['N5', 'N4', 'N3', 'N2', 'N1'];
const jlptBridges = [
  ['N5', 'N4'],
  ['N4', 'N3'],
  ['N3', 'N2'],
  ['N2', 'N1']
];

const domainLabelsJa = {
  'Grammar & Structure': '文法・構造',
  'Information & Research': '情報・探究',
  'Learning & Reflection': '学習・振り返り',
  'Pragmatics & Culture': '語用論・文化',
  'Reading & Literature': '読解・文学',
  'Script & Orthography': '文字・表記',
  'Sound & Listening': '音声・聴解',
  'Speaking & Interaction': '発話・やり取り',
  'Vocabulary & Meaning': '語彙・意味',
  'Workplace & Intercultural': '職場・異文化',
  'Writing & Expression': '作文・表現',
  'Business Communication & Workplace Japanese': 'ビジネスコミュニケーション・職場日本語',
  'Discussion & Presentation': '話し合い・発表',
  'Grammar & Language Awareness': '文法・言語への気づき',
  'Handwriting & Transcription': '書写・転記',
  'Information Use & Media Literacy': '情報活用・メディアリテラシー',
  'Intercultural Communication': '異文化間コミュニケーション',
  'Kana & Orthography': 'かな・表記',
  'Kanji & Morphographic Literacy': '漢字・表語文字リテラシー',
  'Language Culture & Variation': '言語文化・変異',
  'Learning Strategies & Meta-Language': '学習方略・メタ言語',
  'Learning Strategies & Reflection': '学習方略・振り返り',
  'Morphology & Conjugation': '形態論・活用',
  'Oral Language & Listening': '話し言葉・聞くこと',
  'Particles & Information Structure': '助詞・情報構造',
  'Phonology & Listening': '音韻・聞き取り',
  'Pragmatics & Sociolinguistics': '語用論・社会言語学',
  'Reading Comprehension': '読解',
  'Reading Informational Texts': '説明的文章の読解',
  'Reading Literature': '文学的文章の読解',
  'Speaking & Interaction': '話すこと・やり取り',
  'Syntax & Clause Combining': '統語・節の結合',
  'Vocabulary & Semantics': '語彙・意味',
  'Vocabulary & Word Knowledge': '語彙・語の知識',
  'Writing Composition': '作文・文章表現',
  'Writing System & Orthography': '文字体系・表記'
};

const typeLabelsJa = {
  CONCEPTUAL: '概念',
  LANGUAGE: '言語',
  META: 'メタ認知',
  PROCEDURAL: '手続き',
  REPRESENTATIONAL: '表象'
};

const scriptLabelsJa = {
  hiragana: 'ひらがな',
  kana: 'かな',
  kanji: '漢字',
  katakana: 'カタカナ',
  romaji: 'ローマ字'
};

const dependencyStrengthLabelsJa = {
  hard: '必須',
  soft: '推奨'
};

const redistributionLabelsJa = {
  'citation-level': '引用情報のみ',
  'codes-only': 'コードのみ',
  'level-tags-only': 'レベルタグのみ',
  'metadata-only': 'メタデータのみ',
  'original-project-text': 'プロジェクト独自テキスト'
};

const viewerCopy = {
  en: {
    title: 'Japanese Learning Atlas',
    wordmark: 'Learning atlas',
    nativePath: 'Native path',
    adultPath: 'Adult L2',
    comparePath: 'Compare',
    sameMap: 'One map',
    differentRoutes: 'different routes',
    coverageLens: 'Coverage lens',
    routeView: 'Routes',
    differencesView: 'Differences',
    coverageView: 'Coverage',
    beyondView: 'Beyond exams',
    nativeRoute: 'Native route',
    l2Route: 'Adult L2 route',
    directCoverage: 'Direct coverage',
    ringWeight: 'Ring weight = modelled emphasis',
    noCoverageLens: 'No assessment lens',
    mextLens: 'MEXT school curriculum',
    capabilities: 'Capabilities',
    routes: 'Routes',
    filters: 'Filters',
    about: 'About',
    aboutPath: 'About this learning path',
    light: 'Light',
    dark: 'Dark',
    useLight: 'Use light theme',
    useDark: 'Use dark theme',
    heroEyebrow: 'Open curriculum map · Grades 1–12 and JLPT N5–N1',
    searchPlaceholder: 'Search concepts, 日本語, JLPT…',
    graphInstructions: 'Drag to orbit · Shift-drag to pan · Scroll to zoom · Select a point to trace what comes before and after.',
    domains: 'Domains',
    selectToFocus: 'select to focus',
    jlptJourney: 'JLPT journey',
    jlptChoose: 'Choose a level or the bridge between levels',
    allL2: 'All L2',
    selectedConcept: 'Selected concept',
    selectConcept: 'Select a concept',
    before: 'before',
    next: 'next',
    masteryEvidence: 'Mastery evidence',
    assessmentPrompt: 'Assessment prompt',
    learningConnections: 'Learning connections',
    buildsOn: 'Builds directly on',
    unlocksNext: 'Unlocks next',
    curriculumAlignment: 'Curriculum alignment',
    standards: 'Standards',
    referenceAlignments: 'Reference alignments',
    sourceProvenance: 'Source provenance',
    charactersVocabulary: 'Characters and vocabulary',
    exportShare: 'Export and share',
    copyTopic: 'Copy Topic',
    copyPath: 'Copy Path',
    copyList: 'Copy List',
    shareLink: 'Share Link',
    exploreDataset: 'Explore the dataset',
    profile: 'Profile',
    domain: 'Domain',
    cluster: 'Cluster',
    type: 'Type',
    gradeLevel: 'Grade / Level',
    standard: 'Standard',
    script: 'Script',
    edgeMode: 'Edge mode',
    trace: 'Trace',
    companion: 'Companion',
    resetFilters: 'Reset filters',
    coverageSnapshot: 'Coverage snapshot',
    clusterSummary: 'Cluster summary',
    standardSummary: 'Standard summary',
    comparison: 'L1 / L2 comparison',
    gradeDomainCells: 'Grade-domain cells',
    jlptDomainCells: 'JLPT-domain cells',
    bjtDomainCells: 'BJT-domain cells',
    proficiencyLevels: 'Proficiency levels',
    topics: 'Topics',
    dependencies: 'Dependencies',
    allDomains: 'All domains',
    allTypes: 'All types',
    allScripts: 'All scripts',
    allJlpt: 'All JLPT',
    allBjt: 'All BJT',
    allTopics: 'All topics',
    allClusters: 'All clusters',
    allStandards: 'All standards',
    prerequisitePath: 'Prerequisite path',
    unlockTree: 'Unlock tree',
    unlocks: 'Unlocks',
    dependsOn: 'Depends on',
    charactersLexemes: 'Characters + lexemes',
    characters: 'Characters',
    lexemes: 'Lexemes',
    off: 'Off',
    chooseLevel: 'Select a level to see its concepts, or an arrow to see what carries forward.',
    alignedConcepts: 'aligned concepts',
    inspectPrerequisites: 'Choose a point to inspect its prerequisites.',
    foundations: 'foundations',
    destinations: 'destinations',
    tracedPrerequisites: 'Found by tracing destination prerequisites.',
    visible: 'visible',
    allGrades: 'All grades',
    preGrade: 'Pre-grade',
    allLevels: 'All levels',
    selectedStandardMissing: 'Selected standard is not documented in this profile.',
    textIncluded: 'text included',
    noSourceText: 'no source text',
    citationMetadata: 'Citation-level alignment metadata.',
    noGraphConnections: 'None in this graph.',
    noReferenceAlignments: 'No textbook or reference sequence alignments are recorded for this topic.',
    metadataOnlyAlignment: 'Metadata-only alignment.',
    noSourceTags: 'No source tags are recorded for this topic.',
    undocumentedSource: 'Source tag is not documented in shared source metadata.',
    noCompanionData: 'No linked character or vocabulary data for this topic.',
    copyComplete: 'Copied.',
    exportReady: 'Ready to copy.'
  },
  ja: {
    title: '日本語学習アトラス',
    wordmark: '学習アトラス',
    nativePath: '母語話者',
    adultPath: '成人L2',
    comparePath: '比較',
    sameMap: 'ひとつの地図',
    differentRoutes: '異なる学習経路',
    coverageLens: 'カバレッジ表示',
    routeView: '経路',
    differencesView: '相違点',
    coverageView: '範囲内',
    beyondView: '試験範囲外',
    nativeRoute: '母語話者の経路',
    l2Route: '成人L2の経路',
    directCoverage: '直接対象',
    ringWeight: 'リングの太さ＝モデル上の重点',
    noCoverageLens: '評価基準なし',
    mextLens: '文科省学習指導要領',
    capabilities: '能力領域',
    routes: '経路',
    filters: '絞り込み',
    about: '概要',
    aboutPath: 'この学習経路について',
    light: 'ライト',
    dark: 'ダーク',
    useLight: 'ライトテーマに切り替える',
    useDark: 'ダークテーマに切り替える',
    heroEyebrow: 'オープンカリキュラム · 小1〜高3・JLPT N5〜N1',
    searchPlaceholder: '概念・日本語・JLPTを検索…',
    graphInstructions: 'ドラッグで回転 · Shift＋ドラッグで移動 · スクロールで拡大縮小 · 点を選んで前後のつながりを確認',
    domains: '領域',
    selectToFocus: '選択して絞り込む',
    jlptJourney: 'JLPT学習経路',
    jlptChoose: 'レベル、またはレベル間の矢印を選択',
    allL2: 'L2すべて',
    selectedConcept: '選択中の概念',
    selectConcept: '概念を選択',
    before: '前提',
    next: '次へ',
    masteryEvidence: '習得の証拠',
    assessmentPrompt: '評価課題',
    learningConnections: '学習のつながり',
    buildsOn: '直接の前提',
    unlocksNext: '次に広がる概念',
    curriculumAlignment: 'カリキュラム対応',
    standards: '基準',
    referenceAlignments: '参照対応',
    sourceProvenance: '出典情報',
    charactersVocabulary: '文字と語彙',
    exportShare: '書き出し・共有',
    copyTopic: '概念をコピー',
    copyPath: '経路をコピー',
    copyList: '一覧をコピー',
    shareLink: 'リンクを共有',
    exploreDataset: 'データセットを探索',
    profile: '学習者',
    domain: '領域',
    cluster: 'クラスター',
    type: '種類',
    gradeLevel: '学年・レベル',
    standard: '基準',
    script: '文字体系',
    edgeMode: '接続方向',
    trace: '経路表示',
    companion: '関連データ',
    resetFilters: '絞り込みをリセット',
    coverageSnapshot: 'カバレッジ',
    clusterSummary: 'クラスター概要',
    standardSummary: '基準の概要',
    comparison: 'L1 / L2 比較',
    gradeDomainCells: '学年×領域',
    jlptDomainCells: 'JLPT×領域',
    bjtDomainCells: 'BJT×領域',
    proficiencyLevels: '習熟度レベル',
    topics: '概念',
    dependencies: '前提関係',
    allDomains: 'すべての領域',
    allTypes: 'すべての種類',
    allScripts: 'すべての文字体系',
    allJlpt: 'JLPTすべて',
    allBjt: 'BJTすべて',
    allTopics: 'すべての概念',
    allClusters: 'すべてのクラスター',
    allStandards: 'すべての基準',
    prerequisitePath: '前提経路',
    unlockTree: '次に広がる経路',
    unlocks: '次へ',
    dependsOn: '前提へ',
    charactersLexemes: '文字＋語彙',
    characters: '文字',
    lexemes: '語彙',
    off: '非表示',
    chooseLevel: 'レベルを選ぶと対応概念、矢印を選ぶと次のレベルへの橋渡しを表示します。',
    alignedConcepts: '対応概念',
    inspectPrerequisites: '点を選ぶと前提関係を確認できます。',
    foundations: '基礎概念',
    destinations: '到達概念',
    tracedPrerequisites: '到達概念の前提経路から抽出しています。',
    visible: '表示中',
    allGrades: 'すべての学年',
    preGrade: '就学前',
    allLevels: 'すべてのレベル',
    selectedStandardMissing: 'このプロフィールには、選択した基準の記録がありません。',
    textIncluded: '本文収録',
    noSourceText: '本文なし',
    citationMetadata: '引用単位の対応メタデータです。',
    noGraphConnections: 'このグラフには接続がありません。',
    noReferenceAlignments: 'この概念には教科書・参照順序との対応記録がありません。',
    metadataOnlyAlignment: 'メタデータのみの対応です。',
    noSourceTags: 'この概念には出典タグがありません。',
    undocumentedSource: '共有出典メタデータに未登録の出典タグです。',
    noCompanionData: 'この概念に関連づけられた文字・語彙データはありません。',
    copyComplete: 'コピーしました。',
    exportReady: 'コピーの準備ができました。'
  }
};

const localizedProfiles = {
  en: {
    compare: {
      headline: 'One map, two journeys',
      label: 'Shared capability map',
      axis: 'Foundation to advanced',
      summary: 'The points stay fixed. Native children and adult second-language learners reach the same broad Japanese capabilities through different routes, at different depths, and with different blind spots.',
      approach: [
        'Use the route rings to compare where native schooling and adult L2 instruction spend their attention.',
        'Apply an assessment lens without mistaking exam coverage for the whole of Japanese ability.',
        'Select any capability to inspect the underlying native and L2 topics side by side.'
      ]
    },
    'native-child': {
      headline: 'From first marks to fluent thought',
      label: 'Native child',
      axis: 'Grade and age'
    },
    'l2-adult': {
      headline: 'From first sounds to confident Japanese',
      label: 'Adult L2',
      axis: 'JF/CEFR-style proficiency'
    }
  },
  ja: {
    compare: {
      headline: 'ひとつの地図、二つの道筋',
      label: '共通能力マップ',
      axis: '基礎から高度へ',
      summary: '点の位置は変わりません。母語話者の児童と成人の第二言語学習者は、異なる経路、深さ、空白を通って、日本語の共通する能力領域へ到達します。',
      approach: [
        '外側の経路リングで、学校教育と成人L2教育がどこに重点を置くかを比較します。',
        '試験範囲を日本語能力の全体と取り違えず、独立した評価レンズとして重ねます。',
        '能力領域を選ぶと、その下にある母語話者向けとL2向けの概念を並べて確認できます。'
      ]
    },
    'native-child': {
      headline: '最初の一画から、ことばで考える力へ',
      label: '母語話者の児童',
      axis: '学年・年齢',
      summary: 'L1児童向けグラフは、年齢相応の話しことばがすでに育っていることを前提に、学校での読み書き、表現、思考へと学びを広げます。',
      approach: [
        '既に身についた話しことばを、かな・漢字・文章表現へ結びつけます。',
        '学年に沿って読解、作文、対話、メディアリテラシーを広げます。',
        '文字や語彙は単独の点ではなく、活用できる学習概念に関連づけます。'
      ]
    },
    'l2-adult': {
      headline: '最初の音から、自信ある日本語へ',
      label: '成人L2',
      axis: 'JF/CEFR型の習熟度',
      summary: '成人L2向けグラフは、音声・文字・語彙の知識がない出発点から、明示的な形式、高頻度のコミュニケーション、発音、習熟度、職場日本語へと学びをつなぎます。',
      approach: [
        'かな、モーラ、自己紹介、質問、聞き返しから始めます。',
        '助詞や活用を、意味と形の対応として明示的に扱います。',
        '文法はコミュニケーション上の有用性と前提関係に沿って配置します。',
        'JLPTとBJTは到達目標ではなく、学習経路を探索するための対応軸として使います。'
      ]
    }
  }
};

const state = {
  datasets: {},
  shared: null,
  commentary: null,
  localization: null,
  jaTextBySource: new Map(),
  profileId: 'compare',
  coverageLens: 'none',
  comparisonView: 'routes',
  locale: 'en',
  theme: 'dark',
  selectedId: null,
  search: '',
  domain: 'all',
  cluster: 'all',
  type: 'all',
  axis: 'all',
  standard: 'all',
  script: 'all',
  jlpt: 'all',
  jlptJourney: null,
  jlptJourneyContext: null,
  bjt: 'all',
  edgeMode: 'unlocks',
  traceMode: 'all',
  displayMode: 'english',
  companionLayer: 'all',
  graphZoom: 1,
  graphPanX: 0,
  graphPanY: 0,
  isPanning: false,
  panStart: null,
  pendingNodeClick: null,
  graphModel: null,
  graphContext2d: null,
  graphBackgroundCanvas: null,
  graphLayerCanvas: null,
  graphDeviceRatio: 1,
  graphTransformFrame: null,
  graphAnimationFrame: null,
  graphLastFrameTime: null,
  graphFrameIntervals: [],
  graphDrawDurations: [],
  graphLastDrawMs: 0,
  graphLastMotionDrawMs: 0,
  graphLastFullDrawMs: 0,
  graphOrbit: 0.58,
  graphTilt: -0.27,
  graphOrbitTarget: null,
  graphTiltTarget: null,
  graphZoomTarget: null,
  graphDragMode: null,
  graphReveal: 0,
  graphRevealProfile: null,
  graphRevealStarted: null,
  graphReducedMotion: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
  graphMotionQuality: false,
  graphWasAnimating: false,
  graphKeyboardIndex: -1,
  graphHoverId: null,
  drawerMode: null,
  exportText: ''
};

const els = {
  profileSelect: document.querySelector('#profileSelect'),
  searchInput: document.querySelector('#searchInput'),
  domainSelect: document.querySelector('#domainSelect'),
  clusterSelect: document.querySelector('#clusterSelect'),
  typeSelect: document.querySelector('#typeSelect'),
  axisSelect: document.querySelector('#axisSelect'),
  standardSelect: document.querySelector('#standardSelect'),
  scriptSelect: document.querySelector('#scriptSelect'),
  jlptSelect: document.querySelector('#jlptSelect'),
  bjtSelect: document.querySelector('#bjtSelect'),
  edgeModeSelect: document.querySelector('#edgeModeSelect'),
  traceModeSelect: document.querySelector('#traceModeSelect'),
  companionLayerSelect: document.querySelector('#companionLayerSelect'),
  themeToggle: document.querySelector('#themeToggle'),
  themeIcon: document.querySelector('#themeIcon'),
  themeLabel: document.querySelector('#themeLabel'),
  themeColor: document.querySelector('#themeColor'),
  graph: document.querySelector('#graph'),
  heroTitle: document.querySelector('#heroTitle'),
  profileSummary: document.querySelector('#profileSummary'),
  profileTitle: document.querySelector('#profileTitle'),
  pathRibbon: document.querySelector('#pathRibbon'),
  graphCounts: document.querySelector('#graphCounts'),
  compareControls: document.querySelector('#compareControls'),
  coverageLensSelect: document.querySelector('#coverageLensSelect'),
  domainLegend: document.querySelector('#domainLegend'),
  jlptNavigator: document.querySelector('#jlptNavigator'),
  jlptSteps: document.querySelector('#jlptSteps'),
  jlptJourneySummary: document.querySelector('#jlptJourneySummary'),
  graphTooltip: document.querySelector('#graphTooltip'),
  detailRegion: document.querySelector('#detailRegion'),
  detailClose: document.querySelector('#detailClose'),
  topicBeforeCount: document.querySelector('#topicBeforeCount'),
  topicNextCount: document.querySelector('#topicNextCount'),
  filterPanel: document.querySelector('#filterPanel'),
  filterToggle: document.querySelector('#filterToggle'),
  aboutToggle: document.querySelector('#aboutToggle'),
  filterClose: document.querySelector('#filterClose'),
  panelScrim: document.querySelector('#panelScrim'),
  drawerTitle: document.querySelector('#drawerTitle'),
  resetFilters: document.querySelector('#resetFilters'),
  activeFilterCount: document.querySelector('#activeFilterCount'),
  topicName: document.querySelector('#topicName'),
  topicMeta: document.querySelector('#topicMeta'),
  topicDescription: document.querySelector('#topicDescription'),
  topicEvidence: document.querySelector('#topicEvidence'),
  masterySummary: document.querySelector('#masterySummary'),
  capabilityRouteComparison: document.querySelector('#capabilityRouteComparison'),
  assessmentHeading: document.querySelector('#assessmentHeading'),
  topicAssessment: document.querySelector('#topicAssessment'),
  topicPrereqs: document.querySelector('#topicPrereqs'),
  topicUnlocks: document.querySelector('#topicUnlocks'),
  topicStandards: document.querySelector('#topicStandards'),
  topicReferences: document.querySelector('#topicReferences'),
  topicSources: document.querySelector('#topicSources'),
  topicCompanion: document.querySelector('#topicCompanion'),
  exportOutput: document.querySelector('#exportOutput'),
  exportStatus: document.querySelector('#exportStatus'),
  commentaryTitle: document.querySelector('#commentaryTitle'),
  commentarySummary: document.querySelector('#commentarySummary'),
  approachList: document.querySelector('#approachList'),
  coverageSnapshot: document.querySelector('#coverageSnapshot'),
  clusterSummary: document.querySelector('#clusterSummary'),
  standardSummary: document.querySelector('#standardSummary'),
  comparisonTable: document.querySelector('#comparisonTable')
};

function t(key) {
  return viewerCopy[state.locale]?.[key] ?? viewerCopy.en[key] ?? key;
}

function localizedProse(value) {
  if (state.locale !== 'ja' || typeof value !== 'string' || !value.trim()) return value ?? '';
  return (state.jaTextBySource.get(value.trim()) ?? value).replaceAll('{{name}}', '学習者');
}

function localizedScript(script) {
  return state.locale === 'ja' ? scriptLabelsJa[script] ?? script : script;
}

function localizedDependencyStrength(strength) {
  return state.locale === 'ja' ? dependencyStrengthLabelsJa[strength] ?? strength : strength;
}

function localizedRedistribution(value) {
  return state.locale === 'ja' ? redistributionLabelsJa[value] ?? localizedProse(value) : value;
}

function restoreViewerPreferences() {
  const params = new URLSearchParams(window.location.hash.slice(1));
  let storedLocale = null;
  let storedTheme = null;
  try {
    storedLocale = window.localStorage.getItem('japanese-atlas-locale');
    storedTheme = window.localStorage.getItem('japanese-atlas-theme');
  } catch {
    // Storage can be unavailable in hardened browser contexts.
  }
  const hashLocale = params.get('lang');
  const hashTheme = params.get('theme');
  state.locale = ['en', 'ja'].includes(hashLocale) ? hashLocale : ['en', 'ja'].includes(storedLocale) ? storedLocale : 'en';
  const preferredTheme = 'dark';
  state.theme = ['light', 'dark'].includes(hashTheme)
    ? hashTheme
    : ['light', 'dark'].includes(storedTheme)
      ? storedTheme
      : preferredTheme;
  state.displayMode = state.locale === 'ja' ? 'japanese' : 'english';
}

function persistViewerPreferences() {
  try {
    window.localStorage.setItem('japanese-atlas-locale', state.locale);
    window.localStorage.setItem('japanese-atlas-theme', state.theme);
  } catch {
    // The URL hash still preserves both preferences when storage is unavailable.
  }
}

async function setViewerLocale(locale) {
  if (!['en', 'ja'].includes(locale) || locale === state.locale) return;
  if (locale === 'ja') await ensureJapaneseLocalization();
  state.locale = locale;
  state.displayMode = locale === 'ja' ? 'japanese' : 'english';
  applyViewerPreferences();
}

function installJapaneseLocalization(localization) {
  state.localization = localization;
  state.jaTextBySource = new Map(localization.entries.map((entry) => [entry.source, entry.ja]));
}

async function ensureJapaneseLocalization() {
  if (state.localization) return state.localization;
  const localization = await fetchJson('/data/locales/ja.json');
  installJapaneseLocalization(localization);
  return localization;
}

function setViewerTheme(theme) {
  if (!['light', 'dark'].includes(theme) || theme === state.theme) return;
  state.theme = theme;
  applyViewerPreferences();
}

function applyViewerPreferences({ renderContent = true } = {}) {
  const root = document.documentElement;
  root.lang = state.locale;
  root.dataset.theme = state.theme;
  document.title = t('title');
  els.themeColor.content = state.theme === 'light' ? '#f4f1e8' : '#080b13';
  els.searchInput.placeholder = t('searchPlaceholder');
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-language-action]').forEach((button) => {
    button.setAttribute('aria-pressed', button.dataset.languageAction === state.locale ? 'true' : 'false');
  });

  const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
  els.themeIcon.textContent = state.theme === 'dark' ? '☀' : '☾';
  els.themeLabel.textContent = t(nextTheme);
  els.themeToggle.setAttribute('aria-label', t(nextTheme === 'light' ? 'useLight' : 'useDark'));
  els.themeToggle.title = t(nextTheme === 'light' ? 'useLight' : 'useDark');
  document.querySelector('#graphInstructions').textContent = t('graphInstructions');
  document.querySelector('.graphHint').textContent = state.locale === 'ja' ? '回転: ドラッグ · 移動: Shift＋ドラッグ · 拡大縮小: スクロール' : 'Orbit: drag · Pan: shift + drag · Zoom: scroll';
  document.querySelector('.wordmark').setAttribute('aria-label', state.locale === 'ja' ? `${t('title')} ホーム` : `${t('title')} home`);
  document.querySelector('.primaryControls').setAttribute('aria-label', state.locale === 'ja' ? '主なグラフ操作' : 'Primary graph controls');
  document.querySelector('.profileSwitch').setAttribute('aria-label', state.locale === 'ja' ? '学習者プロフィール' : 'Learner profile');
  document.querySelector('.viewerSettings').setAttribute('aria-label', state.locale === 'ja' ? '表示設定' : 'Viewer settings');
  document.querySelector('.languageSwitch').setAttribute('aria-label', state.locale === 'ja' ? '表示言語' : 'Language');
  els.detailClose.setAttribute('aria-label', state.locale === 'ja' ? '選択を解除' : 'Clear selected topic');
  els.filterClose.setAttribute('aria-label', state.locale === 'ja' ? '絞り込みを閉じる' : 'Close filters');
  els.graph.setAttribute('aria-label', state.locale === 'ja' ? '日本語学習概念グラフ' : 'Japanese language concept graph');
  persistViewerPreferences();

  if (renderContent && state.datasets[state.profileId]) {
    syncControls();
    render();
    updateHash();
  }
}

init().catch((error) => {
  document.body.innerHTML = `<pre>${escapeHtml(error.stack ?? error.message)}</pre>`;
});

async function init() {
  restoreViewerPreferences();
  applyViewerPreferences({ renderContent: false });
  els.detailRegion.inert = true;
  els.filterPanel.inert = true;
  const [nativeData, l2Data, capabilityData, commentary, shared, localization] = await Promise.all([
    loadGraph('native-child'),
    loadGraph('l2-adult'),
    fetchJson('/data/shared/capabilities.json'),
    fetchJson('/data/profile-commentary.json'),
    loadSharedData(),
    state.locale === 'ja' ? fetchJson('/data/locales/ja.json') : Promise.resolve(null)
  ]);
  state.datasets['native-child'] = nativeData;
  state.datasets['l2-adult'] = l2Data;
  state.datasets.compare = buildCompareDataset(capabilityData, nativeData, l2Data);
  state.commentary = commentary;
  state.shared = shared;
  if (localization) installJapaneseLocalization(localization);
  restoreFromHash();

  els.profileSelect.addEventListener('change', () => switchProfile(els.profileSelect.value));
  document.querySelectorAll('[data-profile-action]').forEach((button) => {
    button.addEventListener('click', () => switchProfile(button.dataset.profileAction));
  });
  document.querySelectorAll('[data-language-action]').forEach((button) => {
    button.addEventListener('click', () => void setViewerLocale(button.dataset.languageAction));
  });
  els.themeToggle.addEventListener('click', () => setViewerTheme(state.theme === 'dark' ? 'light' : 'dark'));
  els.coverageLensSelect.addEventListener('change', () => {
    state.coverageLens = els.coverageLensSelect.value;
    if (state.coverageLens !== 'none' && state.comparisonView === 'routes') state.comparisonView = 'coverage';
    if (state.coverageLens === 'none' && ['coverage', 'beyond'].includes(state.comparisonView)) state.comparisonView = 'routes';
    syncComparisonControls();
    renderGraph();
    renderSelectedTopic();
    renderStandardSummary();
    updateFilterBadge();
    updateHash();
  });
  document.querySelectorAll('[data-comparison-view]').forEach((button) => {
    button.addEventListener('click', () => {
      state.comparisonView = button.dataset.comparisonView;
      if (['coverage', 'beyond'].includes(state.comparisonView) && state.coverageLens === 'none') {
        state.coverageLens = 'jlpt:N1';
      }
      syncComparisonControls();
      renderGraph();
      renderSelectedTopic();
      renderStandardSummary();
      updateHash();
    });
  });
  els.searchInput.addEventListener('input', () => {
    state.search = els.searchInput.value.trim().toLowerCase();
    renderGraph();
    updateFilterBadge();
  });
  els.domainSelect.addEventListener('change', () => {
    state.domain = els.domainSelect.value;
    renderGraph();
    updateFilterBadge();
  });
  els.clusterSelect.addEventListener('change', () => {
    state.cluster = els.clusterSelect.value;
    renderGraph();
    renderSelectedTopic();
    renderClusterSummary();
    updateFilterBadge();
  });
  els.typeSelect.addEventListener('change', () => {
    state.type = els.typeSelect.value;
    renderGraph();
    updateFilterBadge();
  });
  els.axisSelect.addEventListener('change', () => {
    state.axis = els.axisSelect.value;
    renderGraph();
    updateFilterBadge();
  });
  els.standardSelect.addEventListener('change', () => {
    state.standard = els.standardSelect.value;
    renderGraph();
    renderStandardSummary();
    updateFilterBadge();
  });
  els.scriptSelect.addEventListener('change', () => {
    state.script = els.scriptSelect.value;
    renderGraph();
    updateFilterBadge();
  });
  els.jlptSelect.addEventListener('change', () => {
    const level = els.jlptSelect.value;
    if (state.profileId === 'compare') {
      state.coverageLens = level === 'all' ? 'none' : `jlpt:${level}`;
      state.comparisonView = level === 'all' ? 'routes' : 'coverage';
      syncComparisonControls();
      renderGraph();
      renderSelectedTopic();
      renderStandardSummary();
      updateFilterBadge();
      updateHash();
      return;
    }
    applyJlptJourney(level === 'all' ? null : `level:${level}`);
  });
  els.bjtSelect.addEventListener('change', () => {
    if (state.profileId === 'compare') {
      const level = els.bjtSelect.value;
      state.bjt = 'all';
      state.coverageLens = level === 'all' ? 'none' : `bjt:${level}`;
      state.comparisonView = level === 'all' ? 'routes' : 'coverage';
      syncComparisonControls();
      renderSelectedTopic();
      renderStandardSummary();
      updateHash();
    } else {
      state.bjt = els.bjtSelect.value;
    }
    renderGraph();
    updateFilterBadge();
  });
  els.edgeModeSelect.addEventListener('change', () => {
    state.edgeMode = els.edgeModeSelect.value;
    renderGraph();
  });
  els.traceModeSelect.addEventListener('change', () => {
    state.traceMode = els.traceModeSelect.value;
    renderGraph();
    updateFilterBadge();
    updateHash();
  });
  els.companionLayerSelect.addEventListener('change', () => {
    state.companionLayer = els.companionLayerSelect.value;
    renderSelectedTopic();
  });
  document.querySelectorAll('[data-graph-action]').forEach((button) => {
    button.addEventListener('click', () => handleGraphAction(button.dataset.graphAction));
  });
  els.graph.addEventListener('wheel', handleGraphWheel, { passive: false });
  els.graph.addEventListener('pointerdown', handleGraphPointerDown);
  els.graph.addEventListener('keydown', handleGraphKeyDown);
  els.graph.addEventListener('contextmenu', (event) => event.preventDefault());
  els.graph.addEventListener('pointerleave', () => {
    if (!state.isPanning) {
      state.graphHoverId = null;
      hideGraphTooltip();
      els.graph.style.cursor = 'grab';
      scheduleGraphAnimation();
    }
  });
  window.addEventListener('pointermove', handleGraphPointerMove);
  window.addEventListener('pointerup', handleGraphPointerUp);
  window.addEventListener('pointercancel', handleGraphPointerUp);
  window.addEventListener('resize', () => {
    window.clearTimeout(state.graphResizeTimer);
    state.graphResizeTimer = window.setTimeout(() => renderGraph(), 120);
  });

  els.detailClose.addEventListener('click', clearSelectedTopic);
  document.querySelector('.wordmark').addEventListener('click', (event) => {
    event.preventDefault();
    clearSelectedTopic();
    resetGraphViewport();
    scheduleGraphSceneDraw();
  });
  els.filterToggle.addEventListener('click', () => toggleDrawer('filters'));
  els.aboutToggle.addEventListener('click', () => toggleDrawer('about'));
  els.filterClose.addEventListener('click', closeDrawer);
  els.panelScrim.addEventListener('click', closeDrawer);
  els.resetFilters.addEventListener('click', resetAllFilters);
  els.domainLegend.addEventListener('click', (event) => {
    const button = event.target.closest('[data-domain-filter]');
    if (!button) return;
    state.domain = state.domain === button.dataset.domainFilter ? 'all' : button.dataset.domainFilter;
    els.domainSelect.value = state.domain;
    renderGraph();
    updateFilterBadge();
  });
  els.jlptNavigator.addEventListener('click', (event) => {
    const levelButton = event.target.closest('[data-jlpt-level]');
    if (levelButton) {
      applyJlptJourney(`level:${levelButton.dataset.jlptLevel}`);
      return;
    }
    const bridgeButton = event.target.closest('[data-jlpt-bridge]');
    if (bridgeButton) {
      applyJlptJourney(`bridge:${bridgeButton.dataset.jlptBridge}`);
      return;
    }
    if (event.target.closest('[data-jlpt-all]')) applyJlptJourney(null);
  });

  applyViewerPreferences({ renderContent: false });
  syncControls();
  render();
  updateHash();
}

function switchProfile(profileId) {
  if (!profiles[profileId] || profileId === state.profileId) {
    syncProfileButtons();
    return;
  }
  state.profileId = profileId;
  state.selectedId = null;
  state.search = '';
  state.domain = 'all';
  state.cluster = 'all';
  state.type = 'all';
  state.axis = 'all';
  state.standard = 'all';
  state.script = 'all';
  state.jlpt = 'all';
  state.jlptJourney = null;
  state.jlptJourneyContext = null;
  state.bjt = 'all';
  state.exportText = '';
  state.traceMode = 'all';
  state.graphRevealProfile = null;
  state.graphHoverId = null;
  resetGraphViewport();
  hideGraphTooltip();
  syncControls();
  render();
  updateHash();
}

function resetAllFilters() {
  state.search = '';
  state.domain = 'all';
  state.cluster = 'all';
  state.type = 'all';
  state.axis = 'all';
  state.standard = 'all';
  state.script = 'all';
  state.jlpt = 'all';
  state.jlptJourney = null;
  state.jlptJourneyContext = null;
  state.bjt = 'all';
  state.traceMode = 'all';
  state.edgeMode = 'unlocks';
  if (state.profileId === 'compare') {
    state.coverageLens = 'none';
    state.comparisonView = 'routes';
  }
  syncControls();
  renderGraph();
  renderSelectedTopic();
  renderClusterSummary();
  renderStandardSummary();
  updateFilterBadge();
  updateHash();
}

function clearSelectedTopic() {
  state.selectedId = null;
  state.traceMode = 'all';
  state.exportText = '';
  state.graphOrbitTarget = null;
  state.graphTiltTarget = null;
  state.graphZoomTarget = null;
  els.traceModeSelect.value = 'all';
  renderGraph();
  renderSelectedTopic();
  updateHash();
}

function toggleDrawer(mode) {
  if (state.drawerMode === mode) {
    closeDrawer();
    return;
  }
  state.drawerMode = mode;
  els.drawerTitle.textContent = mode === 'about' ? t('aboutPath') : t('filters');
  els.filterPanel.classList.add('isOpen');
  els.filterPanel.setAttribute('aria-hidden', 'false');
  els.filterPanel.inert = false;
  els.filterToggle.setAttribute('aria-expanded', mode === 'filters' ? 'true' : 'false');
  els.aboutToggle.setAttribute('aria-expanded', mode === 'about' ? 'true' : 'false');
  els.panelScrim.hidden = false;
  requestAnimationFrame(() => {
    if (mode === 'about') els.commentaryTitle.scrollIntoView({ block: 'start' });
    else els.filterPanel.scrollTop = 0;
  });
}

function closeDrawer() {
  state.drawerMode = null;
  els.filterPanel.classList.remove('isOpen');
  els.filterPanel.setAttribute('aria-hidden', 'true');
  els.filterPanel.inert = true;
  els.filterToggle.setAttribute('aria-expanded', 'false');
  els.aboutToggle.setAttribute('aria-expanded', 'false');
  els.panelScrim.hidden = true;
  scheduleGraphAnimation();
}

function syncProfileButtons() {
  document.querySelectorAll('[data-profile-action]').forEach((button) => {
    button.setAttribute('aria-pressed', button.dataset.profileAction === state.profileId ? 'true' : 'false');
  });
}

function updateFilterBadge() {
  const values = [
    state.domain,
    state.cluster,
    state.type,
    state.axis,
    state.standard,
    state.script,
    state.jlpt,
    state.bjt,
    state.traceMode
  ];
  const count =
    values.filter((value) => value !== 'all').length +
    (state.search ? 1 : 0) +
    (state.jlptJourney?.startsWith('bridge:') ? 1 : 0) +
    (state.profileId === 'compare' && state.coverageLens !== 'none' ? 1 : 0);
  els.activeFilterCount.hidden = count === 0;
  els.activeFilterCount.textContent = String(count);
}

async function loadGraph(profileId) {
  const dir = profiles[profileId].dir;
  const [topics, dependencies, standards, clusters] = await Promise.all([
    fetchJson(`/data/${dir}/topics.json`),
    fetchJson(`/data/${dir}/dependencies.json`),
    fetchJson(`/data/${dir}/curriculum-standards.json`),
    fetchJson(`/data/${dir}/clusters.json`)
  ]);

  const byId = new Map(topics.topics.map((topic) => [topic.id, topic]));
  const standardByKey = new Map();
  for (const curriculum of standards.curricula) {
    for (const standard of curriculum.topics) {
      standardByKey.set(standard.key, { ...standard, curriculum });
    }
  }

  return {
    topics: topics.topics,
    dependencies: dependencies.dependencies,
    standards,
    clusters: clusters.clusters,
    byId,
    standardByKey
  };
}

function buildCompareDataset(capabilityData, nativeData, l2Data) {
  const capabilityByTopic = new Map();
  const topics = capabilityData.capabilities.map((capability) => {
    for (const topicId of capability.l1TopicIds) capabilityByTopic.set(topicId, capability.id);
    for (const topicId of capability.l2TopicIds) capabilityByTopic.set(topicId, capability.id);
    const nativeTopics = capability.l1TopicIds.map((id) => nativeData.byId.get(id)).filter(Boolean);
    const l2Topics = capability.l2TopicIds.map((id) => l2Data.byId.get(id)).filter(Boolean);
    return {
      ...capability,
      kind: 'capability',
      type: 'CONCEPTUAL',
      description: capability.summary,
      evidence: [],
      assessmentPrompt: '',
      standards: [],
      sourceTags: unique([...nativeTopics, ...l2Topics].flatMap((topic) => topic.sourceTags ?? [])),
      scriptRequirements: unique([...nativeTopics, ...l2Topics].flatMap((topic) => topic.scriptRequirements ?? [])),
      linkedCharacters: unique([...nativeTopics, ...l2Topics].flatMap((topic) => topic.linkedCharacters ?? [])),
      linkedLexemes: unique([...nativeTopics, ...l2Topics].flatMap((topic) => topic.linkedLexemes ?? [])),
      textbookAlignments: [],
      jfLevels: capability.coverage.jfLevels,
      jlptLevels: capability.coverage.jlptLevels,
      bjtLevels: capability.coverage.bjtLevels,
      gradeRangeStart: numericMinimum(capability.coverage.nativeGrades),
      gradeRangeEnd: numericMaximum(capability.coverage.nativeGrades),
      routeCounts: {
        native: capability.l1TopicIds.length,
        l2: capability.l2TopicIds.length
      }
    };
  });

  const edgeByPair = new Map();
  const addRouteEdges = (dataset, route) => {
    for (const edge of dataset.dependencies) {
      const topicId = capabilityByTopic.get(edge.topicId);
      const prerequisiteId = capabilityByTopic.get(edge.prerequisiteId);
      if (!topicId || !prerequisiteId || topicId === prerequisiteId) continue;
      const key = `${prerequisiteId}>${topicId}`;
      if (!edgeByPair.has(key)) {
        edgeByPair.set(key, {
          prerequisiteId,
          topicId,
          strength: edge.strength,
          reason: 'Aggregated progression between learner-neutral capabilities.',
          reasonJa: '学習者に依存しない能力領域間の進行を集約したものです。',
          routes: [],
          routeCounts: { native: 0, l2: 0 }
        });
      }
      const aggregate = edgeByPair.get(key);
      aggregate.routeCounts[route] += 1;
      if (!aggregate.routes.includes(route)) aggregate.routes.push(route);
      if (edge.strength === 'hard') aggregate.strength = 'hard';
    }
  };
  addRouteEdges(nativeData, 'native');
  addRouteEdges(l2Data, 'l2');

  const aggregatedEdges = [...edgeByPair.values()];
  const retained = new Set(
    aggregatedEdges
      .filter((edge) => edge.routeCounts.native + edge.routeCounts.l2 >= 8)
      .map((edge) => `${edge.prerequisiteId}>${edge.topicId}`)
  );
  for (const topic of topics) {
    const hasRetainedConnection = aggregatedEdges.some(
      (edge) => retained.has(`${edge.prerequisiteId}>${edge.topicId}`) &&
        (edge.prerequisiteId === topic.id || edge.topicId === topic.id)
    );
    if (hasRetainedConnection) continue;
    const strongest = aggregatedEdges
      .filter((edge) => edge.prerequisiteId === topic.id || edge.topicId === topic.id)
      .sort((a, b) => (b.routeCounts.native + b.routeCounts.l2) - (a.routeCounts.native + a.routeCounts.l2))[0];
    if (strongest) retained.add(`${strongest.prerequisiteId}>${strongest.topicId}`);
  }
  const edgeWeight = (edge) => edge.routeCounts.native + edge.routeCounts.l2;
  const candidateEdges = aggregatedEdges
    .filter((edge) => retained.has(`${edge.prerequisiteId}>${edge.topicId}`))
    .sort((a, b) => edgeWeight(b) - edgeWeight(a) || a.prerequisiteId.localeCompare(b.prerequisiteId));
  const acyclicEdges = [];
  const outgoing = new Map();
  const createsCycle = (edge) => {
    const pending = [edge.topicId];
    const visited = new Set();
    while (pending.length) {
      const id = pending.pop();
      if (id === edge.prerequisiteId) return true;
      if (visited.has(id)) continue;
      visited.add(id);
      pending.push(...(outgoing.get(id) ?? []));
    }
    return false;
  };
  const retainAcyclic = (edge) => {
    if (acyclicEdges.includes(edge) || createsCycle(edge)) return false;
    acyclicEdges.push(edge);
    if (!outgoing.has(edge.prerequisiteId)) outgoing.set(edge.prerequisiteId, []);
    outgoing.get(edge.prerequisiteId).push(edge.topicId);
    return true;
  };
  for (const edge of candidateEdges) retainAcyclic(edge);
  for (const topic of topics) {
    if (acyclicEdges.some((edge) => edge.prerequisiteId === topic.id || edge.topicId === topic.id)) continue;
    const candidates = aggregatedEdges
      .filter((edge) => edge.prerequisiteId === topic.id || edge.topicId === topic.id)
      .sort((a, b) => edgeWeight(b) - edgeWeight(a));
    candidates.some(retainAcyclic);
  }
  const dependencies = acyclicEdges
    .map((edge) => ({ ...edge, aggregateCount: edgeWeight(edge) }))
    .sort((a, b) => a.prerequisiteId.localeCompare(b.prerequisiteId) || a.topicId.localeCompare(b.topicId));
  const byId = new Map(topics.map((topic) => [topic.id, topic]));
  return {
    topics,
    dependencies,
    standards: { curricula: [] },
    clusters: [],
    byId,
    standardByKey: new Map(),
    sourceDatasets: { native: nativeData, l2: l2Data },
    crosswalk: capabilityData
  };
}

function numericMinimum(values) {
  const numbers = (values ?? []).filter(Number.isFinite);
  return numbers.length ? Math.min(...numbers) : null;
}

function numericMaximum(values) {
  const numbers = (values ?? []).filter(Number.isFinite);
  return numbers.length ? Math.max(...numbers) : null;
}

async function loadSharedData() {
  const [characters, lexemes, sources] = await Promise.all([
    fetchJson('/data/shared/characters.json'),
    fetchJson('/data/shared/lexemes.json'),
    fetchJson('/data/shared/sources.json')
  ]);
  return {
    characterSets: characters.characterSets,
    lexemeSets: lexemes.lexemeSets,
    sources: sources.sources,
    characterById: new Map(characters.characterSets.map((set) => [set.id, set])),
    lexemeById: new Map(lexemes.lexemeSets.map((set) => [set.id, set])),
    sourceBySlug: new Map(sources.sources.map((source) => [source.slug, source]))
  };
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Unable to load ${url}: ${response.status}`);
  return response.json();
}

function handleGraphAction(action) {
  if (action === 'zoom-in') {
    setGraphZoom(state.graphZoom * 1.18);
    return;
  }
  if (action === 'zoom-out') {
    setGraphZoom(state.graphZoom / 1.18);
    return;
  }
  if (action === 'zoom-reset') {
    resetGraphViewport();
    renderGraph();
  }
}

function handleGraphWheel(event) {
  event.preventDefault();
  const direction = event.deltaY < 0 ? 1.12 : 1 / 1.12;
  setGraphZoom(state.graphZoom * direction);
}

function handleGraphPointerDown(event) {
  if (event.button !== 0 && event.button !== 2) return;
  const hitNode = event.button === 0 ? hitTestGraphNode(event) : null;
  if (hitNode && !event.shiftKey) {
    state.pendingNodeClick = {
      id: hitNode.id,
      clientX: event.clientX,
      clientY: event.clientY
    };
    els.graph.setPointerCapture?.(event.pointerId);
    return;
  }
  const { width, height } = graphSize();
  const rect = els.graph.getBoundingClientRect();
  state.isPanning = true;
  state.graphDragMode = event.button === 2 || event.shiftKey ? 'pan' : 'orbit';
  state.panStart = {
    clientX: event.clientX,
    clientY: event.clientY,
    panX: state.graphPanX,
    panY: state.graphPanY,
    orbit: state.graphOrbit,
    tilt: state.graphTilt,
    scaleX: width / Math.max(1, rect.width),
    scaleY: height / Math.max(1, rect.height)
  };
  els.graph.classList.add(state.graphDragMode === 'pan' ? 'isPanning' : 'isOrbiting');
  els.graph.setPointerCapture?.(event.pointerId);
}

function handleGraphPointerMove(event) {
  if (!state.isPanning) {
    const hitNode = hitTestGraphNode(event);
    const nextHoverId = hitNode?.id ?? null;
    if (nextHoverId !== state.graphHoverId) {
      state.graphHoverId = nextHoverId;
      if (hitNode) showGraphTooltip(hitNode, event);
      else hideGraphTooltip();
      scheduleGraphSceneDraw();
    } else if (hitNode) {
      placeGraphTooltip(event);
    }
    els.graph.style.cursor = hitNode ? 'pointer' : 'grab';
  }
  if (!state.isPanning || !state.panStart) return;
  const dx = (event.clientX - state.panStart.clientX) * state.panStart.scaleX;
  const dy = (event.clientY - state.panStart.clientY) * state.panStart.scaleY;
  if (state.graphDragMode === 'pan') {
    state.graphPanX = state.panStart.panX + dx;
    state.graphPanY = state.panStart.panY + dy;
    scheduleGraphTransform();
  } else {
    state.graphOrbit = state.panStart.orbit + dx * 0.005;
    state.graphTilt = clamp(state.panStart.tilt - dy * 0.003, -0.82, 0.08);
    state.graphOrbitTarget = null;
    state.graphTiltTarget = null;
    scheduleGraphSceneDraw();
  }
}

function handleGraphPointerUp(event) {
  if (state.pendingNodeClick) {
    const moved =
      Math.abs(event.clientX - state.pendingNodeClick.clientX) + Math.abs(event.clientY - state.pendingNodeClick.clientY);
    const topicId = state.pendingNodeClick.id;
    state.pendingNodeClick = null;
    if (moved <= 8) selectTopicById(topicId);
  } else if (state.isPanning && state.panStart) {
    const moved = Math.abs(event.clientX - state.panStart.clientX) + Math.abs(event.clientY - state.panStart.clientY);
    if (moved <= 6 && state.selectedId) clearSelectedTopic();
  }
  state.isPanning = false;
  state.panStart = null;
  state.graphDragMode = null;
  els.graph.classList.remove('isPanning');
  els.graph.classList.remove('isOrbiting');
  els.graph.style.cursor = 'grab';
  scheduleGraphSceneDraw();
  scheduleGraphAnimation();
}

function handleGraphKeyDown(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    selectTopicById(state.graphHoverId ?? state.selectedId);
    return;
  }
  if (event.key === 'Escape') {
    event.preventDefault();
    if (state.drawerMode) closeDrawer();
    else clearSelectedTopic();
    return;
  }
  if (event.key === '+' || event.key === '=') {
    event.preventDefault();
    setGraphZoom(state.graphZoom * 1.18);
    return;
  }
  if (event.key === '-' || event.key === '_') {
    event.preventDefault();
    setGraphZoom(state.graphZoom / 1.18);
    return;
  }
  if (event.key === '0' || event.key.toLowerCase() === 'r') {
    event.preventDefault();
    resetGraphViewport();
    scheduleGraphSceneDraw();
    return;
  }
  if (['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].includes(event.key)) {
    event.preventDefault();
    const visible = state.graphModel?.visibleNodes ?? [];
    if (!visible.length) return;
    const direction = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1;
    state.graphKeyboardIndex = (state.graphKeyboardIndex + direction + visible.length) % visible.length;
    state.graphHoverId = visible[state.graphKeyboardIndex].id;
    scheduleGraphSceneDraw();
    els.graph.setAttribute(
      'aria-label',
      state.locale === 'ja'
        ? `注目中の概念：${displayName(visible[state.graphKeyboardIndex].topic)}。Enterキーで選択します。`
        : `Focused concept: ${displayName(visible[state.graphKeyboardIndex].topic)}. Press Enter to select.`
    );
  }
}

function setGraphZoom(value) {
  state.graphZoomTarget = null;
  state.graphZoom = clamp(value, 0.7, 2.8);
  scheduleGraphTransform();
}

function resetGraphViewport() {
  state.graphZoom = 1;
  state.graphPanX = 0;
  state.graphPanY = 0;
  state.graphOrbit = 0.58;
  state.graphTilt = -0.27;
  state.graphOrbitTarget = null;
  state.graphTiltTarget = null;
  state.graphZoomTarget = null;
  state.isPanning = false;
  state.panStart = null;
}

function showGraphTooltip(node, event) {
  if (!node?.topic || window.matchMedia('(max-width: 760px)').matches) return;
  const meta = els.graphTooltip.querySelector('.tooltipMeta');
  meta.querySelector('i').style.background = node.fill;
  const journeyLabel =
    node.journeyRole === 'foundation'
      ? state.locale === 'ja'
        ? `${state.jlptJourneyContext?.from} 基礎概念`
        : `${state.jlptJourneyContext?.from} foundation`
      : node.journeyRole === 'target'
        ? state.locale === 'ja'
          ? `${state.jlptJourneyContext?.targetLevel} 到達概念`
          : `${state.jlptJourneyContext?.targetLevel} destination`
        : null;
  meta.querySelector('span').textContent = [localizedDomain(node.topic.domain), localizedRange(node.topic), journeyLabel]
    .filter(Boolean)
    .join(' · ');
  els.graphTooltip.querySelector('strong').textContent = displayName(node.topic);
  els.graphTooltip.querySelector('p').textContent = localizedProse(node.topic.assessmentPrompt || node.topic.description);
  els.graphTooltip.classList.add('isVisible');
  els.graphTooltip.setAttribute('aria-hidden', 'false');
  placeGraphTooltip(event);
}

function placeGraphTooltip(event) {
  if (!els.graphTooltip.classList.contains('isVisible')) return;
  const shell = els.graph.closest('.graphShell').getBoundingClientRect();
  const tooltip = els.graphTooltip.getBoundingClientRect();
  let x = event.clientX - shell.left + 17;
  let y = event.clientY - shell.top + 17;
  if (x + tooltip.width > shell.width - 10) x = event.clientX - shell.left - tooltip.width - 17;
  if (y + tooltip.height > shell.height - 10) y = event.clientY - shell.top - tooltip.height - 17;
  els.graphTooltip.style.left = `${Math.max(10, x)}px`;
  els.graphTooltip.style.top = `${Math.max(10, y)}px`;
}

function hideGraphTooltip() {
  els.graphTooltip.classList.remove('isVisible');
  els.graphTooltip.setAttribute('aria-hidden', 'true');
}

function scheduleGraphTransform() {
  if (state.graphTransformFrame !== null) return;
  state.graphTransformFrame = requestAnimationFrame(() => {
    state.graphTransformFrame = null;
    applyGraphTransform();
  });
}

function applyGraphTransform() {
  paintGraph();
}

function syncControls() {
  const dataset = getDataset();
  const domains = ['all', ...unique(dataset.topics.map((topic) => topic.domain)).sort()];
  const clusterOptions = clusterFilterOptions(dataset);
  const types = ['all', ...unique(dataset.topics.map((topic) => topic.type)).sort()];
  const axisOptions = axisFilterOptions(dataset.topics);
  const standardOptions = standardFilterOptions(dataset);
  const standards = standardOptions.map((item) => item.value);
  const scripts = ['all', ...unique(dataset.topics.flatMap((topic) => topic.scriptRequirements ?? [])).sort()];
  const jlpt = ['all', ...unique(dataset.topics.flatMap((topic) => topic.jlptLevels ?? [])).sort(jlptSort)];
  const bjt = ['all', ...unique(dataset.topics.flatMap((topic) => topic.bjtLevels ?? [])).sort(bjtSort)];
  state.axis = axisOptions.some((item) => item.value === state.axis) ? state.axis : 'all';
  state.cluster = clusterOptions.some((item) => item.value === state.cluster) ? state.cluster : 'all';
  state.standard = standards.includes(state.standard) ? state.standard : 'all';
  state.script = scripts.includes(state.script) ? state.script : 'all';
  state.jlpt = jlpt.includes(state.jlpt) ? state.jlpt : 'all';
  state.bjt = bjt.includes(state.bjt) ? state.bjt : 'all';
  els.profileSelect.innerHTML = [
    option('compare', t('comparePath')),
    option('native-child', t('nativePath')),
    option('l2-adult', t('adultPath'))
  ].join('');
  els.domainSelect.innerHTML = domains
    .map((domain) => option(domain, domain === 'all' ? t('allDomains') : localizedDomain(domain)))
    .join('');
  els.clusterSelect.innerHTML = clusterOptions.map((item) => option(item.value, item.label)).join('');
  els.typeSelect.innerHTML = types
    .map((type) => option(type, type === 'all' ? t('allTypes') : localizedType(type)))
    .join('');
  els.axisSelect.innerHTML = axisOptions.map((item) => option(item.value, item.label)).join('');
  els.standardSelect.innerHTML = standardOptions.map((item) => option(item.value, item.label)).join('');
  els.scriptSelect.innerHTML = scripts
    .map((script) => option(script, script === 'all' ? t('allScripts') : localizedScript(script)))
    .join('');
  els.jlptSelect.innerHTML = jlpt.map((level) => option(level, level === 'all' ? t('allJlpt') : level)).join('');
  els.bjtSelect.innerHTML = bjt.map((level) => option(level, level === 'all' ? t('allBjt') : level)).join('');
  els.edgeModeSelect.innerHTML = [option('unlocks', t('unlocks')), option('depends', t('dependsOn'))].join('');
  els.traceModeSelect.innerHTML = [
    option('all', t('allTopics')),
    option('prerequisites', t('prerequisitePath')),
    option('unlocks', t('unlockTree'))
  ].join('');
  els.companionLayerSelect.innerHTML = [
    option('all', t('charactersLexemes')),
    option('characters', t('characters')),
    option('lexemes', t('lexemes')),
    option('off', t('off'))
  ].join('');
  els.searchInput.value = state.search;
  els.domainSelect.value = state.domain;
  els.clusterSelect.value = state.cluster;
  els.typeSelect.value = state.type;
  els.axisSelect.value = state.axis;
  els.standardSelect.value = state.standard;
  els.scriptSelect.value = state.script;
  els.jlptSelect.value = state.jlpt;
  els.bjtSelect.value = state.bjt;
  if (state.profileId === 'compare') {
    els.jlptSelect.value = state.coverageLens.startsWith('jlpt:') ? state.coverageLens.slice('jlpt:'.length) : 'all';
    els.bjtSelect.value = state.coverageLens.startsWith('bjt:') ? state.coverageLens.slice('bjt:'.length) : 'all';
  }
  els.jlptSelect.disabled = jlpt.length === 1;
  els.bjtSelect.disabled = bjt.length === 1;
  const isCompare = state.profileId === 'compare';
  els.clusterSelect.disabled = isCompare;
  els.standardSelect.disabled = isCompare;
  els.scriptSelect.disabled = isCompare;
  els.typeSelect.disabled = isCompare;
  els.edgeModeSelect.value = state.edgeMode;
  els.traceModeSelect.value = state.traceMode;
  els.companionLayerSelect.value = state.companionLayer;
  els.profileSelect.value = state.profileId;
  syncComparisonControls();
  syncProfileButtons();
  updateFilterBadge();
}

function syncComparisonControls() {
  const isCompare = state.profileId === 'compare';
  els.compareControls.hidden = !isCompare;
  els.compareControls.closest('.graphShell')?.classList.toggle('hasCompareControls', isCompare);
  const lensOptions = [
    { value: 'none', label: t('noCoverageLens') },
    ...jlptLevels.map((level) => ({ value: `jlpt:${level}`, label: `JLPT ${level}` })),
    ...['J5', 'J4', 'J3', 'J2', 'J1', 'J1+'].map((level) => ({ value: `bjt:${level}`, label: `BJT ${level}` })),
    { value: 'mext', label: t('mextLens') }
  ];
  if (!lensOptions.some((item) => item.value === state.coverageLens)) state.coverageLens = 'none';
  els.coverageLensSelect.innerHTML = lensOptions.map((item) => option(item.value, item.label)).join('');
  els.coverageLensSelect.value = state.coverageLens;
  document.querySelectorAll('[data-comparison-view]').forEach((button) => {
    button.setAttribute('aria-pressed', button.dataset.comparisonView === state.comparisonView ? 'true' : 'false');
  });
}

function render() {
  renderProfileText();
  renderGraph();
  renderSelectedTopic();
}

function renderProfileText() {
  const profile = profiles[state.profileId];
  const localized = localizedProfiles[state.locale][state.profileId];
  if (state.profileId === 'compare') {
    els.heroTitle.innerHTML = `${escapeHtml(localized.headline)}<span>.</span>`;
    els.profileTitle.textContent = `${localized.label} · ${localized.axis}`;
    els.profileSummary.textContent = localized.summary;
    els.commentaryTitle.textContent = state.locale === 'ja' ? '共通能力レイヤーについて' : 'About the shared capability layer';
    els.commentarySummary.textContent = localized.summary;
    els.approachList.innerHTML = `<ul>${localized.approach.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
    renderCoverageSnapshot(profile.key);
    renderClusterSummary();
    renderStandardSummary();
    renderComparisonTable();
    return;
  }
  const commentary = state.commentary.profiles[profile.key];
  const summary = state.locale === 'ja' ? commentary.summaryJa : commentary.summary;
  const approach = state.locale === 'ja' ? commentary.approachJa : commentary.approach;
  els.heroTitle.innerHTML = `${escapeHtml(localized.headline)}<span>.</span>`;
  els.profileTitle.textContent = `${localized.label} · ${localized.axis}`;
  els.profileSummary.textContent = summary;
  els.commentaryTitle.textContent = state.locale === 'ja' ? commentary.titleJa : commentary.title;
  els.commentarySummary.textContent = summary;
  els.approachList.innerHTML = `<ul>${approach.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
  renderCoverageSnapshot(profile.key);
  renderClusterSummary();
  renderStandardSummary();
  renderComparisonTable();
}

function renderComparisonTable() {
  els.comparisonTable.innerHTML = `
    <div class="comparison">
      ${state.commentary.comparison
        .map(
          (row) => `
            <div class="comparisonRow">
              <strong>${escapeHtml(state.locale === 'ja' ? row.dimensionJa : row.dimension)}</strong>
              <div>
                <p><span class="tag">L1</span> ${escapeHtml(state.locale === 'ja' ? row.l1Ja : row.l1)}</p>
                <p><span class="tag">L2</span> ${escapeHtml(state.locale === 'ja' ? row.l2Ja : row.l2)}</p>
              </div>
            </div>
          `
        )
        .join('')}
    </div>
  `;
}

function renderClusterSummary() {
  const dataset = getDataset();
  if (state.profileId === 'compare') {
    const shared = dataset.topics.filter((topic) => topic.routeStatus === 'shared').length;
    els.clusterSummary.innerHTML = `
      <section class="clusterCard">
        <div class="clusterTitle">${state.locale === 'ja' ? '点は固定、経路だけが変わる' : 'Stable points, changing routes'}</div>
        <p>${state.locale === 'ja'
          ? `${dataset.topics.length}の能力領域のうち${shared}領域に両方の経路があります。リングと接続線は、同じ能力へ至る重点と順序の違いを示します。`
          : `${shared} of ${dataset.topics.length} capabilities have both routes. Rings and connections show how emphasis and sequencing differ on the way to the same capability.`}</p>
      </section>
    `;
    return;
  }
  const cluster = selectedCluster(dataset);
  if (!cluster) {
    els.clusterSummary.innerHTML = `
      <section class="clusterCard">
        <div class="clusterTitle">${t('allClusters')}</div>
        <p>${state.locale === 'ja' ? `${escapeHtml(dataset.clusters.length)}件のクラスター概要があります。` : `${escapeHtml(dataset.clusters.length)} cluster summaries are available for this profile.`}</p>
      </section>
    `;
    return;
  }

  const topicCount = dataset.topics.filter((topic) => topicMatchesCluster(topic, cluster)).length;
  els.clusterSummary.innerHTML = `
    <section class="clusterCard">
      <div class="clusterTitle">${escapeHtml(localizedDomain(cluster.domain))}</div>
      <div class="tagRow">
        <span class="tag">${escapeHtml(formatClusterRange(cluster))}</span>
        <span class="tag">${escapeHtml(topicCount)} ${t('topics').toLowerCase()}</span>
      </div>
      <p>${escapeHtml(localizedProse(cluster.summary))}</p>
    </section>
  `;
}

function renderStandardSummary() {
  const dataset = getDataset();
  if (state.profileId === 'compare') {
    const relations = dataset.topics.map((topic) => capabilityCoverageRelation(topic));
    const direct = relations.filter((relation) => relation === 'direct').length;
    const supporting = relations.filter((relation) => relation === 'supporting').length;
    const unmeasured = relations.filter((relation) => relation === 'unmeasured').length;
    const depthNote = state.coverageLens === 'mext'
      ? ''
      : state.locale === 'ja'
        ? '同じ領域構成でも、レベル間の深さは同じとは限りません。'
        : ' Two levels can share a footprint without demanding the same depth.';
    const lensSummary = state.coverageLens === 'none'
      ? (state.locale === 'ja'
          ? 'JLPT・BJTの直接測定範囲、補助的に必要な能力、未測定の能力を分けています。「未測定」は「不要」を意味しません。'
          : 'JLPT and BJT are separated into directly measured, supporting, and unmeasured capabilities. “Unmeasured” never means “unnecessary.”')
      : (state.locale === 'ja'
          ? `${coverageLensLabel(state.coverageLens)}：直接対象${direct}、補助的${supporting}、未測定${unmeasured}。${depthNote}`
          : `${coverageLensLabel(state.coverageLens)}: ${direct} direct, ${supporting} supporting, and ${unmeasured} unmeasured capabilities.${depthNote}`);
    els.standardSummary.innerHTML = `
      <section class="standardCard">
        <div class="standardTitle">${state.locale === 'ja' ? '評価は独立したレンズ' : 'Assessment is an independent lens'}</div>
        <p>${escapeHtml(lensSummary)}</p>
      </section>
    `;
    return;
  }
  if (state.standard === 'all') {
    const standardCount = dataset.standards.curricula.reduce((sum, curriculum) => sum + curriculum.topics.length, 0);
    els.standardSummary.innerHTML = `
      <section class="standardCard">
        <div class="standardTitle">${t('allStandards')}</div>
        <p>${state.locale === 'ja' ? `${escapeHtml(dataset.standards.curricula.length)}系統・${escapeHtml(standardCount)}件の基準レコードがあります。` : `${escapeHtml(dataset.standards.curricula.length)} source families and ${escapeHtml(standardCount)} citation-level standard records are available for this profile.`}</p>
      </section>
    `;
    return;
  }

  const standard = dataset.standardByKey.get(state.standard);
  if (!standard) {
    els.standardSummary.innerHTML = `<p class="statusText">${escapeHtml(t('selectedStandardMissing'))}</p>`;
    return;
  }

  const count = dataset.topics.filter((topic) => (topic.standards ?? []).includes(state.standard)).length;
  const curriculumName = localizedProse(standard.curriculum.name);
  const sourceLink = standard.curriculum.sourceUrl
    ? `<a href="${escapeHtml(standard.curriculum.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(curriculumName)}</a>`
    : escapeHtml(curriculumName);
  els.standardSummary.innerHTML = `
    <section class="standardCard">
      <div class="standardTitle">${escapeHtml(localizedProse(standard.data?.label ?? standard.key))}</div>
      <div class="tagRow">
        <span class="tag">${escapeHtml(standard.key)}</span>
        <span class="tag">${escapeHtml(count)} ${t('topics').toLowerCase()}</span>
        <span class="tag">${escapeHtml(standard.curriculum.textIncluded ? t('textIncluded') : t('noSourceText'))}</span>
      </div>
      <p>${sourceLink} · ${escapeHtml(localizedProse(standard.curriculum.version))}</p>
      <p>${escapeHtml(localizedProse(standard.data?.note ?? t('citationMetadata')))}</p>
      <p class="standardLicense">${escapeHtml(localizedProse(standard.curriculum.license))}</p>
    </section>
  `;
}

function renderCoverageSnapshot(profileKey) {
  const dataset = getDataset();
  const domains = unique(dataset.topics.map((topic) => topic.domain));

  if (profileKey === 'ja-shared-capability') {
    const shared = dataset.topics.filter((topic) => topic.routeStatus === 'shared').length;
    const nativeOnly = dataset.topics.filter((topic) => topic.routeStatus === 'native-only').length;
    const l2Only = dataset.topics.filter((topic) => topic.routeStatus === 'l2-only').length;
    els.coverageSnapshot.innerHTML = `
      <div class="coverageMetrics">
        ${coverageMetric(state.locale === 'ja' ? '共通領域' : 'Shared', shared)}
        ${coverageMetric(state.locale === 'ja' ? '母語経路のみ' : 'Native only', nativeOnly)}
        ${coverageMetric(state.locale === 'ja' ? 'L2経路のみ' : 'L2 only', l2Only)}
      </div>
      <div class="coverageLevels">
        ${[1, 2, 3, 4].map((stage) => `<span class="tag">${escapeHtml(capabilityStageLabel(stage))}: ${dataset.topics.filter((topic) => topic.stage === stage).length}</span>`).join('')}
      </div>
    `;
    return;
  }

  if (profileKey === 'ja-L1-child') {
    const grades = Array.from({ length: 12 }, (_, index) => index + 1);
    const gradeTotals = Object.fromEntries(
      grades.map((grade) => [
        grade,
        dataset.topics.filter((topic) => gradeRangesOverlap(topic, { gradeRangeStart: grade, gradeRangeEnd: grade })).length
      ])
    );
    const coveredCells = new Set();
    for (const topic of dataset.topics) {
      if (!Number.isInteger(topic.gradeRangeStart) || !Number.isInteger(topic.gradeRangeEnd)) continue;
      for (let grade = topic.gradeRangeStart; grade <= topic.gradeRangeEnd; grade += 1) {
        coveredCells.add(`${grade}|${topic.domain}`);
      }
    }
    const totalCells = grades.length * domains.length;
    const maxTotal = Math.max(...Object.values(gradeTotals), 1);
    els.coverageSnapshot.innerHTML = `
      <div class="coverageMetrics">
        ${coverageMetric(t('gradeDomainCells'), `${coveredCells.size}/${totalCells}`)}
        ${coverageMetric(t('topics'), dataset.topics.length)}
        ${coverageMetric(t('dependencies'), dataset.dependencies.length)}
      </div>
      <div class="coverageStrip" aria-label="${state.locale === 'ja' ? '学年別のカバレッジ' : 'Native coverage by grade'}">
        ${grades.map((grade) => coverageBar(`G${grade}`, gradeTotals[grade] ?? 0, maxTotal)).join('')}
      </div>
    `;
    return;
  }

  const jlptTotals = Object.fromEntries(
    jlptLevels.map((level) => [level, dataset.topics.filter((topic) => (topic.jlptLevels ?? []).includes(level)).length])
  );
  const bjtLevels = ['J5', 'J4', 'J3', 'J2', 'J1', 'J1+'];
  const bjtTotals = Object.fromEntries(
    bjtLevels.map((level) => [level, dataset.topics.filter((topic) => (topic.bjtLevels ?? []).includes(level)).length])
  );
  const proficiencyLevels = unique(dataset.topics.map((topic) => topic.levelRangeStart).filter(Boolean));
  const cellCount = (levels, field) => {
    const cells = new Set();
    for (const topic of dataset.topics) {
      for (const level of topic[field] ?? []) cells.add(`${level}|${topic.domain}`);
    }
    return `${cells.size}/${levels.length * domains.length}`;
  };
  els.coverageSnapshot.innerHTML = `
    <div class="coverageMetrics">
      ${coverageMetric(t('jlptDomainCells'), cellCount(jlptLevels, 'jlptLevels'))}
      ${coverageMetric(t('bjtDomainCells'), cellCount(bjtLevels, 'bjtLevels'))}
      ${coverageMetric(t('proficiencyLevels'), proficiencyLevels.length)}
    </div>
    <div class="coverageLevels" aria-label="${state.locale === 'ja' ? '成人L2のレベル別カバレッジ' : 'Adult L2 coverage by level'}">
      ${levelPills(jlptLevels, jlptTotals, 'JLPT')}
      ${levelPills(bjtLevels, bjtTotals, 'BJT')}
    </div>
  `;
}

function coverageMetric(label, value) {
  return `
    <div>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `;
}

function coverageBar(label, total, maxTotal) {
  const share = maxTotal > 0 ? Math.min(100, Math.round((total / maxTotal) * 100)) : 0;
  return `
    <div class="coverageBar">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(total)}</strong>
      <i style="--fill:${share}%"></i>
    </div>
  `;
}

function levelPills(levels, totals, label) {
  return levels
    .map((level) => `<span class="tag">${escapeHtml(label)} ${escapeHtml(level)}: ${escapeHtml(totals[level] ?? 0)}</span>`)
    .join('');
}

function renderGraph() {
  const dataset = getDataset();
  const profile = profiles[state.profileId];
  const { width, height } = graphSize();
  const compact = width < 760;
  const margin = compact
    ? { top: 84, right: 28, bottom: 76, left: 42 }
    : { top: 76, right: 62, bottom: 70, left: 74 };
  const jlptJourneyContext = buildJlptJourneyContext(dataset);
  state.jlptJourneyContext = jlptJourneyContext;
  const visibleTopics = filteredTopics(dataset.topics);
  const filteredIds = new Set(visibleTopics.map((topic) => topic.id));
  const domainList = unique(dataset.topics.map((topic) => topic.domain)).sort();
  const domainIndex = new Map(domainList.map((domain, index) => [domain, index]));
  const domainColor = new Map(domainList.map((domain, index) => [domain, domainColors[index % domainColors.length]]));
  const values = dataset.topics.map((topic) => profile.axisValue(topic));
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  const graphContext = buildGraphContext(dataset);
  const degreeById = topicDegreeMap(dataset);
  const landmarkIds = new Set(
    visibleTopics
      .slice()
      .sort((a, b) => (degreeById.get(b.id) ?? 0) - (degreeById.get(a.id) ?? 0))
      .slice(0, visibleTopics.length <= 36 ? visibleTopics.length : 6)
      .map((topic) => topic.id)
  );
  const positions = createGraphWorldPositions({
    dataset,
    profile,
    domainList,
    domainIndex,
    minY,
    maxY
  });

  state.graphModel = buildGraphRenderModel({
    dataset,
    positions,
    filteredIds,
    visibleTopicCount: visibleTopics.length,
    domainColor,
    graphContext,
    jlptJourneyContext,
    degreeById,
    width,
    height,
    margin,
    minY,
    maxY,
    profile,
    domainList,
    domainIndex,
    landmarkIds
  });

  if (state.graphRevealProfile !== state.profileId) {
    state.graphRevealProfile = state.profileId;
    state.graphReveal = state.graphReducedMotion || compact ? 1 : 0;
    state.graphRevealStarted = performance.now();
  }

  prepareGraphCanvas(width, height);
  projectGraphModel(state.graphModel);
  renderGraphCanvases(state.graphModel);
  paintGraph();
  renderDomainLegend(domainList, domainColor, visibleTopics);
  renderJlptNavigator(dataset, jlptJourneyContext);
  renderPathRibbon(dataset, graphContext, filteredIds.size, jlptJourneyContext);
  els.graphCounts.textContent = state.profileId === 'compare'
    ? `${filteredIds.size}/${dataset.topics.length} ${t('capabilities').toLowerCase()} · ${dataset.dependencies.length} ${t('routes').toLowerCase()}`
    : `${filteredIds.size}/${dataset.topics.length} ${t('topics').toLowerCase()} · ${dataset.dependencies.length} ${t('dependencies').toLowerCase()}`;
  focusSelectedGraphNode();
  scheduleGraphAnimation();
}

function createGraphWorldPositions({ dataset, profile, domainList, domainIndex, minY, maxY }) {
  const span = Math.max(1, maxY - minY);
  const localIndexById = new Map();
  for (const domain of domainList) {
    dataset.topics
      .filter((topic) => topic.domain === domain)
      .sort((a, b) => profile.axisValue(a) - profile.axisValue(b) || a.id.localeCompare(b.id))
      .forEach((topic, index) => localIndexById.set(topic.id, index));
  }

  return new Map(
    dataset.topics.map((topic, topicIndex) => {
      const domainSlot = domainIndex.get(topic.domain) ?? 0;
      const localIndex = localIndexById.get(topic.id) ?? topicIndex;
      const scatter = (hashUnit(`${topic.id}:axis`) - 0.5) * 0.34;
      const axisProgress = clamp((profile.axisValue(topic) + scatter - minY) / span, 0, 1);
      const ring = 56 + Math.pow(axisProgress, 0.88) * 410;
      const domainAngle = (domainSlot / Math.max(1, domainList.length)) * Math.PI * 2;
      const angle =
        domainAngle +
        (hashUnit(`${topic.id}:angle`) - 0.5) * 0.34 +
        Math.sin(localIndex * 1.27 + domainSlot) * 0.035;
      const radialJitter = (hashUnit(`${topic.id}:radius`) - 0.5) * (34 + axisProgress * 54);
      const radius = Math.max(18, ring + radialJitter);
      const worldX = Math.cos(angle) * radius;
      const worldZ = Math.sin(angle) * radius;
      const worldY = (axisProgress - 0.5) * 1080 + (hashUnit(`${topic.id}:height`) - 0.5) * 74;
      return [
        topic.id,
        {
          topic,
          topicIndex,
          axisProgress,
          worldX,
          worldY,
          worldZ
        }
      ];
    })
  );
}

function hashUnit(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) / 4294967295;
}

function projectGraphModel(model) {
  if (!model) return;
  const { width, height } = model;
  const compact = width < 760;
  const cosOrbit = Math.cos(state.graphOrbit);
  const sinOrbit = Math.sin(state.graphOrbit);
  const cosTilt = Math.cos(state.graphTilt);
  const sinTilt = Math.sin(state.graphTilt);
  const scale = Math.min(width / (compact ? 820 : 1120), height / 1280);
  const centerX = width * (compact ? 0.5 : state.selectedId ? 0.52 : 0.62);
  const centerY = height * (compact ? 0.72 : 0.52);
  const fov = 1450;

  for (const node of model.nodes) {
    const rotatedX = node.worldX * cosOrbit + node.worldZ * sinOrbit;
    const rotatedZ = -node.worldX * sinOrbit + node.worldZ * cosOrbit;
    const tiltedY = node.worldY * cosTilt - rotatedZ * sinTilt;
    const tiltedZ = node.worldY * sinTilt + rotatedZ * cosTilt;
    const denominator = Math.max(fov * 0.32, fov + tiltedZ * scale * 1.22);
    const perspective = clamp(fov / denominator, 0.42, 1.9);
    node.x = centerX + rotatedX * scale * perspective;
    node.y = centerY - tiltedY * scale * perspective;
    node.depth = perspective;
    node.radius = node.baseRadius * perspective * (node.selected ? 1.45 : 1);
    if (node.label) {
      const boxWidth = clamp(node.label.length * 6.2 + 18, 76, node.selected ? 280 : 220);
      const labelX = node.x + boxWidth + 16 <= width ? node.x + 13 : node.x - boxWidth - 13;
      node.labelBox = { x: labelX, y: node.y - 24, width: boxWidth, height: 22 };
    } else {
      node.labelBox = null;
    }
  }

  for (const edge of model.edges) {
    const from = model.nodeById.get(edge.fromId);
    const to = model.nodeById.get(edge.toId);
    if (!from || !to) continue;
    edge.x1 = from.x;
    edge.y1 = from.y;
    edge.x2 = to.x;
    edge.y2 = to.y;
    edge.depth = (from.depth + to.depth) / 2;
    edge.c1x = from.x;
    edge.c1y = from.y;
    edge.c2x = to.x;
    edge.c2y = to.y;
  }
  model.labelCount = model.nodes.filter((node) => graphLabelAllowedByViewport(node, model)).length;
  model.nodeDrawOrder = model.nodes;
}

function scheduleGraphSceneDraw() {
  if (state.graphTransformFrame !== null) return;
  state.graphTransformFrame = requestAnimationFrame(() => {
    state.graphTransformFrame = null;
    drawGraphScene({ motion: state.isPanning });
  });
}

function drawGraphScene({ motion = false } = {}) {
  const model = state.graphModel;
  if (!model) return;
  const started = performance.now();
  state.graphMotionQuality = motion;
  projectGraphModel(model);
  drawGraphLayer(model);
  paintGraph();
  state.graphMotionQuality = false;
  const duration = performance.now() - started;
  state.graphLastDrawMs = duration;
  if (motion) state.graphLastMotionDrawMs = duration;
  else state.graphLastFullDrawMs = duration;
  state.graphDrawDurations.push(duration);
  if (state.graphDrawDurations.length > 180) state.graphDrawDurations.shift();
}

function scheduleGraphAnimation() {
  if (state.graphAnimationFrame !== null) return;
  state.graphAnimationFrame = requestAnimationFrame(animateGraph);
}

function animateGraph(timestamp) {
  state.graphAnimationFrame = null;
  const previous = state.graphLastFrameTime ?? timestamp;
  const elapsed = clamp(timestamp - previous, 0, 64);
  state.graphLastFrameTime = timestamp;
  if (timestamp !== previous) {
    state.graphFrameIntervals.push(timestamp - previous);
    if (state.graphFrameIntervals.length > 180) state.graphFrameIntervals.shift();
  }

  let changed = false;
  if (state.graphReveal < 1) {
    const revealElapsed = timestamp - (state.graphRevealStarted ?? timestamp);
    state.graphReveal = clamp(revealElapsed / 2200, 0, 1);
    changed = true;
  }

  if (state.graphOrbitTarget !== null) {
    const delta = shortestAngle(state.graphOrbitTarget - state.graphOrbit);
    state.graphOrbit += delta * 0.12;
    changed = true;
    if (Math.abs(delta) < 0.0025) state.graphOrbitTarget = null;
  }
  if (state.graphTiltTarget !== null) {
    state.graphTilt += (state.graphTiltTarget - state.graphTilt) * 0.12;
    changed = true;
    if (Math.abs(state.graphTiltTarget - state.graphTilt) < 0.0025) state.graphTiltTarget = null;
  }
  if (state.graphZoomTarget !== null) {
    state.graphZoom += (state.graphZoomTarget - state.graphZoom) * 0.12;
    changed = true;
    if (Math.abs(state.graphZoomTarget - state.graphZoom) < 0.004) state.graphZoomTarget = null;
  }

  const autoOrbit =
    !state.graphReducedMotion &&
    !state.selectedId &&
    !state.graphHoverId &&
    !state.isPanning &&
    !state.drawerMode &&
    timestamp - (state.graphRevealStarted ?? timestamp) < 3000 &&
    document.visibilityState === 'visible';
  if (autoOrbit) {
    state.graphOrbit += elapsed * 0.000055;
    changed = true;
  }

  const hasTarget = state.graphOrbitTarget !== null || state.graphTiltTarget !== null || state.graphZoomTarget !== null;
  const moving = autoOrbit || state.graphReveal < 1 || hasTarget;
  if (changed) drawGraphScene({ motion: moving });
  if (!moving && state.graphWasAnimating) drawGraphScene({ motion: false });
  state.graphWasAnimating = moving;
  if (moving) scheduleGraphAnimation();
}

function shortestAngle(value) {
  return ((value + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
}

function focusSelectedGraphNode() {
  if (!state.selectedId || !state.graphModel) return;
  const node = state.graphModel.nodeById.get(state.selectedId);
  if (!node) return;
  const target = Math.atan2(-node.worldX, node.worldZ);
  state.graphOrbitTarget = state.graphOrbit + shortestAngle(target - state.graphOrbit);
  state.graphTiltTarget = -0.18;
  state.graphZoomTarget = Math.max(1.08, Math.min(1.22, state.graphZoom));
}

function capabilityCoverageRelation(topic, lens = state.coverageLens) {
  if (state.profileId !== 'compare' || topic.kind !== 'capability' || lens === 'none') return 'none';
  if (lens === 'mext') return topic.assessmentCoverage?.mext?.covered ? 'direct' : 'unmeasured';
  const [assessment, level] = lens.split(':');
  const coverage = topic.assessmentCoverage?.[assessment];
  if (!coverage) return 'unmeasured';
  if ((coverage.directLevels ?? []).includes(level)) return 'direct';
  if ((coverage.supportingLevels ?? []).includes(level)) return 'supporting';
  return 'unmeasured';
}

function capabilityIsDeemphasized(topic, relation = capabilityCoverageRelation(topic)) {
  if (state.profileId !== 'compare') return false;
  if (relation === 'none' && ['coverage', 'beyond'].includes(state.comparisonView)) return false;
  if (state.comparisonView === 'differences') {
    if (topic.routeStatus !== 'shared') return false;
    const smaller = Math.max(1, Math.min(topic.routeCounts.native, topic.routeCounts.l2));
    const larger = Math.max(topic.routeCounts.native, topic.routeCounts.l2);
    return larger / smaller < 2.5;
  }
  if (state.comparisonView === 'coverage') return relation === 'unmeasured';
  if (state.comparisonView === 'beyond') return relation === 'direct' || relation === 'supporting';
  return false;
}

function buildGraphRenderModel({
  dataset,
  positions,
  filteredIds,
  visibleTopicCount,
  domainColor,
  graphContext,
  jlptJourneyContext,
  degreeById,
  width,
  height,
  margin,
  minY,
  maxY,
  profile,
  domainList,
  domainIndex,
  landmarkIds
}) {
  const nodes = dataset.topics
    .map((topic) => {
      const pos = positions.get(topic.id);
      if (!pos) return null;
      const selected = topic.id === state.selectedId;
      const dimmed = !filteredIds.has(topic.id);
      const lensRelation = capabilityCoverageRelation(topic);
      const lensDimmed = capabilityIsDeemphasized(topic, lensRelation);
      const degree = degreeById.get(topic.id) ?? 0;
      const baseRadius = Math.min(8.2, 2.7 + Math.log1p(degree) * 1.15);
      const relation = nodeRelationClass(topic.id, graphContext);
      const journeyRole = jlptJourneyContext?.targetIds.has(topic.id)
        ? 'target'
        : jlptJourneyContext?.foundationIds.has(topic.id)
          ? 'foundation'
          : null;
      const showLabel = shouldShowNodeLabel({
        selected,
        dimmed,
        lensDimmed,
        visibleTopicCount,
        relation,
        isLandmark: landmarkIds.has(topic.id)
      });
      const label = showLabel ? shorten(displayName(topic), selected ? 36 : 28) : '';
      return {
        id: topic.id,
        topic,
        x: 0,
        y: 0,
        depth: 1,
        radius: baseRadius,
        baseRadius,
        worldX: pos.worldX,
        worldY: pos.worldY,
        worldZ: pos.worldZ,
        axisProgress: pos.axisProgress,
        fill: domainColor.get(topic.domain) ?? '#64748b',
        selected,
        dimmed,
        lensDimmed,
        lensRelation,
        contextDimmed: Boolean(graphContext.selectedId && !relation),
        relation,
        journeyRole,
        degree,
        motionVisible: Boolean(journeyRole) || degree >= 8 || hashUnit(`${topic.id}:motion`) < 0.32,
        isHub: degree >= 10,
        label,
        labelBox: null
      };
    })
    .filter(Boolean);

  const isFilteredView = filteredIds.size < dataset.topics.length;
  const edges = dataset.dependencies
    .map((edge) => {
      const fromId = state.edgeMode === 'unlocks' ? edge.prerequisiteId : edge.topicId;
      const toId = state.edgeMode === 'unlocks' ? edge.topicId : edge.prerequisiteId;
      const from = positions.get(fromId);
      const to = positions.get(toId);
      if (!from || !to) return null;
      const relation = edgeRelationClass(edge, graphContext);
      const dimmed = !filteredIds.has(edge.topicId) || !filteredIds.has(edge.prerequisiteId);
      const lensDimmed = Boolean(
        positions.get(edge.topicId)?.topic &&
        positions.get(edge.prerequisiteId)?.topic &&
        capabilityIsDeemphasized(
          positions.get(edge.topicId).topic,
          capabilityCoverageRelation(positions.get(edge.topicId).topic)
        ) &&
        capabilityIsDeemphasized(
          positions.get(edge.prerequisiteId).topic,
          capabilityCoverageRelation(positions.get(edge.prerequisiteId).topic)
        )
      );
      const journeyEdge = Boolean(
        jlptJourneyContext?.ids.has(edge.topicId) && jlptJourneyContext.ids.has(edge.prerequisiteId)
      );
      if (isFilteredView && dimmed && !relation) return null;
      return {
        edge,
        relation,
        journeyEdge,
        dimmed,
        lensDimmed,
        contextDimmed: Boolean(graphContext.selectedId && !relation),
        fromId,
        toId,
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        c1x: 0,
        c1y: 0,
        c2x: 0,
        c2y: 0,
        depth: 1
      };
    })
    .filter(Boolean);

  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  return {
    dataset,
    filteredIds,
    visibleTopicCount,
    graphContext,
    jlptJourneyContext,
    width,
    height,
    margin,
    minY,
    maxY,
    profile,
    domainList,
    domainIndex,
    domainColor,
    nodes,
    edges,
    nodeById,
    nodeDrawOrder: nodes,
    visibleNodes: nodes.filter((node) => !node.dimmed),
    labelCount: nodes.filter((node) => node.label).length
  };
}

function prepareGraphCanvas(width, height) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  state.graphDeviceRatio = dpr;
  state.graphContext2d ??= els.graph.getContext('2d', { alpha: false });
  state.graphBackgroundCanvas ??= document.createElement('canvas');
  state.graphLayerCanvas ??= document.createElement('canvas');
  resizeCanvas(els.graph, width, height, dpr);
  resizeCanvas(state.graphBackgroundCanvas, width, height, dpr);
  resizeCanvas(state.graphLayerCanvas, width, height, dpr);
  els.graph.dataset.renderer = 'canvas';
  els.graph.dataset.graphWidth = String(width);
  els.graph.dataset.graphHeight = String(height);
}

function resizeCanvas(canvas, width, height, dpr) {
  const pixelWidth = Math.max(1, Math.round(width * dpr));
  const pixelHeight = Math.max(1, Math.round(height * dpr));
  if (canvas.width !== pixelWidth) canvas.width = pixelWidth;
  if (canvas.height !== pixelHeight) canvas.height = pixelHeight;
}

function renderGraphCanvases(model) {
  drawGraphBackground(model);
  drawGraphLayer(model);
  els.graph.setAttribute(
    'aria-label',
    state.locale === 'ja'
      ? `日本語学習概念グラフ、${model.filteredIds.size}件表示、前提関係${model.dataset.dependencies.length}件`
      : `Japanese language concept graph, ${model.filteredIds.size} visible topics, ${model.dataset.dependencies.length} dependency edges`
  );
}

function withCanvasUnits(canvas, model, draw) {
  const ctx = canvas.getContext('2d');
  const dpr = state.graphDeviceRatio;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  draw(ctx);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function paintGraph() {
  const model = state.graphModel;
  const ctx = state.graphContext2d;
  if (!model || !ctx || !state.graphBackgroundCanvas || !state.graphLayerCanvas) return;
  const dpr = state.graphDeviceRatio;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, els.graph.width, els.graph.height);
  ctx.drawImage(state.graphBackgroundCanvas, 0, 0);
  ctx.save();
  ctx.translate(state.graphPanX * dpr, state.graphPanY * dpr);
  ctx.scale(state.graphZoom, state.graphZoom);
  ctx.drawImage(state.graphLayerCanvas, 0, 0);
  ctx.restore();
}

function drawGraphBackground(model) {
  withCanvasUnits(state.graphBackgroundCanvas, model, (ctx) => {
    const { width, height } = model;
    const palette = canvasTheme();
    ctx.fillStyle = palette.background;
    ctx.fillRect(0, 0, width, height);

    const glow = ctx.createRadialGradient(
      width * (width < 760 ? 0.5 : 0.62),
      height * 0.5,
      0,
      width * (width < 760 ? 0.5 : 0.62),
      height * 0.5,
      Math.max(width, height) * 0.74
    );
    glow.addColorStop(0, palette.glowCenter);
    glow.addColorStop(0.42, palette.glowMid);
    glow.addColorStop(1, palette.background);
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    const horizon = ctx.createRadialGradient(width * 0.58, height * 1.04, 0, width * 0.58, height * 1.04, height * 0.82);
    horizon.addColorStop(0, palette.horizonCenter);
    horizon.addColorStop(0.46, palette.horizonMid);
    horizon.addColorStop(1, palette.horizonEdge);
    ctx.fillStyle = horizon;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = palette.stars;
    for (let index = 0; index < 86; index += 1) {
      const x = ((index * 97) % 997) / 997 * width;
      const y = ((index * 193) % 991) / 991 * height;
      const radius = index % 11 === 0 ? 0.8 : 0.45;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}

function canvasTheme() {
  return state.theme === 'light'
    ? {
        background: '#f4f1e8',
        glowCenter: '#ffffff',
        glowMid: '#f7f5ee',
        horizonCenter: 'rgba(91, 111, 181, 0.12)',
        horizonMid: 'rgba(128, 145, 200, 0.05)',
        horizonEdge: 'rgba(244, 241, 232, 0)',
        stars: 'rgba(44, 54, 83, 0.13)',
        axisLine: 'rgba(55, 68, 105, 0.11)',
        axisText: 'rgba(52, 63, 93, 0.62)',
        edge: 'rgb(78, 91, 126)',
        nodeOutline: 'rgba(255, 255, 255, 0.88)',
        labelFill: 'rgba(255, 255, 255, 0.94)',
        labelStroke: 'rgba(59, 70, 104, 0.22)',
        labelText: '#1c2435',
        focusRing: '#202a3d'
      }
    : {
        background: '#05070d',
        glowCenter: '#10172a',
        glowMid: '#0a0f1d',
        horizonCenter: 'rgba(62, 80, 155, 0.18)',
        horizonMid: 'rgba(30, 43, 86, 0.07)',
        horizonEdge: 'rgba(5, 7, 13, 0)',
        stars: 'rgba(184, 199, 235, 0.2)',
        axisLine: 'rgba(170, 184, 222, 0.065)',
        axisText: 'rgba(157, 169, 201, 0.52)',
        edge: 'rgb(151, 165, 202)',
        nodeOutline: 'rgba(3, 5, 11, 0.72)',
        labelFill: 'rgba(6, 9, 17, 0.82)',
        labelStroke: 'rgba(151, 166, 207, 0.24)',
        labelText: '#f5f6fb',
        focusRing: '#fff'
      };
}

function drawGraphLayer(model) {
  withCanvasUnits(state.graphLayerCanvas, model, (ctx) => {
    drawAxisCanvas(ctx, model);
    drawEdgesCanvas(ctx, model);
    drawNodesCanvas(ctx, model);
    drawNodeLabelsCanvas(ctx, model);
  });
}

function drawAxisCanvas(ctx, model) {
  const { width, height, minY, maxY, profile } = model;
  if (width < 760) return;
  const x1 = width * 0.43;
  const x2 = width - 34;
  const palette = canvasTheme();
  ctx.save();
  ctx.strokeStyle = palette.axisLine;
  ctx.fillStyle = palette.axisText;
  ctx.font = '700 9px system-ui, sans-serif';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  for (const tick of axisTickValues(minY, maxY, profile)) {
    const progress = (tick - minY) / Math.max(1, maxY - minY);
    const y = height * 0.84 - progress * height * 0.67;
    ctx.beginPath();
    ctx.moveTo(x1, y);
    ctx.lineTo(x2, y);
    ctx.stroke();
    ctx.fillText(formatTick(tick, profile), x1 - 10, y + 1);
  }
  ctx.fillStyle = palette.axisText;
  const axisLabel = state.locale === 'ja'
    ? profile.key === 'ja-L1-child'
      ? '学年'
      : profile.key === 'ja-shared-capability'
        ? '能力の進行'
        : 'レベル'
    : profile.axisLabel.toUpperCase();
  ctx.fillText(axisLabel, x1 - 10, height * 0.13);
  ctx.restore();
}

function drawEdgesCanvas(ctx, model) {
  const palette = canvasTheme();
  const hardEdges = [];
  const softEdges = [];
  const contextEdges = [];
  const journeyEdges = [];
  const directPrerequisites = [];
  const directUnlocks = [];
  const nativeRouteEdges = [];
  const l2RouteEdges = [];
  const sharedRouteEdges = [];
  const pathByColor = new Map();

  for (const edge of model.edges) {
    const from = model.nodeById.get(edge.fromId);
    const to = model.nodeById.get(edge.toId);
    if (!from || !to || from.axisProgress > state.graphReveal || to.axisProgress > state.graphReveal) continue;
    const relation = edge.relation;
    const isDirect = relation.includes('directEdge');
    const isPath = relation.includes('pathEdge');
    if (state.graphMotionQuality && !isDirect && !isPath && !edge.journeyEdge && (!from.motionVisible || !to.motionVisible)) {
      continue;
    }
    if (edge.dimmed && !isDirect && !isPath) continue;
    if (isDirect) {
      (relation.includes('unlockEdge') ? directUnlocks : directPrerequisites).push(edge);
    } else if (isPath) {
      const color = to.fill ?? '#f6b95d';
      if (!pathByColor.has(color)) pathByColor.set(color, []);
      pathByColor.get(color).push(edge);
    } else if (edge.journeyEdge) {
      journeyEdges.push(edge);
    } else if (edge.contextDimmed || edge.lensDimmed) {
      contextEdges.push(edge);
    } else if (state.profileId === 'compare') {
      if (edge.edge.routes?.length > 1) sharedRouteEdges.push(edge);
      else if (edge.edge.routes?.includes('native')) nativeRouteEdges.push(edge);
      else l2RouteEdges.push(edge);
    } else if (edge.edge.strength === 'soft') {
      softEdges.push(edge);
    } else {
      hardEdges.push(edge);
    }
  }

  const strokeBatch = (edges, { alpha, color, width, dash = [] }) => {
    if (!edges.length) return;
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.setLineDash(dash);
    ctx.beginPath();
    for (const edge of edges) {
      ctx.moveTo(edge.x1, edge.y1);
      ctx.lineTo(edge.x2, edge.y2);
    }
    ctx.stroke();
  };

  ctx.save();
  ctx.lineCap = 'round';
  ctx.shadowBlur = 0;
  strokeBatch(contextEdges, { alpha: state.theme === 'light' ? 0.025 : 0.009, color: palette.edge, width: 0.45 });
  strokeBatch(softEdges, { alpha: state.theme === 'light' ? 0.075 : 0.045, color: palette.edge, width: 0.45 });
  strokeBatch(hardEdges, { alpha: state.theme === 'light' ? 0.15 : 0.1, color: palette.edge, width: 0.62 });
  strokeBatch(sharedRouteEdges, { alpha: 0.23, color: '#aebcff', width: 0.82 });
  strokeBatch(nativeRouteEdges, { alpha: 0.34, color: '#49d9c8', width: 0.92 });
  strokeBatch(l2RouteEdges, { alpha: 0.34, color: '#ff7f91', width: 0.92 });
  strokeBatch(journeyEdges, { alpha: 0.42, color: '#aebcff', width: 1.05 });
  for (const [color, edges] of pathByColor) {
    strokeBatch(edges, { alpha: 0.64, color, width: 1.35 });
  }
  strokeBatch(directPrerequisites, { alpha: 0.9, color: '#f6b95d', width: 1.9, dash: [8, 5] });
  strokeBatch(directUnlocks, { alpha: 0.9, color: '#49d9c8', width: 1.9, dash: [8, 5] });
  ctx.restore();
}

function drawNodesCanvas(ctx, model) {
  const palette = canvasTheme();
  const fillGroups = new Map();
  const journeyTargets = [];
  const journeyFoundations = [];
  const pathNodes = [];
  const prerequisiteNodes = [];
  const unlockNodes = [];
  const focusNodes = [];
  const comparisonNodes = [];

  for (const node of model.nodes) {
    if (node.axisProgress > state.graphReveal) continue;
    const hovered = node.id === state.graphHoverId;
    if (state.graphMotionQuality && !node.motionVisible && !node.relation && !node.journeyRole && !hovered && !node.selected) {
      continue;
    }
    const alpha = node.dimmed
      ? 0.035
      : node.contextDimmed
        ? 0.095
        : node.lensDimmed
          ? state.theme === 'light' ? 0.18 : 0.13
          : node.lensRelation === 'supporting'
            ? 0.62
            : 0.94;
    const key = `${node.fill}|${alpha}`;
    if (!fillGroups.has(key)) fillGroups.set(key, { color: node.fill, alpha, nodes: [] });
    fillGroups.get(key).nodes.push({ node, radius: Math.max(0.7, node.radius * (hovered ? 1.4 : 1)) });
    if (!node.dimmed && node.journeyRole === 'target') journeyTargets.push(node);
    if (!node.dimmed && node.journeyRole === 'foundation') journeyFoundations.push(node);
    if (node.relation === 'pathNode') pathNodes.push(node);
    if (node.relation === 'directPrereqNode') prerequisiteNodes.push(node);
    if (node.relation === 'directUnlockNode') unlockNodes.push(node);
    if (node.selected || hovered) focusNodes.push(node);
    if (state.profileId === 'compare' && !node.dimmed) comparisonNodes.push(node);
  }

  ctx.save();
  ctx.shadowBlur = 0;
  for (const group of fillGroups.values()) {
    ctx.globalAlpha = group.alpha;
    ctx.fillStyle = group.color;
    ctx.strokeStyle = palette.nodeOutline;
    ctx.lineWidth = 0.75;
    ctx.beginPath();
    for (const { node, radius } of group.nodes) {
      ctx.moveTo(node.x + radius, node.y);
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
    }
    ctx.fill();
    ctx.stroke();
  }

  const strokeNodeBatch = (nodes, color, width, alpha = 0.86) => {
    if (!nodes.length) return;
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    for (const node of nodes) {
      const radius = Math.max(0.8, node.radius + 1.8);
      ctx.moveTo(node.x + radius, node.y);
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
    }
    ctx.stroke();
  };

  strokeNodeBatch(journeyFoundations, '#f6b95d', 1.45, 0.96);
  strokeNodeBatch(journeyTargets, '#ff7fa1', 1.65, 0.98);
  strokeNodeBatch(pathNodes, 'rgba(255, 226, 177, 0.82)', 1);
  strokeNodeBatch(prerequisiteNodes, '#f6b95d', 1.35, 0.95);
  strokeNodeBatch(unlockNodes, '#49d9c8', 1.35, 0.95);
  ctx.restore();

  if (comparisonNodes.length) {
    ctx.save();
    ctx.lineCap = 'round';
    for (const node of comparisonNodes) {
      const radius = Math.max(2.6, node.radius + 2.1);
      const alpha = node.lensDimmed ? 0.18 : 0.94;
      const routeWidth = (count) => clamp(0.95 + Math.log1p(count ?? 0) * 0.42 + (node.selected ? 0.5 : 0), 1.1, 3.1);
      ctx.globalAlpha = alpha;
      if (node.topic.routeStatus === 'shared') {
        ctx.strokeStyle = '#49d9c8';
        ctx.lineWidth = routeWidth(node.topic.routeCounts.native);
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, -Math.PI / 2, Math.PI / 2);
        ctx.stroke();
        ctx.strokeStyle = '#ff7f91';
        ctx.lineWidth = routeWidth(node.topic.routeCounts.l2);
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, Math.PI / 2, Math.PI * 1.5);
        ctx.stroke();
      } else {
        ctx.strokeStyle = node.topic.routeStatus === 'native-only' ? '#49d9c8' : '#ff7f91';
        ctx.lineWidth = routeWidth(Math.max(node.topic.routeCounts.native, node.topic.routeCounts.l2));
        circle(ctx, node.x, node.y, radius);
        ctx.stroke();
      }
      if (node.lensRelation === 'direct') {
        ctx.globalAlpha = node.lensDimmed ? 0.28 : 0.98;
        ctx.strokeStyle = '#f6b95d';
        ctx.lineWidth = 1.45;
        circle(ctx, node.x, node.y, radius + 2.7);
        ctx.stroke();
      } else if (node.lensRelation === 'supporting' && !node.lensDimmed) {
        ctx.globalAlpha = 0.78;
        ctx.strokeStyle = '#f6b95d';
        ctx.lineWidth = 0.9;
        ctx.setLineDash([2, 2.5]);
        circle(ctx, node.x, node.y, radius + 2.4);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }
    ctx.restore();
  }

  for (const node of focusNodes) {
    const hovered = node.id === state.graphHoverId;
    const radius = Math.max(1, node.radius * (hovered ? 1.4 : 1));
    ctx.save();
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = node.fill;
    ctx.shadowColor = node.fill;
    ctx.shadowBlur = 12;
    circle(ctx, node.x, node.y, radius * 2.2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 0.98;
    ctx.strokeStyle = palette.focusRing;
    ctx.lineWidth = 1.6;
    circle(ctx, node.x, node.y, radius + 2.8);
    ctx.stroke();
    ctx.restore();
  }
}

function drawNodeLabelsCanvas(ctx, model) {
  const palette = canvasTheme();
  for (const node of model.nodes) {
    if (!graphLabelAllowedByViewport(node, model)) continue;
    if (node.axisProgress > state.graphReveal || (node.contextDimmed && !node.relation)) continue;
    if (state.graphMotionQuality && !node.motionVisible && !node.relation && !node.journeyRole && !node.selected) continue;
    const { x, y, width, height } = node.labelBox;
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.32)';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetY = 2;
    ctx.fillStyle = node.selected ? 'rgba(255, 252, 239, 0.96)' : palette.labelFill;
    ctx.strokeStyle =
      node.relation === 'directPrereqNode'
        ? 'rgba(246, 185, 93, 0.72)'
        : node.relation === 'directUnlockNode'
          ? 'rgba(73, 217, 200, 0.72)'
          : node.journeyRole === 'target'
            ? 'rgba(255, 127, 161, 0.78)'
            : node.journeyRole === 'foundation'
              ? 'rgba(246, 185, 93, 0.74)'
              : node.selected
                ? 'rgba(246, 185, 93, 0.72)'
                : palette.labelStroke;
    ctx.lineWidth = 1;
    roundedRect(ctx, x, y, width, height, 11);
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    ctx.fillStyle = node.selected ? '#13151c' : palette.labelText;
    ctx.font = '760 10px system-ui, sans-serif';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.fillText(node.label, x + 9, y + height / 2 + 0.5);
    ctx.restore();
  }
}

function graphLabelAllowedByViewport(node, model) {
  if (!node.labelBox) return false;
  if (model.width < 640 && !node.relation && !node.selected) return false;
  if (
    model.width >= 760 &&
    !node.relation &&
    !node.selected &&
    (node.labelBox.y < 92 || node.labelBox.x < model.width * 0.42)
  ) {
    return false;
  }
  return true;
}

function graphPointFromEvent(event) {
  const model = state.graphModel;
  if (!model) return null;
  const rect = els.graph.getBoundingClientRect();
  const screenX = (event.clientX - rect.left) * (model.width / Math.max(1, rect.width));
  const screenY = (event.clientY - rect.top) * (model.height / Math.max(1, rect.height));
  return {
    x: (screenX - state.graphPanX) / state.graphZoom,
    y: (screenY - state.graphPanY) / state.graphZoom
  };
}

function hitTestGraphNode(event) {
  const point = graphPointFromEvent(event);
  const model = state.graphModel;
  if (!point || !model) return null;
  let best = null;
  let bestDistance = Infinity;
  const tolerance = Math.max(5, 10 / state.graphZoom);
  const drawOrder = model.nodeDrawOrder ?? model.nodes;
  for (let index = drawOrder.length - 1; index >= 0; index -= 1) {
    const node = drawOrder[index];
    if (node.dimmed || node.axisProgress > state.graphReveal) continue;
    const distance = Math.hypot(point.x - node.x, point.y - node.y);
    const limit = node.radius + tolerance;
    if (distance <= limit && distance < bestDistance) {
      best = node;
      bestDistance = distance;
    }
  }
  return best;
}

function selectTopicById(topicId) {
  const dataset = getDataset();
  if (!dataset.byId.has(topicId)) return false;
  state.selectedId = topicId;
  state.graphHoverId = null;
  state.exportText = '';
  hideGraphTooltip();
  renderGraph();
  renderSelectedTopic();
  updateHash();
  return true;
}

function circle(ctx, x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
}

function roundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

window.__japaneseTaxonomyViewerDebug = () => {
  const average = (values) => (values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0);
  const averageFrameInterval = average(state.graphFrameIntervals);
  return {
    renderer: els.graph.dataset.renderer,
    width: state.graphModel?.width ?? 0,
    height: state.graphModel?.height ?? 0,
    zoom: state.graphZoom,
    panX: state.graphPanX,
    panY: state.graphPanY,
    orbit: state.graphOrbit,
    tilt: state.graphTilt,
    reveal: state.graphReveal,
    nodeCount: state.graphModel?.nodes.length ?? 0,
    visibleNodeCount: state.graphModel?.visibleNodes.length ?? 0,
    edgeCount: state.graphModel?.edges.length ?? 0,
    visibleLabelCount: state.graphModel?.labelCount ?? 0,
    jlptJourney: state.jlptJourney,
    jlptTargetCount: state.jlptJourneyContext?.targetIds.size ?? 0,
    jlptFoundationCount: state.jlptJourneyContext?.foundationIds.size ?? 0,
    averageFrameInterval,
    estimatedFps: averageFrameInterval > 0 ? 1000 / averageFrameInterval : 0,
    averageDrawMs: average(state.graphDrawDurations),
    lastDrawMs: state.graphLastDrawMs,
    lastMotionDrawMs: state.graphLastMotionDrawMs,
    lastFullDrawMs: state.graphLastFullDrawMs,
    visibleNodes: (state.graphModel?.visibleNodes ?? []).map((node) => ({
      id: node.id,
      x: node.x,
      y: node.y,
      radius: node.radius,
      journeyRole: node.journeyRole
    }))
  };
};

window.__japaneseTaxonomyViewerSelect = (topicId) => selectTopicById(topicId);

function axisFilterOptions(topics) {
  const profile = profiles[state.profileId];
  if (profile.key === 'ja-shared-capability') {
    return [
      { value: 'all', label: state.locale === 'ja' ? 'すべての段階' : 'All stages' },
      ...[1, 2, 3, 4].map((stage) => ({ value: `stage:${stage}`, label: capabilityStageLabel(stage) }))
    ];
  }
  if (profile.key === 'ja-L1-child') {
    const grades = new Set();
    let hasPreGrade = false;
    for (const topic of topics) {
      if (Number.isInteger(topic.gradeRangeStart) && Number.isInteger(topic.gradeRangeEnd)) {
        for (let grade = topic.gradeRangeStart; grade <= topic.gradeRangeEnd; grade += 1) grades.add(grade);
      } else {
        hasPreGrade = true;
      }
    }
    return [
      { value: 'all', label: t('allGrades') },
      ...(hasPreGrade ? [{ value: 'pre-grade', label: t('preGrade') }] : []),
      ...[...grades]
        .sort((a, b) => a - b)
        .map((grade) => ({ value: `grade:${grade}`, label: state.locale === 'ja' ? japaneseSchoolGrade(grade) : `Grade ${grade}` }))
    ];
  }

  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].filter((level) =>
    topics.some((topic) => topicCoversCeferBand(topic, level))
  );
  return [{ value: 'all', label: t('allLevels') }, ...levels.map((level) => ({ value: `level:${level}`, label: level }))];
}

function clusterFilterOptions(dataset) {
  return [
    { value: 'all', label: t('allClusters') },
    ...dataset.clusters.map((cluster, index) => {
      const count = dataset.topics.filter((topic) => topicMatchesCluster(topic, cluster)).length;
      return {
        value: clusterValue(index),
        label: shorten(`${formatClusterRange(cluster)} · ${localizedDomain(cluster.domain)} (${count})`, 74)
      };
    })
  ];
}

function standardFilterOptions(dataset) {
  const keys = unique(dataset.topics.flatMap((topic) => topic.standards ?? [])).sort();
  return [
    { value: 'all', label: t('allStandards') },
    ...keys.map((key) => {
      const standard = dataset.standardByKey.get(key);
      const label = localizedProse(standard?.data?.label ?? key);
      const count = dataset.topics.filter((topic) => (topic.standards ?? []).includes(key)).length;
      return {
        value: key,
        label: shorten(`${label} (${count})`, 74)
      };
    })
  ];
}

function topicDegreeMap(dataset) {
  const degreeById = new Map(dataset.topics.map((topic) => [topic.id, 0]));
  for (const edge of dataset.dependencies) {
    degreeById.set(edge.topicId, (degreeById.get(edge.topicId) ?? 0) + 1);
    degreeById.set(edge.prerequisiteId, (degreeById.get(edge.prerequisiteId) ?? 0) + 1);
  }
  return degreeById;
}

function buildGraphContext(dataset) {
  const selectedId = state.selectedId && dataset.byId.has(state.selectedId) ? state.selectedId : null;
  const prereqPathIds = selectedId ? new Set(prerequisitePath(dataset, selectedId)) : new Set();
  const directPrereqIds = new Set();
  const directUnlockIds = new Set();
  for (const edge of dataset.dependencies) {
    if (edge.topicId === selectedId) directPrereqIds.add(edge.prerequisiteId);
    if (edge.prerequisiteId === selectedId) directUnlockIds.add(edge.topicId);
  }
  const focusIds = new Set([selectedId, ...prereqPathIds, ...directPrereqIds, ...directUnlockIds].filter(Boolean));
  return {
    selectedId,
    prereqPathIds,
    directPrereqIds,
    directUnlockIds,
    focusIds
  };
}

function edgeRelationClass(edge, graphContext) {
  const classes = [];
  if (edge.topicId === graphContext.selectedId && graphContext.directPrereqIds.has(edge.prerequisiteId)) {
    classes.push('directEdge', 'prereqEdge');
  }
  if (edge.prerequisiteId === graphContext.selectedId && graphContext.directUnlockIds.has(edge.topicId)) {
    classes.push('directEdge', 'unlockEdge');
  }
  if (graphContext.prereqPathIds.has(edge.topicId) && graphContext.prereqPathIds.has(edge.prerequisiteId)) {
    classes.push('pathEdge');
  }
  return classes.join(' ');
}

function nodeRelationClass(topicId, graphContext) {
  if (topicId === graphContext.selectedId) return 'selectedNode';
  if (graphContext.directPrereqIds.has(topicId)) return 'directPrereqNode';
  if (graphContext.directUnlockIds.has(topicId)) return 'directUnlockNode';
  if (graphContext.prereqPathIds.has(topicId)) return 'pathNode';
  return '';
}

function applyJlptJourney(journey) {
  if (state.profileId !== 'l2-adult') return;
  if (journey !== null && !isValidJlptJourney(journey)) return;

  state.jlptJourney = journey;
  state.jlpt = journey?.startsWith('level:') ? journey.slice('level:'.length) : 'all';
  state.selectedId = null;
  state.traceMode = 'all';
  state.exportText = '';
  state.graphHoverId = null;
  state.graphOrbitTarget = null;
  state.graphTiltTarget = null;
  state.graphZoomTarget = null;
  els.jlptSelect.value = state.jlpt;
  els.traceModeSelect.value = 'all';
  hideGraphTooltip();
  renderGraph();
  renderSelectedTopic();
  updateFilterBadge();
  updateHash();
}

function isValidJlptJourney(journey) {
  if (typeof journey !== 'string') return false;
  if (journey.startsWith('level:')) return jlptLevels.includes(journey.slice('level:'.length));
  if (!journey.startsWith('bridge:')) return false;
  const bridge = journey.slice('bridge:'.length);
  return jlptBridges.some(([from, to]) => bridge === `${from}:${to}`);
}

function buildJlptJourneyContext(dataset) {
  if (state.profileId !== 'l2-adult' || !isValidJlptJourney(state.jlptJourney)) return null;

  const [mode, from, to] = state.jlptJourney.split(':');
  const targetLevel = mode === 'level' ? from : to;
  const targetIds = new Set(
    dataset.topics
      .filter((topic) => (topic.jlptLevels ?? []).includes(targetLevel))
      .map((topic) => topic.id)
  );
  const foundationIds = new Set();
  const ids = new Set(targetIds);

  if (mode === 'bridge') {
    const prerequisitesByTopic = new Map();
    for (const edge of dataset.dependencies) {
      if (!prerequisitesByTopic.has(edge.topicId)) prerequisitesByTopic.set(edge.topicId, []);
      prerequisitesByTopic.get(edge.topicId).push(edge.prerequisiteId);
    }

    const visited = new Set(targetIds);
    const pending = [...targetIds];
    while (pending.length) {
      const topicId = pending.pop();
      for (const prerequisiteId of prerequisitesByTopic.get(topicId) ?? []) {
        if (visited.has(prerequisiteId)) continue;
        visited.add(prerequisiteId);
        pending.push(prerequisiteId);
      }
    }

    for (const topicId of visited) {
      if (targetIds.has(topicId)) continue;
      const topic = dataset.byId.get(topicId);
      if ((topic?.jlptLevels ?? []).includes(from)) {
        foundationIds.add(topicId);
        ids.add(topicId);
      }
    }
  }

  return {
    key: state.jlptJourney,
    mode,
    from,
    to: mode === 'bridge' ? to : null,
    targetLevel,
    ids,
    targetIds,
    foundationIds
  };
}

function renderJlptNavigator(dataset, journeyContext) {
  const isAdultL2 = state.profileId === 'l2-adult';
  els.jlptNavigator.hidden = !isAdultL2;
  els.jlptNavigator.closest('.graphShell')?.classList.toggle('hasJlptNavigator', isAdultL2);
  if (!isAdultL2) {
    els.jlptSteps.textContent = '';
    els.jlptJourneySummary.textContent = '';
    return;
  }

  const counts = new Map(
    jlptLevels.map((level) => [
      level,
      dataset.topics.filter((topic) => (topic.jlptLevels ?? []).includes(level)).length
    ])
  );
  const stepMarkup = [];
  for (let index = 0; index < jlptLevels.length; index += 1) {
    const level = jlptLevels[index];
    const levelKey = `level:${level}`;
    stepMarkup.push(`
      <button
        type="button"
        class="jlptLevelButton ${state.jlptJourney === levelKey ? 'isActive' : ''}"
        data-jlpt-level="${level}"
        aria-pressed="${state.jlptJourney === levelKey ? 'true' : 'false'}"
        aria-label="${state.locale === 'ja' ? `${level}の概念を表示` : `Show ${level} concepts`}"
      >
        <span>${level}</span>
        <small>${escapeHtml(counts.get(level) ?? 0)}</small>
      </button>
    `);
    if (index < jlptBridges.length) {
      const [bridgeFrom, bridgeTo] = jlptBridges[index];
      const bridgeValue = `${bridgeFrom}:${bridgeTo}`;
      const bridgeKey = `bridge:${bridgeValue}`;
      stepMarkup.push(`
        <button
          type="button"
          class="jlptBridgeButton ${state.jlptJourney === bridgeKey ? 'isActive' : ''}"
          data-jlpt-bridge="${bridgeValue}"
          aria-pressed="${state.jlptJourney === bridgeKey ? 'true' : 'false'}"
          aria-label="${state.locale === 'ja' ? `${bridgeFrom}から${bridgeTo}への学習経路を表示` : `Show the ${bridgeFrom} to ${bridgeTo} learning bridge`}"
          title="${state.locale === 'ja' ? `${bridgeFrom}の基礎から${bridgeTo}へ` : `What ${bridgeFrom} foundations lead to ${bridgeTo}?`}"
        ><span aria-hidden="true">→</span></button>
      `);
    }
  }
  els.jlptSteps.innerHTML = stepMarkup.join('');

  const allButton = els.jlptNavigator.querySelector('[data-jlpt-all]');
  allButton.setAttribute('aria-pressed', state.jlptJourney ? 'false' : 'true');
  allButton.classList.toggle('isActive', !state.jlptJourney);
  els.jlptNavigator.dataset.journey = journeyContext?.key ?? 'all';
  els.jlptNavigator.dataset.targetCount = String(journeyContext?.targetIds.size ?? 0);
  els.jlptNavigator.dataset.foundationCount = String(journeyContext?.foundationIds.size ?? 0);

  if (!journeyContext) {
    els.jlptJourneySummary.textContent = t('chooseLevel');
    return;
  }

  if (journeyContext.mode === 'level') {
    els.jlptJourneySummary.innerHTML = `
      <strong>${journeyContext.from}</strong>
      <span class="jlptSummaryDivider">·</span>
      <span class="journeyKey journeyTarget"><i></i>${escapeHtml(journeyContext.targetIds.size)} ${t('alignedConcepts')}</span>
      <span>${t('inspectPrerequisites')}</span>
    `;
    return;
  }

  els.jlptJourneySummary.innerHTML = `
    <strong>${journeyContext.from} → ${journeyContext.to}</strong>
    <span class="jlptSummaryDivider">·</span>
    <span class="journeyKey journeyFoundation"><i></i>${escapeHtml(journeyContext.foundationIds.size)} ${journeyContext.from} ${t('foundations')}</span>
    <span class="journeyKey journeyTarget"><i></i>${escapeHtml(journeyContext.targetIds.size)} ${journeyContext.to} ${t('destinations')}</span>
    <span>${t('tracedPrerequisites')}</span>
  `;
}

function renderDomainLegend(domainList, domainColor, visibleTopics) {
  const visibleCounts = new Map();
  for (const topic of visibleTopics) visibleCounts.set(topic.domain, (visibleCounts.get(topic.domain) ?? 0) + 1);
  els.domainLegend.innerHTML = domainList
    .map(
      (domain) => `
        <button
          type="button"
          class="legendItem ${state.domain !== 'all' && state.domain !== domain ? 'isDimmed' : ''}"
          data-domain-filter="${escapeHtml(domain)}"
          aria-pressed="${state.domain === domain ? 'true' : 'false'}"
          style="--legend-color:${escapeHtml(domainColor.get(domain) ?? '#64748b')}"
        >
          <i></i>
          <span>${escapeHtml(shorten(localizedDomain(domain), 28))}</span>
          <strong>${escapeHtml(visibleCounts.get(domain) ?? 0)}</strong>
        </button>
      `
    )
    .join('');
}

function renderPathRibbon(dataset, graphContext, visibleCount, jlptJourneyContext = null) {
  const selected = dataset.byId.get(graphContext.selectedId);
  if (!selected) {
    if (state.profileId === 'compare') {
      const emphasized = dataset.topics.filter((topic) => !capabilityIsDeemphasized(topic)).length;
      const relations = dataset.topics.map((topic) => capabilityCoverageRelation(topic));
      const relationChips = state.coverageLens === 'none' ? '' : `
        <span class="pathChip pathTarget">${relations.filter((relation) => relation === 'direct').length} ${escapeHtml(coverageRelationLabel('direct'))}</span>
        <span class="pathChip pathFoundation">${relations.filter((relation) => relation === 'supporting').length} ${escapeHtml(coverageRelationLabel('supporting'))}</span>
        <span class="pathChip">${relations.filter((relation) => relation === 'unmeasured').length} ${escapeHtml(coverageRelationLabel('unmeasured'))}</span>
      `;
      els.pathRibbon.innerHTML = `
        <span class="pathChip">${escapeHtml(visibleCount)} ${t('capabilities').toLowerCase()}</span>
        <span class="pathChip pathFocus">${escapeHtml(comparisonViewLabel(state.comparisonView))}</span>
        ${state.coverageLens === 'none' ? '' : `<span class="pathChip">${escapeHtml(coverageLensLabel(state.coverageLens))}</span>${relationChips}`}
        ${state.comparisonView === 'routes' ? '' : `<span class="pathChip">${escapeHtml(emphasized)} ${state.locale === 'ja' ? '強調' : 'emphasized'}</span>`}
      `;
      return;
    }
    if (!jlptJourneyContext) {
      els.pathRibbon.textContent = '';
      return;
    }
    els.pathRibbon.innerHTML =
      jlptJourneyContext.mode === 'bridge'
        ? `
          <span class="pathChip">${escapeHtml(visibleCount)} ${t('visible')}</span>
          <span class="pathChip pathFoundation">${escapeHtml(jlptJourneyContext.foundationIds.size)} ${escapeHtml(jlptJourneyContext.from)} ${t('foundations')}</span>
          <span class="pathChip pathTarget">${escapeHtml(jlptJourneyContext.targetIds.size)} ${escapeHtml(jlptJourneyContext.to)} ${t('destinations')}</span>
        `
        : `
          <span class="pathChip">${escapeHtml(visibleCount)} ${t('visible')}</span>
          <span class="pathChip pathTarget">${escapeHtml(jlptJourneyContext.from)}</span>
        `;
    return;
  }
  els.pathRibbon.innerHTML = `
    <span class="pathChip">${escapeHtml(visibleCount)} ${t('visible')}</span>
    <span class="pathChip">${escapeHtml(Math.max(0, graphContext.prereqPathIds.size - 1))} ${t('before')}</span>
    <span class="pathChip">${escapeHtml(graphContext.directUnlockIds.size)} ${t('next')}</span>
    <span class="pathChip">${escapeHtml(graphContext.directPrereqIds.size)} ${t('buildsOn')}</span>
    <span class="pathChip pathFocus">${escapeHtml(shorten(localizedDomain(selected.domain), 30))}</span>
  `;
}

function comparisonViewLabel(view) {
  const key = { routes: 'routeView', differences: 'differencesView', coverage: 'coverageView', beyond: 'beyondView' }[view];
  return t(key ?? 'routeView');
}

function renderSelectedTopic() {
  const dataset = getDataset();
  const selected = dataset.byId.get(state.selectedId);
  if (!selected) {
    els.detailRegion.classList.remove('isOpen');
    els.detailRegion.setAttribute('aria-hidden', 'true');
    els.detailRegion.inert = true;
    els.topicName.textContent = t('selectConcept');
    els.topicMeta.textContent = '';
    els.topicDescription.textContent = '';
    els.topicBeforeCount.textContent = '0';
    els.topicNextCount.textContent = '0';
    return;
  }

  els.detailRegion.classList.add('isOpen');
  els.detailRegion.setAttribute('aria-hidden', 'false');
  els.detailRegion.inert = false;

  if (selected.kind === 'capability') {
    renderSelectedCapability(dataset, selected);
    return;
  }

  els.masterySummary.textContent = t('masteryEvidence');
  els.assessmentHeading.textContent = t('assessmentPrompt');
  els.capabilityRouteComparison.hidden = true;
  els.topicEvidence.hidden = false;

  const profile = profiles[state.profileId];
  const prereqEdges = dataset.dependencies.filter((edge) => edge.topicId === selected.id);
  const unlockEdges = dataset.dependencies.filter((edge) => edge.prerequisiteId === selected.id);
  els.topicBeforeCount.textContent = String(Math.max(0, prerequisitePath(dataset, selected.id).length - 1));
  els.topicNextCount.textContent = String(Math.max(0, unlockClosure(dataset, selected.id).size - 1));

  els.topicName.textContent = displayName(selected);
  els.topicMeta.innerHTML = [
    localizedDomain(selected.domain),
    localizedType(selected.type),
    localizedRange(selected, profile),
    ...formatArrayTags('JF', selected.jfLevels),
    ...formatArrayTags('JLPT', selected.jlptLevels),
    ...formatArrayTags('BJT', selected.bjtLevels),
    ...formatArrayTags(t('script'), selected.scriptRequirements?.map(localizedScript))
  ]
    .filter(Boolean)
    .map((value) => `<span class="tag">${escapeHtml(value)}</span>`)
    .join('');
  els.topicDescription.textContent = localizedProse(selected.description);
  els.topicEvidence.innerHTML = selected.evidence
    .map((item) => `<li>${escapeHtml(localizedProse(item))}</li>`)
    .join('');
  els.topicAssessment.textContent = localizedProse(selected.assessmentPrompt);
  els.topicPrereqs.innerHTML = edgeList(dataset, prereqEdges, 'prerequisiteId');
  els.topicUnlocks.innerHTML = edgeList(dataset, unlockEdges, 'topicId');
  els.topicStandards.innerHTML = selected.standards
    .map((key) => {
      const standard = dataset.standardByKey.get(key);
      const label = localizedProse(standard?.data?.label ?? key);
      return `<li><span class="tag">${escapeHtml(key)}</span> ${escapeHtml(label)}</li>`;
    })
    .join('');
  renderReferenceAlignments(selected);
  renderSourceProvenance(selected);
  renderCompanion(selected);
  renderExportOutput();
}

function renderSelectedCapability(dataset, selected) {
  const prereqEdges = dataset.dependencies.filter((edge) => edge.topicId === selected.id);
  const unlockEdges = dataset.dependencies.filter((edge) => edge.prerequisiteId === selected.id);
  const nativeTopics = selected.l1TopicIds.map((id) => dataset.sourceDatasets.native.byId.get(id)).filter(Boolean);
  const l2Topics = selected.l2TopicIds.map((id) => dataset.sourceDatasets.l2.byId.get(id)).filter(Boolean);
  const alignedL2Topics = l2TopicsForCoverageLens(l2Topics);
  const relation = capabilityCoverageRelation(selected);
  const relationLabel = coverageRelationLabel(relation);

  els.topicBeforeCount.textContent = String(Math.max(0, prerequisitePath(dataset, selected.id).length - 1));
  els.topicNextCount.textContent = String(Math.max(0, unlockClosure(dataset, selected.id).size - 1));
  els.topicName.textContent = displayName(selected);
  els.topicMeta.innerHTML = [
    localizedDomain(selected.domain),
    capabilityStageLabel(selected.stage),
    capabilityRouteStatusLabel(selected.routeStatus),
    state.coverageLens !== 'none' ? `${coverageLensLabel(state.coverageLens)} · ${relationLabel}` : null
  ]
    .filter(Boolean)
    .map((value) => `<span class="tag">${escapeHtml(value)}</span>`)
    .join('');
  els.topicDescription.textContent = state.locale === 'ja' ? selected.summaryJa : selected.summary;
  els.masterySummary.textContent = state.locale === 'ja' ? '二つの学習経路' : 'Two learning routes';
  els.assessmentHeading.textContent = state.locale === 'ja' ? '評価カバレッジ' : 'Assessment coverage';
  els.capabilityRouteComparison.hidden = false;
  els.capabilityRouteComparison.innerHTML = `
    ${capabilityRouteCard('native-child', nativeTopics, selected.coverage.nativeGrades)}
    ${capabilityRouteCard('l2-adult', l2Topics, selected.coverage.jfLevels, alignedL2Topics)}
  `;
  els.topicEvidence.hidden = false;
  els.topicEvidence.innerHTML = [
    state.locale === 'ja'
      ? '同じ能力領域でも、経路内の概念数は習得度や等価性を意味しません。重点とモデル化の粒度を示します。'
      : 'Topic counts show emphasis and modelling granularity, not mastery or equivalence.',
    state.locale === 'ja'
      ? '学年、JF、JLPT、BJTの対応は別々の軸です。相互に換算したものではありません。'
      : 'Grade, JF, JLPT, and BJT alignments are separate axes, not conversions between scales.'
  ].map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  els.topicAssessment.textContent = capabilityAssessmentStatement(selected, relation);
  els.topicPrereqs.innerHTML = edgeList(dataset, prereqEdges, 'prerequisiteId');
  els.topicUnlocks.innerHTML = edgeList(dataset, unlockEdges, 'topicId');
  els.topicStandards.innerHTML = capabilityAssessmentTags(selected);
  els.topicReferences.innerHTML = `
    <p class="statusText">${escapeHtml(state.locale === 'ja'
      ? `母語話者経路の${nativeTopics.length}概念と成人L2経路の${l2Topics.length}概念を、この能力領域に対応づけています。`
      : `${nativeTopics.length} native-route topics and ${l2Topics.length} adult-L2 topics are cross-walked to this capability.`)}</p>
  `;
  els.topicSources.innerHTML = `
    <section class="sourceCard">
      <div class="sourceTitle">${state.locale === 'ja' ? '共通能力クロスウォーク' : 'Shared capability crosswalk'}</div>
      <p>${escapeHtml(state.locale === 'ja' ? dataset.crosswalk.note.replace('Capability families are a learner-neutral comparison layer. Membership indicates topical overlap, not grade equivalence or proof that an assessment measures every mapped capability.', '能力領域は学習者に依存しない比較レイヤーです。所属は話題上の重なりを示すもので、学年の等価性や評価がその能力すべてを測定する証拠ではありません。') : dataset.crosswalk.note)}</p>
      <div class="tagRow"><span class="tag">${escapeHtml(dataset.crosswalk.status)}</span><span class="tag">${escapeHtml(selected.id)}</span></div>
    </section>
    ${assessmentScopeCard(dataset)}
  `;
  renderCompanion(selected);
  renderExportOutput();
}

function assessmentScopeCard(dataset) {
  if (state.coverageLens === 'none') return '';
  const assessment = state.coverageLens === 'mext' ? 'mext' : state.coverageLens.split(':')[0];
  const scope = dataset.crosswalk.assessmentScopeNotes?.[assessment];
  if (!scope) return '';
  return `
    <section class="sourceCard">
      <div class="sourceTitle">${escapeHtml(coverageLensLabel(state.coverageLens))} · ${state.locale === 'ja' ? '範囲の根拠' : 'scope basis'}</div>
      <p>${escapeHtml(state.locale === 'ja' ? scope.noteJa : scope.note)}</p>
      <div class="tagRow">
        ${scope.sourceUrls.map((url, index) => `<a class="tag sourceTagLink" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${state.locale === 'ja' ? '公式資料' : 'Official source'} ${index + 1}</a>`).join('')}
      </div>
    </section>
  `;
}

function capabilityRouteCard(profileId, topics, coverageValues, focusTopics = topics) {
  const native = profileId === 'native-child';
  const profileLabel = native ? t('nativeRoute') : t('l2Route');
  const range = native ? nativeCoverageLabel(coverageValues) : (coverageValues?.join(' · ') || (state.locale === 'ja' ? '対応なし' : 'No alignment'));
  const samples = focusTopics
    .filter((topic) => !topic.id.includes('SPIRAL'))
    .slice(0, 5);
  const sampleTopics = samples.length ? samples : focusTopics.slice(0, 5);
  const focusLabel = !native && state.coverageLens !== 'none' && state.coverageLens !== 'mext'
    ? (state.locale === 'ja'
        ? `${coverageLensLabel(state.coverageLens)}対応 ${focusTopics.length}件`
        : `${focusTopics.length} aligned to ${coverageLensLabel(state.coverageLens)}`)
    : null;
  return `
    <section class="capabilityRouteCard ${native ? 'isNative' : 'isL2'}">
      <div class="capabilityRouteCardTitle"><i></i><strong>${escapeHtml(profileLabel)}</strong><span>${escapeHtml(topics.length)}</span></div>
      <p>${escapeHtml([range, focusLabel].filter(Boolean).join(' · '))}</p>
      ${sampleTopics.length
        ? `<div class="routeTopicSamples">${sampleTopics.map((topic) => `<button type="button" class="routeTopicButton" data-target-profile="${profileId}" data-id="${escapeHtml(topic.id)}">${escapeHtml(displayName(topic))}</button>`).join('')}</div>`
        : `<p class="routeGap">${escapeHtml(topics.length && focusLabel
            ? (state.locale === 'ja' ? '選択中のレンズに対応する概念はありません。' : 'No topics align to the selected lens.')
            : (state.locale === 'ja' ? 'この経路には対応概念がありません。' : 'No mapped topics on this route.'))}</p>`}
    </section>
  `;
}

function l2TopicsForCoverageLens(topics) {
  if (state.coverageLens.startsWith('jlpt:')) {
    const level = state.coverageLens.slice('jlpt:'.length);
    return topics.filter((topic) => (topic.jlptLevels ?? []).includes(level));
  }
  if (state.coverageLens.startsWith('bjt:')) {
    const level = state.coverageLens.slice('bjt:'.length);
    return topics.filter((topic) => (topic.bjtLevels ?? []).includes(level));
  }
  return topics;
}

function nativeCoverageLabel(grades) {
  const values = (grades ?? []).filter(Number.isFinite).sort((a, b) => a - b);
  if (!values.length) return state.locale === 'ja' ? '学年対応なし' : 'No grade alignment';
  const labels = values.map((grade) => grade === 0
    ? (state.locale === 'ja' ? '就学前' : 'Pre-school')
    : state.locale === 'ja'
      ? japaneseSchoolGrade(grade)
      : `Grade ${grade}`);
  return unique(labels).join(' · ');
}

function capabilityRouteStatusLabel(status) {
  const labels = state.locale === 'ja'
    ? { shared: '両方の経路', 'native-only': '母語経路のみ', 'l2-only': 'L2経路のみ' }
    : { shared: 'Both routes', 'native-only': 'Native route only', 'l2-only': 'Adult L2 route only' };
  return labels[status] ?? status;
}

function coverageLensLabel(lens) {
  if (lens === 'none') return t('noCoverageLens');
  if (lens === 'mext') return t('mextLens');
  const [assessment, level] = lens.split(':');
  return `${assessment.toUpperCase()} ${level}`;
}

function coverageRelationLabel(relation) {
  const labels = state.locale === 'ja'
    ? { direct: '直接対象', supporting: '補助的', unmeasured: '未測定', none: 'レンズなし' }
    : { direct: 'Direct', supporting: 'Supporting', unmeasured: 'Unmeasured', none: 'No lens' };
  return labels[relation] ?? relation;
}

function capabilityAssessmentStatement(topic, relation) {
  if (state.coverageLens === 'none') {
    return state.locale === 'ja'
      ? '評価レンズを選ぶと、この能力が直接対象か、補助的か、未測定かを確認できます。'
      : 'Choose an assessment lens to see whether this capability is direct, supporting, or unmeasured.';
  }
  const lens = coverageLensLabel(state.coverageLens);
  if (state.coverageLens === 'mext') {
    return relation === 'direct'
      ? (state.locale === 'ja' ? `${lens}の母語話者向け経路で明示的に扱われます。` : `Explicitly developed along the native-school route represented by ${lens}.`)
      : (state.locale === 'ja' ? `${lens}の対応範囲として記録されていません。これは不要という意味ではありません。` : `Not recorded in this ${lens} crosswalk. This does not mean the capability is unnecessary.`);
  }
  if (relation === 'direct') {
    return state.locale === 'ja'
      ? `${lens}の採点対象となる課題要求に、この能力が直接現れます。`
      : `This capability appears directly in the scored task demands of ${lens}.`;
  }
  if (relation === 'supporting') {
    return state.locale === 'ja'
      ? `${lens}の成績を支える能力ですが、独立して直接測定されるわけではありません。`
      : `This capability supports performance on ${lens}, but is not directly isolated and measured.`;
  }
  return state.locale === 'ja'
    ? `${lens}ではこの能力を直接測定しません。「未測定」は「不要」を意味しません。`
    : `${lens} does not directly measure this capability. “Unmeasured” does not mean “unnecessary.”`;
}

function capabilityAssessmentTags(topic) {
  const rows = [];
  for (const assessment of ['jlpt', 'bjt']) {
    for (const level of topic.assessmentCoverage?.[assessment]?.directLevels ?? []) {
      rows.push(`<li><span class="tag">${assessment.toUpperCase()} ${escapeHtml(level)}</span> ${escapeHtml(coverageRelationLabel('direct'))}</li>`);
    }
    for (const level of topic.assessmentCoverage?.[assessment]?.supportingLevels ?? []) {
      rows.push(`<li><span class="tag">${assessment.toUpperCase()} ${escapeHtml(level)}</span> ${escapeHtml(coverageRelationLabel('supporting'))}</li>`);
    }
  }
  if (topic.assessmentCoverage?.mext?.covered) rows.push(`<li><span class="tag">MEXT</span> ${escapeHtml(state.locale === 'ja' ? '母語話者向け教育課程で扱う' : 'Developed in the native curriculum')}</li>`);
  return rows.join('') || `<li>${escapeHtml(state.locale === 'ja' ? '記録された直接対応はありません。' : 'No direct alignment recorded.')}</li>`;
}

function shouldShowNodeLabel({ selected, dimmed, lensDimmed = false, visibleTopicCount, relation, isLandmark = false }) {
  if (selected) return visibleTopicCount <= 36;
  if (dimmed || lensDimmed) return false;
  if (relation === 'directPrereqNode' || relation === 'directUnlockNode') return true;
  if (isLandmark && visibleTopicCount > 36) return true;
  return visibleTopicCount <= 36;
}

function edgeList(dataset, edges, idKey) {
  if (edges.length === 0) return `<li>${escapeHtml(t('noGraphConnections'))}</li>`;
  return edges
    .map((edge) => {
      const topic = dataset.byId.get(edge[idKey]);
      const routeTags = (edge.routes ?? []).map((route) => `<span class="tag routeTag ${route}">${escapeHtml(route === 'native' ? 'L1' : 'L2')}</span>`).join('');
      return `<li><button class="linkButton" data-id="${edge[idKey]}">${escapeHtml(topic ? displayName(topic) : edge[idKey])}</button> <span class="tag">${escapeHtml(localizedDependencyStrength(edge.strength))}</span>${routeTags}<br>${escapeHtml(state.locale === 'ja' && edge.reasonJa ? edge.reasonJa : localizedProse(edge.reason))}</li>`;
    })
    .join('');
}

function renderReferenceAlignments(topic) {
  const alignments = topic.textbookAlignments ?? [];
  if (alignments.length === 0) {
    els.topicReferences.innerHTML = `<p class="statusText">${escapeHtml(t('noReferenceAlignments'))}</p>`;
    return;
  }

  els.topicReferences.innerHTML = `
    <div class="referenceGrid">
      ${alignments.map(referenceAlignmentCard).join('')}
    </div>
  `;
}

function referenceAlignmentCard(alignment) {
  const source = state.shared.sourceBySlug.get(alignment.source);
  const sourceName = localizedProse(source?.name ?? alignment.source);
  const title = source?.sourceUrl
    ? `<a href="${escapeHtml(source.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(sourceName)}</a>`
    : escapeHtml(sourceName);
  return `
    <section class="referenceCard">
      <div class="referenceTitle">${title}</div>
      <div class="tagRow">
        <span class="tag">${escapeHtml(alignment.source)}</span>
        <span class="tag">${escapeHtml(localizedProse(alignment.unit))}</span>
        <span class="tag">${escapeHtml(source?.textIncluded ? t('textIncluded') : t('noSourceText'))}</span>
      </div>
      <p>${escapeHtml(localizedProse(alignment.note ?? t('metadataOnlyAlignment')))}</p>
      ${source?.licenseStatus ? `<p class="referenceLicense">${escapeHtml(localizedProse(source.licenseStatus))}</p>` : ''}
    </section>
  `;
}

function sourceRecordsForTopic(topic) {
  const contextsBySlug = new Map();
  function add(slug, context) {
    if (!slug) return;
    if (!contextsBySlug.has(slug)) contextsBySlug.set(slug, new Set());
    contextsBySlug.get(slug).add(context);
  }

  for (const tag of topic.sourceTags ?? []) add(tag, state.locale === 'ja' ? '概念' : 'Topic');

  for (const id of topic.linkedCharacters ?? []) {
    const set = state.shared.characterById.get(id);
    for (const tag of set?.sourceTags ?? []) add(tag, state.locale === 'ja' ? '文字セット' : 'Character set');
  }

  for (const id of topic.linkedLexemes ?? []) {
    const set = state.shared.lexemeById.get(id);
    for (const tag of set?.sourceTags ?? []) add(tag, state.locale === 'ja' ? '語彙セット' : 'Lexeme set');
  }

  return [...contextsBySlug.entries()]
    .map(([slug, contexts]) => ({
      slug,
      contexts: [...contexts].sort(),
      source: state.shared.sourceBySlug.get(slug) ?? null
    }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

function renderSourceProvenance(topic) {
  const records = sourceRecordsForTopic(topic);
  if (records.length === 0) {
    els.topicSources.innerHTML = `<p class="statusText">${escapeHtml(t('noSourceTags'))}</p>`;
    return;
  }

  els.topicSources.innerHTML = `
    <div class="sourceGrid">
      ${records.map(sourceCard).join('')}
    </div>
  `;
}

function sourceCard(record) {
  const source = record.source;
  if (!source) {
    return `
      <section class="sourceCard">
        <div class="sourceTitle">${escapeHtml(record.slug)}</div>
        <p class="statusText">${escapeHtml(t('undocumentedSource'))}</p>
      </section>
    `;
  }

  const textIncluded = source.textIncluded ? t('textIncluded') : t('noSourceText');
  const sourceName = localizedProse(source.name);
  const title = source.sourceUrl
    ? `<a href="${escapeHtml(source.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(sourceName)}</a>`
    : escapeHtml(sourceName);
  return `
    <section class="sourceCard">
      <div class="sourceTitle">${title}</div>
      <div class="tagRow">
        <span class="tag">${escapeHtml(source.slug)}</span>
        <span class="tag">${escapeHtml(localizedRedistribution(source.redistribution))}</span>
        <span class="tag">${escapeHtml(textIncluded)}</span>
      </div>
      <p>${escapeHtml(localizedProse(source.use))}</p>
      <p class="sourceLicense">${escapeHtml(localizedProse(source.licenseStatus))}</p>
      <p class="statusText">${escapeHtml(record.contexts.join(', '))}</p>
    </section>
  `;
}

function renderCompanion(topic) {
  if (state.companionLayer === 'off') {
    els.topicCompanion.innerHTML = `<p class="statusText">${escapeHtml(t('off'))}</p>`;
    return;
  }

  const showCharacters = state.companionLayer === 'all' || state.companionLayer === 'characters';
  const showLexemes = state.companionLayer === 'all' || state.companionLayer === 'lexemes';
  const characterSets = showCharacters
    ? (topic.linkedCharacters ?? []).map((id) => state.shared.characterById.get(id)).filter(Boolean)
    : [];
  const lexemeSets = showLexemes
    ? (topic.linkedLexemes ?? []).map((id) => state.shared.lexemeById.get(id)).filter(Boolean)
    : [];

  if (characterSets.length === 0 && lexemeSets.length === 0) {
    els.topicCompanion.innerHTML = `<p class="statusText">${escapeHtml(t('noCompanionData'))}</p>`;
    return;
  }

  els.topicCompanion.innerHTML = `
    ${characterSets.length ? `<div class="companionGrid">${characterSets.map(characterCard).join('')}</div>` : ''}
    ${lexemeSets.length ? `<div class="companionGrid">${lexemeSets.map(lexemeCard).join('')}</div>` : ''}
  `;
}

function characterCard(set) {
  const sample = set.characters.slice(0, 36).join(' ');
  const more = set.characters.length > 36 ? ` +${set.characters.length - 36}` : '';
  return `
    <section class="companionCard">
      <div class="companionTitle">${escapeHtml(displaySetName(set))}</div>
      <div class="characterRun">${escapeHtml(sample)}${escapeHtml(more)}</div>
      <p>${escapeHtml(localizedProse(set.notes ?? ''))}</p>
      <div class="tagRow">${(set.sourceTags ?? []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
    </section>
  `;
}

function lexemeCard(set) {
  const items = set.items
    .slice(0, 8)
    .map((item) => `<li><strong>${escapeHtml(item.lemma)}</strong> ${escapeHtml(item.reading)}${item.gloss ? ` · ${escapeHtml(localizedProse(item.gloss))}` : ''}</li>`)
    .join('');
  const more = set.items.length > 8 ? `<li>+${set.items.length - 8}</li>` : '';
  return `
    <section class="companionCard">
      <div class="companionTitle">${escapeHtml(displaySetName(set))}</div>
      <ul class="compactList">${items}${more}</ul>
      <p>${escapeHtml(localizedProse(set.notes ?? ''))}</p>
      <div class="tagRow">${(set.sourceTags ?? []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
    </section>
  `;
}

function handleExport(kind) {
  const dataset = getDataset();
  const selected = dataset.byId.get(state.selectedId) ?? dataset.topics[0];
  if (!selected) return;

  if (kind === 'link') {
    updateHash();
    state.exportText = window.location.href;
  } else if (kind === 'path') {
    state.exportText = JSON.stringify(exportPathPayload(dataset, selected), null, 2);
  } else if (kind === 'list') {
    state.exportText = JSON.stringify(exportListPayload(dataset), null, 2);
  } else {
    state.exportText = JSON.stringify(exportTopicPayload(dataset, selected), null, 2);
  }

  renderExportOutput();
  copyExportText(kind);
}

function exportTopicPayload(dataset, topic) {
  const profile = profiles[state.profileId];
  const prereqEdges = dataset.dependencies.filter((edge) => edge.topicId === topic.id);
  const unlockEdges = dataset.dependencies.filter((edge) => edge.prerequisiteId === topic.id);
  return {
    profile: profile.key,
    topic: topicSummary(topic),
    prerequisites: prereqEdges.map((edge) => edgeSummary(dataset, edge, 'prerequisiteId')),
    unlocks: unlockEdges.map((edge) => edgeSummary(dataset, edge, 'topicId')),
    companion: companionSummary(topic),
    referenceAlignments: referenceAlignmentSummary(topic),
    sourceProvenance: sourceProvenanceSummary(topic)
  };
}

function exportPathPayload(dataset, topic) {
  const pathTopics = prerequisitePath(dataset, topic.id).map((id) => dataset.byId.get(id)).filter(Boolean);
  return {
    profile: profiles[state.profileId].key,
    selectedTopicId: topic.id,
    path: pathTopics.map(topicSummary),
    edgeMode: 'depends on',
    generatedAt: new Date().toISOString()
  };
}

function exportListPayload(dataset) {
  return {
    profile: profiles[state.profileId].key,
    filters: {
      search: state.search,
      domain: state.domain,
      cluster: state.cluster,
      type: state.type,
      axis: state.axis,
      standard: state.standard,
      script: state.script,
      jlpt: state.jlpt,
      bjt: state.bjt,
      traceMode: state.traceMode
    },
    topics: filteredTopics(dataset.topics).map(topicSummary),
    generatedAt: new Date().toISOString()
  };
}

function topicSummary(topic) {
  return {
    id: topic.id,
    name: topic.name,
    japaneseName: topic.japaneseName,
    domain: topic.domain,
    type: topic.type,
    range: localizedRange(topic),
    standards: topic.standards,
    sourceTags: topic.sourceTags,
    textbookAlignments: topic.textbookAlignments,
    jlptLevels: topic.jlptLevels,
    bjtLevels: topic.bjtLevels,
    linkedCharacters: topic.linkedCharacters,
    linkedLexemes: topic.linkedLexemes
  };
}

function edgeSummary(dataset, edge, idKey) {
  const topic = dataset.byId.get(edge[idKey]);
  return {
    id: edge[idKey],
    name: topic?.name ?? edge[idKey],
    japaneseName: topic?.japaneseName ?? null,
    strength: edge.strength,
    reason: edge.reason
  };
}

function companionSummary(topic) {
  return {
    characters: (topic.linkedCharacters ?? []).map((id) => state.shared.characterById.get(id)).filter(Boolean).map((set) => ({
      id: set.id,
      name: set.name,
      japaneseName: set.japaneseName,
      count: set.characters.length
    })),
    lexemes: (topic.linkedLexemes ?? []).map((id) => state.shared.lexemeById.get(id)).filter(Boolean).map((set) => ({
      id: set.id,
      name: set.name,
      japaneseName: set.japaneseName,
      count: set.items.length
    }))
  };
}

function referenceAlignmentSummary(topic) {
  return (topic.textbookAlignments ?? []).map((alignment) => {
    const source = state.shared.sourceBySlug.get(alignment.source);
    return {
      source: alignment.source,
      unit: alignment.unit,
      note: alignment.note ?? null,
      sourceName: source?.name ?? null,
      sourceUrl: source?.sourceUrl ?? null,
      redistribution: source?.redistribution ?? null,
      textIncluded: source?.textIncluded ?? null,
      licenseStatus: source?.licenseStatus ?? null
    };
  });
}

function sourceProvenanceSummary(topic) {
  return sourceRecordsForTopic(topic).map((record) => {
    const source = record.source;
    return {
      slug: record.slug,
      contexts: record.contexts,
      name: source?.name ?? null,
      category: source?.category ?? null,
      sourceUrl: source?.sourceUrl ?? null,
      redistribution: source?.redistribution ?? null,
      textIncluded: source?.textIncluded ?? null,
      licenseStatus: source?.licenseStatus ?? null,
      notes: source?.notes ?? null
    };
  });
}

function prerequisitePath(dataset, selectedId) {
  const prereqsByTopic = new Map();
  for (const edge of dataset.dependencies) {
    if (!prereqsByTopic.has(edge.topicId)) prereqsByTopic.set(edge.topicId, []);
    prereqsByTopic.get(edge.topicId).push(edge.prerequisiteId);
  }

  const visited = new Set();
  const ordered = [];
  function visit(id) {
    if (visited.has(id)) return;
    visited.add(id);
    for (const prereqId of prereqsByTopic.get(id) ?? []) visit(prereqId);
    ordered.push(id);
  }
  visit(selectedId);
  return ordered;
}

function renderExportOutput() {
  els.exportOutput.value = state.exportText;
}

async function copyExportText(kind) {
  if (!state.exportText) return;
  let copied = false;
  try {
    await navigator.clipboard.writeText(state.exportText);
    copied = true;
  } catch {
    els.exportOutput.focus();
    els.exportOutput.select();
    copied = document.execCommand?.('copy') ?? false;
  }
  els.exportStatus.textContent = copied ? t('copyComplete') : t('exportReady');
}

document.addEventListener('click', (event) => {
  const exportButton = event.target.closest('[data-export]');
  if (exportButton) {
    handleExport(exportButton.dataset.export);
    return;
  }

  const routeTopicButton = event.target.closest('.routeTopicButton');
  if (routeTopicButton) {
    const profileId = routeTopicButton.dataset.targetProfile;
    const topicId = routeTopicButton.dataset.id;
    switchProfile(profileId);
    selectTopicById(topicId);
    return;
  }

  const button = event.target.closest('.linkButton');
  if (!button) return;
  selectTopicById(button.dataset.id);
});

function filteredTopics(topics) {
  const dataset = getDataset();
  const traceIds = traceIdsForSelection(dataset);
  return topics.filter((topic) => {
    if (traceIds && !traceIds.has(topic.id)) return false;
    if (state.jlptJourneyContext && !state.jlptJourneyContext.ids.has(topic.id)) return false;
    if (state.domain !== 'all' && topic.domain !== state.domain) return false;
    if (state.cluster !== 'all' && !topicMatchesSelectedCluster(topic)) return false;
    if (state.type !== 'all' && topic.type !== state.type) return false;
    if (state.axis !== 'all' && !topicCoversAxis(topic, state.axis)) return false;
    if (state.standard !== 'all' && !(topic.standards ?? []).includes(state.standard)) return false;
    if (state.script !== 'all' && !(topic.scriptRequirements ?? []).includes(state.script)) return false;
    if (state.profileId !== 'compare' && state.jlpt !== 'all' && !(topic.jlptLevels ?? []).includes(state.jlpt)) return false;
    if (state.profileId !== 'compare' && state.bjt !== 'all' && !(topic.bjtLevels ?? []).includes(state.bjt)) return false;
    if (!state.search) return true;
    const profile = profiles[state.profileId];
    const haystack = [
      topic.name,
      topic.japaneseName,
      topic.description,
      topic.domain,
      localizedDomain(topic.domain),
      topic.type,
      profile.formatRange(topic),
      localizedRange(topic, profile),
      ...(gradeSearchTerms(topic) ?? []),
      ...(topic.standards ?? []),
      ...(topic.sourceTags ?? []),
      ...(topic.scriptRequirements ?? []),
      ...(topic.jfLevels ?? []),
      ...(topic.jlptLevels ?? []),
      ...(topic.bjtLevels ?? []),
      ...(topic.linkedCharacters ?? []),
      ...(topic.linkedLexemes ?? []),
      ...referenceAlignmentSearchTerms(topic),
      ...sourceSearchTerms(topic),
      ...companionSearchTerms(topic)
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    return haystack.includes(state.search);
  });
}

function traceIdsForSelection(dataset = getDataset()) {
  if (state.traceMode === 'all') return null;
  const selectedId = state.selectedId ?? dataset.topics[0]?.id;
  if (!selectedId) return null;
  if (state.traceMode === 'prerequisites') return new Set(prerequisitePath(dataset, selectedId));
  if (state.traceMode === 'unlocks') return unlockClosure(dataset, selectedId);
  return null;
}

function unlockClosure(dataset, selectedId) {
  const unlocksByTopic = new Map();
  for (const edge of dataset.dependencies) {
    if (!unlocksByTopic.has(edge.prerequisiteId)) unlocksByTopic.set(edge.prerequisiteId, []);
    unlocksByTopic.get(edge.prerequisiteId).push(edge.topicId);
  }

  const visited = new Set();
  function visit(id) {
    if (visited.has(id)) return;
    visited.add(id);
    for (const unlockId of unlocksByTopic.get(id) ?? []) visit(unlockId);
  }
  visit(selectedId);
  return visited;
}

function topicCoversAxis(topic, value) {
  if (value.startsWith('stage:')) return topic.stage === Number(value.slice('stage:'.length));
  if (value === 'pre-grade') return topic.gradeRangeStart === null;
  if (value.startsWith('grade:')) {
    const grade = Number(value.slice('grade:'.length));
    return (
      Number.isInteger(topic.gradeRangeStart) &&
      Number.isInteger(topic.gradeRangeEnd) &&
      topic.gradeRangeStart <= grade &&
      topic.gradeRangeEnd >= grade
    );
  }
  if (value.startsWith('level:')) return topicCoversCeferBand(topic, value.slice('level:'.length));
  return true;
}

function selectedCluster(dataset = getDataset()) {
  if (state.cluster === 'all') return null;
  const index = Number(state.cluster.slice('cluster:'.length));
  if (!Number.isInteger(index)) return null;
  return dataset.clusters[index] ?? null;
}

function topicMatchesSelectedCluster(topic) {
  const cluster = selectedCluster();
  return !cluster || topicMatchesCluster(topic, cluster);
}

function topicMatchesCluster(topic, cluster) {
  if (!cluster || topic.domain !== cluster.domain) return false;
  if (profiles[state.profileId].key === 'ja-L1-child') return gradeRangesOverlap(topic, cluster);
  return levelRangesOverlap(topic, cluster);
}

function gradeRangesOverlap(topic, cluster) {
  const topicStart = topic.gradeRangeStart ?? 0;
  const topicEnd = topic.gradeRangeEnd ?? topicStart;
  const clusterStart = cluster.gradeRangeStart ?? 0;
  const clusterEnd = cluster.gradeRangeEnd ?? clusterStart;
  return topicStart <= clusterEnd && clusterStart <= topicEnd;
}

function levelRangesOverlap(topic, cluster) {
  const topicStart = levelValue(topic.levelRangeStart);
  const topicEnd = levelValue(topic.levelRangeEnd ?? topic.levelRangeStart);
  const clusterStart = levelValue(cluster.levelRangeStart);
  const clusterEnd = levelValue(cluster.levelRangeEnd ?? cluster.levelRangeStart);
  return topicStart <= clusterEnd && clusterStart <= topicEnd;
}

function clusterValue(index) {
  return `cluster:${index}`;
}

function formatClusterRange(cluster) {
  if (profiles[state.profileId].key === 'ja-L1-child') {
    const start = cluster.gradeRangeStart === null
      ? t('preGrade')
      : state.locale === 'ja'
        ? japaneseSchoolGrade(cluster.gradeRangeStart)
        : `Grade ${cluster.gradeRangeStart}`;
    const end = cluster.gradeRangeEnd === null
      ? start
      : state.locale === 'ja'
        ? japaneseSchoolGrade(cluster.gradeRangeEnd)
        : `Grade ${cluster.gradeRangeEnd}`;
    return start === end ? start : `${start}${state.locale === 'ja' ? '〜' : '-'}${end}`;
  }
  return cluster.levelRangeStart === cluster.levelRangeEnd
    ? cluster.levelRangeStart
    : `${cluster.levelRangeStart}-${cluster.levelRangeEnd}`;
}

function topicCoversCeferBand(topic, level) {
  const start = cefrRank(topic.levelRangeStart);
  const end = cefrRank(topic.levelRangeEnd);
  const target = cefrRank(level);
  return start !== null && end !== null && target !== null && start <= target && end >= target;
}

function cefrRank(level) {
  const match = String(level ?? '').match(/^([ABC])([12])/);
  if (!match) return null;
  return { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6 }[`${match[1]}${match[2]}`] ?? null;
}

function gradeSearchTerms(topic) {
  if (!Number.isInteger(topic.gradeRangeStart) || !Number.isInteger(topic.gradeRangeEnd)) return [];
  const terms = [];
  for (let grade = topic.gradeRangeStart; grade <= topic.gradeRangeEnd; grade += 1) {
    terms.push(`grade ${grade}`, `g${grade}`);
  }
  return terms;
}

function formatArrayTags(prefix, values) {
  return (values ?? []).map((value) => `${prefix}: ${value}`);
}

function getDataset() {
  return state.datasets[state.profileId];
}

function displayName(topic, mode = state.displayMode) {
  if (mode === 'english') return topic.name;
  if (mode === 'japanese') return topic.japaneseName || topic.name;
  return topic.japaneseName ? `${topic.name} / ${topic.japaneseName}` : topic.name;
}

function localizedDomain(domain) {
  return state.locale === 'ja' ? domainLabelsJa[domain] ?? domain : domain;
}

function localizedType(type) {
  return state.locale === 'ja' ? typeLabelsJa[type] ?? type : titleCase(type);
}

function japaneseSchoolGrade(grade) {
  if (grade <= 6) return `小学${grade}年`;
  if (grade <= 9) return `中学${grade - 6}年`;
  return `高校${grade - 9}年`;
}

function localizedRange(topic, profile = profiles[state.profileId]) {
  if (profile.key === 'ja-shared-capability') return capabilityStageLabel(topic.stage ?? 1);
  if (state.locale !== 'ja' || profile.key !== 'ja-L1-child') return profile.formatRange(topic);
  if (topic.gradeRangeStart === null) {
    const start = topic.ageRangeStart;
    const end = topic.ageRangeEnd ?? start;
    return start === end ? `${start}歳` : `${start}〜${end}歳`;
  }
  const start = japaneseSchoolGrade(topic.gradeRangeStart);
  const end = japaneseSchoolGrade(topic.gradeRangeEnd ?? topic.gradeRangeStart);
  return start === end ? start : `${start}〜${end}`;
}

function capabilityStageLabel(stage) {
  const labels = state.locale === 'ja'
    ? ['基礎', '構築', '自立', '高度']
    : ['Foundation', 'Structure', 'Independent', 'Advanced'];
  return labels[Number(stage) - 1] ?? String(stage);
}

function displaySetName(set) {
  if (state.displayMode === 'english') return set.name;
  if (state.displayMode === 'japanese') return set.japaneseName || set.name;
  return set.japaneseName ? `${set.name} / ${set.japaneseName}` : set.name;
}

function companionSearchTerms(topic) {
  if (!state.shared) return [];
  const characterTerms = (topic.linkedCharacters ?? [])
    .map((id) => state.shared.characterById.get(id))
    .filter(Boolean)
    .flatMap((set) => [set.name, set.japaneseName, set.notes, ...(set.characters ?? [])]);
  const lexemeTerms = (topic.linkedLexemes ?? [])
    .map((id) => state.shared.lexemeById.get(id))
    .filter(Boolean)
    .flatMap((set) => [
      set.name,
      set.japaneseName,
      set.notes,
      ...set.items.flatMap((item) => [item.lemma, item.reading, item.gloss])
    ]);
  return [...characterTerms, ...lexemeTerms];
}

function sourceSearchTerms(topic) {
  return sourceRecordsForTopic(topic).flatMap((record) => {
    const source = record.source;
    return [
      record.slug,
      ...record.contexts,
      source?.name,
      source?.category,
      source?.use,
      source?.redistribution,
      source?.licenseStatus,
      source?.notes
    ];
  });
}

function referenceAlignmentSearchTerms(topic) {
  return (topic.textbookAlignments ?? []).flatMap((alignment) => {
    const source = state.shared?.sourceBySlug.get(alignment.source);
    return [
      alignment.source,
      alignment.unit,
      alignment.note,
      source?.name,
      source?.category,
      source?.use,
      source?.licenseStatus,
      'textbook alignment',
      'reference alignment'
    ];
  });
}

function restoreFromHash() {
  const params = new URLSearchParams(window.location.hash.slice(1));
  const profileId = params.get('profile');
  const topicId = params.get('topic');
  const traceMode = params.get('trace');
  const journey = params.get('journey');
  const lens = params.get('lens');
  const comparisonView = params.get('view');
  if (profileId && state.datasets[profileId]) state.profileId = profileId;
  if (state.profileId === 'compare') {
    if (isValidCoverageLens(lens)) state.coverageLens = lens;
    if (['routes', 'differences', 'coverage', 'beyond'].includes(comparisonView)) state.comparisonView = comparisonView;
    if (['coverage', 'beyond'].includes(state.comparisonView) && state.coverageLens === 'none') state.coverageLens = 'jlpt:N1';
  }
  if (state.profileId === 'l2-adult' && isValidJlptJourney(journey)) {
    state.jlptJourney = journey;
    state.jlpt = journey.startsWith('level:') ? journey.slice('level:'.length) : 'all';
  }
  if (topicId && state.datasets[state.profileId]?.byId.has(topicId)) state.selectedId = topicId;
  if (['all', 'prerequisites', 'unlocks'].includes(traceMode)) state.traceMode = traceMode;
}

function updateHash() {
  const selected = getDataset()?.byId.get(state.selectedId);
  const params = new URLSearchParams({ profile: state.profileId, lang: state.locale, theme: state.theme });
  if (state.profileId === 'l2-adult' && isValidJlptJourney(state.jlptJourney)) {
    params.set('journey', state.jlptJourney);
  }
  if (state.profileId === 'compare') {
    if (state.coverageLens !== 'none') params.set('lens', state.coverageLens);
    if (state.comparisonView !== 'routes') params.set('view', state.comparisonView);
  }
  if (selected) params.set('topic', selected.id);
  if (selected && state.traceMode !== 'all') params.set('trace', state.traceMode);
  history.replaceState(null, '', `#${params.toString()}`);
}

function isValidCoverageLens(lens) {
  return lens === 'none' || lens === 'mext' || /^jlpt:N[1-5]$/.test(lens ?? '') || /^bjt:J(?:[1-5]|1\+)$/.test(lens ?? '');
}

function graphSize() {
  const rect = els.graph.getBoundingClientRect();
  return {
    width: Math.max(320, Math.round(rect.width || 960)),
    height: Math.max(520, Math.round(rect.height || 620))
  };
}

function unique(items) {
  return [...new Set(items)];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function option(value, label) {
  return `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`;
}

function titleCase(value) {
  return value
    .toLowerCase()
    .split(/[_\s-]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function jlptSort(a, b) {
  const order = ['N5', 'N4', 'N3', 'N2', 'N1'];
  return order.indexOf(a) - order.indexOf(b);
}

function bjtSort(a, b) {
  const order = ['J5', 'J4', 'J3', 'J2', 'J1', 'J1+'];
  return order.indexOf(a) - order.indexOf(b);
}

function shorten(value, maxLength) {
  return value.length > maxLength ? `${value.slice(0, maxLength - 1)}…` : value;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function levelValue(level) {
  const match = String(level ?? 'A1.0').match(/^([ABC])(\d)(?:\.(\d))?/);
  if (!match) return 1;
  const band = { A: 0, B: 10, C: 20 }[match[1]] ?? 0;
  return band + Number(match[2]) * 2 + Number(match[3] ?? 0) / 10;
}

function tickValues(min, max) {
  if (max <= min) return [min];
  const values = [];
  const steps = Math.min(6, Math.ceil(max - min) + 1);
  for (let i = 0; i < steps; i += 1) {
    values.push(min + ((max - min) * i) / Math.max(1, steps - 1));
  }
  return values;
}

function axisTickValues(min, max, profile) {
  if (profile.key === 'ja-shared-capability') return [1, 2, 3, 4].filter((value) => value >= min && value <= max);
  if (profile.key !== 'ja-L2-adult') return tickValues(min, max);
  const levelTicks = [
    levelValue('A1.0'),
    levelValue('A2.0'),
    levelValue('B1.0'),
    levelValue('B2.0'),
    levelValue('C1.0'),
    levelValue('C2.0')
  ].filter((value) => value >= min - 0.2 && value <= max + 0.2);
  return levelTicks.length > 0 ? levelTicks : tickValues(min, max);
}

function formatTick(value, profile) {
  if (profile.key === 'ja-shared-capability') return capabilityStageLabel(Math.round(value));
  if (profile.key === 'ja-L1-child') return String(Math.round(value));
  const labels = [
    ['A1', levelValue('A1.0')],
    ['A2', levelValue('A2.0')],
    ['B1', levelValue('B1.0')],
    ['B2', levelValue('B2.0')],
    ['C1', levelValue('C1.0')],
    ['C2', levelValue('C2.0')]
  ];
  const nearest = labels.find(([, tick]) => Math.abs(tick - value) < 0.1);
  return nearest?.[0] ?? '';
}

window.addEventListener('resize', () => renderGraph());
