import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));
}

const nativeTopics = readJson('data/native-child/topics.json').topics;
const l2Topics = readJson('data/l2-adult/topics.json').topics;

const definitions = [
  {
    id: 'jc_kana_script',
    domain: 'Script & Orthography',
    stage: 1,
    name: 'Kana and script decoding',
    japaneseName: 'かなと文字の解読',
    summary: 'Connect Japanese sounds and morae with hiragana, katakana, and other basic script conventions.',
    summaryJa: '日本語の音や拍を、ひらがな・カタカナなどの基本的な文字体系と結びつけます。'
  },
  {
    id: 'jc_orthography_punctuation',
    domain: 'Script & Orthography',
    stage: 2,
    name: 'Orthography, punctuation, and notation',
    japaneseName: '表記・句読点・記号',
    summary: 'Read and apply Japanese spelling, punctuation, layout, quotation, and notation conventions.',
    summaryJa: '日本語の綴り、句読点、配置、引用、表記上の慣習を読み取り、使い分けます。'
  },
  {
    id: 'jc_handwriting_transcription',
    domain: 'Script & Orthography',
    stage: 2,
    name: 'Handwriting and transcription',
    japaneseName: '書写と転記',
    summary: 'Produce legible Japanese by handwriting, copying, transcribing, typing, and controlling page layout.',
    summaryJa: '手書き、書き写し、転記、入力、紙面構成を通して、読みやすい日本語を産出します。'
  },
  {
    id: 'jc_kanji_reading',
    domain: 'Script & Orthography',
    stage: 2,
    name: 'Kanji recognition and word-family reading',
    japaneseName: '漢字認識と語族の読解',
    summary: 'Use kanji components, readings, okurigana, compounds, and context to recognise written words.',
    summaryJa: '漢字の構成、読み、送り仮名、熟語、文脈を用いて書かれた語を認識します。'
  },
  {
    id: 'jc_kanji_writing',
    domain: 'Script & Orthography',
    stage: 3,
    name: 'Productive kanji and orthographic control',
    japaneseName: '漢字の産出と表記の調整',
    summary: 'Write and edit kanji accurately while selecting notation appropriate to meaning, genre, and audience.',
    summaryJa: '意味、ジャンル、読み手に合う表記を選びながら、漢字を正確に書き、推敲します。'
  },
  {
    id: 'jc_pronunciation_prosody',
    domain: 'Sound & Listening',
    stage: 1,
    name: 'Pronunciation, morae, and prosody',
    japaneseName: '発音・拍・韻律',
    summary: 'Perceive and produce Japanese sound contrasts, mora timing, rhythm, pitch, and intonation.',
    summaryJa: '日本語の音の対立、拍の長さ、リズム、ピッチ、イントネーションを知覚し、産出します。'
  },
  {
    id: 'jc_listening_comprehension',
    domain: 'Sound & Listening',
    stage: 2,
    name: 'Listening comprehension and inference',
    japaneseName: '聴解と推論',
    summary: 'Follow spoken Japanese for gist, detail, intention, stance, reference, and implied meaning.',
    summaryJa: '話し言葉の要点、詳細、意図、立場、指示対象、含意を聞き取ります。'
  },
  {
    id: 'jc_vocabulary_meaning',
    domain: 'Vocabulary & Meaning',
    stage: 1,
    name: 'Vocabulary meaning and word relationships',
    japaneseName: '語彙の意味と語の関係',
    summary: 'Build lexical meaning through context, word formation, semantic relationships, and repeated use.',
    summaryJa: '文脈、語形成、意味関係、繰り返しの使用を通して語彙の意味を広げます。'
  },
  {
    id: 'jc_lexical_register',
    domain: 'Vocabulary & Meaning',
    stage: 2,
    name: 'Collocation, terminology, and lexical register',
    japaneseName: 'コロケーション・専門語・語彙レジスター',
    summary: 'Choose collocations, abstract and technical terms, idioms, and register-sensitive vocabulary.',
    summaryJa: 'コロケーション、抽象語・専門語、慣用表現、場面に応じた語彙を選びます。'
  },
  {
    id: 'jc_morphology_conjugation',
    domain: 'Grammar & Structure',
    stage: 1,
    name: 'Morphology and conjugation',
    japaneseName: '形態論と活用',
    summary: 'Control inflection, conjugation, tense, aspect, voice, and form selection in Japanese predicates.',
    summaryJa: '日本語の述語における屈折、活用、時制、アスペクト、ヴォイス、形式選択を扱います。'
  },
  {
    id: 'jc_particles_information',
    domain: 'Grammar & Structure',
    stage: 2,
    name: 'Particles and information structure',
    japaneseName: '助詞と情報構造',
    summary: 'Use particles and topic-focus choices to organise roles, reference, contrast, and information flow.',
    summaryJa: '助詞と主題・焦点の選択によって、役割、指示、対比、情報の流れを組み立てます。'
  },
  {
    id: 'jc_syntax_clause',
    domain: 'Grammar & Structure',
    stage: 2,
    name: 'Syntax and clause combining',
    japaneseName: '統語と節の結合',
    summary: 'Build, connect, embed, compress, and expand clauses while controlling scope and cohesion.',
    summaryJa: '節を組み立て、接続し、埋め込み、圧縮・展開しながら、作用域と結束性を調整します。'
  },
  {
    id: 'jc_grammar_awareness',
    domain: 'Grammar & Structure',
    stage: 3,
    name: 'Grammar and language awareness',
    japaneseName: '文法と言語への気づき',
    summary: 'Notice, name, compare, and explain grammatical patterns and their effects in connected language.',
    summaryJa: 'まとまりのある言語の中で文法パターンに気づき、名付け、比較し、その効果を説明します。'
  },
  {
    id: 'jc_informational_reading',
    domain: 'Reading & Literature',
    stage: 2,
    name: 'Informational reading and main ideas',
    japaneseName: '説明的文章の読解と要旨',
    summary: 'Locate main ideas, details, structure, sequence, and explicit relationships in informational texts.',
    summaryJa: '説明的文章から要旨、詳細、構成、順序、明示された関係を捉えます。'
  },
  {
    id: 'jc_critical_reading',
    domain: 'Reading & Literature',
    stage: 3,
    name: 'Critical, integrated, and argumentative reading',
    japaneseName: '批判的・統合的・論証的読解',
    summary: 'Integrate sources and evaluate argument, evidence, framing, reliability, implication, and stance.',
    summaryJa: '複数資料を統合し、論証、根拠、枠づけ、信頼性、含意、立場を評価します。'
  },
  {
    id: 'jc_literary_reading',
    domain: 'Reading & Literature',
    stage: 3,
    name: 'Literary reading and interpretation',
    japaneseName: '文学的文章の読解と解釈',
    summary: 'Interpret narrative, character, viewpoint, imagery, symbolism, theme, and literary technique.',
    summaryJa: '物語、人物、視点、イメージ、象徴、主題、表現技法を解釈します。'
  },
  {
    id: 'jc_classical_japanese',
    domain: 'Reading & Literature',
    stage: 4,
    name: 'Classical Japanese and kanbun',
    japaneseName: '古典日本語と漢文',
    summary: 'Read classical Japanese and kanbun through historical grammar, conventions, context, and reception.',
    summaryJa: '歴史的文法、慣習、背景、受容を通して古文と漢文を読みます。'
  },
  {
    id: 'jc_composition',
    domain: 'Writing & Expression',
    stage: 2,
    name: 'Sentence, paragraph, and genre composition',
    japaneseName: '文・段落・ジャンルの作文',
    summary: 'Compose connected Japanese for description, narration, explanation, messages, and common genres.',
    summaryJa: '描写、物語、説明、メッセージ、一般的なジャンルのまとまりある日本語を書きます。'
  },
  {
    id: 'jc_argument_writing',
    domain: 'Writing & Expression',
    stage: 3,
    name: 'Argument, evidence, and synthesis writing',
    japaneseName: '論証・根拠・統合の文章',
    summary: 'Develop claims with reasons, evidence, counterarguments, source synthesis, and audience-aware structure.',
    summaryJa: '理由、根拠、反論、資料の統合、読み手を意識した構成によって主張を展開します。'
  },
  {
    id: 'jc_revision_editing',
    domain: 'Writing & Expression',
    stage: 3,
    name: 'Revision, editing, and proofreading',
    japaneseName: '推敲・編集・校正',
    summary: 'Revise content, cohesion, register, wording, notation, and correctness for purpose and audience.',
    summaryJa: '目的と読み手に合わせて、内容、結束性、文体、語句、表記、正確さを推敲します。'
  },
  {
    id: 'jc_everyday_interaction',
    domain: 'Speaking & Interaction',
    stage: 1,
    name: 'Everyday speaking and interaction',
    japaneseName: '日常の発話とやり取り',
    summary: 'Participate in everyday exchanges by asking, answering, describing, reporting, and managing turns.',
    summaryJa: '質問、応答、描写、報告、発話順序の管理によって日常のやり取りに参加します。'
  },
  {
    id: 'jc_interaction_repair',
    domain: 'Speaking & Interaction',
    stage: 2,
    name: 'Interaction repair and negotiation',
    japaneseName: 'やり取りの修復と交渉',
    summary: 'Clarify, confirm, soften, refuse, repair misunderstanding, and negotiate alternatives in interaction.',
    summaryJa: 'やり取りの中で明確化、確認、緩和、断り、誤解の修復、代案の交渉を行います。'
  },
  {
    id: 'jc_discussion_debate',
    domain: 'Speaking & Interaction',
    stage: 3,
    name: 'Discussion, facilitation, and debate',
    japaneseName: '話し合い・進行・討論',
    summary: 'Develop and evaluate positions, evidence, disagreement, consensus, and group decisions in discussion.',
    summaryJa: '話し合いの中で立場、根拠、意見の相違、合意、集団の決定を展開し、評価します。'
  },
  {
    id: 'jc_presentation',
    domain: 'Speaking & Interaction',
    stage: 3,
    name: 'Presentation and public speaking',
    japaneseName: '発表と公的な話し方',
    summary: 'Plan and deliver structured spoken presentations while using evidence, media, and audience feedback.',
    summaryJa: '根拠、メディア、聞き手の反応を用いながら、構成された発表を計画し、実施します。'
  },
  {
    id: 'jc_pragmatics_register',
    domain: 'Pragmatics & Culture',
    stage: 2,
    name: 'Pragmatics, politeness, and register',
    japaneseName: '語用論・丁寧さ・レジスター',
    summary: 'Adapt implication, politeness, honorifics, stance, and register to relationships, roles, and situations.',
    summaryJa: '人間関係、役割、状況に応じて、含意、丁寧さ、敬語、立場、レジスターを調整します。'
  },
  {
    id: 'jc_language_culture',
    domain: 'Pragmatics & Culture',
    stage: 3,
    name: 'Language culture, history, and variation',
    japaneseName: '言語文化・歴史・変異',
    summary: 'Understand dialect, generational and historical change, language culture, genre, and social variation.',
    summaryJa: '方言、世代差・歴史的変化、言語文化、ジャンル、社会的変異を理解します。'
  },
  {
    id: 'jc_research_information',
    domain: 'Information & Research',
    stage: 3,
    name: 'Research, sources, and information use',
    japaneseName: '探究・資料・情報活用',
    summary: 'Find, organise, evaluate, quote, compare, and synthesise information from multiple sources.',
    summaryJa: '複数の資料から情報を探し、整理し、評価し、引用し、比較し、統合します。'
  },
  {
    id: 'jc_media_literacy',
    domain: 'Information & Research',
    stage: 3,
    name: 'Media and digital literacy',
    japaneseName: 'メディア・デジタルリテラシー',
    summary: 'Navigate, interpret, evaluate, and design messages across digital, visual, data, and media forms.',
    summaryJa: 'デジタル、視覚、データ、メディアの形式を横断して情報を読み、評価し、表現を設計します。'
  },
  {
    id: 'jc_learning_strategies',
    domain: 'Learning & Reflection',
    stage: 1,
    name: 'Learning, lookup, and repair strategies',
    japaneseName: '学習・検索・修復の方略',
    summary: 'Use lookup, note-taking, rehearsal, memory, feedback, error analysis, and targeted review strategies.',
    summaryJa: '検索、メモ、反復、記憶、フィードバック、誤り分析、的を絞った復習の方略を使います。'
  },
  {
    id: 'jc_self_assessment',
    domain: 'Learning & Reflection',
    stage: 3,
    name: 'Self-assessment and learning transfer',
    japaneseName: '自己評価と学習の転移',
    summary: 'Evaluate evidence of growth, identify gaps, set goals, and transfer strategies across tasks and contexts.',
    summaryJa: '成長の証拠を評価し、課題を特定し、目標を定め、方略を別の課題や文脈へ転移します。'
  },
  {
    id: 'jc_workplace_documents',
    domain: 'Workplace & Intercultural',
    stage: 4,
    name: 'Workplace documents and decisions',
    japaneseName: '職場文書と意思決定',
    summary: 'Read and produce workplace messages, forms, reports, minutes, proposals, briefs, and decision records.',
    summaryJa: '職場のメッセージ、帳票、報告書、議事録、提案書、要約、意思決定記録を読み書きします。'
  },
  {
    id: 'jc_workplace_interaction',
    domain: 'Workplace & Intercultural',
    stage: 4,
    name: 'Workplace interaction and negotiation',
    japaneseName: '職場のやり取りと交渉',
    summary: 'Coordinate roles, schedules, clients, meetings, risk, escalation, and negotiation in workplace Japanese.',
    summaryJa: '職場日本語で役割、予定、顧客、会議、リスク、エスカレーション、交渉を調整します。'
  },
  {
    id: 'jc_intercultural_mediation',
    domain: 'Workplace & Intercultural',
    stage: 4,
    name: 'Intercultural communication and mediation',
    japaneseName: '異文化間コミュニケーションと仲介',
    summary: 'Interpret assumptions, expectations, face, norms, and perspectives across cultural and institutional contexts.',
    summaryJa: '文化的・制度的な文脈を横断して、前提、期待、フェイス、規範、視点を読み取り、仲介します。'
  }
];

