import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const graphs = [
  { profile: 'ja-L1-child', dir: 'data/native-child' },
  { profile: 'ja-L2-adult', dir: 'data/l2-adult' }
];

const requiredTopicFields = [
  'id',
  'learnerProfile',
  'type',
  'subject',
  'domain',
  'name',
  'japaneseName',
  'description',
  'evidence',
  'assessmentPrompt',
  'standards'
];

const allowedTypes = new Set(['CONCEPTUAL', 'PROCEDURAL', 'REPRESENTATIONAL', 'LANGUAGE', 'META']);
const allowedProfiles = new Set(graphs.map((g) => g.profile));
const japaneseScriptPattern = /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u;
const technicalLevelPattern = /^(?:[ABC][12]|N[1-5]|J[1-5]\+?|BJT J[1-5]\+?|CEFR\/JF [ABC][12]|JLPT N[1-5])$/;
const errors = [];

function readJson(file) {
  const fullPath = path.join(root, file);
  try {
    return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  } catch (error) {
    errors.push(`${file}: ${error.message}`);
    return null;
  }
}

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function addLocalizationString(target, value) {
  if (typeof value !== 'string') return;
  const source = value.trim();
  if (source && /[A-Za-z]/.test(source)) target.add(source);
}

function addLocalizationStringValues(target, value) {
  if (typeof value === 'string') {
    addLocalizationString(target, value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => addLocalizationStringValues(target, item));
    return;
  }
  if (!value || typeof value !== 'object') return;
  Object.values(value).forEach((item) => addLocalizationStringValues(target, item));
}

function collectStandardKeys(curriculum, sourceIds) {
  const keys = new Set();
  assert(Array.isArray(curriculum.curricula), 'curriculum-standards.json: curricula must be an array');
  for (const source of curriculum.curricula ?? []) {
    assert(typeof source.slug === 'string' && source.slug.length > 0, 'curriculum source missing slug');
    assert(sourceIds.has(source.slug), `${source.slug}: curriculum source slug missing from data/shared/sources.json`);
    assert(source.topicCount === (source.topics?.length ?? -1), `${source.slug}: topicCount does not match topics length`);
    for (const standard of source.topics ?? []) {
      keys.add(standard.key);
      assert(standard.key.startsWith(`${source.slug}:`), `${standard.key}: standard key should start with source slug`);
    }
  }
  assert(curriculum.curriculumCount === (curriculum.curricula?.length ?? -1), 'curriculumCount does not match curricula length');
  return keys;
}

