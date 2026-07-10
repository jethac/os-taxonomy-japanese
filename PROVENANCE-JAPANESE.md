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
| `jsl-processability-research` | `ja-L2-adult` | Japanese SLA and Processability Theory metadata records derived from Iwasaki and related research themes | Citation-level alignment for L2 acquisition-order and prerequisite hypotheses | Metadata only | Taxonomy standards metadata stores labels and notes only; do not copy article, thesis, or chapter prose. |
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
- ECU profile for Dr. Junko Iwasaki: https://www.ecu.edu.au/schools/arts-and-humanities/staff/profiles/honorary-appointments/dr-junko-iwasaki
- Iwasaki thesis metadata: https://ro.ecu.edu.au/theses/73/