const definitionById = new Map(definitions.map((definition) => [definition.id, definition]));

function includes(text, pattern) {
  return pattern.test(text);
}

function classify(topic) {
  const domain = topic.domain;
  const text = `${topic.id} ${topic.name} ${topic.japaneseName}`.toLowerCase();

  if (domain === 'Business Communication & Workplace Japanese') {
    return includes(text, /email|document|form|notice|report|proposal|summary|minutes|agenda|written|writing|reading|brief|record|memo|statement|invoice|contract|table|chart/)
      ? 'jc_workplace_documents'
      : 'jc_workplace_interaction';
  }
  if (domain === 'Intercultural Communication') return 'jc_intercultural_mediation';
  if (domain === 'Handwriting & Transcription') return 'jc_handwriting_transcription';

  if (domain === 'Kana & Orthography' || domain === 'Writing System & Orthography' || domain === 'Kanji & Morphographic Literacy') {
    if (includes(text, /kanji|漢字|okurigana|送り仮名|radical|component|compound|熟語/)) {
      return includes(text, /writing|write |handwrit|stroke|produce|production|copy|proofread|書く|書写/)
        ? 'jc_kanji_writing'
        : 'jc_kanji_reading';
    }
    if (includes(text, /handwrit|stroke|copy|transcri|genko|manuscript|keyboard|typing|layout control|筆順|書写|転記|原稿/)) {
      return 'jc_handwriting_transcription';
    }
    if (includes(text, /punct|orthograph|notation|layout|vertical|horizontal|spacing|quotation|citation|句読|表記|引用/)) {
      return 'jc_orthography_punctuation';
    }
    return 'jc_kana_script';
  }

  if (domain === 'Phonology & Listening' || domain === 'Oral Language & Listening') {
    if (includes(text, /presentation|speech|oral report|visual aid|発表|スピーチ/)) return 'jc_presentation';
    if (includes(text, /discussion|debate|facilitat|consensus|話し合|討論/)) return 'jc_discussion_debate';
    if (includes(text, /retell|speaking|speak |conversation|interview|explain aloud|oral response|語る|話す/)) return 'jc_everyday_interaction';
    return includes(text, /mora|pitch|pronunc|sound|vowel|consonant|rhythm|prosod|phonolog|intonation|音|拍|発音|韻律/)
      ? 'jc_pronunciation_prosody'
      : 'jc_listening_comprehension';
  }

  if (domain === 'Vocabulary & Semantics' || domain === 'Vocabulary & Word Knowledge') {
    return includes(text, /register|collocation|idiom|figurative|abstract|technical|academic|formal|word choice|terminolog|慣用|抽象|専門|語感|文体/)
      ? 'jc_lexical_register'
      : 'jc_vocabulary_meaning';
  }

  if (domain === 'Morphology & Conjugation') return 'jc_morphology_conjugation';
  if (domain === 'Particles & Information Structure') return 'jc_particles_information';
  if (domain === 'Syntax & Clause Combining') return 'jc_syntax_clause';

  if (domain === 'Grammar & Language Awareness') {
    if (includes(text, /punct|orthograph|notation|句読|表記/)) return 'jc_orthography_punctuation';
    if (includes(text, /particle|topic.focus|information structure|助詞|主題|焦点/)) return 'jc_particles_information';
    if (includes(text, /verb|conjug|inflect|tense|aspect|voice|passive|causative|adjective|活用|時制|受身|使役/)) return 'jc_morphology_conjugation';
    if (includes(text, /sentence|clause|modifier|connector|nominali|quotation|word order|scope|syntax|文|節|修飾|接続|引用|統語/)) return 'jc_syntax_clause';
    if (includes(text, /register|style|honorific|polite|敬語|文体|丁寧/)) return 'jc_pragmatics_register';
    return 'jc_grammar_awareness';
  }

  if (domain === 'Reading Literature' || domain === 'Reading Informational Texts' || domain === 'Reading Comprehension') {
    if (includes(text, /classical|kanbun|古典|古文|漢文|文語/)) return 'jc_classical_japanese';
    if (domain === 'Reading Literature' || includes(text, /literar|novel|story|narrat|character|poem|poetry|theme|symbol|imagery|fiction|物語|文学|詩|人物|主題|象徴/)) {
      return 'jc_literary_reading';
    }
    if (includes(text, /argument|evidence|critical|bias|framing|editorial|reliab|source|integrat|compare|implication|stance|論証|根拠|批判|偏り|統合|含意/)) {
      return 'jc_critical_reading';
    }
    return 'jc_informational_reading';
  }

  if (domain === 'Writing Composition') {
    if (includes(text, /revis|edit|proofread|correct|cohesion|register|推敲|編集|校正|見直/)) return 'jc_revision_editing';
    if (includes(text, /argument|claim|evidence|counter|opinion|research|synthesi|source|thesis|論証|主張|根拠|反論|探究|統合/)) return 'jc_argument_writing';
    return 'jc_composition';
  }

  if (domain === 'Discussion & Presentation' || domain === 'Speaking & Interaction') {
    if (includes(text, /presentation|speech|public speaking|visual aid|briefing|発表|スピーチ/)) return 'jc_presentation';
    if (includes(text, /discussion|debate|facilitat|consensus|meeting|panel|討論|話し合|合意|司会/)) return 'jc_discussion_debate';
    if (includes(text, /repair|clarif|confirm|negotiat|refusal|refuse|soften|request|misunderstand|聞き返|確認|交渉|断り|依頼|修復/)) return 'jc_interaction_repair';
    return 'jc_everyday_interaction';
  }

  if (domain === 'Pragmatics & Sociolinguistics' || domain === 'Language Culture & Variation') {
    if (includes(text, /classical|kanbun|古典|古文|漢文|文語/)) return 'jc_classical_japanese';
    if (includes(text, /dialect|history|historical|generation|culture|variation|genre|方言|歴史|世代|文化|変異/)) return 'jc_language_culture';
    return 'jc_pragmatics_register';
  }

  if (domain === 'Information Use & Media Literacy') {
    if (includes(text, /media|digital|web|online|visual|chart|graph|infographic|メディア|デジタル|図表|グラフ/)) return 'jc_media_literacy';
    return 'jc_research_information';
  }

  if (domain === 'Learning Strategies & Reflection' || domain === 'Learning Strategies & Meta-Language') {
    return includes(text, /reflection|self.assess|portfolio|goal|can.do|monitor|growth|next step|振り返|自己評価|目標|成長/)
      ? 'jc_self_assessment'
      : 'jc_learning_strategies';
  }

  throw new Error(`No capability rule for ${topic.id} (${topic.domain})`);
}