function validateTopic(topic, expectedProfile, standardKeys, characterSetIds, lexemeSetIds, sourceIds) {
  for (const field of requiredTopicFields) {
    assert(topic[field] !== undefined, `${topic.id ?? 'unknown topic'}: missing required field ${field}`);
  }
  assert(/^jt_/.test(topic.id ?? ''), `${topic.id}: topic id must start with jt_`);
  assert(topic.learnerProfile === expectedProfile, `${topic.id}: learnerProfile must be ${expectedProfile}`);
  assert(allowedProfiles.has(topic.learnerProfile), `${topic.id}: unknown learnerProfile`);
  assert(allowedTypes.has(topic.type), `${topic.id}: unknown type ${topic.type}`);
  assert(topic.subject === 'Japanese', `${topic.id}: subject must be Japanese`);
  assert(typeof topic.name === 'string' && topic.name.length > 0, `${topic.id}: missing name`);
  assert(typeof topic.japaneseName === 'string' && topic.japaneseName.length > 0, `${topic.id}: missing japaneseName`);
  assert(typeof topic.description === 'string' && topic.description.length > 0, `${topic.id}: missing description`);
  assert(Array.isArray(topic.evidence), `${topic.id}: evidence must be an array`);
  assert(topic.evidence.length >= 2 && topic.evidence.length <= 5, `${topic.id}: evidence must have 2-5 items`);
  assert(typeof topic.assessmentPrompt === 'string' && topic.assessmentPrompt.length > 0, `${topic.id}: missing assessmentPrompt`);
  assert(Array.isArray(topic.standards), `${topic.id}: standards must be an array`);
  for (const key of topic.standards) {
    assert(standardKeys.has(key), `${topic.id}: unknown standard ${key}`);
  }
  for (const tag of topic.sourceTags ?? []) {
    assert(sourceIds.has(tag), `${topic.id}: unknown sourceTag ${tag}`);
  }
  for (const alignment of topic.textbookAlignments ?? []) {
    assert(sourceIds.has(alignment.source), `${topic.id}: unknown textbookAlignments source ${alignment.source}`);
    assert(typeof alignment.unit === 'string' && alignment.unit.length > 0, `${topic.id}: textbookAlignments unit is required`);
    const key = `${alignment.source}:${alignment.unit}`;
    assert(standardKeys.has(key), `${topic.id}: textbookAlignments key ${key} is not in curriculum standards`);
    assert(topic.standards.includes(key), `${topic.id}: textbookAlignments key ${key} is not listed in topic standards`);
  }
  for (const id of topic.linkedCharacters ?? []) {
    assert(characterSetIds.has(id), `${topic.id}: unknown linkedCharacters id ${id}`);
  }
  for (const id of topic.linkedLexemes ?? []) {
    assert(lexemeSetIds.has(id), `${topic.id}: unknown linkedLexemes id ${id}`);
  }

  if (expectedProfile === 'ja-L1-child') {
    assert(Number.isInteger(topic.ageRangeStart), `${topic.id}: native-child topics need ageRangeStart`);
    assert(Number.isInteger(topic.ageRangeEnd), `${topic.id}: native-child topics need ageRangeEnd`);
    assert(topic.gradeRangeStart === null || Number.isInteger(topic.gradeRangeStart), `${topic.id}: gradeRangeStart must be integer or null`);
    assert(topic.gradeRangeEnd === null || Number.isInteger(topic.gradeRangeEnd), `${topic.id}: gradeRangeEnd must be integer or null`);
  }

  if (expectedProfile === 'ja-L2-adult') {
    assert(topic.ageRangeStart === null && topic.ageRangeEnd === null, `${topic.id}: L2 topics should not use age ranges`);
    assert(typeof topic.levelRangeStart === 'string' && topic.levelRangeStart.length > 0, `${topic.id}: L2 topics need levelRangeStart`);
    assert(typeof topic.levelRangeEnd === 'string' && topic.levelRangeEnd.length > 0, `${topic.id}: L2 topics need levelRangeEnd`);
    assert(Array.isArray(topic.bjtLevels ?? []), `${topic.id}: bjtLevels must be an array when present`);
  }
}

function validateDag(profile, topics, dependencies) {
  const ids = new Set(topics.map((topic) => topic.id));
  const seenEdges = new Set();
  const outgoing = new Map([...ids].map((id) => [id, []]));

  for (const edge of dependencies) {
    assert(ids.has(edge.topicId), `${profile}: dependency topicId not found ${edge.topicId}`);
    assert(ids.has(edge.prerequisiteId), `${profile}: dependency prerequisiteId not found ${edge.prerequisiteId}`);
    assert(edge.topicId !== edge.prerequisiteId, `${profile}: self dependency ${edge.topicId}`);
    assert(edge.strength === 'hard' || edge.strength === 'soft', `${profile}: invalid dependency strength ${edge.strength}`);
    assert(typeof edge.reason === 'string' && edge.reason.length > 0, `${profile}: dependency missing reason`);
    const key = `${edge.topicId}<-${edge.prerequisiteId}`;
    assert(!seenEdges.has(key), `${profile}: duplicate dependency ${key}`);
    seenEdges.add(key);
    outgoing.get(edge.prerequisiteId)?.push(edge.topicId);
  }

  const visiting = new Set();
  const visited = new Set();
  const stack = [];

  function visit(id) {
    if (visited.has(id)) return;
    if (visiting.has(id)) {
      const cycleStart = stack.indexOf(id);
      const cycle = stack.slice(cycleStart).concat(id).join(' -> ');
      errors.push(`${profile}: dependency cycle found: ${cycle}`);
      return;
    }
    visiting.add(id);
    stack.push(id);
    for (const next of outgoing.get(id) ?? []) visit(next);
    stack.pop();
    visiting.delete(id);
    visited.add(id);
  }

  for (const id of ids) visit(id);
}

