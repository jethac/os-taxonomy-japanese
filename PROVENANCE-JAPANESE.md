# Japanese Taxonomy Provenance

Created: 2026-07-09

This file tracks sources that inform coverage, sequencing, alignment, and licensing decisions. Source wording should not be copied into taxonomy topic descriptions unless the license clearly permits reuse and attribution requirements are met.

## Licensing Policy

- Original repository code, schemas, scripts, viewer files, and project-authored seed topic text are released under the MIT License in `LICENSE`.
- Authored topic names, descriptions, evidence statements, assessment prompts, dependency reasons, and cluster summaries should be original project text.
- External standards should be shipped full-text only when licensing clearly permits it.
- Restrictive or uncertain sources should be represented as code-only, citation-only, or metadata-only.
- Textbook dialogue, exercises, examples, and explanations should not be copied into the open dataset.
- Current seed use is evaluated separately from future full-text imports: metadata-only, code-only, level-tag-only, and citation-level use can be acceptable for the seed while still requiring review before copying source prose, examples, images, tables, or assessment items.

## Sources

| Slug | Profile | Source | Use | Text In Dataset | License / Rights Notes |
|---|---|---|---|---|---|
| `mext-es-ja-2017` | `ja-L1-child` | MEXT Elementary School Course of Study, Japanese Language, 2017 notification and commentary | Primary alignment for native-child graph | No, citation-level seed alignments only | MEXT website terms state Government Standard Terms of Use 2.0 compatibility with CC BY 4.0, but individual files should still be checked before full-text redistribution. |
| `mext-ls-ja-2017` | `ja-L1-child` | MEXT Lower Secondary School Course of Study, Japanese Language, 2017 notification and commentary | Native lower-secondary Japanese alignment, mapped as grades 7-9 | No, citation-level seed alignments only | MEXT website terms state Government Standard Terms of Use 2.0 compatibility with CC BY 4.0, but individual files should still be checked before full-text redistribution. |
| `mext-hs-ja-2018` | `ja-L1-child` | MEXT High School Course of Study, Japanese Language, 2018 notification and commentary | Native high-school Japanese alignment, mapped as grades 10-12 | No, citation-level seed alignments only | MEXT website terms state Government Standard Terms of Use 2.0 compatibility with CC BY 4.0, but individual files should still be checked before full-text redistribution. |
| `jp-cos-lod` | `ja-L1-child` | Japanese Course of Study Linked Open Data | Stable curriculum codes and metadata | Codes/labels only | Published under the same license as MEXT code tables; Course of Study LOD states CC BY 4.0. |
| `mext-kanji-grade` | `ja-L1-child` | MEXT grade-wise kanji allocation table | Kyoiku kanji grade tags | Character sets and citation metadata | MEXT website terms cover `mext.go.jp`, allow commercial reuse with attribution, and are compatible with CC BY 4.0, subject to third-party and alternate-term exceptions. |
| `bunka-joyo-kanji-2010` | `ja-L1-child` | Agency for Cultural Affairs Joyo kanji table, Cabinet Notice No. 2, 2010 | Joyo kanji alignment and orthography metadata | Citation-level seed metadata only | Agency for Cultural Affairs site policy points users to the MEXT website terms, which cover `bunka.go.jp`; current seed does not copy the full table or explanatory prose. |
| `yookoso-book1` | `ja-L2-adult` | Yookoso! An Invitation to Contemporary Japanese | L2 textbook sequence and coverage reference | Metadata only | Copyrighted textbook; do not copy prose, dialogues, exercises, or examples. |
| `yookoso-book2` | `ja-L2-adult` | Yookoso! Continuing with Contemporary Japanese | L2 intermediate sequence and coverage reference | Metadata only | Copyrighted textbook; do not copy prose, dialogues, exercises, or examples. |
| `tae-kim` | `ja-L2-adult` | Tae Kim's Guide to Learning Japanese | Grammar coverage and sequencing check | Metadata only | Licensing differs by version; use as reference only unless permission is verified. |
| `jgram` | `ja-L2-adult` | JGram / JGram-derived grammar indexes | Grammar-point inventory and JLPT-level cross-check | Metadata only | License unclear; use only as a coverage checklist until reviewed. |
| `jf-standard` | `ja-L2-adult` | JF Standard for Japanese-Language Education | CEFR/JF Can-do alignment | Level tags and independently authored task framing only | Do not copy JF Can-do statements, guidebook prose, downloadable material text, site images, or examples unless Japan Foundation terms and attribution requirements are reviewed. |
| `jlpt` | `ja-L2-adult` | Japanese-Language Proficiency Test | JLPT-level alignment | Level tags only | Use level metadata; do not copy exam content. |
| `bjt` | `ja-L2-adult` | BJT Business Japanese Proficiency Test | Business/professional Japanese alignment through J1+ | Level tags and citation metadata only | Official level guide uses scores 0-800 and levels J5, J4, J3, J2, J1, J1+. Do not copy sample questions or test content. |
| `iwasaki-2006-child-processability` | `ja-L2-adult` | Iwasaki (2006), *The Acquisition of Japanese as a Second Language and Processability Theory* | Phenomenon-level citation for verbal inflection, V-te V, passive, and causative emergence | Metadata only | Single naturalistic child case; does not establish adult JLPT placement, taxonomy prerequisites, teaching order, or mastery thresholds. |
| `iwasaki-2013-adult-processability` | `ja-L2-adult` | Iwasaki (2013), *A Processability Theory (PT)-based Analysis of the Acquisition of Japanese Morphology and Syntax* | Phenomenon-level citation for morphosyntactic emergence in an intensive adult case | Metadata only | Single intensive adult case; does not validate a general adult acquisition order, JLPT placement, teaching sequence, or mastery thresholds. |
| `iwasaki-oliver-2014-emergence-accuracy` | `ja-L2-adult` | Iwasaki and Oliver (2014), *The Acquisition of Verbal Morphology in Japanese as a Second Language (JSL) by a Child: Emergence and Accuracy* | Citation for distinguishing first emergence from target-like accuracy | Metadata only | The taxonomy's observation log is a project-authored, processability-informed pedagogical inference, not an intervention or diagnostic validated by the child case study. |
| `iwasaki-oliver-2018-passive-acquisition` | `ja-L2-adult` | Iwasaki and Oliver (2018), *Describing the Acquisition of the Passive Voice by a Child Learner of Japanese as a Second Language from a Processability Theory Perspective* | Phenomenon-level citation for passive-voice development | Metadata only | Single naturalistic child case; does not establish adult N3 placement, taxonomy prerequisites, teaching order, or mastery thresholds. |
| `kawaguchi-iwasaki-2021-content-questions` | `ja-L2-adult` | Kawaguchi and Iwasaki (2021), *Acquiring Content Questions in Japanese* | Phenomenon-level citation for Japanese content-question development | Metadata only | Single sequential bilingual child case; does not establish adult A1/N5 placement, taxonomy prerequisites, teaching order, or mastery thresholds. |
| `project-authored-native-spiral` | `ja-L1-child` | Project-authored curriculum spiral | Identifies project-authored native-child spiral topics spanning recurring skills across grades | Original project text only | Project-authored taxonomy provenance tag, not an external source; released under the repository MIT License. |
| `project-authored-l2-spiral` | `ja-L2-adult` | Project-authored curriculum spiral | Identifies project-authored adult L2 spiral topics spanning recurring skills across proficiency levels | Original project text only | Project-authored taxonomy provenance tag, not an external source; released under the repository MIT License. |
| `jmdict` | shared | JMdict | Potential lexeme companion data | Not imported in seed | License-compatible import needs separate attribution handling. |
| `kanjidic` | shared | KANJIDIC | Potential kanji metadata | Not imported in seed | License-compatible import needs separate attribution handling. |
| `kanjivg` | shared | KanjiVG | Potential stroke/component data | Not imported in seed | Check license and attribution before import. |

