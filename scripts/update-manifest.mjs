import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const generatedAt = new Date().toISOString();

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
}

function fileInfo(file) {
  const fullPath = path.join(root, file);
  const buffer = fs.readFileSync(fullPath);
  return {
    bytes: buffer.length,
    sha256: crypto.createHash('sha256').update(buffer).digest('hex')
  };
}

const files = [
  'data/native-child/topics.json',
  'data/native-child/dependencies.json',
  'data/native-child/curriculum-standards.json',
  'data/native-child/clusters.json',
  'data/l2-adult/topics.json',
  'data/l2-adult/dependencies.json',
  'data/l2-adult/curriculum-standards.json',
  'data/l2-adult/clusters.json',
  'data/shared/characters.json',
  'data/shared/lexemes.json',
  'data/shared/sources.json',
  'data/profile-commentary.json',
  'data/locales/ja.json'
];

const nativeTopics = readJson('data/native-child/topics.json');
const nativeDeps = readJson('data/native-child/dependencies.json');
const nativeStandards = readJson('data/native-child/curriculum-standards.json');
const nativeClusters = readJson('data/native-child/clusters.json');
const l2Topics = readJson('data/l2-adult/topics.json');
const l2Deps = readJson('data/l2-adult/dependencies.json');
const l2Standards = readJson('data/l2-adult/curriculum-standards.json');
const l2Clusters = readJson('data/l2-adult/clusters.json');
const characters = readJson('data/shared/characters.json');
const lexemes = readJson('data/shared/lexemes.json');
const sources = readJson('data/shared/sources.json');
const commentary = readJson('data/profile-commentary.json');
const japaneseLocalization = readJson('data/locales/ja.json');

const manifest = {
  dataset: 'Japanese Language Taxonomy',
  taxonomyVersion: 'seed-0.0.1',
  generatedAt,
  status: 'seed',
  profiles: ['ja-L1-child', 'ja-L2-adult'],
  counts: {
    topics: nativeTopics.topicCount + l2Topics.topicCount,
    topicsByProfile: {
      'ja-L1-child': nativeTopics.topicCount,
      'ja-L2-adult': l2Topics.topicCount
    },
    dependencies: nativeDeps.edgeCount + l2Deps.edgeCount,
    dependenciesByProfile: {
      'ja-L1-child': nativeDeps.edgeCount,
      'ja-L2-adult': l2Deps.edgeCount
    },
    curricula: nativeStandards.curriculumCount + l2Standards.curriculumCount,
    curriculumStandards:
      nativeStandards.curricula.reduce((sum, source) => sum + source.topicCount, 0) +
      l2Standards.curricula.reduce((sum, source) => sum + source.topicCount, 0),
    clusters: nativeClusters.clusterCount + l2Clusters.clusterCount,
    characterSets: characters.characterSetCount,
    lexemeSets: lexemes.lexemeSetCount,
    sources: sources.sourceCount,
    profileCommentaries: Object.keys(commentary.profiles).length,
    japaneseLocalizationEntries: japaneseLocalization.entryCount
  },
  files: Object.fromEntries(files.map((file) => [file, fileInfo(file)])),
  excluded: [
    'full textbook prose',
    'per-learner data',
    'complete kanji metadata import',
    'complete lexeme import',
    'embeddings'
  ]
};

fs.writeFileSync(path.join(root, 'data/manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log('Wrote data/manifest.json');
