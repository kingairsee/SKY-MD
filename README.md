SKY-MD

<img src="https://i.imgur.com/dBaSKWF.gif" height="90" width="100%">
饾悞饾悽饾惁饾惄饾惀饾悶饾惁饾悶饾惂饾惌 饾惀饾悶 饾惁饾悶饾悽饾惀饾惀饾悶饾惍饾惈 饾悰饾惃饾惌 饾悥饾悺饾悮饾惌饾惉饾悁饾惄饾惄 饾悳饾惈茅茅 饾惄饾悮饾惈 AIRSEE KING馃枻馃寫鈿�  
<div class = "repo" align = "center">
 
<a href = "#">
<img src = "https://files.catbox.moe/sxnq26.jpg"  width="300" height="200">
</img>
 <p align="center">
  <a href="#"><img src="http://readme-typing-svg.herokuapp.com?color=ff00ab&center=true&vCenter=true&multiline=false&lines=SKY-MD+MD+WHATSAPP+BOT+MD" alt="">
   
## 饾悅饾悗饾悕饾悈饾悎饾悊饾悢饾悜饾悁饾悡饾悎饾悗饾悕 饾悆饾悇 饾悆脡饾悘饾悑饾悗饾悩饾悇饾悓饾悇饾悕饾悡 鈽狅笍鈿欙笍馃暩锔�

**1. Forkez ce d茅p么t**

*_Commencez par forker ce d茅p么t sur votre propre compte GitHub. Cliquez sur le bouton ci-dessous pour forker:_*

<a href="https://github.com/kingairsee/SKY-MD/fork"><img title="SKY-MD" src="https://img.shields.io/badge/FORK-SKY-MDh?color=darkblue&style=for-the-badge&logo=stackshare"></a>

<a><img src='https://i.imgur.com/LyHic3i.gif'/>

馃攽 Obtenez l'ID de session (Connexion via code de jumelage WhatsApp)

> Pour d茅ployer, g茅n茅rez votre ID de session depuis le lien ci-dessous :
<p align="left">
  <a href="https://sky-xmd-1.onrender.com/pair/?">
    <img src="https://img.shields.io/badge/%F0%9F%9A%80%20OBTENIR%20LE%20CODE%20D'APPAIRAGE-ffcc00?style=for-the-badge"/>
  </a>
</p>
<a><img src='https://i.imgur.com/LyHic3i.gif'/>

<a><img src='https://i.imgur.com/LyHic3i.gif'/>

2. **Copiez l'identifiant de session** : Apr猫s avoir acc茅d茅 脿 l'URL, un identifiant de session s'affichera. Copiez-le.

---

### 1..D脡PLOIEMENT SUR HEROKU 馃З

[![D茅ployer](https://www.herokucdn.com/deploy/button.svg)](https://dashboard.heroku.com/new?template=https%3A%2F%2Fgithub.com%2Fkingairsee%2FSKY-MD)

---

### 2..D脡PLOIEMENT SUR RENDER 馃拃

[![D茅ployer sur Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/kingairsee/SKY-MD.git)

---

### 3..D脡PLOIEMENT SUR GITHUB 馃懢

</details>

<b><strong><summary align="center" style="color: Yello;">D茅ployer via Workflow 馃懆馃従鈥嶐煉�</summary></strong></b>
<p style="text-align: center; font-size: 1.2em;">
 
<h8>Copiez le code du workflow, puis forkez le d茅p么t, modifiez le fichier de configuration, ajoutez l'ID de session, puis enregistrez. Ensuite, cliquez sur l鈥檕nglet 鈥淎ctions鈥� du d茅p么t, cliquez sur 鈥淒茅marrer un nouveau workflow鈥�, collez le code du workflow, renommez `main.yml` en `deploy.yml` et sauvegardez.</h8>

<h3 align-"center">鈿狅笍 Important</h3>
<h6 align-"center">Attention ! Nous ne sommes pas responsables si votre compte GitHub est suspendu en utilisant cette m茅thode. Il est conseill茅 de ne pas utiliser cette m茅thode sur des comptes r茅cents. Les comptes cr茅茅s il y a un an ou plus n'ont pas encore rencontr茅 de probl猫me. Ce workflow fonctionne pendant 6 heures seulement, vous devrez le red茅ployer ensuite.</h6>

name: Node.js CI

on: push: branches: - main pull_request: branches: - main

jobs: build:

runs-on: ubuntu-latest

strategy:
  matrix:
    node-version: [20.x]

steps:
- name: Cloner le d茅p么t
  uses: actions/checkout@v3

- name: Installer Node.js
  uses: actions/setup-node@ttgt
