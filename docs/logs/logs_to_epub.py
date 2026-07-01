import os
import re
import sys
import subprocess
from pathlib import Path


def pip_install(*packages: str) -> None:
    """Installe les packages manquants automatiquement."""
    for pkg in packages:
        module = pkg.split("[")[0]  # ex: "ebooklib" depuis "ebooklib[extras]"
        try:
            __import__(module)
        except ImportError:
            print(f"📦  Installation de '{pkg}'...")
            subprocess.check_call(
                [sys.executable, "-m", "pip", "install", "--quiet", pkg],
                stdout=subprocess.DEVNULL,
            )
            print(f"   ✔  '{pkg}' installé.")


pip_install("markdown", "ebooklib")

import markdown
from ebooklib import epub

# ─── CONFIGURATION ────────────────────────────────────────────────────────────
LOG_DIR     = Path(r"D:\script\Scénario\V4\docs\logs")   # Dossier contenant vos .md
OUTPUT_FILE = LOG_DIR / "campagne_complete.epub"     # Fichier EPUB de sortie
BOOK_TITLE  = "Campagne — Valombre"                  # Titre affiché sur la tablette
BOOK_AUTHOR = "Valombre"                             # Auteur affiché
BOOK_LANG   = "fr"
# ──────────────────────────────────────────────────────────────────────────────

# CSS embarqué pour une lecture confortable sur tablette
STYLESHEET = """
body {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1em;
    line-height: 1.7;
    margin: 1.5em 1.5em 2em 1.5em;
    color: #1a1a1a;
    background: #fdfdf8;
}
h1 {
    font-size: 1.6em;
    border-bottom: 2px solid #8b6f47;
    padding-bottom: 0.3em;
    margin-top: 1.5em;
    color: #4a2c0a;
}
h2 {
    font-size: 1.2em;
    color: #6b4226;
    margin-top: 1.4em;
    margin-bottom: 0.3em;
    border-left: 4px solid #c9a87c;
    padding-left: 0.5em;
}
h3 {
    font-size: 1em;
    font-style: italic;
    color: #555;
    margin-top: 1.2em;
}
blockquote {
    border-left: 3px solid #c9a87c;
    margin: 0.8em 0 0.8em 0;
    padding: 0.4em 1em;
    background: #f5ede0;
    font-style: italic;
    color: #333;
}
p { margin: 0.6em 0; }
ul, ol { margin: 0.5em 0 0.5em 1.5em; }
li { margin: 0.2em 0; }
hr {
    border: none;
    border-top: 1px solid #c9a87c;
    margin: 1.5em 0;
}
.meta-block {
    background: #f0e8d8;
    border: 1px solid #c9a87c;
    border-radius: 4px;
    padding: 0.6em 1em;
    font-size: 0.9em;
    margin-bottom: 1em;
    color: #444;
}
/* Distinction visuelle MJ / PJ */
.mj { color: #2a4a6b; font-weight: bold; }
.pj { color: #5a2a00; font-weight: bold; }
"""


def extract_log_number(filename: str) -> int:
    """Extrait le numéro de log depuis le nom de fichier (ex: 01-le-bureau-... → 1)."""
    m = re.match(r"^(\d+)", filename)
    return int(m.group(1)) if m else 9999


def md_to_html(md_text: str) -> str:
    """Convertit le Markdown en HTML avec extensions utiles."""
    extensions = ["extra", "sane_lists", "nl2br"]
    html = markdown.markdown(md_text, extensions=extensions)

    # Mise en évidence MJ / PJ dans les titres ###
    html = re.sub(
        r"(<h3[^>]*>)(.*?MJ.*?)(</h3>)",
        r'\1<span class="mj">\2</span>\3',
        html, flags=re.IGNORECASE
    )
    html = re.sub(
        r"(<h3[^>]*>)(.*?PJ.*?)(</h3>)",
        r'\1<span class="pj">\2</span>\3',
        html, flags=re.IGNORECASE
    )
    return html


