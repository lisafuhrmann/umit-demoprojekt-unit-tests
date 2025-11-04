# Demo-Projekt: CI/CD Pipeline - Lisa Fuhrmann

Demo-Projekt für MMI WS 25/26 zur praktischen Anwendung von CI/CD Pipelines mit GitHub Actions.

## 🚀 CI/CD Pipeline

Dieses Projekt nutzt **GitHub Actions** für automatisierte Continuous Integration.

### Was macht die Pipeline?

Die Pipeline wird automatisch ausgelöst bei jedem Push oder Pull Request auf `main`/`master` und führt folgende Schritte aus:

1. **Checkout**: Code wird aus dem Repository geladen
2. **Setup Node.js**: Installation von Node.js (v18 und v20 werden getestet)
3. **Dependencies**: Installation aller Abhängigkeiten (`npm install`)
4. **Tests**: Automatische Ausführung aller Unit Tests (`npm test`)
5. **Build**: Bestätigung des erfolgreichen Durchlaufs

### Pipeline-Status

[![CI/CD Pipeline](https://github.com/lisafuhrmann/umit-demoprojekt-unit-tests/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/lisafuhrmann/umit-demoprojekt-unit-tests/actions/workflows/ci-cd.yml)

### Workflow-Konfiguration

Die Pipeline ist definiert in `.github/workflows/ci-cd.yml` und testet das Projekt auf zwei Node.js-Versionen parallel, um Kompatibilität sicherzustellen.

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

## 📁 Relevante Dateien

- `.github/workflows/ci-cd.yml` - GitHub Actions Workflow
- `tests/` - Unit Tests (Mocha/Chai)
- `package.json` - Dependencies und Scripts

---

Erstellt für Modul 2 "Softwareprodukt-Management und Requirements Engineering" im Studiengang Medizininformatik Master - UMIT TIROL, WS 25/26
