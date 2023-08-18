<template>
<div class="demo my-app">

        <div style="border: solid 1px #f6f6f6">
          <div style="display: flex">
            <six-input               placeholder="search for an icon..."
              style="margin-bottom: 1em; width: 100%"
              id="icon-search"
            ></six-input>
          </div>
          <div id="icon-showcase" style="display: flex; flex-wrap: wrap; height: 70vh; overflow: scroll"></div>
        </div>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-picto-201',
  mounted() { 
          const icons =
            'clientesyusuarios;configuracion-de-servicio;copy;external-link;gestion-de-fallidos;gestion-de-instrucciones;gestion-de-pago;home;info;movie-camera;reporting;search;lock;find-in-page;sentiment-dissatisfied;mail-copy;person;person-business;person-client;person-callcenter;person-group;wc-men;wc-woman;wc-handicap;micro-payments;robotics;machine-learning;robo-advisor;social-trading;wearables;star;analyse;tachometer;mobile-payment;office;currency;simple-integration;wallet;scales;responsive-design;wlan;foreign-exchange;augmented-reality;shield;rain;factory;snow;paris;rocket;x;temperature;cornet;popsicle;coffee;croissant;cupcake;bank;ear;drop;apple;flash;data-mapping;heart;swiss;tool;hashtag;car;business;flag;bill;sun;signal;airplane;plus;minus;lab;privacy;screen;usb;tokenization;hand;like;ecommerce;bell;webshop;psp;block;bull-bear;desktop;pay-points;punch-card;ticket;gift;statistic;stocks;liquid;markets;visibility;laptop-outline;relaxing;lounge;paninoteca;cleaning;ambulance;bilateral;focus;navigation;headphones;anchor;server;stairs;beacon;coupon;qr;shop;sound;unlock;pencil;touch;bone;social-days;gamepad;astronaut-outline;planet;diamond;fence;stop;happy;sad;guide;tablet;crown;more;play;pause;map;viking;bluetooth;cam;buggy;bee;telephone;barcode;battery;giftcard;sextant;softwarepackage;service-center;cost-reduction;international-connectivity;cyber-security;telescope;storage;seal;stock;fax;labyrinth;viena;client-receipt;gprs-lan;lines;realtime;target;disc;outsorcing;ethernet;gprs;monitoring;wlan-bluetooth;extinguisher;mountain;carabiner;soc;chf-eur;printer;eur-dollar;dws;cup;binoculars;beat;snowflake;snowman;agile;dog;hacker-security;rabbit;cap;lighthouse;dumbbell;sailboat;backoffice;stopwatch;piechart;megaphone;flipchart;mail;spirit;microphone;alert;fraud-free;lunch-learn;genie;click-return;click-collect;recurring-payments;ai;file;qr-scanner;split;generic;process;suitcase;capsule;tin;pet;bottle;cake;file-text;flower;fingerprint;pig;paddle;package;connectivity;crystal-ball;TPP;paragraph;calendar;book;rss;coins;banknote;cash;cashless;card;clock;leaf;flexibility;piggy-bank;stability;lightbulb;success;global;gears;cheveron-right;map-marker;share;exchange;download;exclamation;check;question;trash;warning;arrow-right;skull;berlin;london;zurich;handshake;puzzle;projector;speechbubble;cloud;key;glass;arrow-up;diversify;no-smoking;smoking;surveillance;arrow-down;calculator;parking;train;contactless;glasses;way-up;umbrella;cash-machine;terminal;mobile-terminal;cash-register;shopping-cart;upload;funnel;rock;shopping-cart-download;shopping-cart-chf;big-data;dna;blockchain;crowdfunding;cryptocurrency;identity-management;iot;drop-zone;menu';
          let iconSearch = document.querySelector('#icon-search');

          const showcase = document.getElementById('icon-showcase');
          showcase.innerHTML = icons
            .split(';')
            .map(
              (i) =>
                `<div data-option="${i}" style="margin: 1em; padding: 1em; height: 7.5em; width: 10em; text-align: center; background-color: rgba(164,164,164,0.04);"><six-picto size="large">${i}</six-picto><div style="padding: 0.5em;">${i}</div></div>`
            )
            .join('\n');

          iconSearch.addEventListener('six-input-input', (event) => {
            Array.from(document.getElementById('icon-showcase').children).forEach((n) => {
              const iconLabel = n.getAttribute('data-option');
              const searchTerms = iconSearch.value.trim().split(' ');
              const labelContainsAllSearchTerms =
                searchTerms.filter((s) => iconLabel.includes(s)).length === searchTerms.length;
              if (!labelContainsAllSearchTerms) {
                n.style.display = 'none';
              } else {
                n.style.display = 'initial';
              }
            });
          });
         }
}
</script>