def build_epub(log_dir: Path, output_file: Path) -> None:
    # Collecte et tri des fichiers
    md_files = sorted(
        [f for f in log_dir.glob("*.md") if re.match(r"^\d+", f.name)],
        key=lambda f: extract_log_number(f.name),
    )

    if not md_files:
        sys.exit(f"❌  Aucun fichier NN-*.md trouvé dans : {log_dir}")

    print(f"📂  {len(md_files)} fichier(s) trouvé(s) dans {log_dir}")

    # Initialisation du livre
    book = epub.EpubBook()
    book.set_identifier("valombre-campagne-001")
    book.set_title(BOOK_TITLE)
    book.set_language(BOOK_LANG)
    book.add_author(BOOK_AUTHOR)

    # Feuille de style
    css = epub.EpubItem(
        uid="style_main",
        file_name="style/main.css",
        media_type="text/css",
        content=STYLESHEET.encode("utf-8"),
    )
    book.add_item(css)

    chapters = []
    toc = []

    for md_file in md_files:
        print(f"  ✔  {md_file.name}")
        raw = md_file.read_text(encoding="utf-8", errors="replace")

        # Titre de chapitre = première ligne H1 ou nom de fichier
        title_match = re.search(r"^#\s+(.+)", raw, re.MULTILINE)
        chapter_title = title_match.group(1).strip() if title_match else md_file.stem

        # Numéro de log pour l'identifiant unique
        log_num = extract_log_number(md_file.name)
        uid = f"log_{log_num:03d}"

        html_body = md_to_html(raw)
        full_html = f"""<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="{BOOK_LANG}">
<head>
  <meta charset="utf-8"/>
  <title>{chapter_title}</title>
  <link rel="stylesheet" type="text/css" href="../style/main.css"/>
</head>
<body>
{html_body}
</body>
</html>"""

        chapter = epub.EpubHtml(
            title=chapter_title,
            file_name=f"chap/{uid}.xhtml",
            lang=BOOK_LANG,
        )
        chapter.content = full_html.encode("utf-8")
        chapter.add_item(css)

        book.add_item(chapter)
        chapters.append(chapter)
        toc.append(epub.Link(f"chap/{uid}.xhtml", chapter_title, uid))

    # Page de couverture simple
    cover_html = f"""<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="{BOOK_LANG}">
<head>
  <meta charset="utf-8"/>
  <title>{BOOK_TITLE}</title>
  <link rel="stylesheet" type="text/css" href="../style/main.css"/>
</head>
<body style="text-align:center; padding-top: 4em;">
  <h1 style="font-size:2em; border:none;">{BOOK_TITLE}</h1>
  <p style="color:#6b4226; font-style:italic; font-size:1.2em;">{BOOK_AUTHOR}</p>
  <hr/>
  <p style="font-size:0.9em; color:#888;">{len(chapters)} scènes — Logs 01 à {extract_log_number(md_files[-1].name):02d}</p>
</body>
</html>"""

    cover = epub.EpubHtml(title=BOOK_TITLE, file_name="cover.xhtml", lang=BOOK_LANG)
    cover.content = cover_html.encode("utf-8")
    cover.add_item(css)
    book.add_item(cover)

    # Table des matières et spine
    book.toc = [epub.Section("Scènes")] + toc
    book.spine = ["nav", cover] + chapters
    book.add_item(epub.EpubNcx())
    book.add_item(epub.EpubNav())

    epub.write_epub(str(output_file), book)
    print(f"\n✅  EPUB créé : {output_file}")
    print(f"   Taille : {output_file.stat().st_size // 1024} Ko")


if __name__ == "__main__":
    if not LOG_DIR.exists():
        sys.exit(f"❌  Dossier introuvable : {LOG_DIR}\n   → Modifiez la variable LOG_DIR dans le script.")
    build_epub(LOG_DIR, OUTPUT_FILE)