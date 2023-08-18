<template>
<div class="demo my-app">

        <div class="six-root-wrapper">
          <six-root stage="PROD" style="height: 100%" version="PROD-1.2.3">
            <six-header shift-content="true" slot="header">
              
              <six-search-field slot="search-field">
                <div></div>
              </six-search-field>
              
              <six-icon-button name="notifications_none" slot="notifications">
                <six-badge pill type="danger">99</six-badge>
              </six-icon-button>
              
              <six-menu slot="app-switcher-menu">
                <six-menu-item>LongAppName1</six-menu-item>
                <six-menu-item>LongAppName2</six-menu-item>
                <six-menu-item>VeryVeryLongApp3</six-menu-item>
                <six-menu-item>App4</six-menu-item>
              </six-menu>
              
              <six-menu slot="profile-menu">
                <six-menu-item><b>Cat Kittens</b><br>cat.kitty.kittens@themCatsBeCool.com</six-menu-item>
                <six-menu-item>Change password</six-menu-item>
                <six-menu-item>Logout</six-menu-item>
              </six-menu>
              
              <six-avatar                 image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                slot="profile-avatar"
              >
              </six-avatar>
            </six-header>

            <six-sidebar open position="left" slot="left-sidebar">
              <six-sidebar-item-group icon="description" name="Upload">
                <six-sidebar-item>Data</six-sidebar-item>
                <six-sidebar-item>History</six-sidebar-item>
                <six-sidebar-item-group icon="settings" name="Settings">
                  <six-sidebar-item>Data</six-sidebar-item>
                  <six-sidebar-item>History</six-sidebar-item>
                </six-sidebar-item-group>
              </six-sidebar-item-group>
              <six-sidebar-item-group icon="task" name="Tasks">
                <six-sidebar-item>Open</six-sidebar-item>
                <six-sidebar-item>Closed</six-sidebar-item>
              </six-sidebar-item-group>
              <six-sidebar-item-group icon="ac_unit" name="Transactions"></six-sidebar-item-group>
              <six-sidebar-item-group icon="settings" name="Reclaims"></six-sidebar-item-group>
              <six-sidebar-item-group icon="description" name="Upload">
                <six-sidebar-item>Data</six-sidebar-item>
                <six-sidebar-item>History</six-sidebar-item>
                <six-sidebar-item-group icon="settings" name="Settings">
                  <six-sidebar-item>Data</six-sidebar-item>
                  <six-sidebar-item>History</six-sidebar-item>
                </six-sidebar-item-group>
              </six-sidebar-item-group>
              <six-sidebar-item-group icon="description" name="Upload">
                <six-sidebar-item>Data</six-sidebar-item>
                <six-sidebar-item>History</six-sidebar-item>
                <six-sidebar-item-group icon="settings" name="Settings">
                  <six-sidebar-item>Data</six-sidebar-item>
                  <six-sidebar-item>History</six-sidebar-item>
                </six-sidebar-item-group>
              </six-sidebar-item-group>
              <six-sidebar-item-group icon="task" name="Tasks">
                <six-sidebar-item>Open</six-sidebar-item>
                <six-sidebar-item>Closed</six-sidebar-item>
              </six-sidebar-item-group>
              <six-sidebar-item-group icon="ac_unit" name="Transactions"></six-sidebar-item-group>
              <six-sidebar-item-group icon="settings" name="Reclaims"></six-sidebar-item-group>
              <six-sidebar-item-group icon="description" name="Upload">
                <six-sidebar-item>Data</six-sidebar-item>
                <six-sidebar-item>History</six-sidebar-item>
                <six-sidebar-item-group icon="settings" name="Settings">
                  <six-sidebar-item>Data</six-sidebar-item>
                  <six-sidebar-item>History</six-sidebar-item>
                </six-sidebar-item-group>
              </six-sidebar-item-group>
            </six-sidebar>

            <div slot="main">
              <p>Content</p>
              <div>
                <six-button id="show-tasks">Show some tasks...</six-button>
                <six-button id="toggle-text">Toggle some text...</six-button>
              </div>
              <section id="text-section">
                <h1>Lorem ipsum</h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi facere facilis incidunt quia veniam?
                Accusamus aperiam assumenda, at aut blanditiis culpa cupiditate debitis, deleniti dolores earum
                exercitationem facere facilis iste labore laborum nemo obcaecati quae qui recusandae reprehenderit
                repudiandae sapiente sunt ullam velit vero vitae voluptas! Aperiam asperiores aspernatur dolore eveniet,
                exercitationem fugiat illum in iusto mollitia numquam obcaecati provident quas quasi tempore voluptas!
                Esse et ex libero, molestias omnis quae tempore tenetur. Delectus harum incidunt iusto magni mollitia
                necessitatibus perferendis perspiciatis quis soluta veritatis. Amet aspernatur fugiat impedit laborum
                maiores quae? Ad amet cupiditate dolore dolorum iste magnam nulla numquam officia repudiandae vitae!
                Blanditiis exercitationem fugit molestiae nihil odio quam quasi quod quos recusandae totam. Aliquid
                autem consequatur consequuntur dicta dignissimos eligendi enim esse ex excepturi facilis harum hic illum
                iste laudantium minima molestias mollitia nisi nostrum odio officiis perspiciatis, placeat possimus quam
                quibusdam sint temporibus tenetur totam veniam vero voluptates. Adipisci atque delectus error facilis id
                ipsum omnis optio pariatur, rem similique? Commodi cupiditate expedita impedit minus placeat quae quos
                similique vitae! Animi, aperiam assumenda at aut autem consequatur culpa cumque cupiditate distinctio
                dolores eaque, ipsam iusto laudantium molestiae nam nesciunt nisi officia optio placeat quae quaerat quo
                quos ut vero voluptatem. Accusantium commodi ea et illo magni nemo nobis reprehenderit. Aliquam aperiam
                aspernatur assumenda commodi cupiditate ea exercitationem facilis hic impedit ipsa itaque, maiores
                minima molestiae nesciunt nisi odit officia omnis pariatur perferendis quas quibusdam quos reiciendis
                sequi ullam veritatis. Perspiciatis sed totam voluptate! A amet dignissimos dolorem maiores maxime
                molestiae, numquam obcaecati perspiciatis quidem quos sapiente velit voluptatum! Alias aperiam
                aspernatur culpa ea enim eum excepturi, exercitationem expedita fuga inventore ipsum itaque nesciunt
                numquam praesentium quisquam, quod quos sed sunt temporibus voluptatum. Cum, natus possimus. Aut,
                debitis earum et explicabo facere harum mollitia officiis pariatur quae quas ratione reiciendis sunt
                ullam! Atque, distinctio earum eius enim esse explicabo, illo ipsam molestias odit porro quaerat quia
                ratione sed similique soluta suscipit veritatis. A amet assumenda aut, corporis culpa dolores esse et
                eum eveniet id ipsam iste laborum minima nobis, officiis quae quas recusandae, voluptatem. Aliquam
                beatae eum minus molestiae nulla recusandae voluptatum? Adipisci asperiores aspernatur autem beatae
                debitis delectus deleniti dicta dolor dolores eius, eligendi enim esse expedita explicabo fugiat id
                inventore ipsa iste itaque modi mollitia nobis nulla obcaecati odit optio placeat quia quis ratione
                reiciendis sapiente sed similique soluta, sunt temporibus ut veniam, voluptatibus! Cumque dolorem
                exercitationem molestias numquam sunt tempore ut? Beatae debitis esse facilis labore minus natus nisi!
                Dolor dolore excepturi expedita ipsum modi nostrum odio quasi sint temporibus ullam. Cumque esse
                praesentium saepe. Alias amet debitis deserunt dolor, doloremque enim, eum ex fugit illo in laudantium
                nemo nesciunt nulla pariatur praesentium quos rem saepe sint soluta ullam vel, veniam voluptate
                voluptatum. Accusantium aliquam aliquid assumenda at atque deserunt distinctio dolor, error esse eveniet
                ex facere fugiat incidunt ipsa labore maxime minima natus necessitatibus nihil, nobis non numquam odio
                odit officia provident quas qui quia quisquam recusandae repudiandae rerum sed soluta unde ut veniam
                veritatis vero. Ad consequatur dolorem eius fuga in ipsam iure libero mollitia nemo similique!
                Architecto deleniti itaque minus nisi omnis tempore? Aspernatur corporis dignissimos dolor doloremque
                excepturi itaque, nihil numquam, porro quam quasi qui quo repudiandae temporibus. Ab amet animi eius
                harum magni nam quaerat, quas quibusdam? Culpa deleniti dolorum enim excepturi facere iure magni
                mollitia obcaecati vitae. Ab accusamus adipisci, alias amet aspernatur aut consectetur consequatur
                deserunt dolor dolorem ducimus esse ex hic in iste magni maxime modi molestias nesciunt nulla, odio
                officia optio quasi quia rerum sint suscipit veritatis vitae voluptate, voluptatum! Labore odit quis
                vitae! Ab, accusamus aliquam aliquid amet architecto aspernatur aut autem blanditiis cupiditate debitis
                dolores dolorum earum eius eos error, esse ex explicabo fuga in ipsa iste iure laborum minima minus
                modi, necessitatibus nobis obcaecati porro quam qui quod reprehenderit repudiandae rerum sit tempore
                vero voluptatibus? A, ab aperiam autem consequatur dignissimos enim eos et harum iure necessitatibus
                neque nobis praesentium quos, sunt, voluptatem. Ad aliquam asperiores modi quia quis vitae,
                voluptatibus. A architecto id laborum magnam quaerat, sequi sint vitae. Accusantium adipisci amet
                aspernatur culpa debitis deleniti dignissimos ducimus ea eaque enim incidunt, ipsa, iste libero
                necessitatibus nihil nulla obcaecati odio perferendis quas quia quo tempore tenetur unde. A, architecto
                aspernatur aut corporis dolor excepturi fuga iusto modi nisi obcaecati, omnis porro, provident quae
                ratione rerum sapiente ut voluptatem! Ab adipisci alias consequatur debitis eligendi explicabo fugit hic
                illo incidunt inventore iure laudantium, magnam minus nihil nobis non placeat porro quae, quasi quidem
                quo quos repudiandae sapiente sed vel, velit veritatis voluptatum. Accusantium aliquam culpa delectus
                fugiat numquam. Aliquam corporis expedita, facere harum laborum quod quos. Aspernatur beatae culpa ex
                excepturi exercitationem hic perferendis quibusdam repellendus! Ab aperiam architecto assumenda at ea
                esse, illum impedit natus, obcaecati officia optio, possimus praesentium quasi ratione repellat
                voluptatem voluptates. Amet at commodi consequatur deleniti, dolorem dolorum ducimus eligendi excepturi
                facere itaque iure laborum magnam modi molestiae, molestias mollitia necessitatibus neque nesciunt
                numquam odio officia placeat qui quidem quisquam repudiandae rerum suscipit tempore vitae voluptates
                voluptatibus. Adipisci aut, beatae commodi consectetur natus possimus sequi tempora voluptatum.
                Asperiores assumenda at est ex, iure laborum laudantium maxime praesentium quidem reiciendis repellendus
                sint tenetur voluptatibus! Accusantium animi atque consequuntur corporis deserunt dignissimos dolore
                dolorem ducimus enim est facere harum ipsam iste labore magnam molestias mollitia nesciunt, nostrum
                perspiciatis porro quis quos recusandae reiciendis suscipit ut veritatis voluptas voluptatum. Deleniti
                obcaecati quo veritatis. Expedita fuga fugiat, hic optio possimus sequi ut. Ad cumque earum fugit hic
                itaque, maxime natus omnis quaerat quibusdam quos totam velit voluptatem voluptates. A alias assumenda
                delectus deleniti facilis fugit, iste iusto pariatur perspiciatis praesentium. Accusantium alias animi
                architecto asperiores at autem cupiditate eligendi ex itaque magni, molestiae molestias obcaecati optio,
                perferendis possimus provident quaerat quod, sed vel voluptates. Alias aperiam aspernatur corporis dicta
                dolor dolores ducimus eaque eius esse hic libero molestiae nemo nihil omnis praesentium quae quas quasi
                quis quos ratione recusandae, sed, unde, veniam vitae voluptatem. Cum deserunt dicta dolor
                exercitationem quod quos.
              </section>
            </div>

            <six-sidebar position="right" slot="right-sidebar">
              <six-card>
                <h3>Task</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
                  delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
                  voluptas.
                </p>
              </six-card>
              <six-card>
                <h3>Task</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
                  delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
                  voluptas.
                </p>
              </six-card>
              <six-card>
                <h3>Task</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
                  delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
                  voluptas.
                </p>
              </six-card>
              <six-card>
                <h3>Task</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
                  delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
                  voluptas.
                </p>
              </six-card>
              <six-card>
                <h3>Task</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
                  delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
                  voluptas.
                </p>
              </six-card>
              <six-card>
                <h3>Task</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
                  delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
                  voluptas.
                </p>
              </six-card>
              <six-card>
                <h3>Task</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
                  delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
                  voluptas.
                </p>
              </six-card>
              <six-card>
                <h3>Task</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
                  delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
                  voluptas.
                </p>
              </six-card>
              <six-card>
                <h3>Task</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
                  delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
                  voluptas.
                </p>
              </six-card>
              <six-card>
                <h3>Task</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam, beatae debitis
                  delectus deleniti eius enim est ex facilis id incidunt modi nostrum odio, repudiandae sed velit vitae,
                  voluptas.
                </p>
              </six-card>
            </six-sidebar>

            <six-footer slot="footer">Copyright © 2021-present SIX Group</six-footer>
          </six-root>
        </div>

        <six-drawer class="drawer-overview" label="Drawer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <six-button slot="footer">Close</six-button>
        </six-drawer>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-root-223',
  mounted() { 
          (() => {
            const getElements = (e) =>
              Object.entries(e).reduce(
                (e, [r, t]) => ({
                  ...e,
                  [r]: Array.isArray(t)
                    ? t.flatMap((s) => Array.from(document.querySelectorAll(s)))
                    : document.querySelector(t),
                }),
                {}
              );

            const Select = getElements({
              header: 'six-header',
              leftSidebar: 'six-sidebar[slot="left-sidebar"]',
              tasksButton: '#show-tasks',
              textButton: '#toggle-text',
              textSection: '#text-section',
              rightSidebar: 'six-sidebar[slot="right-sidebar"]',
              drawer: 'six-drawer',
              cards: ['six-sidebar[slot="right-sidebar"] six-card'],
            });

            Select.header.addEventListener('six-header-hamburger-menu-clicked', () =>
              Select.leftSidebar.toggleAttribute('open')
            );

            Select.leftSidebar.addEventListener('six-sidebar-hide', () => (Select.header.openHamburgerMenu = false));

            Select.leftSidebar.addEventListener('six-sidebar-show', () => (Select.header.openHamburgerMenu = true));

            Select.tasksButton.addEventListener('click', () => Select.rightSidebar.toggleAttribute('open'));

            Select.cards.forEach((card) => {
              card.addEventListener('click', () => Select.drawer.toggleAttribute('open'));
            });

            Select.textButton.addEventListener('click', () => {
              Select.textSection.style.display = Select.textSection.style.display === 'none' ? 'block' : 'none';
            });
          })();
         }
}
</script>