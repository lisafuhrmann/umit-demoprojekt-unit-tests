# Demo-Projekt: CI/CD Pipeline - Lisa Fuhrmann

Demo-Projekt für MMI WS 25/26 zur praktischen Anwendung von CI/CD Pipelines mit GitHub Actions.

🌐 **Live Demo:** [https://umit-demoprojekt.onrender.com](https://umit-demoprojekt.onrender.com)

## 🚀 CI/CD Pipeline

Dieses Projekt nutzt **GitHub Actions** für automatisierte Continuous Integration und **Render** für Continuous Deployment.

### Was macht die Pipeline?

Die Pipeline wird automatisch ausgelöst bei jedem Push oder Pull Request auf `main`/`master` und führt folgende Schritte aus:

**1. Build & Test (CI):**

- **Checkout**: Code wird aus dem Repository geladen
- **Setup Node.js**: Installation von Node.js (v18 und v20 werden getestet)
- **Dependencies**: Installation aller Abhängigkeiten (`npm install`)
- **Tests**: Automatische Ausführung aller Unit Tests (`npm test`)

**2. Deployment (CD):**

- **Trigger**: Bei erfolgreichem Test-Durchlauf auf `main` Branch
- **Platform**: Automatisches Deployment zu Render
- **Result**: Live-Anwendung ist nach ~2 Minuten online verfügbar

### Pipeline-Status

[![CI/CD Pipeline](https://github.com/lisafuhrmann/umit-demoprojekt-unit-tests/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/lisafuhrmann/umit-demoprojekt-unit-tests/actions/workflows/ci-cd.yml)

### Workflow-Konfiguration

Die Pipeline ist definiert in `.github/workflows/ci-cd.yml` und besteht aus zwei Jobs:

1. **build-and-test**: Testet das Projekt auf zwei Node.js-Versionen parallel
2. **deploy**: Triggert Deployment auf Render (nur bei Push auf main)

## 🧪 Tests lokal ausführen

```bash
npm install
npm test
```

## 💡 Vorteile der CI/CD Pipeline

- ✅ **Automatisierung**: Tests laufen automatisch bei jedem Code-Change
- ✅ **Schnelles Feedback**: Probleme werden sofort erkannt
- ✅ **Risikominderung**: Bugs werden vor dem Merge gefunden
- ✅ **Multi-Version Testing**: Kompatibilität mit verschiedenen Node.js-Versionen
- ✅ **Automatisches Deployment**: Live-Version aktualisiert sich automatisch

## 🌐 Deployment

Das Projekt wird automatisch auf **Render** deployed:

- **Trigger**: Jeder erfolgreiche Push auf `main`
- **Platform**: Render (Free Tier)
- **Build**: `npm install`
- **Start**: `npm start`

## 📁 Relevante Dateien

- `.github/workflows/ci-cd.yml` - GitHub Actions Workflow
- `tests/` - Unit Tests (Mocha/Chai)
- `package.json` - Dependencies und Scripts

---

Erstellt für Modul 2 "Softwareprodukt-Management und Requirements Engineering" im Studiengang Medizininformatik Master - UMIT TIROL, WS 25/26
