# Japanese Language Taxonomy

An open, graph-structured taxonomy and interactive learning atlas for Japanese language acquisition.

The project contains two deliberately separate prerequisite graphs:

- `ja-L1-child`: native Japanese language development and school literacy across Grades 1–12.
- `ja-L2-adult`: adult second-language acquisition across JF/CEFR-style proficiency, JLPT N5–N1, and BJT J5–J1+.

The current dataset is an executable seed, not official curriculum or exam guidance.

## Learning atlas

The static viewer turns the taxonomy into a full-viewport Canvas learning map with:

- native-child and adult-L2 profile switching;
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
  shared/           Character, lexeme, and source metadata
  manifest.json     Dataset counts and profile inventory
schema/             JSON Schemas for every public data shape
scripts/
  validate.mjs      Structural, reference, metadata, and DAG validation
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

Dependencies connect a topic to its prerequisite and include a strength plus an authored reason. Each profile validates independently as a directed acyclic graph.

Kanji and vocabulary inventories remain companion data instead of becoming one graph node per character or word. Graph nodes represent transferable skills such as reading strategies, orthographic patterns, language functions, and communicative procedures.

## Validation

Requires Node.js 20 or newer.

```bash
npm run validate
npm run manifest
```

Validation checks schema shape, unique IDs, cross-file references, learner-profile metadata, source tags, standards, companion links, and prerequisite cycles.

## Provenance

Source use and redistribution boundaries are documented in [`PROVENANCE-JAPANESE.md`](PROVENANCE-JAPANESE.md). Restrictive sources are represented only through independently authored taxonomy text and code-, citation-, level-, or metadata-level alignments.

## License

Original code, schemas, viewer files, and project-authored taxonomy content are released under the [MIT License](LICENSE). External source names, identifiers, and metadata remain subject to their respective rights and terms.
