# Velkommen til Flyt


## Flyt
En plattform for å synliggjøre internprosjekter i KXO og gjøre det lettere å inkludere ansatte med ledig tid på prosjektene. 

## Motivasjon
Et prosjekt som er ønsket av ledelsen, der Jonas Hildershavn har overordnet ansvar. Ønsker å sikre at de ansatte kan utvikle seg faglig selv uten kundeprosjekt. 


## Tech stack; 
Next.js kombinert med Sanity. 


## Installasjon og kjøring 
Dette prosjektet krever at Node.js og npm er installert

1. Clone dev-branch fra AzureDevOps (https://dev.azure.com/knowitexperience/flyt/_git/flyt). Logg inn med knowit-credentials (?)
2. For å kunne kjøre Sanity må du først cd'e inn i "studio"-mappen
3. Kjør "npm install -g @sanity/cli" for å kunne sette opp nye prosjekter, fikse dataset, importere data ++
3. Kjør "sanity install"
4. Kjør "sanity start" 
5. Ta kontakt med Christian Olsen dersom du ønsker adminbruker til Flyt sin offisielle sanitystudio.
6. Opprett bruker med mailen din. 
7. Så over til next.js. Cd'e inn i "web"-mappen 
8. Kjør "npm install next, react, react-dom"
9. Kjør "npm run dev"
10. Da er det bare å finne tasks i boardet på DevOps: https://dev.azure.com/knowitexperience/flyt/_boards/board/t/flyt%20Team/Backlog%20items