## Source URLs

- MEXT Courses of Study: https://www.mext.go.jp/en/policy/education/elsec/title02/detail02/1373859.htm
- MEXT elementary Japanese commentary page: https://www.mext.go.jp/a_menu/shotou/new-cs/1387014.htm
- MEXT lower-secondary Japanese commentary page: https://www.mext.go.jp/a_menu/shotou/new-cs/1387016.htm
- MEXT high-school Japanese commentary page: https://www.mext.go.jp/a_menu/shotou/new-cs/1407074.htm
- MEXT website terms: https://www.mext.go.jp/b_menu/1351168.htm
- MEXT Course of Study code tables: https://www.mext.go.jp/a_menu/other/data_00002.htm
- Course of Study LOD: https://jp-cos.github.io/
- Course of Study LOD about page: https://jp-cos.github.io/en/about.html
- Grade-wise kanji allocation table: https://www.mext.go.jp/a_menu/shotou/new-cs/youryou/syo/koku/__icsFiles/afieldfile/2016/10/27/1234920.pdf
- Agency for Cultural Affairs Joyo kanji page: https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/kanji/index.html
- Agency for Cultural Affairs site policy: https://www.bunka.go.jp/bunkacho_homepage/
- Yookoso Book 1 Internet Archive record: https://archive.org/details/yookosoinvitatio0000tohs
- Yookoso Book 2 Internet Archive record: https://archive.org/details/yookosocontinuin0000tohs
- Yookoso notes: https://www.yookoso.com/notes/yookoso-book-1/
- Tae Kim guide: https://guidetojapanese.org/learn/
- JGram reference page: https://www.yookoso.com/jgram-japanese-grammar-database/
- Takoboto grammar pages: https://takoboto.jp/bunpo/
- JF Standard: https://www.jfstandard.jpf.go.jp/
- JF Can-do for Life in Japan: https://www.jpf.go.jp/e/urawa/e_rsorcs/seikatsu.html
- JLPT CEFR reference indication: https://www.jlpt.jp/e/about/cefr_reference.html
- JLPT N1-N5 level summary: https://www.jlpt.jp/sp/e/about/levelsummary.html
- BJT Business Japanese Proficiency Test level guide: https://www.kanken.or.jp/bjt/english/about/levelguide.html
- BJT Japanese level and sample page: https://www.kanken.or.jp/bjt/about/level_sample.html
- Iwasaki (2006) thesis metadata: https://ro.ecu.edu.au/theses/73/
- Iwasaki (2013) adult JSL article: https://doi.org/10.11431/secondlanguage.12.0_21
- Iwasaki and Oliver (2014) emergence-and-accuracy article metadata: https://ro.ecu.edu.au/ecuworkspost2013/633/
- Iwasaki and Oliver (2018) passive-acquisition article: https://doi.org/10.7575/aiac.ijalel.v.7n.5p.247
- Kawaguchi and Iwasaki (2021) content-question article: https://doi.org/10.18848/2327-7939/CGP/v28i01/39-60
