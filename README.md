# ambirefer

Static GitHub Pages project page for AmbiRefer3D.

Target URL after GitHub Pages is enabled:

```text
https://yearnallover.github.io/ambirefer/
```

## Local Preview

```bash
python -m http.server 8017
```

Open `http://127.0.0.1:8017`.

## Deploy

Create an empty GitHub repository named `ambirefer` under `yearnallover`, then push this folder:

```bash
git push -u origin main
```

In GitHub, open `Settings -> Pages` and select:

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

The site uses relative paths, so assets work correctly under `/ambirefer/`.
