# Japanese Language Taxonomy

An open, graph-structured taxonomy and interactive learning atlas for Japanese language acquisition.

The project contains two deliberately separate prerequisite graphs plus a learner-neutral comparison layer:

- `ja-L1-child`: native Japanese language development and school literacy across Grades 1–12.
- `ja-L2-adult`: adult second-language acquisition across JF/CEFR-style proficiency, JLPT N5–N1, and BJT J5–J1+.
- `ja-shared-capability`: 33 stable capability families that cross-walk every L1 and L2 topic without claiming grade equivalence.

The current dataset is an executable seed, not official curriculum or exam guidance.

## Learning atlas

The static viewer turns the taxonomy into a full-viewport Canvas learning map with:

- a shared capability map with native-child and adult-L2 route rings;
- route, difference, assessment-coverage, and beyond-exam comparison views;
- independent JLPT, BJT, and MEXT coverage lenses that distinguish direct, supporting, and unmeasured capabilities;
- access to the full native-child and adult-L2 prerequisite graphs;
- English and Japanese interface/topic-label modes;
- light and dark themes;
- persistent, shareable viewer settings;
- deterministic 3D grade/proficiency scenes;
- search and advanced domain, cluster, type, range, standard, script, JLPT, and BJT filters;
- adult JLPT N5–N1 level navigation;
- adjacent dependency bridges such as N4 → N3;
- prerequisite and unlock tracing;
- topic evidence, assessment prompts, standards, provenance, and reference alignments;
- linked character and lexeme companion data;
- topic, path, filtered-list, and share-link exports;
- keyboard navigation and reduced-motion support.

Run it locally:

```bash
npm run serve
```

Then open <http://127.0.0.1:4175/>.

## Repository layout

```text
data/
  native-child/     L1 topics, dependencies, standards, and clusters
  l2-adult/         Adult-L2 topics, dependencies, standards, and clusters
  locales/          Learner-facing Japanese prose localization
  shared/           Capability crosswalk plus character, lexeme, and source metadata
  manifest.json     Dataset counts and profile inventory
schema/             JSON Schemas for every public data shape
scripts/
  validate.mjs      Structural, reference, metadata, and DAG validation
  update-capabilities.mjs
  update-manifest.mjs
  serve.mjs         Dependency-free local static server
viewer/             HTML, CSS, and Canvas application
```

## Data model

Topics are fine-grained learnable concepts with:

- English and Japanese names;
- learner range and domain metadata;
- evidence of mastery and an assessment prompt;
- standards and source tags;
- optional JLPT, BJT, JF, ACTFL, script, textbook-alignment, character, and lexeme metadata.

`data/locales/ja.json` supplies Japanese learner-facing prose for topic descriptions, mastery evidence, assessment prompts, dependency reasons, alignment notes, provenance, and companion metadata. Its status field distinguishes machine-assisted draft text from human-reviewed localization. Validation requires complete coverage, so new English learner-facing prose cannot silently fall back inside Japanese mode.

Dependencies connect a topic to its prerequisite and include a strength plus an authored reason. Each profile validates independently as a directed acyclic graph.

`data/shared/capabilities.json` maps every source topic exactly once into a stable comparison layer. Its route membership records topical overlap, not equivalent school grades, learner mastery, or proof that an exam measures the whole capability. Assessment coverage is therefore authored separately from the JLPT/BJT alignment tags carried by source topics.

Kanji and vocabulary inventories remain companion data instead of becoming one graph node per character or word. Graph nodes represent transferable skills such as reading strategies, orthographic patterns, language functions, and communicative procedures.

## Validation

Requires Node.js 20 or newer.

```bash
npm run validate
npm run manifest
```

Validation checks schema shape, unique IDs, cross-file references, learner-profile metadata, source tags, standards, companion links, prerequisite cycles, and complete Japanese learner-facing prose coverage.

## Provenance

Source use and redistribution boundaries are documented in [`PROVENANCE-JAPANESE.md`](PROVENANCE-JAPANESE.md). Restrictive sources are represented only through independently authored taxonomy text and code-, citation-, level-, or metadata-level alignments.

## License

Original code, schemas, viewer files, and project-authored taxonomy content are released under the [MIT License](LICENSE). External source names, identifiers, and metadata remain subject to their respective rights and terms.
