<p align="center">
  <a href="https://www.dyne.org">
    <img alt="visual-petition-demo" src="https://jaromil.dyne.org/img/dyne.png" width="250" />
  </a>
</p>

<h1 align="center">
  visual-petition-demo</br></br>
  <sub>:postbox: Step by step DDDC petition signing & saving zencode smart contracts over sawtooth hyperledger</sub>
</h1>
  
<p align="center">
  <a href="https://travis-ci.com/DECODEproject/visual-petition-demo">
    <img src="https://travis-ci.com/DECODEproject/visual-petition-demo.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://dyne.org">
    <img src="https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%9D%A4%20by-Dyne.org-blue.svg" alt="Dyne.org">
  </a>
</p>

<h4 align="center">
  <a href="#video_game-quick-start">:video_game: Quick start</a>
  <span> • </span>
  <a href="#wrench-configuration">:wrench: Configuration</a>
  <span> • </span>
  <a href="#heart_eyes-acknowledgements">:heart_eyes: Acknowledgements</a>
  <span> • </span>
  <a href="#globe_with_meridians-links">:globe_with_meridians: Links</a>
  <span> • </span>
  <a href="#busts_in_silhouette-contributing">:busts_in_silhouette: Contributing</a>
  <span> • </span>
  <a href="#briefcase-license">:briefcase: License</a>
</h4>


:construction: Zenroom is a software part of the [DECODE project](https://decodeproject.eu) about data-ownership and [technological sovereignty](https://www.youtube.com/watch?v=RvBRbwBm_nQ). Our effort is that of improving people's awareness of how their data is processed by algorithms, as well facilitate the work of developers to create along [privacy by design principles](https://decodeproject.eu/publications/privacy-design-strategies-decode-architecture) using algorithms that can be deployed in any situation without any change.


<details>
 <summary><strong>:triangular_flag_on_post: Table of Contents</strong> (click to expand)</summary>

* [Quick start](#video_game-quick-start)
* [Configuration](#wrench-configuration)
* [Acknowledgements](#heart_eyes-acknowledgements)
* [Links](#globe_with_meridians-links)
* [Contributing](#busts_in_silhouette-contributing)
* [License](#briefcase-license)
</details>

***
## :video_game: Quick start

To start using visual-petition-demo just 
```bash
npm run dev
```

***
## :wrench: Configuration

To setup the address of the sawtooth server you need to set two enviroment variable or a `.env` file equally readed.
Priority is on system defined env variables (.env are overwritten)

| name | default |
| ---- | ------- |
| **SAWTOOTH_SERVER** | `localhost` | 
| **SAWTOOTH_PORT** | `8090` | 


***
## :heart_eyes: Acknowledgements

Copyright :copyright: 2019 by [Dyne.org](https://www.dyne.org) foundation, Amsterdam

Designed, written and maintained by Puria Nafisi Azizi.

<img src="https://zenroom.dyne.org/img/ec_logo.png" width="150" alt="Project funded by the European Commission">

This project is receiving funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement nr. 732546 (DECODE).


***
## :globe_with_meridians: Links

https://zenroom.dyne.org/

https://dyne.org/

https://www.decodeproject.eu/

https://sawtooth.hyperledger.org/


***
## :busts_in_silhouette: Contributing

Please first take a look at the [Dyne.org - Contributor License Agreement](CONTRIBUTING.md) then

1.  :twisted_rightwards_arrows: [FORK IT](../../fork)
2.  Create your feature branch `git checkout -b feature/branch`
3.  Commit your changes `git commit -am 'Add some fooBar'`
4.  Push to the branch `git push origin feature/branch`
5.  Create a new Pull Request
6.  :pray: Thank you


***
## :briefcase: License
    visual-petition-demo
    Copyright (c) 2019 Dyne.org foundation, Amsterdam

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