function expandGradeRange(topic) {
  if (!Number.isInteger(topic.gradeRangeEnd)) return [0];
  const start = Number.isInteger(topic.gradeRangeStart) ? topic.gradeRangeStart : 0;
  return Array.from({ length: topic.gradeRangeEnd - start + 1 }, (_, index) => start + index);
}

const jlptOrder = ['N5', 'N4', 'N3', 'N2', 'N1'];
const bjtOrder = ['J5', 'J4', 'J3', 'J2', 'J1', 'J1+'];

const assessmentCoverage = {
  jc_kana_script: { jlptSupporting: jlptOrder, bjtSupporting: bjtOrder },
  jc_orthography_punctuation: { jlptSupporting: jlptOrder, bjtDirect: bjtOrder },
  jc_handwriting_transcription: {},
  jc_kanji_reading: { jlptDirect: jlptOrder, bjtDirect: bjtOrder },
  jc_kanji_writing: {},
  jc_pronunciation_prosody: { jlptSupporting: jlptOrder, bjtSupporting: bjtOrder },
  jc_listening_comprehension: { jlptDirect: jlptOrder, bjtDirect: bjtOrder },
  jc_vocabulary_meaning: { jlptDirect: jlptOrder, bjtDirect: bjtOrder },
  jc_lexical_register: { jlptDirect: ['N3', 'N2', 'N1'], jlptSupporting: ['N5', 'N4'], bjtDirect: bjtOrder },
  jc_morphology_conjugation: { jlptDirect: jlptOrder, bjtDirect: bjtOrder },
  jc_particles_information: { jlptDirect: jlptOrder, bjtDirect: bjtOrder },
  jc_syntax_clause: { jlptDirect: jlptOrder, bjtDirect: bjtOrder },
  jc_grammar_awareness: { jlptSupporting: jlptOrder, bjtSupporting: bjtOrder },
  jc_informational_reading: { jlptDirect: jlptOrder, bjtDirect: bjtOrder },
  jc_critical_reading: { jlptDirect: ['N2', 'N1'], jlptSupporting: ['N3'], bjtDirect: ['J3', 'J2', 'J1', 'J1+'] },
  jc_literary_reading: { jlptDirect: ['N3', 'N2', 'N1'] },
  jc_classical_japanese: {},
  jc_composition: {},
  jc_argument_writing: {},
  jc_revision_editing: {},
  jc_everyday_interaction: { jlptSupporting: jlptOrder, bjtSupporting: bjtOrder },
  jc_interaction_repair: { jlptSupporting: ['N4', 'N3', 'N2', 'N1'], bjtSupporting: bjtOrder },
  jc_discussion_debate: { jlptSupporting: ['N3', 'N2', 'N1'], bjtSupporting: ['J3', 'J2', 'J1', 'J1+'] },
  jc_presentation: { jlptSupporting: ['N2', 'N1'], bjtSupporting: ['J3', 'J2', 'J1', 'J1+'] },
  jc_pragmatics_register: { jlptDirect: ['N3', 'N2', 'N1'], jlptSupporting: ['N5', 'N4'], bjtDirect: bjtOrder },
  jc_language_culture: {},
  jc_research_information: { jlptSupporting: ['N2', 'N1'], bjtSupporting: ['J2', 'J1', 'J1+'] },
  jc_media_literacy: { jlptSupporting: ['N2', 'N1'], bjtSupporting: ['J2', 'J1', 'J1+'] },
  jc_learning_strategies: {},
  jc_self_assessment: {},
  jc_workplace_documents: { jlptSupporting: ['N2', 'N1'], bjtDirect: bjtOrder },
  jc_workplace_interaction: { jlptSupporting: ['N2', 'N1'], bjtSupporting: bjtOrder },
  jc_intercultural_mediation: { bjtSupporting: bjtOrder }
};

