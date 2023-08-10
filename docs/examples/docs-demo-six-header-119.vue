<template>
<div class="demo my-app">

        <six-root>
          <six-header show-search slot="header" shift-content>
            
            <six-search-field slot="search-field" placeholder="Search for some 'a' ..." clearable>
              <div id="search-results"></div>
            </six-search-field>
            
            <six-icon-button slot="notifications" name="notifications_none">
              <six-badge type="danger" pill>99</six-badge>
            </six-icon-button>
            
            <six-menu slot="app-switcher-menu">
              <six-menu-item checked>Custody</six-menu-item>
              <six-menu-item>Swiss Interbank Clearing</six-menu-item>
              <six-menu-item>Tri-Party Agent</six-menu-item>
              <six-menu-item>Financial Information</six-menu-item>
            </six-menu>
            
            <six-menu slot="profile-menu">
              <six-menu-item><b>Cat Kittens</b><br>cat.kitty.kittens@themCatsBeCool.com</six-menu-item>
              <six-menu-item><b>Language</b><br><six-language-switcher></six-language-switcher></six-menu-item>
              <six-menu-item>Change password</six-menu-item>
              <six-menu-item id="logout">Logout</six-menu-item>
            </six-menu>
            
            <six-avatar               image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              slot="profile-avatar"
            >
            </six-avatar>
            

            <six-icon-button name="shopping_cart" ></six-icon-button>
          </six-header>
          <section slot="main">
            <six-card>
              <h1>Main content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque blanditiis culpa cum earum error,
                fuga laboriosam nam nisi pariatur rem tempora unde voluptatem? Consequuntur dicta fugit numquam
                obcaecati perferendis?
              </p>
            </six-card>
          </section>
        </six-root>

        <six-dialog label="Dialog" class="dialog-overview">
          <pre></pre>
          <six-button slot="footer" type="primary">Close</six-button>
        </six-dialog>

        

        
      
</div>
</template>
<style>

          section[slot='main'] six-card {
            width: 100%;
          }

          six-search-field div article {
            background-color: var(--six-color-white);
            padding: 0.6rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-header-119',
  mounted() { 
          const el = Object.entries({
            header: 'six-header',
            dialog: 'six-dialog',
            dialogClose: 'six-dialog six-button',
            search: 'six-search-field',
            searchResults: 'six-search-field div',
            notifications: '[slot="notifications"]',
            notificationsBadge: 'six-badge',
            logout: '#logout',
          }).reduce((acc, [k, v]) => ({ ...acc, [k]: document.querySelector(v) }), {});

          // logging
          const log = (event) => {
            if (event.detail?.selectedLabel?.trim() === 'Language') {
              return;
            }
            el.dialog.label = event.type;
            el.dialog.querySelector('pre').innerHTML = JSON.stringify(event.detail, null, 2);
            el.dialog.show();
          };

          el.header.addEventListener('six-header-hamburger-menu-clicked', log);
          el.header.addEventListener('six-header-app-name-clicked', log);
          el.header.addEventListener('six-header-app-switcher-select', log);
          el.header.addEventListener('six-header-profile-select', log);
          el.notifications.addEventListener('click', log);

          // close dialog
          el.dialogClose.addEventListener('click', () => el.dialog.hide());

          // search
          el.search.addEventListener('six-search-field-change', ({ detail }) => {
            const term = detail.value;
            getResults(term).then((results) => {
              el.searchResults.innerHTML = results
                .map((result) => {
                  const highlighted = result.replaceAll(term, `<b>${term}</b>`);
                  return `<article>${highlighted} <six-button type="link">...</six-button></article>`;
                })
                .join('');
            });
          });

          const text =
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eveniet labore nemo nihil quae soluta sunt temporibus vitae voluptas voluptatem? Amet eius eveniet libero, minus odio officia pariatur provident tenetur.';

          const getResults = (value) => {
            const MAX_ITEMS = 3;
            const TIMEOUT = 1000;
            return new Promise((resolve) => {
              const results = value
                ? text
                    .split([', '])
                    .filter((item) => item.includes(value.trim()))
                    .slice(0, MAX_ITEMS)
                : [];
              setTimeout(() => resolve(results), TIMEOUT);
            });
          };

          // logout
          el.logout.addEventListener('click', (event) => {
            event.stopPropagation();
            el.header.remove();
          });

          // notifications
          let count = 99;

          const updateNotifications = () =>
            setTimeout(() => {
              const delta = getRandomInt(-9, 9);
              count += count + delta >= 0 && count + delta <= 99 ? delta : 0;
              el.notificationsBadge.innerText = count;
              updateNotifications();
            }, getRandomInt(300, 3000));

          // MDN
          const getRandomInt = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
          };

          updateNotifications();
         }
}
</script>