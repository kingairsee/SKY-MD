SKY-MD

<img src="https://i.imgur.com/dBaSKWF.gif" height="90" width="100%">
𝐒𝐢𝐦𝐩𝐥𝐞𝐦𝐞𝐧𝐭 𝐥𝐞 𝐦𝐞𝐢𝐥𝐥𝐞𝐮𝐫 𝐛𝐨𝐭 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐜𝐫éé 𝐩𝐚𝐫 AIRSEE KING🌝💚
<div class = "repo" align = "center"><a href = "#">
<img src = "https://files.catbox.moe/sxnq26.jpg"  width="300" height="200">
</img>
 <p align="center">
  <a href="#"><img src="http://readme-typing-svg.herokuapp.com?color=ff00ab&center=true&vCenter=true&multiline=false&lines=SKY-MD+MD+WHATSAPP+BOT+MD" alt="">𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐓𝐈𝐎𝐍 𝐏𝐎𝐔𝐑 𝐃É𝐏𝐋𝐎𝐘𝐄𝐌𝐄𝐍𝐓 ↕️

1. Forkez ce dépôt

Commencez par forker ce dépôt sur votre propre compte GitHub. Cliquez sur le bouton ci-dessous pour forker:

<a href="https://github.com/kingmalvn/SKY-MD/fork"><img title="SKY-MD" src="https://img.shields.io/badge/FORK-SKY-MDh?color=darkblue&style=for-the-badge&logo=stackshare"></a>

<a><img src='https://i.imgur.com/LyHic3i.gif'/>

🔑 Obtenez l'ID de session (Connexion via le code de jumelage WhatsApp)

> Pour déployer, générez votre ID de session à partir du lien ci-dessous :



<p align="left">
  <a href="https://malvin-pair-code-xzcb.onrender.com/?">
    <img src="https://img.shields.io/badge/%F0%9F%9A%80%20OBTENIR%20CODE%20PAIRAGE-ffcc00?style=for-the-badge"/>
  </a>
</p>
<a><img src='https://i.imgur.com/LyHic3i.gif'/><a><img src='https://i.imgur.com/LyHic3i.gif'/>

2. Obtenez l'ID de session : Après avoir accédé à l'URL, un ID de session s'affichera. Copiez-le.



1..DÉPLOYEZ SUR HEROKU ⤵️



2..DÉPLOYEZ SUR RENDER ⤵️



3..DÉPLOYEZ SUR GITHUB ⤵️

</details><b><strong><summary align="center" style="color: Yello;">Déploiement via Workflow</summary></strong></b>

<p style="text-align: center; font-size: 1.2em;"><h8>Copiez le code du workflow, puis forkez le repo, modifiez la config, ajoutez l'ID de session, sauvegardez, cliquez sur l'onglet des actions du dépôt, puis cliquez sur “start new workflow”, collez le code, renommez main.yml en deploy.yml et sauvegardez le fichier</h8>

<h3 align-"center"> Important</h3>
<h6 align-"center">Attention ! Nous ne sommes pas responsables si votre compte GitHub est suspendu avec cette méthode. Évitez cette méthode sur des comptes GitHub récents. Les comptes créés depuis un an ou plus n'ont pas été suspendus jusqu’à présent. Ce workflow ne reste actif que pendant 6 heures, vous devez le réactiver en mettant à jour le code.</h6>name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Récupération du dépôt
      uses: actions/checkout@v3

    - name: Configuration de Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Installation des dépendances
      run: npm install

    - name: Démarrage de l'application
      run: npm start

<a><img src='https://i.imgur.com/LyHic3i.gif'/>

Merci beaucoup !

> DÉVELOPPEUR DE SKY-MD



Lord Airsee

Créateur et propriétaire de SKY-MD


> Assistant SKY-MD



Airsee King

Pour l’aide dans les fichiers de plugins du bot.



---

<a><img src='https://i.imgur.com/LyHic3i.gif'/>
