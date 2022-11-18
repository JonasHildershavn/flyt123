# Velkommen til Flyt

## Flyt

En plattform for å synliggjøre internprosjekter i KXO og gjøre det lettere å inkludere ansatte med ledig tid på prosjektene.

## Motivasjon

Et prosjekt som er ønsket av ledelsen, der Jonas Hildershavn har overordnet ansvar. Ønsker å sikre at de ansatte kan utvikle seg faglig selv uten kundeprosjekt.

## Tech stack;

Next.js kombinert med Sanity.

## Installasjon og kjøring

Dette prosjektet krever at Node.js v18.11.0 og npm er installert

#####Klon prosjektet

```
git clone https://dev.azure.com/knowitexperience/flyt/_git/flyt
```

Logg inn med knowit-credentials (?)

#####Sanity

1. Sanity-filer finnes i mappen "studio". Gå inn i mappen og last ned dependencier

```
cd studio
npm install
```

2. Når dependencier er lastet ned kan du starte Sanity Studio.

```
sanity install
sanity start
```

3. Opprett bruker med mailen din.
   Ta kontakt med Christian Olsen dersom du ønsker adminbruker til Flyt sin offisielle sanitystudio.

#####Web
Webløsningen finnes i mappen "web". For å starte prosjektet kjør følgende kommandoer

```
cd web
npm install
npm run dev
```

4. Legg til lokale variabler
   Oppret fil ved navnet .env.local i mappen "web". Den skal inneholde:

```
Azure_StorageAccount_AccessKey=NØKKEL_FRA_AZURE_PORTAL
BASE_URL=http://localhost:3000
```

Azure storage account key henter du i https://portal.azure.com/ > kxo-flyt > flytstorageaccount > access keys > key1 > Key

Da er det bare å finne tasks i boardet på DevOps: https://dev.azure.com/knowitexperience/flyt/_boards/board/t/flyt%20Team/Backlog%20items

**OBS: Husk å kjøre npm install i web etter en pull. Hender at man får feilmelding. **

### Kjøring av Azure Static Web App lokalt

Prosjektet er deployet til Azure Static Web App. For å teste at funskjonalitet som autorisasjon og autentisering fungerer, kan dette testes ved å kjøre lokalt. (https://learn.microsoft.com/en-us/azure/static-web-apps/local-development)

1. Last ned Azure Static Web App CLI.
2. Kjør "npm install -g @azure/static-web-apps-cli"
3. Plasser deg i "web"-mappen.
4. Kjøre "swa start"