function sortByOrder(values, order) {
  return [...new Set(values)].sort((a, b) => order.indexOf(a) - order.indexOf(b));
}

const membersByCapability = new Map(definitions.map((definition) => [definition.id, { l1: [], l2: [] }]));
for (const topic of nativeTopics) membersByCapability.get(classify(topic)).l1.push(topic);
for (const topic of l2Topics) membersByCapability.get(classify(topic)).l2.push(topic);

const capabilities = definitions.map((definition) => {
  const members = membersByCapability.get(definition.id);
  if (members.l1.length + members.l2.length === 0) throw new Error(`${definition.id} has no assigned topics`);
  const assessment = assessmentCoverage[definition.id] ?? {};
  return {
    ...definition,
    routeStatus: members.l1.length && members.l2.length ? 'shared' : members.l1.length ? 'native-only' : 'l2-only',
    l1TopicIds: members.l1.map((topic) => topic.id).sort(),
    l2TopicIds: members.l2.map((topic) => topic.id).sort(),
    coverage: {
      nativeGrades: [...new Set(members.l1.flatMap(expandGradeRange))].sort((a, b) => a - b),
      mextAreas: [...new Set(members.l1.flatMap((topic) => topic.mextAreas ?? []))].sort(),
      jlptLevels: sortByOrder(members.l2.flatMap((topic) => topic.jlptLevels ?? []), jlptOrder),
      bjtLevels: sortByOrder(members.l2.flatMap((topic) => topic.bjtLevels ?? []), bjtOrder),
      jfLevels: [...new Set(members.l2.flatMap((topic) => topic.jfLevels ?? []))].sort()
    },
    assessmentCoverage: {
      jlpt: {
        directLevels: sortByOrder(assessment.jlptDirect ?? [], jlptOrder),
        supportingLevels: sortByOrder(assessment.jlptSupporting ?? [], jlptOrder)
      },
      bjt: {
        directLevels: sortByOrder(assessment.bjtDirect ?? [], bjtOrder),
        supportingLevels: sortByOrder(assessment.bjtSupporting ?? [], bjtOrder)
      },
      mext: {
        covered: members.l1.length > 0
      }
    }
  };
});