function validateClusters(profile, clusters, topicDomains) {
  assert(clusters.profile === profile, `${profile}: clusters profile mismatch`);
  assert(clusters.clusterCount === clusters.clusters.length, `${profile}: clusterCount does not match clusters length`);
  for (const cluster of clusters.clusters) {
    assert(cluster.learnerProfile === profile, `${profile}: cluster learnerProfile mismatch`);
    assert(topicDomains.has(cluster.domain), `${profile}: cluster domain has no topics: ${cluster.domain}`);
    assert(typeof cluster.summary === 'string' && cluster.summary.length > 0, `${profile}: cluster missing summary`);
  }
}

const sharedCharacters = readJson('data/shared/characters.json');
const sharedLexemes = readJson('data/shared/lexemes.json');
const sharedSources = readJson('data/shared/sources.json');
const characterSetIds = new Set(sharedCharacters?.characterSets?.map((set) => set.id) ?? []);
const lexemeSetIds = new Set(sharedLexemes?.lexemeSets?.map((set) => set.id) ?? []);
const sourceIds = new Set(sharedSources?.sources?.map((source) => source.slug) ?? []);

if (sharedSources) {
  assert(sharedSources.sourceCount === sharedSources.sources.length, 'shared sources count mismatch');
  const seenSourceIds = new Set();
  for (const source of sharedSources.sources) {
    assert(typeof source.slug === 'string' && source.slug.length > 0, 'shared source missing slug');
    assert(!seenSourceIds.has(source.slug), `shared sources duplicate slug ${source.slug}`);
    seenSourceIds.add(source.slug);
    assert(Array.isArray(source.profiles) && source.profiles.length > 0, `${source.slug}: source profiles missing`);
    assert(typeof source.name === 'string' && source.name.length > 0, `${source.slug}: source name missing`);
    assert(typeof source.use === 'string' && source.use.length > 0, `${source.slug}: source use missing`);
  }
}

if (sharedCharacters) {
  assert(sharedCharacters.characterSetCount === sharedCharacters.characterSets.length, 'shared characters count mismatch');
  for (const characterSet of sharedCharacters.characterSets) {
    assert(typeof characterSet.japaneseName === 'string' && characterSet.japaneseName.length > 0, `${characterSet.id}: missing japaneseName`);
    for (const tag of characterSet.sourceTags ?? []) {
      assert(sourceIds.has(tag), `${characterSet.id}: unknown sourceTag ${tag}`);
    }
  }
}
if (sharedLexemes) {
  assert(sharedLexemes.lexemeSetCount === sharedLexemes.lexemeSets.length, 'shared lexemes count mismatch');
  for (const lexemeSet of sharedLexemes.lexemeSets) {
    assert(typeof lexemeSet.japaneseName === 'string' && lexemeSet.japaneseName.length > 0, `${lexemeSet.id}: missing japaneseName`);
    for (const tag of lexemeSet.sourceTags ?? []) {
      assert(sourceIds.has(tag), `${lexemeSet.id}: unknown sourceTag ${tag}`);
    }
  }
}

for (const graph of graphs) {
  const topics = readJson(`${graph.dir}/topics.json`);
  const dependencies = readJson(`${graph.dir}/dependencies.json`);
  const curriculum = readJson(`${graph.dir}/curriculum-standards.json`);
  const clusters = readJson(`${graph.dir}/clusters.json`);
  if (!topics || !dependencies || !curriculum || !clusters) continue;

  assert(topics.profile === graph.profile, `${graph.profile}: topics profile mismatch`);
  assert(topics.topicCount === topics.topics.length, `${graph.profile}: topicCount does not match topics length`);
  assert(dependencies.profile === graph.profile, `${graph.profile}: dependencies profile mismatch`);
  assert(dependencies.edgeCount === dependencies.dependencies.length, `${graph.profile}: edgeCount does not match dependencies length`);

  const standardKeys = collectStandardKeys(curriculum, sourceIds);
  const ids = new Set();
  for (const topic of topics.topics) {
    assert(!ids.has(topic.id), `${graph.profile}: duplicate topic id ${topic.id}`);
    ids.add(topic.id);
    validateTopic(topic, graph.profile, standardKeys, characterSetIds, lexemeSetIds, sourceIds);
  }
  validateDag(graph.profile, topics.topics, dependencies.dependencies);
  validateClusters(graph.profile, clusters, new Set(topics.topics.map((topic) => topic.domain)));
}