const output = {
  version: 'seed-0.0.1',
  status: 'seed-crosswalk',
  note: 'Capability families are a learner-neutral comparison layer. Membership indicates topical overlap, not grade equivalence or proof that an assessment measures every mapped capability.',
  assessmentScopeNotes: {
    jlpt: {
      note: 'Direct coverage is limited to the JLPT scored domains: language knowledge, reading, and listening. Speaking, interaction, and writing may support performance but are not directly tested.',
      noteJa: '直接対象は、JLPTの採点領域である言語知識・読解・聴解に限ります。発話、やり取り、作文は成績を支える場合がありますが、直接は測定されません。',
      sourceUrls: [
        'https://www.jlpt.jp/e/guideline/pdf/n1_e.pdf',
        'https://www.jlpt.jp/e/about/cefr_reference.html'
      ]
    },
    bjt: {
      note: 'Direct coverage is limited to BJT computer-based listening, listening-and-reading, and reading tasks. Productive workplace interaction is not directly tested; BJT Can-Do findings are self-reported correlations.',
      noteJa: '直接対象は、BJTのCBTで扱う聴解・聴読解・読解課題に限ります。職場での産出的なやり取りは直接測定されず、BJT Can-Doの結果は自己報告による相関です。',
      sourceUrls: [
        'https://www.kanken.or.jp/bjt/english/about/feature.html',
        'https://www.kanken.or.jp/bjt/english/about/evaluation.html'
      ]
    },
    mext: {
      note: 'MEXT coverage indicates that a capability is developed in the represented native-school curriculum. It is a curriculum scope lens, not an exam measurement claim.',
      noteJa: '文科省カバレッジは、対応する母語話者向け学校教育課程で能力が育成されることを示します。試験による測定を意味するものではありません。',
      sourceUrls: [
        'https://www.mext.go.jp/a_menu/shotou/new-cs/1387014.htm',
        'https://www.mext.go.jp/a_menu/shotou/new-cs/1387016.htm',
        'https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm'
      ]
    }
  },
  capabilityCount: capabilities.length,
  topicAssignmentCount: nativeTopics.length + l2Topics.length,
  topicsByRoute: {
    'ja-L1-child': nativeTopics.length,
    'ja-L2-adult': l2Topics.length
  },
  capabilities
};

const outputPath = path.join(root, 'data/shared/capabilities.json');
fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);
process.stdout.write(`Wrote ${path.relative(root, outputPath)} with ${capabilities.length} capabilities and ${output.topicAssignmentCount} assignments.\n`);