const localization = readJson('data/locales/ja.json');
if (localization) {
  assert(localization.locale === 'ja', 'Japanese localization pack locale must be ja');
  assert(localization.entryCount === localization.entries?.length, 'Japanese localization entryCount does not match entries length');
  assert(
    localization.status === 'machine-assisted-draft' || localization.status === 'human-reviewed',
    `Japanese localization has invalid status ${localization.status}`
  );

  const localizedBySource = new Map();
  for (const entry of localization.entries ?? []) {
    assert(typeof entry.source === 'string' && entry.source.length > 0, 'Japanese localization entry missing source');
    assert(typeof entry.ja === 'string' && entry.ja.length > 0, `Japanese localization missing translation for ${entry.source}`);
    assert(
      japaneseScriptPattern.test(entry.ja) || (technicalLevelPattern.test(entry.source) && entry.ja === entry.source),
      `Japanese localization still contains untranslated prose: ${entry.source}`
    );
    assert(Array.isArray(entry.contexts) && entry.contexts.length > 0, `Japanese localization missing contexts for ${entry.source}`);
    assert(!localizedBySource.has(entry.source), `Japanese localization duplicate source: ${entry.source}`);
    localizedBySource.set(entry.source, entry.ja);
  }

  const requiredLocalization = new Set();
  for (const graph of graphs) {
    const topics = readJson(`${graph.dir}/topics.json`);
    const dependencies = readJson(`${graph.dir}/dependencies.json`);
    const standards = readJson(`${graph.dir}/curriculum-standards.json`);
    const clusters = readJson(`${graph.dir}/clusters.json`);

    for (const topic of topics?.topics ?? []) {
      addLocalizationString(requiredLocalization, topic.description);
      topic.evidence?.forEach((item) => addLocalizationString(requiredLocalization, item));
      addLocalizationString(requiredLocalization, topic.assessmentPrompt);
      topic.textbookAlignments?.forEach((alignment) => {
        addLocalizationString(requiredLocalization, alignment.unit);
        addLocalizationString(requiredLocalization, alignment.note);
      });
    }
    dependencies?.dependencies?.forEach((edge) => addLocalizationString(requiredLocalization, edge.reason));
    clusters?.clusters?.forEach((cluster) => addLocalizationString(requiredLocalization, cluster.summary));
    for (const curriculum of standards?.curricula ?? []) {
      addLocalizationString(requiredLocalization, curriculum.name);
      addLocalizationString(requiredLocalization, curriculum.version);
      addLocalizationString(requiredLocalization, curriculum.license);
      curriculum.topics?.forEach((standard) => addLocalizationStringValues(requiredLocalization, standard.data));
    }
  }

  for (const characterSet of sharedCharacters?.characterSets ?? []) {
    if (!characterSet.japaneseName) addLocalizationString(requiredLocalization, characterSet.name);
    addLocalizationString(requiredLocalization, characterSet.notes);
  }
  for (const lexemeSet of sharedLexemes?.lexemeSets ?? []) {
    if (!lexemeSet.japaneseName) addLocalizationString(requiredLocalization, lexemeSet.name);
    addLocalizationString(requiredLocalization, lexemeSet.notes);
    lexemeSet.items?.forEach((item) => addLocalizationString(requiredLocalization, item.gloss));
  }
  for (const source of sharedSources?.sources ?? []) {
    addLocalizationString(requiredLocalization, source.name);
    addLocalizationString(requiredLocalization, source.use);
    addLocalizationString(requiredLocalization, source.redistribution);
    addLocalizationString(requiredLocalization, source.licenseStatus);
    addLocalizationString(requiredLocalization, source.notes);
  }

  for (const source of requiredLocalization) {
    assert(localizedBySource.has(source), `Japanese localization missing learner-facing source: ${source}`);
  }
  for (const source of localizedBySource.keys()) {
    assert(requiredLocalization.has(source), `Japanese localization contains stale source: ${source}`);
  }
}

if (errors.length > 0) {
  console.error(`Validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Validation passed.');
